import { useCallback, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const TIERS = [
  {
    cls: "bronze",
    emoji: "🥉",
    name: "브론즈",
    days: "3일 연속 달성",
    perks: ["AI 맞춤 칭찬 메시지", "오늘의 식단 팁 카드", "브론즈 뱃지 획득"],
  },
  {
    cls: "silver",
    emoji: "🥈",
    name: "실버",
    days: "7일 연속 달성",
    perks: ["주간 식단 리포트", "맛집 즐겨찾기 +3 슬롯", "실버 뱃지 획득"],
  },
  {
    cls: "gold",
    emoji: "🥇",
    name: "골드",
    days: "30일 연속 달성",
    perks: [
      "30일 종합 분석 리포트",
      "프리미엄 1개월 무료",
      "커뮤니티 인증 게시글",
      "골드 뱃지 + 특별 테두리",
    ],
  },
];

function spawnGoldParticles(cardEl) {
  if (!cardEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const n = 10;
  for (let i = 0; i < n; i++) {
    const star = document.createElement("span");
    star.className = "reward-gold-particle";
    star.setAttribute("aria-hidden", "true");
    cardEl.appendChild(star);
    const ang = (Math.PI * 2 * i) / n + Math.random() * 0.4;
    const dist = 48 + Math.random() * 48;
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist;
    requestAnimationFrame(() => {
      star.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
      star.style.transform = `translate(${dx}px, ${dy}px)`;
      star.style.opacity = "0";
    });
    window.setTimeout(() => {
      star.remove();
    }, 820);
  }
}

export default function Reward() {
  const revealRef = useReveal();
  const goldRef = useRef(null);
  const [opened, setOpened] = useState(() => new Set());
  const [bouncingCls, setBouncingCls] = useState(null);

  const toggleTier = useCallback((tier) => {
    setBouncingCls(tier.cls);
    window.setTimeout(() => setBouncingCls(null), 400);

    setOpened((prev) => {
      const wasOpen = prev.has(tier.cls);
      const next = new Set(prev);
      if (wasOpen) {
        next.delete(tier.cls);
      } else {
        next.add(tier.cls);
        if (tier.cls === "gold" && goldRef.current) {
          requestAnimationFrame(() => spawnGoldParticles(goldRef.current));
        }
      }
      return next;
    });
  }, []);

  return (
    <section ref={revealRef} className="section section-reward reveal">
      <div className="section-tag">🎁 연속기록 보상박스</div>
      <h2 className="section-title reward-title-line">
        기록할수록 쌓이는 보상 🎉
      </h2>
      <p className="section-sub">
        의무감 말고 기대감으로 — 상자를 열어보고 싶어서 기록하게 돼요
      </p>
      <div className="reward-grid">
        {TIERS.map((t) => (
          <div
            key={t.cls}
            ref={t.cls === "gold" ? goldRef : undefined}
            role="button"
            tabIndex={0}
            aria-pressed={opened.has(t.cls)}
            aria-label={`${t.name} 보상 — ${opened.has(t.cls) ? "열림" : "닫힘"}`}
            className={`reward-card ${t.cls}${opened.has(t.cls) ? " opened" : ""}${
              bouncingCls === t.cls ? " reward-bouncing" : ""
            }`}
            onClick={() => toggleTier(t)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleTier(t);
              }
            }}
          >
            <div className="reward-emoji">{t.emoji}</div>
            <div className="reward-name">{t.name}</div>
            <div className="reward-days">{t.days}</div>
            <ul className="reward-perks">
              {t.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
