'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function ExecutiveAndTeam() {
  const cto = teamData.leadership.find(m => m.role.includes('Technology')) || {
    name: 'Janarthanan A',
    role: 'Chief Technology Officer (CTO)',
    bio: "Leading Jayple's technology direction and helping shape the systems and products behind the platform.",
    initials: 'JA'
  }

  const cfo = teamData.leadership.find(m => m.role.includes('Finance')) || {
    name: 'Dharsan Thangarasu',
    role: 'Chief Finance Officer (CFO)',
    bio: "Supporting Jayple's financial direction and helping the company build towards responsible and sustainable growth.",
    initials: 'DT'
  }

  const hr = teamData.leadership.find(m => m.role.includes('HR')) || {
    name: 'Vidyasri R',
    role: 'HR',
    bio: "Supporting Jayple's communication, partner coordination, and growing work culture.",
    initials: 'VR'
  }

  // Get active department groups, filtering out founders and CTO/CFO from the general list
  const softwareDev = teamData.engineering || []
  const marketingCreative = teamData.marketing || []
  const partnerSuccess = teamData.partnerSuccess || []
  
  // Find telecalling members (e.g. Vidyasri R is in leadership array in companyData with 'Telecalling' role)
  const telecalling = teamData.leadership.filter(m => m.role.includes('Telecalling')) || []

  const departments = [
    {
      id: 'software',
      name: 'Software Development',
      description: 'Developing and scaling the digital product platforms, merchant integrations, and underlying backend services.',
      members: softwareDev,
    },
    {
      id: 'marketing',
      name: 'Marketing & Creative',
      description: 'Coordinating local brand communication campaigns, videography/photography assets, and merchant success promotion.',
      members: marketingCreative,
    },
    {
      id: 'success',
      name: 'Partner Success',
      description: 'Engaging, validating, and onboarding salon businesses into the ecosystem, supporting regional salon growth.',
      members: partnerSuccess,
    },
    {
      id: 'telecalling',
      name: 'Telecalling',
      description: 'Managing merchant outreach, inbound partner communications, and support coordination across local markets.',
      members: telecalling,
    },
  ].filter(d => d.members.length > 0)

  return (
    <>
      {/* 07, 08, 09 — Executive Leadership */}
      <section className="section-padding bg-surface-off border-t border-surface-border text-text" aria-labelledby="exec-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Executive Leadership Header */}
          <div className="max-w-3xl mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Executive Leadership
              </span>
              <h2 id="exec-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Leadership across technology, finance, and human resources.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                As Jayple develops, operational responsibilities are coordinated through dedicated functions. Technology design, financial modeling, and people operations are directed by officers and leads focused on building scalable, responsible company foundations.
              </p>
            </motion.div>
          </div>

          {/* Executive Leadership Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            
            {/* CTO Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {cto.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={cto.photo}
                    alt={`${cto.name}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {cto.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Chief Technology Officer · CTO
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {cto.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1">
                {cto.bio}
              </p>
            </motion.div>

            {/* CFO Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {cfo.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={cfo.photo}
                    alt={`${cfo.name}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {cfo.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Chief Finance Officer · CFO
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {cfo.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1">
                {cfo.bio}
              </p>
            </motion.div>

            {/* HR Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {hr.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={hr.photo}
                    alt={`${hr.name}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {hr.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Human Resources · HR
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {hr.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1">
                {hr.bio}
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10, 11, 12 — Current Team By Verified Work Area */}
      <section className="section-padding bg-white border-t border-surface-border text-text" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Team Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                The Current Team
              </span>
              <h2 id="team-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Operational focus and core responsibilities.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                Beyond central leadership, the daily development of Jayple is carried forward by team members structured around key work areas. Our teams collaborate closely to build services, connect with merchants, and coordinate active operations.
              </p>
            </motion.div>
          </div>

          {/* Department Loop */}
          <div className="space-y-16">
            {departments.map((dept, deptIdx) => (
              <div key={dept.id} className="border-t border-surface-border pt-12 first:border-0 first:pt-0">
                <div className="space-y-8">
                  
                  {/* Department Info */}
                  <div className="max-w-3xl">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      transition={TRANSITION_DEFAULT}
                    >
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-navy">
                        {dept.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-soft mt-2 leading-relaxed">
                        {dept.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Department Grid of Members */}
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  >
                    {dept.members.map((member, memberIdx) => {
                      // Derive initials correctly from public name
                      const derivedInitials = member.initials || member.name.split(' ').map(n => n[0]).join('')
                      
                      return (
                        <motion.li
                          key={member.name}
                          variants={fadeUp}
                          transition={TRANSITION_DEFAULT}
                          className="bg-surface-off border border-surface-border rounded-2xl p-5 flex flex-col items-center text-center hover:border-lime/40 transition-colors"
                        >
                          {/* Photo or Initials Fallback Avatar */}
                          {member.photo ? (
                            <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-4 bg-surface-warm border border-surface-border shrink-0 mx-auto">
                              <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 200px"
                                className="object-cover object-center"
                              />
                            </div>
                          ) : (
                            <div className="relative w-3/4 aspect-square rounded-xl bg-navy/5 border border-surface-border flex items-center justify-center font-display font-extrabold text-3xl text-navy shrink-0 mb-4 mx-auto select-none">
                              {derivedInitials}
                            </div>
                          )}
                          <div className="min-w-0">
                            <h4 className="font-bold text-[15px] sm:text-[16px] text-navy">
                              {member.name}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-text-soft mt-1">
                              {member.role}
                            </p>
                          </div>
                        </motion.li>
                      )
                    })}
                  </motion.ul>

                </div>
              </div>
            ))}
          </div>

          {/* 13 — Team-to-Working-Philosophy Transition */}
          <div className="border-t border-surface-border pt-16 mt-20 lg:mt-28">
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
                    Working Philosophy
                  </span>
                  <h3 className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight">
                    Different responsibilities come together through shared work.
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
                    The structure of our team details who holds specific responsibilities. The way we execute tasks together describes how we continue developing our platform. In the next chapter, we share the core principles that shape our daily working culture and how we build.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
