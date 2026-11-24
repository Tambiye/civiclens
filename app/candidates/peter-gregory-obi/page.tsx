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
  name: "Peter Gregory Obi",
  office: "Former Governor of Anambra State",
  party: "Nigeria Democratic Congress (NDC)",
  position:
    "Presidential Candidate of the Nigeria Democratic Congress for the 2027 General Election",
  slogan: "A New Nigeria is Possible.",
  image: "/images/candidates/obi.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "19 July 1961",
      extra: "(65 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Anambra State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "NDC",
    },
    {
      icon: <FiHeart />,
      label: "Marital Status",
      value: "Married",
    },
    {
      icon: <FiBriefcase />,
      label: "Governorship Tenure",
      value: "2006 – 2014",
    },
  ],

  overview:
    "Peter Gregory Obi is a Nigerian politician and businessman who served as Governor of Anambra State from 2006 to 2014. He first became governor after an election petition tribunal and the Court of Appeal upheld his challenge to the 2003 governorship election result. He was the Labour Party's presidential candidate in the 2023 general election and later joined the Nigeria Democratic Congress in May 2026. On 30 May 2026, the NDC announced him as its presidential candidate for the 2027 general election.",

  personalInfo: [
    ["Full Name", "Peter Gregory Obi"],
    ["Date of Birth", "19 July 1961"],
    ["Place of Birth", "Onitsha, Anambra State"],
    ["State of Origin", "Anambra State"],
    ["Marital Status", "Married"],
    ["Former Office", "Governor of Anambra State"],
  ],

  qualifications: [
    {
      title: "Bachelor of Arts in Philosophy",
      school: "University of Nigeria, Nsukka (1984)",
    },
    {
      title: "West African School Certificate",
      school: "Christ the King College, Onitsha",
    },
    {
      title: "Executive Management Education",
      school: "Harvard Business School, USA",
    },
    {
      title: "Executive Management Education",
      school:
        "London Business School, Oxford University and other international institutions",
    },
  ],

  career: [
    {
      period: "Before 2003",
      title: "Business and Corporate Career",
      description:
        "Worked in business and commerce and held leadership positions in several companies, including Fidelity Bank and other financial and commercial organisations.",
    },
    {
      period: "2003",
      title: "Anambra Governorship Candidate",
      description:
        "Contested the Anambra State governorship election under the All Progressives Grand Alliance (APGA). The initial result declared another candidate the winner, but Obi successfully challenged the result through the election petition process.",
    },
    {
      period: "2006 – 2014",
      title: "Governor of Anambra State",
      description:
        "Became governor on 17 March 2006 following the Court of Appeal decision. His tenure included an interruption after an impeachment in November 2006, followed by his reinstatement in February 2007. He left office in March 2014.",
    },
    {
      period: "2018 – 2019",
      title: "Vice Presidential Candidate",
      description:
        "Selected as the running mate to Atiku Abubakar, the Peoples Democratic Party presidential candidate, in the 2019 general election.",
    },
    {
      period: "2022 – 2023",
      title: "Labour Party Presidential Candidate",
      description:
        "Joined the Labour Party in 2022 and contested the 2023 presidential election as its candidate.",
    },
    {
      period: "2025",
      title: "Political Party Changes",
      description:
        "Joined the African Democratic Congress in December 2025 as part of opposition political realignments ahead of the 2027 general election.",
    },
    {
      period: "3 May 2026",
      title: "Joined the Nigeria Democratic Congress",
      description:
        "Formally joined the Nigeria Democratic Congress and received his party membership card.",
    },
    {
      period: "30 May 2026 – Present",
      title: "NDC Presidential Candidate",
      description:
        "Was unveiled and ratified as the Nigeria Democratic Congress presidential candidate for the 2027 general election at the party's national convention in Abuja.",
    },
  ],

  controversies: [
    {
      text:
        "In November 2006, Peter Obi was impeached by members of the Anambra State House of Assembly. Human Rights Watch reported that the impeachment proceedings did not meet the constitutional requirement for the number of lawmakers needed to support the action. Obi was reinstated in February 2007 following a court decision.",

      source: "Human Rights Watch",
      date: "October 2007",
      url:
        "https://www.hrw.org/reports/2007/nigeria1007/nigeria1007.htm",
    },

    {
      text:
        "Following the 2023 presidential election, Peter Obi challenged the result declared by INEC and sought to overturn Bola Tinubu's victory. On 26 October 2023, the Supreme Court dismissed his appeal and upheld the earlier decisions affirming Tinubu's election.",

      source: "Associated Press",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      text:
        "Obi's emergence as the NDC presidential candidate followed a series of political party changes and opposition realignments between 2025 and 2026. He left the Labour Party, joined the ADC in December 2025 and subsequently joined the NDC in May 2026. These developments were publicly reported by Nigerian media organisations.",

      source: "Channels Television",
      date: "3 May 2026",
      url:
        "https://www.channelstv.com/2026/05/03/obi-kwankwaso-join-ndc-receive-membership-cards/",
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
      name: "Nigerian Dictionary of National Biography",
      title:
        "Biography of Peter Obi",
      date: "Biographical reference",
      url:
        "https://ndnb.ng/biography/peter-obi",
    },

    {
      name: "Biographical Legacy and Research Foundation",
      title:
        "Peter Gregory Onwubuasi Obi: Biography and Educational Background",
      date: "Biographical reference",
      url:
        "https://blerf.org/index.php/biography/obi-peter-gregory-onwubuasi/",
    },

    {
      name: "NigeriaLII",
      title:
        "Peter Obi v Independent National Electoral Commission & Others",
      date: "12 July 2007",
      url:
        "https://nigerialii.org/akn/ng/judgment/ngsc/2007/171/eng%402007-07-12",
    },

    {
      name: "Human Rights Watch",
      title:
        "Criminal Politics: Violence, 'Godfathers' and Corruption in Nigeria",
      date: "October 2007",
      url:
        "https://www.hrw.org/reports/2007/nigeria1007/nigeria1007.htm",
    },

    {
      name: "Associated Press",
      title:
        "Nigeria's Supreme Court refuses to void president's election and dismisses opposition challenges",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      name: "Channels Television",
      title:
        "Obi, Kwankwaso Join NDC, Receive Membership Cards",
      date: "3 May 2026",
      url:
        "https://www.channelstv.com/2026/05/03/obi-kwankwaso-join-ndc-receive-membership-cards/",
    },

    {
      name: "Channels Television",
      title:
        "NDC Unveils Obi As Presidential Candidate For 2027 General Elections",
      date: "30 May 2026",
      url:
        "https://www.channelstv.com/2026/05/30/ndc-unveils-obi-as-presidential-candidate-for-2027-general-elections/",
    },

    {
      name: "Reuters",
      title:
        "Nigeria's Obi to run for president again after opposition split",
      date: "1 June 2026",
      url:
        "https://www.reuters.com/world/africa/nigerias-obi-run-president-again-after-opposition-split-2026-06-01/",
    },

    {
      name: "Independent National Electoral Commission",
      title:
        "Final List of Presidential and National Assembly Candidates for January 2027 Elections",
      date: "October 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
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
                  NDC Presidential Candidate, 2027
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