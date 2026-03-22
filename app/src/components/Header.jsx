import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", label: "기능" },
  { href: "#map", label: "맛집 지도" },
  { href: "#community", label: "커뮤니티" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6"
    >
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between h-[3.25rem] md:h-14 px-5 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "bg-white/40 backdrop-blur-md border-white/40 shadow-sm"
        }`}
      >
        <Link
          to="/"
          className="text-base md:text-lg font-bold text-[var(--text-primary)] tracking-[-0.02em] hover:text-[var(--accent-leaf)] transition-colors"
        >
          EATDAY
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="메인">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://eatday.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-xl bg-[var(--accent-leaf)] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,124,89,0.25)] transition-all duration-200"
        >
          무료로 시작하기
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -m-2 rounded-lg hover:bg-oat/50 transition-colors"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          <div className="relative w-5 h-5 flex flex-col justify-center gap-1.5">
            <span
              className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-200 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mt-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[var(--border)] overflow-hidden shadow-lg"
          >
            <nav className="p-4 flex flex-col gap-1" aria-label="모바일 메뉴">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-xl text-sm text-[var(--text-primary)] hover:bg-oat/60 hover:text-[var(--accent-leaf)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://eatday.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 py-3 rounded-xl bg-[var(--accent-leaf)] text-white text-center font-semibold hover:bg-[var(--accent-forest)] transition-colors"
              >
                무료로 시작하기
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
