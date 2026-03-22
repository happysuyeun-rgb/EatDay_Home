import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const searchPhrase = "닭가슴살 샐러드";
const result = {
  name: "닭가슴살 샐러드",
  kcal: 420,
  carb: 12,
  protein: 42,
  fat: 18,
  serving: "1인분",
};
const dailyAccumulated = { current: 1240, goal: 2000 };

export default function AIMealLogging() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px 240px 0px", amount: 0 });
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let mounted = true;

    const runSequence = async () => {
      if (reduceMotion) {
        setTyped(searchPhrase);
        setPhase(3);
        return;
      }
      await new Promise((r) => setTimeout(r, 500));
      for (let i = 0; i <= searchPhrase.length && mounted; i++) {
        setTyped(searchPhrase.slice(0, i));
        await new Promise((r) => setTimeout(r, 70 + Math.random() * 35));
      }
      if (!mounted) return;
      await new Promise((r) => setTimeout(r, 350));
      if (!mounted) return;
      setPhase(1);
      await new Promise((r) => setTimeout(r, 500));
      if (!mounted) return;
      setPhase(2);
      await new Promise((r) => setTimeout(r, 1000));
      if (!mounted) return;
      setPhase(3);
    };

    runSequence();
    return () => {
      mounted = false;
    };
  }, [isInView, reduceMotion]);

  return (
    <motion.section
      ref={ref}
      className="relative py-28 md:py-40 px-4 md:px-6 overflow-hidden scene-ai-meal"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px 0px 0px 0px", amount: 0.06 }}
      transition={{ duration: 0.88, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.35fr_0.65fr] gap-14 lg:gap-20 items-center">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.18em] uppercase"
          >
            식단 기록
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold mt-5 mb-8 text-[var(--text-primary)] leading-[1.15] tracking-[-0.02em] text-balance"
          >
            검색 한 번이면
            <br />
            <span className="text-[var(--accent-forest)]">칼로리·영양소가 채워져요</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-md"
          >
            음식 이름만 치면 끝입니다. g 단위 입력은 필요 없어요.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 h-px w-24 bg-[var(--accent-leaf)]/30"
            aria-hidden
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[480px] lg:max-w-none mx-auto lg:mx-0 min-h-[420px] md:min-h-[500px]"
        >
          <div
            className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[var(--accent-leaf)]/10 to-transparent opacity-80 blur-xl pointer-events-none"
            aria-hidden
          />
          <div className="relative rounded-[1.5rem] bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-[var(--shadow-lift)] border border-black/[0.06] ring-1 ring-white/50">
            <div className="relative rounded-xl bg-mist/80 border border-[var(--border)] px-4 py-4 mb-5">
              <span className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                먹은 음식 검색
              </span>
              <p className="pt-3 text-base sm:text-lg text-[var(--text-primary)] font-medium min-h-[28px]">
                {typed}
                {phase === 0 && isInView && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-[var(--accent-leaf)] ml-1 align-middle"
                  />
                )}
              </p>
            </div>

            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-gradient-to-b from-oat to-cream/80 border border-[var(--border)] p-5 mb-5"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl bg-[var(--accent-lime)]/35 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-base text-[var(--text-primary)]">{result.name}</p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">{result.serving}</p>
                    <p className="text-2xl font-bold text-[var(--accent-leaf)] mt-3 tabular-nums">
                      {result.kcal} kcal
                    </p>
                  </div>
                  {phase >= 3 && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="shrink-0 text-xs font-bold text-[var(--accent-leaf)] bg-[var(--accent-leaf)]/12 px-3 py-1.5 rounded-lg self-start"
                    >
                      저장됨
                    </motion.span>
                  )}
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "탄수화물", value: result.carb, unit: "g", pct: 35, color: "bg-[var(--accent-lime)]" },
                    { label: "단백질", value: result.protein, unit: "g", pct: 85, color: "bg-[var(--accent-leaf)]" },
                    { label: "지방", value: result.fat, unit: "g", pct: 45, color: "bg-amber-400/80" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xs font-medium text-[var(--text-secondary)] w-14 shrink-0">
                        {m.label}
                      </span>
                      <div className="flex-1 h-2.5 rounded-full bg-white overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={phase >= 2 ? { width: `${m.pct}%` } : { width: 0 }}
                          transition={{ delay: 0.15 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full ${m.color}`}
                        />
                      </div>
                      <span className="text-xs font-medium text-[var(--text-tertiary)] w-10 text-right tabular-nums">
                        {m.value}
                        {m.unit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="rounded-xl border border-[var(--border)] px-5 py-4 flex items-center justify-between bg-white/60"
              >
                <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                  오늘 기록
                </span>
                <span className="text-base font-bold text-[var(--text-primary)] tabular-nums">
                  <span className="text-[var(--accent-leaf)]">{dailyAccumulated.current.toLocaleString()}</span>
                  <span className="text-[var(--text-tertiary)] font-normal mx-1.5">/</span>
                  {dailyAccumulated.goal.toLocaleString()} kcal
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
