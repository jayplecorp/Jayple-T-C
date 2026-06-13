'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const FEATURES = [
  {
    icon: '⏱️',
    title: 'No Waiting',
    desc: 'Arrive exactly when it\'s your turn. Say goodbye to waiting rooms, long queues, and wasted hours.',
  },
  {
    icon: '📅',
    title: 'Instant Booking',
    desc: 'Discover top-rated salons nearby, pick your preferred services, and secure your slot instantly.',
  },
  {
    icon: '🛡️',
    title: 'Verified Salons',
    desc: 'Every partner on Jayple goes through a strict verification check to ensure service quality & safety.',
  },
  {
    icon: '💰',
    title: 'Cashback Rewards',
    desc: 'Get rewarded for looking good. Earn cashback credited straight to your Jayple Wallet on every visit.',
  },
  {
    icon: '📊',
    title: 'Partner Dashboard',
    desc: 'For salon owners: track settlements, payouts, wallet logs and business insights from one dashboard.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'Pay via UPI, cards or wallet through Razorpay\'s PCI-DSS compliant, bank-grade secure gateway.',
  },
]

export default function Features() {
  return (
    <section id="why" className="section-padding bg-surface-off" aria-labelledby="features-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 block">Value Proposition</span>
          <h2 id="features-heading" className="font-display text-display-lg text-text mb-4">
            Built for customers.<br />
            <span className="text-navy">Designed for salon growth.</span>
          </h2>
          <p className="text-text-soft text-[16px] leading-relaxed">
            Jayple is streamlining the grooming experience — connecting customers with trusted local beauty professionals, seamlessly.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {FEATURES.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="group bg-surface border border-surface-border rounded-md p-6 lime-top card-hover"
            >
              <div className="w-11 h-11 bg-lime/10 rounded-md flex items-center justify-center text-xl mb-5 group-hover:bg-lime/20 transition-colors">
                {icon}
              </div>
              <h3 className="font-bold text-[17px] text-text mb-2">{title}</h3>
              <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
