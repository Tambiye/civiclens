import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Suspense } from "react";
import Navbar, { NavbarFallback } from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/candidates.css";
import "../styles/compare.css";
import "../styles/issues-process.css";
import "../styles/governorCandidates.css";
import "../styles/footer.css";
import "../styles/candidate-profile.css";
import "../styles/candidates-section.css";
import "../styles/governorshipAspirants.css";
import "../styles/comparison.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PoliPeek | Know your candidates",
  description:
    "An independent, non-partisan platform to explore and compare Nigeria's 2027 candidates: their records, plans and the evidence behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}