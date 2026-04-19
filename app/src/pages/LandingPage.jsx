import Nav from "../components/Nav";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Hero from "../components/Hero";
import PainGrid from "../components/PainGrid";
import Solution from "../components/Solution";
import Features from "../components/Features";
import Reward from "../components/Reward";
import PublicData from "../components/PublicData";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="eatday-landing">
      <Nav />
      <ScrollProgress />
      <ScrollToTopButton />
      <main role="main">
        <Hero />
        <PainGrid />
        <Solution />
        <Features />
        <Reward />
        <PublicData />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
