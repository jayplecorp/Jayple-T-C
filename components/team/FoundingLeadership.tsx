'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function FoundingLeadership() {
  const founder = teamData.founders.find(m => m.role === 'Founder & CEO') || {
    name: 'Jayaprakash Thangavel',
    role: 'Founder & CEO',
    bio: "Leading Jayple's vision and shaping ideas into meaningful digital experiences.",
    photo: '/images/team/jayaprakash.webp',
    initials: 'JP'
  }
  
  const coFounder = teamData.founders.find(m => m.role === 'Co-Founder & COO') || {
    name: 'Allwin E',
    role: 'Co-Founder & COO',
    bio: "Supporting Jayple's direction through collaboration, strategy, and a shared vision for growth.",
    photo: '/images/team/allwin.webp',
    initials: 'AW'
  }

  return (
    <section className="section-padding bg-white text-text" aria-labelledby="founding-leadership-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Founding Leadership
            </span>
            <h2 id="founding-leadership-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              The people who carried the idea forward.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed">
              The idea that developed into Jayple began during Jayaprakash and Allwin&apos;s college journey. Today, as Founder and Co-Founder, they continue shaping the company&apos;s direction around the core problems they first observed, ensuring the platform develops with a clear, shared vision.
            </p>
          </motion.div>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-20 lg:mb-28">
          
          {/* Jayaprakash Thangavel (Founder) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="flex flex-col bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8"
          >
            {/* Portrait Image Container */}
            <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0 mx-auto">
              <Image
                src={founder.photo || '/images/team/jayaprakash.webp'}
                alt="Jayaprakash Thangavel, Founder of Jayple"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-lime-dark uppercase tracking-widest block mb-2">
                  {founder.role}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy mb-4">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Allwin E (Co-Founder) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            className="flex flex-col bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8"
          >
            {/* Portrait Image Container or Initials Fallback */}
            {coFounder.photo ? (
              <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0 mx-auto">
                <Image
                  src={coFounder.photo}
                  alt={`${coFounder.name}, Co-Founder of Jayple`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-navy-mid to-navy border border-surface-border flex flex-col items-center justify-center shrink-0 mx-auto">
                <div 
                  className="absolute inset-0 pointer-events-none opacity-10" 
                  aria-hidden="true" 
                  style={{
                    backgroundImage: 'radial-gradient(circle 120px at 50% 50%, var(--accent) 0%, transparent 60%)'
                  }}
                />
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime relative z-10 select-none">
                  {coFounder.initials}
                </span>
              </div>
            )}

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-lime-dark uppercase tracking-widest block mb-2">
                  {coFounder.role}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy mb-4">
                  {coFounder.name}
                </h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed">
                  {coFounder.bio}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Transition / Connecting Narrative */}
        <div className="border-t border-surface-border pt-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  Responsibility & Growth
                </span>
                <h3 className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight">
                  The work extends beyond the founding team.
                </h3>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
              >
                <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                  While Jayple&apos;s direction is set by the founders, carrying that vision forward requires the coordination of wider leadership and operational teams. Responsibility for technology, operations, partner success, and marketing is shared across our growing team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
