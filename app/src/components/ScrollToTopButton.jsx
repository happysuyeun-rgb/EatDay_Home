import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 360;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`eatday-scroll-top${visible ? " eatday-scroll-top--visible" : ""}`}
      onClick={scrollTop}
      aria-label="페이지 맨 위로 이동"
      title="맨 위로"
    >
      <span className="eatday-scroll-top-icon" aria-hidden>
        ↑
      </span>
    </button>
  );
}
