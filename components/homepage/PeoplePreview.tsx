'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData, teamData } from '@/lib/companyData'

export default function PeoplePreview() {
  const founders = teamData.founders

  return (
    <section className="section-padding bg-surface-off text-text border-t border-surface-border" aria-labelledby="people-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Leadership
            </span>
            <h2 id="people-heading" className="font-display text-display-md text-navy">
              The people behind Jayple.
            </h2>
            <p className="text-text-soft text-base sm:text-lg mt-3 leading-relaxed">
              Jayple is led by student founders shaping digital ideas into practical community solutions, supported by a growing team across engineering, marketing, and operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 rounded-xl text-sm font-semibold text-navy hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
            >
              Meet the complete team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Founders Profiles */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((member, index) => {
            const hasImage = member.name.toLowerCase().includes('jayaprakash')
            return (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: index * 0.15 }}
                className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-[0_8px_30px_-6px_rgba(7,19,42,0.06)] transition-all duration-300"
              >
                {/* Image / Avatar fallback */}
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-surface-warm border border-surface-border flex items-center justify-center">
                  {hasImage ? (
                    <img
                      src="/images/jayaprakash.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold text-navy font-display">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-xs font-semibold text-lime-dark uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-soft mt-3 leading-relaxed">
                    {member.name.toLowerCase().includes('jayaprakash')
                      ? "Leading Jayple's corporate vision, coordinating ecosystem partnerships, and shaping product design directions."
                      : "Directing operational strategies, partner onboarding campaigns, and scaling local market presence."}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
