import { MASCOT_SRC } from "../constants/eatday";
import { useReveal } from "../hooks/useReveal";

export default function Solution() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section reveal">
      <div className="section-tag">✨ 잇데이의 방법</div>
      <div className="solution-wrap">
        <img
          src={MASCOT_SRC}
          alt="잇데이 마스코트"
          width={100}
          height={100}
          decoding="async"
          style={{
            width: 100,
            height: 100,
            display: "block",
            margin: "0 auto 16px",
            filter: "drop-shadow(0 8px 20px rgba(76,175,80,0.2))",
          }}
        />
        <h2 className="section-title" style={{ textAlign: "center" }}>
          찍고 → 고르고 → 끝
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text2)",
            fontSize: 15,
            marginTop: 8,
          }}
        >
          AI가 top-3 후보를 추천하면, 탭 한 번으로 기록 완료!
        </p>

        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-icon">📸</div>
            <div className="step-label">사진 찍기</div>
            <div className="step-sub">카메라 or 갤러리</div>
          </div>
          <div className="flow-arrow" aria-hidden>
            ›
          </div>
          <div className="flow-step">
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
