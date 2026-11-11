"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiBookOpen,
  FiHeart,
  FiShield,
  FiZap,
  FiUsers,
  FiSun,
} from "react-icons/fi";

const comparisonTopics = [
  {
    label: "Economy\nand Jobs",
    icon: FiBriefcase,
  },
  {
    label: "Education",
    icon: FiBookOpen,
  },
  {
    label: "Healthcare",
    icon: FiHeart,
  },
  {
    label: "Security",
    icon: FiShield,
  },
  {
    label: "Electricity &\nInfrastructure",
    icon: FiZap,
  },
  {
    label: "Agriculture",
    icon: FiSun,
  },
  {
    label: "Youth\nDevelopment",
    icon: FiUsers,
  },
  {
    label: "Environment",
    icon: FiSun,
  },
];

export default function Compare() {
  return (
    <section className="compare-section">
      <div className="compare-container">
        <div className="compare-header">
          <div className="compare-heading">
            <h2>Compare Candidates</h2>
            <p>
              See how candidates stack up on the issues that matter.
            </p>
          </div>

          <Link href="/compare" className="compare-button">
            <span>Start Comparing</span>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="comparison-topics">
          {comparisonTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                href="/compare"
                className="comparison-topic"
                key={topic.label}
              >
                <Icon
                  className="comparison-topic-icon"
                  aria-hidden="true"
                />

                <span>
                  {topic.label.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < topic.label.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}