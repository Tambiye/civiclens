# Candidate research store

One JSON file per candidate. The files are reusable across every comparison
the candidate appears in. Comparison text for a specific pair is derived when
the page renders and is never stored per pair.

```
data/research/
  manifest.json                     # generated: status of every candidate in the registry
  index.generated.ts                # generated: candidateId -> lazy loader
  presidential/<candidate-id>.json
  governorship/<state-slug>/<candidate-id>.json
  senate/<state-slug>/<district-slug>/<candidate-id>.json
```

The schema is `CandidateResearch` in `lib/research/types.ts`.

## Commands

```bash
node scripts/research/validate.mjs [file|dir]   # schema + editorial checks
node scripts/research/build-index.mjs           # regenerate manifest + loader index
```

Run both after adding or editing research. `npm run research:check` runs both.

## Editorial rules (apply equally to every candidate)

1. **Never invent anything.** No made-up sources, URLs, statistics, credentials,
   achievements, project statuses or election results. Every URL must be one you
   actually opened or saw in search results.
2. **Label every claim.**
   - `FACT`: an established, documented fact.
   - `RECORD`: something the person did in office.
   - `PROMISE`: a commitment about the future.
   - `ANALYSIS`: the researcher's interpretation.
   - `UNVERIFIED`: a claim that could not be confirmed.
   - `DISPUTED`: a claim that credible sources contradict.

   Promises go in `plans`, never in `record`.
3. **Allegations are not findings.** Every integrity item carries a `legalStatus`
   (`allegation`, `investigation`, `charged`, `judgment`, `conviction`, `appeal`,
   `overturned`, `acquitted`, `denied` or `closed`). Report denials and outcomes.
4. **Projects carry a lifecycle `status`.** An announced project is not a
   completed one. A project commissioned during someone's tenure may have
   started under a predecessor, so record its origin.
5. **Context before credit or blame.** National outcomes are shaped by
   predecessors, global prices, the CBN, legislatures, states and security
   conditions. Say so.
6. **150 words minimum** for each category `analysis`, unless `evidence` is
   `insufficient`. In that case, say what is known, list the specific `missing`
   information, and do not pad. Don't repeat paragraphs across categories.
   Avoid empty phrases like "strong leadership" unless the claim is backed.
7. **Source priority.** Prefer official records (INEC, the National Assembly,
   state governments, the Budget Office, NBS, CBN, DMO, the Auditor-General and
   courts) and party manifestos. Then the World Bank, IMF, Afrobarometer and
   academic work. Then reputable journalism (Premium Times, Channels, Punch,
   Vanguard, The Cable, BusinessDay, Reuters, AP, BBC, Dataphyte, ICIR). Use
   Wikipedia only to find primary sources, never as the sole source of an
   important claim. Use multiple sources for controversial claims.
8. **Default verification is `AI_DRAFT`.** Only a human reviewer may set
   `REVIEWED` or `VERIFIED` (with `lastReviewed`). Automated tooling must never
   overwrite a file whose `verification` is `REVIEWED` or `VERIFIED`.
9. **Neutral language.** Hold every candidate to the same depth and standard.
   No adjectives that favour or disparage. Never declare a winner.

## Field notes

- `identity.isIncumbent`: true only if the candidate currently holds the office
  they are contesting. `incumbentOffice` is set accordingly.
- `identity.hasExecutiveExperience`: true if they have ever held an elected
  executive office (president, vice-president, governor, deputy governor or
  LGA chairman) or a ministerial post.
- `test`:
  - Answer the readiness questions `r1`–`r10` for every candidate's future plans.
  - Incumbents also answer the performance questions `p1`–`p10`.
  - The question text is in `lib/compare/test-questions.ts`.
  - Use `assessment: "unknown"` when there is no evidence.
- `status` values:
  - `RESEARCHED`: most categories have at least limited evidence.
  - `INSUFFICIENT_DATA`: most categories are insufficient after a genuine search.
  - `IN_PROGRESS`: the research pass was interrupted.
- `gaps`: concrete follow-up tasks for a human researcher.
