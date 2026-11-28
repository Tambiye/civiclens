import Link from "next/link";
import type { IconType } from "react-icons";
import * as Fi from "react-icons/fi";
import type { Candidate } from "@/lib/candidates/types";
import type {
  CandidateResearch,
  CategoryKey,
  CategoryResearch,
  EvidenceLabel,
  RecordItem,
  VerificationStatus,
} from "@/lib/research/types";
import { CATEGORY_BY_KEY } from "@/lib/compare/categories";
import {
  MODE_DESCRIPTIONS,
  MODE_LABELS,
  type CompatibilityResult,
  type ComparisonMode,
} from "@/lib/compare/compatibility";
import {
  buildOverview,
  mergedSources,
  orderedCategories,
  quickComparison,
  testQuestionsFor,
  type MergedSource,
  type QuickRow,
  type Side,
} from "@/lib/compare/build";
import CandidateAvatar from "./CandidateAvatar";
import ShareButton from "./ShareButton";
import YourVerdict from "./YourVerdict";
import DeepAnalysis, { type RefMap } from "./DeepAnalysis";

export interface ComparisonViewProps {
  a: Side;
  b: Side;
  compat: CompatibilityResult;
  mode: ComparisonMode;
  /** Research problems (malformed files) per candidate id. */
  problems: Record<string, string[]>;
}

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                         */
/* ------------------------------------------------------------------ */

const LABEL_TEXT: Record<EvidenceLabel, string> = {
  FACT: "Fact",
  RECORD: "Record",
  PROMISE: "Promise",
  ANALYSIS: "Analysis",
  UNVERIFIED: "Unverified",
  DISPUTED: "Disputed",
};

const VERIFICATION_TEXT: Record<VerificationStatus, string> = {
  AI_DRAFT: "AI draft · pending review",
  UNVERIFIED: "Unverified",
  REVIEWED: "Reviewed",
  VERIFIED: "Verified",
  DISPUTED: "Disputed",
  OUTDATED: "May be outdated",
};

const EVIDENCE_TEXT = {
  strong: "Strong evidence",
  moderate: "Moderate evidence",
  limited: "Limited evidence",
  insufficient: "Insufficient evidence",
  none: "Not yet researched",
} as const;

const BASIS_TEXT = {
  record: "Based on record in office",
  proposal: "Based on proposals",
  mixed: "Record and proposals",
  none: "No record or proposals found",
} as const;

const KIND_TEXT: Record<RecordItem["kind"], string> = {
  achievement: "Achievement",
  project: "Project",
  decision: "Decision",
  policy: "Policy",
  outcome: "Outcome",
  failure: "Shortfall",
  delay: "Delay",
  controversy: "Controversy",
  unresolved: "Unresolved",
};

const ASSESSMENT_TEXT = { yes: "Yes", partly: "Partly", no: "No", unknown: "Unknown" } as const;

function Icon({ name }: { name: string }) {
  const C = (Fi as unknown as Record<string, IconType>)[name] ?? Fi.FiCircle;
  return <C aria-hidden="true" />;
}

function Badge({ kind, children }: { kind: string; children: React.ReactNode }) {
  return <span className={`cmp-badge cmp-badge--${kind}`}>{children}</span>;
}

function SideTag({ side }: { side: "a" | "b" }) {
  return (
    <span className={`cmp-side-tag cmp-side-tag--${side}`} aria-hidden="true">
      {side.toUpperCase()}
    </span>
  );
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </>
  );
}

type SourceIndex = (candidateId: string, sourceId: string) => { n: number; src: MergedSource } | null;

function SourceRefs({ ids, candidateId, index }: { ids: string[]; candidateId: string; index: SourceIndex }) {
  const refs = ids.map((id) => index(candidateId, id)).filter((r): r is { n: number; src: MergedSource } => !!r);
  if (!refs.length) return null;
  const unique = [...new Map(refs.map((r) => [r.n, r])).values()].sort((x, y) => x.n - y.n);
  return (
    <span className="cmp-refs">
      {/* Footnote-style: jump to the numbered entry in "Evidence and sources",
          which carries the full title and the outbound link. Keeping refs
          short matters, since a matchup can cite sources 1,000+ times. */}
      {unique.map(({ n, src }) => (
        <a key={n} href={`#src-${n}`} className="cmp-ref" aria-label={`Source ${n}, ${src.publisher}`}>
          [{n}]
        </a>
      ))}
    </span>
  );
}

/** Footnote numbers for just the sources one category cites (kept small). */
function refMapFor(r: CategoryResearch, candidateId: string, index: SourceIndex): RefMap {
  const ids = new Set([...r.sourceIds, ...(r.metrics ?? []).flatMap((m) => m.sourceIds)]);
  const out: RefMap = {};
  for (const id of ids) {
    const hit = index(candidateId, id);
    if (hit) out[id] = { n: hit.n, publisher: hit.src.publisher };
  }
  return out;
}

function sideOf(id: string, a: Side): "a" | "b" {
  return id === a.candidate.id ? "a" : "b";
}

function officeLine(c: Candidate): string {
  if (c.office === "president") return "Presidential candidate";
  if (c.office === "governor") return `Governorship candidate · ${c.state}`;
  return `Senatorial candidate · ${c.jurisdiction}`;
}

/* ------------------------------------------------------------------ */
/* Sections                                                             */
/* ------------------------------------------------------------------ */

function HeroCard({ side, s }: { side: "a" | "b"; s: Side }) {
  const c = s.candidate;
  const r = s.research;
  const offices = (r?.career ?? []).filter((e) => e.kind === "political-office" || e.kind === "appointment").slice(-3).reverse();
  return (
    <article className={`cmp-hero-card cmp-hero-card--${side}`}>
      <SideTag side={side} />
      <CandidateAvatar name={c.name} image={c.image} size="lg" priority />
      <h2>{c.name}</h2>
      <p className="cmp-hero-card__party">
        {c.partyName} <span>({c.party})</span>
      </p>
      <p className="cmp-hero-card__office">{officeLine(c)}</p>
      <div className="cmp-hero-card__chips">
        {c.incumbent && <Badge kind="neutral">Incumbent</Badge>}
        {c.candidacyStatus && c.candidacyStatus !== "Confirmed" && <Badge kind="disputed">Candidacy {c.candidacyStatus.toLowerCase()}</Badge>}
        {r?.identity.currentOffice && !c.incumbent && <Badge kind="neutral">{r.identity.currentOffice}</Badge>}
      </div>
      {offices.length > 0 ? (
        <ul className="cmp-hero-card__highlights">
          {offices.map((e) => (
            <li key={`${e.title}-${e.period}`}>
              <strong>{e.title}</strong> <span>{e.period}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cmp-hero-card__none">
          {r ? "No previous public office found in research." : "Career history not yet researched."}
        </p>
      )}
      {c.profileUrl && (
        <Link href={c.profileUrl} className="cmp-link">
          Full profile <Fi.FiArrowRight aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

function EvidenceLimited({ side, category }: { side: Side; category: CategoryKey }) {
  const c = side.candidate;
  const r = side.research?.categories[category];
  if (r && r.evidence === "insufficient") {
    return (
      <div className="cmp-limited">
        <p className="cmp-limited__title">
          <Fi.FiAlertCircle aria-hidden="true" /> Evidence is insufficient for a responsible assessment.
        </p>
        {r.analysis && <Paragraphs text={r.analysis} />}
        {(r.missing?.length ?? 0) > 0 && (
          <>
            <p className="cmp-limited__sub">What is missing:</p>
            <ul>
              {r.missing!.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
  return (
    <div className="cmp-limited">
      <p className="cmp-limited__title">
        <Fi.FiAlertCircle aria-hidden="true" /> {c.name} has not been researched for this category yet.
      </p>
      <p>
        No analysis is shown, and none is inferred. Available registry details: {c.partyName} candidate
        {c.age != null ? `, age ${c.age}` : ""}
        {c.qualification ? `, listed qualifications: ${c.qualification}` : ""}.
      </p>
    </div>
  );
}

function CategoryColumn({ side, sideKey, category, index }: { side: Side; sideKey: "a" | "b"; category: CategoryKey; index: SourceIndex }) {
  const r: CategoryResearch | undefined = side.research?.categories[category];
  const c = side.candidate;
  const body =
    !r || r.evidence === "insufficient" ? (
      <EvidenceLimited side={side} category={category} />
    ) : (
      <>
        <p className="cmp-col__summary">{r.summary}</p>
        <DeepAnalysis
          candidateId={c.id}
          category={category}
          wordCount={r.analysis.trim().split(/\s+/).length}
          refs={refMapFor(r, c.id, index)}
        />
        <p className="cmp-col__sources">
          Sources: <SourceRefs ids={r.sourceIds} candidateId={c.id} index={index} />
        </p>
      </>
    );
  return (
    <div className={`cmp-col cmp-col--${sideKey}`}>
      <header className="cmp-col__head">
        <SideTag side={sideKey} />
        <span className="cmp-col__name">{c.name}</span>
      </header>
      <div className="cmp-col__badges">
        <Badge kind={`ev-${r?.evidence ?? "none"}`}>{EVIDENCE_TEXT[r?.evidence ?? "none"]}</Badge>
        {r && r.evidence !== "insufficient" && <Badge kind="neutral">{BASIS_TEXT[r.basis]}</Badge>}
        {r && <Badge kind={`ver-${r.verification.toLowerCase()}`}>{VERIFICATION_TEXT[r.verification]}</Badge>}
      </div>
      {body}
    </div>
  );
}

function CategorySection({
  keyName,
  a,
  b,
  compat,
  row,
  index,
  open,
}: {
  keyName: CategoryKey;
  a: Side;
  b: Side;
  compat: CompatibilityResult;
  row: QuickRow;
  index: SourceIndex;
  open: boolean;
}) {
  const def = CATEGORY_BY_KEY[keyName];
  const applic = compat.categories.find((c) => c.key === keyName);
  const sameOffice = a.candidate.office === b.candidate.office;
  return (
    <details className="cmp-cat" id={`cat-${keyName}`} open={open}>
      <summary className="cmp-cat__summary">
        <span className="cmp-cat__icon">
          <Icon name={def.icon} />
        </span>
        <span className="cmp-cat__title">
          <h3>{def.title}</h3>
          <span className="cmp-cat__label">{row.label}</span>
        </span>
        <Fi.FiChevronDown className="cmp-cat__chev" aria-hidden="true" />
      </summary>
      <div className="cmp-cat__body">
        <p className="cmp-cat__overview">{def.overview}</p>
        <p className="cmp-cat__focus">
          <strong>What this looks at:</strong>{" "}
          {sameOffice
            ? def.focus[a.candidate.office]
            : `${a.candidate.name}: ${def.focus[a.candidate.office]} ${b.candidate.name}: ${def.focus[b.candidate.office]}`}
        </p>
        {applic && applic.notes.length > 0 && (
          <p className="cmp-note">
            <Fi.FiInfo aria-hidden="true" /> {applic.notes.join(" ")}
          </p>
        )}
        <div className="cmp-cat__cols">
          <CategoryColumn side={a} sideKey="a" category={keyName} index={index} />
          <CategoryColumn side={b} sideKey="b" category={keyName} index={index} />
        </div>
        <div className="cmp-cat__compare">
          <h4>Side by side</h4>
          <p>{row.detail}</p>
        </div>
      </div>
    </details>
  );
}

function RecordList({ side, sideKey, index }: { side: Side; sideKey: "a" | "b"; index: SourceIndex }) {
  const items = side.research?.record ?? [];
  return (
    <div className={`cmp-col cmp-col--${sideKey}`}>
      <header className="cmp-col__head">
        <SideTag side={sideKey} />
        <span className="cmp-col__name">{side.candidate.name}</span>
      </header>
      {items.length === 0 ? (
        <p className="cmp-muted">
          {side.research ? "No documented record items found in research." : "Record not yet researched."}
        </p>
      ) : (
        <ul className="cmp-record">
          {items.map((it) => (
            <li key={it.id} className={`cmp-record__item cmp-record__item--${it.kind}`}>
              <div className="cmp-record__meta">
                <Badge kind={`label-${it.label.toLowerCase()}`}>{LABEL_TEXT[it.label]}</Badge>
                <Badge kind="neutral">{KIND_TEXT[it.kind]}</Badge>
                {it.status && <Badge kind="neutral">Status: {it.status.replace(/-/g, " ")}</Badge>}
                {it.legalStatus && <Badge kind="disputed">Legal status: {it.legalStatus}</Badge>}
                {it.period && <span className="cmp-muted">{it.period}</span>}
              </div>
              <h4>{it.title}</h4>
              <p>{it.description}</p>
              <SourceRefs ids={it.sourceIds} candidateId={side.candidate.id} index={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const PLAN_FIELDS: [keyof NonNullable<CandidateResearch["plans"]>[number], string][] = [
  ["outcome", "Proposed outcome"],
  ["method", "How"],
  ["target", "Target"],
  ["timeline", "Timeline"],
  ["funding", "Funding"],
  ["assumptions", "Assumptions"],
  ["risks", "Risks"],
  ["dependencies", "Dependencies"],
  ["tradeoffs", "Trade-offs"],
  ["feasibility", "Feasibility"],
];

function PlanList({ side, sideKey, index }: { side: Side; sideKey: "a" | "b"; index: SourceIndex }) {
  const plans = side.research?.plans ?? [];
  return (
    <div className={`cmp-col cmp-col--${sideKey}`}>
      <header className="cmp-col__head">
        <SideTag side={sideKey} />
        <span className="cmp-col__name">{side.candidate.name}</span>
      </header>
      {plans.length === 0 ? (
        <p className="cmp-muted">
          {side.research
            ? "No published policy proposals were found. That may mean no manifesto has been released yet."
            : "Plans not yet researched."}
        </p>
      ) : (
        <ul className="cmp-plans">
          {plans.map((p) => (
            <li key={p.id} className="cmp-plan">
              <div className="cmp-record__meta">
                <Badge kind="label-promise">{p.label === "PROMISE" ? "Promise" : "Proposal"}</Badge>
                <Badge kind="neutral">{CATEGORY_BY_KEY[p.category]?.short ?? p.category}</Badge>
              </div>
              <h4>{p.title}</h4>
              <dl className="cmp-plan__fields">
                {PLAN_FIELDS.filter(([k]) => typeof p[k] === "string" && (p[k] as string).trim()).map(([k, label]) => (
                  <div key={k}>
                    <dt>{label}</dt>
                    <dd>{p[k] as string}</dd>
                  </div>
                ))}
              </dl>
              <SourceRefs ids={p.sourceIds} candidateId={side.candidate.id} index={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TestList({ side, sideKey, mode, index }: { side: Side; sideKey: "a" | "b"; mode: ComparisonMode; index: SourceIndex }) {
  const questions = testQuestionsFor(side, mode);
  const answers = new Map((side.research?.test ?? []).map((t) => [t.questionId, t]));
  const performance = questions.some((q) => q.id.startsWith("p"));
  return (
    <div className={`cmp-col cmp-col--${sideKey}`}>
      <header className="cmp-col__head">
        <SideTag side={sideKey} />
        <span className="cmp-col__name">{side.candidate.name}</span>
        <span className="cmp-muted">{performance ? "Performance in office + readiness of new plans" : "Readiness test"}</span>
      </header>
      <ol className="cmp-test">
        {questions.map((q) => {
          const t = answers.get(q.id);
          return (
            <li key={q.id} className="cmp-test__item">
              <div className="cmp-test__q">
                <span>{q.question}</span>
                {q.id.startsWith("r") && <span className={`cmp-assess cmp-assess--${t?.assessment ?? "unknown"}`}>{ASSESSMENT_TEXT[t?.assessment ?? "unknown"]}</span>}
              </div>
              <p className="cmp-test__a">
                {t?.answer ?? "Not yet assessed. No evidence has been reviewed for this question."}{" "}
                {t && <SourceRefs ids={t.sourceIds} candidateId={side.candidate.id} index={index} />}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function ComparisonView({ a, b, compat, mode, problems }: ComparisonViewProps) {
  const quick = quickComparison(a, b, compat);
  const quickByKey = new Map(quick.map((q) => [q.key, q]));
  const overview = buildOverview(a, b, compat);
  const sources = mergedSources(a, b);
  const order = orderedCategories(mode);

  // Global source numbering across both candidates.
  const urlIndex = new Map(sources.map((s, i) => [s.url.replace(/\/+$/, ""), i + 1]));
  const index: SourceIndex = (candidateId, sourceId) => {
    const side = candidateId === a.candidate.id ? a : b;
    const src = side.research?.sources.find((s) => s.id === sourceId);
    if (!src) return null;
    const n = urlIndex.get(src.url.replace(/\/+$/, ""));
    return n ? { n, src: sources[n - 1] } : null;
  };

  const dates = [a.research?.researchedAt, b.research?.researchedAt].filter(Boolean).sort();
  const anyDraft = [a, b].some((s) => s.research && s.research.verification === "AI_DRAFT");
  const pairKey = [a.candidate.id, b.candidate.id].sort().join("|");
  const swapHref = `/compare/${b.candidate.id}-vs-${a.candidate.id}${mode !== compat.defaultMode ? `?mode=${mode}` : ""}`;
  const title = `${a.candidate.name} vs ${b.candidate.name}`;
  const verdictCats = quick
    .filter((q) => CATEGORY_BY_KEY[q.key].weightable && compat.categories.find((c) => c.key === q.key)?.relevance !== "limited")
    .map((q) => ({
      key: q.key,
      title: CATEGORY_BY_KEY[q.key].title,
      incomplete: Object.values(q.evidence).some((e) => e === "none" || e === "insufficient"),
    }));
  const problemList = Object.entries(problems).flatMap(([id, ps]) =>
    ps.map((p) => `${id === a.candidate.id ? a.candidate.name : b.candidate.name}: ${p}`)
  );

  const nav = [
    ["overview", "Overview"],
    ["quick", "At a glance"],
    ["categories", "Issues"],
    ["record", "The record"],
    ["plans", "The plans"],
    ["test", "The test"],
    ["sources", "Sources"],
    ["verdict", "Your verdict"],
  ];

  return (
    <article className="cmp-page cmp-matchup">
      {/* A — Matchup hero */}
      <header className="cmp-hero">
        <div className="cmp-hero__context">
          <span className="cmp-eyebrow">2027 general election · {MODE_LABELS[mode]}</span>
          <p>
            {dates.length ? `Research as of ${dates[dates.length - 1]}` : "Research not yet available for either candidate"}
          </p>
        </div>
        <div className="cmp-hero__grid">
          <HeroCard side="a" s={a} />
          <div className="cmp-hero__vs">
            <span>vs</span>
            <Link href={swapHref} className="cmp-swap" aria-label="Swap sides" title="Swap sides (the analysis does not change)">
              <Fi.FiRepeat aria-hidden="true" />
            </Link>
          </div>
          <HeroCard side="b" s={b} />
        </div>
        <div className="cmp-hero__actions">
          <ShareButton title={title} />
          <Link href={`/compare?a=${a.candidate.id}&b=${b.candidate.id}`} className="cmp-btn cmp-btn--ghost">
            <Fi.FiEdit2 aria-hidden="true" /> Change candidates
          </Link>
        </div>
        {compat.availableModes.length > 1 && (
          <nav className="cmp-modebar" aria-label="Comparison mode">
            {compat.availableModes.map((m) => (
              <Link
                key={m}
                href={`/compare/${a.candidate.id}-vs-${b.candidate.id}${m === compat.defaultMode ? "" : `?mode=${m}`}`}
                className={`cmp-mode ${m === mode ? "is-active" : ""}`}
                aria-current={m === mode ? "page" : undefined}
                scroll={false}
              >
                {MODE_LABELS[m]}
              </Link>
            ))}
          </nav>
        )}
        <p className="cmp-hero__mode">{MODE_DESCRIPTIONS[mode]}</p>
      </header>

      <nav className="cmp-toc" aria-label="On this page">
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      {(anyDraft || problemList.length > 0 || compat.evidence.note) && (
        <div className="cmp-alert cmp-alert--info" role="note">
          <Fi.FiInfo aria-hidden="true" />
          <div>
            {anyDraft && (
              <p>
                <strong>About this research:</strong> the analysis on this page is an AI-assisted draft compiled from the cited public
                sources. It has not yet been reviewed by an editor. Every claim is labelled and linked, so check the sources.
              </p>
            )}
            {compat.evidence.note && <p>{compat.evidence.note}</p>}
            {problemList.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* B — Overview */}
      <section id="overview" className="cmp-section">
        <h2 className="cmp-h2">Overview</h2>
        <div className="cmp-overview">
          <div className="cmp-overview__who">
            {overview.whoTheyAre.map((w) => (
              <p key={w.id}>
                <SideTag side={sideOf(w.id, a)} /> {w.text}
              </p>
            ))}
          </div>
          <div className="cmp-overview__grid">
            <div className="cmp-panel">
              <h3>Why they&apos;re compared</h3>
              <ul>{compat.reasons.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
            {overview.similarities.length > 0 && (
              <div className="cmp-panel">
                <h3>Similarities</h3>
                <ul>{overview.similarities.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
            {overview.differences.length > 0 && (
              <div className="cmp-panel">
                <h3>Key differences</h3>
                <ul>{overview.differences.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
            {compat.contextNotes.length > 0 && (
              <div className="cmp-panel">
                <h3>Context to keep in mind</h3>
                <ul>{compat.contextNotes.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
            <div className="cmp-panel">
              <h3>Evidence coverage</h3>
              <p>{overview.coverage}</p>
            </div>
          </div>
          <p className="cmp-motto">We don&apos;t tell you who to support. We help you understand who you&apos;re supporting.</p>
        </div>
      </section>

      {/* C — Quick comparison */}
      <section id="quick" className="cmp-section">
        <h2 className="cmp-h2">At a glance</h2>
        <p className="cmp-lede">
          These labels describe the <em>evidence</em>, not who is better. No scores are invented.
        </p>
        <ul className="cmp-quick">
          {order.map((k) => {
            const q = quickByKey.get(k)!;
            const def = CATEGORY_BY_KEY[k];
            return (
              <li key={k}>
                <a href={`#cat-${k}`} className="cmp-quick__row">
                  <span className="cmp-quick__icon">
                    <Icon name={def.icon} />
                  </span>
                  <span className="cmp-quick__title">{def.short}</span>
                  <span className={`cmp-quick__label cmp-quick__label--${q.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                    {q.label}
                    {q.refersTo && <> · {q.refersTo === a.candidate.id ? a.candidate.name : b.candidate.name}</>}
                  </span>
                  <span className="cmp-quick__dots" aria-hidden="true">
                    <i className={`cmp-dot cmp-dot--${q.evidence[a.candidate.id]}`} />
                    <i className={`cmp-dot cmp-dot--${q.evidence[b.candidate.id]}`} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="cmp-legend" aria-hidden="true">
          Dots show evidence depth for A then B: <i className="cmp-dot cmp-dot--strong" /> strong <i className="cmp-dot cmp-dot--moderate" /> moderate{" "}
          <i className="cmp-dot cmp-dot--limited" /> limited <i className="cmp-dot cmp-dot--none" /> insufficient or not researched
        </p>
      </section>

      {/* D — Categories */}
      <section id="categories" className="cmp-section">
        <h2 className="cmp-h2">Issue by issue</h2>
        <p className="cmp-lede">
          Each issue has a quick read for both candidates and a deeper analysis, with labelled evidence and numbered sources.
        </p>
        <div className="cmp-cats">
          {order.map((k, i) => (
            <CategorySection key={k} keyName={k} a={a} b={b} compat={compat} row={quickByKey.get(k)!} index={index} open={i === 0} />
          ))}
        </div>
      </section>

      {/* E — The record */}
      <section id="record" className="cmp-section">
        <h2 className="cmp-h2">The record</h2>
        <p className="cmp-lede">
          Documented achievements, projects, decisions, shortfalls and controversies. Project status follows the lifecycle from
          announced to independently verified. Allegations are labelled with their legal status.
        </p>
        <div className="cmp-cols">
          <RecordList side={a} sideKey="a" index={index} />
          <RecordList side={b} sideKey="b" index={index} />
        </div>
      </section>

      {/* F — The plans */}
      <section id="plans" className="cmp-section">
        <h2 className="cmp-h2">The plans</h2>
        <p className="cmp-lede">Future commitments, labelled as promises or proposals. None of these are results.</p>
        <div className="cmp-cols">
          <PlanList side={a} sideKey="a" index={index} />
          <PlanList side={b} sideKey="b" index={index} />
        </div>
      </section>

      {/* G — The test */}
      <section id="test" className="cmp-section">
        <h2 className="cmp-h2">The test</h2>
        <p className="cmp-lede">
          Credibility and capacity to deliver. Incumbents are also asked how they performed in office. &ldquo;Unknown&rdquo; means
          no evidence was found, not a negative judgement.
        </p>
        <div className="cmp-cols">
          <TestList side={a} sideKey="a" mode={mode} index={index} />
          <TestList side={b} sideKey="b" mode={mode} index={index} />
        </div>
      </section>

      {/* H — Sources */}
      <section id="sources" className="cmp-section">
        <h2 className="cmp-h2">Evidence and sources</h2>
        {sources.length === 0 ? (
          <p className="cmp-muted">No sources yet. Neither candidate has completed research.</p>
        ) : (
          <ol className="cmp-sources">
            {sources.map((s, i) => (
              <li key={s.url} id={`src-${i + 1}`} className="cmp-source">
                <span className="cmp-source__n">{i + 1}</span>
                <div>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="cmp-source__title">
                    {s.title} <Fi.FiExternalLink aria-hidden="true" />
                  </a>
                  <p className="cmp-source__meta">
                    {s.publisher} · {s.type.replace(/-/g, " ")}
                    {s.published && <> · published {s.published}</>} · accessed {s.accessed}
                  </p>
                  <p className="cmp-source__claim">Supports: {s.claim}</p>
                  <div className="cmp-source__tags">
                    {s.candidateIds.map((id) => (
                      <SideTag key={id} side={sideOf(id, a)} />
                    ))}
                    <Badge kind={`ver-${s.verification.toLowerCase()}`}>{VERIFICATION_TEXT[s.verification]}</Badge>
                    <Badge kind="neutral">Quality: {s.quality}</Badge>
                    {s.categories.slice(0, 4).map((c) => (
                      <Badge key={c} kind="neutral">
                        {CATEGORY_BY_KEY[c]?.short ?? c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
        <p className="cmp-muted">
          If a link has moved or stopped working, the publisher and title above should let you find the document.
        </p>
      </section>

      {/* I — Your verdict */}
      <section id="verdict" className="cmp-section">
        <h2 className="cmp-h2">Your verdict</h2>
        <YourVerdict
          pairKey={pairKey}
          a={{ id: a.candidate.id, name: a.candidate.name }}
          b={{ id: b.candidate.id, name: b.candidate.name }}
          categories={verdictCats}
        />
      </section>
    </article>
  );
}
