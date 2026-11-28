"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { FiRotateCcw, FiInfo } from "react-icons/fi";

export interface VerdictCategory {
  key: string;
  title: string;
  /** True when at least one side lacks documented evidence. */
  incomplete: boolean;
}

type Pref = "a" | "b" | "even" | "unsure";
type Choice = { weight: number; pref: Pref };

function subscribeStorage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

const WEIGHTS = [
  { v: 0, label: "Not important" },
  { v: 1, label: "Somewhat" },
  { v: 2, label: "Important" },
  { v: 3, label: "Very important" },
];

/**
 * "Your verdict": the reader sets how much each issue matters to them and
 * whose approach they find more convincing. The tally reflects only those
 * choices. It is not an objective ranking, and nothing is scored for a
 * category the reader marks "not sure". Choices are stored per pair in this
 * browser only, keyed by candidate id (so swapping sides keeps them).
 */
export default function YourVerdict({
  pairKey,
  a,
  b,
  categories,
}: {
  pairKey: string;
  a: { id: string; name: string };
  b: { id: string; name: string };
  categories: VerdictCategory[];
}) {
  const storageKey = `polipeek.verdict.${pairKey}`;
  const initial = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.key, { weight: 1, pref: "unsure" as Pref }])),
    [categories]
  );
  // Saved choices are read as an external store (null during SSR), so the
  // server render and first client render match and no effect is needed.
  const saved = useSyncExternalStore(subscribeStorage, () => readStorage(storageKey), () => null);
  const [edits, setEdits] = useState<Record<string, Choice> | null>(null);

  // Stored prefs are by candidate id; map them onto the current sides.
  const restored = useMemo(() => {
    if (!saved) return null;
    try {
      const parsed = JSON.parse(saved) as Record<string, { weight: number; pref: string }>;
      const next = { ...initial };
      for (const [k, v] of Object.entries(parsed)) {
        if (!next[k]) continue;
        const pref: Pref = v.pref === a.id ? "a" : v.pref === b.id ? "b" : v.pref === "even" ? "even" : "unsure";
        next[k] = { weight: Math.min(3, Math.max(0, Number(v.weight) || 0)), pref };
      }
      return next;
    } catch {
      return null;
    }
  }, [saved, initial, a.id, b.id]);

  const choices = edits ?? restored ?? initial;

  const setChoices = (next: Record<string, Choice>) => {
    setEdits(next);
    try {
      const out = Object.fromEntries(
        Object.entries(next).map(([k, v]) => [
          k,
          { weight: v.weight, pref: v.pref === "a" ? a.id : v.pref === "b" ? b.id : v.pref },
        ])
      );
      localStorage.setItem(storageKey, JSON.stringify(out));
    } catch {
      /* storage unavailable: choices still work for this visit */
    }
  };

  const tally = useMemo(() => {
    let sa = 0;
    let sb = 0;
    let counted = 0;
    for (const v of Object.values(choices)) {
      if (v.weight === 0 || v.pref === "unsure") continue;
      counted++;
      if (v.pref === "a") sa += v.weight;
      else if (v.pref === "b") sb += v.weight;
      else {
        sa += v.weight / 2;
        sb += v.weight / 2;
      }
    }
    const total = sa + sb;
    return { sa, sb, counted, pa: total ? Math.round((sa / total) * 100) : 0 };
  }, [choices]);

  const set = (key: string, patch: Partial<Choice>) =>
    setChoices({ ...choices, [key]: { ...choices[key], ...patch } });

  return (
    <div className="cmp-verdict">
      <p className="cmp-verdict__explain">
        <FiInfo aria-hidden="true" /> For each issue, choose how much it matters to you and whose record or plan you find more
        convincing after reading the evidence. The tally reflects <strong>only your choices</strong>. It is not a ranking by this
        site, and issues you mark &ldquo;Not sure&rdquo; or &ldquo;Not important&rdquo; count for nothing.
      </p>

      <ol className="cmp-verdict__list">
        {categories.map((c) => {
          const v = choices[c.key];
          return (
            <li key={c.key} className="cmp-verdict__row">
              <div className="cmp-verdict__title">
                {c.title}
                {c.incomplete && <span className="cmp-chip cmp-chip--quiet">Incomplete evidence</span>}
              </div>
              <label className="cmp-verdict__field">
                <span>Importance</span>
                <select value={v.weight} onChange={(e) => set(c.key, { weight: Number(e.target.value) })}>
                  {WEIGHTS.map((w) => (
                    <option key={w.v} value={w.v}>
                      {w.label}
                    </option>
                  ))}
                </select>
              </label>
              <fieldset className="cmp-verdict__prefs" disabled={v.weight === 0}>
                <legend className="sr-only">More convincing on {c.title}</legend>
                {(
                  [
                    ["a", a.name],
                    ["even", "Even"],
                    ["b", b.name],
                    ["unsure", "Not sure"],
                  ] as [Pref, string][]
                ).map(([p, label]) => (
                  <label key={p} className={`cmp-pref ${v.pref === p ? "is-active" : ""} cmp-pref--${p}`}>
                    <input type="radio" name={`pref-${c.key}`} value={p} checked={v.pref === p} onChange={() => set(c.key, { pref: p })} />
                    <span>{label}</span>
                  </label>
                ))}
              </fieldset>
            </li>
          );
        })}
      </ol>

      <div className="cmp-verdict__result" aria-live="polite">
        {tally.counted === 0 ? (
          <p>Make a choice on at least one issue to see how your own priorities add up.</p>
        ) : (
          <>
            <p className="cmp-verdict__headline">Based on your priorities across {tally.counted} issue{tally.counted === 1 ? "" : "s"}:</p>
            <div className="cmp-verdict__bar" role="img" aria-label={`${a.name} ${tally.pa}%, ${b.name} ${100 - tally.pa}%`}>
              <span className="cmp-verdict__bar-a" style={{ width: `${tally.pa}%` }} />
              <span className="cmp-verdict__bar-b" style={{ width: `${100 - tally.pa}%` }} />
            </div>
            <div className="cmp-verdict__labels">
              <span>
                <b className="cmp-side-dot cmp-side-dot--a" /> {a.name}: {tally.pa}%
              </span>
              <span>
                {b.name}: {100 - tally.pa}% <b className="cmp-side-dot cmp-side-dot--b" />
              </span>
            </div>
            <p className="cmp-verdict__method">
              Method: each issue contributes its importance (0–3) to the candidate you chose, or half to each for
              &ldquo;Even&rdquo;. Percentages are each candidate&apos;s share of that total.
            </p>
          </>
        )}
        <button type="button" className="cmp-btn cmp-btn--ghost" onClick={() => setChoices(initial)}>
          <FiRotateCcw aria-hidden="true" /> Reset my choices
        </button>
      </div>
    </div>
  );
}
