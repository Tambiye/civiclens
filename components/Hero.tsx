"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiSearch, FiArrowRight, FiX, FiAlertCircle } from "react-icons/fi";
import CandidateAvatar from "@/components/compare/CandidateAvatar";
import { useCandidateSearch } from "@/components/compare/useCandidateSearch";
import type { OfficeType } from "@/lib/candidates/types";

type Filter = "all" | OfficeType | "house";

const FILTERS: { id: Filter; label: string; icon: string }[] = [
  { id: "all", label: "All Candidates", icon: "♟" },
  { id: "president", label: "Presidential", icon: "♜" },
  { id: "governor", label: "Governors", icon: "♜" },
  { id: "senator", label: "Senate", icon: "♜" },
  { id: "house", label: "House of Reps", icon: "♜" },
];

const FILTER_IDS = new Set(FILTERS.map((f) => f.id));

const OFFICE_TEXT: Record<OfficeType, string> = {
  president: "Presidential",
  governor: "Governorship",
  senator: "Senate",
};

const PAGE = 24;

export default function Hero() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [limit, setLimit] = useState(PAGE);
  const resultsRef = useRef<HTMLElement>(null);
  const hydrated = useRef(false);
  const mirrorReady = useRef(false);

  // Restore search state from the URL (refresh, back/forward, shared links).
  useEffect(() => {
    const read = () => {
      const p = new URLSearchParams(window.location.search);
      const f = p.get("office") as Filter | null;
      setQuery((p.get("q") ?? "").slice(0, 80));
      setFilter(f && FILTER_IDS.has(f) ? f : "all");
      setLimit(PAGE);
    };
    read();
    hydrated.current = true;
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  // Mirror state into the URL without adding a history entry per keystroke.
  useEffect(() => {
    // The first run happens in the same commit as the restore above, with
    // the initial (empty) state; skip it so it can't erase ?q= on load.
    if (!hydrated.current || !mirrorReady.current) {
      mirrorReady.current = hydrated.current;
      return;
    }
    const p = new URLSearchParams(window.location.search);
    const q = query.trim();
    if (q) p.set("q", q);
    else p.delete("q");
    if (filter !== "all") p.set("office", filter);
    else p.delete("office");
    const next = `${window.location.pathname}${p.size ? `?${p}` : ""}${window.location.hash}`;
    if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.replaceState(window.history.state, "", next);
    }
  }, [query, filter]);

  const active = query.trim().length > 0 || filter !== "all";
  const office = filter === "house" || filter === "all" ? "all" : filter;
  const search = useCandidateSearch({
    query,
    office,
    limit,
    enabled: active && filter !== "house",
  });

  const changeFilter = (f: Filter) => {
    setFilter(f);
    setLimit(PAGE);
  };

  const outside = Object.entries(search.outsideFilter) as [OfficeType, number][];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <h1>
              Know Your
              <span>Candidates.</span>
            </h1>

            <p className="hero-description">
              Explore the people seeking to lead Nigeria.
              <br />
              Compare their policies, check their records,
              <br />
              and see the evidence behind their promises.
            </p>
          </div>

          <div className="hero-platform">
            <span>INFORMED CITIZENS.</span>
            <strong>STRONGER DEMOCRACY.</strong>

            <p>
              An independent,
              <br />
              non-partisan platform.
            </p>

            <div className="hero-line" />
          </div>
        </div>

        <form
          className="hero-search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <label className="search-input">
            <FiSearch size={20} aria-hidden="true" />
            <span className="sr-only">Search candidates</span>
            <input
              type="search"
              inputMode="search"
              enterKeyHint="search"
              autoComplete="off"
              maxLength={80}
              placeholder="Search candidates, parties, states, or districts..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE);
              }}
            />
            {query && (
              <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                <FiX />
              </button>
            )}
          </label>

          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="candidate-filters" role="group" aria-label="Filter candidates by office">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter ${filter === f.id ? "active" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => changeFilter(f.id)}
            >
              <span className="filter-icon" aria-hidden="true">
                {f.icon}
              </span>
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {active && (
        <section className="home-results" ref={resultsRef} aria-labelledby="home-results-title">
          <div className="home-results__inner">
            <div className="home-results__head">
              <h2 id="home-results-title">
                {query.trim() ? <>Results for “{query.trim()}”</> : FILTERS.find((f) => f.id === filter)?.label}
              </h2>
              <p aria-live="polite">
                {filter === "house"
                  ? null
                  : search.loading && search.results.length === 0
                    ? "Searching…"
                    : search.error
                      ? null
                      : `${search.total.toLocaleString()} candidate${search.total === 1 ? "" : "s"}${
                          filter !== "all" ? ` in ${OFFICE_TEXT[filter]}` : ""
                        }`}
              </p>
              <button
                type="button"
                className="cmp-link-btn"
                onClick={() => {
                  setQuery("");
                  changeFilter("all");
                }}
              >
                Clear
              </button>
            </div>

            {filter === "house" ? (
              <div className="home-results__empty">
                House of Representatives candidates aren&apos;t in our dataset yet. Try the presidential, governorship or Senate
                filters.
              </div>
            ) : search.error ? (
              <div className="home-results__empty" role="alert">
                <FiAlertCircle aria-hidden="true" /> {search.error}{" "}
                <button type="button" className="cmp-link-btn" onClick={search.retry}>
                  Try again
                </button>
              </div>
            ) : (
              <>
                {!search.loading && search.results.length === 0 && (
                  <div className="home-results__empty">
                    No candidates match{query.trim() ? <> “{query.trim()}”</> : null}
                    {filter !== "all" ? ` in ${OFFICE_TEXT[filter as OfficeType]}` : ""}. Check the spelling, or search by
                    party (e.g. “APC”), state (e.g. “Kano”) or district (e.g. “Lagos West”).
                  </div>
                )}
                {outside.length > 0 && (
                  <p className="home-results__outside">
                    {outside.map(([o, n]) => (
                      <span key={o}>
                        {n} more match{n === 1 ? "" : "es"} in {OFFICE_TEXT[o]}, outside this filter.{" "}
                        <button type="button" className="cmp-link-btn" onClick={() => changeFilter(o)}>
                          Show {OFFICE_TEXT[o]}
                        </button>{" "}
                      </span>
                    ))}
                  </p>
                )}
                <ul className="home-results__grid" aria-busy={search.loading}>
                  {search.results.map((c) => (
                    <li key={c.id} className="home-result">
                      <CandidateAvatar name={c.name} image={c.image} size="md" />
                      <div className="home-result__body">
                        <h3>{c.name}</h3>
                        <p>
                          <strong>{c.party}</strong> · {OFFICE_TEXT[c.office]}
                          {c.office !== "president" && <> · {c.jurisdiction}</>}
                        </p>
                        {c.incumbent && <span className="cmp-chip cmp-chip--quiet">Incumbent</span>}
                        <div className="home-result__actions">
                          {c.profileUrl && (
                            <Link href={c.profileUrl} className="cmp-link">
                              Profile
                            </Link>
                          )}
                          <Link href={`/compare?a=${c.id}`} className="cmp-link">
                            Compare <FiArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {search.results.length < search.total && (
                  <button
                    type="button"
                    className="cmp-more"
                    disabled={search.loading || limit >= 100}
                    onClick={() => setLimit((l) => Math.min(l + PAGE, 100))}
                  >
                    {limit >= 100 ? "Refine your search to narrow the results" : `Show more (${search.total - search.results.length} remaining)`}
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
