'use client'

import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT, PLAY_STORE_URL, APP_STORE_URL } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'
import Link from 'next/link'

export default function AppCTA() {
  return (
    <section id="get-app" className="section-padding bg-cta-gradient relative overflow-hidden" aria-label="Download the app">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,214,32,0.08) 0%, transparent 70%)' }}
      />

      <div className="container-max text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-4 block">Get Started Today</span>
          <h2 className="font-display text-display-lg text-white mb-5 max-w-2xl mx-auto">
            Ready to look your best<br />with <span className="text-lime">Jayple?</span>
          </h2>
          <p className="text-text-on-dark-soft text-[16px] max-w-lg mx-auto mb-10 leading-relaxed">
            Book instant salon slots, earn wallet cashback, or partner with us to list, automate and scale your salon.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Android */}
            <a
              href={PLAY_STORE_URL}
              id="jayple-android"
              onClick={onAppCTAClick}
              className="flex items-center gap-3 bg-white/08 border border-white/15 hover:bg-white/14 px-5 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Get Jayple on Google Play"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zM14.5 13.5l2.8 2.8-9.9 5.6 7.1-8.4zm0-3L7.4 2.1l9.9 5.6-2.8 2.8zM18.6 9.1l3.1 1.8c.7.4.7 1.4 0 1.8l-3.1 1.8L15.5 12l3.1-2.9z" />
              </svg>
              <span className="text-left">
                <span className="block text-[10px] text-text-on-dark-muted">GET IT ON</span>
                <span className="block text-sm font-bold text-white">Google Play</span>
              </span>
            </a>

            {/* iOS */}
            <a
              href={APP_STORE_URL}
              id="jayple-ios"
              onClick={onAppCTAClick}
              className="flex items-center gap-3 bg-white/08 border border-white/15 hover:bg-white/14 px-5 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Download Jayple on the App Store"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.4 1.4c.1 1-.3 2-.9 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.6-.8 1.7-1.3 2.6-1.4zM19 17.3c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9-1.8 0-2.2.9-3.6.9-1.5 0-2.7-1.5-3.5-2.9C.8 16.3.5 11.9 2.2 9.6c1-1.4 2.5-2.2 4-2.2 1.5 0 2.5 1 3.7 1 1.2 0 1.9-1 3.7-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 1.3 7.9z" />
              </svg>
              <span className="text-left">
                <span className="block text-[10px] text-text-on-dark-muted">Download on the</span>
                <span className="block text-sm font-bold text-white">App Store</span>
              </span>
            </a>

            {/* Partner */}
            <Link
              href="/partner"
              className="px-7 py-3.5 bg-lime text-navy font-bold text-[15px] rounded-md hover:bg-lime-bright transition-all duration-200 hover:-translate-y-0.5 shadow-lime"
            >
              List your Salon →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
