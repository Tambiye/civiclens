/**
 * Research data model.
 *
 * Candidate research is stored as one JSON file per candidate under
 * `data/research/<office>/...`. Files are reusable across every comparison
 * the candidate appears in; comparison-specific text is derived at render
 * time and never stored per pair.
 *
 * Nothing in this model is "verified" by default. Research produced by an
 * automated/AI-assisted process must be stored as AI_DRAFT until a human
 * reviewer changes its status.
 */

export const CATEGORY_KEYS = [
  "economy",
  "security",
  "education",
  "healthcare",
  "infrastructure",
  "power",
  "jobs",
  "finance",
  "leadership",
  "integrity",
  "experience",
  "vision",
  "foreign",
  "humanImpact",
  "promises",
] as const;
export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const EVIDENCE_LABELS = [
  "FACT",
  "RECORD",
  "PROMISE",
  "ANALYSIS",
  "UNVERIFIED",
  "DISPUTED",
] as const;
export type EvidenceLabel = (typeof EVIDENCE_LABELS)[number];

export const VERIFICATION_STATUSES = [
  "AI_DRAFT",
  "UNVERIFIED",
  "REVIEWED",
  "VERIFIED",
  "DISPUTED",
  "OUTDATED",
] as const;
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];

export const RESEARCH_STATUSES = [
  "NOT_STARTED",
  "IN_PROGRESS",
  "RESEARCHED",
  "REVIEW_REQUIRED",
  "VERIFIED",
  "INSUFFICIENT_DATA",
] as const;
export type ResearchStatus = (typeof RESEARCH_STATUSES)[number];

export const EVIDENCE_LEVELS = [
  "strong",
  "moderate",
  "limited",
  "insufficient",
] as const;
export type EvidenceLevel = (typeof EVIDENCE_LEVELS)[number];

/** Whether a category assessment rests on a track record, proposals, or both. */
export const CATEGORY_BASES = ["record", "proposal", "mixed", "none"] as const;
export type CategoryBasis = (typeof CATEGORY_BASES)[number];

export const SOURCE_TYPES = [
  "official",
  "electoral",
  "legislative",
  "court",
  "statistics",
  "multilateral",
  "audit",
  "manifesto",
  "candidate-statement",
  "academic",
  "investigative",
  "news",
  "reference",
  "other",
] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];

export const SOURCE_QUALITIES = ["high", "medium", "low"] as const;
export type SourceQuality = (typeof SOURCE_QUALITIES)[number];

export interface SourceRef {
  /** Local id, unique within the file, e.g. "s1". */
  id: string;
  title: string;
  url: string;
  publisher: string;
  type: SourceType;
  /** Publication date (yyyy-mm-dd, yyyy-mm or yyyy) when known. */
  published: string | null;
  /** Date the source was accessed (yyyy-mm-dd). */
  accessed: string;
  categories: CategoryKey[];
  /** The specific claim or fact this source supports. */
  claim: string;
  verification: VerificationStatus;
  quality: SourceQuality;
  summary?: string;
}

export interface CategoryMetric {
  label: string;
  value: string;
  period?: string;
  note?: string;
  sourceIds: string[];
}

export interface CategoryResearch {
  evidence: EvidenceLevel;
  basis: CategoryBasis;
  /** One or two sentence quick read. */
  summary: string;
  /**
   * Substantive analysis; at least 150 words whenever `evidence` is not
   * "insufficient". Paragraphs separated by a blank line.
   */
  analysis: string;
  strengths: string[];
  limitations: string[];
  unknowns: string[];
  metrics?: CategoryMetric[];
  sourceIds: string[];
  verification: VerificationStatus;
  /** Specific missing information. Required when evidence is "insufficient". */
  missing?: string[];
}

export const RECORD_KINDS = [
  "achievement",
  "project",
  "decision",
  "policy",
  "outcome",
  "failure",
  "delay",
  "controversy",
  "unresolved",
] as const;
export type RecordKind = (typeof RECORD_KINDS)[number];

/** Lifecycle of a project. An announcement is not a completion. */
export const PROJECT_STATUSES = [
  "proposed",
  "announced",
  "approved",
  "budgeted",
  "contract-awarded",
  "construction-started",
  "partially-completed",
  "completed",
  "commissioned",
  "independently-verified",
] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

/** Legal status of an integrity matter. Allegations are not findings. */
export const LEGAL_STATUSES = [
  "allegation",
  "investigation",
  "charged",
  "judgment",
  "conviction",
  "appeal",
  "overturned",
  "acquitted",
  "denied",
  "closed",
] as const;
export type LegalStatus = (typeof LEGAL_STATUSES)[number];

export interface RecordItem {
  id: string;
  title: string;
  kind: RecordKind;
  label: EvidenceLabel;
  period?: string;
  office?: string;
  description: string;
  status?: ProjectStatus;
  legalStatus?: LegalStatus;
  categories: CategoryKey[];
  sourceIds: string[];
}

export interface PlanItem {
  id: string;
  title: string;
  label: "PROMISE" | "PROPOSAL";
  category: CategoryKey;
  outcome: string;
  method?: string;
  target?: string;
  timeline?: string;
  funding?: string;
  assumptions?: string;
  risks?: string;
  dependencies?: string;
  tradeoffs?: string;
  feasibility?: string;
  sourceIds: string[];
}

export const TEST_ASSESSMENTS = ["yes", "partly", "no", "unknown"] as const;
export type TestAssessment = (typeof TEST_ASSESSMENTS)[number];

export interface TestAnswer {
  /** Question id from lib/compare/test-questions.ts (r1..r10 or p1..p10). */
  questionId: string;
  answer: string;
  assessment: TestAssessment;
  sourceIds: string[];
}

export const CAREER_KINDS = [
  "political-office",
  "appointment",
  "candidacy",
  "party",
  "professional",
  "activism",
  "other",
] as const;

export interface CareerEntry {
  period: string;
  title: string;
  description: string;
  kind: (typeof CAREER_KINDS)[number];
  sourceIds: string[];
}

export interface ElectionEntry {
  year: string;
  office: string;
  party: string;
  result: string;
  sourceIds: string[];
}

export interface CandidateIdentity {
  fullName: string;
  commonName?: string;
  born?: string | null;
  stateOfOrigin?: string | null;
  party: string;
  partyHistory: { party: string; period: string; sourceIds: string[] }[];
  /** Office currently held, e.g. "President of Nigeria". */
  currentOffice: string | null;
  /** True when the candidate currently holds the office being contested. */
  isIncumbent: boolean;
  incumbentOffice: "president" | "governor" | "senator" | null;
  /** True when the candidate has ever held an elected executive office. */
  hasExecutiveExperience: boolean;
  education: {
    credential: string;
    institution?: string;
    year?: string;
    sourceIds: string[];
  }[];
  professional: string[];
}

export interface CandidateResearch {
  schemaVersion: 1;
  candidateId: string;
  name: string;
  researchVersion: number;
  status: ResearchStatus;
  verification: VerificationStatus;
  researchedAt: string;
  lastReviewed: string | null;
  /** Who/what produced the research, e.g. "AI-assisted web research". */
  provenance: string;
  identity: CandidateIdentity;
  career: CareerEntry[];
  elections: ElectionEntry[];
  categories: Partial<Record<CategoryKey, CategoryResearch>>;
  record: RecordItem[];
  plans: PlanItem[];
  test: TestAnswer[];
  sources: SourceRef[];
  /** Outstanding research tasks / known gaps. */
  gaps: string[];
}
