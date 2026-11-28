import type { NextRequest } from "next/server";
import { getCandidate, getResearchSummary, toSummary } from "@/lib/candidates/registry";
import { searchCandidates, type OfficeFilter } from "@/lib/candidates/search";
import { evaluateCompatibility } from "@/lib/compare/compatibility";

const OFFICES = new Set(["all", "president", "governor", "senator"]);
const RACE_PATTERN = /^(president|governor:[a-z0-9-]+|senator:[a-z0-9-]+)$/;

/**
 * GET /api/candidates?q=&office=&race=&against=&limit=&offset=
 *
 * Searches the candidate registry. When `against` is a candidate id, each
 * result is annotated with whether it can be compared with that candidate,
 * so pickers never silently offer an incompatible choice.
 */
export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams;
  const office = (p.get("office") ?? "all") as OfficeFilter;
  if (!OFFICES.has(office)) {
    return Response.json({ error: "Invalid office filter." }, { status: 400 });
  }
  const race = p.get("race") ?? undefined;
  if (race && !RACE_PATTERN.test(race)) {
    return Response.json({ error: "Invalid race." }, { status: 400 });
  }
  const limit = Number.parseInt(p.get("limit") ?? "24", 10);
  const offset = Number.parseInt(p.get("offset") ?? "0", 10);
  const against = p.get("against") ? getCandidate(p.get("against")) : null;

  const { results, total, outsideFilter } = searchCandidates({
    query: p.get("q") ?? "",
    office,
    raceKey: race,
    limit: Number.isFinite(limit) ? limit : 24,
    offset: Number.isFinite(offset) ? offset : 0,
    exclude: against?.id,
  });

  return Response.json(
    {
      total,
      outsideFilter,
      results: results.map((c) => {
        const summary = toSummary(c);
        if (!against) return summary;
        const compat = evaluateCompatibility(against, c, getResearchSummary);
        return {
          ...summary,
          compatibility: {
            allowed: compat.allowed,
            comparability: compat.comparability,
            label: compat.shortLabel,
            reason: compat.allowed ? null : compat.reasons[0],
          },
        };
      }),
    },
    { headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=600" } }
  );
}
