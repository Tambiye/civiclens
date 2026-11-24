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
  name: "Sunday Chibuzo Okereke",
  office: "Labour Party Presidential Candidate",
  party: "Labour Party (LP)",
  position:
    "Presidential Candidate of the Labour Party for the 2027 Nigerian General Election.",
  slogan: "Governance, Institutional Development and Public Policy",
  image: "/images/candidates/okereke.jpg",

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
      value: "LP",
    },
    {
      icon: <FiHeart />,
      label: "Running Mate",
      value: "Hajja Bintu Konto",
    },
    {
      icon: <FiBriefcase />,
      label: "Election",
      value: "16 January 2027",
    },
  ],

  overview:
    "Sunday Chibuzo Okereke, also listed by INEC as Okereke Sunday Chibuzo, is a Nigerian governance expert, policy strategist and political figure. He was announced as the presidential candidate of the Labour Party faction led by Senator Nenadi Usman for the 2027 general election following a consensus process ratified in Abuja on 30 May 2026. He is reported to lead ERGAF-AFRICA Legislative Governance Innovation and Policy Hub and to work as a legislative consultant and lecturer in public policy and administration. INEC's published final list of presidential candidates identifies him as the Labour Party's candidate, with Hajja Bintu Konto as his running mate.",

  personalInfo: [
    ["Full Name", "Sunday Chibuzo Okereke"],
    ["Name on INEC List", "Okereke Sunday Chibuzo"],
    ["Age", "43 years (INEC 2026 list)"],
    ["Gender", "Male"],
    ["Nationality", "Nigerian"],
    ["Political Party", "Labour Party (LP)"],
    ["Running Mate", "Hajja Bintu Konto"],
  ],

  qualifications: [
    {
      title: "Ph.D.",
      school: "Reported qualification in INEC's published candidate list",
    },
    {
      title: "Master of Legislative Studies (MLS)",
      school: "Reported with distinction",
    },
    {
      title: "Master of Science (M.Sc.)",
      school: "Reported with distinction",
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      school: "Honours degree, as listed by INEC",
    },
    {
      title: "NABTEC / NABTEB",
      school: "Listed among his submitted qualifications by INEC",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school: "Listed among his submitted qualifications by INEC",
    },
  ],

  career: [
    {
      period: "Before 2026",
      title: "Governance and Policy Work",
      description:
        "Has been described in media reports as a governance expert, policy strategist and reform advocate with interests in public policy, legislative governance and institutional development.",
    },
    {
      period: "2026",
      title: "ERGAF-AFRICA",
      description:
        "Reportedly serves as President of ERGAF-AFRICA Legislative Governance Innovation and Policy Hub, an institution focused on legislative governance and policy research.",
    },
    {
      period: "2026",
      title: "Legislative Consultant",
      description:
        "Media reports describe him as a legislative consultant to committees and ranking members of the National Assembly.",
    },
    {
      period: "2026",
      title: "Academic and Public Policy Work",
      description:
        "Reportedly serves as a resident lecturer in the Department of Public Policy and Administration at Miva Open University, Abuja.",
    },
    {
      period: "30 May 2026",
      title: "Labour Party Presidential Candidate",
      description:
        "Was announced as the presidential candidate of the Nenadi Usman-led Labour Party faction following a consensus process ratified in Abuja.",
    },
    {
      period: "June 2026",
      title: "Labour Party Candidate Ratification",
      description:
        "The party's National Executive Committee reportedly ratified the candidates produced through its 2027 primary process, including Okereke as its presidential candidate.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "Appeared on INEC's published final list of presidential candidates for the January 2027 general election as the Labour Party candidate, with Hajja Bintu Konto as his running mate.",
    },
  ],

  controversies: [
    {
      text:
        "The Labour Party experienced internal leadership disagreements ahead of the 2027 general election. In May 2026, the Nenadi Usman-led faction announced Sunday Chibuzo Okereke as its presidential candidate. Reports also documented a competing candidate adopted by the faction associated with Julius Abure. The disagreement highlighted continuing divisions within the party.",

      source: "Punch",
      date: "30 May 2026",
      url:
        "https://punchng.com/lp-faction-unveils-presidential-candidate/",
    },

    {
      text:
        "The Nenadi Usman-led Labour Party announced Okereke as its presidential candidate following what it described as a broad-based consensus among party members and stakeholders. The announcement was reported by several Nigerian news organisations.",

      source: "Channels Television",
      date: "30 May 2026",
      url:
        "https://www.channelstv.com/2026/05/30/2027-nenadi-usman-led-labour-party-announces-chibuzo-okereke-as-presidential-candidate/",
    },

    {
      text:
        "INEC's final list of presidential candidates for the January 2027 election includes Okereke Sunday Chibuzo under the Labour Party, alongside running mate Hajja Bintu Konto. The published list provides official confirmation of the ticket recorded by the electoral commission.",

      source: "Independent National Electoral Commission",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
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
        "Presidential and National Assembly Elections for January 2027: Final List of Candidates",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "TheCable",
      title:
        "Nenadi Usman-led Labour Party picks Chibuzo Okereke as 2027 presidential candidate",
      date: "30 May 2026",
      url:
        "https://www.thecable.ng/nenadi-usman-led-labour-party-picks-chibuzo-okereke-as-2027-presidential-candidate/",
    },

    {
      name: "Channels Television",
      title:
        "Nenadi Usman-led Labour Party announces Chibuzo Okereke as presidential candidate",
      date: "30 May 2026",
      url:
        "https://www.channelstv.com/2026/05/30/2027-nenadi-usman-led-labour-party-announces-chibuzo-okereke-as-presidential-candidate/",
    },

    {
      name: "Punch",
      title:
        "Labour Party faction unveils presidential candidate",
      date: "30 May 2026",
      url:
        "https://punchng.com/lp-faction-unveils-presidential-candidate/",
    },

    {
      name: "Premium Times",
      title:
        "Labour Party announces presidential candidate for 2027",
      date: "31 May 2026",
      url:
        "https://www.premiumtimesng.com/news/top-news/884063-2027-labour-party-announces-presidential-candidate.html",
    },

    {
      name: "BusinessDay",
      title:
        "Okereke emerges LP presidential candidate",
      date: "30 May 2026",
      url:
        "https://businessday.ng/politics/article/2027-okereke-emerges-lp-presidential-candidate/",
    },

    {
      name: "Voice of Nigeria",
      title:
        "Labour Party endorses Okereke and Konto for 2027",
      date: "22 July 2026",
      url:
        "https://von.gov.ng/labour-party-endorses-okereke-and-konto-for-2027/",
    },

    {
      name: "Premium Times",
      title:
        "Labour Party presidential candidate proposes zero-based budgeting and institutional governance reset",
      date: "24 September 2026",
      url:
        "https://www.premiumtimesng.com/news/more-news/912014-2027-labour-party-presidential-candidate-proposes-zero-based-budgeting-institutional-governance-reset.html",
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
                  Labour Party Presidential Candidate, 2027
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
  <div className="career-item" key={`${item.period}-${index}`}>
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
              polipeek is an independent informational platform.
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
              polipeek does not guarantee that third-party
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