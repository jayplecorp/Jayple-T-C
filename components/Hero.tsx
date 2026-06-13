'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT, SPRING } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'
import Link from 'next/link'

/* ── Animated counter ─────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1200, bounce: 0 })

  useEffect(() => {
    if (inView) {
      animate(mv, to, { duration: 1.2, ease: [0.22, 1, 0.36, 1] })
    }
  }, [inView, mv, to])

  useEffect(() => {
    spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

/* ── Phone mockup — Customer ──────────────────────── */
function CustomerPhone() {
  return (
    <motion.div
      className="relative bg-white/06 border border-white/12 rounded-[28px] overflow-hidden w-[148px] shrink-0"
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-[3px] bg-lime" />
      <div className="px-3 py-3">
        <p className="text-[10px] font-bold text-white/80 mb-2">Discover Salons</p>

        {/* Search bar */}
        <div className="flex items-center gap-1.5 bg-white/08 rounded-lg px-2 py-1.5 mb-2">
          <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
          <span className="text-[9px] text-white/35">Search salons…</span>
        </div>

        {/* Salon card */}
        <div className="flex items-center gap-2 bg-white/05 rounded-lg p-2 mb-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-lime to-lime-dark shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-[9px] bg-white/20 rounded w-4/5 mb-1" />
            <div className="h-[7px] bg-white/10 rounded w-3/5" />
          </div>
        </div>

        {/* Slots */}
        <div className="grid grid-cols-3 gap-1 mb-2">
          {['10:00', '11:30', '02:00'].map((t, i) => (
            <div
              key={t}
              className={`text-center text-[9px] py-1.5 rounded-md font-medium ${
                i === 1 ? 'bg-lime text-navy font-bold' : 'bg-white/08 text-white/50'
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between bg-white/06 rounded-md px-2 py-1.5 mb-2">
          <span className="text-[9px] text-white/50">Total <b className="text-white">₹450</b></span>
          <span className="text-[8px] text-lime">+₹45 cashback</span>
        </div>

        {/* CTA */}
        <div className="bg-lime rounded-lg py-2 text-center text-[10px] font-bold text-navy">
          Book Now →
        </div>
      </div>
    </motion.div>
  )
}

/* ── Phone mockup — Partner ───────────────────────── */
function PartnerPhone() {
  const bars = [35, 55, 70, 92, 60]
  return (
    <motion.div
      className="relative bg-white/05 border border-white/08 rounded-[28px] overflow-hidden w-[138px] mb-4 shrink-0"
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-[3px] bg-navy-light" />
      <div className="px-3 py-3">
        <p className="text-[10px] font-bold text-lime mb-2">Partner Dashboard</p>

        {/* Stats */}
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-[13px] font-extrabold text-white">₹18,250</p>
            <p className="text-[9px] text-white/50">Revenue</p>
          </div>
          <div className="text-right">
            <p className="text-[13px] font-extrabold text-white">34</p>
            <p className="text-[9px] text-white/50">Bookings</p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1 h-9 mb-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-lime' : 'bg-white/12'}`}
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1], transformOrigin: 'bottom' }}
            />
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-1">
          {[['Visibility', '+128%'], ['No-shows', '<2%']].map(([l, v]) => (
            <div key={l} className="flex justify-between">
              <span className="text-[9px] text-white/50">{l}</span>
              <span className="text-[9px] font-bold text-green-400">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Hero ─────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Decorative lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(200,214,32,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-max w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3.5 py-1.5 rounded-pill mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span className="text-[11px] font-semibold text-lime">Now live across Trichy</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-display-xl text-white mb-5 leading-[1.05]"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Book beautiful.<br />
              <span className="text-lime">Skip the wait.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              className="text-[17px] text-text-on-dark-soft leading-relaxed max-w-[420px] mb-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Jayple helps you discover trusted salons & wellness studios, compare services, and book instant appointments — while helping salon businesses grow with smart technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#get-app"
                onClick={onAppCTAClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-lime text-navy text-[15px] font-bold rounded-md shadow-lime hover:bg-lime-bright transition-all duration-200 hover:-translate-y-0.5"
              >
                Get the App
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-text-on-dark-soft border border-white/20 rounded-md hover:border-white/50 hover:text-white transition-all duration-200"
              >
                List your Salon
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { value: 100, suffix: '%', label: 'Verified Salons' },
                { value: 0,   suffix: ' min', label: 'Wait Time' },
                { value: 4.9, suffix: '★',   label: 'Avg Rating', isFixed: true },
              ].map(({ value, suffix, label, isFixed }) => (
                <div
                  key={label}
                  className="flex flex-col items-center bg-white/05 border border-white/08 rounded-md px-5 py-3"
                >
                  <strong className="text-xl font-extrabold text-white leading-none">
                    {isFixed ? `${value}${suffix}` : <Counter to={value} suffix={suffix} />}
                  </strong>
                  <span className="text-[11px] text-text-on-dark-muted mt-1">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Phone mockups ── */}
          <div className="hidden lg:flex items-end justify-center gap-4 relative">
            <CustomerPhone />
            <PartnerPhone />

            {/* Float chips */}
            <motion.div
              className="absolute -left-6 bottom-10 flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg text-[11px] font-semibold text-navy whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...SPRING, delay: 0.9 }}
            >
              <span className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center text-green-600">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                  <polyline points="2.5 8 6.5 12 13.5 4" />
                </svg>
              </span>
              Instant Confirmation
            </motion.div>

            <motion.div
              className="absolute -right-4 top-6 flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg text-[11px] font-semibold text-navy whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...SPRING, delay: 1.1 }}
            >
              <span className="w-5 h-5 rounded-md bg-lime/20 flex items-center justify-center text-lime-dark">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-3 h-3">
                  <path d="M8 2v12M11 5H6.5a2.5 2.5 0 0 0 0 5H9a2.5 2.5 0 0 1 0 5H5" />
                </svg>
              </span>
              Cashback Wallet
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F6F8FC)' }}
        aria-hidden="true"
      />
    </section>
  )
}
