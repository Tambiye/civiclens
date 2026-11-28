import type { Candidate, OfficeType } from "@/lib/candidates/types";
import type { ResearchSummary } from "@/lib/candidates/registry";
import { CATEGORIES, type Relevance } from "./categories";
import type { CategoryKey } from "@/lib/research/types";

/**
 * Comparison eligibility engine.
 *
 * Decides whether two candidates may be compared, how directly, in which
 * modes, on which categories, and whether enough evidence exists. The result
 * is symmetric: swapping A and B never changes it.
 */

export const COMPARISON_MODES = [
  "same-office",
  "performance-readiness",
  "career",
  "policy",
  "legislative",
] as const;
export type ComparisonMode = (typeof COMPARISON_MODES)[number];

export const MODE_LABELS: Record<ComparisonMode, string> = {
  "same-office": "Same office",
  "performance-readiness": "Performance vs readiness",
  career: "Career comparison",
  policy: "Policy comparison",
  legislative: "Legislative comparison",
};

export const MODE_DESCRIPTIONS: Record<ComparisonMode, string> = {
  "same-office":
    "Both are judged on their records, relevant experience, policies, leadership and outcomes for the same type of office.",
  "performance-readiness":
    "The incumbent is judged on decisions and results in office. The challenger is judged on track record, proposals and capacity to deliver. Promises are never treated as results.",
  career:
    "Compares whole political and professional careers. Responsibilities, powers, budgets and jurisdictions differed, so read each record in its own context.",
  policy:
    "Compares stated positions and proposals issue by issue, including specificity, funding and feasibility.",
  legislative:
    "Compares lawmaking, oversight, committee work and representation. The number of bills sponsored is not a measure of effectiveness.",
};

export type Comparability = "direct" | "contextual" | "not-comparable";

export interface EvidenceCoverage {
  status: string;
  documented: number;
  insufficient: number;
  sources: number;
}

export interface CategoryApplicability {
  key: CategoryKey;
  relevance: Relevance;
  notes: string[];
}

export interface CompatibilityResult {
  allowed: boolean;
  comparability: Comparability;
  /** True when both are contesting the same seat (opponents). */
  sameRace: boolean;
  defaultMode: ComparisonMode;
  availableModes: ComparisonMode[];
  /** Why the comparison is (or is not) allowed. */
  reasons: string[];
  /** Context the reader must keep in mind. */
  contextNotes: string[];
  /** Short label for pickers, e.g. "Same race". */
  shortLabel: string;
  categories: CategoryApplicability[];
  evidence: {
    byId: Record<string, EvidenceCoverage>;
    sufficient: boolean;
    note: string | null;
  };
}

const OFFICE_NOUN: Record<OfficeType, string> = {
  president: "the presidency",
  governor: "governor",
  senator: "the Senate",
};

const CONTESTING: Record<OfficeType, string> = {
  president: "presidential candidate",
  governor: "governorship candidate",
  senator: "senatorial candidate",
};

function coverage(summary: ResearchSummary | null): EvidenceCoverage {
  if (!summary) return { status: "NOT_STARTED", documented: 0, insufficient: 15, sources: 0 };
  const e = summary.evidence ?? {};
  return {
    status: summary.status,
    documented: (e.strong ?? 0) + (e.moderate ?? 0) + (e.limited ?? 0),
    insufficient: e.insufficient ?? 0,
    sources: summary.sources,
  };
}

function hasUsableResearch(summary: ResearchSummary | null): boolean {
  return !!summary && coverage(summary).documented >= 3;
}

function applicableCategories(a: Candidate, b: Candidate): CategoryApplicability[] {
  const rank: Record<Relevance, number> = { core: 0, adapted: 1, limited: 2 };
  return CATEGORIES.map((def) => {
    const ra = def.relevance[a.office];
    const rb = def.relevance[b.office];
    // The comparison is only as relevant as its least relevant side.
    const relevance = rank[ra] >= rank[rb] ? ra : rb;
    const notes = [
      ...new Set(
        [a.office, b.office]
          .map((o) => def.relevanceNote?.[o])
          .filter((n): n is string => !!n)
      ),
    ];
    return { key: def.key, relevance, notes };
  });
}

function blocked(
  reason: string,
  extra: Partial<CompatibilityResult> = {}
): CompatibilityResult {
  return {
    allowed: false,
    comparability: "not-comparable",
    sameRace: false,
    defaultMode: "career",
    availableModes: [],
    reasons: [reason],
    contextNotes: [],
    shortLabel: "Not comparable",
    categories: [],
    evidence: { byId: {}, sufficient: false, note: null },
    ...extra,
  };
}

/**
 * Evaluate a pair. Inputs are normalised to a canonical order first so the
 * outcome cannot depend on which side a candidate was selected on.
 */
export function evaluateCompatibility(
  first: Candidate,
  second: Candidate,
  research: (id: string) => ResearchSummary | null
): CompatibilityResult {
  if (first.id === second.id) {
    return blocked("A candidate cannot be compared with themselves. Choose two different people.");
  }
  const [a, b] = first.id < second.id ? [first, second] : [second, first];
  const ra = research(a.id);
  const rb = research(b.id);
  const byId = { [a.id]: coverage(ra), [b.id]: coverage(rb) };
  const evidenceSufficient = hasUsableResearch(ra) && hasUsableResearch(rb);
  const thin = [a, b].filter((c) => !hasUsableResearch(research(c.id)));
  const evidence = {
    byId,
    sufficient: evidenceSufficient,
    note: thin.length
      ? `${thin.map((c) => c.name).join(" and ")} ${thin.length > 1 ? "have" : "has"} not yet been researched in depth. ` +
        "Category analysis will show as evidence-limited, and no conclusions are drawn from missing data."
      : null,
  };
  const categories = applicableCategories(a, b);
  const reasons: string[] = [];
  const contextNotes: string[] = [];

  // ---------------- Same office ----------------
  if (a.office === b.office) {
    const office = a.office;
    const sameRace = a.raceKey === b.raceKey;
    const incumbents = [a, b].filter((c) => c.incumbent);

    if (sameRace) {
      reasons.push(
        office === "president"
          ? "Both are candidates for President of Nigeria, so they are direct opponents."
          : office === "governor"
            ? `Both are contesting the ${a.state} governorship, so they are direct opponents.`
            : `Both are contesting the ${a.district} senatorial seat (${a.state}), so they are direct opponents.`
      );
      if (a.party === b.party) {
        contextNotes.push(
          `Both are listed under ${a.party}. Check the candidacy status, since a party normally fields one candidate per seat.`
        );
      }
    } else {
      reasons.push(
        office === "governor"
          ? `Both are governorship candidates, but in different states (${a.state} and ${b.state}). They are not running against each other.`
          : `Both are senatorial candidates, but for different seats (${a.jurisdiction} and ${b.jurisdiction}). They are not running against each other.`
      );
      contextNotes.push(
        office === "governor"
          ? "States differ in population, budget, revenue, security conditions and economic base. Compare records in light of those differences, not as head-to-head outcomes."
          : "Constituencies differ in population, needs and political context. Compare legislative and representation records in light of those differences."
      );
    }

    const modes: ComparisonMode[] = [];
    if (sameRace && incumbents.length === 1) modes.push("performance-readiness");
    modes.push("same-office");
    if (office === "senator") modes.push("legislative");
    modes.push("policy", "career");

    if (incumbents.length === 1) {
      const inc = incumbents[0];
      contextNotes.push(
        sameRace
          ? `${inc.name} currently holds this office. Their assessment covers actual decisions and results in office. The challenger's covers track record and proposals. These are different kinds of evidence and are labelled as such.`
          : `${inc.name} currently holds office (${inc.jurisdiction}).`
      );
    }
    if (a.party !== b.party) {
      reasons.push(`They represent different parties (${a.party} and ${b.party}).`);
    }

    return {
      allowed: true,
      comparability: sameRace ? "direct" : "contextual",
      sameRace,
      defaultMode: modes[0],
      availableModes: modes,
      reasons,
      contextNotes,
      shortLabel: sameRace ? "Same race" : `Same office, different ${office === "governor" ? "state" : "seat"}`,
      categories,
      evidence,
    };
  }

  // ---------------- Different offices ----------------
  const pairLabel = `${a.name} is a ${CONTESTING[a.office]} and ${b.name} is a ${CONTESTING[b.office]}`;
  if (!hasUsableResearch(ra) || !hasUsableResearch(rb)) {
    return blocked(
      `${pairLabel}. They are contesting different offices, so they can't be compared as rivals. ` +
        "A career comparison is possible only once both have researched career records, and that research isn't available yet.",
      { categories, evidence }
    );
  }
  reasons.push(
    `${pairLabel}. They are not contesting the same office, so this is offered only as a career comparison.`
  );
  contextNotes.push(
    `${OFFICE_NOUN[a.office][0].toUpperCase()}${OFFICE_NOUN[a.office].slice(1)} and ${OFFICE_NOUN[b.office]} carry different powers, budgets and responsibilities. Read each record against the office it was earned in.`
  );
  return {
    allowed: true,
    comparability: "not-comparable",
    sameRace: false,
    defaultMode: "career",
    availableModes: ["career"],
    reasons,
    contextNotes,
    shortLabel: "Career comparison only",
    categories,
    evidence,
  };
}

export function resolveMode(
  requested: string | null | undefined,
  result: CompatibilityResult
): ComparisonMode {
  return (result.availableModes as string[]).includes(requested ?? "")
    ? (requested as ComparisonMode)
    : result.defaultMode;
}
