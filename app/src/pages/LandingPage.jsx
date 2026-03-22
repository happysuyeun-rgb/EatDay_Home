import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemEmpathy from "../components/ProblemEmpathy";
import SceneRibbon from "../components/SceneRibbon";
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
      <main role="main" className="landing-scene-flow">
        <Hero />
        <ProblemEmpathy />
        <div className="scene-ribbon-slot bg-gradient-to-b from-[var(--bg-oat)] via-[var(--bg-sand)]/40 to-[var(--bg-cream)]">
          <SceneRibbon label="전환" sub="같은 목표, 다른 방식으로 이어집니다" />
        </div>
        <BeforeAfter />
        <AIMealLogging />
        <ActionableFeedback />
        <div className="scene-ribbon-slot bg-gradient-to-b from-[var(--bg-cream)] via-[var(--bg-sand)]/50 to-transparent">
          <SceneRibbon label="밖에서" sub="집 밖 식사도 흐름 안에서" />
        </div>
        <RestaurantMap />
        <CommunityReport />
        <div className="scene-ribbon-slot bg-gradient-to-b from-[var(--bg-oat)] to-[var(--bg-cream)]">
          <SceneRibbon label="상황별" sub="내 일상에 맞는 한 장면" />
        </div>
        <RealLifeScenarios />
        <ColiWarmth />
        <div className="scene-ribbon-slot bg-gradient-to-b from-[var(--bg-oat)] to-[var(--bg-cream)]">
          <SceneRibbon label="정리" sub="자주 묻는 질문" />
        </div>
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
