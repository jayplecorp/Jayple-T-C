'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import Link from 'next/link'

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={9} cy={7} r={4} />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <rect x={3} y={4} width={18} height={18} rx={2} />
    <line x1={16} y1={2} x2={16} y2={6} />
    <line x1={8} y1={2} x2={8} y2={6} />
    <line x1={3} y1={10} x2={21} y2={10} />
  </svg>
)
const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const BENEFITS = [
  {
    Icon: TrendingIcon,
    title: 'More Visibility',
    desc: 'Reach customers actively searching for salons near you — more discovery, more footfall.',
  },
  {
    Icon: UsersIcon,
    title: 'Digital Presence',
    desc: 'A verified, modern listing with your services, pricing, ratings and real reviews.',
  },
  {
    Icon: CalendarIcon,
    title: 'Appointment Automation',
    desc: 'End phone-booking chaos. Manage slots digitally with auto-confirmation and zero no-shows.',
  },
  {
    Icon: RepeatIcon,
    title: 'Customer Retention',
    desc: 'Win repeat clients through wallet rewards, exclusive deals, and loyalty programs.',
  },
]

export default function Partner() {
  return (
    <section id="partners" className="section-padding bg-white" aria-labelledby="partner-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-lime-dark mb-4 block">Grow your business</span>
            <h2 id="partner-heading" className="font-display text-display-lg text-text mb-5">
              Power your salon<br />with Jayple.
            </h2>
            <p className="text-text-soft text-[16px] leading-relaxed mb-10">
              Attract more clients, digitise your presence, auto-allocate appointments, track settlements, and build recurring revenue — all from one app built for Indian salons.
            </p>

            <motion.div
              className="grid sm:grid-cols-2 gap-5 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {BENEFITS.map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} transition={TRANSITION_DEFAULT}
                  className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-md bg-navy/10 flex items-center justify-center text-navy">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-[15px] mb-1">{title}</p>
                    <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold text-[15px] rounded-md hover:bg-navy-mid transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Become a Partner
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Right: Photo + stats overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80"
                alt="Professional salon owner reviewing business analytics"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

              {/* Stats overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '+128%', label: 'Visibility' },
                    { value: '< 2%',  label: 'No-shows' },
                    { value: 'T+2',   label: 'Settlements' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg py-3 px-3 text-center">
                      <p className="font-extrabold text-lime text-lg font-display leading-none">{value}</p>
                      <p className="text-white/70 text-[11px] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card: monthly revenue */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-surface-border">
              <p className="text-xs text-text-muted mb-1 font-medium">Monthly Revenue</p>
              <p className="font-display font-extrabold text-[22px] text-navy">₹18,250</p>
              <p className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-0.5">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                </svg>
                34% from last month
              </p>
            </div>

            {/* Lime accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-lime rounded-t-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
