"use client";

import { useRef, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import type { CategoryMetric } from "@/lib/research/types";

interface Deep {
  analysis: string;
  metrics: CategoryMetric[];
  strengths: string[];
  limitations: string[];
  unknowns: string[];
}

/** Maps this candidate's source ids to page-wide footnote numbers. */
export type RefMap = Record<string, { n: number; publisher: string }>;

function Refs({ ids, refs }: { ids: string[]; refs: RefMap }) {
  const nums = [...new Map(ids.map((id) => refs[id]).filter(Boolean).map((r) => [r.n, r])).values()].sort(
    (a, b) => a.n - b.n
  );
  if (!nums.length) return null;
  return (
    <span className="cmp-refs">
      {nums.map((r) => (
        <a key={r.n} href={`#src-${r.n}`} className="cmp-ref" aria-label={`Source ${r.n}, ${r.publisher}`}>
          [{r.n}]
        </a>
      ))}
    </span>
  );
}

/**
 * "Read the full analysis": fetched from /api/research on first expand and
 * kept for the rest of the visit. Failures show a retry instead of breaking
 * the category.
 */
export default function DeepAnalysis({
  candidateId,
  category,
  wordCount,
  refs,
}: {
  candidateId: string;
  category: string;
  wordCount: number;
  refs: RefMap;
}) {
  const [data, setData] = useState<Deep | null>(null);
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const inflight = useRef(false);

  const load = async () => {
    if (data || inflight.current) return;
    inflight.current = true;
    setState("loading");
    try {
      const res = await fetch(`/api/research/${encodeURIComponent(candidateId)}?category=${encodeURIComponent(category)}`);
      if (!res.ok) throw new Error();
      setData(await res.json());
      setState("idle");
    } catch {
      setState("error");
    } finally {
      inflight.current = false;
    }
  };

  return (
    <details
      className="cmp-col__deep"
      onToggle={(e) => {
        if ((e.currentTarget as HTMLDetailsElement).open) load();
      }}
    >
      <summary>Read the full analysis ({wordCount} words)</summary>
      {state === "loading" && (
        <div className="cmp-col__loading" aria-busy="true">
          <span className="cmp-skeleton cmp-skeleton--line" />
          <span className="cmp-skeleton cmp-skeleton--line" />
          <span className="cmp-skeleton cmp-skeleton--line short" />
        </div>
      )}
      {state === "error" && (
        <p className="cmp-limited__title" role="alert">
          <FiAlertCircle aria-hidden="true" /> Couldn&apos;t load the analysis.{" "}
          <button type="button" className="cmp-link-btn" onClick={load}>
            Try again
          </button>
        </p>
      )}
      {data && (
        <>
          <div className="cmp-col__analysis">
            {data.analysis
              .split(/\n\s*\n/)
              .map((p) => p.trim())
              .filter(Boolean)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
          {data.metrics.length > 0 && (
            <dl className="cmp-metrics">
              {data.metrics.map((m) => (
                <div key={m.label} className="cmp-metric">
                  <dt>{m.label}</dt>
                  <dd>
                    {m.value}
                    {m.period && <span> · {m.period}</span>}
                    <Refs ids={m.sourceIds} refs={refs} />
                    {m.note && <small>{m.note}</small>}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <div className="cmp-col__lists">
            {(
              [
                ["Documented strengths", data.strengths],
                ["Limitations and concerns", data.limitations],
                ["Still unresolved or unknown", data.unknowns],
              ] as const
            ).map(([title, items]) =>
              items.length ? (
                <div key={title}>
                  <h5>{title}</h5>
                  <ul>
                    {items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </>
      )}
    </details>
  );
}
