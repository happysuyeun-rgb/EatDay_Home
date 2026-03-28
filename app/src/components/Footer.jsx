import { Link } from "react-router-dom";
import { LOGO_SRC } from "../constants/eatday";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="logo">
        <img
          src={LOGO_SRC}
          alt="EATDAY"
          className="footer-logo-img"
          width={160}
          height={40}
          decoding="async"
        />
      </div>
      <p>AI + 공공데이터 기반 식단 관리 &amp; 다이어터 커뮤니티 앱</p>
      <nav className="eatday-legal" aria-label="법적 문서">
        <Link to="/terms">이용약관</Link>
        <Link to="/privacy">개인정보처리방침</Link>
      </nav>
      <p style={{ marginTop: 12 }}>© {year} EATDAY</p>
    </footer>
  );
}
