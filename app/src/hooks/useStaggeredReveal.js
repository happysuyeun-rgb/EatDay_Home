import { useLayoutEffect, useRef, useState } from "react";

const STAGGER_MS = 130;

/**
 * 컨테이너가 뷰포트에 들어오면 자식 개수만큼 순차적으로 shownCount를 올립니다.
 * prefers-reduced-motion 이면 처음부터 전체 개수로 둡니다.
 */
export function useStaggeredReveal(containerRef, itemCount) {
  const [shownCount, setShownCount] = useState(0);
  const timersRef = useRef([]);
  const playedRef = useRef(false);

  useLayoutEffect(() => {
    const el = containerRef?.current;
    if (!el || itemCount <= 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShownCount(itemCount);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShownCount(itemCount);
      return;
    }

    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries[0];
        if (!hit?.isIntersecting || playedRef.current) return;
        playedRef.current = true;
        clearTimers();

        for (let i = 0; i < itemCount; i += 1) {
          const tid = window.setTimeout(() => {
            setShownCount((prev) => Math.max(prev, i + 1));
          }, i * STAGGER_MS);
          timersRef.current.push(tid);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => {
      clearTimers();
      io.disconnect();
    };
  }, [containerRef, itemCount]);

  return shownCount;
}
