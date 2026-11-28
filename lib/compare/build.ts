import type { Candidate } from "@/lib/candidates/types";
import type {
  CandidateResearch,
  CategoryBasis,
  CategoryKey,
  EvidenceLevel,
  SourceRef,
} from "@/lib/research/types";
import { CATEGORIES } from "./categories";
import type { CompatibilityResult, ComparisonMode } from "./compatibility";
import {
  PERFORMANCE_QUESTIONS,
  READINESS_QUESTIONS,
  type TestQuestion,
} from "./test-questions";

/**
 * Derives comparison-level content from two candidates' reusable research.
 * Every function here is symmetric in its treatment of the two sides: the
 * display order only decides which column a candidate appears in.
 */

export type Side = { candidate: Candidate; research: CandidateResearch | null };

export type QuickLabel =
  | "Better documented evidence"
  | "More documented experience"
  | "Record vs proposals"
  | "Requires context"
  | "Incomplete evidence"
  | "Not directly comparable"
  | "Both documented";

export interface QuickRow {
  key: CategoryKey;
  title: string;
  label: QuickLabel;
  detail: string;
  /** Candidate the label refers to (e.g. better documented), if any. */
  refersTo: string | null;
  evidence: Record<string, EvidenceLevel | "none">;
  basis: Record<string, CategoryBasis>;
}

const EVIDENCE_RANK: Record<EvidenceLevel | "none", number> = {
  none: 0,
  insufficient: 0,
  limited: 1,
  moderate: 2,
  strong: 3,
};

const MODE_ORDER: Partial<Record<ComparisonMode, CategoryKey[]>> = {
  career: ["experience", "leadership", "integrity", "promises", "finance"],
  policy: ["vision", "economy", "security", "education", "healthcare", "infrastructure", "power", "jobs", "foreign", "humanImpact"],
  legislative: ["leadership", "integrity", "experience", "vision", "promises", "finance"],
  "performance-readiness": ["promises", "economy", "security", "finance"],
};

export function orderedCategories(mode: ComparisonMode): CategoryKey[] {
  const first = MODE_ORDER[mode] ?? [];
  return [...first, ...CATEGORIES.map((c) => c.key).filter((k) => !first.includes(k))];
}

function evidenceOf(side: Side, key: CategoryKey): EvidenceLevel | "none" {
  return side.research?.categories[key]?.evidence ?? "none";
}

function basisOf(side: Side, key: CategoryKey): CategoryBasis {
  return side.research?.categories[key]?.basis ?? "none";
}

export function quickComparison(
  a: Side,
  b: Side,
  compat: CompatibilityResult
): QuickRow[] {
  const relevance = new Map(compat.categories.map((c) => [c.key, c.relevance]));
  return CATEGORIES.map((def) => {
    const ea = evidenceOf(a, def.key);
    const eb = evidenceOf(b, def.key);
    const ba = basisOf(a, def.key);
    const bb = basisOf(b, def.key);
    const ids = [a.candidate.id, b.candidate.id];
    const row = (label: QuickLabel, detail: string, refersTo: string | null = null): QuickRow => ({
      key: def.key,
      title: def.title,
      label,
      detail,
      refersTo,
      evidence: { [ids[0]]: ea, [ids[1]]: eb },
      basis: { [ids[0]]: ba, [ids[1]]: bb },
    });

    if (relevance.get(def.key) === "limited") {
      return row("Not directly comparable", "This area is largely outside the powers of the office involved.");
    }
    const ra = EVIDENCE_RANK[ea];
    const rb = EVIDENCE_RANK[eb];
    if (ra === 0 && rb === 0) {
      return row("Incomplete evidence", "Neither candidate has enough verified evidence in this category yet.");
    }
    if (ra === 0 || rb === 0) {
      const documented = ra > 0 ? a : b;
      return row(
        "Better documented evidence",
        `Only ${documented.candidate.name}'s position or record here is documented. This reflects available evidence, not performance.`,
        documented.candidate.id
      );
    }
    if (def.key === "experience") {
      const xa = a.research?.identity.hasExecutiveExperience ?? false;
      const xb = b.research?.identity.hasExecutiveExperience ?? false;
      if (xa !== xb) {
        const who = xa ? a : b;
        return row(
          "More documented experience",
          `${who.candidate.name} has held elected executive or ministerial office. Whether that experience is relevant is discussed in the analysis.`,
          who.candidate.id
        );
      }
    }
    if ((ba === "record") !== (bb === "record") && (ba === "proposal" || bb === "proposal")) {
      return row(
        "Record vs proposals",
        "One assessment rests mainly on a record in office, the other mainly on proposals. Promises are not treated as results.",
      );
    }
    if (compat.comparability !== "direct") {
      return row("Requires context", "Different jurisdictions or offices. Read each record in its own context.");
    }
    if (Math.abs(ra - rb) >= 2) {
      const better = ra > rb ? a : b;
      return row(
        "Better documented evidence",
        `${better.candidate.name}'s record here has substantially more documentation.`,
        better.candidate.id
      );
    }
    return row("Both documented", "Both have documented evidence. See the analysis for how they differ.");
  });
}

export interface Overview {
  whoTheyAre: { id: string; text: string }[];
  similarities: string[];
  differences: string[];
  coverage: string;
}

function describe(side: Side): string {
  const c = side.candidate;
  const r = side.research;
  const contesting =
    c.office === "president"
      ? "presidential candidate"
      : c.office === "governor"
        ? `governorship candidate in ${c.state}`
        : `senatorial candidate for ${c.jurisdiction}`;
  const parts = [`${c.name} is the ${c.partyName} (${c.party}) ${contesting}.`];
  if (r?.identity.currentOffice) parts.push(`Currently: ${r.identity.currentOffice}.`);
  else if (c.incumbent) parts.push("Currently holds this office.");
  const offices = (r?.career ?? []).filter((e) => e.kind === "political-office" || e.kind === "appointment");
  if (offices.length) {
    parts.push(
      `Offices held or appointments include: ${offices
        .slice(-3)
        .map((e) => `${e.title} (${e.period})`)
        .join("; ")}.`
    );
  } else if (r) {
    parts.push("Research has not found any previous elected or appointed public office.");
  }
  if (!r) {
    const facts = [c.age != null ? `age ${c.age}` : null, c.qualification ? `qualifications listed as ${c.qualification}` : null]
      .filter(Boolean)
      .join(", ");
    parts.push(
      facts
        ? `INEC-listed details: ${facts}. A full research profile has not been completed yet.`
        : "A full research profile has not been completed yet."
    );
  }
  return parts.join(" ");
}

export function buildOverview(a: Side, b: Side, compat: CompatibilityResult): Overview {
  const similarities: string[] = [];
  const differences: string[] = [];
  const ca = a.candidate;
  const cb = b.candidate;

  if (ca.raceKey === cb.raceKey) similarities.push("Both are contesting the same seat in the 2027 elections.");
  else if (ca.office === cb.office) similarities.push("Both are seeking the same type of office, in different jurisdictions.");
  if (ca.party === cb.party) similarities.push(`Both are listed under the same party (${ca.party}).`);
  else differences.push(`Different parties: ${ca.partyName} and ${cb.partyName}.`);

  const xa = a.research?.identity.hasExecutiveExperience;
  const xb = b.research?.identity.hasExecutiveExperience;
  if (xa != null && xb != null) {
    if (xa && xb) similarities.push("Both have held elected executive or ministerial office before.");
    else if (!xa && !xb) similarities.push("Neither has held elected executive or ministerial office.");
    else differences.push(`${xa ? ca.name : cb.name} has executive experience. ${xa ? cb.name : ca.name} has not held executive office.`);
  }
  if (ca.incumbent !== cb.incumbent) {
    const inc = ca.incumbent ? ca : cb;
    differences.push(`${inc.name} is the incumbent and can be judged on results in this office. The other candidate cannot.`);
  }

  let documentedTotal = 0;
  const cov = [a, b].map((s) => {
    const e = compat.evidence.byId[s.candidate.id];
    documentedTotal += e?.documented ?? 0;
    return `${s.candidate.name}: ${e?.documented ?? 0} of 15 categories documented, ${e?.sources ?? 0} sources`;
  });
  const covText =
    documentedTotal === 0
      ? "Neither candidate has completed research yet. This page shows registry details only."
      : `${cov.join(". ")}.`;

  return {
    whoTheyAre: [a, b].map((s) => ({ id: s.candidate.id, text: describe(s) })),
    similarities,
    differences,
    coverage: covText,
  };
}

export interface MergedSource extends SourceRef {
  candidateIds: string[];
}

/** All sources cited for either candidate, de-duplicated by URL. */
export function mergedSources(a: Side, b: Side): MergedSource[] {
  const map = new Map<string, MergedSource>();
  for (const side of [a, b]) {
    for (const s of side.research?.sources ?? []) {
      const key = s.url.replace(/\/+$/, "");
      const existing = map.get(key);
      if (existing) {
        if (!existing.candidateIds.includes(side.candidate.id)) existing.candidateIds.push(side.candidate.id);
        existing.categories = [...new Set([...existing.categories, ...s.categories])];
      } else {
        map.set(key, { ...s, candidateIds: [side.candidate.id] });
      }
    }
  }
  return [...map.values()];
}

export function testQuestionsFor(side: Side, mode: ComparisonMode): TestQuestion[] {
  const showPerformance =
    side.candidate.incumbent && (mode === "performance-readiness" || mode === "same-office");
  return showPerformance ? [...PERFORMANCE_QUESTIONS, ...READINESS_QUESTIONS] : READINESS_QUESTIONS;
}

export function matchupSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

/** Parse "<id>-vs-<id>". Returns null when the slug is malformed. */
export function parseMatchup(slug: string): { a: string; b: string } | null {
  const decoded = (() => {
    try {
      return decodeURIComponent(slug);
    } catch {
      return "";
    }
  })();
  const parts = decoded.split("-vs-");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  return { a: parts[0], b: parts[1] };
}
