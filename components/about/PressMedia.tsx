'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function PressMedia() {
  return (
    <section 
      id="press-media" 
      className="py-20 bg-surface-off scroll-mt-20" 
      aria-labelledby="press-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
            Press &amp; Media Resources
          </span>
          <h2 id="press-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-4">
            Jayple Newsroom &amp; Fact Sheet
          </h2>
          <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
            Welcome to the Jayple Press and Media Hub. We are committed to sharing clear, accurate, and up-to-date company facts with content publishers, researchers, and journalists.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Fact Sheet */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-surface-border rounded-2xl p-8"
          >
            <h3 className="font-display font-bold text-navy text-lg mb-6 pb-4 border-b border-surface-border">
              Company Fact Sheet
            </h3>
            
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Legal Entity Name</dt>
                <dd className="text-navy font-medium">{companyData.name}</dd>
              </div>
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Brand Name</dt>
                <dd className="text-navy font-medium">{companyData.brandName}</dd>
              </div>
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Corporate Foundations</dt>
                <dd className="text-text-soft">Salon discovery &amp; appointment scheduling platform</dd>
              </div>
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Operating Geography</dt>
                <dd className="text-navy font-medium">{companyData.operatingMarket}</dd>
              </div>
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Official Brand Launch</dt>
                <dd className="text-navy font-medium">{companyData.launchDate}</dd>
              </div>
              <div>
                <dt className="text-text-muted font-semibold uppercase tracking-wider text-[11px] mb-1">Verified Salon Count</dt>
                <dd className="text-navy font-medium">{companyData.stats.salonPartners} onboarded</dd>
              </div>
            </dl>
          </motion.div>

          {/* Right Column: Media Kit & Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Media kit section */}
            <div className="bg-white border border-surface-border rounded-2xl p-6">
              <h3 className="font-bold text-navy text-[16px] mb-3 flex items-center gap-2">
                <span>📁</span> Media Assets
              </h3>
              <p className="text-text-soft text-xs sm:text-sm leading-relaxed mb-4">
                Access official brand logos, high-resolution color palettes, and operational guidelines for digital publication.
              </p>
              <div className="bg-surface-off border border-surface-border p-4 rounded-xl text-center">
                <span className="text-xs font-semibold text-text-soft block mb-2">Jayple Brand Assets</span>
                <span className="inline-flex bg-navy/10 text-navy text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded">
                  Logo Kit (Coming Soon)
                </span>
              </div>
            </div>

            {/* Press Contact section */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold text-white text-[16px] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-lime shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                Press Contact
              </h3>
              <p className="text-text-on-dark-soft text-xs sm:text-sm leading-relaxed mb-4">
                For official media releases, interview queries, or press coordination:
              </p>
              <a 
                href="mailto:jayple.appointments@gmail.com" 
                className="inline-flex items-center gap-2 text-sm font-bold text-lime hover:text-lime-bright transition-colors"
              >
                jayple.appointments@gmail.com &rarr;
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
