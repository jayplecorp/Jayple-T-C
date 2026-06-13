'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'

const SERVICES = [
  { emoji: '✂️',  name: 'Haircut' },
  { emoji: '🧔',  name: 'Beard Styling' },
  { emoji: '💆',  name: 'Facial' },
  { emoji: '🍃',  name: 'Spa' },
  { emoji: '🎨',  name: 'Hair Coloring' },
  { emoji: '💄',  name: 'Bridal Makeup' },
  { emoji: '💅',  name: 'Manicure' },
  { emoji: '✨',  name: 'Pedicure' },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface-warm" aria-labelledby="services-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 block">Service Catalog</span>
          <h2 id="services-heading" className="font-display text-display-lg text-text mb-4">Popular categories</h2>
          <p className="text-text-soft text-[16px]">Book any premium service instantly at trusted partner salons.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {SERVICES.map(({ emoji, name }) => (
            <motion.button
              key={name}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              onClick={onAppCTAClick}
              className="group flex flex-col items-center gap-3 bg-surface border border-surface-border rounded-md p-5 hover:border-lime hover:shadow-lime-sm card-hover cursor-pointer"
              aria-label={`Book ${name}`}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{emoji}</span>
              <span className="text-sm font-semibold text-text">{name}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
        >
          <a
            href="#get-app"
            onClick={onAppCTAClick}
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-lime-dark transition-colors"
          >
            View all services →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
