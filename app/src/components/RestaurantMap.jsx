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
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.15 });
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
    <section ref={ref} id="map" className="py-24 md:py-32 bg-cream px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Copy + filters */}
          <div className="order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-sm font-semibold text-[var(--accent-leaf)] tracking-wide"
            >
              맛집 지도
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-[var(--text-primary)]"
            >
              다이어트는 집 밖에서
              <br className="hidden sm:block" />
              무너지기 쉬우니까
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[var(--text-secondary)] leading-relaxed mb-8"
            >
              내 주변 저칼로리·고단백 식당을 바로 찾고, 메뉴 정보까지 확인하세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
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
                    onClick={() =>
                      setActiveFilter((prev) => (prev === f.id ? null : f.id))
                    }
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors duration-200 ${
                      isActive
                        ? "bg-[var(--accent-leaf)] text-white border-[var(--accent-leaf)] shadow-[0_4px_14px_rgba(74,124,89,0.25)]"
                        : "bg-white border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-leaf)]/40 hover:text-[var(--accent-leaf)]"
                    }`}
                  >
                    {f.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Map + card */}
          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
              className="rounded-2xl bg-white overflow-hidden shadow-[var(--shadow)] border border-[var(--border)]"
            >
              <div className="relative h-[min(52vw,280px)] md:h-[320px] overflow-hidden">
                {/* Map-like surface */}
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={isInView ? { scale: 1 } : { scale: 1.08 }}
                  transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-oat via-sand to-[var(--accent-blush)]/40"
                />
                <div
                  className="absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 17px, rgba(0,0,0,0.04) 17px, rgba(0,0,0,0.04) 18px),
                      repeating-linear-gradient(90deg, transparent, transparent 17px, rgba(0,0,0,0.04) 17px, rgba(0,0,0,0.04) 18px)`,
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 40% 45%, rgba(74,124,89,0.12), transparent 70%)",
                  }}
                  aria-hidden
                />

                {/* Current location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-leaf)] ring-4 ring-[var(--accent-leaf)]/25" />
                  <span className="text-[10px] font-medium text-[var(--text-tertiary)] mt-1 bg-white/90 px-2 py-0.5 rounded-md border border-[var(--border)]">
                    현재 위치
                  </span>
                </div>

                {/* Pins */}
                {restaurants.map((r, i) => {
                  const isSelected = selectedId === r.id;
                  const dimmed = !pinMatches(r);
                  return (
                    <motion.button
                      key={r.id}
                      type="button"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: dimmed ? 0.35 : 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.45 + i * 0.12, duration: 0.35 }}
                      whileHover={{ scale: dimmed ? 1 : 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedId(r.id)}
                      className="absolute z-20 -translate-x-1/2 -translate-y-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-leaf)] rounded-full"
                      style={{ top: r.top, left: r.left }}
                      aria-label={`${r.name}, ${r.distance}`}
                      aria-pressed={isSelected}
                    >
                      <span className="relative flex items-center justify-center w-8 h-8">
                        {isSelected && (
                          <motion.span
                            className="absolute inset-0 rounded-full bg-[var(--accent-leaf)]/25"
                            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                        <span
                          className={`relative w-3 h-3 rounded-full border-2 border-white shadow-md ${
                            isSelected
                              ? "bg-[var(--accent-leaf)] ring-2 ring-[var(--accent-leaf)]/50"
                              : "bg-[var(--accent-forest)]"
                          }`}
                        />
                      </span>
                    </motion.button>
                  );
                })}

                {/* Distance bar */}
                <div className="absolute bottom-3 left-3 right-3 md:right-auto md:max-w-[220px] z-10 rounded-xl bg-white/95 backdrop-blur-sm py-2 px-3 text-xs text-[var(--text-secondary)] border border-[var(--border)] shadow-sm">
                  현재 위치 기준 · 반경 500m
                </div>
              </div>

              {/* Desktop: inline detail card */}
              <div className="hidden md:block p-4 border-t border-[var(--border)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-xl bg-oat/60 border border-[var(--border)] p-4"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <p className="font-semibold text-[var(--text-primary)]">
                          {selected.name}
                        </p>
                        <p className="text-sm text-[var(--accent-leaf)] font-medium mt-1">
                          {selected.filter} · {selected.distance}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                          {selected.menu}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile: bottom sheet */}
            <div className="md:hidden mt-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="rounded-t-2xl rounded-b-2xl bg-white border border-[var(--border)] shadow-[var(--shadow-hover)] p-4"
                  role="region"
                  aria-live="polite"
                  aria-label="선택한 식당"
                >
                  <div className="mx-auto w-10 h-1 rounded-full bg-[var(--border)] mb-3" aria-hidden />
                  <p className="font-semibold text-[var(--text-primary)]">{selected.name}</p>
                  <p className="text-sm text-[var(--accent-leaf)] font-medium mt-1">
                    {selected.filter} · {selected.distance}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {selected.menu}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
