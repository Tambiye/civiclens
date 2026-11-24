
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
  name: "Abbas-Bin Aliyu",
  office: "Action Democratic Party Presidential Candidate",
  party: "Action Democratic Party (ADP)",
  position:
    "Presidential Candidate of the Action Democratic Party for the 2027 Nigerian General Election.",
  slogan: "Youth Inclusion, National Unity and Accountable Governance",
  image: "/images/candidates/aliyu-abbas-bin.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "44 years",
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
      value: "ADP",
    },
    {
      icon: <FiHeart />,
      label: "Running Mate",
      value: "Ike Chinazam",
    },
    {
      icon: <FiBriefcase />,
      label: "Office",
      value: "Presidential Candidate",
    },
    {
      icon: <FiCalendar />,
      label: "Election",
      value: "16 January 2027",
    },
  ],

  overview:
    "Abbas-Bin Aliyu is a Nigerian politician and the presidential candidate of the Action Democratic Party (ADP) for the 2027 general election. He emerged as the party's candidate at its national convention in Abuja on 30 May 2026. Media reports have described him as the founder of the National Youth Alliance and a former political aide to former Vice President Atiku Abubakar. His campaign has emphasised youth participation, national unity, economic opportunities and accountable governance. INEC's published final list identifies Abbas-Bin Aliyu as the ADP presidential candidate, with Ike Chinazam as his running mate. His nomination was subsequently challenged in a suit filed by another ADP presidential aspirant.",

  personalInfo: [
    ["Full Name", "Abbas-Bin Aliyu"],
    ["Alternative Name in Media", "Aliyu Bin Abbas"],
    ["Age", "44 years (INEC 2026 list)"],
    ["Gender", "Male"],
    ["Nationality", "Nigerian"],
    ["Political Party", "Action Democratic Party (ADP)"],
    ["Running Mate", "Ike Chinazam"],
    ["Profession", "Politician and Youth Advocate"],
  ],

  qualifications: [
    {
      title: "Bachelor of Science (B.Sc.)",
      school: "Listed among qualifications submitted to INEC",
    },
    {
      title: "Senior Secondary School Certificate (SSCE)",
      school: "Listed among qualifications submitted to INEC",
    },
    {
      title: "First School Leaving Certificate (FSLC)",
      school: "Listed among qualifications submitted to INEC",
    },
  ],

  career: [
    {
      period: "Before 2026",
      title: "Political and Youth Advocacy",
      description:
        "Media reports describe Aliyu as having been involved in political organising and youth advocacy. Detailed independently verified records of his earlier professional career and public appointments remain limited.",
    },
    {
      period: "Before 2026",
      title: "National Youth Alliance",
      description:
        "He has been described in media reports as the founder of the National Youth Alliance (NYA), a movement focused on youth participation in governance, leadership development and political engagement.",
    },
    {
      period: "2018–2023",
      title: "Reported Political Aide to Atiku Abubakar",
      description:
        "Reports surrounding his emergence as the ADP presidential candidate described him as a former political aide to Atiku Abubakar. His campaign's media statement said the political relationship had ended more than two years before his 2026 candidacy.",
    },
    {
      period: "30 May 2026",
      title: "ADP Presidential Candidate",
      description:
        "Emerged as the Action Democratic Party's presidential candidate following the party's national convention and presidential primary in Abuja. The announcement was made in the early hours of 30 May 2026.",
    },
    {
      period: "July 2026",
      title: "Running Mate Announced",
      description:
        "Ike Chinazam was announced as his running mate for the 2027 presidential election, completing the ADP's presidential ticket.",
    },
    {
      period: "12 September 2026",
      title: "INEC Final Candidate List",
      description:
        "Appeared on INEC's published final list of presidential candidates as the Action Democratic Party candidate, with Ike Chinazam listed as his running mate.",
    },
  ],

  controversies: [
    {
      text:
        "ADP presidential aspirant Dr Johnson Chukwuka filed a suit at the Federal High Court in Abuja challenging the process that produced Abbas-Bin Aliyu as the party's 2027 presidential candidate. In Suit No. FHC/ABJ/CS/1853/2026, Chukwuka asked the court to declare the party's May 29 and 30, 2026 presidential primary invalid. He also sought recognition as the party's duly elected candidate. These are claims made by the plaintiff in a legal challenge and should not be treated as established findings against Aliyu.",

      source: "Punch",
      date: "2 October 2026",
      url:
        "https://punchng.com/2027-adp-presidential-aspirant-sues-party-inec-over-nomination/",
    },

    {
      text:
        "The ADP also reported concerns about an alleged unauthorised upload of a presidential nomination form to the INEC portal. According to Punch, the party wrote to the Inspector-General of Police and INEC requesting an investigation and preservation of electronic records. The report also stated that the party asked Aliyu to provide an explanation about any knowledge or involvement in the disputed upload. The report does not establish that Aliyu personally carried out or authorised the alleged action.",

      source: "Punch",
      date: "2 October 2026",
      url:
        "https://punchng.com/2027-adp-presidential-aspirant-sues-party-inec-over-nomination/",
    },

    {
      text:
        "INEC's published final list of presidential candidates includes Abbas-Bin Aliyu under the Action Democratic Party, with Ike Chinazam as his running mate. The electoral commission's published record confirms that the ticket was listed by INEC, while the separate legal challenge concerning the party's nomination process was reported in October 2026.",

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
        "Presidential and National Assembly Elections for January 2027: Final List of Candidates",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },

    {
      name: "Punch",
      title:
        "Atiku's Ex-Aide Emerges ADP Presidential Candidate",
      date: "30 May 2026",
      url:
        "https://punchng.com/atikus-ex-aide-emerges-adp-presidential-candidate/",
    },

    {
      name: "The Guardian",
      title:
        "Aliyu Bin Abbas Emerges ADP Presidential Candidate for 2027",
      date: "30 May 2026",
      url:
        "https://guardian.ng/politics/2027-aliyu-bin-abbas-emerges-adp-presidential-candidate-for-2027/",
    },

    {
      name: "Voice of Nigeria",
      title:
        "ADP Picks Young Nigerian as Presidential Candidate",
      date: "3 June 2026",
      url:
        "https://von.gov.ng/2027-adp-picks-young-nigerian-as-presidential-candidate/",
    },

    {
      name: "Punch",
      title:
        "2027: ADP Presidential Aspirant Sues Party, INEC Over Nomination",
      date: "2 October 2026",
      url:
        "https://punchng.com/2027-adp-presidential-aspirant-sues-party-inec-over-nomination/",
    },

    {
      name: "Vero Record",
      title:
        "Action Democratic Party's 2027 Pick: What the Record Shows About Abbas-Bin Aliyu",
      date: "26 September 2026",
      url:
        "https://verorecord.com/story/action-democratic-party-s-2027-pick-what-the-record-shows-ab",
    },

    {
      name: "ADBN TV",
      title:
        "Abbas-Bin Aliyu – 2027 General Elections",
      date: "2026",
      url:
        "https://2027election.adbntv.com/election-candidate/presidential-adp-aliyu-abbas-bin/",
    },

    {
      name: "Premium Times",
      title:
        "INEC Publishes Final List of Presidential Candidates for 2027 Election",
      date: "September 2026",
      url:
        "https://www.premiumtimesng.com/news/headlines/909126-2027-tinubu-atiku-obi-15-others-make-inec-final-presidential-candidates-list-full-list.html",
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
                  ADP Presidential Candidate, 2027
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
