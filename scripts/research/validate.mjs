#!/usr/bin/env node
/**
 * Validates candidate research JSON files against the schema in
 * lib/research/types.ts and the editorial rules:
 *  - every referenced sourceId exists; every URL is http(s)
 *  - category analysis >= 150 words unless evidence is "insufficient"
 *  - insufficient categories must list what is missing
 *  - no paragraph is reused across categories
 *  - research is never marked VERIFIED without a lastReviewed date
 *
 * Usage: node scripts/research/validate.mjs [file-or-dir ...]
 * Default: all files under data/research (excluding manifest.json).
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import {
  CATEGORY_KEYS,
  EVIDENCE_LABELS,
  VERIFICATION_STATUSES,
  RESEARCH_STATUSES,
  EVIDENCE_LEVELS,
  CATEGORY_BASES,
  SOURCE_TYPES,
  SOURCE_QUALITIES,
  RECORD_KINDS,
  PROJECT_STATUSES,
  LEGAL_STATUSES,
  TEST_ASSESSMENTS,
  CAREER_KINDS,
} from "../../lib/research/types.ts";

const ROOT = resolve(import.meta.dirname, "../..");
const MIN_WORDS = 150;
const TEST_IDS = new Set([
  ...Array.from({ length: 10 }, (_, i) => `r${i + 1}`),
  ...Array.from({ length: 10 }, (_, i) => `p${i + 1}`),
]);

export function wordCount(text) {
  return (text || "").trim().split(/\s+/).filter(Boolean).length;
}

function listFiles(target) {
  const st = statSync(target);
  if (st.isFile()) return target.endsWith(".json") ? [target] : [];
  return readdirSync(target).flatMap((f) => listFiles(join(target, f)));
}

export function validateResearch(doc) {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);
  const isStr = (v) => typeof v === "string" && v.trim().length > 0;
  const oneOf = (v, list, path) => {
    if (!list.includes(v)) err(`${path}: "${v}" is not one of ${list.join("|")}`);
  };

  if (doc.schemaVersion !== 1) err("schemaVersion must be 1");
  for (const k of ["candidateId", "name", "researchedAt", "provenance"]) {
    if (!isStr(doc[k])) err(`${k} is required`);
  }
  oneOf(doc.status, RESEARCH_STATUSES, "status");
  oneOf(doc.verification, VERIFICATION_STATUSES, "verification");
  if (doc.verification === "VERIFIED" && !doc.lastReviewed) {
    err("verification VERIFIED requires lastReviewed");
  }

  const sources = Array.isArray(doc.sources) ? doc.sources : [];
  if (!Array.isArray(doc.sources)) err("sources must be an array");
  const ids = new Set();
  sources.forEach((s, i) => {
    const p = `sources[${i}]`;
    if (!isStr(s.id)) err(`${p}.id required`);
    if (ids.has(s.id)) err(`${p}.id duplicate "${s.id}"`);
    ids.add(s.id);
    for (const k of ["title", "publisher", "claim", "accessed"]) {
      if (!isStr(s[k])) err(`${p}.${k} required`);
    }
    if (!/^https?:\/\/[^\s]+$/.test(s.url || "")) err(`${p}.url invalid: ${s.url}`);
    if (/wikipedia\.org/.test(s.url || "")) {
      warn(`${p} is Wikipedia; it must not be the sole source of an important claim`);
    }
    oneOf(s.type, SOURCE_TYPES, `${p}.type`);
    oneOf(s.quality, SOURCE_QUALITIES, `${p}.quality`);
    oneOf(s.verification, VERIFICATION_STATUSES, `${p}.verification`);
    (s.categories || []).forEach((c) => oneOf(c, CATEGORY_KEYS, `${p}.categories`));
  });

  const checkRefs = (refs, path) => {
    if (!Array.isArray(refs)) return err(`${path}.sourceIds must be an array`);
    refs.forEach((r) => {
      if (!ids.has(r)) err(`${path}: unknown sourceId "${r}"`);
    });
  };

  const id = doc.identity || {};
  if (!isStr(id.fullName)) err("identity.fullName required");
  if (typeof id.isIncumbent !== "boolean") err("identity.isIncumbent must be boolean");
  if (typeof id.hasExecutiveExperience !== "boolean") {
    err("identity.hasExecutiveExperience must be boolean");
  }
  (id.education || []).forEach((e, i) => checkRefs(e.sourceIds, `identity.education[${i}]`));
  (id.partyHistory || []).forEach((e, i) =>
    checkRefs(e.sourceIds, `identity.partyHistory[${i}]`)
  );

  (doc.career || []).forEach((c, i) => {
    oneOf(c.kind, CAREER_KINDS, `career[${i}].kind`);
    checkRefs(c.sourceIds, `career[${i}]`);
  });
  (doc.elections || []).forEach((c, i) => checkRefs(c.sourceIds, `elections[${i}]`));

  const paragraphs = new Map();
  const cats = doc.categories || {};
  for (const [key, c] of Object.entries(cats)) {
    const p = `categories.${key}`;
    if (!CATEGORY_KEYS.includes(key)) {
      err(`${p}: unknown category`);
      continue;
    }
    oneOf(c.evidence, EVIDENCE_LEVELS, `${p}.evidence`);
    oneOf(c.basis, CATEGORY_BASES, `${p}.basis`);
    oneOf(c.verification, VERIFICATION_STATUSES, `${p}.verification`);
    if (!isStr(c.summary)) err(`${p}.summary required`);
    for (const k of ["strengths", "limitations", "unknowns"]) {
      if (!Array.isArray(c[k])) err(`${p}.${k} must be an array`);
    }
    checkRefs(c.sourceIds, p);
    (c.metrics || []).forEach((m, i) => checkRefs(m.sourceIds, `${p}.metrics[${i}]`));
    const words = wordCount(c.analysis);
    if (c.evidence === "insufficient") {
      if (!Array.isArray(c.missing) || c.missing.length === 0) {
        err(`${p}: insufficient evidence must list "missing" information`);
      }
    } else {
      if (words < MIN_WORDS) err(`${p}.analysis has ${words} words (< ${MIN_WORDS})`);
      if (!c.sourceIds || c.sourceIds.length === 0) {
        err(`${p}: evidence "${c.evidence}" requires at least one source`);
      }
    }
    for (const para of (c.analysis || "").split(/\n\s*\n/)) {
      const norm = para.trim().toLowerCase();
      if (norm.length < 80) continue;
      if (paragraphs.has(norm)) {
        err(`${p}: paragraph repeated from categories.${paragraphs.get(norm)}`);
      } else paragraphs.set(norm, key);
    }
  }
  const missingCats = CATEGORY_KEYS.filter((k) => !cats[k]);
  if (missingCats.length) warn(`categories not covered: ${missingCats.join(", ")}`);

  (doc.record || []).forEach((r, i) => {
    const p = `record[${i}]`;
    oneOf(r.kind, RECORD_KINDS, `${p}.kind`);
    oneOf(r.label, EVIDENCE_LABELS, `${p}.label`);
    if (r.status) oneOf(r.status, PROJECT_STATUSES, `${p}.status`);
    if (r.legalStatus) oneOf(r.legalStatus, LEGAL_STATUSES, `${p}.legalStatus`);
    if (r.kind === "controversy" && !r.legalStatus) {
      warn(`${p}: controversy without legalStatus`);
    }
    if (r.label === "PROMISE") err(`${p}: promises belong in plans, not the record`);
    (r.categories || []).forEach((c) => oneOf(c, CATEGORY_KEYS, `${p}.categories`));
    checkRefs(r.sourceIds, p);
    if (!r.sourceIds?.length) err(`${p}: record items require a source`);
  });

  (doc.plans || []).forEach((pl, i) => {
    const p = `plans[${i}]`;
    oneOf(pl.label, ["PROMISE", "PROPOSAL"], `${p}.label`);
    oneOf(pl.category, CATEGORY_KEYS, `${p}.category`);
    checkRefs(pl.sourceIds, p);
    if (!pl.sourceIds?.length) err(`${p}: plans require a source`);
  });

  (doc.test || []).forEach((t, i) => {
    const p = `test[${i}]`;
    if (!TEST_IDS.has(t.questionId)) err(`${p}.questionId "${t.questionId}" unknown`);
    oneOf(t.assessment, TEST_ASSESSMENTS, `${p}.assessment`);
    checkRefs(t.sourceIds, p);
  });

  if (!Array.isArray(doc.gaps)) err("gaps must be an array");
  return { errors, warnings };
}

// CLI
if (import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, "/")}` ||
    process.argv[1]?.endsWith("validate.mjs")) {
  const targets = process.argv.slice(2);
  const files = (targets.length ? targets : [join(ROOT, "data/research")])
    .flatMap((t) => listFiles(resolve(t)))
    .filter((f) => !/manifest\.json$|\.generated\./.test(f));
  let failed = 0;
  for (const f of files) {
    let doc;
    try {
      doc = JSON.parse(readFileSync(f, "utf8"));
    } catch (e) {
      console.log(`✗ ${relative(ROOT, f)}: invalid JSON (${e.message})`);
      failed++;
      continue;
    }
    const { errors, warnings } = validateResearch(doc);
    const mark = errors.length ? "✗" : "✓";
    console.log(`${mark} ${relative(ROOT, f)} (${errors.length} errors, ${warnings.length} warnings)`);
    errors.forEach((e) => console.log(`    error: ${e}`));
    warnings.forEach((w) => console.log(`    warn:  ${w}`));
    if (errors.length) failed++;
  }
  console.log(`\n${files.length - failed}/${files.length} files valid`);
  process.exit(failed ? 1 : 0);
}
