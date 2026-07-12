'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function IdeaGrowth() {
  const founderName = teamData.founders.find(f => f.role === 'Founder')?.name?.split(' ')[0] || 'Jayaprakash'
  const coFounderName = teamData.founders.find(f => f.role === 'Co-Founder')?.name?.split(' ')[0] || 'Allwin'

  return (
    <section className="section-padding bg-surface-off text-text" aria-labelledby="idea-growth-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              The Developing Idea
            </span>
            <h2 id="idea-growth-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-8">
              The question stayed with us.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="space-y-6 text-base sm:text-[17px] text-text-soft leading-relaxed"
          >
            <p>
              The idea that would eventually develop into Jayple began during {founderName} and {coFounderName}&apos;s first year of college. It did not begin as a company, a product, or a business plan. It began as a question that neither of them could easily set aside.
            </p>
            <p>
              As they moved through college, the question continued to develop alongside them. They discussed the problem with peers, observed how salon visits worked across different contexts, and gradually began thinking about whether a practical digital approach could address some of the friction they had experienced and observed.
            </p>
            <p>
              There was no single moment when the idea became fully formed. Instead, their understanding deepened over time — shaped by continued observation, collaborative discussion, and a growing clarity about what a useful solution might look like.
            </p>
            <p>
              Now in their final year of college, {founderName} and {coFounderName} continue building the company around the same problem that first made them question the salon experience. The idea has changed as their understanding has changed — but the core direction has remained consistent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
