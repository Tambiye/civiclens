"use client";

import type { ReactNode } from "react";

import {
  FiAlertTriangle,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiFileText,
  FiFlag,
  FiGlobe,
  FiHeart,
  FiHome,
  FiInfo,
  FiMapPin,
  FiMenu,
  FiAward,
  FiSearch,
  FiShield,
  FiUser,
  FiUsers,
} from "react-icons/fi";

const candidate = {
  name: "Oluseyi Abiodun Makinde",
  office: "Governor of Oyo State",
  party: "Allied Peoples Movement (APM)",
  position:
    "Presidential Candidate of the Allied Peoples Movement for the 2027 General Election",
  slogan: "Building on experience in public service and engineering.",
  image: "/images/candidates/makinde.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "25 December 1967",
      extra: "(58 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Oyo State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "APM",
    },
    {
      icon: <FiBriefcase />,
      label: "Current Office",
      value: "Governor of Oyo State",
    },
    {
      icon: <FiUsers />,
      label: "Running Mate",
      value: "Musa Lawal Daura",
      extra: "(73 years old)",
    },
  ] as {
    icon: ReactNode;
    label: string;
    value: string;
    extra?: string;
  }[],

  overview:
    "Oluseyi Abiodun Makinde, popularly known as Seyi Makinde, is a Nigerian engineer, businessman and politician who has served as Governor of Oyo State since May 2019. He was re-elected in 2023 for a second term. Before entering public office, he built a career in engineering and the oil and gas industry and founded Makon Engineering and Technical Services Limited. Makinde is the presidential candidate of the Allied Peoples Movement (APM) for the 2027 general election. His running mate is Musa Lawal Daura, a former Director-General of the Department of State Services.",

  personalInfo: [
    ["Full Name", "Oluseyi Abiodun Makinde"],
    ["Popular Name", "Seyi Makinde"],
    ["Date of Birth", "25 December 1967"],
    ["Place of Birth", "Ibadan, Oyo State"],
    ["State of Origin", "Oyo State"],
    ["Nationality", "Nigerian"],
    ["Profession", "Engineer, Businessman and Politician"],
    ["Current Office", "Governor of Oyo State"],
    ["Political Party", "Allied Peoples Movement (APM)"],
  ],

  qualifications: [
    {
      title: "Bachelor of Engineering in Electrical Engineering",
      school: "University of Lagos, 1990",
    },
    {
      title: "Secondary Education",
      school: "Bishop Phillips Academy, Ibadan",
    },
  ],

  career: [
    {
      period: "1990",
      title: "Engineering Career",
      description:
        "After graduating from the University of Lagos with a degree in Electrical Engineering, he began his professional career in the oil and gas industry.",
    },
    {
      period: "1990s",
      title: "Oil and Gas Industry",
      description:
        "Worked with organisations including Shell Petroleum Development Company and Rebold International, gaining experience in engineering, instrumentation and the energy sector.",
    },
    {
      period: "1997",
      title: "Founder, Makon Engineering and Technical Services",
      description:
        "Established Makon Engineering and Technical Services Limited, an engineering company operating in the oil and gas sector.",
    },
    {
      period: "2019",
      title: "Governor of Oyo State",
      description:
        "Won the Oyo State governorship election and assumed office in May 2019.",
    },
    {
      period: "2023",
      title: "Re-elected Governor of Oyo State",
      description:
        "Won re-election in the March 2023 governorship election and began a second term in office.",
    },
    {
      period: "2026",
      title: "Joined the Allied Peoples Movement",
      description:
        "Became the presidential candidate of the Allied Peoples Movement ahead of the 2027 general election.",
    },
    {
      period: "2027",
      title: "APM Presidential Candidate",
      description:
        "Listed by INEC as the Allied Peoples Movement presidential candidate, with Musa Lawal Daura as his running mate.",
    },
  ],

  controversies: [
    {
      text:
        "In June 2025, the Economic and Financial Crimes Commission requested copies of Oyo State Government contracts and details of payments to contractors from 2021. The Makinde-led state government challenged the breadth of the request in court, arguing that the commission had not identified specific contractors, transactions or alleged offences. In July 2026, the Federal High Court in Ibadan set aside the EFCC's request, describing it as speculative and an impermissibly broad inquiry. The ruling concerned the scope of that particular request; it was not a general finding that all state financial activities were beyond investigation, nor a determination of corruption or innocence.",
      source: "Premium Times",
      date: "23 July 2026",
      url:
        "https://www.premiumtimesng.com/news/top-news/897561-court-stops-efccs-planned-probe-of-oyo-finances-faults-fishing-expedition.html",
    },
    {
      text:
        "In January 2026, the Human and Environmental Development Agenda (HEDA) petitioned the EFCC over the management of ₦30 billion in federal intervention funds released to Oyo State following the January 2024 Bodija explosion. HEDA alleged that only about ₦4.5 billion had been applied to relief and compensation and called for an investigation into the remaining funds. The Oyo State Government responded that the ₦30 billion remained untouched in a dedicated account because the remaining ₦20 billion of the approved federal support had not been released. The government also said it had separately spent ₦24.6 billion of state funds on reconstruction and victim support. The petition is an allegation, not a finding of diversion or criminal wrongdoing.",
      source: "HEDA Resource Centre",
      date: "21 January 2026",
      url:
        "https://hedang.org/bodija-explosion-heda-drags-seyi-makinde-to-efcc-over-alleged-diversion-of-%E2%82%A630bn-intervention-funds/",
    },
    {
      text:
        "A dispute over the removal of elected local government chairmen and councillors in Oyo State in 2019 resulted in litigation and a judgment requiring payment of outstanding entitlements. In December 2023, the Court of Appeal affirmed an order directing Makinde and other appellants to pay an outstanding ₦3.4 billion balance to the former council officials. The court also awarded ₦50 million in costs against the appellants. The dispute concerned compliance with the earlier judgment and payment of the officials' entitlements.",
      source: "Channels Television",
      date: "8 December 2023",
      url:
        "https://www.channelstv.com/2023/12/08/n3-4bn-debt-court-of-appeal-orders-makinde-to-pay-oyo-ex-council-chiefs/",
    },
  ],

  allegations: [] as {
    text: string;
    source: string;
    date: string;
    url: string;
  }[],

  sources: [
    {
      name: "Independent National Electoral Commission",
      title:
        "Final List of Presidential and National Assembly Candidates for the 2027 Elections",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },
    {
      name: "Channels Television",
      title:
        "INEC Publishes Final List of Presidential Candidates for 2027 Election",
      date: "12 September 2026",
      url:
        "https://www.channelstv.com/2026/09/12/inec-publishes-final-list-of-presidential-candidates-for-2027-election/",
    },
    {
      name: "2027 General Elections Candidate Profile",
      title:
        "Makinde Oluseyi Abiodun and Running Mate Musa Lawal Daura",
      date: "2026",
      url:
        "https://2027election.adbntv.com/election-candidate/presidential-apm-oluseyi-abiodun-makinde/",
    },
    {
      name: "Premium Times",
      title:
        "Court Stops EFCC's Planned Probe of Oyo Finances, Faults 'Fishing Expedition'",
      date: "23 July 2026",
      url:
        "https://www.premiumtimesng.com/news/top-news/897561-court-stops-efccs-planned-probe-of-oyo-finances-faults-fishing-expedition.html",
    },
    {
      name: "Human and Environmental Development Agenda",
      title:
        "Bodija Explosion: HEDA Drags Seyi Makinde to EFCC Over Alleged Diversion of ₦30bn Intervention Funds",
      date: "21 January 2026",
      url:
        "https://hedang.org/bodija-explosion-heda-drags-seyi-makinde-to-efcc-over-alleged-diversion-of-%E2%82%A630bn-intervention-funds/",
    },
    {
      name: "Punch",
      title:
        "Ibadan Explosion: FG's N30bn Fund Untouched, N20bn Balance Unpaid, Oyo Says",
      date: "1 January 2026",
      url:
        "https://punchng.com/ibadan-explosion-fgs-n30bn-fund-untouched-n20bn-balance-unpaid-oyo/",
    },
    {
      name: "Channels Television",
      title:
        "N3.4bn Debt: Court of Appeal Orders Makinde to Pay Oyo Ex-Council Chiefs",
      date: "8 December 2023",
      url:
        "https://www.channelstv.com/2023/12/08/n3-4bn-debt-court-of-appeal-orders-makinde-to-pay-oyo-ex-council-chiefs/",
    },
  ],
};

const tabs = [
  { label: "Overview", icon: <FiHome /> },
  { label: "Personal Info", icon: <FiUser /> },
  { label: "Qualifications", icon: <FiBookOpen /> },
  { label: "Career & Offices", icon: <FiBriefcase /> },
  { label: "Achievements", icon: <FiAwardIcon /> },
  { label: "Controversies", icon: <FiShield /> },
  { label: "Allegations", icon: <FiAlertTriangle /> },
  { label: "Sources", icon: <FiFileText /> },
];

function FiAwardIcon() {
  return <FiShield />;
}

export default function CandidateProfilePage() {
  return (
    <main className="candidate-profile-page">
      {/* HEADER */}

      <section className="candidate-hero">
        <div className="candidate-hero-inner">
          <div className="candidate-image-wrap">
            <img
              src={candidate.image}
              alt={candidate.name}
              className="candidate-image"
            />
          </div>

          <div className="candidate-intro">
            <span className="candidate-office-tag">
              {candidate.office}
            </span>

            <h1>{candidate.name}</h1>

            <div className="candidate-party">
              <span></span>
              {candidate.party}
            </div>

            <p className="candidate-position">
              {candidate.position}
            </p>

            <span className="current-position">
              <span className="status-dot"></span>
              Confirmed Presidential Candidate
            </span>

            <p className="candidate-slogan">
              {candidate.slogan}
            </p>
          </div>

          <aside className="quick-facts">
            <div className="quick-facts-header">
              <FiInfo />
              <h2>Quick Facts</h2>
            </div>

            <div className="quick-facts-body">
              {candidate.quickFacts.map((fact) => (
                <div className="quick-fact" key={fact.label}>
                  <div className="quick-fact-icon">
                    {fact.icon}
                  </div>

                  <div className="quick-fact-label">
                    {fact.label}
                  </div>

                  <div className="quick-fact-value">
                    {fact.value}
                    {fact.extra && (
                      <span>{fact.extra}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* TABS */}

      {/* <nav className="candidate-tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`candidate-tab ${
              index === 0 ? "active" : ""
            }`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav> */}

      {/* MAIN CONTENT */}

      <section className="candidate-content">
        {/* OVERVIEW + AFFILIATION */}

        <div className="content-grid two-columns">
          <article className="profile-card">
            <div className="card-heading">
              <FiInfo />
              <h2>Overview</h2>
            </div>

            <p>{candidate.overview}</p>
          </article>

          <div className="stacked-cards">
            <article className="profile-card">
              <div className="card-heading">
                <FiUsers />
                <h2>Political Affiliation</h2>
              </div>

              <div className="affiliation">
                <span className="green-dot"></span>
                <strong>{candidate.party}</strong>
              </div>
            </article>

            <article className="profile-card">
              <div className="card-heading">
                <FiBriefcase />
                <h2>Current Position</h2>
              </div>

              <div className="position-row">
                <span className="position-symbol">✣</span>
                <strong>
                  Governor of Oyo State
                </strong>
              </div>
            </article>
          </div>
        </div>

        {/* PERSONAL + QUALIFICATIONS */}

        <div className="content-grid two-columns">
          <article className="profile-card">
            <div className="card-heading">
              <FiUser />
              <h2>Personal Information</h2>
            </div>

            <div className="details-list">
              {candidate.personalInfo.map(([label, value]) => (
                <div className="detail-row" key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="profile-card">
            <div className="card-heading">
              <FiBookOpen />
              <h2>Education & Qualifications</h2>
            </div>

            <div className="qualification-list">
              {candidate.qualifications.map((qualification) => (
                <div
                  className="qualification"
                  key={qualification.title + qualification.school}
                >
                  <FiCheckCircle />

                  <div>
                    <strong>{qualification.title}</strong>
                    <span>{qualification.school}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* CAREER */}

        <article className="profile-card career-card">
          <div className="card-heading">
            <FiBriefcase />
            <h2>Political Career & Offices Held</h2>
          </div>

          <div className="career-timeline">
            {candidate.career.map((item, index) => (
              <div
                className="career-item"
                key={`${item.period}-${index}`}
              >
                <div className="timeline-dot"></div>

                <div className="career-period">
                  {item.period}
                </div>

                <div className="career-details">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* PUBLIC RECORD + REPORTED CLAIMS */}

        <div className="content-grid two-columns warning-grid">
          <article className="warning-card controversy-card">
            <div className="warning-heading">
              <FiShield />
              <h2>Public Record & Disputes</h2>
            </div>

            <p>
              Matters documented in public records, court
              proceedings and independent reporting.
              Inclusion does not imply wrongdoing.
            </p>

            <ul>
              {candidate.controversies.map((item) => (
                <li key={item.text}>
                  <p>{item.text}</p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source} · {item.date}
                    <FiChevronRight />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#sources"
              className="details-button"
            >
              View Sources
              <FiChevronRight />
            </a>
          </article>

          <article className="warning-card allegation-card">
            <div className="warning-heading">
              <FiAlertTriangle />
              <h2>Reported Claims</h2>
            </div>

            <p>
              Claims, criticisms and disputed matters attributed
              to identifiable individuals, organisations or
              publications. Inclusion does not mean a claim
              has been established as fact.
            </p>

            <ul>
              {candidate.allegations.map((item) => (
                <li key={item.text}>
                  <p>{item.text}</p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source} · {item.date}
                    <FiChevronRight />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#sources"
              className="details-button"
            >
              View Sources
              <FiChevronRight />
            </a>
          </article>
        </div>

        {/* SOURCES */}

        <article className="sources-card" id="sources">
          <div className="sources-icon">
            <FiFileText />
          </div>

          <div className="sources-content">
            <h2>Sources & Verification</h2>

            <p>
              CivicLens references publicly available information
              from official government publications, court
              proceedings, established news organisations and
              independent fact-checking organisations.
              The following sources were consulted for this
              profile.
            </p>

            <ul>
              {candidate.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{source.name}</strong>
                    <span>{source.title}</span>
                    <small>{source.date}</small>
                    <FiGlobe />
                  </a>
                </li>
              ))}
            </ul>

            <p>
              CivicLens is an independent informational platform.
              The inclusion of an individual, event, claim or
              reported matter does not constitute an endorsement
              or confirmation of its accuracy. Reported
              allegations should not be interpreted as findings
              of guilt or wrongdoing.
            </p>

            <p>
              Information reflects the sources available at
              the time of publication and may change as new
              evidence, official records or legal decisions
              become available. Readers are encouraged to
              consult the original sources for full context.
            </p>

            <p>
              CivicLens does not guarantee that third-party
              information is complete or current. Where
              inaccuracies are identified, the platform
              aims to review and update the relevant material.
            </p>
          </div>

          <a
            href="#sources"
            className="sources-button"
          >
            View Sources
            <FiChevronRight />
          </a>
        </article>
      </section>
    </main>
  );
}