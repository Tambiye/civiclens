
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
  name: "Bola Ahmed Tinubu",
  office: "President of Nigeria",
  party: "All Progressives Congress (APC)",
  position: "President of the Federal Republic of Nigeria",
  slogan: "Renewed Hope. A Greater Nigeria.",
  image: "/images/candidates/tinubu.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "29 March 1952",
      extra: "(74 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Lagos State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "APC",
    },
    {
      icon: <FiHeart />,
      label: "Marital Status",
      value: "Married",
    },
    {
      icon: <FiBriefcase />,
      label: "Current Office Since",
      value: "29 May 2023",
    },
  ],

  overview:
    "Bola Ahmed Tinubu is a Nigerian politician and the President of the Federal Republic of Nigeria. Before becoming president in May 2023, he served as Governor of Lagos State from 1999 to 2007 and represented Lagos West in the Senate. He is a prominent figure in Nigeria's political landscape.",

  personalInfo: [
    ["Full Name", "Bola Ahmed Tinubu"],
    ["Date of Birth", "29 March 1952"],
    ["Place of Birth", "Lagos, Nigeria"],
    ["State of Origin", "Lagos State"],
    ["Marital Status", "Married"],
    ["Religion", "Islam"],
  ],

  qualifications: [
    {
      title: "B.Sc. Business Administration",
      school: "Chicago State University, USA",
    },
    {
      title: "Accounting",
      school: "Major, Chicago State University, USA",
    },
    {
      title: "Barrister at Law",
      school: "Nigerian Law School, Lagos",
    },
    {
      title: "Master's Degree",
      school: "University of Lagos",
    },
  ],

  career: [
    {
      period: "1999 – 2007",
      title: "Governor of Lagos State (Two Terms)",
      description:
        "Served two consecutive terms as Governor of Lagos State.",
    },
    {
      period: "2003 – 2007",
      title: "Political Leadership",
      description:
        "Played a prominent role in national opposition politics and party organisation.",
    },
    {
      period: "1992 – 1993",
      title: "Senator, Lagos West",
      description:
        "Represented Lagos West Senatorial District in the Nigerian Senate.",
    },
    {
      period: "2023 – Present",
      title: "President of Nigeria",
      description:
        "Assumed office as President of the Federal Republic of Nigeria on 29 May 2023.",
    },
  ],

  controversies: [
    {
      text:
        "The removal of the petrol subsidy in May 2023 attracted widespread public debate over rising fuel prices, inflation and the cost of living. Critics questioned the timing of the reform and the adequacy of measures to protect vulnerable households.",

      source: "Financial Times",
      date: "2024",
      url:
        "https://www.ft.com/content/29752a06-adea-4175-b278-22e0632c375a",
    },

    {
      text:
        "The February 2023 presidential election result was challenged by opposition candidates Peter Obi and Atiku Abubakar. On 26 October 2023, Nigeria's Supreme Court dismissed their appeals and upheld Tinubu's election victory.",

      source: "Associated Press",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      text:
        "A 1993 US civil forfeiture case involving funds held in accounts associated with Tinubu became a subject of public and political debate. AFP reported that the authentic court documents did not establish that Tinubu was indicted or convicted.",

      source: "AFP Fact Check",
      date: "18 November 2022",
      url:
        "https://factcheck.afp.com/doc.afp.com.32NP3DU",
    },
  ],

  allegations: [
    {
      text:
        "During the 2023 election litigation, Atiku Abubakar raised questions about Tinubu's educational qualifications and submitted arguments concerning his academic records. The Supreme Court dismissed the election petitions.",

      source: "Associated Press",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      text:
        "Questions about Tinubu's Chicago State University academic records became part of public debate and legal proceedings. The university confirmed that Tinubu attended the institution and was awarded a bachelor's degree in 1979.",

      source: "The ICIR",
      date: "27 June 2022",
      url:
        "https://www.icirnigeria.org/chicago-university-replies-icir-on-tinubus-controversial-certificate/",
    },

    {
      text:
        "A purported INEC press release claiming that the electoral commission was investigating Tinubu over the historical US case circulated online in November 2022. AFP Fact Check found the release was fabricated, and INEC dismissed the claim.",

      source: "AFP Fact Check",
      date: "18 November 2022",
      url:
        "https://factcheck.afp.com/doc.afp.com.32NP3DU",
    },
  ],

  sources: [
    {
      name: "The State House",
      title: "Official Presidential Biography: Bola Ahmed Tinubu",
      date: "Official government profile",
      url:
        "https://statehouse.gov.ng/team/bola-ahmed-tinubu/",
    },

    {
      name: "Associated Press",
      title:
        "Nigeria's Supreme Court upholds Tinubu's election victory",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      name: "AFP Fact Check",
      title:
        "Hoax press release falsely claims Nigerian electoral body will probe ruling party candidate",
      date: "18 November 2022",
      url:
        "https://factcheck.afp.com/doc.afp.com.32NP3DU",
    },

    {
      name: "The ICIR",
      title:
        "Chicago University replies ICIR on Tinubu's controversial certificate",
      date: "27 June 2022",
      url:
        "https://www.icirnigeria.org/chicago-university-replies-icir-on-tinubus-controversial-certificate/",
    },

    {
      name: "Financial Times",
      title:
        "Nigeria's economic crisis puts fuel subsidies removal under scrutiny",
      date: "2024",
      url:
        "https://www.ft.com/content/29752a06-adea-4175-b278-22e0632c375a",
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
              Current Position
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
                <strong>President of Nigeria</strong>
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
