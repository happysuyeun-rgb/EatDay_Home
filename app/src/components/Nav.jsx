import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BETA_COMING_SOON_ALERT, LOGO_SRC } from "../constants/eatday";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`eatday-top-nav${scrolled ? " eatday-top-nav--scrolled" : ""}`}
      aria-label="메인 내비게이션"
    >
      <Link to="/" className="nav-logo" aria-label="EATDAY 홈">
        <img
          src={LOGO_SRC}
          alt=""
          className="nav-logo-img"
          width={148}
          height={36}
          decoding="async"
        />
      </Link>
      <button
        type="button"
        className="nav-cta"
        onClick={() => window.alert(BETA_COMING_SOON_ALERT)}
      >
        베타 사전등록
      </button>
    </nav>
  );
}
