'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function CareersIntro() {
  return (
    <>
      {/* 01 — Company Work Context */}
      <section className="section-padding bg-white text-text border-b border-surface-border animate-fade-in" aria-labelledby="work-context-heading">
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
                  Company Work Context
                </span>
                <h2 id="work-context-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Operating a live salon booking platform.
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
                  Jayple is not a collection of conceptual exercises or mock briefs. We are a registered business operating a live platform in {companyData.liveCity}, Tamil Nadu, with {companyData.stats.salonPartners} salons onboarded and over {companyData.stats.servicesAvailable} service listings represented across our ecosystem.
                </p>
                <p>
                  Our day-to-day work spans real operations—maintaining catalog accuracy, supporting partner coordination, managing creative communications, and improving our mobile application experiences. When you join our team as an intern, you contribute directly to these operational prioritizations.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 — Student-Origin Bridge & Progression */}
      <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="origin-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  Student-Origin Bridge
                </span>
                <h2 id="origin-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Before Jayple was a company, it was a student observation.
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
                  Our founders experienced salon booking friction firsthand as first-year college students. Instead of accepting the manual call overhead and inconsistent listings as unchangeable, they chose to study how salons interact with local clients.
                </p>
                <p>
                  That student observation developed over their college years into a functional product model, leading to the launch of Jayple Private Limited on {companyData.launchDate}. Because our roots are grounded in student-led problem-solving, our team is structured to welcome college students, freshers, and learners who want to apply theoretical skills to live company needs.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Progression Timeline */}
          <div className="border-t border-surface-border pt-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-soft mb-10 text-center">
              Our Journey Progression
            </h3>
            
            <ol className="grid sm:grid-cols-4 gap-8 relative" role="list">
              {[
                { step: '01', title: 'Observed Problem', desc: 'First-year college students notice local salon booking friction.' },
                { step: '02', title: 'Developed Idea', desc: 'Refined product concepts and workflows during college years.' },
                { step: '03', title: 'Launched Platform', desc: 'Public launch of Jayple Private Limited on 06 July 2026.' },
                { step: '04', title: 'Live Operations', desc: 'Currently expanding the partner and customer network in Trichy.' },
              ].map((item, idx) => (
                <motion.li
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.1 }}
                  className="bg-white border border-surface-border rounded-2xl p-6 relative list-none"
                >
                  <span className="absolute -top-4 left-6 bg-lime text-navy text-xs font-bold px-2.5 py-1 rounded-full border border-lime/20 shadow-lime-sm">
                    {item.step}
                  </span>
                  <h4 className="font-display font-bold text-base text-navy mt-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </>
  )
}
