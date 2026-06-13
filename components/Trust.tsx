'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const TRUST_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} />
      </svg>
    ),
    title: 'Trichy First',
    desc: 'Our operations are deeply rooted in Trichy. We\'re building the local salon ecosystem first, empowering regional professionals.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" /><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Verified Partners',
    desc: 'Every stylist profile, review, salon slot and settlement record is vetted by our team to eliminate fraud and fake listings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <rect x={3} y={11} width={18} height={11} rx={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'DPDP Compliant',
    desc: 'Fully compliant with India\'s data protection law. Secure payments, auto slot-locking and privacy by design.',
  },
]

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-navy" aria-labelledby="trust-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-3 block">Safety & Compliance</span>
          <h2 id="trust-heading" className="font-display text-display-lg text-white mb-4">
            Trust, built into every booking.
          </h2>
          <p className="text-text-on-dark-soft text-[16px] leading-relaxed">
            We believe in transparency, regional dedication, and absolute client trust.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {TRUST_ITEMS.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="bg-white/04 border border-white/08 rounded-md p-7 hover:border-lime/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-lime/10 rounded-md flex items-center justify-center text-lime mb-5">
                {icon}
              </div>
              <h3 className="font-bold text-[17px] text-white mb-3">{title}</h3>
              <p className="text-text-on-dark-soft text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
