export type OfficeType = "president" | "governor" | "senator";

export const OFFICE_LABELS: Record<OfficeType, string> = {
  president: "Presidential",
  governor: "Governorship",
  senator: "Senatorial",
};

/**
 * A normalized candidate record. Built at module load from the existing
 * datasets in /data, so there is exactly one candidate dataset.
 */
export interface Candidate {
  /** Stable, URL-safe id. Presidential ids equal the existing profile slug. */
  id: string;
  /** Display name in title case. */
  name: string;
  office: OfficeType;
  /** Short party code as published by INEC (e.g. "APC"). */
  party: string;
  /** Full party name, or the code when unknown. */
  partyName: string;
  /** "Abia State"; null for presidential candidates. */
  state: string | null;
  stateSlug: string | null;
  /** "Abia Central"; senatorial candidates only. */
  district: string | null;
  districtSlug: string | null;
  age: number | null;
  qualification: string | null;
  image: string | null;
  runningMate: string | null;
  /** Candidacy status from the source data (presidential only). */
  candidacyStatus: string | null;
  /** Existing profile page, when one exists. */
  profileUrl: string | null;
  /** Holds the office this candidate is contesting. */
  incumbent: boolean;
  /**
   * Identifies the electoral contest. Two candidates with the same raceKey
   * are opponents in the same race.
   */
  raceKey: string;
  /** Human-readable jurisdiction, e.g. "Abia Central, Abia State". */
  jurisdiction: string;
}

/** Lightweight shape sent to the browser by search/picker APIs. */
export interface CandidateSummary {
  id: string;
  name: string;
  office: OfficeType;
  party: string;
  partyName: string;
  state: string | null;
  district: string | null;
  jurisdiction: string;
  raceKey: string;
  image: string | null;
  incumbent: boolean;
  profileUrl: string | null;
  /** Research pipeline status from the manifest. */
  researchStatus: string;
  /** Short career highlights from research, when available. */
  highlights: string[];
}
