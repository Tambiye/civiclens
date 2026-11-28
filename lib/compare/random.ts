import { ALL_CANDIDATES, getResearchSummary } from "@/lib/candidates/registry";
import type { Candidate, OfficeType } from "@/lib/candidates/types";
import { OFFICE_LABELS } from "@/lib/candidates/types";
import { evaluateCompatibility, type ComparisonMode } from "./compatibility";

export interface RandomMatchup {
  a: Candidate;
  b: Candidate;
  mode: ComparisonMode;
  reasons: string[];
}

export interface RandomResult {
  matchup: RandomMatchup | null;
  /** Explains why the requested kind of matchup could not be produced. */
  message: string | null;
}

/** Order-independent key for a pair. */
export function pairKey(a: string, b: string): string {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

const MIN_DOCUMENTED = 3;

function documented(id: string): number {
  const e = getResearchSummary(id)?.evidence;
  return e ? (e.strong ?? 0) + (e.moderate ?? 0) + (e.limited ?? 0) : 0;
}

interface Candidates {
  a: Candidate;
  b: Candidate;
  weight: number;
}

function buildPool(office: OfficeType | "all"): Candidates[] {
  // Only candidates with enough research to make an informative comparison.
  const eligible = ALL_CANDIDATES.filter(
    (c) => (office === "all" || c.office === office) && documented(c.id) >= MIN_DOCUMENTED
  );
  const byRace = new Map<string, Candidate[]>();
  for (const c of eligible) byRace.set(c.raceKey, [...(byRace.get(c.raceKey) ?? []), c]);

  const pool: Candidates[] = [];
  for (const group of byRace.values()) {
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        const a = group[i];
        const b = group[j];
        // Square-root damping keeps well-documented candidates likely
        // without letting the same few dominate every draw.
        let weight = Math.sqrt(documented(a.id) * documented(b.id));
        if (a.party !== b.party) weight *= 1.5;
        if (a.incumbent !== b.incumbent) weight *= 1.3;
        pool.push({ a, b, weight });
      }
    }
  }
  return pool;
}

function reasonsFor(a: Candidate, b: Candidate): string[] {
  const reasons: string[] = [];
  reasons.push(
    a.office === "president"
      ? "Both are contesting the presidency."
      : a.office === "governor"
        ? `Both are contesting the ${a.state} governorship.`
        : `Both are contesting the ${a.jurisdiction} Senate seat.`
  );
  if (a.incumbent !== b.incumbent) {
    const inc = a.incumbent ? a : b;
    const other = a.incumbent ? b : a;
    reasons.push(`${inc.name} holds the office now and ${other.name} is challenging, so you can weigh a record in office against a challenger's readiness.`);
  }
  const xa = getResearchSummary(a.id)?.hasExecutiveExperience;
  const xb = getResearchSummary(b.id)?.hasExecutiveExperience;
  if (xa && xb) reasons.push("Both have held executive office before, so their records in office can be compared.");
  else if (xa !== xb) reasons.push("One has held executive office and the other has not, so their routes to this race differ.");
  if (a.party !== b.party) reasons.push(`They represent different parties (${a.party} and ${b.party}).`);
  return reasons;
}

function draw(pool: Candidates[], rng: () => number): Candidates {
  const total = pool.reduce((s, p) => s + p.weight, 0);
  let r = rng() * total;
  for (const p of pool) {
    r -= p.weight;
    if (r <= 0) return p;
  }
  return pool[pool.length - 1];
}

export function pickRandomMatchup(opts: {
  office?: OfficeType | "all";
  /** Pair keys (see pairKey) to avoid, e.g. the user's recent matchups. */
  exclude?: string[];
  rng?: () => number;
}): RandomResult {
  const office = opts.office ?? "all";
  const rng = opts.rng ?? Math.random;
  const exclude = new Set(opts.exclude ?? []);

  let pool = buildPool(office);
  let message: string | null = null;
  if (pool.length === 0 && office !== "all") {
    message = `No ${OFFICE_LABELS[office].toLowerCase()} candidates have been researched in enough depth for an informative comparison yet. Here is a matchup from another race instead.`;
    pool = buildPool("all");
  }
  if (pool.length === 0) {
    return {
      matchup: null,
      message: "There isn't enough research yet to suggest an informative comparison. Choose candidates manually instead.",
    };
  }
  const fresh = pool.filter((p) => !exclude.has(pairKey(p.a.id, p.b.id)));
  // If every pair has been seen, start over rather than fail.
  const { a, b } = draw(fresh.length ? fresh : pool, rng);
  // Randomise sides too: order carries no meaning.
  const [left, right] = rng() < 0.5 ? [a, b] : [b, a];
  const compat = evaluateCompatibility(left, right, getResearchSummary);
  return {
    matchup: { a: left, b: right, mode: compat.defaultMode, reasons: reasonsFor(a, b) },
    message,
  };
}
