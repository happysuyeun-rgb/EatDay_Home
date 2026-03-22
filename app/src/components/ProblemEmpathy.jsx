import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const lines = [
  "식단 입력하다 지쳐 포기한 적 있죠.",
  "외식하는 날엔 식단 관리가 흐트러지고.",
  "숫자만 보여줘서, 다음엔 뭘 먹어야 할지 모르고.",
  "앱은 쓰는데, 정작 해결은 안 됐어요.",
];

/**
 * useInView + stagger로 문장 순차 등장. 스크롤 progress 대비 안정적.
 */
export default function ProblemEmpathy() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px 80px 0px",
    amount: 0.15,
  });

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
      className="relative bg-oat min-h-[100vh] py-20 md:py-28 px-4 flex items-center justify-center"
      aria-labelledby="empathy-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--accent-blush)]/30 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] rounded-full bg-[var(--accent-leaf)]/5 blur-3xl" />
      </div>

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.22, delayChildren: 0.1 },
          },
          hidden: {},
        }}
      >
        <h2 id="empathy-heading" className="sr-only">
          식단 관리의 어려움
        </h2>
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-xl md:text-3xl lg:text-4xl leading-[1.5] md:leading-[1.4] text-[var(--text-primary)] font-normal"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
