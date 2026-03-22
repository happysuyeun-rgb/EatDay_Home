import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const lines = [
  "식단 입력하다 지쳐 포기한 적 있죠.",
  "외식하는 날엔 식단 관리가 흐트러지고.",
  "숫자만 보여줘서, 다음엔 뭘 먹어야 할지 모르고.",
  "앱은 쓰는데, 정작 해결은 안 됐어요.",
];

/**
 * Scroll progress: section이 뷰포트를 아래→위로 지나가는 동안 0→1.
 * (이전 start/end 조합은 '섹션 맨 위가 화면 맨 위'일 때만 0이라, 진입 시점에 이미 progress가 커져 빈 화면처럼 보일 수 있음)
 */
export default function ProblemEmpathy() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity0 = useTransform(
    scrollYProgress,
    [0, 0.05, 0.14, 0.22, 0.32],
    [1, 1, 1, 0.4, 0.25]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0.1, 0.16, 0.26, 0.36, 0.46],
    [0, 1, 1, 0.4, 0.25]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.28, 0.34, 0.46, 0.58, 0.68],
    [0, 1, 1, 0.4, 0.25]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.52, 0.58, 0.7, 0.85, 1],
    [0, 1, 1, 0.45, 0.45]
  );

  const y0 = useTransform(scrollYProgress, [0, 0.12], [12, 0]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.22], [20, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.42], [20, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.66], [20, 0]);

  const opacities = [opacity0, opacity1, opacity2, opacity3];
  const ys = [y0, y1, y2, y3];

  if (reduceMotion) {
    return (
      <section
        className="relative bg-oat py-20 md:py-28 px-4"
        aria-labelledby="empathy-heading"
      >
        <div className="max-w-2xl mx-auto text-center space-y-8 md:space-y-10">
          <h2 id="empathy-heading" className="sr-only">
            식단 관리의 어려움
          </h2>
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-xl md:text-3xl lg:text-4xl leading-[1.5] md:leading-[1.4] text-[var(--text-primary)] font-normal"
            >
              {line}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative bg-oat min-h-[250vh] md:min-h-[320vh]"
      aria-labelledby="empathy-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--accent-blush)]/30 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] rounded-full bg-[var(--accent-leaf)]/5 blur-3xl" />
      </div>

      <div className="sticky top-[72px] h-[calc(100vh-72px)] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 id="empathy-heading" className="sr-only">
            식단 관리의 어려움
          </h2>
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                style={{
                  opacity: opacities[i],
                  y: ys[i],
                }}
                className="text-xl md:text-3xl lg:text-4xl leading-[1.5] md:leading-[1.4] text-[var(--text-primary)] font-normal"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
