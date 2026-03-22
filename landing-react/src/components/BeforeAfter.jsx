import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const beforeItems = [
  "음식마다 수동 검색",
  "g 단위 직접 입력",
  "추상적인 경고만",
  "외식하면 공백",
];

const afterItems = [
  { text: "검색·사진으로 기록", highlight: true },
  { text: "칼로리·영양소 자동 계산", highlight: true },
  { text: "실행 가능한 다음 선택 제안", highlight: false },
  { text: "근처 맛집·메뉴 컨텍스트", highlight: true },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  /* margin -100px + amount 0.2 조합이 느슨한 뷰에서 교차 관찰이 안 되어 전 구간 opacity 0으로 남는 경우가 있음 */
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px 120px 0px",
    amount: 0.08,
  });

  return (
    <section ref={ref} id="features" className="py-24 md:py-32 px-4 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
            왜 잇데이인가요
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl mx-auto">
            같은 목표, 다른 방식입니다.
          </p>
        </motion.div>

        {/* Transformation container */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch mt-12 md:mt-16">
          {/* Before — friction card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl p-6 md:p-8 bg-sand/60 border border-[var(--border)]"
          >
            <motion.div
              animate={isInView ? { opacity: 0.7 } : { opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-white/20 pointer-events-none"
              aria-hidden
            />
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-6">
              기존 식단 앱
            </h3>
            <ul className="space-y-4 relative z-10">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-[var(--text-secondary)]"
                >
                  <span className="w-5 h-5 rounded-full border border-[var(--text-tertiary)]/40 shrink-0" />
                  <span className="line-through decoration-[var(--text-tertiary)] decoration-2">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Transition arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col items-center justify-center py-2 md:py-0"
          >
            <motion.div
              animate={
                isInView
                  ? { opacity: [0.6, 1, 0.6] }
                  : {}
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-[var(--accent-leaf)]"
            >
              <span className="text-2xl font-light md:hidden">↓</span>
              <span className="hidden md:inline text-2xl font-light">→</span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                전환
              </span>
            </motion.div>
          </motion.div>

          {/* After — EATDAY card */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 24, scale: 0.98 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl p-6 md:p-8 bg-white border-2 border-[var(--accent-leaf)]/30 shadow-[0_0_0_1px_rgba(74,124,89,0.08),0_8px_32px_rgba(74,124,89,0.08)] hover:shadow-[0_0_0_1px_rgba(74,124,89,0.12),0_12px_40px_rgba(74,124,89,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Glow accent */}
            <div
              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--accent-leaf)]/10 to-transparent pointer-events-none -z-10"
              aria-hidden
            />
            <h3 className="text-sm font-bold text-[var(--accent-leaf)] mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[var(--accent-leaf)]/20 flex items-center justify-center text-xs">
                E
              </span>
              잇데이
            </h3>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                  transition={{ delay: 0.45 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--accent-lime)]/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-leaf)]" />
                  </span>
                  <span
                    className={
                      item.highlight
                        ? "text-[var(--text-primary)] font-medium"
                        : "text-[var(--text-primary)]"
                    }
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
