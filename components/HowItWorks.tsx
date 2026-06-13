'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Explore trusted, verified salons near you. Filter by rating, service, price and reviews.',
  },
  {
    num: '02',
    title: 'Compare',
    desc: 'Review service costs, stylist profiles, active deals and real-time slot availability.',
  },
  {
    num: '03',
    title: 'Book & Pay',
    desc: 'Pick your slot, pay securely via UPI, cards or wallet, and get instant confirmation.',
  },
  {
    num: '04',
    title: 'Enjoy',
    desc: 'Walk in at your time with zero waiting, get styled, and earn instant wallet cashback.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding bg-surface" aria-labelledby="how-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 block">Simple Process</span>
          <h2 id="how-heading" className="font-display text-display-lg text-text mb-4">How it works</h2>
          <p className="text-text-soft text-[16px]">Book your salon appointment in four simple steps.</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="relative"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(50%+24px)] right-0 h-px border-t-2 border-dashed border-surface-border"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-5 shadow-md">
                  <span className="font-display font-extrabold text-lime text-lg">{num}</span>
                </div>
                <h3 className="font-bold text-[17px] text-text mb-2">{title}</h3>
                <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
