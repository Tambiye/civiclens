
"use client";

import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiUsers,
} from "react-icons/fi";

import { governorStates as governorAspirantStates } from "@/data/governorCandidates";

type GovernorshipAspirantsProps = {
  stateName: string;
  onBack: () => void;
};

export default function GovernorshipAspirants({
  stateName,
  onBack,
}: GovernorshipAspirantsProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const selectedState = governorAspirantStates.find(
    (state) => state.state.toLowerCase() === stateName.toLowerCase()
  );

  const candidates = selectedState?.candidates ?? [];

  const filteredCandidates = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return candidates;

    return candidates.filter((candidate) =>
      [
        candidate.name,
        candidate.party,
        candidate.runningMate,
      ].some((value) => value.toLowerCase().includes(search))
    );
  }, [candidates, searchTerm]);

  if (!selectedState) {
    return (
      <section className="governorship-aspirants">
        <div className="governorship-aspirants__empty">
          <h2>State not found</h2>
          <p>We could not find aspirant information for {stateName}.</p>
          <button
            type="button"
            className="governorship-aspirants__back"
            onClick={onBack}
          >
            <FiArrowLeft />
            Back to Governors
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="governorship-aspirants">
      <div className="governorship-aspirants__inner">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="governorship-aspirants__back"
          onClick={onBack}
        >
          <FiArrowLeft />
          <span>Back to All Governors</span>
        </button>

        {/* PAGE HEADING */}

        <div className="governorship-aspirants__heading">
          <span className="governorship-aspirants__eyebrow">
            2027 GOVERNORSHIP ELECTION
          </span>

          <h2>{selectedState.state}</h2>

          <h3>Governorship Aspirants</h3>

          <p>
            Explore the candidates seeking to lead {selectedState.state},
            including their political parties, running mates and personal
            details.
          </p>
        </div>

        {/* SUMMARY AND SEARCH */}

        <div className="governorship-aspirants__toolbar">
          <div className="governorship-aspirants__count">
            <div className="governorship-aspirants__count-icon">
              <FiUsers />
            </div>

            <div>
              <strong>{candidates.length}</strong>
              <span>
                {candidates.length === 1 ? "Aspirant" : "Aspirants"}
              </span>
            </div>
          </div>

          <div className="governorship-aspirants__search">
            <FiSearch />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by candidate or party..."
              aria-label="Search candidates"
            />
          </div>
        </div>

        {/* CANDIDATES TABLE */}

        <div className="governorship-aspirants__table-wrapper">
          <table className="governorship-aspirants__table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Candidate</th>
                <th>Party</th>
                <th>Qualification</th>
                <th>Running Mate</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map((candidate, index) => {
                  const qualification =
                    "qualification" in candidate &&
                    typeof candidate.qualification === "string" &&
                    candidate.qualification.trim()
                      ? candidate.qualification
                      : "Not confirmed";

                  return (
                    <tr key={`${candidate.name}-${candidate.party}`}>
                      <td className="aspirant-number">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td>
                        <div className="aspirant-candidate">
                          <div className="aspirant-candidate__image">
                            <img
                              src={candidate.image}
                              alt={candidate.name}
                              loading="lazy"
                            />
                          </div>

                          <span>{candidate.name}</span>
                        </div>
                      </td>

                      <td>
                        <span className="aspirant-party">
                          {candidate.party}
                        </span>
                      </td>

                      <td>
                        <span
                          className={
                            qualification === "Not confirmed"
                              ? "aspirant-qualification is-unconfirmed"
                              : "aspirant-qualification"
                          }
                        >
                          {qualification}
                        </span>
                      </td>

                      <td className="aspirant-running-mate">
                        {candidate.runningMate || "Not confirmed"}
                      </td>

                      <td className="aspirant-age">
                        {candidate.age ?? "Not confirmed"}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6}>
                    <div className="governorship-aspirants__no-results">
                      <FiSearch />
                      <strong>No candidates found</strong>
                      <span>
                        Try searching with another name or political party.
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="governorship-aspirants__note">
          Candidate information is presented for public reference.
          Unverified details are marked as not confirmed.
        </p>

      </div>
    </section>
  );
}
