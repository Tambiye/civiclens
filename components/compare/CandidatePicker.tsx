"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FiSearch, FiX, FiAlertCircle, FiCheck } from "react-icons/fi";
import type { CandidateSummary, OfficeType } from "@/lib/candidates/types";
import CandidateAvatar from "./CandidateAvatar";
import { useCandidateSearch, type SearchItem } from "./useCandidateSearch";

type Scope = "race" | "office" | "all" | OfficeType;

const OFFICE_TABS: { id: Scope; label: string }[] = [
  { id: "all", label: "All" },
  { id: "president", label: "Presidential" },
  { id: "governor", label: "Governorship" },
  { id: "senator", label: "Senate" },
];

const OFFICE_WORD: Record<OfficeType, string> = {
  president: "Presidential",
  governor: "Governorship",
  senator: "Senatorial",
};

export const STATUS_TEXT: Record<string, string> = {
  RESEARCHED: "Researched",
  VERIFIED: "Verified",
  REVIEW_REQUIRED: "Needs review",
  INSUFFICIENT_DATA: "Limited public data",
  IN_PROGRESS: "Research in progress",
  NOT_STARTED: "Not yet researched",
};

/**
 * Searchable candidate picker in a native modal <dialog> (focus trapping,
 * Escape to close and inert background come from the platform).
 * When `against` is set, results are annotated with compatibility, and
 * incompatible candidates are shown disabled with the reason.
 */
export default function CandidatePicker({
  open,
  title,
  against,
  onSelect,
  onClose,
}: {
  open: boolean;
  title: string;
  against: CandidateSummary | null;
  onSelect: (c: CandidateSummary) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const headingId = useId();
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<Scope>(against ? "race" : "all");
  const [limit, setLimit] = useState(30);

  // Open/close the native dialog in step with the prop.
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      setScope(against ? "race" : "all");
      setLimit(30);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) d.close();
  }, [open, against]);

  const office: OfficeType | "all" =
    scope === "race" || scope === "office" ? (against?.office ?? "all") : scope;
  const search = useCandidateSearch({
    query,
    office,
    race: scope === "race" ? against?.raceKey : undefined,
    against: against?.id,
    limit,
    enabled: open,
  });

  const tabs: { id: Scope; label: string }[] = against
    ? [
        { id: "race", label: against.office === "president" ? "Presidential race" : "Same race" },
        ...(against.office !== "president"
          ? [{ id: "office" as Scope, label: `All ${OFFICE_WORD[against.office].toLowerCase()}` }]
          : []),
        { id: "all", label: "All offices" },
      ]
    : OFFICE_TABS;

  const choose = (c: SearchItem) => {
    if (c.compatibility && !c.compatibility.allowed) return;
    onSelect(c);
    setQuery("");
  };

  return (
    <dialog
      ref={ref}
      className="cmp-picker"
      aria-labelledby={headingId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose(); // backdrop click
      }}
    >
      <div className="cmp-picker__panel">
        <header className="cmp-picker__header">
          <h2 id={headingId}>{title}</h2>
          <button type="button" className="cmp-icon-btn" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </header>

        {against && (
          <p className="cmp-picker__context">
            Comparing with <strong>{against.name}</strong> ({against.party}, {against.jurisdiction}).
          </p>
        )}

        <label className="cmp-search">
          <FiSearch aria-hidden="true" />
          <span className="sr-only">Search candidates</span>
          <input
            ref={inputRef}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            placeholder="Name, party, state, district or office"
            value={query}
            maxLength={80}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(30);
            }}
          />
        </label>

        <div className="cmp-tabs" role="tablist" aria-label="Filter by office">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={scope === t.id}
              className={`cmp-tab ${scope === t.id ? "is-active" : ""}`}
              onClick={() => {
                setScope(t.id);
                setLimit(30);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="cmp-picker__meta" aria-live="polite">
          {search.loading ? "Searching…" : search.error ? null : `${search.total.toLocaleString()} candidate${search.total === 1 ? "" : "s"}`}
        </div>

        <ul className="cmp-picker__list">
          {search.error && (
            <li className="cmp-empty">
              <FiAlertCircle aria-hidden="true" /> {search.error}{" "}
              <button type="button" className="cmp-link-btn" onClick={search.retry}>
                Try again
              </button>
            </li>
          )}
          {!search.loading && !search.error && search.results.length === 0 && (
            <li className="cmp-empty">
              No candidates match{query.trim() ? <> “{query.trim()}”</> : null} in this filter.
              {Object.entries(search.outsideFilter).map(([o, n]) => (
                <span key={o}>
                  {" "}
                  {n} match{n === 1 ? "" : "es"} in {OFFICE_WORD[o as OfficeType].toLowerCase()}:{" "}
                  <button type="button" className="cmp-link-btn" onClick={() => setScope(against ? "all" : (o as OfficeType))}>
                    show
                  </button>
                </span>
              ))}
            </li>
          )}
          {search.results.map((c) => {
            const disabled = c.compatibility ? !c.compatibility.allowed : false;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  className={`cmp-option ${disabled ? "is-disabled" : ""}`}
                  aria-disabled={disabled}
                  onClick={() => choose(c)}
                >
                  <CandidateAvatar name={c.name} image={c.image} size="sm" />
                  <span className="cmp-option__body">
                    <span className="cmp-option__name">
                      {c.name}
                      {c.incumbent && <span className="cmp-chip cmp-chip--quiet">Incumbent</span>}
                    </span>
                    <span className="cmp-option__meta">
                      {c.party} · {OFFICE_WORD[c.office]} · {c.office === "president" ? "Nigeria" : c.jurisdiction}
                    </span>
                    {c.highlights[0] && <span className="cmp-option__hint">{c.highlights[0]}</span>}
                    {disabled && c.compatibility?.reason && (
                      <span className="cmp-option__warn">{c.compatibility.reason}</span>
                    )}
                  </span>
                  <span className="cmp-option__side">
                    {c.compatibility?.allowed && (
                      <span className={`cmp-chip cmp-chip--${c.compatibility.comparability}`}>
                        {c.compatibility.comparability === "direct" && <FiCheck aria-hidden="true" />}
                        {c.compatibility.label}
                      </span>
                    )}
                    <span className={`cmp-research cmp-research--${c.researchStatus.toLowerCase()}`}>
                      {STATUS_TEXT[c.researchStatus] ?? c.researchStatus}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
          {!search.loading && search.results.length < search.total && (
            <li>
              <button type="button" className="cmp-more" onClick={() => setLimit((l) => Math.min(l + 30, 100))} disabled={limit >= 100}>
                {limit >= 100 ? "Refine your search to see more" : "Show more"}
              </button>
            </li>
          )}
        </ul>
      </div>
    </dialog>
  );
}
