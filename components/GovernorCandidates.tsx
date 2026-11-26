
"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { useEffect, useRef } from "react";

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

type GovernorInfo = {
  name: string;
  age: number;
  party: string;
  inOfficeSince: string;
};

const governorDetails: Record<string, GovernorInfo> = {
  "Abia State": {
    name: "Alex Otti",
    age: 61,
    party: "LP",
    inOfficeSince: "2023-05-29",
  },

  "Adamawa State": {
    name: "Ahmadu Umaru Fintiri",
    age: 58,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Akwa Ibom State": {
    name: "Umo Eno",
    age: 62,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Bauchi State": {
    name: "Bala Mohammed",
    age: 67,
    party: "APM",
    inOfficeSince: "2019-05-29",
  },

  "Benue State": {
    name: "Hyacinth Iormem Alia",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Borno State": {
    name: "Babagana Zulum",
    age: 56,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Cross River State": {
    name: "Bassey Otu",
    age: 66,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Delta State": {
    name: "Sheriff Oborevwori",
    age: 62,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Ebonyi State": {
    name: "Francis Nwifuru",
    age: 51,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Enugu State": {
    name: "Peter Mbah",
    age: 54,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Gombe State": {
    name: "Muhammad Inuwa Yahaya",
    age: 64,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Jigawa State": {
    name: "Umar Namadi",
    age: 63,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kaduna State": {
    name: "Uba Sani",
    age: 55,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kano State": {
    name: "Abba Kabir Yusuf",
    age: 63,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Katsina State": {
    name: "Dikko Umaru Radda",
    age: 56,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kebbi State": {
    name: "Nasir Idris",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kwara State": {
    name: "AbdulRahman AbdulRazaq",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Lagos State": {
    name: "Babajide Sanwo-Olu",
    age: 60,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Nasarawa State": {
    name: "Abdullahi Sule",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Niger State": {
    name: "Mohammed Umar Bago",
    age: 52,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Ogun State": {
    name: "Dapo Abiodun",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Oyo State": {
    name: "Seyi Makinde",
    age: 58,
    party: "APM",
    inOfficeSince: "2019-05-29",
  },

  "Plateau State": {
    name: "Caleb Mutfwang",
    age: 61,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Rivers State": {
    name: "Siminalayi Fubara",
    age: 51,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Sokoto State": {
    name: "Ahmad Aliyu",
    age: 56,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Taraba State": {
    name: "Agbu Kefas",
    age: 55,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Yobe State": {
    name: "Mai Mala Buni",
    age: 58,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Zamfara State": {
    name: "Dauda Lawal",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  // OFF-CYCLE STATES

  "Anambra State": {
    name: "Charles Soludo",
    age: 65,
    party: "APGA",
    inOfficeSince: "2022-03-17",
  },

  "Bayelsa State": {
    name: "Douye Diri",
    age: 66,
    party: "APC",
    inOfficeSince: "2020-02-14",
  },

  "Edo State": {
    name: "Monday Okpebholo",
    age: 55,
    party: "APC",
    inOfficeSince: "2024-11-12",
  },

  "Ekiti State": {
    name: "Biodun Oyebanji",
    age: 58,
    party: "APC",
    inOfficeSince: "2022-10-16",
  },

  "Imo State": {
    name: "Hope Uzodimma",
    age: 67,
    party: "APC",
    inOfficeSince: "2020-01-15",
  },

  "Kogi State": {
    name: "Ahmed Usman Ododo",
    age: 48,
    party: "APC",
    inOfficeSince: "2024-01-27",
  },

  "Ondo State": {
    name: "Lucky Aiyedatiwa",
    age: 61,
    party: "APC",
    inOfficeSince: "2023-12-27",
  },

  "Osun State": {
    name: "Ademola Adeleke",
    age: 66,
    party: "Accord",
    inOfficeSince: "2022-11-27",
  },
};

/* =========================================
   TENURE CALCULATOR
========================================= */

function getGovernorTenure(startDate: string) {
  const start = new Date(`${startDate}T00:00:00`);
  const today = new Date();

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
            const governor = governorDetails[state.state];

            if (!governor) return null;
const stateSlug = state.state
  .replace(/\s+State$/i, "")
  .toLowerCase()
  .replace(/\s+/g, "-");
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
                    {getGovernorTenure(governor.inOfficeSince)}
                  </p>

                </div>
                <Link
  href={`/governorship/${stateSlug}`}
  className="governor-card__button"
>
  <span>View State Aspirants</span>
  <FiArrowRight />
</Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
