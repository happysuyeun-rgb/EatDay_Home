import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { useTypingTitle } from "../hooks/useTypingTitle";

const FEATURES_TITLE_FULL = "잇데이가 특별한 4가지 이유";

const ITEMS = [
  {
    icon: "📸",
    title: "AI 사진 인식",
    desc: "사진 찍으면 Claude AI가 음식을 인식해서 top-3 후보를 추천해요. 탭 한 번으로 식약처 공식 영양소가 자동 입력돼요.",
    badge: "g 입력 필요 없음",
  },
  {
    icon: "🗺️",
    title: "다이어터 맛집 지도",
    desc: "서울시 인허가 데이터 기반으로 지금 실제 영업 중인 건강식 맛집만 보여줘요. 폐업·휴업 식당은 제외!",
    badge: "공공데이터 실시간 검증",
  },
  {
    icon: "💬",
    title: "AI 개인화 피드백",
    desc: "오늘 먹은 탄수화물·단백질·지방을 분석해서 내 몸에 맞는 맞춤 식단 조언을 Claude AI가 제공해요.",
    badge: "나만의 영양 코치",
  },
  {
    icon: "👥",
    title: "다이어터 커뮤니티",
    desc: "식단 인증, 레시피 공유, 쇼핑 정보까지. 같은 목표를 가진 사람들과 함께하면 30일 연속이 가능해져요.",
    badge: "혼자가 아닌 함께",
  },
];

export default function Features() {
  const headRevealRef = useReveal();
  const gridRef = useRef(null);
  const { typedTitle, typingDone } = useTypingTitle(
    FEATURES_TITLE_FULL,
    headRevealRef
  );
  const cardsShown = useStaggeredReveal(gridRef, ITEMS.length);

  return (
    <section id="features" className="section">
      <div ref={headRevealRef} className="reveal">
        <div className="section-tag">🌟 핵심 기능</div>
        <h2
          className="section-title solution-title-typing"
          aria-label={FEATURES_TITLE_FULL}
        >
          <span className="solution-title-typing-text">{typedTitle}</span>
          {!typingDone ? (
            <span className="solution-title-cursor" aria-hidden>
              |
            </span>
          ) : null}
        </h2>
        <p className="section-sub">기록을 쉽게, 지속을 즐겁게, 함께라서 가능하게</p>
      </div>

      <div ref={gridRef} className="features-grid features-grid--stagger">
        {ITEMS.map((f, i) => (
          <div
            key={f.title}
            className={`feat-card${i < cardsShown ? " feat-card--shown" : ""}`}
          >
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
            <span className="feat-badge">{f.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
