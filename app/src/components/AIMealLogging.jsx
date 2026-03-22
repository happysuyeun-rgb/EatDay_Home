import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let mounted = true;

    const runSequence = async () => {
      await new Promise((r) => setTimeout(r, 600));

      for (let i = 0; i <= searchPhrase.length && mounted; i++) {
        setTyped(searchPhrase.slice(0, i));
        await new Promise((r) => setTimeout(r, 80 + Math.random() * 40));
      }
      if (!mounted) return;

      await new Promise((r) => setTimeout(r, 400));
      if (!mounted) return;
      setPhase(1);

      await new Promise((r) => setTimeout(r, 600));
      if (!mounted) return;
      setPhase(2);

      await new Promise((r) => setTimeout(r, 1200));
      if (!mounted) return;
      setPhase(3);
    };

    runSequence();
    return () => { mounted = false; };
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-oat px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-semibold text-[var(--accent-leaf)] tracking-wide"
          >
            식단 기록
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mt-2 mb-6 text-[var(--text-primary)]"
          >
            복잡한 입력 대신,
            <br />
            기록이 바로 남는 방식
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg"
          >
            검색 한 번이면 칼로리와 탄단지가 자동으로 정리됩니다.
          </motion.p>
        </div>

        {/* Right: App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="max-w-[340px] mx-auto w-full"
        >
          <div className="rounded-2xl bg-white p-5 shadow-[var(--shadow)] border border-[var(--border)]">
            {/* Search input */}
            <div className="relative rounded-xl bg-oat border border-[var(--border)] px-4 py-3 mb-4">
              <span className="text-xs text-[var(--text-tertiary)] absolute top-2 left-4">
                먹은 음식 검색
              </span>
              <p className="pt-4 text-sm text-[var(--text-primary)] font-medium min-h-[24px]">
                {typed}
                {phase === 0 && isInView && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-[var(--accent-leaf)] ml-0.5 align-middle"
                  />
                )}
              </p>
            </div>

            {/* Result card — appears after search */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="rounded-xl bg-oat/80 border border-[var(--border)] p-4 mb-4 cursor-default"
              >
                <div className="flex gap-3">
                  <div className="w-14 h-14 rounded-lg bg-[var(--accent-lime)]/30 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">
                      {result.name}
                    </p>
                    <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                      {result.serving}
                    </p>
                    <p className="text-lg font-bold text-[var(--accent-leaf)] mt-2">
                      {result.kcal} kcal
                    </p>
                  </div>
                  {phase >= 3 && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="shrink-0 text-xs font-medium text-[var(--accent-leaf)] bg-[var(--accent-leaf)]/10 px-2.5 py-1 rounded-lg self-start"
                    >
                      저장됨
                    </motion.span>
                  )}
                </div>

                {/* Macro bars */}
                <div className="mt-4 space-y-2.5">
                  {[
                    { label: "탄수화물", value: result.carb, unit: "g", pct: 35, color: "bg-[var(--accent-lime)]" },
                    { label: "단백질", value: result.protein, unit: "g", pct: 85, color: "bg-[var(--accent-leaf)]" },
                    { label: "지방", value: result.fat, unit: "g", pct: 45, color: "bg-amber-400/70" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-xs text-[var(--text-secondary)] w-14 shrink-0">
                        {m.label}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-white overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={phase >= 2 ? { width: `${m.pct}%` } : { width: 0 }}
                          transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                          className={`h-full rounded-full ${m.color}`}
                        />
                      </div>
                      <span className="text-xs text-[var(--text-tertiary)] w-8 text-right">
                        {m.value}{m.unit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Daily summary */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="rounded-xl border border-[var(--border)] px-4 py-3 flex items-center justify-between"
              >
                <span className="text-xs text-[var(--text-tertiary)]">오늘 기록</span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  <span className="text-[var(--accent-leaf)]">
                    {dailyAccumulated.current.toLocaleString()}
                  </span>
                  <span className="text-[var(--text-tertiary)] font-normal mx-1">/</span>
                  {dailyAccumulated.goal.toLocaleString()} kcal
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
