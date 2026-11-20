
"use client";

import { useEffect, useRef, useState } from "react";
import { presidentialCandidates } from "@/data/presidential";

const heroContent = {
  eyebrow: "2027 ELECTION",
  title: "Meet the Candidates",
  description:
    "Explore the people seeking to shape Nigeria's next chapter. Compare their experience, positions and public records.",
};

const electionStats = [
  {
    id: "presidential",
    number: 17,
    label: "Presidential Candidates",
    description: "People contesting for Nigeria's highest office",
  },
  {
    id: "governorship",
    number: 28,
    label: "Governorship Elections",
    description: "States holding governorship elections",
  },
  {
    id: "senate",
    number: 109,
    label: "Senate Seats",
    description: "Seats across the National Assembly",
  },
];

function CandidatesHero() {
  return (
    <section className="candidates-hero">
      <div className="candidates-hero__content">
        <span className="candidates-hero__eyebrow">
          {heroContent.eyebrow}
        </span>

        <h1>{heroContent.title}</h1>

        <p>{heroContent.description}</p>
      </div>
    </section>
  );
}

function CountUp({
  target,
  active,
}: {
  target: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1600;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, active]);

  return <>{count.toLocaleString("en-NG")}</>;
}

function ElectionStatistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="election-statistics"
      ref={sectionRef}
    >
      <div className="election-statistics__inner">
        <div className="election-statistics__heading">
          <span>THE 2027 ELECTION</span>
          <h2>By the Numbers</h2>
          <p>
            A closer look at the candidates and elective positions
            shaping the upcoming elections.
          </p>
        </div>

        <div className="election-statistics__grid">
          {electionStats.map((stat) => (
            <div
              className="election-stat-card"
              key={stat.id}
            >
              <span className="election-stat-card__number">
                <CountUp
                  target={stat.number}
                  active={isVisible}
                />
              </span>

              <h3>{stat.label}</h3>

              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function PresidentialCandidates() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(
      ".presidential-candidate-card"
    );

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    cards.forEach((card, index) => {
      card.classList.add(
        index % 2 === 0
          ? "slide-from-left"
          : "slide-from-right"
      );

      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="presidential-section"
      ref={sectionRef}
    >
      <div className="presidential-section__inner">
        <div className="presidential-section__heading">
          <span>PRESIDENTIAL ELECTION</span>

          <h2>Meet the Presidential Candidates</h2>

          <p>
            Get to know the individuals seeking to lead Nigeria.
            Explore their political parties and candidate profiles.
          </p>
        </div>

        <div className="presidential-candidates-grid">
          {presidentialCandidates.map((candidate) => (
            <article
              className="presidential-candidate-card"
              key={candidate.name}
            >
              <div className="presidential-candidate-card__image">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                />
              </div>

              <div className="presidential-candidate-card__content">
                <span className="presidential-candidate-card__party">
                  {candidate.shortParty}
                </span>

                <h3>{candidate.name}</h3>

                <p>{candidate.party}</p>

                <span
                  className={`presidential-candidate-card__status presidential-candidate-card__status--${candidate.statusType}`}
                >
                  {candidate.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function CandidatesPage() {
  return (
    <main className="candidates-page">
      <CandidatesHero />
      <ElectionStatistics />
      <PresidentialCandidates />
    </main>
  );
}
