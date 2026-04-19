import { Link, NavLink } from "react-router-dom";
import { LOGO_SRC } from "../constants/eatday";
import ScrollToTopButton from "./ScrollToTopButton";

function legalNavLinkClass({ isActive }) {
  return [
    "text-sm transition-colors rounded-full px-3 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-leaf)] focus-visible:ring-offset-2",
    isActive
      ? "font-semibold text-[var(--accent-leaf)] bg-[var(--bg-mist)] shadow-sm"
      : "font-medium text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] hover:bg-black/[0.04]",
  ].join(" ");
}

export default function LegalLayout({ title, children }) {
  const showHeading = title != null && title !== "";

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-[var(--border)] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0 block leading-none" aria-label="EATDAY 홈">
            <img
              src={LOGO_SRC}
              alt=""
              className="h-8 w-auto max-w-[140px] object-contain"
              width={148}
              height={32}
              decoding="async"
            />
          </Link>
          <nav className="hidden sm:flex items-center gap-2" aria-label="법적 문서">
            <NavLink to="/terms" className={legalNavLinkClass} end>
              이용약관
            </NavLink>
            <NavLink to="/privacy" className={legalNavLinkClass} end>
              개인정보처리방침
            </NavLink>
          </nav>
          <Link
            to="/"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] transition-colors shrink-0"
          >
            ← 홈으로
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-16" role="main">
        {showHeading ? (
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">
            {title}
          </h1>
        ) : null}
        <div
          className={
            showHeading
              ? "text-[var(--text-secondary)] leading-relaxed space-y-8"
              : "text-[var(--text-secondary)] leading-relaxed"
          }
        >
          {children}
        </div>
        <Link
          to="/"
          className="inline-block mt-12 text-sm font-medium text-[var(--accent-leaf)] hover:underline"
        >
          홈으로 돌아가기
        </Link>
      </main>
      <footer
        className="border-t border-[var(--border)] py-8 px-4 mt-16"
        role="contentinfo"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} EATDAY
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
