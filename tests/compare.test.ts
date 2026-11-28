/**
 * Run with: npm test
 * Uses Node's built-in test runner and native TypeScript type stripping.
 */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

import {
  ALL_CANDIDATES,
  getCandidate,
  getResearchSummary,
  CANDIDATE_ID_PATTERN,
} from "../lib/candidates/registry";
import { searchCandidates } from "../lib/candidates/search";
import { titleCase, normalize } from "../lib/candidates/text";
import { evaluateCompatibility, resolveMode } from "../lib/compare/compatibility";
import { pickRandomMatchup, pairKey } from "../lib/compare/random";
import {
  quickComparison,
  buildOverview,
  mergedSources,
  parseMatchup,
  orderedCategories,
} from "../lib/compare/build";
import { CATEGORY_KEYS } from "../lib/research/types";
import type { CandidateResearch } from "../lib/research/types";
import { validateResearch, wordCount } from "../scripts/research/validate.mjs";

const must = (id: string) => {
  const c = getCandidate(id);
  assert.ok(c, `expected candidate ${id}`);
  return c!;
};

const governors = ALL_CANDIDATES.filter((c) => c.office === "governor");
const senators = ALL_CANDIDATES.filter((c) => c.office === "senator");
const sameRace = <T extends { raceKey: string; id: string }>(list: T[]) => {
  const first = list[0];
  return [first, list.find((c) => c.raceKey === first.raceKey && c.id !== first.id)!] as const;
};
const crossRace = <T extends { raceKey: string }>(list: T[]) => {
  const first = list[0];
  return [first, list.find((c) => c.raceKey !== first.raceKey)!] as const;
};

/* ------------------------------------------------------------------ */

describe("candidate registry", () => {
  test("builds one dataset with unique, URL-safe ids", () => {
    const ids = ALL_CANDIDATES.map((c) => c.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const id of ids) assert.match(id, CANDIDATE_ID_PATTERN);
    assert.equal(ALL_CANDIDATES.filter((c) => c.office === "president").length, 17);
    assert.ok(governors.length > 400);
    assert.ok(senators.length > 1200);
  });

  test("presidential ids equal existing profile slugs", () => {
    const obi = must("peter-gregory-obi");
    assert.equal(obi.profileUrl, "/candidates/peter-gregory-obi");
    assert.equal(obi.raceKey, "president");
  });

  test("marks the sitting president as incumbent, and nobody else", () => {
    const inc = ALL_CANDIDATES.filter((c) => c.office === "president" && c.incumbent);
    assert.deepEqual(inc.map((c) => c.id), ["bola-ahmed-tinubu"]);
  });

  test("at most one incumbent per race", () => {
    const counts = new Map<string, number>();
    for (const c of ALL_CANDIDATES) if (c.incumbent) counts.set(c.raceKey, (counts.get(c.raceKey) ?? 0) + 1);
    for (const [race, n] of counts) assert.equal(n, 1, race);
  });

  test("same-name candidates in a race get distinct, party-based ids", () => {
    assert.ok(getCandidate("sen-kebbi-south-hassan-mustapha"));
    assert.ok(getCandidate("sen-kebbi-south-hassan-mustapha-ndc"));
    assert.ok(getCandidate("sen-kebbi-south-hassan-mustapha-sdp"));
  });

  test("rejects malformed and unknown ids", () => {
    for (const bad of ["", "../etc/passwd", "UPPER", "a--b", "x".repeat(200), "<script>"]) {
      assert.equal(getCandidate(bad), null, bad);
    }
    assert.equal(getCandidate("no-such-candidate"), null);
    assert.equal(getCandidate(null), null);
  });

  test("title-cases INEC upper-case names", () => {
    assert.equal(titleCase("OTTI ALEX CHIOMA"), "Otti Alex Chioma");
    assert.equal(titleCase("ABUBAKAR SADIQ YAR'ADUA"), "Abubakar Sadiq Yar'Adua");
    assert.equal(titleCase("Peter Obi"), "Peter Obi");
  });
});

/* ------------------------------------------------------------------ */

describe("search", () => {
  test("partial, case-insensitive name match with whitespace trimmed", () => {
    const r = searchCandidates({ query: "  pEtEr ob  " });
    assert.equal(r.results[0]?.id, "peter-gregory-obi");
  });

  test("surname and first-name search", () => {
    assert.ok(searchCandidates({ query: "tinubu" }).results.some((c) => c.id === "bola-ahmed-tinubu"));
    assert.ok(searchCandidates({ query: "atiku" }).results.some((c) => c.id === "atiku-abubakar"));
  });

  test("search by party code returns only that party", () => {
    const r = searchCandidates({ query: "APGA", office: "governor", limit: 100 });
    assert.ok(r.total > 0);
    assert.ok(r.results.every((c) => c.party === "APGA"));
  });

  test("search by state and by senatorial district", () => {
    const kano = searchCandidates({ query: "kano", office: "governor", limit: 100 });
    assert.ok(kano.total > 0 && kano.results.every((c) => c.state === "Kano State"));
    const lw = searchCandidates({ query: "lagos west", office: "senator", limit: 100 });
    assert.ok(lw.total > 0 && lw.results.every((c) => c.district === "Lagos West"));
  });

  test("search by office word", () => {
    const r = searchCandidates({ query: "presidential", limit: 100 });
    assert.equal(r.total, 17);
  });

  test("search by political experience (from research)", () => {
    const r = searchCandidates({ query: "governor", office: "president", limit: 50 });
    const ids = r.results.map((c) => c.id);
    assert.ok(ids.includes("peter-gregory-obi"), "Obi was a governor");
    assert.ok(ids.includes("donald-duke"), "Duke was a governor");
  });

  test("filter + search combine, and report matches outside the filter", () => {
    const r = searchCandidates({ query: "abia", office: "president" });
    assert.equal(r.total, 0);
    assert.ok((r.outsideFilter.governor ?? 0) > 0);
    assert.ok((r.outsideFilter.senator ?? 0) > 0);
  });

  test("empty query lists everything in the filter", () => {
    assert.equal(searchCandidates({ query: "", office: "president", limit: 100 }).total, 17);
    assert.equal(searchCandidates({ query: "" }).total, ALL_CANDIDATES.length);
  });

  test("no results and special characters are handled safely", () => {
    assert.equal(searchCandidates({ query: "zzzzqqqq" }).total, 0);
    assert.doesNotThrow(() => searchCandidates({ query: "(.*+?[^$\\" }));
    assert.equal(normalize("(.*+?[^$\\"), "");
  });

  test("unrelated candidates are not returned for a full name", () => {
    const r = searchCandidates({ query: "bola ahmed tinubu" });
    assert.equal(r.total, 1);
  });

  test("race scoping and exclusion", () => {
    const [g] = sameRace(governors);
    const r = searchCandidates({ query: "", raceKey: g.raceKey, exclude: g.id, limit: 100 });
    assert.ok(r.results.every((c) => c.raceKey === g.raceKey && c.id !== g.id));
  });
});

/* ------------------------------------------------------------------ */

describe("compatibility", () => {
  const tinubu = must("bola-ahmed-tinubu");
  const obi = must("peter-gregory-obi");
  const atiku = must("atiku-abubakar");

  test("same candidate is blocked", () => {
    const r = evaluateCompatibility(obi, obi, getResearchSummary);
    assert.equal(r.allowed, false);
  });

  test("presidential pair is a direct, same-race comparison", () => {
    const r = evaluateCompatibility(obi, atiku, getResearchSummary);
    assert.equal(r.allowed, true);
    assert.equal(r.comparability, "direct");
    assert.equal(r.sameRace, true);
    assert.equal(r.defaultMode, "same-office");
  });

  test("incumbent vs challenger defaults to performance vs readiness", () => {
    const r = evaluateCompatibility(obi, tinubu, getResearchSummary);
    assert.equal(r.defaultMode, "performance-readiness");
    assert.ok(r.availableModes.includes("same-office"));
  });

  test("result is symmetric: order never changes the analysis", () => {
    const x = evaluateCompatibility(obi, tinubu, getResearchSummary);
    const y = evaluateCompatibility(tinubu, obi, getResearchSummary);
    assert.deepEqual(x, y);
  });

  test("same-state governors are direct opponents", () => {
    const [a, b] = sameRace(governors);
    const r = evaluateCompatibility(a, b, getResearchSummary);
    assert.equal(r.comparability, "direct");
    assert.equal(r.sameRace, true);
  });

  test("cross-state governors are allowed with context, not as opponents", () => {
    const [a, b] = crossRace(governors);
    const r = evaluateCompatibility(a, b, getResearchSummary);
    assert.equal(r.allowed, true);
    assert.equal(r.comparability, "contextual");
    assert.equal(r.sameRace, false);
    assert.ok(r.reasons.join(" ").includes("not running against each other"));
    assert.ok(!r.availableModes.includes("performance-readiness"));
  });

  test("same senatorial district is direct; different districts need context", () => {
    const [a, b] = sameRace(senators);
    assert.equal(evaluateCompatibility(a, b, getResearchSummary).comparability, "direct");
    const [c, d] = crossRace(senators);
    const r = evaluateCompatibility(c, d, getResearchSummary);
    assert.equal(r.comparability, "contextual");
    assert.ok(r.availableModes.includes("legislative"));
  });

  test("presidential vs senatorial is blocked without researched careers", () => {
    const r = evaluateCompatibility(obi, senators[0], getResearchSummary);
    assert.equal(r.allowed, false);
    assert.match(r.reasons[0], /different offices/);
  });

  test("cross-office is allowed only as career mode when both are researched", () => {
    const fake = (id: string) =>
      getResearchSummary(id) ?? {
        status: "RESEARCHED",
        verification: "AI_DRAFT",
        researchedAt: "2026-11-28",
        sources: 5,
        evidence: { strong: 0, moderate: 5, limited: 0, insufficient: 10 },
        highlights: [],
        keywords: [],
        hasExecutiveExperience: true,
      };
    const r = evaluateCompatibility(obi, governors[0], fake);
    assert.equal(r.allowed, true);
    assert.equal(r.comparability, "not-comparable");
    assert.deepEqual(r.availableModes, ["career"]);
  });

  test("foreign relations has limited relevance for governors", () => {
    const [a, b] = sameRace(governors);
    const foreign = evaluateCompatibility(a, b, getResearchSummary).categories.find((c) => c.key === "foreign");
    assert.equal(foreign?.relevance, "limited");
  });

  test("evidence sufficiency is reported", () => {
    const [a, b] = sameRace(governors);
    const r = evaluateCompatibility(a, b, getResearchSummary);
    assert.equal(r.evidence.sufficient, false);
    assert.ok(r.evidence.note);
  });

  test("resolveMode falls back for invalid or unavailable modes", () => {
    const r = evaluateCompatibility(obi, atiku, getResearchSummary);
    assert.equal(resolveMode("legislative", r), r.defaultMode);
    assert.equal(resolveMode("<script>", r), r.defaultMode);
    assert.equal(resolveMode("policy", r), "policy");
  });
});

/* ------------------------------------------------------------------ */

describe("random matchups", () => {
  const seq = (values: number[]) => {
    let i = 0;
    return () => values[i++ % values.length];
  };

  test("returns an eligible, same-race pair of distinct, researched candidates", () => {
    for (let i = 0; i < 50; i++) {
      const { matchup } = pickRandomMatchup({});
      assert.ok(matchup);
      assert.notEqual(matchup!.a.id, matchup!.b.id);
      assert.equal(matchup!.a.raceKey, matchup!.b.raceKey);
      assert.ok(evaluateCompatibility(matchup!.a, matchup!.b, getResearchSummary).allowed);
      assert.ok(matchup!.reasons.length > 0);
    }
  });

  test("never pairs presidential with senatorial candidates", () => {
    for (let i = 0; i < 50; i++) {
      const { matchup } = pickRandomMatchup({});
      assert.equal(matchup!.a.office, matchup!.b.office);
    }
  });

  test("varies across draws rather than returning one pair", () => {
    const seen = new Set<string>();
    for (let i = 0; i < 60; i++) {
      const { matchup } = pickRandomMatchup({});
      seen.add(pairKey(matchup!.a.id, matchup!.b.id));
    }
    assert.ok(seen.size >= 5, `only ${seen.size} distinct pairs`);
  });

  test("respects the exclusion list", () => {
    const first = pickRandomMatchup({ rng: seq([0.1, 0.2]) }).matchup!;
    const key = pairKey(first.a.id, first.b.id);
    const second = pickRandomMatchup({ rng: seq([0.1, 0.2]), exclude: [key] }).matchup!;
    assert.notEqual(pairKey(second.a.id, second.b.id), key);
  });

  test("is deterministic for a given rng", () => {
    const x = pickRandomMatchup({ rng: seq([0.42, 0.7]) }).matchup!;
    const y = pickRandomMatchup({ rng: seq([0.42, 0.7]) }).matchup!;
    assert.equal(x.a.id, y.a.id);
    assert.equal(x.b.id, y.b.id);
  });

  test("falls back with a message when an office has no research", () => {
    const r = pickRandomMatchup({ office: "senator" });
    assert.ok(r.message && /researched/.test(r.message));
    assert.ok(r.matchup);
  });
});

/* ------------------------------------------------------------------ */

describe("comparison building", () => {
  const load = (id: string) =>
    JSON.parse(readFileSync(join(import.meta.dirname, "../data/research/presidential", `${id}.json`), "utf8")) as CandidateResearch;
  const obi = { candidate: must("peter-gregory-obi"), research: load("peter-gregory-obi") };
  const tinubu = { candidate: must("bola-ahmed-tinubu"), research: load("bola-ahmed-tinubu") };

  test("matchup slugs parse, and malformed ones are rejected", () => {
    assert.deepEqual(parseMatchup("a-vs-b"), { a: "a", b: "b" });
    assert.equal(parseMatchup("a-vs-b-vs-c"), null);
    assert.equal(parseMatchup("nothing"), null);
    assert.equal(parseMatchup("%E0%A4%A"), null);
  });

  test("quick comparison is order-independent", () => {
    const c1 = evaluateCompatibility(obi.candidate, tinubu.candidate, getResearchSummary);
    const x = quickComparison(obi, tinubu, c1);
    const y = quickComparison(tinubu, obi, c1);
    assert.deepEqual(
      x.map((r) => [r.key, r.label, r.refersTo]),
      y.map((r) => [r.key, r.label, r.refersTo])
    );
    assert.equal(x.length, CATEGORY_KEYS.length);
  });

  test("missing research yields evidence-limited labels, never invented ones", () => {
    const [g1, g2] = sameRace(governors);
    const a = { candidate: g1, research: null };
    const b = { candidate: g2, research: null };
    const rows = quickComparison(a, b, evaluateCompatibility(g1, g2, getResearchSummary));
    assert.ok(rows.every((r) => r.label === "Incomplete evidence" || r.label === "Not directly comparable"));
    const ov = buildOverview(a, b, evaluateCompatibility(g1, g2, getResearchSummary));
    assert.match(ov.coverage, /Neither candidate/);
  });

  test("merged sources are de-duplicated by URL and attributed", () => {
    const merged = mergedSources(obi, tinubu);
    const urls = merged.map((s) => s.url.replace(/\/+$/, ""));
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(merged.every((s) => s.candidateIds.length >= 1));
  });

  test("every mode orders all categories exactly once", () => {
    for (const m of ["same-office", "performance-readiness", "career", "policy", "legislative"] as const) {
      const o = orderedCategories(m);
      assert.equal(new Set(o).size, CATEGORY_KEYS.length);
    }
  });
});

/* ------------------------------------------------------------------ */

describe("research data integrity", () => {
  const dir = join(import.meta.dirname, "../data/research/presidential");
  const files = readdirSync(dir).filter((f) => f.endsWith(".json"));

  test("every research file validates and matches a registry candidate", () => {
    assert.ok(files.length > 0);
    for (const f of files) {
      const doc = JSON.parse(readFileSync(join(dir, f), "utf8"));
      const { errors } = validateResearch(doc);
      assert.deepEqual(errors, [], f);
      assert.equal(`${doc.candidateId}.json`, f);
      assert.ok(getCandidate(doc.candidateId), `${doc.candidateId} not in registry`);
    }
  });

  test("automated research is never marked verified", () => {
    for (const f of files) {
      const doc = JSON.parse(readFileSync(join(dir, f), "utf8"));
      if (doc.lastReviewed == null) {
        assert.notEqual(doc.verification, "VERIFIED", f);
        assert.notEqual(doc.verification, "REVIEWED", f);
      }
    }
  });

  test("documented categories meet the 150-word minimum", () => {
    for (const f of files) {
      const doc = JSON.parse(readFileSync(join(dir, f), "utf8")) as CandidateResearch;
      for (const [k, c] of Object.entries(doc.categories)) {
        if (c && c.evidence !== "insufficient") assert.ok(wordCount(c.analysis) >= 150, `${f}:${k}`);
      }
    }
  });

  test("promises never appear as record items", () => {
    for (const f of files) {
      const doc = JSON.parse(readFileSync(join(dir, f), "utf8")) as CandidateResearch;
      assert.ok(doc.record.every((r) => r.label !== "PROMISE"), f);
    }
  });
});

describe("search fallback", () => {
  test("infix name matches are used only when nothing matches by prefix", () => {
    // "maikano" has no prefix match for "aikan", so the infix fallback applies.
    const r = searchCandidates({ query: "aikan" });
    assert.ok(r.results.some((c) => c.name.toLowerCase().includes("aikan")));
  });
});

describe("search ranking", () => {
  test("a researched candidate ranks first for a shared surname", () => {
    assert.equal(searchCandidates({ query: "obi" }).results[0]?.id, "peter-gregory-obi");
  });
});
