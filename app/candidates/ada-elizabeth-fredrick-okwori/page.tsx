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
  name: "Ada Elizabeth Fredrick Okwori",
  office: "2027 Presidential Candidate",
  party: "National Democratic Party (NDP)",
  position: "Presidential Candidate of the National Democratic Party",
  slogan: "Light of Hope, Nigeria First, Bright Future for All",
  image: "/images/candidates/ada-okwori.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Candidate Age",
      value: "48 years",
      extra: "(As listed by INEC)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Benue State",
      extra: "(Reported)",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "NDP",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Chukwuemeka Uchenna Anthony",
      extra: "(48 years old)",
    },
    {
      icon: <FiBriefcase />,
      label: "Current Position",
      value: "National Chairman, NDP",
    },
  ],

  overview:
    "Ada Elizabeth Fredrick Okwori is a Nigerian politician, grassroots organiser and founder of the National Democratic Party (NDP). She is the party's presidential candidate for the January 2027 general election and serves as its National Chairman, a position INEC records as being held by court order. Okwori previously participated in grassroots political mobilisation through the Ward2Ward initiative and was involved in political activities within the People's Democratic Party (PDP). In 2025, she and other NDP promoters instituted legal proceedings challenging INEC's refusal to register the party. A Federal High Court ruled in their favour in February 2026, directing INEC to register the NDP. She subsequently emerged as the party's presidential candidate at its May 2026 primary.",

  personalInfo: [
    ["Full Name", "Ada Elizabeth Fredrick Okwori"],
    ["Date of Birth", "Not independently verified"],
    ["Age", "48 years (INEC listing)"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Benue State (reported)"],
    ["Ethnic Background", "Idoma (reported)"],
    ["Local Government Area", "Otukpo (reported family roots)"],
    ["Marital Status", "Not publicly verified"],
    ["Religion", "Not publicly verified"],
  ],

  qualifications: [
    {
      title: "Higher National Diploma (HND) in Accountancy",
      school:
        "Listed in the qualifications submitted to INEC. Institution not independently confirmed.",
    },
    {
      title: "Senior Secondary School Certificate (SSCE)",
      school:
        "Listed in the qualifications submitted to INEC. School not independently confirmed.",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school:
        "Listed in the qualifications submitted to INEC. School not independently confirmed.",
    },
  ],

  career: [
    {
      period: "2014",
      title: "National Coordinator, Ward2Ward",
      description:
        "Okwori was identified as the National Coordinator of Ward2Ward, a grassroots political mobilisation initiative. In October 2014, she spoke publicly about the group's campaign activities ahead of the 2015 presidential election.",
    },
    {
      period: "2014 – 2024",
      title: "Political and Grassroots Organising",
      description:
        "Published profiles describe Okwori's involvement in political organising and activities associated with the People's Democratic Party. In April 2024, a youth group reportedly supported her interest in contesting for the PDP National Women Leader position.",
    },
    {
      period: "2025",
      title: "NDP Founder and Party Promoter",
      description:
        "Okwori emerged as a leading promoter of the National Democratic Party and participated in efforts to secure its registration. The party's public materials identify her as its founder and National Chairman.",
    },
    {
      period: "16 February 2026",
      title: "Federal High Court Judgment on NDP Registration",
      description:
        "Okwori and three other party promoters obtained a Federal High Court judgment directing INEC to register the National Democratic Party after the promoters challenged the commission's refusal to register the association.",
    },
    {
      period: "March 2026",
      title: "National Chairman, National Democratic Party",
      description:
        "Following the court judgment and subsequent registration, INEC's official party register listed Okwori as the NDP National Chairman, with the position marked as held by court order.",
    },
    {
      period: "29 May 2026",
      title: "NDP Presidential Primary",
      description:
        "Okwori emerged as the National Democratic Party's presidential candidate at the party's presidential primary, according to published candidate profiles.",
    },
    {
      period: "September 2026 – Present",
      title: "2027 Presidential Candidate",
      description:
        "INEC included Okwori on its final list of presidential candidates for the January 2027 general election. Her running mate is Chukwuemeka Uchenna Anthony.",
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
        "Final List of Presidential and National Assembly Candidates for January 2027",
      date: "September 2026",
      url:
        "https://www.inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "Independent National Electoral Commission",
      title:
        "National Democratic Party – Registered Political Party and Party Leadership",
      date: "Official party register",
      url:
        "https://www.inecnigeria.org/parties/national-democratic-party",
    },

    {
      name: "TheCable",
      title:
        "Court orders INEC to register National Democratic Party",
      date: "19 February 2026",
      url:
        "https://www.thecable.ng/court-orders-inec-to-register-national-democratic-party/",
    },

    {
      name: "Punch Newspapers",
      title:
        "Court orders INEC to register NDP",
      date: "20 February 2026",
      url:
        "https://punchng.com/court-orders-inec-to-register-ndp-2/",
    },

    {
      name: "OurNigeria",
      title:
        "Okwori Ada Elizabeth Fredrick – Candidate Biography and Public Record",
      date: "2026",
      url:
        "https://ournigeria.ng/officials/okwori-ada-elizabeth-frederick",
    },

    {
      name: "The Guardian",
      title:
        "2027: Only two women among 18 presidential candidates",
      date: "28 September 2026",
      url:
        "https://guardian.ng/guardian-woman/2027-only-two-women-among-18-presidential-candidates/",
    },

    {
      name: "Punch Newspapers",
      title:
        "Meet two women on 2027 presidential ballot challenging Tinubu, Atiku, Obi",
      date: "19 September 2026",
      url:
        "https://punchng.com/meet-two-women-on-2027-presidential-ballot-challenging-tinubu-atiku-obi/",
    },

    {
      name: "National Democratic Party",
      title:
        "Official Party Leadership",
      date: "Party website",
      url:
        "https://www.ndpnigeria.org/leadership.html",
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
              National Chairman, NDP
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
                <strong>National Chairman, NDP</strong>
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
              Polipeek is an independent informational platform.
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
              Polipeek does not guarantee that third-party
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