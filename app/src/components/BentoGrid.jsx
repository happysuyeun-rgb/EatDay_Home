import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const clipReveal = {
  hidden: {
    clipPath: 'inset(50% 50% 50% 50%)',
    opacity: 0,
  },
  visible: (i) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function BentoCard({ children, className = '', index = 0, isHovered, onHover, onMouseEnter }) {
  return (
    <motion.div
      variants={clipReveal}
      custom={index}
      initial="hidden"
      animate="visible"
      onMouseEnter={(e) => {
        onHover(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={() => onHover(false)}
      className={`glass glass-hover rounded-3xl p-6 md:p-8 overflow-hidden ${className}`}
      style={{
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </motion.div>
  )
}

function ShutterIcon({ isHovered }) {
  return (
    <motion.div
      animate={{
        y: isHovered ? [0, -6, 0] : [0, -4, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: isHovered ? 0.15 : 0.3,
      }}
      className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center"
    >
      <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      </svg>
    </motion.div>
  )
}

function PinIcon({ isHovered }) {
  return (
    <motion.div
      animate={{
        y: isHovered ? [0, -6, 0] : [0, -4, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: isHovered ? 0.2 : 0.4,
      }}
      className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center"
    >
      <svg className="w-8 h-8 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
      </svg>
    </motion.div>
  )
}

function StreakBadge({ isHovered }) {
  return (
    <motion.div
      animate={{ y: isHovered ? [0, -4, 0] : 0 }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      className="flex gap-2"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
            i <= 5 ? 'bg-emerald-400/50 text-emerald-800' : 'bg-gray-200/50 text-gray-500'
          }`}
        >
          {i}
        </motion.div>
      ))}
    </motion.div>
  )
}

function BarChart({ isHovered }) {
  const bars = [60, 85, 45, 90, 70]
  return (
    <motion.div
      animate={{ y: isHovered ? [0, -3, 0] : 0 }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      className="flex items-end gap-2 h-16"
    >
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          className="flex-1 rounded-t-lg min-h-[8px]"
          style={{
            maxHeight: '100%',
            background: 'rgba(255,255,255,0.15)',
            borderTop: '1.5px solid rgba(255,255,255,0.4)',
          }}
        />
      ))}
    </motion.div>
  )
}

export default function BentoGrid() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [pulsePos, setPulsePos] = useState({ x: '50%', y: '50%' })
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleCardHover = (index, e) => {
    if (!e || !sectionRef.current) return
    const section = sectionRef.current.getBoundingClientRect()
    const card = e.currentTarget.getBoundingClientRect()
    const centerX = ((card.left + card.width / 2 - section.left) / section.width) * 100
    const centerY = ((card.top + card.height / 2 - section.top) / section.height) * 100
    setPulsePos({ x: `${centerX}%`, y: `${centerY}%` })
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Mesh gradient pulse - follows hovered card */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{ opacity: hoveredCard !== null ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle 450px at ${pulsePos.x} ${pulsePos.y}, rgba(168, 230, 207, 0.35) 0%, rgba(255, 211, 182, 0.15) 40%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          핵심 기능
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative"
        >
          <BentoCard
            index={0}
            isHovered={hoveredCard === 0}
            onHover={(v) => setHoveredCard(v ? 0 : null)}
            onMouseEnter={(e) => handleCardHover(0, e)}
            className="md:col-span-2"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <ShutterIcon isHovered={hoveredCard === 0} />
              <div>
                <h3 className="text-xl font-bold mb-2">AI 식단 기록</h3>
                <p className="text-gray-600">사진 한 장으로 AI가 음식을 인식하고 자동 기록합니다.</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            index={1}
            isHovered={hoveredCard === 1}
            onHover={(v) => setHoveredCard(v ? 1 : null)}
            onMouseEnter={(e) => handleCardHover(1, e)}
          >
            <div className="flex flex-col gap-4">
              <PinIcon isHovered={hoveredCard === 1} />
              <h3 className="text-lg font-bold">다이어터 식당 지도</h3>
              <p className="text-sm text-gray-600">주변 다이어트 메뉴를 한눈에.</p>
            </div>
          </BentoCard>

          <BentoCard
            index={2}
            isHovered={hoveredCard === 2}
            onHover={(v) => setHoveredCard(v ? 2 : null)}
            onMouseEnter={(e) => handleCardHover(2, e)}
          >
            <div className="flex flex-col gap-4">
              <StreakBadge isHovered={hoveredCard === 2} />
              <h3 className="text-lg font-bold">커뮤니티 성장</h3>
              <p className="text-sm text-gray-600">연속 기록 배지로 동기부여.</p>
            </div>
          </BentoCard>

          <BentoCard
            index={3}
            isHovered={hoveredCard === 3}
            onHover={(v) => setHoveredCard(v ? 3 : null)}
            onMouseEnter={(e) => handleCardHover(3, e)}
            className="md:col-span-2"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-48">
                <BarChart isHovered={hoveredCard === 3} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">맞춤 리포트</h3>
                <p className="text-gray-600">주간·월간 영양 분석을 글래스 차트로 확인하세요.</p>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}
