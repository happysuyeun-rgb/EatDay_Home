import { useEffect, useRef } from "react";

/**
 * IntersectionObserver로 .reveal 요소에 .visible 클래스를 붙입니다.
 * prefers-reduced-motion이면 즉시 visible 처리합니다.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }

    let io;
    try {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
            }
          }
        },
        { threshold: 0.1 }
      );
      io.observe(el);
    } catch {
      el.classList.add("visible");
    }

    return () => io?.disconnect();
  }, []);

  return ref;
}
