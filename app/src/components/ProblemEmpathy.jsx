import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const lines = [
  { text: "매번 입력하다 지치면, 그만두게 돼요.", tone: "default" },
  { text: "외식하는 날엔, 식단은 잠깐 공백이 되고.", tone: "soft" },
  { text: "칼로리 숫자는 보이는데, 다음에 뭘 먹을지는 안 보여요.", tone: "default" },
  { text: "앱은 켜는데, 정작 선택의 순간엔 여전히 혼자예요.", tone: "emphasis" },
];

/**
 * Typography-led scene: each line is a scroll "beat" with distinct weight.
 */
export default function ProblemEmpathy() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section className="scene-empathy py-20 md:py-28 px-4 md:px-6" aria-labelledby="empathy-heading">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 id="empathy-heading" className="sr-only">
            식단 관리의 어려움
          </h2>
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-2xl md:text-3xl text-[var(--text-primary)] leading-snug font-medium"
            >
              {line.text}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="scene-empathy relative overflow-hidden py-20 md:py-28" aria-labelledby="empathy-heading">
      <div
        className="pointer-events-none absolute top-0 right-0 w-[min(80vw,520px)] h-[min(80vw,520px)] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(127,176,105,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <h2 id="empathy-heading" className="sr-only">
        식단 관리의 어려움
      </h2>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {lines.map((line, i) => (
          <EmpathyBeat key={i} line={line} index={i} beatNum={String(i + 1).padStart(2, "0")} />
        ))}
      </div>
    </section>
  );
}

function EmpathyBeat({ line, index, beatNum }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -15% 0px", amount: 0.45 });

  const sizeClass =
    line.tone === "emphasis"
      ? "text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-semibold text-[var(--accent-forest)]"
      : line.tone === "soft"
      ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-medium text-[var(--text-secondary)]"
      : "text-2xl sm:text-3xl md:text-4xl lg:text-[2.95rem] font-medium text-[var(--text-primary)]";

  return (
    <div
      ref={ref}
      className="min-h-[min(55vh,520px)] md:min-h-[min(60vh,560px)] grid md:grid-cols-[minmax(4rem,5.5rem)_1fr] gap-6 md:gap-10 items-center py-16 md:py-20 border-b border-[var(--accent-forest)]/[0.07] last:border-0"
    >
      <div className="hidden md:flex flex-col items-center gap-4 pt-1 self-stretch">
        <span
          className="text-[2.75rem] lg:text-[3.25rem] font-light tabular-nums text-[var(--accent-leaf)]/22 leading-none select-none"
          aria-hidden
        >
          {beatNum}
        </span>
        <span className="w-px grow min-h-[4rem] max-h-[8rem] bg-gradient-to-b from-[var(--accent-leaf)]/40 to-transparent" aria-hidden />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 48, filter: "blur(8px)" }
        }
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
        className={`${sizeClass} leading-[1.22] tracking-[-0.02em] text-balance max-w-[22ch] md:max-w-[32ch] md:border-l md:border-[var(--accent-leaf)]/12 md:pl-10`}
      >
        <span className="md:hidden text-[10px] font-bold text-[var(--accent-leaf)]/50 tracking-[0.2em] uppercase block mb-3">
          {beatNum}
        </span>
        {line.text}
      </motion.p>
    </div>
  );
}
