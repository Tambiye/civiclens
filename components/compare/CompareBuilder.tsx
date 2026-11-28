"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  FiArrowRight,
  FiRepeat,
  FiPlus,
  FiX,
  FiAlertTriangle,
  FiInfo,
  FiCheckCircle,
} from "react-icons/fi";
import type { CandidateSummary } from "@/lib/candidates/types";
import CandidateAvatar from "./CandidateAvatar";
import CandidatePicker, { STATUS_TEXT } from "./CandidatePicker";
import SurpriseMe, { type RandomResponse } from "./SurpriseMe";

interface CheckResponse {
  a: CandidateSummary | null;
  b: CandidateSummary | null;
  missing: string[];
  compatibility: {
    allowed: boolean;
    comparability: "direct" | "contextual" | "not-comparable";
    label: string;
    reasons: string[];
    contextNotes: string[];
    defaultMode: string;
    modes: { id: string; label: string }[];
    evidenceNote: string | null;
  } | null;
}

const OFFICE_WORD = { president: "Presidential candidate", governor: "Governorship candidate", senator: "Senatorial candidate" };
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function Slot({
  side,
  candidate,
  loading,
  onPick,
  onClear,
}: {
  side: "A" | "B";
  candidate: CandidateSummary | null;
  loading: boolean;
  onPick: () => void;
  onClear: () => void;
}) {
  if (loading) {
    return (
      <div className={`cmp-slot cmp-slot--${side.toLowerCase()} is-loading`} aria-busy="true">
        <span className="cmp-skeleton cmp-skeleton--avatar" />
        <span className="cmp-skeleton cmp-skeleton--line" />
        <span className="cmp-skeleton cmp-skeleton--line short" />
      </div>
    );
  }
  if (!candidate) {
    return (
      <button type="button" className={`cmp-slot cmp-slot--empty cmp-slot--${side.toLowerCase()}`} onClick={onPick}>
        <span className="cmp-slot__plus">
          <FiPlus aria-hidden="true" />
        </span>
        <span className="cmp-slot__label">Candidate {side}</span>
        <span className="cmp-slot__hint">Search by name, party, state or office</span>
      </button>
    );
  }
  return (
    <div className={`cmp-slot cmp-slot--${side.toLowerCase()}`}>
      <span className="cmp-slot__tag">Candidate {side}</span>
      <CandidateAvatar name={candidate.name} image={candidate.image} size="lg" />
      <h3 className="cmp-slot__name">{candidate.name}</h3>
      <p className="cmp-slot__meta">
        {candidate.partyName} ({candidate.party})
      </p>
      <p className="cmp-slot__meta">
        {OFFICE_WORD[candidate.office]}
        {candidate.office !== "president" && <> · {candidate.jurisdiction}</>}
        {candidate.incumbent && <span className="cmp-chip cmp-chip--quiet">Incumbent</span>}
      </p>
      {candidate.highlights.length > 0 && (
        <ul className="cmp-slot__highlights">
          {candidate.highlights.slice(0, 2).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <span className={`cmp-research cmp-research--${candidate.researchStatus.toLowerCase()}`}>
        {STATUS_TEXT[candidate.researchStatus] ?? candidate.researchStatus}
      </span>
      <div className="cmp-slot__actions">
        <button type="button" className="cmp-link-btn" onClick={onPick}>
          Change
        </button>
        <button type="button" className="cmp-icon-btn" onClick={onClear} aria-label={`Remove candidate ${side}`}>
          <FiX />
        </button>
      </div>
    </div>
  );
}

export default function CompareBuilder() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const rawA = params.get("a");
  const rawB = params.get("b");
  const idA = rawA && ID_RE.test(rawA) ? rawA : null;
  const idB = rawB && ID_RE.test(rawB) ? rawB : null;
  const malformed = (rawA && !idA) || (rawB && !idB);

  const [data, setData] = useState<CheckResponse | null>(null);
  /** Key of the id pair the current data/error belongs to. */
  const [settledKey, setSettledKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [picking, setPicking] = useState<"a" | "b" | null>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [why, setWhy] = useState<RandomResponse | null>(null);

  /** URL is the source of truth, so refresh, share and back/forward all work. */
  const setIds = useCallback(
    (a: string | null, b: string | null, opts: { push?: boolean } = {}) => {
      const qs = new URLSearchParams();
      if (a) qs.set("a", a);
      if (b) qs.set("b", b);
      const url = qs.size ? `${pathname}?${qs}` : pathname;
      if (opts.push) router.push(url, { scroll: false });
      else router.replace(url, { scroll: false });
    },
    [pathname, router]
  );

  useEffect(() => {
    // With no ids there is nothing to fetch; the render derives empty slots.
    if (!idA && !idB) return;
    const controller = new AbortController();
    const key = `${idA}|${idB}`;
    const qs = new URLSearchParams();
    if (idA) qs.set("a", idA);
    if (idB) qs.set("b", idB);
    fetch(`/api/compare/check?${qs}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const json: CheckResponse = await res.json();
        setData(json);
        setError(null);
        setMode((m) => (json.compatibility?.modes.some((x) => x.id === m) ? m : json.compatibility?.defaultMode ?? null));
      })
      .catch(() => {
        if (!controller.signal.aborted) setError("Couldn't load the selected candidates. Check your connection and try again.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setSettledKey(key);
      });
    return () => controller.abort();
  }, [idA, idB]);

  // Loading is derived: the URL changed and the matching response hasn't arrived.
  const loading = (!!idA || !!idB) && settledKey !== `${idA}|${idB}`;
  const a = idA && data?.a?.id === idA ? data.a : null;
  const b = idB && data?.b?.id === idB ? data.b : null;
  const compat = a && b ? data?.compatibility ?? null : null;
  const missing = !loading && (idA || idB) ? (data?.missing ?? []) : [];

  const pick = (c: CandidateSummary) => {
    setWhy(null);
    if (picking === "a") setIds(c.id, idB === c.id ? null : idB, { push: true });
    else setIds(idA === c.id ? null : idA, c.id, { push: true });
    setPicking(null);
  };

  const href =
    a && b && compat?.allowed
      ? `/compare/${a.id}-vs-${b.id}${mode && mode !== compat.defaultMode ? `?mode=${mode}` : ""}`
      : null;

  return (
    <div className="cmp-builder">
      {(malformed || missing.length > 0) && (
        <div className="cmp-alert cmp-alert--warn" role="alert">
          <FiAlertTriangle aria-hidden="true" />
          <span>
            {malformed
              ? "The link contains an invalid candidate id."
              : `The ${missing.map((m) => `candidate ${m.toUpperCase()}`).join(" and ")} in this link could not be found. They may have been removed or the link is out of date.`}{" "}
            <button type="button" className="cmp-link-btn" onClick={() => setIds(a?.id ?? null, b?.id ?? null)}>
              Clear it
            </button>
          </span>
        </div>
      )}
      {error && !loading && (
        <div className="cmp-alert cmp-alert--warn" role="alert">
          <FiAlertTriangle aria-hidden="true" /> {error}
        </div>
      )}

      <div className="cmp-builder__slots">
        <Slot side="A" candidate={a} loading={loading && !!idA && !a} onPick={() => setPicking("a")} onClear={() => setIds(null, idB)} />
        <button
          type="button"
          className="cmp-swap"
          onClick={() => setIds(idB, idA)}
          disabled={!idA && !idB}
          aria-label="Swap candidates A and B"
          title="Swap sides (the analysis does not change)"
        >
          <FiRepeat aria-hidden="true" />
        </button>
        <Slot side="B" candidate={b} loading={loading && !!idB && !b} onPick={() => setPicking("b")} onClear={() => setIds(idA, null)} />
      </div>

      {why && (
        <div className="cmp-panel cmp-why">
          <h3>Why these two?</h3>
          {why.message && <p>{why.message}</p>}
          <ul>
            {why.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {a && b && compat && (
        <div className={`cmp-panel cmp-eligibility cmp-eligibility--${compat.allowed ? compat.comparability : "blocked"}`}>
          <div className="cmp-eligibility__head">
            {compat.allowed ? <FiCheckCircle aria-hidden="true" /> : <FiAlertTriangle aria-hidden="true" />}
            <strong>{compat.allowed ? compat.label : "This comparison isn't available"}</strong>
          </div>
          <ul className="cmp-eligibility__reasons">
            {compat.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
            {compat.contextNotes.map((r) => (
              <li key={r} className="is-context">
                <FiInfo aria-hidden="true" /> {r}
              </li>
            ))}
          </ul>
          {compat.evidenceNote && <p className="cmp-eligibility__evidence">{compat.evidenceNote}</p>}

          {compat.allowed && compat.modes.length > 1 && (
            <fieldset className="cmp-modes">
              <legend>Comparison mode</legend>
              {compat.modes.map((m) => (
                <label key={m.id} className={`cmp-mode ${mode === m.id ? "is-active" : ""}`}>
                  <input type="radio" name="mode" value={m.id} checked={mode === m.id} onChange={() => setMode(m.id)} />
                  {m.label}
                </label>
              ))}
            </fieldset>
          )}
          {!compat.allowed && (
            <button type="button" className="cmp-btn cmp-btn--ghost" onClick={() => setPicking("b")}>
              Choose a compatible candidate B
            </button>
          )}
        </div>
      )}

      <div className="cmp-builder__actions">
        {href ? (
          <Link href={href} className="cmp-btn cmp-btn--primary cmp-btn--lg">
            Compare {a!.name.split(" ")[0]} and {b!.name.split(" ")[0]} <FiArrowRight aria-hidden="true" />
          </Link>
        ) : (
          <button type="button" className="cmp-btn cmp-btn--primary cmp-btn--lg" disabled>
            {!a || !b ? `Select ${!a && !b ? "two candidates" : "one more candidate"} to compare` : "Choose a compatible pair"}
          </button>
        )}
        <SurpriseMe
          onMatchup={(m) => {
            setWhy(m);
            setIds(m.a.id, m.b.id, { push: true });
          }}
        />
      </div>

      <CandidatePicker
        open={picking !== null}
        title={picking === "a" ? "Choose candidate A" : "Choose candidate B"}
        against={picking === "a" ? b : picking === "b" ? a : null}
        onSelect={pick}
        onClose={() => setPicking(null)}
      />
    </div>
  );
}
