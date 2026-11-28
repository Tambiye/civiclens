"use client";

import { useState } from "react";
import { FiShare2, FiCheck } from "react-icons/fi";

/** Shares the current comparison URL (native share sheet, else clipboard). */
export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user cancelled the share sheet, or clipboard was blocked */
    }
  };
  return (
    <button type="button" className="cmp-btn cmp-btn--ghost" onClick={share}>
      {copied ? <FiCheck aria-hidden="true" /> : <FiShare2 aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}
