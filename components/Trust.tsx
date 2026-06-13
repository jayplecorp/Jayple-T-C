'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
    title: 'Trichy First',
    desc: 'Our operations are deeply rooted in Trichy. We are building the local salon ecosystem first — empowering regional beauty professionals with technology.',
    stat: '100% local ops',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Verified Partners',
    desc: 'Every stylist profile, review, salon slot and settlement record is vetted by our team. Zero tolerance for fake listings or fraudulent activity.',
    stat: 'Zero fake listings',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x={3} y={11} width={18} height={11} rx={2} />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'DPDP Compliant',
    desc: "Fully compliant with India's Digital Personal Data Protection Act. Secure payments via Razorpay, auto slot-locking, and privacy by design.",
    stat: 'Bank-grade security',
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
          <span className="text-xs font-bold uppercase tracking-widest text-lime/60 mb-3 block">Safety & Compliance</span>
          <h2 id="trust-heading" className="font-display text-display-lg text-white mb-4">
            Trust, built into<br />every booking.
          </h2>
          <p className="text-text-on-dark-soft text-[16px] leading-relaxed">
            Transparency, regional dedication and absolute client trust are non-negotiable for us.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {TRUST_ITEMS.map(({ icon, title, desc, stat }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="group bg-white/04 border border-white/08 rounded-xl p-8 hover:border-lime/30 transition-all duration-300 hover:bg-white/06"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-6 group-hover:bg-lime/15 transition-colors">
                {icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-[18px] text-white mb-3">{title}</h3>

              {/* Desc */}
              <p className="text-text-on-dark-soft text-sm leading-relaxed mb-5">{desc}</p>

              {/* Stat badge */}
              <div className="inline-flex items-center gap-1.5 bg-lime/10 rounded-pill px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                <span className="text-lime text-xs font-semibold">{stat}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
