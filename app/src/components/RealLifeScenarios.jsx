import { motion } from "framer-motion";

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
  return (
    <section
      className="relative py-28 md:py-36 px-4 md:px-6 overflow-hidden scene-scenarios"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.2em] uppercase mb-6 text-center"
        >
          사용 맥락
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-center mb-5 text-[var(--text-primary)] tracking-[-0.02em] text-balance max-w-3xl mx-auto leading-[1.12]"
        >
          이런 상황에서
          <br />
          <span className="text-[var(--accent-forest)]">쓰고 있어요</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-lg text-[var(--text-secondary)] text-center mb-14 md:mb-16 max-w-lg mx-auto"
        >
          익숙한 일상 속에서 잇데이를 어떻게 쓰는지.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {scenarios.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.07,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group rounded-2xl p-6 md:p-7 bg-gradient-to-b from-sand/80 to-oat/40 border border-black/[0.06] hover:border-[var(--accent-leaf)]/25 hover:shadow-[0_20px_50px_rgba(74,124,89,0.1)] transition-all duration-300 cursor-default flex flex-col min-h-[280px]"
            >
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                {s.situation}
              </p>

              <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-black/[0.06] p-4 mt-auto shadow-sm group-hover:bg-white transition-colors">
                <MiniOverlay type={s.overlay} label={s.overlayLabel} />
              </div>

              <a
                href="https://eatday.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm font-semibold text-[var(--accent-leaf)] inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                시작하기
                <span aria-hidden>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniOverlay({ type, label }) {
  if (type === "map") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent-leaf)]/20 flex items-center justify-center shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-leaf)]" />
        </div>
        <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">{label}</p>
      </div>
    );
  }
  if (type === "search") {
    return (
      <div className="space-y-2">
        <div className="h-2 rounded-md bg-black/[0.06] w-4/5" />
        <p className="text-sm font-semibold text-[var(--accent-leaf)]">{label}</p>
      </div>
    );
  }
  if (type === "macro") {
    return (
      <div className="space-y-2">
        <div className="h-2.5 rounded-full bg-oat overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "68%" }}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="h-full rounded-full bg-[var(--accent-leaf)]"
          />
        </div>
        <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
      </div>
    );
  }
  if (type === "menu") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent-lime)]/35 shrink-0" />
        <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">{label}</p>
      </div>
    );
  }
  return <p className="text-sm font-medium">{label}</p>;
}
