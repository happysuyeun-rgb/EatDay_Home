import { useEffect, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * 섹션이 뷰포트에 들어오면 fullText를 한 글자씩 타이핑합니다.
 * prefers-reduced-motion 이면 처음부터 전체 문구를 표시합니다.
 */
export function useTypingTitle(fullText, revealRef) {
  const [typedTitle, setTypedTitle] = useState(() =>
    prefersReducedMotion() ? fullText : ""
  );
  const [typingDone, setTypingDone] = useState(() => prefersReducedMotion());
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const el = revealRef?.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTypedTitle(fullText);
      setTypingDone(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setTypingStarted(true);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealRef, fullText]);

  useEffect(() => {
    if (!typingStarted) return;

    const chars = Array.from(fullText);
    let i = 0;
    setTypedTitle("");
    setTypingDone(false);
    const id = window.setInterval(() => {
      i += 1;
      setTypedTitle(chars.slice(0, i).join(""));
      if (i >= chars.length) {
        window.clearInterval(id);
        setTypingDone(true);
      }
    }, 78);
    return () => window.clearInterval(id);
  }, [typingStarted, fullText]);

  return { typedTitle, typingDone };
}
