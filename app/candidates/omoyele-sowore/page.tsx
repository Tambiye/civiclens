"use client";

import type { ReactNode } from "react";

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
  name: "Omoyele Sowore",
  office: "Journalist, Activist and Politician",
  party: "African Action Congress (AAC)",
  position:
    "Presidential Candidate of the African Action Congress for the 2027 General Election",
  slogan: "A different approach to governance and accountability.",
  image: "/images/candidates/sowore.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "16 February 1971",
      extra: "(55 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Ondo State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "AAC",
    },
    {
      icon: <FiBriefcase />,
      label: "Profession",
      value: "Journalist and Activist",
    },
    {
      icon: <FiCalendar />,
      label: "Presidential Elections",
      value: "2019, 2023 and 2027",
    },
  ] as {
    icon: ReactNode;
    label: string;
    value: string;
    extra?: string;
  }[],

  overview:
    "Omoyele Sowore is a Nigerian journalist, publisher, human rights activist and politician. He founded Sahara Reporters, an online news organisation established in 2006, and the African Action Congress (AAC), a political party established in 2018. Sowore became involved in student activism while studying at the University of Lagos, where he served as Students' Union president from 1992 to 1994. He contested the 2019 and 2023 presidential elections under the AAC platform and is listed as the party's presidential candidate for the 2027 general election.",

  personalInfo: [
    ["Full Name", "Omoyele Sowore"],
    ["Date of Birth", "16 February 1971"],
    ["Place of Origin", "Ondo State, Nigeria"],
    ["Nationality", "Nigerian"],
    ["Profession", "Journalist, Publisher and Activist"],
    ["Political Party", "African Action Congress"],
    ["Former Office", "President, University of Lagos Students' Union"],
  ],

  qualifications: [
    {
      title: "Bachelor's Degree in Geography and Regional Planning",
      school: "University of Lagos, Nigeria",
    },
    {
      title: "Master's Degree in Public Administration",
      school: "Columbia University, New York, United States",
    },
  ],

  career: [
    {
      period: "1992 – 1994",
      title: "President, University of Lagos Students' Union",
      description:
        "Served as Students' Union president and participated in student activism during Nigeria's military era.",
    },
    {
      period: "2006",
      title: "Founder, Sahara Reporters",
      description:
        "Founded Sahara Reporters, an online news organisation covering Nigerian politics, governance and public accountability.",
    },
    {
      period: "2018",
      title: "Founder, African Action Congress",
      description:
        "Founded the African Action Congress, a political party that became the platform for his subsequent presidential campaigns.",
    },
    {
      period: "2019",
      title: "Presidential Candidate",
      description:
        "Contested the Nigerian presidential election under the African Action Congress.",
    },
    {
      period: "2023",
      title: "Presidential Candidate",
      description:
        "Contested the 2023 presidential election under the African Action Congress.",
    },
    {
      period: "2027",
      title: "Presidential Candidate",
      description:
        "Listed as the African Action Congress presidential candidate for the 2027 general election.",
    },
  ],

  controversies: [
    {
      text:
        "In 2025, the Department of State Services charged Sowore over social media posts in which he described President Bola Tinubu as a criminal and accused him of lying about corruption. Sowore pleaded not guilty. In May 2026, the Federal High Court dismissed his no-case submission and ruled that the prosecution had established a prima facie case requiring him to present a defence. On 24 November 2026, the DSS asked the court to close his defence, alleging repeated adjournments. His lawyer opposed the application. The case remains ongoing, and no finding of guilt has been made.",

      source: "Tribune Online",
      date: "24 November 2026",
      url:
        "https://tribuneonlineng.com/alleged-cyberbullying-foreclose-sowores-defence-for-exceeding-adjournments-ceiling-dss-tells-court/",
    },
    {
      text:
        "In November 2025, the Lagos State Commissioner of Police declared Sowore wanted over a planned protest concerning demolitions in the Oworonshoki community. In February 2026, the Federal High Court in Lagos ruled that the declaration was unlawful and violated his fundamental rights. The court awarded ₦30 million in damages against the police authorities.",

      source: "TheCable",
      date: "February 2026",
      url:
        "https://www.thecable.ng/court-faults-lagos-cp-for-declaring-sowore-wanted-awards-him-n30m-damages/",
    },
    {
      text:
        "Sowore and fellow activist Olawale Bakare were prosecuted on treasonable felony charges following the 2019 #RevolutionNow demonstrations. In February 2024, the Attorney-General of the Federation discontinued the prosecution, and the Federal High Court struck out the charges. The case ended without a trial judgment determining the allegations on their merits.",

      source: "Channels Television",
      date: "19 February 2024",
      url:
        "https://www.channelstv.com/2024/02/19/court-strikes-out-treasonable-felony-charge-against-sowore/",
    },
    {
      text:
        "Public relations consultant Lekan Fatodu and his company filed a defamation suit against Sowore and Sahara Reporters over publications concerning alleged public funds and contracts. Fatodu also made accusations against Sowore, including allegations of blackmail and threats, which Sowore disputed. In June 2025, the Lagos State High Court dismissed the defamation suit after finding that the claimants had failed to establish that the allegedly defamatory publication was communicated to a third party. The court awarded ₦500,000 in costs against the claimants.",

      source: "Premium Times",
      date: "June 2025",
      url:
        "https://www.premiumtimesng.com/news/top-news/801657-court-dismisses-defamation-suit-against-sowore-saharareporters-fines-complainant-n500000.html",
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
      title: "Final List of Presidential and National Assembly Candidates",
      date: "2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },
    {
      name: "Channels Television",
      title: "Court Strikes Out Treasonable Felony Charge Against Sowore",
      date: "19 February 2024",
      url:
        "https://www.channelstv.com/2024/02/19/court-strikes-out-treasonable-felony-charge-against-sowore/",
    },
    {
      name: "TheCable",
      title: "Court Faults Lagos CP for Declaring Sowore Wanted, Awards Him N30m Damages",
      date: "February 2026",
      url:
        "https://www.thecable.ng/court-faults-lagos-cp-for-declaring-sowore-wanted-awards-him-n30m-damages/",
    },
    {
      name: "Premium Times",
      title: "Court Dismisses Defamation Suit Against Sowore and Sahara Reporters",
      date: "June 2025",
      url:
        "https://www.premiumtimesng.com/news/top-news/801657-court-dismisses-defamation-suit-against-sowore-saharareporters-fines-complainant-n500000.html",
    },
    {
      name: "Tribune Online",
      title: "DSS Asks Court to Foreclose Sowore's Defence in Cyberbullying Trial",
      date: "24 November 2026",
      url:
        "https://tribuneonlineng.com/alleged-cyberbullying-foreclose-sowores-defence-for-exceeding-adjournments-ceiling-dss-tells-court/",
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
                  AAC Presidential Candidate, 2027
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