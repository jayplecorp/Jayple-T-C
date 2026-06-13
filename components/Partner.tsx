'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT, TRANSITION_SLOW } from '@/lib/tokens'
import Link from 'next/link'

const BENEFITS = [
  {
    title: 'More Visibility',
    desc: 'Reach customers actively searching for salons near you.',
  },
  {
    title: 'Digital Presence',
    desc: 'A modern, verified listing with ratings & service details.',
  },
  {
    title: 'Appointment Automation',
    desc: 'End phone-booking chaos. Manage slots digitally with auto-confirmation.',
  },
  {
    title: 'Customer Retention',
    desc: 'Win repeat clients with wallet rewards & exclusive deals.',
  },
]

const DASHBOARD_ROWS = [
  { label: 'Salon Visibility',  value: '+128%', color: 'text-green-400' },
  { label: 'Digital Bookings',  value: '94%',   color: 'text-lime' },
  { label: 'No-Show Rate',      value: '< 2%',  color: 'text-green-400' },
  { label: 'Settlements',       value: 'T+2',   color: 'text-text-on-dark-soft' },
  { label: 'Monthly Revenue',   value: '₹18,250', color: 'text-white font-bold' },
]

export default function Partner() {
  return (
    <section id="partners" className="section-padding bg-surface" aria-labelledby="partner-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-lime-dark mb-3 block">Grow your business</span>
            <h2 id="partner-heading" className="font-display text-display-lg text-text mb-4">
              Grow your salon<br />with Jayple.
            </h2>
            <p className="text-text-soft text-[16px] leading-relaxed mb-8">
              Attract more clients, digitalise your presence, auto-allocate appointments, track settlements, and build recurring revenue — all from one app.
            </p>

            <motion.ul
              className="space-y-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {BENEFITS.map(({ title, desc }) => (
                <motion.li key={title} variants={fadeUp} transition={TRANSITION_DEFAULT} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 mt-0.5 rounded-sm bg-lime flex items-center justify-center text-[10px] font-extrabold text-navy">✓</span>
                  <div>
                    <span className="font-semibold text-text">{title}</span>
                    <span className="text-text-soft text-sm"> — {desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold text-[15px] rounded-md hover:bg-navy-mid transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Become a Partner →
            </Link>
          </motion.div>

          {/* Dashboard panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={TRANSITION_SLOW}
          >
            <div className="bg-navy rounded-xl p-6 shadow-lg border border-white/08">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-lime rounded-md flex items-center justify-center text-navy font-extrabold text-xs">J</div>
                  <span className="font-bold text-white text-sm">Jayple Partner</span>
                </div>
                <span className="text-[11px] text-text-on-dark-muted">Active Overview</span>
              </div>

              {/* Bar chart */}
              <div className="mb-5">
                <p className="text-[11px] text-text-on-dark-muted mb-2">Weekly Earnings</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[30, 48, 62, 88, 54].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-lime' : 'bg-white/15'}`}
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1], transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/06">
                {DASHBOARD_ROWS.map(({ label, value, color }) => (
                  <div key={label} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                    </div>
                    <span className={`text-sm font-bold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
