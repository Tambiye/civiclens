"use client";

import { FiSearch, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <h1>
            Know Your
            <span>Candidates.</span>
          </h1>

          <p className="hero-description">
            Explore the people seeking to lead Nigeria.
            <br />
            Compare their policies, check their records,
            <br />
            and see the evidence behind their promises.
          </p>
        </div>

        <div className="hero-platform">
          <span>INFORMED CITIZENS.</span>
          <strong>STRONGER DEMOCRACY.</strong>

          <p>
            An independent,
            <br />
            non-partisan platform.
          </p>

          <div className="hero-line" />
        </div>
      </div>

      <div className="hero-search">
        <div className="search-input">
          <FiSearch size={20} />

          <input
            type="text"
            placeholder="Search candidates, parties, states, or key issues..."
          />
        </div>

        <button type="button" className="search-button">
          Search
        </button>
      </div>

      <div className="candidate-filters">
        <button className="filter active">
          <span className="filter-icon">♟</span>
          All Candidates
        </button>

        <button className="filter">
          <span className="filter-icon">♜</span>
          Presidential
        </button>

        <button className="filter">
          <span className="filter-icon">♜</span>
          Governors
        </button>

        <button className="filter">
          <span className="filter-icon">♜</span>
          Senate
        </button>

        <button className="filter">
          <span className="filter-icon">♜</span>
          House of Reps
        </button>
      </div>
    </section>
  );
}