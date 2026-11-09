
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Candidates", href: "/candidates" },
  { label: "Compare", href: "/compare" },
  { label: "The Issues", href: "/issues" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close menu with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <nav
      className={`navbar ${showBg ? "navbar-bg" : ""} ${
        isOpen ? "navbar-menu-open" : ""
      }`}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link href="/" className="navbar-logo" onClick={closeMenu}>
  <Image
    src="/images/gold-map.png"
    alt="CivicLens logo"
    width={100}
    height={100}
    className="navbar-logo-icon"
  />
        <span className="navbar-brand">
          <span className="navbar-brand-name">
            Civic<span>Lens</span>
          </span>
          <span className="navbar-tagline">
            See beyond the campaign.
          </span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={link.active ? "active" : ""}
              aria-current={link.active ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Navigation Actions */}
      <div className="nav-actions">
        <div className="navbar-country">
          <span className="nigeria-flag" aria-label="Nigeria flag">
            🇳🇬
          </span>
          <span>NG</span>
          <FiChevronDown size={14} />
        </div>

        {/* Mobile Toggle */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <button
        type="button"
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-menu-top">
          <span className="mobile-menu-eyebrow">
            Explore CivicLens
          </span>
          <span className="mobile-menu-divider" />
        </div>

        <div className="mobile-menu-links">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={link.active ? "active" : ""}
              style={{ "--i": index } as React.CSSProperties}
              tabIndex={isOpen ? 0 : -1}
              aria-current={link.active ? "page" : undefined}
            >
              <span>{link.label}</span>
              <FiArrowUpRight size={18} />
            </Link>
          ))}
        </div>

        {/* Country */}
        <div className="mobile-menu-country">
          <span>🇳🇬</span>
          <span>Nigeria</span>
          <span className="mobile-menu-country-code">NG</span>
        </div>

        {/* CTA */}
        <Link
          href="/candidates"
          onClick={closeMenu}
          className="mobile-menu-button"
          tabIndex={isOpen ? 0 : -1}
        >
          Explore Candidates
          <FiArrowUpRight size={18} />
        </Link>

        <div className="mobile-menu-note">
          <span className="mobile-menu-note-line" />
          <p>Informed citizens. Stronger democracy.</p>
        </div>
      </div>
    </nav>
  );
}
