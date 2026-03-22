import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProblemSolution() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const problemOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const solutionOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const problemY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const solutionY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0])

  return (
    <section
      id="problem"
      ref={containerRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {/* Problem Side */}
          <motion.div
            style={{ opacity: problemOpacity, y: problemY }}
            className="flex flex-col items-center justify-center p-12 bg-rose-50/50 md:bg-rose-100/30"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-rose-800 mb-4">
              문제
            </h2>
            <p className="text-lg text-rose-700 max-w-md text-center">
              식단 기록은 번거롭고, 유지는 어렵고, 결과는 흐릿합니다.
            </p>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            style={{ opacity: solutionOpacity, y: solutionY }}
            className="flex flex-col items-center justify-center p-12 bg-emerald-50/50 md:bg-emerald-100/30"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-emerald-800 mb-4">
              해결
            </h2>
            <p className="text-lg text-emerald-700 max-w-md text-center">
              잇데이가 기록을 줄이고, 루틴을 남깁니다. 사진 한 장이면 충분해요.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
