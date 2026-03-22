import { Link } from "react-router-dom";

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-[var(--border)] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent-leaf)] transition-colors shrink-0"
          >
            EATDAY
          </Link>
          <nav className="hidden sm:flex items-center gap-6" aria-label="법적 문서">
            <Link
              to="/terms"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] transition-colors"
            >
              이용약관
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] transition-colors"
            >
              개인정보처리방침
            </Link>
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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">
          {title}
        </h1>
        <div className="text-[var(--text-secondary)] leading-relaxed space-y-8">
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
    </div>
  );
}
