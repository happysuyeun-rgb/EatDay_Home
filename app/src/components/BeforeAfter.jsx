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
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px 240px 0px",
    amount: 0,
  });

  return (
    <motion.section
      ref={ref}
      id="features"
      className="relative py-28 md:py-40 px-4 md:px-6 overflow-hidden scene-features"
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Editorial band */}
      <div className="max-w-[1200px] mx-auto mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-[10px] md:text-xs font-bold text-[var(--accent-leaf)] tracking-[0.22em] uppercase mb-6"
        >
          잇데이가 다른 이유
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[var(--text-primary)] leading-[1.12] tracking-[-0.03em] max-w-3xl text-balance"
        >
          같은 목표,
          <br />
          <span className="text-[var(--text-secondary)] font-semibold">다른 방식</span>으로 이어집니다.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
        >
          기록의 부담은 줄이고, 선택의 단서는 늘립니다.
        </motion.p>
      </div>

      {/* Comparison: not twin white cards — sand slab vs leaf glass */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="rounded-[1.5rem] p-8 md:p-10 bg-sand/90 border border-black/[0.06] relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.03) 100%)",
            }}
            aria-hidden
          />
          <p className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.18em] mb-8 relative">
            기존 식단 앱
          </p>
          <ul className="space-y-5 relative">
            {beforeItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-[var(--text-secondary)]"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]/50 shrink-0" />
                <span className="text-base md:text-lg line-through decoration-[var(--text-tertiary)]/50 decoration-2 leading-snug">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="flex flex-col items-center justify-center py-4 md:py-0"
        >
          <div className="flex flex-col items-center gap-2 text-[var(--accent-leaf)]">
            <motion.span
              animate={isInView ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl font-extralight md:hidden"
            >
              ↓
            </motion.span>
            <span className="hidden md:inline text-3xl font-extralight">→</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
              전환
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="rounded-[1.5rem] p-8 md:p-10 relative overflow-hidden border border-[var(--accent-leaf)]/25 shadow-[0_24px_60px_rgba(74,124,89,0.12)]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(238,242,238,0.98) 100%)",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--accent-lime)]/15 blur-3xl pointer-events-none"
            aria-hidden
          />
          <div className="flex items-center gap-3 mb-8 relative">
            <span className="w-9 h-9 rounded-xl bg-[var(--accent-leaf)] text-white text-sm font-bold flex items-center justify-center">
              E
            </span>
            <p className="text-sm font-bold text-[var(--accent-leaf)] tracking-wide">잇데이</p>
          </div>
          <ul className="space-y-5 relative">
            {afterItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 + i * 0.07, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--accent-leaf)] shrink-0 ring-4 ring-[var(--accent-leaf)]/15" />
                <span
                  className={
                    item.highlight
                      ? "text-base md:text-lg font-semibold text-[var(--text-primary)] leading-snug"
                      : "text-base md:text-lg text-[var(--text-primary)] leading-snug"
                  }
                >
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
