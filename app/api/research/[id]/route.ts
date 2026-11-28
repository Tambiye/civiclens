import type { NextRequest } from "next/server";
import { getCandidate } from "@/lib/candidates/registry";
import { loadResearch } from "@/lib/research/load";
import { CATEGORY_KEYS, type CategoryKey } from "@/lib/research/types";

/**
 * GET /api/research/<candidateId>?category=<key>
 *
 * Returns the deep analysis for one candidate and category. Comparison pages
 * render the quick-read summaries on the server and fetch this on demand when
 * a reader expands "Read the full analysis", which keeps pages light.
 */
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = request.nextUrl.searchParams.get("category") as CategoryKey | null;
  if (!getCandidate(id)) {
    return Response.json({ error: "Unknown candidate." }, { status: 404 });
  }
  if (!category || !CATEGORY_KEYS.includes(category)) {
    return Response.json({ error: "Unknown category." }, { status: 400 });
  }
  const result = await loadResearch(id);
  if (result.state !== "ok") {
    return Response.json(
      { error: result.state === "missing" ? "No research for this candidate yet." : result.message },
      { status: result.state === "missing" ? 404 : 500 }
    );
  }
  const c = result.research.categories[category];
  if (!c) return Response.json({ error: "No research for this category yet." }, { status: 404 });
  return Response.json(
    {
      analysis: c.analysis,
      metrics: c.metrics ?? [],
      strengths: c.strengths,
      limitations: c.limitations,
      unknowns: c.unknowns,
    },
    { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } }
  );
}
