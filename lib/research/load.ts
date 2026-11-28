import { researchLoaders } from "@/data/research/index.generated";
import {
  CATEGORY_KEYS,
  EVIDENCE_LEVELS,
  type CandidateResearch,
  type CategoryResearch,
} from "./types";

export type ResearchLoadResult =
  | { state: "ok"; research: CandidateResearch; problems: string[] }
  | { state: "missing" }
  | { state: "error"; message: string };

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/**
 * Defensive normalisation. Files are validated at build time by
 * scripts/research/validate.mjs, but a malformed file must degrade to an
 * evidence-limited state rather than crash a comparison page.
 */
function sanitize(raw: unknown): { research: CandidateResearch; problems: string[] } | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Partial<CandidateResearch>;
  if (r.schemaVersion !== 1 || typeof r.candidateId !== "string" || !r.identity) return null;

  const problems: string[] = [];
  const categories: CandidateResearch["categories"] = {};
  for (const key of CATEGORY_KEYS) {
    const c = r.categories?.[key] as CategoryResearch | undefined;
    if (!c) continue;
    if (!EVIDENCE_LEVELS.includes(c.evidence) || typeof c.analysis !== "string") {
      problems.push(`Category "${key}" is malformed and was skipped.`);
      continue;
    }
    categories[key] = {
      ...c,
      strengths: arr(c.strengths),
      limitations: arr(c.limitations),
      unknowns: arr(c.unknowns),
      metrics: arr(c.metrics),
      sourceIds: arr(c.sourceIds),
      missing: arr(c.missing),
    };
  }

  return {
    research: {
      ...(r as CandidateResearch),
      identity: {
        ...r.identity,
        partyHistory: arr(r.identity.partyHistory),
        education: arr(r.identity.education),
        professional: arr(r.identity.professional),
      },
      career: arr(r.career),
      elections: arr(r.elections),
      categories,
      record: arr(r.record),
      plans: arr(r.plans),
      test: arr(r.test),
      sources: arr<CandidateResearch["sources"][number]>(r.sources).filter(
        (s) => !!s && /^https?:\/\//.test(s.url ?? "")
      ),
      gaps: arr(r.gaps),
    },
    problems,
  };
}

export async function loadResearch(candidateId: string): Promise<ResearchLoadResult> {
  const loader = researchLoaders[candidateId];
  if (!loader) return { state: "missing" };
  try {
    const mod = await loader();
    const parsed = sanitize(mod.default);
    if (!parsed || parsed.research.candidateId !== candidateId) {
      return { state: "error", message: "The research file for this candidate is malformed." };
    }
    return { state: "ok", ...parsed };
  } catch {
    return { state: "error", message: "The research file for this candidate could not be loaded." };
  }
}
