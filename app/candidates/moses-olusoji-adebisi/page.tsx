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
  name: "Moses Olusoji Adebisi",
  office: "2027 Presidential Candidate",
  party: "Democratic Leadership Alliance (DLA)",
  position: "Presidential Candidate of the Democratic Leadership Alliance",
  slogan: "A New Generation of Leadership",
  image: "/images/candidates/moses-adebisi.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Candidate Age",
      value: "35 years",
      extra: "(As listed by INEC)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Osun State",
      extra: "(Reported)",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "DLA",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Abubakar Nafisat Usaku",
      extra: "(35 years old)",
    },
    {
      icon: <FiBriefcase />,
      label: "Professional Background",
      value: "Entrepreneur",
    },
  ],

  overview:
    "Moses Olusoji Adebisi, popularly known as ThisDaysMoses, is a Nigerian entrepreneur, community development advocate and politician. He is the presidential candidate of the Democratic Leadership Alliance (DLA) for the January 2027 general election. Adebisi emerged as the party's candidate following a substitution primary in August 2026, replacing the party's earlier nominee, Samuel M. Memeh. Published profiles associate him with businesses and initiatives operating under the Thrillers name, including Thrillers Travels and the Thrillers Human Development Foundation. He is also identified with the Nigerian Liberty Movement, a political association he says he founded. His public profile includes entrepreneurship, political organising and community development activities.",

  personalInfo: [
    ["Full Name", "Moses Olusoji Adebisi"],
    ["Public Name", "ThisDaysMoses"],
    ["Date of Birth", "Not independently confirmed"],
    ["Age", "35 years (INEC listing)"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Osun State (reported)"],
    ["Local Government Area", "Ayedaade LGA (reported)"],
    ["Marital Status", "Not publicly verified"],
    ["Religion", "Not independently verified"],
  ],

  qualifications: [
    {
      title: "Bachelor of Science (BSc)",
      school:
        "Institution not independently confirmed. INEC lists a BSc among his submitted qualifications.",
    },
    {
      title: "Senior Secondary School Certificate",
      school: "Listed in the qualifications submitted to INEC.",
    },
    {
      title: "First School Leaving Certificate",
      school: "Listed in the qualifications submitted to INEC.",
    },
  ],

  career: [
    {
      period: "Earlier Career",
      title: "Entrepreneurship and Business Activities",
      description:
        "Published candidate profiles associate Adebisi with entrepreneurship and business activities under the Thrillers name, including Thrillers Group and Thrillers Travels. Detailed employment dates and a complete business history have not been independently established.",
    },
    {
      period: "2022 – 2024",
      title: "United Kingdom Company Directorships",
      description:
        "UK Companies House records show directorships under the name Moses Olusoji Adebisi at M&M Thrillers Human Care Ltd and Thrillers Healthtech Care Ltd. The records show that the appointments ended in 2024 and 2025 respectively. The available records do not, by themselves, establish that every company entry refers to the presidential candidate.",
    },
    {
      period: "2024 – Present",
      title: "Founder, Nigerian Liberty Movement",
      description:
        "Adebisi is identified by the movement as its founder and National Leader. The Nigerian Liberty Movement describes itself as a political association focused on civic organisation and national development. It sought registration as a political party, but was not included among INEC's registered political parties.",
    },
    {
      period: "20 August 2026",
      title: "DLA Presidential Substitution Primary",
      description:
        "The Democratic Leadership Alliance affirmed Adebisi as its presidential candidate following a substitution primary. He replaced Samuel M. Memeh, the party's earlier nominee.",
    },
    {
      period: "September 2026 – Present",
      title: "2027 Presidential Candidate",
      description:
        "INEC included Adebisi on its final list of presidential candidates for the January 2027 election. His running mate is Abubakar Nafisat Usaku.",
    },
    {
      period: "November 2026",
      title: "Party Disciplinary Dispute",
      description:
        "The DLA announced disciplinary proceedings and referred Adebisi to the EFCC and the Inspector-General of Police over a disputed financial undertaking. Adebisi denied financial impropriety and disputed the party's account.",
    },
  ],

  controversies: [
    {
      text:
        "Adebisi's age became a subject of public-record scrutiny after UK Companies House filings for individuals named Moses Olusoji Adebisi recorded a date of birth in April 1994. That would not align with the age of 35 listed by INEC in September 2026. The records raise a question that warrants clarification, but the Companies House entries alone do not conclusively establish that the person named in those filings is the same individual as the presidential candidate. INEC's published candidate list remains the official source for the age declared in the election record.",

      source: "VeroRecord",
      date: "October 2026",
      url:
        "https://verorecord.com/story/inec-lists-the-dla-presidential-candidate-as-35-two-uk-compa",
    },

    {
      text:
        "The DLA's National Chairman, Samuel M. Memeh, publicly announced that the party had initiated disciplinary proceedings against Adebisi over a financial commitment allegedly made before the substitution primary. The party said a cheque issued by Adebisi was returned unpaid and that it had referred the matter to the EFCC and the Inspector-General of Police. Adebisi denied financial impropriety and said he had paid more than ₦90 million to revive the party and support its political activities. The matter was reported as an ongoing investigation and internal party dispute, not a judicial finding of wrongdoing.",

      source: "Punch Newspapers",
      date: "4 November 2026",
      url:
        "https://punchng.com/dla-presidential-candidate-trade-words-over-misconduct-allegations/",
    },
  ],

  allegations: [
    {
      text:
        "The Democratic Leadership Alliance accused Adebisi of failing to honour a personal financial undertaking made before the party's substitution primary. The party alleged that he issued a dud cheque and subsequently referred the matter to the EFCC and police. Adebisi rejected the allegations, saying he had contributed more than ₦90 million towards the party's revival and activities. The claims remain disputed, and referral for investigation does not establish criminal liability.",

      source: "Punch Newspapers",
      date: "4 November 2026",
      url:
        "https://punchng.com/dla-presidential-candidate-trade-words-over-misconduct-allegations/",
    },
  ] as {
    text: string;
    source: string;
    date: string;
    url: string;
  }[],

  sources: [
    {
      name: "Independent National Electoral Commission",
      title:
        "Presidential and National Assembly Elections for January 2027 – Final List of Candidates",
      date: "September 2026",
      url:
        "https://www.inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "Punch Newspapers",
      title:
        "DLA, presidential candidate trade words over misconduct allegations",
      date: "4 November 2026",
      url:
        "https://punchng.com/dla-presidential-candidate-trade-words-over-misconduct-allegations/",
    },

    {
      name: "News Agency of Nigeria",
      title:
        "DLA affirms Adebisi as 2027 presidential candidate",
      date: "22 August 2026",
      url: "https://nannews.ng/dla/",
    },

    {
      name: "ADBN TV",
      title:
        "Adebisi Moses Olusoji – 2027 Presidential Candidate Profile",
      date: "2026",
      url:
        "https://2027election.adbntv.com/election-candidate/presidential-dla-moses-olusoji-adebisi/",
    },

    {
      name: "OurNigeria",
      title:
        "Adebisi Moses Olusoji – 2027 Presidential Candidate Profile and Public Record",
      date: "2026",
      url:
        "https://ournigeria.ng/officials/adebisi-moses-olusoji",
    },

    {
      name: "VeroRecord",
      title:
        "INEC lists the DLA presidential candidate as 35; UK company filings record a different birth year",
      date: "2026",
      url:
        "https://verorecord.com/story/inec-lists-the-dla-presidential-candidate-as-35-two-uk-compa",
    },

    {
      name: "UK Companies House",
      title:
        "Moses Olusoji Adebisi – Company Appointments",
      date: "Company register",
      url:
        "https://find-and-update.company-information.service.gov.uk/officers/MhOfjMSBG1fZ0QJXJGb25aaDRv4/appointments",
    },

    {
      name: "Nigerian Liberty Movement",
      title:
        "Leadership Directory – Moses O. Adebisi",
      date: "2026",
      url:
        "https://nlm.libertyapp.ng/leadership",
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
              2027 Presidential Candidate
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
                  DLA Presidential Candidate
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