import Image from "next/image";
import Link from "next/link";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const footerLinks = [
  { label: "Candidates", href: "/#candidates" },
  { label: "Compare", href: "/#compare" },
  { label: "The Issues", href: "/#issues" },
  { label: "About", href: "/#about" },
  { label: "Methodology", href: "/#methodology" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <Link href="/" className="footer-brand">
            <Image
              src="/images/gold-map.png"
              alt="PoliPeek logo"
              width={100}
    height={100}
              className="footer-logo-icon"
            />

            <span className="footer-brand-text">
              <span className="footer-brand-name"> Poli<span className="brand-name-span">Peek</span></span>
              <span className="footer-brand-tagline">
                See beyond the campaign.
              </span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="footer-socials">
            <a href="#" aria-label="PoliPeek on X">
              <FiTwitter />
            </a>

            <a href="#" aria-label="PoliPeek on Facebook">
              <FiFacebook />
            </a>

            <a href="#" aria-label="PoliPeek on Instagram">
              <FiInstagram />
            </a>

            <a href="#" aria-label="PoliPeek on YouTube">
              <FiYoutube />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            An independent, non-partisan platform. Not affiliated with any
            political party or government agency.
          </p>

       <span>
  © 2026 PoliPeek. All rights reserved.
</span>
        </div>

      </div>
    </footer>
  );
}