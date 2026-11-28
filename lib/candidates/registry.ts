import { presidentialCandidates, incumbentPresident } from "@/data/presidential";
import { governorStates } from "@/data/governorCandidates";
import { senateCandidates } from "@/data/senate";
import { incumbentGovernors } from "@/data/incumbentGovernors";
import { currentSenators } from "@/data/currentSenators";
import researchSummaries from "@/data/research/summaries.generated.json";

import { partyName } from "./parties";
import { sharedNameTokens, slugify, titleCase, normalize } from "./text";
import type { Candidate, CandidateSummary, OfficeType } from "./types";

/**
 * The candidate registry: one normalized dataset derived from the existing
 * source files in /data. Server-side only — the browser receives
 * CandidateSummary objects through the API and server components.
 */

export interface ResearchSummary {
  status: string;
  verification: string;
  researchedAt: string | null;
  sources: number;
  evidence: Record<string, number>;
  highlights: string[];
  keywords: string[];
  hasExecutiveExperience: boolean;
}

const summaries = researchSummaries as Record<string, ResearchSummary>;

export function stateSlugOf(state: string): string {
  return slugify(state.replace(/\s+State$/i, ""));
}

function nullIfBlank(v: string | null | undefined): string | null {
  const t = (v ?? "").trim();
  return t && t !== "—" ? t : null;
}

export interface RegistryIssue {
  candidateId: string;
  issue: string;
}

function build() {
  const list: Candidate[] = [];
  const ids = new Set<string>();
  const issues: RegistryIssue[] = [];

  /**
   * Same-name candidates in one race are different people (different
   * parties), so collisions are disambiguated by party code, then a counter.
   */
  const uniqueId = (base: string, party?: string) => {
    let id = base;
    if (ids.has(id) && party) {
      id = `${base}-${slugify(party)}`;
      issues.push({ candidateId: id, issue: `Shares a name with another candidate in the same race` });
    }
    let n = 2;
    while (ids.has(id)) id = `${base}-${n++}`;
    ids.add(id);
    return id;
  };

  /**
   * Incumbency is inferred by matching the sitting office-holder's name
   * against the race's candidates. Only an unambiguous best match counts.
   */
  const matchIncumbent = <T extends { name: string; party: string }>(
    sittingName: string | null | undefined,
    candidates: readonly T[],
    accept: (c: T) => boolean = () => true
  ): T | null => {
    if (!sittingName) return null;
    const scored = candidates
      .map((c) => ({ c, n: sharedNameTokens(sittingName, c.name) }))
      .filter((x) => x.n >= 2 && accept(x.c))
      .sort((a, b) => b.n - a.n);
    if (!scored.length || (scored[1] && scored[1].n === scored[0].n)) return null;
    return scored[0].c;
  };

  // Presidential — ids are the existing profile slugs.
  for (const p of presidentialCandidates) {
    list.push({
      id: uniqueId(p.slug),
      name: p.name,
      office: "president",
      party: p.shortParty,
      partyName: p.party,
      state: null,
      stateSlug: null,
      district: null,
      districtSlug: null,
      age: null,
      qualification: null,
      image: p.image,
      runningMate: null,
      candidacyStatus: p.status,
      profileUrl: `/candidates/${p.slug}`,
      incumbent: p.slug === incumbentPresident.slug,
      raceKey: "president",
      jurisdiction: "Federal Republic of Nigeria",
    });
  }

  // Governorship — grouped by state.
  for (const group of governorStates) {
    const stateSlug = stateSlugOf(group.state);
    const sitting = incumbentGovernors[group.state];
    const sittingCandidate = matchIncumbent(
      sitting?.name,
      group.candidates,
      (c) => c.party === sitting?.party
    );
    for (const c of group.candidates) {
      const name = titleCase(c.name);
      const id = uniqueId(`gov-${stateSlug}-${slugify(c.name)}`, c.party);
      const party = nullIfBlank(c.party) ?? "Unknown";
      if (party === "Unknown") issues.push({ candidateId: id, issue: "Missing party" });
      if (c.age == null) issues.push({ candidateId: id, issue: "Missing age" });
      if (!c.qualification) issues.push({ candidateId: id, issue: "Missing qualification" });
      list.push({
        id,
        name,
        office: "governor",
        party,
        partyName: partyName(party),
        state: group.state,
        stateSlug,
        district: null,
        districtSlug: null,
        age: c.age,
        qualification: nullIfBlank(c.qualification),
        image: nullIfBlank(c.image),
        runningMate: c.runningMate ? titleCase(c.runningMate) : null,
        candidacyStatus: null,
        profileUrl: null,
        incumbent: c === sittingCandidate,
        raceKey: `governor:${stateSlug}`,
        jurisdiction: group.state,
      });
    }
  }

  // Senate — grouped by state and senatorial district.
  for (const seat of senateCandidates) {
    const stateSlug = stateSlugOf(seat.state);
    let districtSlug = slugify(seat.district);
    if (!districtSlug.startsWith(stateSlug)) districtSlug = `${stateSlug}-${districtSlug}`;
    const sitting = currentSenators.find(
      (s) => s.state === seat.state && s.district === seat.district
    );
    const sittingCandidate = matchIncumbent(sitting?.name, seat.candidates);
    for (const c of seat.candidates) {
      const id = uniqueId(`sen-${districtSlug}-${slugify(c.name)}`, c.party);
      const party = nullIfBlank(c.party) ?? "Unknown";
      if (party === "Unknown") issues.push({ candidateId: id, issue: "Missing party" });
      list.push({
        id,
        name: titleCase(c.name),
        office: "senator",
        party,
        partyName: partyName(party),
        state: seat.state,
        stateSlug,
        district: seat.district,
        districtSlug,
        age: c.age,
        qualification: nullIfBlank(c.qualification),
        image: nullIfBlank(c.image),
        runningMate: null,
        candidacyStatus: null,
        profileUrl: null,
        incumbent: c === sittingCandidate,
        raceKey: `senator:${districtSlug}`,
        jurisdiction: `${seat.district}, ${seat.state}`,
      });
    }
  }

  return {
    list,
    byId: new Map(list.map((c) => [c.id, c])),
    issues,
  };
}

const registry = build();

export const ALL_CANDIDATES: readonly Candidate[] = registry.list;
export const REGISTRY_ISSUES: readonly RegistryIssue[] = registry.issues;

/** Candidate ids are lowercase slugs; anything else is rejected. */
export const CANDIDATE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getCandidate(id: string | null | undefined): Candidate | null {
  if (!id || id.length > 160 || !CANDIDATE_ID_PATTERN.test(id)) return null;
  return registry.byId.get(id) ?? null;
}

export function getResearchSummary(id: string): ResearchSummary | null {
  return summaries[id] ?? null;
}

export function researchStatusOf(id: string): string {
  return summaries[id]?.status ?? "NOT_STARTED";
}

export function toSummary(c: Candidate): CandidateSummary {
  const r = summaries[c.id];
  return {
    id: c.id,
    name: c.name,
    office: c.office,
    party: c.party,
    partyName: c.partyName,
    state: c.state,
    district: c.district,
    jurisdiction: c.jurisdiction,
    raceKey: c.raceKey,
    image: c.image,
    incumbent: c.incumbent,
    profileUrl: c.profileUrl,
    researchStatus: r?.status ?? "NOT_STARTED",
    highlights: r?.highlights ?? [],
  };
}

export function candidatesByOffice(office: OfficeType): Candidate[] {
  return registry.list.filter((c) => c.office === office);
}

export function officeCounts(): Record<OfficeType, number> {
  const counts = { president: 0, governor: 0, senator: 0 };
  for (const c of registry.list) counts[c.office]++;
  return counts;
}

/** Text indexed for search, computed once per candidate. */
const OFFICE_TERMS: Record<OfficeType, string> = {
  president: "president presidential presidency federal national",
  governor: "governor governorship gubernatorial state",
  senator: "senate senator senatorial national assembly",
};

export interface IndexedCandidate {
  candidate: Candidate;
  name: string;
  nameTokens: string[];
  party: string;
  partyName: string;
  place: string;
  office: string;
  experience: string;
  /** Has a research profile; used only as a ranking tie-breaker. */
  researched: boolean;
}

export const SEARCH_INDEX: readonly IndexedCandidate[] = registry.list.map((c) => {
  const r = summaries[c.id];
  const name = normalize(c.name);
  return {
    candidate: c,
    name,
    nameTokens: name.split(" "),
    party: normalize(c.party),
    partyName: normalize(c.partyName),
    place: normalize(
      [c.state, c.state?.replace(/\s+State$/i, ""), c.district].filter(Boolean).join(" ")
    ),
    office: normalize(`${OFFICE_TERMS[c.office]} ${c.incumbent ? "incumbent sitting" : ""}`),
    experience: normalize([...(r?.keywords ?? []), ...(r?.highlights ?? [])].join(" ")),
    researched: !!r,
  };
});
