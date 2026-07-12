'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

interface OpportunityArea {
  name: string
  scope: string
  status: string
  anchor: string
}

const openOpportunities: OpportunityArea[] = [
  {
    name: 'Platform Content Operations',
    scope: 'Support the accuracy and consistency of service content, pricing listings, and styling assets represented on Jayple.',
    status: 'Open',
    anchor: '#content-operations'
  },
  {
    name: 'Marketing & Creative',
    scope: 'Design creative assets, coordinate social media content, and edit video materials to support brand communication.',
    status: 'Open',
    anchor: '#marketing-creative'
  },
  {
    name: 'Partner Success',
    scope: 'Support salon partner coordination, represent ecosystem benefits, and assist onboarding reviews in Trichy.',
    status: 'Open',
    anchor: '#partner-success'
  },
  {
    name: 'Telecalling',
    scope: 'Engage with salon partners via telephone to assist coordination and platform communication operations.',
    status: 'Open',
    anchor: '#telecalling'
  }
]

export default function CareersInternships() {
  return (
    <section id="internships" className="section-padding bg-white text-text scroll-mt-20" aria-labelledby="internships-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
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
                Programme Setup
              </span>
              <h2 id="internships-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                The Jayple Internship Programme.
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              className="space-y-6 text-base sm:text-lg text-text-soft leading-relaxed"
            >
              <p>
                We offer remote, project-based internship opportunities where candidates gain hands-on experience by contributing to active business workflows. Because we value transparency, we outline our operational terms upfront so candidates know exactly what to expect.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Programme Format & Conditions Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: 'Format', val: 'Remote', sub: 'Work from anywhere with stable connectivity.' },
            { title: 'Compensation', val: 'Unpaid', sub: 'Factual operational learning environment.' },
            { title: 'Duration', val: 'Project-Based', sub: 'Linked to assigned project completion.' },
            { title: 'Certificate', val: 'Included', sub: 'Provided upon successful completion.' },
          ].map((term, idx) => (
            <motion.div
              key={term.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
              className="bg-surface-off border border-surface-border rounded-xl p-5"
            >
              <span className="text-xs font-bold text-text-soft uppercase tracking-wider block mb-1">
                {term.title}
              </span>
              <div className="font-display font-extrabold text-xl sm:text-2xl text-navy mb-2">
                {term.val}
              </div>
              <p className="text-xs text-text-soft leading-normal">
                {term.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who Can Apply Section */}
        <div className="bg-navy text-white rounded-2xl p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02]" 
            aria-hidden="true" 
            style={{
              backgroundImage: 'radial-gradient(circle 600px at 50% 50%, rgba(200,214,32,0.1) 0%, transparent 60%)'
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-lime uppercase tracking-widest block mb-3">
              Audience Eligibility
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
              Who are these opportunities relevant to?
            </h3>
            <p className="text-sm sm:text-base text-text-on-dark-soft/90 leading-relaxed mb-6">
              Our internships are designed for college students, freshers, and passionate self-learners who want to build practical credentials. We value candidates who possess basic role skills, own a laptop with internet access, and are willing to take ownership of task deadlines.
            </p>
          </div>
        </div>

        {/* Opportunity Area Preview List */}
        <div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-navy mb-8">
            Current Opportunity Areas
          </h3>
          
          <div className="space-y-4">
            {openOpportunities.map((opp, idx) => (
              <motion.div
                key={opp.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-65px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-surface-off border border-surface-border rounded-xl hover:border-surface-border-hover transition-colors"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <h4 className="font-display font-bold text-base sm:text-lg text-navy">
                      {opp.name}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-lime/10 text-navy border border-lime/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                      {opp.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    {opp.scope}
                  </p>
                </div>
                <div className="shrink-0 pt-2 sm:pt-0">
                  <a
                    href={opp.anchor}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-surface-border hover:border-text-soft/40 text-navy font-semibold text-xs sm:text-sm rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
