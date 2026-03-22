import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.15 });
  const [reportTab, setReportTab] = useState("daily");

  return (
    <section ref={ref} id="community" className="py-24 md:py-32 bg-oat px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4"
          >
            혼자 기록하면 끊기기 쉽고,
            <br className="sm:hidden" />
            함께 보면 조금 더 오래 갑니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-xl mx-auto"
          >
            식단을 공유하고, 일일 리포트로 내 흐름을 확인해보세요.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Community feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-4">
              커뮤니티
            </h3>
            {feedCards.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex gap-3 p-4 rounded-xl bg-white border border-[var(--border)] shadow-[var(--shadow)] cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-xl shrink-0 ${item.thumb} ${
                    item.featured ? "ring-2 ring-[var(--accent-leaf)]/40" : ""
                  }`}
                />
                <div className="min-w-0 flex-1">
                  {item.featured && (
                    <span className="inline-block text-[10px] font-semibold text-[var(--accent-leaf)] bg-[var(--accent-leaf)]/10 px-2 py-0.5 rounded-md mb-1.5">
                      오늘의 인기
                    </span>
                  )}
                  <p className="font-medium text-sm text-[var(--text-primary)] truncate">
                    {item.meal}
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                    {item.kcal} · 좋아요 {item.likes} · 댓글 {item.comments}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Report */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="rounded-2xl bg-white p-6 shadow-[var(--shadow)] border border-[var(--border)]"
          >
            <h3 className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-4">
              리포트
            </h3>

            {/* Tab switch */}
            <div className="flex gap-2 mb-6" role="tablist">
              {["daily", "weekly"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={reportTab === tab}
                  onClick={() => setReportTab(tab)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    reportTab === tab
                      ? "bg-[var(--accent-leaf)]/10 text-[var(--accent-leaf)]"
                      : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {tab === "daily" ? "오늘" : "이번 주"}
                </button>
              ))}
            </div>

            {reportTab === "daily" ? (
              <DailyReportView isInView={isInView} />
            ) : (
              <WeeklyReportView isInView={isInView} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DailyReportView({ isInView }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs text-[var(--text-tertiary)] mb-1">오늘 균형</p>
        <CountUp value={92} suffix="%" isInView={isInView} delay={0.4} />
        <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
          단백질 섭취가 목표의 92%예요. 저녁에 가볍게 보충하면 좋아요.
        </p>
      </div>
      <div className="space-y-2">
        {[
          { label: "탄수화물", pct: 88, color: "bg-[var(--accent-lime)]" },
          { label: "단백질", pct: 92, color: "bg-[var(--accent-leaf)]" },
          { label: "지방", pct: 75, color: "bg-amber-400/70" },
        ].map((m, i) => (
          <div key={m.label} className="flex items-center gap-2">
            <span className="text-xs text-[var(--text-secondary)] w-14">{m.label}</span>
            <div className="flex-1 h-2 rounded-full bg-oat overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${m.pct}%` } : { width: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className={`h-full rounded-full ${m.color}`}
              />
            </div>
            <span className="text-xs text-[var(--text-tertiary)] w-8 text-right">{m.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyReportView({ isInView }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs text-[var(--text-tertiary)] mb-1">이번 주 기록</p>
        <CountUp value={5} suffix="일" isInView={isInView} delay={0.4} />
        <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
          목표 7일 중 5일 기록했어요. 꾸준히 잘 이어가고 있어요.
        </p>
      </div>
      <div className="rounded-xl bg-oat/60 p-4 border border-[var(--border)]">
        <p className="text-xs text-[var(--text-tertiary)] mb-3">주간 트렌드</p>
        <div className="h-12 flex items-end gap-1">
          {[72, 88, 65, 95, 92, 78, 0].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${v}%` } : { height: 0 }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
              className="flex-1 min-w-[6px] rounded-t bg-[var(--accent-leaf)]/40"
            />
          ))}
        </div>
        <p className="text-[10px] text-[var(--text-tertiary)] mt-2">월 화 수 목 금 토 일</p>
      </div>
    </div>
  );
}

function CountUp({ value, suffix = "", isInView, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const duration = 800;

  useEffect(() => {
    if (!isInView) return;
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
  }, [isInView, value, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay }}
      className="text-2xl font-bold text-[var(--accent-leaf)]"
    >
      {display}
      {suffix}
    </motion.span>
  );
}
