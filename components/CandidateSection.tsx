
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

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
    party: "African Democratic Congress",
    shortParty: "ADC",
    status: "Disputed",
    statusType: "disputed",
    image: "/images/candidates/atiku.jpg",
  },
  {
    name: "Peter Gregory Obi",
    party: "Nigerian Democratic Congress",
    shortParty: "NDC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/obi.jpg",
  },
  {
    name: "Sunday Chibuzo Okereke",
    party: "Labour Party",
    shortParty: "LP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/okereke.jpg",
  },
  {
    name: "Sandy Ojang Onor",
    party: "Peoples Democratic Party",
    shortParty: "PDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sandy.jpg",
  },
  {
    name: "Aliyu Abbas-Bin",
    party: "Action Democratic Party",
    shortParty: "ADP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/aliyu-abbas-bin.jpg",
  },
  {
    name: "Kabiru Yusuf",
    party: "Allied Peoples Party",
    shortParty: "APP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/kabiru-yusuf.jpg",
  },
  {
    name: "Omoyele Sowore",
    party: "African Action Congress",
    shortParty: "AAC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sowore.jpg",
  },
  {
    name: "Oluseyi Abiodun Makinde",
    party: "Allied Peoples Movement",
    shortParty: "APM",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/makinde.jpg",
  },
  {
    name: "Sunday Adenuga",
    party: "Boot Party",
    shortParty: "BP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sunday-adenuga.jpg",
  },
  {
    name: "Moses Olusoji Adebisi",
    party: "Democratic Leadership Alliance",
    shortParty: "DLA",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/moses-adebisi.jpg",
  },
  {
    name: "Ada Elizabeth Fredrick Okwori",
    party: "National Democratic Party",
    shortParty: "NDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/ada-okwori.jpg",
  },
  {
    name: "Nkem Esther Okereke",
    party: "National Rescue Movement",
    shortParty: "NRM",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/nkem-okereke.jpg",
  },
  {
    name: "Donald Duke",
    party: "People's Redemption Party",
    shortParty: "PRP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/donald-duke.jpg",
  },
  {
    name: "Adewole Ebenezer Adebayo",
    party: "Social Democratic Party",
    shortParty: "SDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/adebayo.jpg",
  },
  {
    name: "Peter Ada Agada",
    party: "Young Progressive Party",
    shortParty: "YPP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/peter-agada.jpg",
  },
  {
    name: "Daniel Daberechukwu Nwanyanwu",
    party: "Zenith Labour Party",
    shortParty: "ZLP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/nwanyanwu.jpg",
  },
];


const governorStates = [
  // 6 FEBRUARY 2027
  {
    state: "Abia State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/abia.jpg",
  },
  {
    state: "Adamawa State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/adamawa.jpg",
  },
  {
    state: "Akwa Ibom State",
    electionDate: "6 February 2027",
    candidates: "20 candidates",
    image: "/images/governors/akwa-ibom.jpg",
  },
  {
    state: "Bauchi State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/bauchi.jpg",
  },
  {
    state: "Benue State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/benue.jpg",
  },
  {
    state: "Borno State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/borno.jpg",
  },
  {
    state: "Cross River State",
    electionDate: "6 February 2027",
    candidates: "8 candidates",
    image: "/images/governors/cross-river.jpg",
  },
  {
    state: "Delta State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/delta.jpg",
  },
  {
    state: "Ebonyi State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/ebonyi.jpg",
  },
  {
    state: "Enugu State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/enugu.jpg",
  },
  {
    state: "Gombe State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/gombe.jpg",
  },
  {
    state: "Jigawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/jigawa.jpg",
  },
  {
    state: "Kaduna State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/kaduna.jpg",
  },
  {
    state: "Kano State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/kano.jpg",
  },
  {
    state: "Katsina State",
    electionDate: "6 February 2027",
    candidates: "11 candidates",
    image: "/images/governors/katsina.jpg",
  },
  {
    state: "Kebbi State",
    electionDate: "6 February 2027",
    candidates: "14 candidates",
    image: "/images/governors/kebbi.jpg",
  },
  {
    state: "Kwara State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/kwara.jpg",
  },
  {
    state: "Lagos State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/lagos.jpg",
  },
  {
    state: "Nasarawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/nasarawa.jpg",
  },
  {
    state: "Niger State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/niger.jpg",
  },
  {
    state: "Ogun State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/ogun.jpg",
  },
  {
    state: "Oyo State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/oyo.jpg",
  },
  {
    state: "Plateau State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/plateau.jpeg",
  },
  {
    state: "Rivers State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/rivers.png",
  },
  {
    state: "Sokoto State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/sokoto.webp",
  },
  {
    state: "Taraba State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/taraba.jpg",
  },
  {
    state: "Yobe State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/yobe.jpg",
  },
  {
    state: "Zamfara State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/zamfara.jpg",
  },

  // OFF-CYCLE STATES
  {
    state: "Anambra State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/anambra.jpeg",
  },
  {
    state: "Bayelsa State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/bayelsa.jpeg",
  },
  {
    state: "Edo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/edo.webp",
  },
  {
    state: "Ekiti State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ekiti.webp",
  },
  {
    state: "Imo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/imo.jpg",
  },
  {
    state: "Kogi State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/kogi.jpg",
  },
  {
    state: "Ondo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ondo.jpg",
  },
  {
    state: "Osun State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/osun.webp",
  },
];


const senateStates = [
  {
    state: "Abia State",
    candidates: "3 candidates",
    image: "/images/senators/Abia-Austin-Akobundu.jpg",
  },
  {
    state: "Adamawa State",
    candidates: "3 candidates",
    image: "/images/senators/adamawa.jpg",
  },
  {
    state: "Akwa Ibom State",
    candidates: "3 candidates",
    image: "/images/senators/akwa-ibom-Senate-President-Godswill-Akpabio.webp",
  },
  {
    state: "Anambra State",
    candidates: "3 candidates",
    image: "/images/senators/Anambra-Victor-Umeh.webp",
  },
  {
    state: "Bauchi State",
    candidates: "3 candidates",
    image: "/images/senators/bauchi-senator-Abdul-Ahmed-Ningi.jpeg",
  },
  {
    state: "Bayelsa State",
    candidates: "3 candidates",
    image: "/images/senators/bayelsa-Friday-Konbowei-860x513.webp",
  },
  {
    state: "Benue State",
    candidates: "3 candidates",
    image: "/images/senators/benue-state.jpg",
  },
  {
    state: "Borno State",
    candidates: "3 candidates",
    image: "/images/senators/borno-state.jpg",
  },
  {
    state: "Cross River State",
    candidates: "3 candidates",
    image: "/images/senators/cross-river.jpeg",
  },
  {
    state: "Delta State",
    candidates: "3 candidates",
    image: "/images/senators/delta.jpeg",
  },
  {
    state: "Ebonyi State",
    candidates: "3 candidates",
    image: "/images/senators/ebonyi-state.jpg",
  },
  {
    state: "Edo State",
    candidates: "3 candidates",
    image: "/images/senators/edo-state.jpg",
  },
  {
    state: "Ekiti State",
    candidates: "3 candidates",
    image: "/images/senators/ekiti-state.webp",
  },
  {
    state: "Enugu State",
    candidates: "3 candidates",
    image: "/images/senators/enugu-senate.png",
  },
  {
    state: "Gombe State",
    candidates: "3 candidates",
    image: "/images/senators/gombe.webp",
  },
  {
    state: "Imo State",
    candidates: "3 candidates",
    image: "/images/senators/imo-state.jpg",
  },
  {
    state: "Jigawa State",
    candidates: "3 candidates",
    image: "/images/senators/jigawa.webp",
  },
  {
    state: "Kaduna State",
    candidates: "3 candidates",
    image: "/images/senators/kaduna-state.jpg",
  },
  {
    state: "Kano State",
    candidates: "3 candidates",
    image: "/images/senators/kano-senate.webp",
  },
  {
    state: "Katsina State",
    candidates: "3 candidates",
    image: "/images/senators/katsina-state.webp",
  },
  {
    state: "Kebbi State",
    candidates: "3 candidates",
    image: "/images/senators/kebbi-state.jpg",
  },
  {
    state: "Kogi State",
    candidates: "3 candidates",
    image: "/images/senators/kogi-Natasha-Akpoti-at-Senate.jpg",
  },
  {
    state: "Kwara State",
    candidates: "3 candidates",
    image: "/images/senators/kwara-Lola_Ashiru.jpg",
  },
  {
    state: "Lagos State",
    candidates: "3 candidates",
    image: "/images/senators/lagos-Wasiu-Eshilokun-Sanni.webp",
  },
  {
    state: "Nasarawa State",
    candidates: "3 candidates",
    image: "/images/senators/nasarawa-state.jpg",
  },
  {
    state: "Niger State",
    candidates: "3 candidates",
    image: "/images/senators/niger-state.jpeg",
  },
  {
    state: "Ogun State",
    candidates: "3 candidates",
    image: "/images/senators/ogun-state.jpg",
  },
  {
    state: "Ondo State",
    candidates: "3 candidates",
    image: "/images/senators/ondo-state.jpg",
  },
  {
    state: "Osun State",
    candidates: "3 candidates",
    image: "/images/senators/osun-Lere-Oyewumi-scaled.jpg",
  },
  {
    state: "Oyo State",
    candidates: "3 candidates",
    image: "/images/senators/oyo-senate.jpg",
  },
  {
    state: "Plateau State",
    candidates: "3 candidates",
    image: "/images/senators/plateau-Diket-Plang.webp",
  },
  {
    state: "Rivers State",
    candidates: "3 candidates",
    image: "/images/senators/rivers-senate.jpg",
  },
  {
    state: "Sokoto State",
    candidates: "3 candidates",
    image: "/images/senators/sokoto-senate.jpg",
  },
  {
    state: "Taraba State",
    candidates: "3 candidates",
    image: "/images/senators/taraba-senate.png",
  },
  {
    state: "Yobe State",
    candidates: "3 candidates",
    image: "/images/senators/yobe-Ibrahim_Geidam.png",
  },
  {
    state: "Zamfara State",
    candidates: "3 candidates",
    image: "/images/senators/zamfara-senate.jpg",
  },
  {
    state: "Federal Capital Territory",
    candidates: "3 candidates",
    image: "/images/senators/abuja-senator-ireti-kingibe.jpg",
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

        <span
          className={`party-badge party-${candidate.shortParty.toLowerCase()}`}
        >
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
  electionDate,
  image,
}: {
  state: string;
  candidates: string | null;
  electionDate?: string | null;
  image: string;
}) {
  return (
    <article className="state-card">
      <img src={image} alt={state} className="state-card-image" />

      <div className="state-card-info">
        <div>
          <h3>{state}</h3>

          <p>{candidates ?? "Candidate information pending"}</p>

          {electionDate && (
            <p className="state-election-date">
              <FiClock />
              {electionDate}
            </p>
          )}
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
  children: ReactNode;
  href?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateScrollState = () => {
    const row = rowRef.current;

    if (!row) return;

    setCanScrollBack(row.scrollLeft > 2);

    setCanScrollForward(
      row.scrollLeft + row.clientWidth < row.scrollWidth - 2
    );
  };

  const scrollRow = (direction: "left" | "right") => {
    const row = rowRef.current;

    if (!row) return;

    row.scrollBy({
      left: direction === "right" ? row.clientWidth : -row.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = rowRef.current;

    if (!row) return;

    updateScrollState();

    row.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      row.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="candidate-section">
      <div className="candidate-section-heading">
        <div className="candidate-heading-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={href} className="view-all-link">
          View all <FiArrowRight />
        </a>
      </div>

      <div className="candidate-carousel-wrapper">
        <button
          className="row-prev-button"
          onClick={() => scrollRow("left")}
          disabled={!canScrollBack}
          aria-label="Previous items"
        >
          <FiChevronRight />
        </button>

        <div className="candidate-row" ref={rowRef}>
          {children}
        </div>

        <button
          className="row-next-button"
          onClick={() => scrollRow("right")}
          disabled={!canScrollForward}
          aria-label="Next items"
        >
          <FiChevronRight />
        </button>
      </div>
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
      electionDate={state.electionDate}
      image={state.image}
    />
  ))}
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
      </CandidateRow>
    </section>
  );
}
