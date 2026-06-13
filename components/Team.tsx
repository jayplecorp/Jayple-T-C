'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const MEMBERS = [
  { name: 'Jayaprakash',  role: 'Product Lead',       photo: '/images/jayaprakash.jpg', initials: 'JP' },
  { name: 'Allwin',       role: 'Operations Lead',     photo: null,                      initials: 'AW' },
  { name: 'Janarthanan',  role: 'Backend Architect',   photo: null,                      initials: 'JN' },
  { name: 'Gouthem',      role: 'Growth Specialist',   photo: null,                      initials: 'GT' },
]

const AVATARCOLORS = [
  'from-navy to-navy-light',
  'from-navy-mid to-navy-soft',
  'from-navy to-navy-mid',
  'from-navy-light to-navy-soft',
]

export default function Team() {
  return (
    <section id="team" className="section-padding bg-surface-off" aria-labelledby="team-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 block">Our Team</span>
          <h2 id="team-heading" className="font-display text-display-lg text-text mb-4">
            The people behind Jayple
          </h2>
          <p className="text-text-soft text-[16px] leading-relaxed">
            A dedicated team of designers, operators and engineers scaling India's salon booking platform.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {MEMBERS.map(({ name, role, photo, initials }, idx) => (
            <motion.div
              key={name}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-md ring-2 ring-surface-border group-hover:ring-lime transition-all duration-300">
                {photo ? (
                  <Image src={photo} alt={name} width={96} height={96} className="object-cover w-full h-full" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${AVATARCOLORS[idx]}`}>
                    <span className="font-display font-extrabold text-2xl text-lime">{initials}</span>
                  </div>
                )}
              </div>
              <h4 className="font-bold text-[16px] text-text mb-0.5">{name}</h4>
              <p className="text-text-muted text-sm">{role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/20 rounded-md text-sm font-semibold text-text hover:border-navy hover:bg-navy hover:text-white transition-all duration-200"
          >
            Meet the full team
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
