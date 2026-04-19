import { useCallback, useRef, useState } from "react";
import { BETA_COMING_SOON_ALERT, HERO_COLLY_SRC } from "../constants/eatday";
import { useTypingTitle } from "../hooks/useTypingTitle";

const HERO_TITLE_FULL = "식단 기록,\n사진 한 장으로 끝";

export default function Hero() {
  const [bouncing, setBouncing] = useState(false);
  const heroTypingRef = useRef(null);
  const { typedTitle, typingDone } = useTypingTitle(HERO_TITLE_FULL, heroTypingRef);

  const onMascotActivate = useCallback(() => {
    setBouncing(true);
    window.setTimeout(() => setBouncing(false), 400);
  }, []);

  return (
    <section ref={heroTypingRef} className="hero" aria-labelledby="eatday-hero-title">
      <div className="hero-bg-circle c1" aria-hidden />
      <div className="hero-bg-circle c2" aria-hidden />

      <div className="hero-badge">🥦 AI 식단 관리 앱 · 베타 오픈 중</div>

      <div className="hero-mascot-wrap">
        <div
          className={`hero-mascot-hit${bouncing ? " hero-mascot-hit--bouncing" : ""}`}
          role="button"
          tabIndex={0}
          aria-label="콜리 캐릭터 — 탭하면 반응해요"
          onClick={onMascotActivate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onMascotActivate();
            }
          }}
        >
          <img
            src={HERO_COLLY_SRC}
            alt=""
            className="hero-mascot hero-mascot--colly"
            width={280}
            height={280}
            decoding="async"
            draggable={false}
          />
        </div>
      </div>

      <h1
        id="eatday-hero-title"
        className="hero-title solution-title-typing"
        aria-label={HERO_TITLE_FULL.replace(/\n/g, " ")}
      >
        {typingDone ? (
          <>
            식단 기록,
            <br />
            <span className="highlight">사진 한 장</span>으로 끝
          </>
        ) : (
          <>
            <span className="solution-title-typing-text hero-title-typing-pre">
              {typedTitle}
            </span>
            <span className="solution-title-cursor hero-title-cursor" aria-hidden>
              |
            </span>
          </>
        )}
      </h1>

      <p className="hero-sub">
        AI가 인식하고, 공공 DB가 채우고,
        <br />
        커뮤니티가 지속시켜요. 이제 귀찮음은 없어요 🌿
      </p>

      <div className="hero-actions">
        <button
          type="button"
          className="btn-primary"
          onClick={() => window.alert(BETA_COMING_SOON_ALERT)}
        >
          🍎 베타 사전등록 무료로 시작
        </button>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="num">3탭</div>
          <div className="label">식단 기록 완료</div>
        </div>
        <div className="hero-stat">
          <div className="num">87%</div>
          <div className="label">개발 완료</div>
        </div>
        <div className="hero-stat">
          <div className="num">2종</div>
          <div className="label">공공데이터 결합</div>
        </div>
      </div>
    </section>
  );
}
