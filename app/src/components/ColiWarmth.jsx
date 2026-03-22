import { motion } from "framer-motion";
import ColiAsset from "./ColiAsset";

/**
 * Typography-led interlude: copy leads, Coli is a quiet footnote.
 */
export default function ColiWarmth() {
  return (
    <section
      className="relative py-28 md:py-36 px-4 md:px-6 overflow-hidden scene-coli"
      aria-labelledby="coli-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(127,176,105,0.1) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-[var(--text-primary)] leading-[1.35] tracking-[-0.02em] text-balance text-center px-2"
        >
          기록과 피드백, 리포트까지.
          <br />
          <span className="text-[var(--text-secondary)]">필요한 순간마다 이어집니다.</span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col items-center mt-14 md:mt-16"
        >
          <div className="flex items-center gap-3 text-[var(--text-tertiary)] mb-4">
            <span className="h-px w-8 bg-[var(--text-tertiary)]/30" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">파트너</span>
            <span className="h-px w-8 bg-[var(--text-tertiary)]/30" aria-hidden />
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center justify-center">
            <ColiAsset size="lg" />
          </div>
          <motion.h2
            id="coli-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg font-semibold text-[var(--text-primary)] mt-5"
          >
            콜리는 잇데이의 기록 파트너입니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="text-sm md:text-base text-[var(--text-secondary)] mt-3 max-w-md text-center leading-relaxed"
          >
            조금 더 편안하게 식단 관리를 이어갈 수 있도록 돕습니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
