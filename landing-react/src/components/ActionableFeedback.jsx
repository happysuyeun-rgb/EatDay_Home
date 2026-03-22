import { useRef } from "react";
import ColiAsset from "./ColiAsset";
import { motion, useInView } from "framer-motion";

export default function ActionableFeedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-oat px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-semibold text-[var(--accent-leaf)] tracking-wide"
          >
            AI 피드백
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-[var(--text-primary)]"
          >
            분석만이 아니라, 다음 선택까지
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            탄단지 비율과 부족한 영양소를 확인하고, 지금 먹으면 좋은 음식을 추천해드려요.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="rounded-2xl bg-white p-6 md:p-8 shadow-[var(--shadow)] border border-[var(--border)] max-w-lg mx-auto relative"
        >
          {/* 1. Today's summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="pb-6 border-b border-[var(--border)]"
          >
            <p className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
              오늘 식단 요약
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              <span className="text-[var(--text-primary)]">3끼 · 1,240 kcal</span>
              <span className="text-[var(--text-tertiary)]">탄 45% · 단 28% · 지 27%</span>
            </div>
          </motion.div>

          {/* 2. Deficiency */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="py-5"
          >
            <p className="text-sm font-medium text-[var(--text-primary)]">
              단백질이 조금 부족해요
            </p>
          </motion.div>

          {/* 3. Recommendation — expands from deficiency */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isInView ? { opacity: 1, height: "auto" } : {}}
            transition={{ delay: 0.65, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="relative rounded-xl bg-[var(--accent-leaf)]/5 border border-[var(--accent-leaf)]/15 border-l-4 border-l-[var(--accent-leaf)]/50 p-4">
              <div className="flex gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[var(--accent-leaf)] mb-1.5">
                    추천
                  </p>
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                    다음 한 끼는 그릭요거트나 닭가슴살 샐러드로 가볍게 채워보세요
                  </p>
                </div>
                {/* Coli — tiny, supportive */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="shrink-0 w-10 h-10 rounded-full bg-[var(--accent-lime)]/20 flex items-center justify-center"
                >
                  <ColiIcon />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 4. Balance status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.85 }}
            className="mt-6 pt-4 border-t border-[var(--border)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--text-tertiary)]">오늘 균형</span>
              <span className="text-sm font-medium text-[var(--accent-leaf)]">
                보완 필요
              </span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-oat overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "72%" } : { width: 0 }}
                transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="h-full rounded-full bg-[var(--accent-leaf)]/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ColiIcon() {
  return <ColiAsset size="sm" />;
}
