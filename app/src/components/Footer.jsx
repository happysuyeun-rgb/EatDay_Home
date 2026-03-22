import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16 md:py-20 px-4 bg-oat/50 border-t border-[var(--border)]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link
              to="/"
              className="inline-block font-semibold text-[var(--text-primary)] tracking-tight hover:text-[var(--accent-leaf)] transition-colors"
            >
              EATDAY
            </Link>
            <p className="text-sm text-[var(--text-tertiary)] max-w-xs">
              가벼운 기록으로 시작하는 식단 관리
            </p>
          </div>

          {/* Legal + links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <nav
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
              aria-label="법적 문서"
            >
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
            <a
              href="https://eatday.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-leaf)] transition-colors self-start sm:self-auto"
            >
              서비스 바로가기 →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-12 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-tertiary)]">
          © {year} EATDAY
        </p>
      </div>
    </footer>
  );
}
