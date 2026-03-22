import { motion } from "framer-motion";
import ColiAsset from "./ColiAsset";

const headlineLines = ["기록은 가볍게,", "식단 관리는 더 똑똑하게"];
const chips = [
  { label: "오늘 1,240 kcal", delay: 0.6, pos: { top: "6%", right: "2%" } },
  { label: "단백질 부족", delay: 0.8, pos: { top: "50%", right: "4%" } },
  { label: "근처 고단백 맛집 3곳", delay: 1, pos: { bottom: "10%", right: "6%" } },
];

export default function Hero() {

  return (
    <section
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Soft gradient fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-oat)] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left: Copy */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[var(--accent-leaf)] mb-4 tracking-wide"
          >
            AI 식단 분석부터 맛집 지도까지, 잇데이 하나로
          </motion.p>

          <h1
            id="hero-headline"
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-[var(--text-primary)] mb-6"
          >
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 + i * 0.12,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
          >
            오늘 먹은 것부터, 다음 한 끼 선택까지.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://eatday.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-[var(--accent-leaf)] text-white font-semibold hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(74,124,89,0.28)] transition-all duration-300 ease-out"
            >
              무료로 시작하기
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 px-6 text-[var(--accent-leaf)] font-medium hover:underline underline-offset-4 transition-colors"
            >
              기능 살펴보기
            </a>
          </motion.div>
        </div>

        {/* Right: Layered dashboard + chips + Coli */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative order-1 md:order-2 min-h-[320px] md:min-h-[380px]"
        >
          {/* Card 1 - Main dashboard (back layer) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative rounded-3xl bg-white p-6 shadow-[var(--shadow)] border border-[var(--border)] z-0"
          >
            <div className="aspect-[4/3] min-h-[200px] rounded-2xl bg-oat p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider">
                  오늘의 식단
                </span>
                <span className="text-xs text-[var(--text-tertiary)]">2,000 kcal 목표</span>
              </div>
              <div className="text-3xl font-bold text-[var(--accent-leaf)] mb-1">1,240</div>
              <p className="text-xs text-[var(--text-tertiary)] mb-4">kcal 기록됨</p>
              <div className="space-y-2.5 mb-4">
                {[
                  { label: "탄수화물", pct: 45, color: "bg-[var(--accent-lime)]" },
                  { label: "단백질", pct: 28, color: "bg-[var(--accent-leaf)]" },
                  { label: "지방", pct: 27, color: "bg-amber-400/70" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-xs text-[var(--text-secondary)] w-16">{m.label}</span>
                    <div className="flex-1 h-2 rounded-full bg-white overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${m.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${m.pct}%` }}
                        transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
                      />
                    </div>
                    <span className="text-xs text-[var(--text-tertiary)] w-6">{m.pct}%</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pt-3 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--text-tertiary)]">
                  아침 현미밥 · 점심 샐러드 · 저녁 포케
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Small meal card (overlapping, front) */}
          <motion.div
            initial={{ opacity: 0, y: 16, x: 16 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 md:-left-6 w-[140px] rounded-2xl bg-white p-3 shadow-[var(--shadow-hover)] border border-[var(--border)] z-10"
          >
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-lime)]/30 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-medium truncate">닭가슴살 샐러드</p>
                <p className="text-[10px] text-[var(--text-tertiary)]">420 kcal</p>
              </div>
            </div>
          </motion.div>

          {/* Coli - subtle, near card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="absolute -top-2 -right-2 md:top-2 md:right-4 w-12 h-12 rounded-full bg-[var(--accent-lime)]/20 flex items-center justify-center z-20"
          >
            <ColiAsset size="md" />
          </motion.div>

          {/* Floating chips */}
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                opacity: { delay: chip.delay, duration: 0.4 },
                x: { delay: chip.delay, duration: 0.4 },
              }}
              style={{
                ...(chip.pos.top && { top: chip.pos.top }),
                ...(chip.pos.bottom && { bottom: chip.pos.bottom }),
                ...(chip.pos.right && { right: chip.pos.right }),
                ...(chip.pos.left && { left: chip.pos.left }),
              }}
              className="absolute rounded-xl px-3 py-2 md:px-4 md:py-2.5 bg-white/95 backdrop-blur-sm shadow-[var(--shadow)] border border-[var(--border)] text-xs md:text-sm font-medium whitespace-nowrap z-30"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2 + i * 0.2,
                }}
                className="block"
              >
                {chip.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
