import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '10,000+', label: '누적 기록 수' },
  { value: '50,000+', label: '분석된 식사 데이터' },
  { value: '92%', label: '7일 루틴 유지율' },
]

const clipReveal = {
  hidden: { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 },
  visible: (i) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="stats" className="py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          꾸준함은, 결국 결과가 됩니다
        </h2>
        <p className="text-gray-600 mb-16">
          수많은 사용자들이 잇데이와 함께 루틴을 지키고 있어요.
        </p>

        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={clipReveal}
              custom={i}
              className="glass rounded-3xl p-8"
              style={{
                boxShadow: '0 4px 24px rgba(16, 185, 129, 0.06), 0 10px 40px rgba(16, 185, 129, 0.04)',
              }}
            >
              <p
                className="text-4xl md:text-5xl font-bold mb-2 text-glow"
                style={{
                  textShadow:
                    '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
