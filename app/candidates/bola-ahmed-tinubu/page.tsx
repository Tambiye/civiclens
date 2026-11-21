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
  name: "Bola Ahmed Tinubu",
  office: "President of Nigeria",
  party: "All Progressives Congress (APC)",
  position: "President of the Federal Republic of Nigeria",
  slogan: "Renewed Hope. A Greater Nigeria.",
  image: "/images/tinubu.jpg",

  quickFacts: [
    {
      icon: <FiCalendar />,
      label: "Date of Birth",
      value: "29 March 1952",
      extra: "(73 years old)",
    },
    {
      icon: <FiMapPin />,
      label: "State of Origin",
      value: "Lagos State",
    },
    {
      icon: <FiUsers />,
      label: "Political Party",
      value: "APC",
    },
    {
      icon: <FiHeart />,
      label: "Marital Status",
      value: "Married",
    },
    {
      icon: <FiBriefcase />,
      label: "Current Office Since",
      value: "29 May 2023",
    },
  ],

  overview:
    "Bola Ahmed Tinubu is a Nigerian politician, statesman and the current President of the Federal Republic of Nigeria. He has served in various public offices, including Governor of Lagos State and Senator, and is a prominent figure in Nigeria's political landscape.",

  personalInfo: [
    ["Full Name", "Bola Ahmed Tinubu"],
    ["Date of Birth", "29 March 1952"],
    ["Place of Birth", "Lagos, Nigeria"],
    ["State of Origin", "Lagos State"],
    ["Marital Status", "Married"],
    ["Religion", "Islam"],
  ],

  qualifications: [
    {
      title: "B.Sc. Economics",
      school: "University of Chicago, USA",
    },
    {
      title: "LL.B (Hons)",
      school: "University of Lagos",
    },
    {
      title: "Barrister at Law",
      school: "Nigerian Law School, Lagos",
    },
    {
      title: "Master's Degree",
      school: "University of Lagos",
    },
  ],

  career: [
    {
      period: "1999 – 2007",
      title: "Governor of Lagos State (Two Terms)",
      description:
        "Led Lagos through significant infrastructure and urban renewal projects.",
    },
    {
      period: "2003 – 2007",
      title: "Chairman, National Governors' Forum",
      description: "Represented the interests of state governors.",
    },
    {
      period: "2011 – 2015",
      title: "Senator, representing Lagos Central Senatorial District",
      description:
        "Contributed to legislative activities in the National Assembly.",
    },
  ],

  controversies: [
    "Economic policies and their impact",
    "Fuel subsidy removal and public reaction",
    "Security challenges during his administration",
  ],

  allegations: [
    "Corruption allegations linked to his political career",
    "Health-related claims in 2023",
    "Controversy over academic credentials (disputed)",
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
              Current Position
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
                  <div className="quick-fact-icon">{fact.icon}</div>

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

      <nav className="candidate-tabs">
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
      </nav>

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
                <strong>President of Nigeria</strong>
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

        {/* CONTROVERSIES + ALLEGATIONS */}

        <div className="content-grid two-columns warning-grid">
          <article className="warning-card controversy-card">
            <div className="warning-heading">
              <FiShield />
              <h2>Controversies</h2>
            </div>

            <ul>
              {candidate.controversies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button className="details-button">
              View Details
              <FiChevronRight />
            </button>
          </article>

          <article className="warning-card allegation-card">
            <div className="warning-heading">
              <FiAlertTriangle />
              <h2>Alleged Accusations</h2>
            </div>

            <ul>
              {candidate.allegations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button className="details-button">
              View Details
              <FiChevronRight />
            </button>
          </article>
        </div>

        {/* SOURCES */}

        <article className="sources-card">
          <div className="sources-icon">
            <FiFileText />
          </div>

          <div className="sources-content">
            <h2>Sources & Verification</h2>
            <p>
              All information is backed by credible sources,
              including official records, reputable media and
              public documents.
            </p>
          </div>

          <button className="sources-button">
            View Sources
            <FiChevronRight />
          </button>
        </article>
      </section>

      {/* FOOTER */}

      <footer className="candidate-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-mark">
              <FiFlag />
            </div>

            <div>
              <h2>CivicLens</h2>
              <p>See beyond the campaign.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#">About</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Contact</a>
            <span>|</span>
            <a href="#">Methodology</a>
          </div>

          <div className="footer-socials">
            <span>𝕏</span>
            <span>f</span>
            <span>▶</span>
            <span>◎</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>An independent, non-partisan platform.</span>
          <span>© 2026 CivicLens. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}