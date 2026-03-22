import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const feedCards = [
  {
    id: "a",
    meal: "점심 닭가슴살 샐러드",
    kcal: "420kcal",
    likes: 12,
    comments: 3,
    thumb: "bg-[var(--accent-lime)]/40",
    featured: true,
  },
  {
    id: "b",
    meal: "저녁 포케",
    kcal: "580kcal",
    likes: 8,
    comments: 1,
    thumb: "bg-amber-200/60",
    featured: false,
  },
  {
    id: "c",
    meal: "아침 그릭요거트",
    kcal: "280kcal",
    likes: 15,
    comments: 5,
    thumb: "bg-[var(--accent-blush)]",
    featured: false,
  },
];

export default function CommunityReport() {
  const [reportTab, setReportTab] = useState("daily");

  return (
    <section
      id="community"
      className="relative py-28 md:py-40 px-4 md:px-6 overflow-hidden scene-community"
    >
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-[min(50vw,400px)] h-[min(50vw,400px)] -translate-y-1/2 opacity-25 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,222,213,0.9) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.18em] uppercase mb-6"
          >
            커뮤니티 · 리포트
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[var(--text-primary)] leading-[1.12] tracking-[-0.02em] text-balance"
          >
            혼자 기록하면 끊기기 쉽고,
            <br />
            <span className="text-[var(--text-secondary)]">함께 보면 조금 더 오래 갑니다</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-8 text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed"
          >
            식단을 공유하고, 일일 리포트로 내 흐름을 확인해보세요.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          {/* Feed — list rhythm, not stacked white cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="space-y-0 border-t border-black/[0.08]"
          >
            <p className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.16em] py-4">
              커뮤니티 피드
            </p>
            {feedCards.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                className="group flex gap-4 py-5 border-b border-black/[0.08] hover:bg-black/[0.02] -mx-2 px-2 rounded-xl transition-colors cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-xl shrink-0 ${item.thumb} ${
                    item.featured ? "ring-2 ring-[var(--accent-leaf)]/35" : ""
                  }`}
                />
                <div className="min-w-0 flex-1 pt-0.5">
                  {item.featured && (
                    <span className="inline-block text-[10px] font-bold text-[var(--accent-leaf)] uppercase tracking-wider mb-1.5">
                      오늘의 인기
                    </span>
                  )}
                  <p className="font-semibold text-[var(--text-primary)]">{item.meal}</p>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1">
                    {item.kcal} · 좋아요 {item.likes} · 댓글 {item.comments}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Report — single framed surface */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] p-6 md:p-8 bg-[var(--accent-forest)] text-white shadow-[0_28px_70px_rgba(45,90,61,0.25)]"
          >
            <p className="text-[11px] font-bold text-white/60 uppercase tracking-[0.18em] mb-6">
              리포트
            </p>

            <div className="flex gap-2 mb-8" role="tablist">
              {["daily", "weekly"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={reportTab === tab}
                  onClick={() => setReportTab(tab)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    reportTab === tab
                      ? "bg-white text-[var(--accent-forest)] shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab === "daily" ? "오늘" : "이번 주"}
                </button>
              ))}
            </div>

            {reportTab === "daily" ? (
              <DailyReportView />
            ) : (
              <WeeklyReportView />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DailyReportView() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-white/55 mb-2 uppercase tracking-wider font-semibold">오늘 균형</p>
        <CountUp value={92} suffix="%" delay={0.35} light />
        <p className="text-sm text-white/85 mt-4 leading-relaxed">
          단백질 섭취가 목표의 92%예요. 저녁에 가볍게 보충하면 좋아요.
        </p>
      </div>
      <div className="space-y-3 pt-2">
        {[
          { label: "탄수화물", pct: 88, color: "bg-[var(--accent-lime)]" },
          { label: "단백질", pct: 92, color: "bg-white" },
          { label: "지방", pct: 75, color: "bg-amber-300/90" },
        ].map((m, i) => (
          <div key={m.label} className="flex items-center gap-3">
            <span className="text-xs text-white/70 w-14 font-medium">{m.label}</span>
            <div className="flex-1 h-2 rounded-full bg-white/15 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.pct}%` }}
                transition={{ delay: 0.45 + i * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full rounded-full ${m.color}`}
              />
            </div>
            <span className="text-xs text-white/60 w-8 text-right tabular-nums">{m.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyReportView() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-white/55 mb-2 uppercase tracking-wider font-semibold">이번 주 기록</p>
        <CountUp value={5} suffix="일" delay={0.35} light />
        <p className="text-sm text-white/85 mt-4 leading-relaxed">
          목표 7일 중 5일 기록했어요. 꾸준히 잘 이어가고 있어요.
        </p>
      </div>
      <div className="rounded-xl bg-white/10 border border-white/15 p-4">
        <p className="text-xs text-white/55 mb-3 uppercase tracking-wider font-semibold">주간 트렌드</p>
        <div className="h-14 flex items-end gap-1">
          {[72, 88, 65, 95, 92, 78, 0].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.5 }}
              className="flex-1 min-w-[6px] rounded-t bg-white/35"
            />
          ))}
        </div>
        <p className="text-[10px] text-white/45 mt-2 font-medium">월 화 수 목 금 토 일</p>
      </div>
    </div>
  );
}

function CountUp({ value, suffix = "", delay = 0, light = false }) {
  const [display, setDisplay] = useState(0);
  const duration = 800;

  useEffect(() => {
    const startAt = Date.now() + delay * 1000;
    let raf;

    const tick = () => {
      const elapsed = Math.max(0, Date.now() - startAt);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={`text-3xl md:text-4xl font-bold tabular-nums ${light ? "text-white" : "text-[var(--accent-leaf)]"}`}
    >
      {display}
      {suffix}
    </motion.span>
  );
}
