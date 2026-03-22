import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const filters = [
  { id: "저칼로리", label: "저칼로리" },
  { id: "고단백", label: "고단백" },
  { id: "비건", label: "비건" },
];

const restaurants = [
  {
    id: "a",
    name: "포케올데이",
    filter: "고단백",
    distance: "230m",
    top: "26%",
    left: "44%",
    menu: "연어 포케 보울 · 약 450kcal",
  },
  {
    id: "b",
    name: "그린샐러드",
    filter: "저칼로리",
    distance: "180m",
    top: "48%",
    left: "62%",
    menu: "닭가슴살 샐러드 · 약 320kcal",
  },
  {
    id: "c",
    name: "비건키친",
    filter: "비건",
    distance: "410m",
    top: "66%",
    left: "32%",
    menu: "두부볼 · 약 380kcal",
  },
];

export default function RestaurantMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 240px 0px", amount: 0 });
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedId, setSelectedId] = useState("a");

  const selected = restaurants.find((r) => r.id === selectedId) ?? restaurants[0];

  useEffect(() => {
    if (!activeFilter) return;
    const first = restaurants.find((r) => r.filter === activeFilter);
    if (first) setSelectedId(first.id);
  }, [activeFilter]);

  const pinMatches = (r) => !activeFilter || r.filter === activeFilter;

  return (
    <motion.section
      ref={ref}
      id="map"
      className="relative scene-map py-32 md:py-48 px-0 md:px-6 overflow-hidden"
      initial={{ y: 32 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Full-bleed headline */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-0 mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.2em] uppercase mb-6"
        >
          맛집 지도
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-0.03em] max-w-4xl text-balance"
        >
          다이어트는 집 밖에서
          <br className="hidden sm:block" />
          <span className="text-[var(--accent-forest)]">무너지기 쉬우니까</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
        >
          내 주변 저칼로리·고단백 식당을 바로 찾고, 메뉴 정보까지 확인하세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="필터"
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <motion.button
                key={f.id}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveFilter((prev) => (prev === f.id ? null : f.id))}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold border-2 transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--accent-leaf)] text-white border-[var(--accent-leaf)] shadow-[0_8px_24px_rgba(74,124,89,0.3)]"
                    : "bg-white/80 border-black/[0.08] text-[var(--text-secondary)] hover:border-[var(--accent-leaf)]/40 hover:text-[var(--accent-leaf)]"
                }`}
              >
                {f.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Map stage — dominant */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[1.75rem] md:rounded-[2rem] bg-[#1a1f1c] p-2 md:p-3 shadow-[0_32px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/20"
        >
          <div className="rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden bg-white border border-black/[0.06]">
            <div className="relative h-[min(75vw,480px)] sm:h-[min(70vw,520px)] md:h-[min(55vw,640px)] lg:h-[680px] overflow-hidden">
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-br from-oat via-sand to-[var(--accent-blush)]/50"
              />
              <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 17px, rgba(0,0,0,0.035) 17px, rgba(0,0,0,0.035) 18px),
                    repeating-linear-gradient(90deg, transparent, transparent 17px, rgba(0,0,0,0.035) 17px, rgba(0,0,0,0.035) 18px)`,
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse 85% 65% at 42% 42%, rgba(74,124,89,0.18), transparent 72%)",
                }}
                aria-hidden
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-[var(--accent-leaf)] ring-[6px] ring-[var(--accent-leaf)]/30 shadow-lg" />
                <span className="text-[11px] font-bold text-[var(--text-primary)] mt-2 bg-white/95 px-2.5 py-1 rounded-lg border border-black/[0.06] shadow-sm">
                  현재 위치
                </span>
              </div>

              {restaurants.map((r, i) => {
                const isSelected = selectedId === r.id;
                const dimmed = !pinMatches(r);
                return (
                  <motion.button
                    key={r.id}
                    type="button"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: dimmed ? 0.3 : 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4, type: "spring", stiffness: 260 }}
                    whileHover={{ scale: dimmed ? 1 : 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedId(r.id)}
                    className="absolute z-20 -translate-x-1/2 -translate-y-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-leaf)] rounded-full"
                    style={{ top: r.top, left: r.left }}
                    aria-label={`${r.name}, ${r.distance}`}
                    aria-pressed={isSelected}
                  >
                    <span className="relative flex items-center justify-center w-10 h-10">
                      {isSelected && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-[var(--accent-leaf)]/30"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      <span
                        className={`relative w-3.5 h-3.5 rounded-full border-[3px] border-white shadow-lg ${
                          isSelected ? "bg-[var(--accent-leaf)] scale-110" : "bg-[var(--accent-forest)]"
                        }`}
                      />
                    </span>
                  </motion.button>
                );
              })}

              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-[260px] z-10 rounded-xl bg-white/95 backdrop-blur-md py-2.5 px-4 text-sm font-medium text-[var(--text-secondary)] border border-black/[0.06] shadow-lg">
                내 주변 500m
              </div>
            </div>

            <div className="hidden md:block p-5 md:p-6 bg-gradient-to-b from-white to-oat/30 border-t border-black/[0.05]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl bg-white border border-[var(--border)] p-5 shadow-sm"
                >
                  <p className="font-bold text-lg text-[var(--text-primary)]">{selected.name}</p>
                  <p className="text-sm font-semibold text-[var(--accent-leaf)] mt-1">
                    {selected.filter} · {selected.distance}
                  </p>
                  <p className="text-base text-[var(--text-secondary)] mt-3 leading-relaxed">{selected.menu}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="md:hidden mt-5 px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="rounded-2xl bg-white border border-black/[0.08] shadow-[var(--shadow-hover)] p-5"
              role="region"
              aria-live="polite"
              aria-label="선택한 식당"
            >
              <div className="mx-auto w-12 h-1 rounded-full bg-black/[0.08] mb-4" aria-hidden />
              <p className="font-bold text-lg text-[var(--text-primary)]">{selected.name}</p>
              <p className="text-sm font-semibold text-[var(--accent-leaf)] mt-1">
                {selected.filter} · {selected.distance}
              </p>
              <p className="text-base text-[var(--text-secondary)] mt-3 leading-relaxed">{selected.menu}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
