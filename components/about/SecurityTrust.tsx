'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function SecurityTrust() {
  return (
    <section 
      id="security-trust" 
      className="py-20 bg-white border-b border-surface-border scroll-mt-20" 
      aria-labelledby="security-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft block">
              Platform Safety &amp; Integrity
            </span>
            <h2 id="security-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] text-navy leading-tight tracking-tight">
              Our commitment to platform trust.
            </h2>
            <div className="text-base sm:text-[17px] text-text-soft leading-relaxed space-y-4">
              <p>
                At Jayple, we build our platform services with safety and operational integrity in view. We prioritize protecting the transaction paths and account control systems that connect our customers and salon partners.
              </p>
              <p>
                Rather than relying on vague security promises, we implement industry-standard technology frameworks and partner with verified payment service providers to manage checkout flows securely.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Principles */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="lg:col-span-5 bg-surface-off border border-surface-border rounded-2xl p-8 space-y-6"
          >
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-lime-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <div>
                <h3 className="font-bold text-navy text-[15px] mb-1">Encrypted Data Transit</h3>
                <p className="text-text-soft text-xs sm:text-sm leading-relaxed">
                  All communications between Jayple applications and servers are encrypted using standard TLS/HTTPS protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-surface-border pt-6">
              <svg className="w-6 h-6 text-lime-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <div>
                <h3 className="font-bold text-navy text-[15px] mb-1">Secure Checkout Integrations</h3>
                <p className="text-text-soft text-xs sm:text-sm leading-relaxed">
                  Online payments are processed through {companyData.paymentProcessor}. Jayple does not collect, access, or store credit card details or CVVs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-surface-border pt-6">
              <svg className="w-6 h-6 text-lime-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <h3 className="font-bold text-navy text-[15px] mb-1">Independent Auditing</h3>
                <p className="text-text-soft text-xs sm:text-sm leading-relaxed">
                  Our development teams perform regular package dependencies and software build scans to mitigate security risks.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
