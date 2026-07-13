'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData, isVerifiedValue, footerLegalLinks } from '@/lib/companyData'

interface FactItem {
  label: string
  value: string
  verified: boolean
}

export default function CompanyFacts() {
  const verifiedFacts: FactItem[] = [
    { label: 'Official Legal Name', value: companyData.name, verified: true },
    { label: 'Brand Name', value: companyData.brandName, verified: true },
    { label: 'Company Type', value: 'Private Limited Company', verified: true },
    { label: 'Corporate Identification Number (CIN)', value: companyData.cin, verified: isVerifiedValue(companyData.cin) },
    { label: 'Incorporation Date', value: companyData.incorporationDate, verified: isVerifiedValue(companyData.incorporationDate) },
    { label: 'Registered Office', value: companyData.registeredOffice, verified: isVerifiedValue(companyData.registeredOffice) },
    { label: 'Current Service Market', value: companyData.operatingMarket, verified: true },
    { label: 'Public Platform Launch', value: companyData.launchDate, verified: true },
    { label: 'Onboarded Salons', value: companyData.stats.salonPartners, verified: true },
    { label: 'Services Represented', value: companyData.stats.servicesAvailable, verified: true },
    { label: 'Payment Processor', value: `Powered by ${companyData.paymentProcessor}`, verified: true },
    { label: 'Official General Email', value: companyData.officialEmail, verified: isVerifiedValue(companyData.officialEmail) },
    { label: 'Official Phone', value: companyData.officialPhone, verified: isVerifiedValue(companyData.officialPhone) },
  ]

  const activeFacts = verifiedFacts.filter(fact => fact.verified)

  return (
    <div className="space-y-0">
      
      {/* 01 — Corporate Profile Section */}
      <section className="section-padding bg-white text-text border-b border-surface-border" aria-labelledby="profile-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Official Entity
              </span>
              <h2 id="profile-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Corporate Profile
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed mb-6">
                {companyData.name} operates the {companyData.brandName} platform. We establish verified connections between consumers seeking grooming treatments and salons managing active service calendars.
              </p>
              <p className="text-sm sm:text-base text-text-soft/90 leading-relaxed mb-6">
                Our operations focus on structural reliability, listing transparency, and ecosystem coordination. By maintaining factual registry disclosures, we ensure high standards of governance across all platform channels.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-lime-dark hover:text-lime-dark/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm w-fit"
                >
                  Read the Jayple Story
                  <span className="transition-transform group-hover:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
              className="bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display font-bold text-lg text-navy mb-4">Corporate Structure</h3>
              <p className="text-sm text-text-soft leading-relaxed mb-4">
                The corporate organization operates under the private limited business framework in India. Administrative, operational, and customer support coordination are centralized to align platform integrity with operational standards.
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                Notice: Statutory identification figures (such as CIN or GSTIN) are maintained internally and will be added publicly upon authorized legal team clearance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — Platform Identity Section */}
      <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="platform-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Ecosystem Participants
              </span>
              <h2 id="platform-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                How the platform operates.
              </h2>
              <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-3">
                Jayple coordinates interactions between two participant groups through separate, customized digital experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Pathway */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-6 shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">For Customers</h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed mb-6">
                  Users access the Jayple application or website to discover participating local salons, explore detailed catalog service lists, and schedule grooming treatment appointments cleanly.
                </p>
              </div>
              <Link
                href="/#features"
                className="inline-flex items-center text-sm font-bold text-lime-dark hover:text-lime-dark/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm w-fit"
              >
                Explore Customer Experience
                <span className="transition-transform group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </motion.div>

            {/* Partner Pathway */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-6 shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="9.8" y1="8.2" x2="20" y2="17" />
                    <line x1="9.8" y1="15.8" x2="20" y2="7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">For Salon Partners</h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed mb-6">
                  Participating salon businesses leverage the Partner platform to manage styling appointments, update treatments list, and coordinate scheduling calendars dynamically.
                </p>
              </div>
              <Link
                href="/partner"
                className="inline-flex items-center text-sm font-bold text-lime-dark hover:text-lime-dark/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm w-fit"
              >
                Explore Partner Program
                <span className="transition-transform group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 03 — Current Operating Context Section */}
      <section className="section-padding bg-white text-text border-b border-surface-border" aria-labelledby="context-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Scope &amp; Availability
              </span>
              <h2 id="context-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Current platform context.
              </h2>
              <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-3">
                We represent platform size and availability transparently based on current verified operational metrics.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '25+', label: 'Onboarded Salons', desc: 'Salon partners actively coordinating booking schedules.' },
              { num: '1,500+', label: 'Services Represented', desc: 'Available service treatments listed through the platform.' },
              { num: 'Trichy', label: 'Service Market', desc: 'Current city where the discovery and booking service is active.' },
              { num: '6 July 2026', label: 'Platform Launch', desc: 'Public platform deployment date for customer operations.' },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
                className="bg-surface-off border border-surface-border rounded-xl p-6"
              >
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-navy block mb-2">
                  {metric.num}
                </span>
                <h3 className="font-bold text-sm text-navy uppercase tracking-wider mb-2">
                  {metric.label}
                </h3>
                <p className="text-xs text-text-soft leading-normal">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 04 — Company Identity Facts Grid */}
      <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="facts-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Official Records
              </span>
              <h2 id="facts-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Corporate Credentials
              </h2>
              <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-3">
                Review official registry entries associated with the corporate entity.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-surface-border pt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            >
              <dl className="space-y-6" role="presentation">
                {activeFacts.map((fact) => (
                  <div key={fact.label} className="grid sm:grid-cols-3 gap-2 pb-6 border-b border-surface-border">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      {fact.label}
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 05 — Legal policy routing */}
      <section className="section-padding bg-white text-text border-b border-surface-border" aria-labelledby="legal-hub-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Governance Documents
              </span>
              <h2 id="legal-hub-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Official company policies &amp; terms.
              </h2>
              <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-3">
                Review the legal governance models and privacy terms that protect customers and participating partners across our platform.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {footerLegalLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.05 }}
                className="bg-white border border-surface-border rounded-xl p-5 hover:border-text-soft/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-base text-navy mb-2">
                    {link.label}
                  </h3>
                  <p className="text-xs text-text-soft leading-relaxed mb-4">
                    Official framework governing {link.label.toLowerCase()} parameters.
                  </p>
                </div>
                <Link
                  href={link.href}
                  className="inline-flex items-center text-xs font-bold text-lime-dark hover:text-lime-dark/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm w-fit"
                >
                  Read Policy 
                  <span className="transition-transform group-hover:translate-x-1 ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 — App availability evidence */}
      <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="apps-heading">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          aria-hidden="true" 
          style={{
            backgroundImage: 'radial-gradient(circle 800px at 50% 50%, rgba(200,214,32,0.12) 0%, transparent 60%)'
          }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-lime/80 block">
              Ecosystem Access
            </span>
            
            <h2 id="apps-heading" className="font-display text-display-md sm:text-display-lg font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              Download the official applications.
            </h2>
            
            <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
              Explore styling catalog listings or manage salon partner appointments with our official mobile tools.
            </p>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              {companyData.apps.customer.android && (
                <a
                  href={companyData.apps.customer.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Customer App (Android)
                </a>
              )}
              {companyData.apps.customer.ios && (
                <a
                  href={companyData.apps.customer.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Customer App (iOS)
                </a>
              )}
              {companyData.apps.partner.android && (
                <a
                  href={companyData.apps.partner.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-lime hover:bg-lime-bright text-navy font-bold text-sm sm:text-base rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy shadow-lime-sm"
                >
                  Salon Partner App (Android)
                </a>
              )}
            </div>

            <div className="pt-8 border-t border-white/06">
              <p className="text-xs text-text-on-dark-muted max-w-md mx-auto leading-normal">
                Looking to reach our corporate team directly? Explore our official communication channels on our <Link href="/contact" className="text-lime font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-sm">Contact Page</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
