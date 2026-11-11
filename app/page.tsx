import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CandidateSection from "@/components/CandidateSection";
import Compare from "@/components/Compare";
import IssuesProcess from "@/components/IssuesProcess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CandidateSection />
      <Compare />
      <IssuesProcess />
      <Footer />
    </>
  );
}