import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ColiAsset from "./ColiAsset";

const hints = [
  { label: "기록 안내", delay: 0.5 },
  { label: "피드백 안내", delay: 0.7 },
  { label: "리포트 안내", delay: 0.9 },
];

export default function ColiWarmth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
      aria-labelledby="coli-heading"
    >
      {/* Soft spotlight gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,480px)] h-[min(90vw,320px)] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(127,176,105,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Coli visual with subtle float */}
        <motion.div
          className="relative px-4 py-6 md:px-8 md:py-8 mb-10"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -4, 0],
                }
              : {}
          }
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-[var(--accent-lime)]/15 flex items-center justify-center overflow-hidden border border-[var(--accent-leaf)]/10">
            <ColiAsset size="lg" />
          </div>

          {/* Tiny UI hints around character */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: hints[0].delay, duration: 0.35 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-[10px] font-medium text-[var(--text-tertiary)] bg-white/90 px-2 py-1 rounded-md border border-[var(--border)] shadow-sm whitespace-nowrap -mt-1"
          >
            기록 안내
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: hints[1].delay, duration: 0.35 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-[10px] font-medium text-[var(--text-tertiary)] bg-white/90 px-2 py-1 rounded-md border border-[var(--border)] shadow-sm whitespace-nowrap hidden sm:inline"
          >
            피드백 안내
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: hints[2].delay, duration: 0.35 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-[10px] font-medium text-[var(--text-tertiary)] bg-white/90 px-2 py-1 rounded-md border border-[var(--border)] shadow-sm whitespace-nowrap mt-1"
          >
            리포트 안내
          </motion.span>
        </motion.div>

        <motion.h2
          id="coli-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-3"
        >
          콜리는 잇데이의 기록 파트너입니다
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-md mx-auto"
        >
          필요한 순간, 조금 더 편안하게 식단 관리를 이어갈 수 있도록 돕습니다.
        </motion.p>
      </div>
    </section>
  );
}
