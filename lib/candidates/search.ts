import { SEARCH_INDEX, type IndexedCandidate } from "./registry";
import { normalize } from "./text";
import type { Candidate, OfficeType } from "./types";

export type OfficeFilter = OfficeType | "all";

export interface SearchOptions {
  query: string;
  office?: OfficeFilter;
  /** Restrict to one electoral race (e.g. "governor:abia"). */
  raceKey?: string;
  limit?: number;
  offset?: number;
  /** Exclude a candidate id (e.g. the other side of a comparison). */
  exclude?: string;
}

export interface SearchResult {
  results: Candidate[];
  total: number;
  /** Matches that exist outside the active office filter, per office. */
  outsideFilter: Partial<Record<OfficeType, number>>;
}

const MAX_QUERY_LENGTH = 80;
const MAX_TOKENS = 8;

function words(field: string): string[] {
  return field ? field.split(" ") : [];
}

/**
 * Score one query token against a candidate; 0 means no match.
 * Infix matches inside names ("kano" in "Maikano") are only used as a
 * fallback when nothing matches by word prefix, to keep results relevant.
 */
function scoreToken(t: string, ix: IndexedCandidate, allowInfix: boolean): number {
  let best = 0;
  const bump = (n: number) => {
    if (n > best) best = n;
  };
  for (const w of ix.nameTokens) {
    if (w === t) bump(30);
    else if (w.startsWith(t)) bump(20);
    else if (allowInfix && t.length >= 3 && w.includes(t)) bump(8);
  }
  if (ix.party === t) bump(25);
  for (const w of words(ix.partyName)) if (t.length >= 2 && w.startsWith(t)) bump(12);
  for (const w of words(ix.place)) {
    if (w === t) bump(16);
    else if (t.length >= 2 && w.startsWith(t)) bump(12);
  }
  for (const w of words(ix.office)) if (t.length >= 3 && w.startsWith(t)) bump(9);
  for (const w of words(ix.experience)) if (t.length >= 3 && w.startsWith(t)) bump(6);
  return best;
}

function scoreCandidate(qTokens: string[], qFull: string, ix: IndexedCandidate, allowInfix: boolean): number {
  let total = 0;
  for (const t of qTokens) {
    const s = scoreToken(t, ix, allowInfix);
    if (s === 0) return 0; // every token must match something
    total += s;
  }
  if (ix.name === qFull) total += 100;
  else if (ix.name.startsWith(qFull)) total += 40;
  // Prefer candidates with research profiles among comparable matches. This
  // only reorders results; it never adds or removes any.
  if (ix.researched) total += 45;
  return total;
}

export function parseQuery(raw: string): { full: string; tokens: string[] } {
  const full = normalize(raw.slice(0, MAX_QUERY_LENGTH));
  return { full, tokens: full ? full.split(" ").slice(0, MAX_TOKENS) : [] };
}

export function searchCandidates(opts: SearchOptions): SearchResult {
  const office = opts.office ?? "all";
  const limit = Math.min(Math.max(opts.limit ?? 24, 1), 100);
  const offset = Math.max(opts.offset ?? 0, 0);
  const { full, tokens } = parseQuery(opts.query ?? "");

  const run = (allowInfix: boolean) => {
    const scored: { c: Candidate; score: number; order: number }[] = [];
    const outsideFilter: Partial<Record<OfficeType, number>> = {};
    SEARCH_INDEX.forEach((ix, order) => {
      const c = ix.candidate;
      if (opts.exclude && c.id === opts.exclude) return;
      if (opts.raceKey && c.raceKey !== opts.raceKey) return;
      const score = tokens.length ? scoreCandidate(tokens, full, ix, allowInfix) : 1;
      if (score === 0) return;
      if (office !== "all" && c.office !== office) {
        if (tokens.length) outsideFilter[c.office] = (outsideFilter[c.office] ?? 0) + 1;
        return;
      }
      scored.push({ c, score, order });
    });
    return { scored, outsideFilter };
  };

  let { scored, outsideFilter } = run(false);
  if (tokens.length && scored.length === 0 && Object.keys(outsideFilter).length === 0) {
    ({ scored, outsideFilter } = run(true));
  }

  if (tokens.length) scored.sort((a, b) => b.score - a.score || a.order - b.order);

  return {
    results: scored.slice(offset, offset + limit).map((s) => s.c),
    total: scored.length,
    outsideFilter,
  };
}
