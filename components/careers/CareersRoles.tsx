'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface RoleDetail {
  id: string
  name: string
  scope: string
  skills: string[]
  responsibilities: string[]
  requirements: string[]
  portfolioPreference?: string
  languagePreference?: string
}

const detailedRoles: RoleDetail[] = [
  {
    id: 'partner-success',
    name: 'Partner Success Executive (Male candidates only)',
    scope: 'Engage and coordinate with partners/vendors on a regular basis in Trichy, resolve concerns, and report feedback.',
    skills: [
      'Excellent communication in Tamil & English',
      'Strong vendor engagement and negotiation skills',
      'Calm, patient, and professional attitude',
      'Quick learner with strong adaptability',
      'Ability to work independently and collaboratively'
    ],
    responsibilities: [
      'Engage and coordinate with partners/vendors on a regular basis',
      'Negotiate terms and resolve issues raised by partners',
      'Maintain a calm, professional relationship with all vendors',
      'Follow up consistently to ensure timely resolution of partner concerns',
      'Report partner feedback and recurring issues to the team'
    ],
    requirements: [
      'Laptop',
      'Internet Connectivity'
    ]
  },
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    scope: 'Design creative graphics and brand media while preserving brand guidelines and visual consistency.',
    skills: [
      'Proficiency in design tools (Photoshop, Illustrator, Canva, or similar)',
      'Strong sense of layout, color, and branding consistency',
      'Ability to follow brand guidelines',
      'Attention to detail',
      'Time management'
    ],
    responsibilities: [
      'Design visual content for services, social media, and promotions',
      'Maintain consistent branding across all creatives',
      'Revise designs based on feedback within given timelines',
      'Organize and archive design files properly'
    ],
    requirements: [
      'Laptop',
      'Internet Connectivity'
    ],
    portfolioPreference: 'Portfolio or creative sample work preferred during application.'
  },
  {
    id: 'video-editor',
    name: 'Video Editor',
    scope: 'Edit raw footage into polished promotional and social media content for marketing campaigns.',
    skills: [
      'Proficiency in video editing software (Premiere Pro, CapCut, DaVinci Resolve, or similar)',
      'Strong sense of pacing, storytelling, and visual consistency',
      'Attention to detail',
      'Time management'
    ],
    responsibilities: [
      'Edit raw footage into polished promotional/social media content',
      'Add graphics, transitions, subtitles, and sound as needed',
      'Maintain consistent style across all edited content',
      'Deliver edits within given turnaround times'
    ],
    requirements: [
      'Laptop',
      'Internet Connectivity'
    ],
    portfolioPreference: 'Creative editing samples or demo reel preferred.'
  },
  {
    id: 'videographer',
    name: 'Videographer',
    scope: 'Shoot high-quality video content for marketing campaigns and coordinates shoot locations.',
    skills: [
      'Good understanding of camera work, framing, and lighting',
      'Ability to plan and execute shoots independently',
      'Attention to detail',
      'Time management'
    ],
    responsibilities: [
      'Shoot high-quality video content for marketing and services',
      'Coordinate shoot schedules and locations',
      'Ensure footage quality is consistent and usable for editing',
      'Hand over raw footage to the editing team on time'
    ],
    requirements: [
      'Camera/shooting equipment (owned or accessible)',
      'Laptop',
      'Internet Connectivity'
    ]
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    scope: 'Manage service listings, data entry, image uploads, and coordinates catalog accuracy.',
    skills: [
      'Data entry and content management',
      'Good written English (grammar and spelling)',
      'Attention to detail',
      'Ability to follow content guidelines',
      'Time management',
      'Basic internet research skills'
    ],
    responsibilities: [
      'Upload service images to the admin panel',
      'Add accurate titles and descriptions for services',
      'Ensure image quality and consistency',
      'Verify data before uploading',
      'Update existing content whenever required',
      'Report any missing or incorrect information'
    ],
    requirements: [
      'Laptop',
      'Internet Connectivity'
    ]
  },
  {
    id: 'customer-support',
    name: 'Customer Support Executive (Female candidates only)',
    scope: 'Coordinate customer queries and complaints, address booking updates, and escalate issues.',
    skills: [
      'Excellent communication in Tamil & English',
      'Patience and a calm, professional attitude while handling queries',
      'Ability to follow support guidelines and processes',
      'Time management'
    ],
    responsibilities: [
      'Handle customer queries and complaints professionally',
      'Provide accurate information about services',
      'Escalate unresolved issues to the concerned team',
      'Maintain records of customer interactions'
    ],
    requirements: [
      'Laptop',
      'Internet Connectivity'
    ]
  }
]

export default function CareersRoles() {
  return (
    <section className="section-padding bg-surface-off border-t border-b border-surface-border text-text" aria-labelledby="roles-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Opportunity Details
            </span>
            <h2 id="roles-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
              Internship role requirements &amp; responsibilities.
            </h2>
            <p className="text-sm sm:text-base text-text-soft leading-relaxed mt-4 max-w-xl mx-auto">
              Please review the skills, responsibilities, and hardware prerequisites for each area to identify where your capabilities match.
            </p>
          </motion.div>
        </div>

        {/* Roles Details Grid */}
        <div className="space-y-12">
          {detailedRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              id={role.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.05 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-10 scroll-mt-24"
            >
              <div className="border-b border-surface-border pb-6 mb-6">
                <span className="text-xs font-bold text-lime uppercase tracking-widest block mb-2">
                  Role Details
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-navy mb-3">
                  {role.name}
                </h3>
                <p className="text-sm text-text-soft leading-relaxed max-w-4xl">
                  {role.scope}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Column 1: Skills */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                    Required Skills
                  </h4>
                  <ul className="space-y-2" role="list">
                    {role.skills.map((skill) => (
                      <li key={skill} className="text-xs sm:text-sm text-text-soft flex items-start gap-2">
                        <span className="text-lime mt-1 select-none">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2" role="list">
                    {role.responsibilities.map((resp) => (
                      <li key={resp} className="text-xs sm:text-sm text-text-soft flex items-start gap-2">
                        <span className="text-lime mt-1 select-none">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Hardware & Parameters */}
                <div className="space-y-5 bg-surface-off border border-surface-border rounded-xl p-5">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                      Prerequisites
                    </h4>
                    <ul className="space-y-2" role="list">
                      {role.requirements.map((req) => (
                        <li key={req} className="text-xs text-text-soft flex items-start gap-2">
                          <span className="text-lime font-bold">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {role.portfolioPreference && (
                    <div className="border-t border-surface-border pt-4">
                      <h5 className="text-[10px] font-bold text-text-soft uppercase tracking-wider mb-1">
                        Preferences
                      </h5>
                      <p className="text-xs text-text-soft leading-normal">
                        {role.portfolioPreference}
                      </p>
                    </div>
                  )}

                  {role.languagePreference && (
                    <div className="border-t border-surface-border pt-4">
                      <h5 className="text-[10px] font-bold text-text-soft uppercase tracking-wider mb-1">
                        Language
                      </h5>
                      <p className="text-xs text-text-soft leading-normal">
                        {role.languagePreference}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
