import { BETA_COMING_SOON_ALERT, HERO_COLLY_SRC } from "../constants/eatday";
import { useReveal } from "../hooks/useReveal";

export default function CtaSection() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="cta-section reveal">
      <div className="cta-deco d1" aria-hidden />
      <div className="cta-deco d2" aria-hidden />
      <img
        src={HERO_COLLY_SRC}
        alt="잇데이 콜리"
        className="cta-mascot cta-mascot--colly"
        width={200}
        height={120}
        decoding="async"
      />
      <h2 className="cta-title">오늘부터 같이 기록해봐요! 🌿</h2>
      <p className="cta-sub">무료 베타 · 사진 인식 10회/월 무료 · 광고 없음</p>
      <button
        type="button"
        className="btn-white"
        onClick={() => window.alert(BETA_COMING_SOON_ALERT)}
      >
        🍎 베타 사전등록 무료로 시작
      </button>
      <p className="cta-note">지금 사전등록하면 베타 알림을 가장 먼저 받을 수 있어요</p>
    </div>
  );
}
