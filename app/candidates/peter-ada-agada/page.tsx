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
  name: "Peter Ada Agada",
  office: "YPP Presidential Candidate",
  party: "Young Progressives Party (YPP)",
  position:
    "Presidential Candidate of the Young Progressives Party for the 2027 General Election",
  slogan: "Campaign slogan not independently verified.",
  image: "/images/candidates/peter-agada.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "54 years",
      extra: "",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Not independently verified",
      extra: "",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "YPP",
      extra: "Young Progressives Party",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Key Patience Ndidi",
      extra: "(52 years old)",
    },
    {
      icon: <FiBookOpen />,
      label: "Qualifications",
      value: "WAEC, BSc and MBA",
      extra: "",
    },
  ],

  overview:
    "Peter Ada Agada is a Nigerian politician and the presidential candidate of the Young Progressives Party (YPP) for the 2027 general election. He previously sought the presidential ticket of the Labour Party but was disqualified during its screening process. In June 2026, he left the Labour Party and joined the YPP to continue his presidential ambition. On 21 August 2026, the YPP selected him as its replacement presidential candidate through a substitution primary held in Abuja. He is contesting alongside vice-presidential candidate Key Patience Ndidi. INEC's final candidate list records Agada as 54 years old and lists his submitted qualifications as WAEC, BSc and MBA.",

  personalInfo: [
    ["Full Name", "Peter Ada Agada"],
    ["Age", "54 years, according to INEC"],
    ["Gender", "Male"],
    ["Date of Birth", "Not independently verified"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Not independently verified"],
    ["Marital Status", "Not publicly verified"],
    ["Political Party", "Young Progressives Party (YPP)"],
    ["Running Mate", "Key Patience Ndidi, age 52"],
    ["Current Position", "YPP Presidential Candidate, 2027"],
  ],

  qualifications: [
    {
      title: "West African Examination Council Certificate",
      school: "WAEC, as listed in INEC's final candidate record",
    },
    {
      title: "Bachelor of Science",
      school: "BSc, as listed in INEC's final candidate record",
    },
    {
      title: "Master of Business Administration",
      school: "MBA, as listed in INEC's final candidate record",
    },
  ],

  career: [
    {
      period: "Before June 2026",
      title: "Labour Party Presidential Aspirant",
      description:
        "Agada sought the Labour Party's presidential ticket ahead of the 2027 general election. He was subsequently disqualified during the party's presidential screening process. Punch reported that Agada disputed the circumstances surrounding his exclusion and criticised the party leadership.",
    },
    {
      period: "8 June 2026",
      title: "Joined the Young Progressives Party",
      description:
        "Following his disqualification from the Labour Party presidential primary, Agada defected to the Young Progressives Party. He announced his decision in Abuja, where he introduced the YPP as his new political platform for pursuing the 2027 presidential election.",
    },
    {
      period: "21 August 2026",
      title: "YPP Presidential Candidate",
      description:
        "Agada emerged as the YPP presidential candidate through a presidential and vice-presidential substitution primary held in Abuja. The party replaced its earlier candidate, Anita Zugwai-Chukwu, with Agada. Key Patience Ndidi was presented as his running mate.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "The Independent National Electoral Commission included Agada as the YPP presidential candidate in its final list for the 2027 general election. The list records his age as 54 and his submitted qualifications as WAEC, BSc and MBA. His running mate is listed as Key Patience Ndidi, aged 52.",
    },
  ],

  controversies: [] as {
    text: string;
    source: string;
    date: string;
    url: string;
  }[],

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
        "Final List of Presidential and National Assembly Candidates for January 2027 Elections",
      date: "October 2026",
      url:
        "https://www.inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "Punch Newspapers",
      title:
        "LP Presidential Aspirant Dumps Party for YPP After Disqualification",
      date: "8 June 2026",
      url:
        "https://punchng.com/lp-presidential-aspirant-dumps-party-for-ypp-after-disqualification/",
    },

    {
      name: "Punch Newspapers",
      title:
        "2027: Ex-LP Aspirant Emerges YPP Presidential Candidate",
      date: "21 August 2026",
      url:
        "https://punchng.com/2027-ex-lp-aspirant-emerges-ypp-presidential-candidate/",
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
      name: "TheCable",
      title:
        "Tinubu, Atiku, Obi, Sowore... INEC Clears 18 Presidential Candidates for 2027 Poll",
      date: "September 2026",
      url:
        "https://www.thecable.ng/tinubu-atiku-obi-sowore-inec-clears-18-presidential-candidates-for-2027-poll/",
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
                  YPP Presidential Candidate, 2027
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
            {candidate.career.map((item) => (
              <div className="career-item" key={item.period}>
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
              PoliPeek references publicly available information
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
              PoliPeek is an independent informational platform.
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
              PoliPeek does not guarantee that third-party
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