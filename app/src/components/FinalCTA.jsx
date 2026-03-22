import ColiAsset from "./ColiAsset";
import { motion } from "framer-motion";

const chips = ["AI 식단 기록", "맛집 지도", "일일 리포트"];

export default function FinalCTA() {
  return (
    <section
      className="relative scene-cta py-36 md:py-52 px-4 md:px-6 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(74,124,89,0.12) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-[var(--text-primary)] mb-8 leading-[1.12] tracking-[-0.03em] text-balance"
        >
          건강한 습관은 거창한 결심보다,
          <br />
          <span className="text-[var(--accent-forest)]">가벼운 기록</span>에서 시작됩니다.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-xl mx-auto leading-relaxed"
        >
          오늘 식단부터, 잇데이로 부담 없이 시작해보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-xs font-semibold text-[var(--accent-forest)]/80 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--accent-leaf)]/15 shadow-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            href="https://eatday.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center h-16 px-14 rounded-2xl bg-[var(--accent-leaf)] text-white font-bold text-lg shadow-[0_20px_50px_rgba(74,124,89,0.35)] hover:shadow-[0_24px_56px_rgba(74,124,89,0.42)] transition-shadow duration-300"
          >
            무료로 시작하기
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-2 text-[var(--text-tertiary)]"
          >
            <div className="w-9 h-9 rounded-full bg-white/80 border border-black/[0.06] flex items-center justify-center shadow-sm">
              <ColiAsset size="sm" />
            </div>
            <span className="text-xs font-medium">함께 이어가요</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
