import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemEmpathy from "../components/ProblemEmpathy";
import BeforeAfter from "../components/BeforeAfter";
import AIMealLogging from "../components/AIMealLogging";
import ActionableFeedback from "../components/ActionableFeedback";
import RestaurantMap from "../components/RestaurantMap";
import CommunityReport from "../components/CommunityReport";
import RealLifeScenarios from "../components/RealLifeScenarios";
import ColiWarmth from "../components/ColiWarmth";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <ProblemEmpathy />
        <BeforeAfter />
        <AIMealLogging />
        <ActionableFeedback />
        <RestaurantMap />
        <CommunityReport />
        <RealLifeScenarios />
        <ColiWarmth />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
