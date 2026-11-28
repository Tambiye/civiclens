"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShuffle, FiArrowRight, FiRefreshCw } from "react-icons/fi";
import type { CandidateSummary } from "@/lib/candidates/types";
import CandidateAvatar from "./CandidateAvatar";

export interface RandomResponse {
  a: CandidateSummary;
  b: CandidateSummary;
  mode: string;
  modeLabel: string;
  reasons: string[];
  href: string;
  message: string | null;
}

const RECENT_KEY = "polipeek.recentMatchups";

function readRecent(): string[] {
  try {
    const v = JSON.parse(sessionStorage.getItem(RECENT_KEY) ?? "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(-20) : [];
  } catch {
    return [];
  }
}

function remember(a: string, b: string) {
  const key = a < b ? `${a}|${b}` : `${b}|${a}`;
  try {
    sessionStorage.setItem(RECENT_KEY, JSON.stringify([...readRecent().filter((k) => k !== key), key].slice(-20)));
  } catch {
    /* storage unavailable: repeats are merely more likely */
  }
}

/**
 * "Surprise me": asks the server for an informative, eligible matchup and
 * explains why the two were paired. Recently shown pairs are excluded. The
 * button is disabled while a request is pending, so double taps can't race.
 */
export default function SurpriseMe({
  onMatchup,
  className = "",
  label = "Surprise me",
}: {
  /** If provided, the matchup is handed to the caller instead of linked. */
  onMatchup?: (m: RandomResponse) => void;
  className?: string;
  label?: string;
}) {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<RandomResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    if (pending) return;
    setPending(true);
    setError(null);
    try {
      const exclude = readRecent().join(",");
      const res = await fetch(`/api/compare/random?exclude=${encodeURIComponent(exclude)}`, { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "No matchup available.");
      remember(data.a.id, data.b.id);
      if (onMatchup) onMatchup(data);
      else setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't suggest a matchup. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className={`cmp-surprise ${className}`}>
      <button type="button" className="cmp-btn cmp-btn--ghost" onClick={run} disabled={pending} aria-busy={pending}>
        <FiShuffle aria-hidden="true" />
        {pending ? "Finding a matchup…" : label}
      </button>
      {error && (
        <p className="cmp-surprise__error" role="alert">
          {error}
        </p>
      )}
      {result && !onMatchup && (
        <div className="cmp-surprise__card" aria-live="polite">
          <div className="cmp-surprise__pair">
            <CandidateAvatar name={result.a.name} image={result.a.image} size="sm" />
            <strong>{result.a.name}</strong>
            <span className="cmp-vs">vs</span>
            <strong>{result.b.name}</strong>
            <CandidateAvatar name={result.b.name} image={result.b.image} size="sm" />
          </div>
          {result.message && <p className="cmp-surprise__note">{result.message}</p>}
          <p className="cmp-surprise__why">Why these two?</p>
          <ul>
            {result.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div className="cmp-surprise__actions">
            <Link href={result.href} className="cmp-btn cmp-btn--primary">
              Open comparison <FiArrowRight aria-hidden="true" />
            </Link>
            <button type="button" className="cmp-btn cmp-btn--ghost" onClick={run} disabled={pending}>
              <FiRefreshCw aria-hidden="true" /> Try another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
