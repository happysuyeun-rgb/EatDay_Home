import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const update = () => {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY;
      const winH = window.innerHeight;
      const docH = Math.max(
        docEl.scrollHeight,
        body?.scrollHeight ?? 0,
        docEl.offsetHeight,
        body?.offsetHeight ?? 0
      );
      const max = docH - winH;
      const pct = max <= 0 ? 0 : Math.min(100, Math.max(0, (scrollTop / max) * 100));
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="eatday-scroll-progress"
      aria-hidden="true"
    />
  );
}
