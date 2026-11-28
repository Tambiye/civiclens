import type { NextRequest } from "next/server";
import { toSummary } from "@/lib/candidates/registry";
import { pickRandomMatchup } from "@/lib/compare/random";
import { MODE_LABELS } from "@/lib/compare/compatibility";

const OFFICES = new Set(["all", "president", "governor", "senator"]);

/** GET /api/compare/random?office=&exclude=a|b,c|d — suggest an informative matchup. */
export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams;
  const office = p.get("office") ?? "all";
  if (!OFFICES.has(office)) {
    return Response.json({ error: "Invalid office filter." }, { status: 400 });
  }
  const exclude = (p.get("exclude") ?? "")
    .split(",")
    .filter((k) => /^[a-z0-9-]+\|[a-z0-9-]+$/.test(k))
    .slice(0, 50);

  const { matchup, message } = pickRandomMatchup({
    office: office as "all",
    exclude,
  });
  return Response.json(
    matchup
      ? {
          a: toSummary(matchup.a),
          b: toSummary(matchup.b),
          mode: matchup.mode,
          modeLabel: MODE_LABELS[matchup.mode],
          reasons: matchup.reasons,
          href: `/compare/${matchup.a.id}-vs-${matchup.b.id}`,
          message,
        }
      : { error: message },
    { status: matchup ? 200 : 404, headers: { "Cache-Control": "no-store" } }
  );
}
