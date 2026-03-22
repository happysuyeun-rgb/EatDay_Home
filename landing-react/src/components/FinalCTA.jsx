import { useRef } from "react";
import ColiAsset from "./ColiAsset";
import { motion, useInView } from "framer-motion";

const chips = ["AI 식단 기록", "맛집 지도", "일일 리포트"];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-4 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Soft background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(100%,600px)] h-64 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(74,124,89,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-[var(--text-primary)] mb-4 leading-[1.35]"
        >
          건강한 습관은 거창한 결심보다,
          <br />
          가벼운 기록에서 시작됩니다.
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-[var(--text-secondary)] text-base md:text-lg mb-8"
        >
          오늘 식단부터, 잇데이로 부담 없이 시작해보세요.
        </motion.p>

        {/* Product chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {chips.map((chip, i) => (
            <span
              key={chip}
              className="text-xs font-medium text-[var(--text-tertiary)] bg-oat/60 px-4 py-2 rounded-full border border-[var(--border)]"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTA + optional Coli */}
        <div className="flex flex-col items-center gap-6">
          <motion.a
            href="https://eatday.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-[var(--accent-leaf)] text-white font-semibold text-lg hover:shadow-[0_8px_28px_rgba(74,124,89,0.25)] transition-shadow duration-300"
          >
            무료로 시작하기
          </motion.a>

          {/* Subtle Coli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="w-10 h-10 rounded-full bg-[var(--accent-lime)]/15 flex items-center justify-center"
          >
            <ColiAsset size="sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
