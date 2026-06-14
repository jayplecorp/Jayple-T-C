'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { EASE, SPRING } from '@/lib/tokens'
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

/* ── Image shimmer loader ─────────────────────────── */
function HeroImage({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-navy-mid animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen bg-navy-deep overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(200,214,32,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(26,48,96,0.4) 0%, transparent 60%)',
        }}
      />

      {/* ── Main grid layout ── */}
      <motion.div
        className="relative container-max w-full min-h-screen flex items-center py-24 lg:py-0"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* ── Left: Minimal text content ── */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 bg-lime/8 border border-lime/20 backdrop-blur-sm px-4 py-2 rounded-pill mb-8"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="text-xs font-semibold text-lime tracking-wide">
                Now live in Trichy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-display-xl text-white mb-6 leading-[1.02]"
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              Your beauty,
              <br />
              <span className="gradient-text">zero wait.</span>
            </motion.h1>

            {/* Subtext — minimal */}
            <motion.p
              className="text-lg text-text-on-dark-soft/80 leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            >
              Book trusted salons instantly. No calls, no queues.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            >
              <a
                href="#get-app"
                onClick={onAppCTAClick}
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-lime text-navy text-[15px] font-bold rounded-xl shadow-lime hover:shadow-lg hover:bg-lime-bright transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Get the App</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-7 py-4 text-[15px] font-semibold text-text-on-dark-soft border border-white/15 rounded-xl hover:border-lime/40 hover:text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                List your Salon
              </Link>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              className="flex gap-8 lg:gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            >
              {[
                { value: 100, suffix: '%', label: 'Verified' },
                { value: 0, suffix: '', label: 'Wait time', prefix: '' },
                { value: 4.9, suffix: '★', label: 'Rating', isFixed: true },
              ].map(({ value, suffix, label, isFixed, prefix }) => (
                <div key={label} className="flex flex-col">
                  <strong className="text-2xl lg:text-3xl font-extrabold text-white leading-none tracking-tight">
                    {prefix}
                    {isFixed ? `${value}${suffix}` : <Counter to={value} suffix={suffix} />}
                  </strong>
                  <span className="text-xs text-text-on-dark-muted mt-1.5 uppercase tracking-widest font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Image composition ── */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              className="relative"
              style={{ y: y1 }}
            >
              {/* Image grid — asymmetric bento */}
              <div className="grid grid-cols-12 grid-rows-[auto] gap-3 lg:gap-4">
                {/* Main large image */}
                <motion.div
                  className="col-span-8 row-span-2 rounded-2xl lg:rounded-3xl overflow-hidden relative"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                >
                  <HeroImage
                    src="/images/hero-salon-main.png"
                    alt="Premium luxury salon interior with professional styling"
                    className="aspect-[3/4] lg:aspect-[4/5]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-navy-deep/20" />
                  
                  {/* Floating glass card on main image */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...SPRING, delay: 0.9 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-lime/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-lime" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white truncate">Instant Confirmation</p>
                      <p className="text-xs text-white/50">Book in 30 seconds</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Top-right smaller image */}
                <motion.div
                  className="col-span-4 rounded-2xl lg:rounded-3xl overflow-hidden relative"
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                >
                  <HeroImage
                    src="/images/hero-salon-styling.png"
                    alt="Professional hair styling close-up"
                    className="aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
                </motion.div>

                {/* Bottom-right smaller image */}
                <motion.div
                  className="col-span-4 rounded-2xl lg:rounded-3xl overflow-hidden relative"
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
                >
                  <HeroImage
                    src="/images/hero-salon-app.png"
                    alt="Happy customer booking salon appointment on phone"
                    className="aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />

                  {/* Small floating badge */}
                  <motion.div
                    className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-xl border border-white/15 rounded-lg px-3 py-2 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...SPRING, delay: 1.1 }}
                  >
                    <p className="text-[11px] font-bold text-lime">10% Cashback</p>
                    <p className="text-[10px] text-white/50">On first booking</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating accent — top right of grid */}
              <motion.div
                className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-lime/10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F6F8FC)' }}
        aria-hidden="true"
      />

      {/* ── Subtle grid pattern overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  )
}
