
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
  name: "Sandy Ojang Onor",
  office: "Peoples Democratic Party Presidential Candidate",
  party: "Peoples Democratic Party (PDP)",
  position:
    "Presidential Candidate of the Peoples Democratic Party for the 2027 Nigerian General Election.",
  slogan: "Historian, Academic and Former Senator",
  image: "/images/candidates/sandy.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "60 years",
      extra: "(INEC 2026 candidate list)",
    },
    {
      icon: <FiMapPin />,
      label: "State",
      value: "Cross River State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "PDP",
    },
    {
      icon: <FiHeart />,
      label: "Running Mate",
      value: "Umaru Babangida",
    },
    {
      icon: <FiBriefcase />,
      label: "Former Office",
      value: "Senator",
    },
    {
      icon: <FiCalendar />,
      label: "Election",
      value: "16 January 2027",
    },
  ],

  overview:
    "Sandy Ojang Onor is a Nigerian historian, academic and politician from Cross River State. He is a professor of history at the University of Calabar and previously represented Cross River Central Senatorial District in the Nigerian Senate from 2019 to 2023. Before his election to the Senate, he served as Chairman of Etung Local Government Council and held several appointments in the Cross River State Government, including Commissioner for Agriculture and Commissioner for Environment. In May 2026, he emerged as the presidential candidate of the Abdulrahman Mohammed-led Peoples Democratic Party faction. INEC's published final list of presidential candidates identifies him as the PDP candidate for the January 2027 election, with Umaru Babangida as his running mate.",

  personalInfo: [
    ["Full Name", "Sandy Ojang Onor"],
    ["Name on INEC List", "Onor Sandy Ojang"],
    ["Date of Birth", "14 February 1966"],
    ["Age", "60 years (INEC 2026 list)"],
    ["Gender", "Male"],
    ["Nationality", "Nigerian"],
    ["State of Origin", "Cross River State"],
    ["Place of Birth", "Ikom, Cross River State"],
    ["Political Party", "Peoples Democratic Party (PDP)"],
    ["Profession", "Historian, Academic and Politician"],
    ["Running Mate", "Umaru Babangida"],
  ],

  qualifications: [
    {
      title: "Doctor of Philosophy (Ph.D.) in History",
      school: "University of Calabar",
    },
    {
      title: "Bachelor of Arts (B.A.) in History",
      school: "University of Calabar, 1987",
    },
    {
      title: "West African School Certificate (WASC)",
      school: "St. Brendan's College, Iyamoyong",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school: "St. Francis Primary School, Obubra",
    },
  ],

  career: [
    {
      period: "1987",
      title: "Graduate Assistant, University of Calabar",
      description:
        "After graduating with a Bachelor of Arts degree in History from the University of Calabar, he received an offer of employment as a Graduate Assistant at the institution.",
    },
    {
      period: "1993",
      title: "Doctorate in History",
      description:
        "Obtained a Ph.D. in History from the University of Calabar and continued his academic career in the university system.",
    },
    {
      period: "1993",
      title: "Director, Duraform Company Limited",
      description:
        "Served as a director of Duraform Company Limited in Ikom, Cross River State.",
    },
    {
      period: "1999–2002",
      title: "Chairman, Etung Local Government Council",
      description:
        "Served as Executive Chairman of Etung Local Government Council in Cross River State. During this period, he also held leadership positions within the Association of Local Governments of Nigeria (ALGON), including State Chairman in Cross River State.",
    },
    {
      period: "2004–2008",
      title: "Chairman, Local Government Service Commission",
      description:
        "Served as Chairman of the Cross River State Local Government Service Commission.",
    },
    {
      period: "2010–2011",
      title: "Commissioner for Agriculture",
      description:
        "Served as Commissioner for Agriculture in the Cross River State Government under Governor Liyel Imoke.",
    },
    {
      period: "2012–2013",
      title: "Commissioner for Environment",
      description:
        "Held the position of Commissioner for Environment in Cross River State.",
    },
    {
      period: "2019–2023",
      title: "Senator, Cross River Central",
      description:
        "Represented Cross River Central Senatorial District in the 9th National Assembly. During his tenure, he served as Deputy Chairman of the Senate Committee on Tertiary Institutions and TETFund.",
    },
    {
      period: "2023",
      title: "Cross River State Governorship Candidate",
      description:
        "Contested the Cross River State governorship election on the platform of the Peoples Democratic Party.",
    },
    {
      period: "26 May 2026",
      title: "PDP Presidential Candidate",
      description:
        "Was announced as the consensus presidential candidate of the Abdulrahman Mohammed-led PDP faction following its presidential primary collation exercise in Abuja. He was presented with the party's flag and certificate of return.",
    },
    {
      period: "12 September 2026",
      title: "INEC Final Candidate List",
      description:
        "Appeared on INEC's published final list of presidential candidates for the January 2027 general election as the PDP candidate, with Umaru Babangida listed as his running mate.",
    },
  ],

  controversies: [
    {
      text:
        "The Peoples Democratic Party experienced an internal leadership dispute ahead of the 2027 general election. In May 2026, the Abdulrahman Mohammed-led faction announced Sandy Ojang Onor as its consensus presidential candidate. A rival faction associated with Kabiru Tanimu Turaki subsequently announced former President Goodluck Jonathan as its preferred candidate. The competing nominations formed part of the wider disagreement over the party's leadership and nomination process.",

      source: "Premium Times",
      date: "2026",
      url:
        "https://www.premiumtimesng.com/news/headlines/883887-pdp-faction-ratifies-jonathan-as-presidential-candidate-as-police-barricade-convention-venue.html",
    },

    {
      text:
        "The Abdulrahman Mohammed-led PDP faction announced Onor as its consensus presidential candidate on 26 May 2026. The announcement followed a primary collation exercise in Abuja, where the party's committee said it had consulted members across the states and the Federal Capital Territory. INEC officials reportedly monitored the exercise.",

      source: "Channels Television",
      date: "26 May 2026",
      url:
        "https://www.channelstv.com/2026/05/26/pdp-announces-sandy-onor-as-consensus-presidential-candidate-for-2027/",
    },

    {
      text:
        "INEC's final list of presidential candidates for the January 2027 election includes Onor Sandy Ojang under the Peoples Democratic Party, with Umaru Babangida listed as the vice-presidential candidate. This establishes the ticket published by the electoral commission at the time the list was released.",

      source: "Independent National Electoral Commission",
      date: "12 September 2026",
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
        "Final List of Presidential Candidates for the January 2027 Election",
      date: "12 September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "Channels Television",
      title:
        "PDP Announces Sandy Onor As Consensus Presidential Candidate For 2027",
      date: "26 May 2026",
      url:
        "https://www.channelstv.com/2026/05/26/pdp-announces-sandy-onor-as-consensus-presidential-candidate-for-2027/",
    },

    {
      name: "TheCable",
      title:
        "Wike-backed PDP declares Sandy Onor consensus presidential candidate",
      date: "26 May 2026",
      url:
        "https://www.thecable.ng/wike-backed-pdp-declares-sandy-onor-consensus-presidential-candidate/",
    },

    {
      name: "THISDAY",
      title:
        "Sandy Ojang Onor: Making His Mark as Scholar, Politician and Orator of the 9th Senate",
      date: "13 February 2026",
      url:
        "https://www.thisdaylive.com/2026/02/13/sandy-ojang-onor-making-his-mark-as-scholar-politician-and-orator-of-the-9th-senate/",
    },

    {
      name: "Premium Times",
      title:
        "2027: Wike-backed PDP uploads presidential, NASS candidates to INEC portal",
      date: "12 July 2026",
      url:
        "https://www.premiumtimesng.com/news/top-news/894828-2027-wike-backed-pdp-uploads-presidential-nass-candidates-to-inec-portal.html",
    },

    {
      name: "Premium Times",
      title:
        "PDP faction ratifies Jonathan as presidential candidate as police barricade convention venue",
      date: "2026",
      url:
        "https://www.premiumtimesng.com/news/headlines/883887-pdp-faction-ratifies-jonathan-as-presidential-candidate-as-police-barricade-convention-venue.html",
    },

    {
      name: "Nigeria Elections",
      title:
        "Onor Sandy Ojang – 2027 Presidential Candidate",
      date: "2027",
      url:
        "https://ngelections.com/candidate/onor-sandy-ojang-2027/",
    },

    {
      name: "Nigeria Elections",
      title:
        "Onor Sandy Ojang – 2019 Senate Elections",
      date: "2019",
      url:
        "https://ngelections.com/candidate/onor-sandy-ojang-2019/",
    },

    {
      name: "AllAfrica",
      title:
        "Nigeria: Profiles – the Men, Women Seeking to Be Nigeria's President in 2027",
      date: "October 2026",
      url:
        "https://allafrica.com/stories/202610260089.html",
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
                  PDP Presidential Candidate, 2027
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
