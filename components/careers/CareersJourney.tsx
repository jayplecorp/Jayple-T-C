'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function CareersJourney() {
  return (
    <>
      {/* 01 — Internship Terms Detail */}
      <section className="section-padding bg-white text-text border-b border-surface-border" aria-labelledby="terms-detail-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  Programme Details
                </span>
                <h2 id="terms-detail-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  What to know before applying.
                </h2>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-4">
                  Please review the detailed terms below to make an informed decision about participating in the Jayple Internship Programme.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              >
                <dl className="space-y-6 border-t border-surface-border pt-6">
                  
                  <div className="grid sm:grid-cols-3 gap-2 pb-6 border-b border-surface-border">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      Work Format
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      <strong>Remote</strong> — Work from any location with a stable computer setup and reliable internet connectivity.
                    </dd>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 pb-6 border-b border-surface-border">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      Compensation
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      <strong>Unpaid</strong> — The internship provides a factual learning and project execution environment. No stipends or financial allocations are provided.
                    </dd>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 pb-6 border-b border-surface-border">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      Duration model
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      <strong>Project-Based</strong> — Duration is linked directly to the completion of the assigned project scope rather than a fixed calendar duration.
                    </dd>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 pb-6 border-b border-surface-border">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      Certificate Status
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      <strong>Completion Certificate</strong> — Provided upon the successful completion of the assigned project scope and verification by the team.
                    </dd>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 pb-6">
                    <dt className="text-sm font-bold text-navy uppercase tracking-wider">
                      Application Review
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-text-soft leading-relaxed">
                      <strong>Resume-Based</strong> — Applications are evaluated selectively based on the resume and details submitted in the application form.
                    </dd>
                  </div>

                </dl>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 — Application Journey Steps */}
      <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14 mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Process Overview
              </span>
              <h2 id="journey-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                From application to review.
              </h2>
              <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-4 max-w-xl mx-auto">
                Understanding the steps from reviewing roles to the start of project assignments.
              </p>
            </motion.div>
          </div>

          {/* Steps Timeline Grid */}
          <div className="relative">
            <ol className="grid md:grid-cols-5 gap-6" role="list">
              {[
                { num: '01', title: 'Review Roles', desc: 'Evaluate current opportunity areas, requirements, and scope.' },
                { num: '02', title: 'Open Form', desc: 'Navigate to the external application form via the Apply CTA.' },
                { num: '03', title: 'Submit Resume', desc: 'Provide requested details and attach your resume inside the form.' },
                { num: '04', title: 'Team Evaluation', desc: 'Jayple reviews the application context against requirements.' },
                { num: '05', title: 'Contact', desc: 'Candidates matching current requirements will receive further contact.' },
              ].map((step, idx) => (
                <motion.li
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
                  className="bg-white border border-surface-border rounded-xl p-6 relative flex flex-col justify-between list-none"
                >
                  <div>
                    <span className="font-display font-extrabold text-2xl text-lime block mb-4">
                      {step.num}
                    </span>
                    <h3 className="font-display font-bold text-base text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-soft leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* 03 — Application Conversion Banner (CTA Close) */}
      <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="apply-cta-heading">
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
              Application Action
            </span>
            
            <h2 id="apply-cta-heading" className="font-display text-display-md sm:text-display-lg font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              Ready to apply for an internship?
            </h2>
            
            <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
              If a current opportunity aligns with your skills and interests, submit the internship application. Please ensure you have reviewed the role requirements and terms.
            </p>

            <div className="pt-6">
              <a
                href={companyData.internshipFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-navy font-bold text-base rounded-xl hover:bg-lime-bright transition-colors group shadow-lime-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Apply for an Internship
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-text-on-dark-muted max-w-md mx-auto pt-4 leading-normal">
              Application opens in an external Google Form. Applications are reviewed selectively based on submitted information. Submitting does not guarantee selection.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
