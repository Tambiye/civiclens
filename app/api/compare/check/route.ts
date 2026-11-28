import type { NextRequest } from "next/server";
import { getCandidate, getResearchSummary, toSummary } from "@/lib/candidates/registry";
import { evaluateCompatibility, MODE_LABELS } from "@/lib/compare/compatibility";

/**
 * GET /api/compare/check?a=<id>&b=<id>
 *
 * Resolves one or both candidate ids for the comparison builder. Returns the
 * eligibility preview when both are present. Unknown ids are reported per
 * side, so a stale link can be repaired rather than failing as a whole.
 */
export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams;
  const idA = p.get("a");
  const idB = p.get("b");
  const a = getCandidate(idA);
  const b = getCandidate(idB);
  const missing = [idA && !a ? "a" : null, idB && !b ? "b" : null].filter(Boolean);

  let compatibility = null;
  if (a && b) {
    const compat = evaluateCompatibility(a, b, getResearchSummary);
    compatibility = {
      allowed: compat.allowed,
      comparability: compat.comparability,
      sameRace: compat.sameRace,
      label: compat.shortLabel,
      reasons: compat.reasons,
      contextNotes: compat.contextNotes,
      defaultMode: compat.defaultMode,
      modes: compat.availableModes.map((m) => ({ id: m, label: MODE_LABELS[m] })),
      evidenceNote: compat.evidence.note,
    };
  }
  return Response.json(
    { a: a ? toSummary(a) : null, b: b ? toSummary(b) : null, missing, compatibility },
    { headers: { "Cache-Control": "public, max-age=60" } }
  );
}
