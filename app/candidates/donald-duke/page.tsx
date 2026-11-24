
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
  name: "Donald Duke",
  office: "People's Redemption Party Presidential Candidate",
  party: "People's Redemption Party (PRP)",
  position:
    "Presidential Candidate of the People's Redemption Party for the 2027 Nigerian General Election.",
  slogan: "A Compact for Nigeria's Renewal",
  image: "/images/candidates/donald-duke.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "64 years",
      extra: "(INEC 2026 candidate list)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Cross River State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "PRP",
    },
    {
      icon: <FiHeart />,
      label: "Running Mate",
      value: "Mohammed Sule",
      extra: "(70 years, INEC final list)",
    },
    {
      icon: <FiBriefcase />,
      label: "Election",
      value: "16 January 2027",
    },
  ],

  overview:
    "Donald Duke is a Nigerian lawyer and politician who served as Governor of Cross River State from 29 May 1999 to 29 May 2007. He is the presidential candidate of the People's Redemption Party (PRP) for the 2027 Nigerian general election. Before becoming governor, Duke served as Cross River State Commissioner for Finance and Planning and held positions in business and public-sector institutions. His administration promoted tourism, investment and infrastructure development in Cross River State, including the state's tourism profile and the development of Tinapa. He previously contested the 2019 presidential election under the Social Democratic Party. In 2026, the PRP selected him as its presidential candidate. INEC's final candidate list records him as 64 years old and identifies Mohammed Sule, aged 70, as his running mate.",

  personalInfo: [
    ["Full Name", "Donald Duke"],
    ["Date of Birth", "30 September 1961"],
    ["Age", "64 years (INEC 2026 candidate list)"],
    ["Place of Birth", "Calabar, Cross River State"],
    ["Gender", "Male"],
    ["Nationality", "Nigerian"],
    ["Political Party", "People's Redemption Party (PRP)"],
    ["Previous Political Party", "Social Democratic Party (SDP)"],
    ["Running Mate", "Mohammed Sule"],
    ["Running Mate's Age", "70 years (INEC 2026 final list)"],
  ],

  qualifications: [
    {
      title: "Bachelor of Laws (LL.B.)",
      school: "Ahmadu Bello University, Zaria, 1982",
    },
    {
      title: "Master of Laws (LL.M.)",
      school:
        "University of Pennsylvania, United States, 1984. Specialisation in International Business.",
    },
    {
      title: "Barrister at Law (B.L.)",
      school: "Nigerian Law School, 1983",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school: "Listed among his submitted qualifications by INEC.",
    },
    {
      title: "West African School Certificate (WASC)",
      school: "Listed among his submitted qualifications by INEC.",
    },
  ],

  career: [
    {
      period: "1982",
      title: "Law Degree",
      description:
        "Obtained a Bachelor of Laws degree from Ahmadu Bello University, Zaria.",
    },
    {
      period: "1983–1984",
      title: "Legal Training and Postgraduate Studies",
      description:
        "Attended the Nigerian Law School and obtained a Master of Laws degree in International Business from the University of Pennsylvania in 1984.",
    },
    {
      period: "1985–1988",
      title: "Corporate Lawyer",
      description:
        "Worked as a corporate lawyer in the Onyia & Duke partnership.",
    },
    {
      period: "1988–1999",
      title: "Business and Public-Sector Roles",
      description:
        "Held management and directorship positions in private businesses and served on public-sector bodies, including the National Economic Intelligence Committee and the Federal Economic Council.",
    },
    {
      period: "1992–1993",
      title: "Cross River State Commissioner for Finance and Planning",
      description:
        "Served in the Cross River State Government before his election as governor.",
    },
    {
      period: "29 May 1999",
      title: "Governor of Cross River State",
      description:
        "Began his first term as governor of Cross River State. His administration pursued tourism, infrastructure, investment and public-service development initiatives.",
    },
    {
      period: "29 May 2003",
      title: "Second Term as Governor",
      description:
        "Returned for a second term as governor and remained in office until 29 May 2007.",
    },
    {
      period: "2007",
      title: "Completion of Governorship",
      description:
        "Completed two terms as Governor of Cross River State and handed over to his successor.",
    },
    {
      period: "2019",
      title: "Presidential Candidate, SDP",
      description:
        "Contested the Nigerian presidential election under the platform of the Social Democratic Party.",
    },
    {
      period: "6 June 2026",
      title: "PRP Presidential Candidate",
      description:
        "The People's Redemption Party announced that Duke had been cleared as its presidential candidate after the party's primary appeal review and National Working Committee approval.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "Appeared on INEC's published final list of presidential candidates for the January 2027 election as the PRP candidate.",
    },
    {
      period: "November 2026",
      title: "PRP Manifesto Unveiling",
      description:
        "Participated in the unveiling of the PRP manifesto, titled A Compact for Nigeria's Renewal, which addressed issues including poverty, insecurity, corruption, unemployment and accountable governance.",
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
      name: "Rivers State University",
      title:
        "Citation on His Excellency Mr. Donald Duke, Former Governor of Cross River State",
      date: "2023",
      url:
        "https://www.rsu.edu.ng/wp-content/uploads/2023/12/ust-95-convocation-4.pdf",
    },
    {
      name: "Princeton University, Innovations for Successful Societies",
      title: "Donald Duke: Interview and Profile",
      date: "2009",
      url:
        "https://successfulsocieties.princeton.edu/interviews/donald-duke",
    },
    {
      name: "Cowrie Partners",
      title: "Donald Duke: Professional Biography",
      date: "Accessed 2026",
      url:
        "https://cowriepartners.com/our-people/donald-duke/",
    },
    {
      name: "TheCable",
      title: "PRP picks Donald Duke as presidential candidate for 2027",
      date: "6 June 2026",
      url:
        "https://www.thecable.ng/prp-picks-donald-duke-as-presidential-candidate-for-2027/",
    },
    {
      name: "Punch",
      title:
        "PRP clears Donald Duke as presidential candidate, others for 2027 elections",
      date: "6 June 2026",
      url:
        "https://punchng.com/2159738-2/",
    },
    {
      name: "Tribune Online",
      title: "PRP presidential candidate, Duke, unveils plan for Nigeria",
      date: "11 June 2026",
      url:
        "https://tribuneonlineng.com/2027-prp-presidential-candidate-duke-unveils-plan-for-nigeria/",
    },
    {
      name: "TheCable",
      title:
        "Donald Duke: I'll reduce petrol price to N300 per litre if elected president",
      date: "7 October 2026",
      url:
        "https://www.thecable.ng/donald-duke-ill-reduce-petrol-price-to-n300-per-litre-if-elected-president/",
    },
    {
      name: "Premium Times",
      title:
        "Duke vows to reduce petrol price to ₦300 per litre if elected president",
      date: "7 October 2026",
      url:
        "https://www.premiumtimesng.com/regional/south-south-regional/915294-2027-duke-vows-to-reduce-petrol-price-to-%E2%82%A6300-per-litre-if-elected-president.html",
    },
    {
      name: "The Guardian",
      title:
        "PRP unveils manifesto as Duke warns Nigeria risks another civil war",
      date: "11 November 2026",
      url:
        "https://guardian.ng/politics/prp-unveils-manifesto-as-duke-warns-nigeria-risks-another-civil-war/",
    },
    {
      name: "Punch",
      title:
        "I'm open to stepping down for consensus opposition candidate — Duke",
      date: "10 November 2026",
      url:
        "https://punchng.com/2027-im-open-to-stepping-down-for-consensus-opposition-candidate-duke/",
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
                  People's Redemption Party Presidential Candidate, 2027
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
