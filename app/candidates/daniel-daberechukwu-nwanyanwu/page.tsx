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
  name: "Daniel Daberechukwu Nwanyanwu",
  office: "ZLP Presidential Candidate",
  party: "Zenith Labour Party (ZLP)",
  position:
    "Presidential Candidate of the Zenith Labour Party for the 2027 General Election",
  slogan: "Campaign slogan not independently verified.",
  image: "/images/candidates/nwanyanwu.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "66 years",
      extra: "As listed by INEC",
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
      value: "ZLP",
      extra: "Zenith Labour Party",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Hassan Khalid",
      extra: "37 years old",
    },
    {
      icon: <FiBookOpen />,
      label: "Qualifications",
      value: "FSLC, WAEC, LLB and LLM",
      extra: "As submitted to INEC",
    },
  ],

  overview:
    "Daniel Daberechukwu Nwanyanwu is a Nigerian politician and the presidential candidate of the Zenith Labour Party (ZLP) for the 2027 general election. He previously contested the 2023 presidential election under the same party. On 30 May 2026, he emerged as the ZLP's consensus presidential candidate at the party's national convention in Abuja. During his acceptance speech, he identified national unity, insecurity and corruption as issues he intended to prioritise if elected. He also spoke about inclusive government, citizens' rights, youth development and the establishment of state and community policing. INEC's final list records him as 66 years old and lists his submitted qualifications as FSLC, WAEC, LLB and LLM. His running mate is Hassan Khalid, aged 37.",

  personalInfo: [
    ["Full Name", "Daniel Daberechukwu Nwanyanwu"],
    ["INEC Recorded Name", "Nwanyanwu Daniel Daberechukwu"],
    ["Age", "66 years, according to INEC"],
    ["Gender", "Male"],
    ["Date of Birth", "Not independently verified"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Not independently verified"],
    ["Marital Status", "Not independently verified"],
    ["Religion", "Not independently verified"],
    ["Political Party", "Zenith Labour Party (ZLP)"],
    ["Running Mate", "Hassan Khalid, age 37"],
    ["Current Position", "ZLP Presidential Candidate, 2027"],
  ],

  qualifications: [
    {
      title: "First School Leaving Certificate",
      school: "FSLC, as listed in INEC's final candidate record",
    },
    {
      title: "West African Examinations Council Certificate",
      school: "WAEC, as listed in INEC's final candidate record",
    },
    {
      title: "Bachelor of Laws",
      school: "LLB, as listed in INEC's final candidate record",
    },
    {
      title: "Master of Laws",
      school: "LLM, as listed in INEC's final candidate record",
    },
  ],

  career: [
    {
      period: "2023",
      title: "ZLP Presidential Candidate",
      description:
        "Nwanyanwu contested the 2023 Nigerian presidential election as the Zenith Labour Party candidate. INEC's published election results recorded 77,665 votes for him. He contested alongside other presidential candidates across the country.",
    },
    {
      period: "30 May 2026",
      title: "Emerged as ZLP Consensus Candidate",
      description:
        "Nwanyanwu emerged as the Zenith Labour Party's consensus presidential candidate at its national convention in Abuja. According to a report by Premium Times, he made the announcement during his acceptance speech and outlined several priorities for his proposed administration.",
    },
    {
      period: "May 2026",
      title: "Outlined Presidential Priorities",
      description:
        "During his acceptance speech, Nwanyanwu identified national unity, insecurity and corruption as priorities. He also discussed inclusive government, the restoration of citizens' rights, youth development and proposals for state and community policing.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "The Independent National Electoral Commission included Nwanyanwu as the Zenith Labour Party's presidential candidate in its final list for the 2027 general election. The list records his age as 66, his qualifications as FSLC, WAEC, LLB and LLM, and his running mate as Hassan Khalid, aged 37.",
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
      date: "September 2026",
      url:
        "https://www.inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },
    {
      name: "Premium Times",
      title: "2027: ZLP Gets Presidential Candidate",
      date: "31 May 2026",
      url:
        "https://www.premiumtimesng.com/news/more-news/884057-2027-zlp-gets-presidential-candidate.html",
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
      name: "Independent National Electoral Commission",
      title: "Report of the 2023 General Election",
      date: "February 2024",
      url:
        "https://wp1.inecnigeria.org/wp-content/uploads/2024/02/2023-GENERAL-ELECTION-REPORT-1.pdf",
    },
    {
      name: "Journal of African Elections",
      title: "Election Results of the 2023 Nigerian Presidential Election",
      date: "2023",
      url:
        "https://www.eisa.org/storage/2023/11/2023-journal-of-african-elections-v22n2-eisa-1.pdf",
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
                  ZLP Presidential Candidate, 2027
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