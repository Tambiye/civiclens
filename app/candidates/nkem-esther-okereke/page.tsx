
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
  name: "Nkem Esther Okereke",
  office: "National Rescue Movement Presidential Candidate",
  party: "National Rescue Movement (NRM)",
  position:
    "Presidential Candidate of the National Rescue Movement for the 2027 Nigerian General Election.",
  slogan: "Rescue, Rebuild and Restore",
  image: "/images/candidates/nkem-okereke.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "43 years",
      extra: "(INEC 2026 candidate list)",
    },
    {
      icon: <FiMapPin />,
      label: "Country",
      value: "Nigeria",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "NRM",
    },
    {
      icon: <FiHeart />,
      label: "Running Mate",
      value: "Sulaiman Nasir Muhammed",
      extra: "(35 years)",
    },
    {
      icon: <FiBriefcase />,
      label: "Election",
      value: "16 January 2027",
    },
  ],

  overview:
    "Nkem Esther Okereke, listed by the Independent National Electoral Commission as Okereke Nkem Esther, is a Nigerian politician and the presidential candidate of the National Rescue Movement (NRM) for the 2027 general election. INEC's published final candidate list records her age as 43 and identifies Sulaiman Nasir Muhammed as her running mate. She is also publicly associated with the Nigerian film and entertainment industry. In interviews, Okereke has discussed her transition from entertainment and humanitarian activities into politics. Her campaign has presented the ESTHER Agenda, a framework addressing education, security, technology, housing, entrepreneurship and restitution. Details about her personal background and professional history are drawn from media interviews and party publications and should be read with those source limitations in mind.",

  personalInfo: [
    ["Full Name", "Nkem Esther Okereke"],
    ["Name on INEC List", "Okereke Nkem Esther"],
    ["Other Public Name", "Esther Nkem Okereke"],
    ["Age", "43 years (INEC 2026 list)"],
    ["Gender", "Female"],
    ["Nationality", "Nigerian"],
    ["Political Party", "National Rescue Movement (NRM)"],
    ["Running Mate", "Sulaiman Nasir Muhammed"],
    ["Running Mate's Age", "35 years (INEC 2026 list)"],
  ],

  qualifications: [
    {
      title: "Ph.D.",
      school:
        "Listed among the qualifications submitted to INEC. Independent confirmation of completion was not established in the sources reviewed.",
    },
    {
      title: "Master of Science (M.Sc.)",
      school: "Listed among the qualifications submitted to INEC.",
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      school: "Listed among the qualifications submitted to INEC.",
    },
    {
      title: "Senior Secondary School Certificate (SSCE)",
      school: "Listed among the qualifications submitted to INEC.",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school: "Listed among the qualifications submitted to INEC.",
    },
  ],

  career: [
    {
      period: "Before 2026",
      title: "Entertainment and Film Work",
      description:
        "Media profiles identify Okereke as a Nollywood actress and filmmaker. TheCable Lifestyle interviewed her about her move from the entertainment industry into national politics.",
    },
    {
      period: "Before 2026",
      title: "Business and Humanitarian Activities",
      description:
        "In interviews, Okereke has discussed business activities and humanitarian initiatives. The NRM has also described her as an entrepreneur and humanitarian. Further independent documentation of the organisations and roles involved is limited.",
    },
    {
      period: "2026",
      title: "National Rescue Movement",
      description:
        "The National Rescue Movement presented Okereke as its presidential candidate for the 2027 general election. The party's published candidate biography uses the name Dr. Esther Nkem Okereke.",
    },
    {
      period: "29 May 2026",
      title: "NRM Presidential Candidate",
      description:
        "Media reports identified Okereke as the NRM's presidential candidate following the party's convention and candidate selection process in Abuja.",
    },
    {
      period: "2026",
      title: "ESTHER Agenda",
      description:
        "Okereke has presented the ESTHER Agenda as a framework for her proposed priorities, covering education, security, technology, housing, entrepreneurship and restitution.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "Appeared on INEC's published final list of presidential candidates for the 2027 general election as the National Rescue Movement candidate, with Sulaiman Nasir Muhammed listed as her running mate.",
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
        "Presidential and National Assembly Elections for January 2027: Final List of Candidates",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },
    {
      name: "TheCable Lifestyle",
      title:
        "Esther Okereke talks to TheCable Lifestyle about her bid to become Nigeria's president",
      date: "12 July 2026",
      url:
        "https://lifestyle.thecable.ng/interview-why-im-running-for-nigerias-president-by-actress-esther-okereke/",
    },
    {
      name: "National Rescue Movement",
      title: "Dr. Esther Nkem Okereke: Official Candidate Biography",
      date: "2026",
      url:
        "https://www.nrm.ng/candidates/dr-esther-nkem-okereke/",
    },
    {
      name: "National Rescue Movement",
      title:
        "Esther Okereke Takes NRM's Rescue Nigeria Agenda to Nigerians Ahead of 2027 Presidential Election",
      date: "16 October 2026",
      url:
        "https://www.nrm.ng/news/esther-okereke-takes-nrms-rescue-nigeria-agenda-to-nigerians-ahead-of-2027-presidential-election/",
    },
    {
      name: "Nairametrics",
      title:
        "Meet the 10 youngest presidential candidates for Nigeria's 2027 elections",
      date: "13 September 2026",
      url:
        "https://nairametrics.com/2026/09/13/meet-the-10-youngest-presidential-candidates-for-nigerias-2027-elections/",
    },
    {
      name: "Punch",
      title:
        "Meet the two women on 2027 presidential ballot challenging Tinubu, Atiku, Obi",
      date: "September 2026",
      url:
        "https://punchng.com/meet-two-women-on-2027-presidential-ballot-challenging-tinubu-atiku-obi/",
    },
    {
      name: "OurNigeria",
      title: "Okereke Nkem Esther: 2027 Presidential Candidate Profile",
      date: "2026",
      url:
        "https://ournigeria.ng/officials/okereke-nkem-esther",
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
                  National Rescue Movement Presidential Candidate, 2027
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
