import { useEffect, useState } from "react";
import { COLLY_FLOW_SRC } from "../constants/eatday";
import { useReveal } from "../hooks/useReveal";

const TITLE_FULL = "찍고 → 고르고 → 끝";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export default function Solution() {
  const revealRef = useReveal();
  const [typedTitle, setTypedTitle] = useState(() =>
    prefersReducedMotion() ? TITLE_FULL : ""
  );
  const [typingDone, setTypingDone] = useState(() => prefersReducedMotion());
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTypedTitle(TITLE_FULL);
      setTypingDone(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setTypingStarted(true);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealRef]);

  useEffect(() => {
    if (!typingStarted) return;

    let i = 0;
    setTypedTitle("");
    setTypingDone(false);
    const id = window.setInterval(() => {
      i += 1;
      setTypedTitle(TITLE_FULL.slice(0, i));
      if (i >= TITLE_FULL.length) {
        window.clearInterval(id);
        setTypingDone(true);
      }
    }, 78);
    return () => window.clearInterval(id);
  }, [typingStarted]);

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

        <div className="flow-steps">
          <div className="flow-step flow-step--bounce">
            <div className="step-icon">📸</div>
            <div className="step-label">사진 찍기</div>
            <div className="step-sub">카메라 or 갤러리</div>
          </div>
          <div className="flow-arrow" aria-hidden>
            ›
          </div>
          <div className="flow-step flow-step--bounce flow-step--bounce-delay">
            <div className="step-icon">🧠</div>
            <div className="step-label">AI 인식</div>
            <div className="step-sub">Claude Vision</div>
          </div>
          <div className="flow-arrow" aria-hidden>
            ›
          </div>
          <div className="flow-step">
            <div className="step-icon">🥗</div>
            <div className="step-label">top-3 추천</div>
            <div className="step-sub">1탭으로 확정</div>
          </div>
          <div className="flow-arrow" aria-hidden>
            ›
          </div>
          <div className="flow-step">
            <div className="step-icon">✅</div>
            <div className="step-label">기록 완료!</div>
            <div className="step-sub">영양소 자동 입력</div>
          </div>
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
