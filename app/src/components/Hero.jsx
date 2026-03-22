import { motion } from "framer-motion";
import ColiAsset from "./ColiAsset";

const headlineLines = ["기록은 가볍게,", "식단 관리는 더 똑똑하게"];
const chips = [
  { label: "오늘 1,240 kcal", delay: 0.55, pos: { top: "4%", right: "0%" } },
  { label: "단백질 보완 제안", delay: 0.7, pos: { top: "38%", right: "-2%" } },
  { label: "근처 고단백 맛집 3곳", delay: 0.85, pos: { bottom: "28%", right: "2%" } },
  { label: "일일 리포트 준비됨", delay: 1, pos: { bottom: "6%", left: "-4%" } },
];

export default function Hero() {
  return (
    <section
      className="relative scene-hero-glow pt-28 pb-24 md:pt-36 md:pb-32 px-4 md:px-6 overflow-hidden min-h-[min(100vh,920px)] flex flex-col justify-center"
      aria-labelledby="hero-headline"
    >
      {/* Depth: soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(26,26,26,0.03) 100%)",
        }}
        aria-hidden
      />

      <div
        className="absolute inset-x-0 bottom-0 h-48 md:h-56 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--bg-oat) 0%, rgba(245,243,239,0.92) 35%, rgba(250,249,247,0.4) 70%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-10 items-center relative z-10 w-full">
        {/* Copy — editorial scale */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs md:text-sm font-semibold text-[var(--accent-leaf)] mb-5 tracking-[0.12em] uppercase"
          >
            AI 식단 · 실행 피드백 · 맛집 지도
          </motion.p>

          <h1
            id="hero-headline"
            className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)] mb-7 text-balance"
          >
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.06 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-[26rem] text-balance"
          >
            오늘 먹은 것부터, 다음 한 끼 선택까지. 잇데이가 흐름을 잇습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://eatday.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-[var(--accent-leaf)] text-white font-semibold text-base shadow-[0_16px_40px_rgba(74,124,89,0.28)] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(74,124,89,0.34)] transition-all duration-300 ease-out"
            >
              무료로 시작하기
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-14 px-6 text-[var(--accent-forest)] font-semibold border-b-2 border-[var(--accent-leaf)]/30 hover:border-[var(--accent-leaf)] transition-colors pb-0.5"
            >
              기능 살펴보기
            </a>
          </motion.div>
        </div>

        {/* Product stack — larger, layered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 min-h-[400px] sm:min-h-[440px] lg:min-h-[520px]"
        >
          {/* Back plane */}
          <div
            className="absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--accent-leaf)]/8 via-transparent to-[var(--accent-blush)]/40 blur-sm"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[1.75rem] bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-[var(--shadow-lift)] border border-black/[0.06] ring-1 ring-white/60"
          >
            <div className="rounded-2xl bg-gradient-to-b from-oat to-mist/80 p-6 md:p-7 min-h-[280px] md:min-h-[340px] flex flex-col border border-[var(--border)]">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.14em]">
                    오늘의 식단
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">2,000 kcal 목표</p>
                </div>
                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/80 border border-[var(--border)] text-[var(--accent-leaf)]">
                  실시간
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent-leaf)] tracking-tight tabular-nums">
                1,240
              </div>
              <p className="text-sm text-[var(--text-tertiary)] mb-6">kcal 기록됨</p>
              <div className="space-y-3 mb-6 flex-1">
                {[
                  { label: "탄수화물", pct: 45, color: "bg-[var(--accent-lime)]" },
                  { label: "단백질", pct: 28, color: "bg-[var(--accent-leaf)]" },
                  { label: "지방", pct: 27, color: "bg-amber-400/80" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.07, duration: 0.45 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xs font-medium text-[var(--text-secondary)] w-[4.5rem] shrink-0">
                      {m.label}
                    </span>
                    <div className="flex-1 h-2.5 rounded-full bg-white/90 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full rounded-full ${m.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${m.pct}%` }}
                        transition={{ delay: 0.75 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[var(--text-tertiary)] w-8 text-right tabular-nums">
                      {m.pct}%
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-black/[0.06]">
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  아침 현미밥 · 점심 샐러드 · 저녁 포케
                </p>
              </div>
            </div>
          </motion.div>

          {/* Overlap card */}
          <motion.div
            initial={{ opacity: 0, y: 24, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.5, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-8 w-[min(200px,46vw)] rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/[0.05] z-10"
          >
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-lime)]/35 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate text-[var(--text-primary)]">닭가슴살 샐러드</p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">420 kcal · 방금 기록</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.45 }}
            className="absolute -top-1 -right-1 md:top-4 md:right-2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-md border border-[var(--border)] flex items-center justify-center z-20"
          >
            <ColiAsset size="md" />
          </motion.div>

          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                delay: chip.delay,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                ...(chip.pos.top && { top: chip.pos.top }),
                ...(chip.pos.bottom && { bottom: chip.pos.bottom }),
                ...(chip.pos.right && { right: chip.pos.right }),
                ...(chip.pos.left && { left: chip.pos.left }),
              }}
              className="absolute rounded-2xl px-3.5 py-2 md:px-4 md:py-2.5 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/[0.05] text-xs md:text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap z-30"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 4 + i * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4 + i * 0.15,
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
