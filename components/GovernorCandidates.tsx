
"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import GovernorshipAspirants from "./GovernorshipAspirants";
import { incumbentGovernors } from "@/data/incumbentGovernors";

/* =========================================
   GOVERNOR STATE IMAGES
========================================= */

const governorStates = [
  // 6 FEBRUARY 2027
  {
    state: "Abia State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/abia.jpg",
  },
  {
    state: "Adamawa State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/adamawa.jpg",
  },
  {
    state: "Akwa Ibom State",
    electionDate: "6 February 2027",
    candidates: "20 candidates",
    image: "/images/governors/akwa-ibom.jpg",
  },
  {
    state: "Bauchi State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/bauchi.jpg",
  },
  {
    state: "Benue State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/benue.jpg",
  },
  {
    state: "Borno State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/borno.jpg",
  },
  {
    state: "Cross River State",
    electionDate: "6 February 2027",
    candidates: "8 candidates",
    image: "/images/governors/cross-river.jpg",
  },
  {
    state: "Delta State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/delta.jpg",
  },
  {
    state: "Ebonyi State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/ebonyi.jpg",
  },
  {
    state: "Enugu State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/enugu.jpg",
  },
  {
    state: "Gombe State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/gombe.jpg",
  },
  {
    state: "Jigawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/jigawa.jpg",
  },
  {
    state: "Kaduna State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/kaduna.jpg",
  },
  {
    state: "Kano State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/kano.jpg",
  },
  {
    state: "Katsina State",
    electionDate: "6 February 2027",
    candidates: "11 candidates",
    image: "/images/governors/katsina.jpg",
  },
  {
    state: "Kebbi State",
    electionDate: "6 February 2027",
    candidates: "14 candidates",
    image: "/images/governors/kebbi.jpg",
  },
  {
    state: "Kwara State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/kwara.jpg",
  },
  {
    state: "Lagos State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/lagos.jpg",
  },
  {
    state: "Nasarawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/nasarawa.jpg",
  },
  {
    state: "Niger State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/niger.jpg",
  },
  {
    state: "Ogun State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/ogun.jpg",
  },
  {
    state: "Oyo State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/oyo.jpg",
  },
  {
    state: "Plateau State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/plateau.jpeg",
  },
  {
    state: "Rivers State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/rivers.png",
  },
  {
    state: "Sokoto State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/sokoto.webp",
  },
  {
    state: "Taraba State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/taraba.jpg",
  },
  {
    state: "Yobe State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/yobe.jpg",
  },
  {
    state: "Zamfara State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/zamfara.jpg",
  },

  // OFF-CYCLE STATES
  {
    state: "Anambra State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/anambra.jpeg",
  },
  {
    state: "Bayelsa State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/bayelsa.jpeg",
  },
  {
    state: "Edo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/edo.webp",
  },
  {
    state: "Ekiti State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ekiti.webp",
  },
  {
    state: "Imo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/imo.jpg",
  },
  {
    state: "Kogi State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/kogi.jpg",
  },
  {
    state: "Ondo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ondo.jpg",
  },
  {
    state: "Osun State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/osun.webp",
  },
];

/* =========================================
   GOVERNOR INFORMATION
========================================= */


/* =========================================
   TENURE CALCULATOR
========================================= */

function getGovernorTenure(startDate: string, today: Date) {
  const start = new Date(`${startDate}T00:00:00`);

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();

  if (today.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) {
    return "Not yet in office";
  }

  if (years === 0 && months === 0) {
    return "Less than a month";
  }

  const yearText =
    years > 0
      ? `${years} ${years === 1 ? "year" : "years"}`
      : "";

  const monthText =
    months > 0
      ? `${months} ${months === 1 ? "month" : "months"}`
      : "";

  return [yearText, monthText].filter(Boolean).join(", ");
}

/* =========================================
   GOVERNOR CANDIDATES COMPONENT
========================================= */

export default function GovernorCandidates() {
  const sectionRef = useRef<HTMLElement>(null);

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [today, setToday] = useState<Date | null>(null);

  /* GET CURRENT DATE AFTER MOUNTING */

  useEffect(() => {
    setToday(new Date());
  }, []);

  /* =========================================
     GOVERNOR CARD ANIMATIONS
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(
      ".governor-candidate-card"
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

  /* =========================================
     DISPLAY SELECTED STATE ASPIRANTS
  ========================================= */

  if (selectedState) {
    return (
      <GovernorshipAspirants
        stateName={selectedState}
        onBack={() => setSelectedState(null)}
      />
    );
  }

  return (
    <section
      className="presidential-section governors-section"
      ref={sectionRef}
    >
      <div className="presidential-section__inner">

        {/* SECTION HEADING */}

        <div className="presidential-section__heading">
          <span>STATE GOVERNMENTS</span>

          <h2>Meet Nigeria's State Governors</h2>

          <p>
            Get to know the individuals currently leading
            Nigeria's 36 states, their political parties,
            ages and time in office. Age figures reflect
            June 2026 reporting.
          </p>
        </div>

        {/* GOVERNOR CARDS */}

        <div className="presidential-candidates-grid">
          {governorStates.map((state) => {
            const governor = incumbentGovernors[state.state];

            if (!governor) return null;

            return (
              <article
                className="presidential-candidate-card governor-candidate-card"
                key={state.state}
              >
                {/* GOVERNOR IMAGE */}

                <div className="presidential-candidate-card__image">
                  <img
                    src={state.image}
                    alt={`${governor.name}, Governor of ${state.state}`}
                    loading="lazy"
                  />
                </div>

                {/* GOVERNOR INFORMATION */}

                <div className="presidential-candidate-card__content">

                  <span className="presidential-candidate-card__party">
                    {governor.party}
                  </span>

                  <h3>{governor.name}</h3>

                  <p className="governor-state-name">
                    {state.state}
                  </p>

                  <p className="governor-extra-info">
                    Age: {governor.age}
                  </p>

                  <p className="governor-extra-info">
                    In office:{" "}
                    {today
                      ? getGovernorTenure(governor.inOfficeSince, today)
                      : "Calculating..."}
                  </p>

                </div>

                {/* VIEW STATE ASPIRANTS */}

                <button
                  type="button"
                  className="governor-card__button"
                  onClick={() => setSelectedState(state.state)}
                >
                  <span>View State Aspirants</span>
                  <FiArrowRight />
                </button>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
