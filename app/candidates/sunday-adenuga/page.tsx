"use client";

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
  name: "Sunday Adenuga",
  office: "2027 Presidential Candidate",
  party: "Boot Party (BP)",
  position: "Presidential Candidate of the Boot Party",
  slogan: "Because Of Our Tomorrow",

  image: "/images/candidates/sunday-adenuga.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Candidate Age",
      value: "52 years",
      extra: "(As listed by INEC)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Ogun State",
      extra: "(Reported)",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "Boot Party (BP)",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Mustapha Usman Turaki",
      extra: "(40 years old)",
    },
    {
      icon: <FiBriefcase />,
      label: "Party Position",
      value: "National Chairman",
    },
  ],

  overview:
    "Sunday Oluwafemi Adenuga, popularly known as Sonny Adenuga, is a Nigerian politician, technology professional and consultant. He is the National Chairman of the Boot Party, also known as Because Of Our Tomorrow, and its presidential candidate for the 2027 Nigerian general election. Adenuga was also the party's presidential candidate in the 2023 election. His professional background has been described as covering programme management, organisational change, information security, privacy and financial services. Publicly available profiles also associate his work with technology governance, risk management and data protection.",

  personalInfo: [
    ["Full Name", "Sunday Oluwafemi Adenuga"],
    ["Popular Name", "Sonny Adenuga"],
    ["Date of Birth", "Not independently verified"],
    ["Age", "52 years (INEC listing)"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Ogun State (reported)"],
    ["Marital Status", "Not publicly verified"],
    ["Religion", "Not publicly verified"],
  ],

  qualifications: [
    {
      title: "Master's Degree in Project Management",
      school:
        "Northumbria University, United Kingdom (reported in published profiles)",
    },
    {
      title: "First School Leaving Certificate",
      school: "Listed in the qualifications submitted to INEC",
    },
    {
      title: "Senior Secondary School Certificate",
      school: "Listed in the qualifications submitted to INEC",
    },
    {
      title: "Professional Certifications",
      school:
        "CISA, CRISC and PMP certifications are reported in published profiles; independent verification not established here",
    },
  ],

  career: [
    {
      period: "2016",
      title: "Involvement in the Formation of BOOT Party",
      description:
        "Adenuga is reported to have been among those involved in organising the political movement that became the Boot Party. The party's name stands for Because Of Our Tomorrow.",
    },
    {
      period: "2019",
      title: "Boot Party Registration",
      description:
        "The Boot Party was registered by the Independent National Electoral Commission in 2019 following a legal dispute concerning its registration.",
    },
    {
      period: "2020 – Present",
      title: "National Chairman, Boot Party",
      description:
        "Adenuga has served as the party's National Chairman. His leadership role is also reflected in the party's published political records.",
    },
    {
      period: "2023",
      title: "Presidential Candidate, Boot Party",
      description:
        "Contested the 2023 Nigerian presidential election under the Boot Party. He received 16,156 votes according to published election results.",
    },
    {
      period: "29 May 2026",
      title: "Boot Party Presidential Primary",
      description:
        "Was returned unopposed at the Boot Party's presidential primary, securing the party's nomination for the 2027 presidential election.",
    },
    {
      period: "2026 – Present",
      title: "2027 Presidential Candidate",
      description:
        "Listed by INEC as the Boot Party's presidential candidate for the January 2027 general election, with Mustapha Usman Turaki as his running mate.",
    },
  ],

  controversies: [
    {
      text:
        "In April 2025, Sunday Adenuga and the Boot Party were reported to have joined a legal action at the Federal High Court in Yenagoa challenging the declaration of a state of emergency in Rivers State. Reports stated that the plaintiffs sought legal relief and damages. The available reporting reviewed for this profile does not establish a final court decision in the case. The filing of a lawsuit is not evidence of wrongdoing.",

      source: "OurNigeria",
      date: "2026 profile review",
      url: "https://ournigeria.ng/officials/adenuga-sunday",
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
        "Final List of Presidential and National Assembly Candidates for January 2027",
      date: "2026",
      url:
        "https://www.inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
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
      name: "Nairametrics",
      title:
        "Meet the 10 Youngest Presidential Candidates for Nigeria's 2027 Elections",
      date: "13 September 2026",
      url:
        "https://nairametrics.com/2026/09/13/meet-the-10-youngest-presidential-candidates-for-nigerias-2027-elections/",
    },

    {
      name: "ADBN TV",
      title:
        "Adenuga Sunday – 2027 Presidential Candidate Profile",
      date: "2026",
      url:
        "https://2027election.adbntv.com/election-candidate/presidential-bp-sunday-adenuga/",
    },

    {
      name: "OurNigeria",
      title:
        "Adenuga Sunday – Candidate Background and Public Record",
      date: "2026",
      url: "https://ournigeria.ng/officials/adenuga-sunday",
    },

    {
      name: "AllAfrica",
      title:
        "Nigeria: Profiles – The Men and Women Seeking to Be Nigeria's President in 2027",
      date: "2026",
      url:
        "https://allafrica.com/stories/202610260089.html",
    },

    {
      name: "VeroRecord",
      title:
        "BOOT Party's Sunday Adenuga: A Technocrat CV, Told Mostly by the Party Itself",
      date: "26 September 2026",
      url:
        "https://verorecord.com/story/boot-party-s-sunday-adenuga-a-technocrat-cv-told-mostly-by-t",
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
              National Chairman, Boot Party
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
                <strong>National Chairman, Boot Party</strong>
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
                  key={qualification.title}
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