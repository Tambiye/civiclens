"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function IssuesProcess() {
  return (
    <section className="issues-process-section">
      <div className="issues-process-container">

        {/* Issues */}
        <article className="feature-card feature-card-issues">
          <div className="feature-content">
            <span className="feature-eyebrow">THE ISSUES</span>

            <h2>Understand the Issues.</h2>

            <p>
              Clear, non-partisan explainers on the key issues shaping
              Nigeria&apos;s future.
            </p>

            <Link href="/issues" className="feature-link">
              <span>Explore Issues</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="feature-image">
            <Image
              src="/images/issues-image.jpg"
              alt="Understanding the issues"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </article>

        {/* Process */}
        <article className="feature-card feature-card-process">
          <div className="feature-content">
            <span className="feature-eyebrow">OUR PROCESS</span>

            <h2>
              Evidence. Transparency.
              <br />
              Public Trust.
            </h2>

            <p>
              Learn how we research, verify and present information about
              candidates.
            </p>

            <Link href="/methodology" className="feature-link">
              <span>Our Methodology</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="feature-image">
            <Image
              src="/images/process-image.jpg"
              alt="Evidence and transparency"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </article>

      </div>
    </section>
  );
}