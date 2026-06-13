'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const STATS = [
  { value: 100, suffix: '%',   label: 'Verified Salons',    prefix: '' },
  { value: 0,   suffix: ' min',label: 'Average Wait Time',  prefix: '' },
  { value: 10,  suffix: '+',   label: 'Service Categories', prefix: '' },
  { value: 4.9, suffix: '★',   label: 'Average Rating',     prefix: '', isFixed: true },
]

function AnimatedStat({ value, suffix, isFixed }: { value: number; suffix: string; isFixed?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)

  useEffect(() => {
    if (!inView || isFixed) return
    const controls = animate(mv, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [inView, mv, value, isFixed])

  useEffect(() => {
    mv.on('change', (v) => {
      if (ref.current && !isFixed) ref.current.textContent = Math.round(v) + suffix
    })
  }, [mv, suffix, isFixed])

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight">
      {isFixed ? `${value}${suffix}` : `0${suffix}`}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section-padding-sm bg-navy" aria-label="Platform statistics">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {STATS.map(({ value, suffix, label, isFixed }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="text-center bg-white/05 border border-white/08 rounded-md py-8 px-4"
            >
              <AnimatedStat value={value} suffix={suffix} isFixed={isFixed} />
              <p className="text-text-on-dark-muted text-sm mt-2">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
