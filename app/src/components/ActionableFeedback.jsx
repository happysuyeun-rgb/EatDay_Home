import ColiAsset from "./ColiAsset";
import { motion } from "framer-motion";

export default function ActionableFeedback() {
  return (
    <motion.section
      className="relative py-28 md:py-40 px-4 md:px-6 overflow-hidden scene-feedback"
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >

      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.18em] uppercase"
        >
          AI 피드백
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold mt-5 mb-6 text-[var(--text-primary)] leading-[1.15] tracking-[-0.02em] text-balance"
        >
          숫자 끝이 아니라,
          <br />
          <span className="text-[var(--accent-forest)]">다음 행동까지</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.5 }}
          className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
        >
          "부족해요"에서 멈추지 않고, 뭘 먹을지까지 연결해드려요.
        </motion.p>
      </div>

      {/* Layered panel — center focus, card glow */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="rounded-[1.5rem] border border-[var(--accent-leaf)]/20 bg-gradient-to-b from-mist/60 to-oat/40 p-1 shadow-[0_24px_60px_rgba(45,90,61,0.12)]">
          <div className="rounded-[1.35rem] bg-white/95 backdrop-blur-sm p-7 md:p-10 border border-white/80">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pb-7 border-b border-black/[0.06]"
            >
              <p className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.16em] mb-4">
                오늘 식단 요약
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-base">
                <span className="font-semibold text-[var(--text-primary)]">3끼 · 1,240 kcal</span>
                <span className="text-[var(--text-tertiary)]">탄 45% · 단 28% · 지 27%</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42, duration: 0.45 }}
              className="py-6"
            >
              <p className="text-lg font-semibold text-[var(--text-primary)]">단백질이 조금 부족해요</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="relative rounded-xl bg-[var(--accent-leaf)]/[0.07] border border-[var(--accent-leaf)]/20 border-l-[4px] border-l-[var(--accent-leaf)] p-5 md:p-6">
                <div className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[var(--accent-leaf)] uppercase tracking-wider mb-2">
                      추천
                    </p>
                    <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed">
                      다음 한 끼는 그릭요거트나 닭가슴살 샐러드로 가볍게 채워보세요
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 }}
                    className="shrink-0 w-11 h-11 rounded-full bg-[var(--accent-lime)]/25 flex items-center justify-center border border-[var(--accent-leaf)]/10"
                  >
                    <ColiAsset size="sm" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-8 pt-6 border-t border-black/[0.06]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                  오늘 균형
                </span>
                <span className="text-sm font-bold text-[var(--accent-leaf)]">보완 필요</span>
              </div>
              <div className="h-2 rounded-full bg-oat overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ delay: 0.88, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent-lime)]/80 to-[var(--accent-leaf)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
