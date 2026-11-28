import type { Metadata } from "next";
import { Suspense } from "react";
import CompareBuilder from "@/components/compare/CompareBuilder";

export const metadata: Metadata = {
  title: "Compare candidates | PoliPeek",
  description:
    "Pick two candidates and compare their records, experience, policies and evidence side by side. We don't tell you who to support.",
};

export default function ComparePage() {
  return (
    <div className="cmp-page">
      <section className="cmp-intro">
        <span className="cmp-eyebrow">Compare candidates</span>
        <h1>Who are you weighing up?</h1>
        <p>
          Choose two candidates. We check that the comparison is fair, meaning the same race, the same office, or a clearly
          labelled career comparison, and then set their records, plans and evidence side by side.
        </p>
        <p className="cmp-intro__motto">We don&apos;t tell you who to support. We help you understand who you&apos;re supporting.</p>
      </section>
      <Suspense
        fallback={
          <div className="cmp-builder" aria-busy="true">
            <div className="cmp-builder__slots">
              <div className="cmp-slot is-loading" />
              <span className="cmp-swap" aria-hidden="true" />
              <div className="cmp-slot is-loading" />
            </div>
          </div>
        }
      >
        <CompareBuilder />
      </Suspense>
    </div>
  );
}
