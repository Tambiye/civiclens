"use client";

import { useEffect, useRef, useState } from "react";
import type { CandidateSummary, OfficeType } from "@/lib/candidates/types";

export interface PickerCompatibility {
  allowed: boolean;
  comparability: "direct" | "contextual" | "not-comparable";
  label: string;
  reason: string | null;
}

export type SearchItem = CandidateSummary & { compatibility?: PickerCompatibility };

export interface SearchParams {
  query: string;
  office: OfficeType | "all";
  race?: string;
  against?: string;
  limit?: number;
  /** When false, no request is made (e.g. an idle home page). */
  enabled?: boolean;
}

export interface SearchState {
  results: SearchItem[];
  total: number;
  outsideFilter: Partial<Record<OfficeType, number>>;
  loading: boolean;
  error: string | null;
}

const EMPTY: SearchState = { results: [], total: 0, outsideFilter: {}, loading: false, error: null };

/**
 * Debounced candidate search against /api/candidates. In-flight requests are
 * aborted when inputs change, so a slow, stale response can never overwrite
 * a newer one.
 */
export function useCandidateSearch(params: SearchParams, debounceMs = 220): SearchState & { retry: () => void } {
  const { query, office, race, against, limit = 24, enabled = true } = params;
  const [state, setState] = useState<SearchState>(EMPTY);
  const [attempt, setAttempt] = useState(0);
  const lastKey = useRef("");

  useEffect(() => {
    if (!enabled) {
      lastKey.current = "";
      setState(EMPTY);
      return;
    }
    const qs = new URLSearchParams({ q: query.trim(), office, limit: String(limit) });
    if (race) qs.set("race", race);
    if (against) qs.set("against", against);
    const key = qs.toString();
    const controller = new AbortController();
    setState((s) => ({ ...s, loading: true, error: null }));
    // Debounce typing, but respond instantly to filter changes.
    const delay = lastKey.current && key.replace(/q=[^&]*/, "") === lastKey.current.replace(/q=[^&]*/, "") ? debounceMs : 0;
    const timer = window.setTimeout(async () => {
      try {
        const res = await fetch(`/api/candidates?${key}`, { signal: controller.signal });
        if (!res.ok) throw new Error(`Search failed (${res.status})`);
        const data = await res.json();
        lastKey.current = key;
        setState({
          results: data.results ?? [],
          total: data.total ?? 0,
          outsideFilter: data.outsideFilter ?? {},
          loading: false,
          error: null,
        });
      } catch (e) {
        if (controller.signal.aborted) return;
        setState((s) => ({
          ...s,
          loading: false,
          error: e instanceof Error && navigator.onLine !== false ? "Search is unavailable right now." : "You appear to be offline.",
        }));
      }
    }, delay);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, office, race, against, limit, enabled, debounceMs, attempt]);

  return { ...state, retry: () => setAttempt((n) => n + 1) };
}
