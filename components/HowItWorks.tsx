'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </svg>
)
const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
    <circle cx={12} cy={12} r={10} />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
    <rect x={3} y={4} width={18} height={18} rx={2} />
    <line x1={16} y1={2} x2={16} y2={6} />
    <line x1={8} y1={2} x2={8} y2={6} />
    <line x1={3} y1={10} x2={21} y2={10} />
  </svg>
)
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const STEPS = [
  {
    num: '01',
    Icon: SearchIcon,
    title: 'Discover',
    desc: 'Explore verified salons near you. Filter by rating, service type, price range and availability.',
  },
  {
    num: '02',
    Icon: CompassIcon,
    title: 'Compare',
    desc: 'Review service costs, stylist profiles, real customer reviews and live time slot availability.',
  },
  {
    num: '03',
    Icon: CalendarIcon,
    title: 'Book & Pay',
    desc: 'Pick your slot, pay securely via UPI, cards or Jayple Wallet, and get instant confirmation.',
  },
  {
    num: '04',
    Icon: SparkleIcon,
    title: 'Enjoy',
    desc: 'Walk in at your time with zero waiting, get styled by a professional, and earn cashback.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding bg-navy" aria-labelledby="how-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/60 mb-3 block">Simple process</span>
          <h2 id="how-heading" className="font-display text-display-lg text-white mb-4">
            Four steps to a great look.
          </h2>
          <p className="text-text-on-dark-soft text-[16px]">
            From discovery to post-visit cashback — the whole experience in your pocket.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {STEPS.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="relative"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-[-12px] h-px border-t border-dashed border-white/15"
                  aria-hidden="true"
                />
              )}

              <div className="bg-white/04 border border-white/08 rounded-xl p-6 h-full hover:border-lime/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-xl bg-lime flex items-center justify-center shrink-0">
                    <span className="font-display font-extrabold text-navy text-xl">{num}</span>
                  </div>
                </div>
                <div className="text-white mb-3">
                  <Icon />
                </div>
                <h3 className="font-bold text-[18px] text-white mb-2">{title}</h3>
                <p className="text-text-on-dark-soft text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
