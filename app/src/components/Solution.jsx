import { useRef } from "react";
import { COLLY_FLOW_SRC } from "../constants/eatday";
import { useReveal } from "../hooks/useReveal";
import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { useTypingTitle } from "../hooks/useTypingTitle";

const TITLE_FULL = "찍고 → 고르고 → 끝";

const FLOW_SEQUENCE = [
  {
    kind: "step",
    bounce: true,
    bounceDelay: false,
    icon: "📸",
    label: "사진 찍기",
    sub: "카메라 or 갤러리",
  },
  { kind: "arrow" },
  {
    kind: "step",
    bounce: true,
    bounceDelay: true,
    icon: "🧠",
    label: "AI 인식",
    sub: "Claude Vision",
  },
  { kind: "arrow" },
  {
    kind: "step",
    bounce: false,
    icon: "🥗",
    label: "top-3 추천",
    sub: "1탭으로 확정",
  },
  { kind: "arrow" },
  {
    kind: "step",
    bounce: false,
    icon: "✅",
    label: "기록 완료!",
    sub: "영양소 자동 입력",
  },
];

export default function Solution() {
  const revealRef = useReveal();
  const flowStaggerRef = useRef(null);
  const { typedTitle, typingDone } = useTypingTitle(TITLE_FULL, revealRef);
  const flowShown = useStaggeredReveal(flowStaggerRef, FLOW_SEQUENCE.length);

  return (
    <section ref={revealRef} className="section reveal">
      <div className="section-tag">✨ 잇데이의 방법</div>
      <div className="solution-wrap">
        <img
          src={COLLY_FLOW_SRC}
          alt="잇데이 콜리 — 찍고, 고르고, 끝"
          className="solution-colly-img"
          width={320}
          height={200}
          decoding="async"
        />
        <h2
          className="section-title solution-title-typing"
          aria-label={TITLE_FULL}
        >
          <span className="solution-title-typing-text">{typedTitle}</span>
          {!typingDone ? (
            <span className="solution-title-cursor" aria-hidden>
              |
            </span>
          ) : null}
        </h2>
        <p className="section-sub">AI가 top-3 후보를 추천하면, 탭 한 번으로 기록 완료!</p>

        <div
          ref={flowStaggerRef}
          className="flow-steps flow-steps--stagger"
        >
          {FLOW_SEQUENCE.map((item, i) => {
            const shown = i < flowShown;
            const shownClass = shown ? " flow-stagger-item--shown" : "";

            if (item.kind === "arrow") {
              return (
                <div
                  key={`arrow-${i}`}
                  className={`flow-arrow flow-stagger-item${shownClass}`}
                  aria-hidden
                >
                  ›
                </div>
              );
            }

            const bounceClass = item.bounce ? " flow-step--bounce" : "";
            const delayClass =
              item.bounce && item.bounceDelay
                ? " flow-step--bounce-delay"
                : "";

            return (
              <div
                key={item.label}
                className={`flow-step${bounceClass}${delayClass} flow-stagger-item${shownClass}`}
              >
                <div className="step-icon">{item.icon}</div>
                <div className="step-label">{item.label}</div>
                <div className="step-sub">{item.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="solution-kv">
          <span className="kv-tag">AI(80%) + 사용자(20%) = 100% 정확도</span>
          <span className="kv-text">
            식약처 공공 DB 기반 영양소 자동 입력, g 단위 입력 완전 제로
          </span>
        </div>
      </div>
    </section>
  );
}
