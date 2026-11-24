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
  name: "Atiku Abubakar",
  office: "Former Vice President of Nigeria",
  party: "African Democratic Congress (ADC)",
  position:
    "Former Vice President of Nigeria and reported ADC presidential nominee for the 2027 election, whose nomination is subject to an ongoing legal dispute.",
  slogan: "My Covenant with Nigeria (2023 Campaign Theme)",
  image: "/images/candidates/atiku.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "25 November 1946",
      extra: "(79 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Adamawa State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "ADC",
    },
    {
      icon: <FiHeart />,
      label: "Former Office",
      value: "Vice President",
    },
    {
      icon: <FiBriefcase />,
      label: "Vice Presidential Tenure",
      value: "1999 – 2007",
    },
  ],

  overview:
    "Atiku Abubakar is a Nigerian politician and former Vice President of Nigeria. He served alongside President Olusegun Obasanjo from 1999 to 2007. Before entering national politics, he worked in the Nigeria Customs Service for two decades, retiring in 1989 as a Deputy Director. He has contested several presidential elections and became a member of the African Democratic Congress in November 2025. His reported emergence as the party's 2027 presidential nominee has been affected by a court dispute over the party's leadership and nomination process.",

  personalInfo: [
    ["Full Name", "Atiku Abubakar"],
    ["Date of Birth", "25 November 1946"],
    ["Place of Birth", "Jada, Adamawa State, Nigeria"],
    ["State of Origin", "Adamawa State"],
    ["Former Office", "Vice President of Nigeria"],
    ["Years in Office", "1999 – 2007"],
  ],

  qualifications: [
    {
      title: "Diploma in Law",
      school: "Ahmadu Bello University, Zaria",
    },
    {
      title: "Diploma in Health and Hygiene",
      school: "Kano School of Hygiene",
    },
    {
      title: "Master's Degree in International Relations",
      school: "Anglia Ruskin University, Cambridge",
    },
    {
      title: "Secondary School Education",
      school: "Adamawa Provincial Secondary School",
    },
  ],

  career: [
    {
      period: "1969 – 1989",
      title: "Nigeria Customs Service",
      description:
        "Joined the Nigeria Customs Service in 1969 and served for approximately 20 years, retiring as a Deputy Director in 1989.",
    },
    {
      period: "1989",
      title: "Constituent Assembly",
      description:
        "Participated in Nigeria's constitutional and political process as a member of the Constituent Assembly.",
    },
    {
      period: "1993",
      title: "Presidential Primary",
      description:
        "Participated in the Social Democratic Party presidential primary, which was won by Moshood Abiola.",
    },
    {
      period: "1999 – 2007",
      title: "Vice President of Nigeria",
      description:
        "Served two terms as Vice President under President Olusegun Obasanjo.",
    },
    {
      period: "2007",
      title: "Presidential Candidate",
      description:
        "Contested the 2007 presidential election as the candidate of the Action Congress.",
    },
    {
      period: "2019",
      title: "Presidential Candidate",
      description:
        "Contested the 2019 presidential election as the candidate of the Peoples Democratic Party.",
    },
    {
      period: "2023",
      title: "Presidential Candidate",
      description:
        "Contested the 2023 presidential election as the Peoples Democratic Party candidate. The result was challenged in court.",
    },
    {
      period: "July – November 2025",
      title: "Political Party Change",
      description:
        "Resigned from the Peoples Democratic Party in July 2025 and officially joined the African Democratic Congress in November 2025.",
    },
    {
      period: "2026",
      title: "2027 Presidential Nomination Dispute",
      description:
        "His reported ADC presidential nomination became the subject of a legal challenge. The party subsequently filed an appeal against the court ruling affecting the nomination.",
    },
  ],

  controversies: [
    {
      text:
        "Atiku Abubakar challenged the outcome of the February 2023 presidential election, arguing that the result declared by INEC was invalid. The Supreme Court dismissed his appeal on 26 October 2023 and upheld Bola Ahmed Tinubu's election victory.",

      source: "Associated Press",
      date: "26 October 2023",
      url:
        "https://apnews.com/article/ad610050879e5a0178bcb52934c56054",
    },

    {
      text:
        "On 5 November 2026, a Federal High Court ruling affected Atiku Abubakar's reported ADC presidential nomination for the 2027 election following a challenge involving the party's leadership. The ruling was followed by an appeal from the African Democratic Congress.",

      source: "Reuters",
      date: "5 November 2026",
      url:
        "https://www.reuters.com/world/africa/nigerian-court-voids-candidacy-opposition-adcs-atiku-2027-election-2026-11-05/",
    },

    {
      text:
        "The African Democratic Congress filed a 17-ground appeal challenging the court decision and its implications for the party's leadership and candidate records. The legal process remains relevant to the status of the party's 2027 nomination.",

      source: "Channels Television",
      date: "18 November 2026",
      url:
        "https://www.channelstv.com/2026/11/18/2027-adc-files-17-ground-appeal-against-inec-over-nullification-of-atikus-candidacy/",
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
      name: "UCLA African Studies Center",
      title:
        "Atiku Abubakar: Visit and Biography",
      date: "2004",
      url:
        "https://www.international.ucla.edu/africa/event/1323",
    },

    {
      name: "UK House of Commons Library",
      title:
        "Nigeria: 2023 Presidential Election",
      date: "6 April 2023",
      url:
        "https://researchbriefings.files.parliament.uk/documents/CBP-9738/CBP-9738.pdf",
    },

    {
      name: "Nigerian Dictionary of National Biography",
      title:
        "Biography of Atiku Abubakar",
      date: "Biographical reference",
      url:
        "https://www.ndnb.ng/biography/atiku-abubakar",
    },

    {
      name: "American University of Nigeria",
      title:
        "President Ensign Congratulates Atiku Abubakar on Academic Milestone",
      date: "15 November 2021",
      url:
        "https://aun.edu.ng/index.php/news-events/news/president-ensign-congratulates-he-atiku-abubakar-on-academic-milestone",
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
      name: "Channels Television",
      title:
        "Atiku Officially Joins ADC",
      date: "24 November 2025",
      url:
        "https://www.channelstv.com/2025/11/24/atiku-officially-joins-adc/",
    },

    {
      name: "Reuters",
      title:
        "Nigerian court voids candidacy of opposition ADC's Atiku for 2027 election",
      date: "5 November 2026",
      url:
        "https://www.reuters.com/world/africa/nigerian-court-voids-candidacy-opposition-adcs-atiku-2027-election-2026-11-05/",
    },

    {
      name: "Premium Times",
      title:
        "ADC appeals annulment of Atiku's presidential ticket, urges INEC to wait",
      date: "7 November 2026",
      url:
        "https://www.premiumtimesng.com/news/top-news/923361-adc-appeals-annulment-of-atikus-presidential-ticket-urges-inec-to-wait.html",
    },

    {
      name: "Channels Television",
      title:
        "ADC Files 17-Ground Appeal Against INEC Over Nullification of Atiku's Candidacy",
      date: "18 November 2026",
      url:
        "https://www.channelstv.com/2026/11/18/2027-adc-files-17-ground-appeal-against-inec-over-nullification-of-atikus-candidacy/",
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
              Former Vice President
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
                  2027 ADC Presidential Nomination (Disputed)
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