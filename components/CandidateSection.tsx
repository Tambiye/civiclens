"use client";

import {
  FiArrowRight,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import "../styles/candidates.css";

const presidentialCandidates = [
  {
    name: "Bola Ahmed Tinubu",
    party: "All Progressives Congress",
    shortParty: "APC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/tinubu.jpg",
  },
  {
    name: "Atiku Abubakar",
    party: "People's Democratic Party",
    shortParty: "PDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/atiku.jpg",
  },
  {
    name: "Peter Gregory Obi",
    party: "Labour Party",
    shortParty: "LP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/obi.jpg",
  },
  {
    name: "Rabiu Musa Kwankwaso",
    party: "New Nigeria People's Party",
    shortParty: "NNPP",
    status: "Aspiring",
    statusType: "aspiring",
    image: "/images/candidates/kwankwaso.jpg",
  },
  {
    name: "Omoyele Sowore",
    party: "African Action Congress",
    shortParty: "AAC",
    status: "Aspiring",
    statusType: "aspiring",
    image: "/images/candidates/sowore.jpg",
  },
  {
    name: "Kingsley Moghalu",
    party: "Young Progressives Party",
    shortParty: "YPP",
    status: "Announced",
    statusType: "announced",
    image: "/images/candidates/moghalu.jpg",
  },
];

const governorStates = [
  {
    state: "Lagos State",
    candidates: "12 candidates",
    image: "/images/candidates/lagos-governor.jpg",
  },
  {
    state: "Rivers State",
    candidates: "9 candidates",
    image: "/images/candidates/rivers-governor.jpg",
  },
  {
    state: "Kaduna State",
    candidates: "11 candidates",
    image: "/images/candidates/kaduna-governor.jpg",
  },
  {
    state: "Oyo State",
    candidates: "10 candidates",
    image: "/images/candidates/oyo-governor.jpg",
  },
  {
    state: "Kano State",
    candidates: "13 candidates",
    image: "/images/candidates/kano-governor.jpg",
  },
  {
    state: "Edo State",
    candidates: "8 candidates",
    image: "/images/candidates/edo-governor.jpg",
  },
];

const senateStates = [
  {
    state: "Abia State",
    candidates: "3 candidates",
    image: "/images/candidates/abia-senate.jpg",
  },
  {
    state: "Adamawa State",
    candidates: "3 candidates",
    image: "/images/candidates/adamawa-senate.jpg",
  },
  {
    state: "Akwa Ibom State",
    candidates: "3 candidates",
    image: "/images/candidates/akwa-ibom-senate.jpg",
  },
  {
    state: "Anambra State",
    candidates: "3 candidates",
    image: "/images/candidates/anambra-senate.jpg",
  },
  {
    state: "Bauchi State",
    candidates: "3 candidates",
    image: "/images/candidates/bauchi-senate.jpg",
  },
  {
    state: "Bayelsa State",
    candidates: "3 candidates",
    image: "/images/candidates/bayelsa-senate.jpg",
  },
];

function CandidateCard({
  candidate,
}: {
  candidate: (typeof presidentialCandidates)[number];
}) {
  return (
    <article className="candidate-card">
      <div className="candidate-image-wrapper">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="candidate-image"
        />

        <span className={`party-badge party-${candidate.shortParty.toLowerCase()}`}>
          {candidate.shortParty}
        </span>
      </div>

      <div className="candidate-info">
        <div className="candidate-status">
          {candidate.statusType === "confirmed" ? (
            <FiCheckCircle />
          ) : (
            <FiClock />
          )}

          <span>{candidate.status}</span>
        </div>

        <h3>{candidate.name}</h3>

        <p>{candidate.party}</p>

        <button className="profile-button">
          View Profile
          <FiArrowRight />
        </button>
      </div>
    </article>
  );
}

function StateCard({
  state,
  candidates,
  image,
}: {
  state: string;
  candidates: string;
  image: string;
}) {
  return (
    <article className="state-card">
      <img src={image} alt={state} className="state-card-image" />

      <div className="state-card-info">
        <div>
          <h3>{state}</h3>
          <p>{candidates}</p>
        </div>

        <FiChevronRight className="state-arrow" />
      </div>
    </article>
  );
}

function CandidateRow({
  title,
  description,
  children,
  href = "#",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <section className="candidate-section">
      <div className="candidate-section-heading">
        <div className="candidate-heading-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={href} className="view-all-link">
          View all
          <FiArrowRight />
        </a>
      </div>

      <div className="candidate-row">{children}</div>
    </section>
  );
}

export default function CandidateSection() {
  return (
    <section className="candidates-section" id="candidates">
      <CandidateRow
        title="Presidential Candidates"
        description="People seeking to be Nigeria's next President"
      >
        {presidentialCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.name}
            candidate={candidate}
          />
        ))}

        <button className="row-next-button" aria-label="Next candidates">
          <FiChevronRight />
        </button>
      </CandidateRow>

      <CandidateRow
        title="Governorship Candidates"
        description="People seeking to lead their states"
      >
        {governorStates.map((state) => (
          <StateCard
            key={state.state}
            state={state.state}
            candidates={state.candidates}
            image={state.image}
          />
        ))}

        <button className="row-next-button" aria-label="Next states">
          <FiChevronRight />
        </button>
      </CandidateRow>

      <CandidateRow
        title="Senate Candidates"
        description="People seeking to represent their states in the Senate"
      >
        {senateStates.map((state) => (
          <StateCard
            key={state.state}
            state={state.state}
            candidates={state.candidates}
            image={state.image}
          />
        ))}

        <button className="row-next-button" aria-label="Next states">
          <FiChevronRight />
        </button>
      </CandidateRow>
    </section>
  );
}