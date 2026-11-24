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
  name: "Adewole Ebenezer Adebayo",
  office: "SDP Presidential Candidate",
  party: "Social Democratic Party (SDP)",
  position:
    "Listed by INEC as the Social Democratic Party's presidential candidate for the 2027 General Election",
  slogan: "Security, Productivity and Prosperity",
  image: "/images/candidates/adebayo.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Age",
      value: "54 years",
      extra: "As listed by INEC",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Ondo State",
      extra: "According to his official biography",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "SDP",
      extra: "Social Democratic Party",
    },
    {
      icon: <FiUser />,
      label: "Running Mate",
      value: "Usman Muhammed Bugaje",
      extra: "74 years old",
    },
    {
      icon: <FiBookOpen />,
      label: "Qualifications",
      value: "FSLC, WASCE and LLB",
      extra: "As submitted to INEC",
    },
  ],

  overview:
    "Adewole Ebenezer Adebayo is a Nigerian lawyer, political activist, entrepreneur and media personality. He was the Social Democratic Party's presidential candidate in the 2023 general election and was selected again as the party's presidential flagbearer for the 2027 election at its convention and presidential primary in Bauchi on 9 May 2026. His professional profile includes legal practice, business interests and media activities. In 2006, he was appointed to Liberia's Truth and Reconciliation Commission by the United Nations and ECOWAS, according to his official biography. His 2027 campaign manifesto, titled 'Farewell to Poverty and Insecurity', outlines proposals around security, employment, education, infrastructure, healthcare and economic productivity. Although INEC's final candidate list includes him as the SDP presidential candidate, a subsequent statement from the SDP's Media Directorate disputed his nomination and asked INEC to review its published list. That disagreement remains an important part of the public record.",

  personalInfo: [
    ["Full Name", "Adewole Ebenezer Adebayo"],
    ["Age", "54 years, according to INEC"],
    ["Date of Birth", "8 January 1972"],
    ["Place of Birth", "Not independently verified"],
    ["State of Origin", "Ondo State"],
    ["Gender", "Male"],
    ["Marital Status", "Not independently verified"],
    ["Religion", "Not independently verified"],
    ["Political Party", "Social Democratic Party (SDP)"],
    ["Running Mate", "Usman Muhammed Bugaje, age 74"],
    ["Current Position", "Listed by INEC as SDP Presidential Candidate, 2027"],
  ],

  qualifications: [
    {
      title: "First School Leaving Certificate",
      school: "FSLC, as listed in INEC's final candidate record",
    },
    {
      title: "West African School Certificate",
      school: "WASCE, as listed in INEC's final candidate record",
    },
    {
      title: "Bachelor of Laws",
      school: "LLB, as listed in INEC's final candidate record",
    },
  ],

  career: [
    {
      period: "1991",
      title: "Joined the Social Democratic Party",
      description:
        "According to his official biography, Adebayo joined the Social Democratic Party in 1991. He says the party's emphasis on social investment in education, healthcare, housing and infrastructure influenced his decision.",
    },
    {
      period: "2006",
      title: "Liberia Truth and Reconciliation Commission",
      description:
        "Adebayo's official biography states that he was appointed by the United Nations and the Economic Community of West African States as a commissioner on Liberia's Truth and Reconciliation Commission. The commission was established to examine the causes and consequences of the country's conflict.",
    },
    {
      period: "2023",
      title: "SDP Presidential Candidate",
      description:
        "Adebayo contested the 2023 Nigerian presidential election as the Social Democratic Party's candidate. The election was won by Bola Ahmed Tinubu of the All Progressives Congress.",
    },
    {
      period: "9 May 2026",
      title: "Selected as SDP Presidential Candidate for 2027",
      description:
        "At the SDP national convention and presidential primary in Bauchi, Adebayo emerged as the party's presidential flagbearer for the 2027 election. TheCable and Voice of Nigeria reported his emergence following the party's convention.",
    },
    {
      period: "20 May 2026",
      title: "SDP Leadership Dispute",
      description:
        "A later statement from the SDP Media Directorate said Adebayo had been expelled at the party's National Executive Committee meeting and National Convention on 20 May 2026. The statement disputed his eligibility and the validity of his nomination. This position is contested by the fact that INEC subsequently included him in its published final candidate list.",
    },
    {
      period: "September 2026",
      title: "INEC Final Candidate List",
      description:
        "INEC's final list of presidential and vice-presidential candidates included Adebayo under the Social Democratic Party. The commission recorded his age as 54 and his submitted qualifications as FSLC, WASCE and LLB. His listed running mate is Usman Muhammed Bugaje, aged 74.",
    },
  ],

  controversies: [
    {
      text:
        "The Social Democratic Party's Media Directorate disputed Adebayo's status as its 2027 presidential candidate. In a public statement, the party said he had been expelled following resolutions at its National Executive Committee meeting and National Convention on 20 May 2026. It argued that he was therefore not eligible to participate in the party's nomination process and asked INEC to review its published candidate list. INEC's final list nevertheless includes Adebayo as the SDP candidate. The competing positions make his nomination a matter of public political dispute; the party statement alone does not establish that INEC has changed its official list.",
      source: "Social Democratic Party Media Directorate",
      date: "November 2026",
      url:
        "https://www.sdpnigeria.org/news/sdp-adewole-adebayo-was-long-expelled-from-the-party-and-was-never-its-presidential-candidate",
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
        "Final List of Presidential and National Assembly Candidates for January 2027 Elections",
      date: "September 2026",
      url:
        "https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",
    },
    {
      name: "Adewole Adebayo Official Website",
      title: "About Prince Adewole Adebayo",
      date: "Accessed November 2026",
      url: "https://www.adewoleadebayo.com/about",
    },
    {
      name: "Adewole Adebayo Official Website",
      title: "Prince's Manifesto: Farewell to Poverty and Insecurity",
      date: "2026",
      url: "https://www.adewoleadebayo.com/manifesto",
    },
    {
      name: "TheCable",
      title: "SDP Adopts Adewole Adebayo as Presidential Candidate for 2027 Poll",
      date: "10 May 2026",
      url:
        "https://www.thecable.ng/sdp-adopts-adewole-adebayo-as-presidential-candidate-for-2027-poll/",
    },
    {
      name: "Voice of Nigeria",
      title: "SDP Adopts Adebayo as Presidential Candidate",
      date: "11 May 2026",
      url:
        "https://von.gov.ng/sdp-adopts-adebayo-as-presidential-candidate/",
    },
    {
      name: "The Guardian",
      title: "2027: SDP Writes INEC, Submits Adebayo's Details as Presidential Candidate",
      date: "16 May 2026",
      url:
        "https://guardian.ng/politics/2027-sdp-writes-inec-submits-adebayos-details-as-presidential-candidate/",
    },
    {
      name: "The Guardian",
      title: "Chapter II of Constitution Will Be Blueprint for My Presidency",
      date: "1 June 2026",
      url:
        "https://guardian.ng/politics/chapter-ii-of-constitution-will-be-blueprint-for-my-presidency-sdps-adebayo/",
    },
    {
      name: "The Guardian",
      title: "Nigerians Want Good Country, Yearn for Credible Leader in 2027",
      date: "17 September 2026",
      url:
        "https://guardian.ng/politics/nigerians-want-good-country-yearn-for-credible-leader-in-2027/",
    },
    {
      name: "Social Democratic Party Media Directorate",
      title:
        "SDP: Adewole Adebayo Was Long Expelled from the Party and Was Never Its Presidential Candidate",
      date: "November 2026",
      url:
        "https://www.sdpnigeria.org/news/sdp-adewole-adebayo-was-long-expelled-from-the-party-and-was-never-its-presidential-candidate",
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
              Listed by INEC
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
                  Listed by INEC as SDP Presidential Candidate
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