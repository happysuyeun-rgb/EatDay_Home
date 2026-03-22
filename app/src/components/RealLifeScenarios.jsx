import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
  {
    id: "a",
    title: "회식이 잦은 직장인",
    situation: "내일 회식인데, 오늘 뭘 먹을까",
    overlay: "map",
    overlayLabel: "근처 고단백 맛집 3곳",
  },
  {
    id: "b",
    title: "학식·편의점 위주 대학생",
    situation: "편의점 도시락, 영양소가 궁금해",
    overlay: "search",
    overlayLabel: "닭가슴살 도시락 · 420kcal",
  },
  {
    id: "c",
    title: "단백질 챙기는 운동러",
    situation: "오늘 단백질 부족한데 뭐 먹지",
    overlay: "macro",
    overlayLabel: "단백질 68%",
  },
  {
    id: "d",
    title: "외식 중 흐름 유지",
    situation: "식당 메뉴판 보면서 선택 고민",
    overlay: "menu",
    overlayLabel: "추천: 연어 구이",
  },
];

export default function RealLifeScenarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.1 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-[var(--text-primary)]"
        >
          이런 상황에서 쓰고 있어요
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[var(--text-secondary)] text-center mb-12 max-w-xl mx-auto"
        >
          익숙한 일상 속에서 잇데이를 어떻게 쓰는지.
        </motion.p>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 scrollbar-hide">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.45,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="shrink-0 w-[280px] md:w-auto snap-center rounded-2xl bg-white p-6 shadow-[var(--shadow)] border border-[var(--border)] cursor-default relative overflow-hidden group"
            >
              <h3 className="font-semibold text-[var(--text-primary)] mb-1.5">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                {s.situation}
              </p>

              {/* Mini overlay */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-xl bg-oat/80 border border-[var(--border)] p-3"
              >
                <MiniOverlay type={s.overlay} label={s.overlayLabel} />
              </motion.div>

              <a
                href="https://eatday.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-medium text-[var(--accent-leaf)] hover:underline"
              >
                시작하기 →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniOverlay({ type, label }) {
  if (type === "map") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent-leaf)]/20 flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-leaf)]" />
        </div>
        <p className="text-xs font-medium text-[var(--text-primary)] truncate">
          {label}
        </p>
      </div>
    );
  }
  if (type === "search") {
    return (
      <div className="space-y-1">
        <div className="h-1.5 rounded bg-[var(--border)] w-3/4" />
        <p className="text-xs font-medium text-[var(--accent-leaf)] truncate">
          {label}
        </p>
      </div>
    );
  }
  if (type === "macro") {
    return (
      <div className="space-y-2">
        <div className="h-1.5 rounded-full bg-oat overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "68%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-full rounded-full bg-[var(--accent-leaf)]"
          />
        </div>
        <p className="text-xs font-medium text-[var(--text-primary)]">{label}</p>
      </div>
    );
  }
  if (type === "menu") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-[var(--accent-lime)]/30 shrink-0" />
        <p className="text-xs font-medium text-[var(--text-primary)] truncate">
          {label}
        </p>
      </div>
    );
  }
  return <p className="text-xs">{label}</p>;
}
