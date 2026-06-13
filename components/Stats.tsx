'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const STATS = [
  { value: 100, suffix: '%',    label: 'Verified Salons',    note: 'Every partner onboarded' },
  { value: 0,   suffix: ' min', label: 'Average Wait Time',  note: 'Walk in on time, every time' },
  { value: 10,  suffix: '+',    label: 'Service Categories', note: 'Haircut to bridal makeup' },
  { value: 4.9, suffix: '★',    label: 'Average Rating',     note: 'Across all partners', isFixed: true },
]

function AnimatedStat({ value, suffix, isFixed }: { value: number; suffix: string; isFixed?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)

  useEffect(() => {
    if (!inView || isFixed) return
    const controls = animate(mv, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [inView, mv, value, isFixed])

  useEffect(() => {
    mv.on('change', (v) => {
      if (ref.current && !isFixed) ref.current.textContent = Math.round(v) + suffix
    })
  }, [mv, suffix, isFixed])

  return (
    <span ref={ref} className="font-display font-extrabold text-white tracking-tight"
      style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>
      {isFixed ? `${value}${suffix}` : `0${suffix}`}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-navy py-20 lg:py-28" aria-label="Platform statistics">
      <div className="container-max">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/60 mb-3 block">By the numbers</span>
          <h2 className="font-display text-display-lg text-white">
            Jayple in numbers
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/08 rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {STATS.map(({ value, suffix, label, note, isFixed }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="flex flex-col items-center text-center bg-navy py-10 px-6 lg:py-14"
            >
              <AnimatedStat value={value} suffix={suffix} isFixed={isFixed} />
              <p className="text-white font-semibold text-[15px] mt-3 mb-1">{label}</p>
              <p className="text-text-on-dark-muted text-xs leading-relaxed">{note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
