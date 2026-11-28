import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";
import {
  ALL_CANDIDATES,
  getCandidate,
  getResearchSummary,
} from "@/lib/candidates/registry";
import { evaluateCompatibility, resolveMode } from "@/lib/compare/compatibility";
import { parseMatchup } from "@/lib/compare/build";
import { loadResearch } from "@/lib/research/load";
import type { CandidateResearch } from "@/lib/research/types";
import ComparisonView from "@/components/compare/ComparisonView";
import CandidateAvatar from "@/components/compare/CandidateAvatar";

type Props = {
  params: Promise<{ matchup: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { matchup } = await params;
  const ids = parseMatchup(matchup);
  const a = getCandidate(ids?.a);
  const b = getCandidate(ids?.b);
  if (!a || !b) return { title: "Comparison not found | PoliPeek" };
  // Both orders show the same analysis; point search engines at one.
  const [x, y] = [a.id, b.id].sort();
  return {
    title: `${a.name} vs ${b.name}: records, plans and evidence | PoliPeek`,
    description: `A neutral, evidence-labelled comparison of ${a.name} (${a.party}) and ${b.name} (${b.party}).`,
    alternates: { canonical: `/compare/${x}-vs-${y}` },
  };
}

export default function MatchupPage({ params, searchParams }: Props) {
  return (
    <Suspense fallback={<MatchupSkeleton />}>
      {Promise.all([params, searchParams]).then(([p, sp]) => (
        <Matchup slug={p.matchup} mode={typeof sp.mode === "string" ? sp.mode : null} />
      ))}
    </Suspense>
  );
}

async function Matchup({ slug, mode }: { slug: string; mode: string | null }) {
  "use cache";
  cacheLife("hours");

  const ids = parseMatchup(slug);
  if (!ids) {
    return (
      <Problem title="This comparison link isn't valid">
        Comparison links look like <code>/compare/first-candidate-vs-second-candidate</code>. Start a new comparison
        instead.
      </Problem>
    );
  }
  const a = getCandidate(ids.a);
  const b = getCandidate(ids.b);
  if (!a || !b) {
    const found = a ?? b;
    return (
      <Problem
        title="We couldn't find one of these candidates"
        action={found ? { href: `/compare?a=${found.id}`, label: `Keep ${found.name} and choose someone else` } : undefined}
      >
        {!a && !b ? "Neither candidate" : `Candidate ${!a ? "A" : "B"}`} in this link isn&apos;t in our list. They may have
        been withdrawn or renamed, or the link may be out of date.
      </Problem>
    );
  }

  const compat = evaluateCompatibility(a, b, getResearchSummary);
  if (!compat.allowed) {
    const alternatives = ALL_CANDIDATES.filter((c) => c.raceKey === a.raceKey && c.id !== a.id)
      .sort((x, y) => (getResearchSummary(y.id)?.sources ?? 0) - (getResearchSummary(x.id)?.sources ?? 0))
      .slice(0, 4);
    return (
      <Problem
        title={a.id === b.id ? "Choose two different candidates" : "These two can't be compared fairly"}
        action={{ href: `/compare?a=${a.id}`, label: `Compare ${a.name} with someone else` }}
      >
        {compat.reasons.join(" ")}
        {alternatives.length > 0 && (
          <span className="cmp-problem__alts">
            <span>People {a.name} is actually running against:</span>
            {alternatives.map((c) => (
              <Link key={c.id} href={`/compare/${a.id}-vs-${c.id}`} className="cmp-problem__alt">
                <CandidateAvatar name={c.name} image={c.image} size="sm" />
                {c.name} ({c.party})
              </Link>
            ))}
          </span>
        )}
      </Problem>
    );
  }

  const [ra, rb] = await Promise.all([loadResearch(a.id), loadResearch(b.id)]);
  const problems: Record<string, string[]> = {};
  const unwrap = (id: string, r: Awaited<ReturnType<typeof loadResearch>>): CandidateResearch | null => {
    if (r.state === "ok") {
      if (r.problems.length) problems[id] = r.problems;
      return r.research;
    }
    if (r.state === "error") problems[id] = [r.message];
    return null;
  };

  return (
    <ComparisonView
      a={{ candidate: a, research: unwrap(a.id, ra) }}
      b={{ candidate: b, research: unwrap(b.id, rb) }}
      compat={compat}
      mode={resolveMode(mode, compat)}
      problems={problems}
    />
  );
}

function Problem({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: { href: string; label: string };
}) {
  return (
    <div className="cmp-page">
      <div className="cmp-problem" role="alert">
        <FiAlertTriangle aria-hidden="true" className="cmp-problem__icon" />
        <h1>{title}</h1>
        <p>{children}</p>
        <div className="cmp-problem__actions">
          {action && (
            <Link href={action.href} className="cmp-btn cmp-btn--primary">
              {action.label}
            </Link>
          )}
          <Link href="/compare" className="cmp-btn cmp-btn--ghost">
            <FiArrowLeft aria-hidden="true" /> Start a new comparison
          </Link>
        </div>
      </div>
    </div>
  );
}

function MatchupSkeleton() {
  return (
    <div className="cmp-page" aria-busy="true" aria-label="Loading comparison">
      <div className="cmp-hero">
        <div className="cmp-hero__grid">
          {[0, 1].map((i) => (
            <div key={i} className="cmp-hero-card is-loading">
              <span className="cmp-skeleton cmp-skeleton--avatar" />
              <span className="cmp-skeleton cmp-skeleton--line" />
              <span className="cmp-skeleton cmp-skeleton--line short" />
            </div>
          ))}
        </div>
      </div>
      {[0, 1, 2].map((i) => (
        <div key={i} className="cmp-skeleton cmp-skeleton--block" />
      ))}
    </div>
  );
}
