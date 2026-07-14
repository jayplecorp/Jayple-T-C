'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function AboutProblem() {
  const founderName = teamData.founders.find(f => f.role === 'Founder & CEO')?.name || 'Jayaprakash Thangavel'
  const coFounderName = teamData.founders.find(f => f.role === 'Co-Founder & COO')?.name || 'Allwin E'

  return (
    <section className="section-padding bg-white text-text" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                The Friction Point
              </span>
              <h2 id="problem-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Built from a problem we knew personally.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
              className="space-y-6 text-base sm:text-lg text-text-soft leading-relaxed"
            >
              <p>
                During college, {founderName} and {coFounderName} personally experienced and observed the everyday friction points surrounding a simple salon visit.
              </p>
              <p>
                The challenge was not the styling service itself, but everything that took place before entering the salon. Finding a suitable stylist, understanding pricing, verifying service catalogs, and dealing with the uncertainty of long physical queues often made salon visits complicated and unpredictable.
              </p>
              <p>
                By observing these frustrations amongst their peers and local salon owners, they realized that the lack of clear digital discovery and scheduling options created unnecessary friction for everyone involved.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual editorial panel with photo */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface-off border border-surface-border rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-5 bg-surface-warm border border-surface-border">
                <Image
                  src="/images/team/jayaprakash.webp"
                  alt="Founder Jayaprakash Thangavel"
                  width={800}
                  height={1067}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-medium">
                Founder {founderName} began analyzing salon scheduling challenges alongside Co-Founder {coFounderName} during their first year of college.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
