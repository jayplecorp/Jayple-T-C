'use client'

import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <rect x={3} y={4} width={18} height={18} rx={2} />
    <line x1={16} y1={2} x2={16} y2={6} />
    <line x1={8} y1={2} x2={8} y2={6} />
    <line x1={3} y1={10} x2={21} y2={10} />
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M9 12l2 2 4-4" />
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
)

const FEATURES = [
  {
    tag: 'No waiting',
    title: 'Skip the Queue.\nWalk In On Time.',
    desc: 'Arrive exactly when your stylist is ready. Our slot-based booking eliminates waiting rooms and wasted hours — forever. Your time is valuable.',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Customer relaxed in a professional barbershop chair',
    Icon: ClockIcon,
    imageRight: true,
  },
  {
    tag: 'Instant booking',
    title: 'Book Your Favourite\nSalon in Seconds.',
    desc: 'Discover top-rated salons nearby, compare services and prices, pick your preferred time slot, and get instant confirmation — all from the Jayple app.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Woman with vibrant colored hair in a modern salon',
    Icon: CalendarIcon,
    imageRight: false,
  },
  {
    tag: 'Verified salons',
    title: 'Every Salon,\nQuality-Verified by Us.',
    desc: 'Every partner on Jayple passes a strict onboarding check — hygiene standards, stylist credentials, real reviews. Walk in with absolute confidence.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Clean, modern premium salon interior',
    Icon: ShieldIcon,
    imageRight: true,
  },
  {
    tag: 'Cashback rewards',
    title: 'Earn Cashback\non Every Visit.',
    desc: 'Get rewarded for looking good. Earn cashback credited straight to your Jayple Wallet on every booking. Spend it on your next visit or withdraw anytime.',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Professional makeup application in a beauty studio',
    Icon: WalletIcon,
    imageRight: false,
  },
]

function FeatureBlock({
  tag, title, desc, img, imgAlt, Icon, imageRight, index,
}: typeof FEATURES[0] & { index: number }) {
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-surface-off'

  return (
    <div className={bg}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 items-center min-h-[500px]">
          {/* Text */}
          <motion.div
            className={`py-16 lg:py-24 ${imageRight ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'}`}
            initial={{ opacity: 0, x: imageRight ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-md bg-lime/10 flex items-center justify-center text-navy">
                <Icon />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{tag}</span>
            </div>
            <h3 className="font-display font-extrabold text-text leading-[1.1] mb-5 whitespace-pre-line"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', letterSpacing: '-0.04em' }}>
              {title}
            </h3>
            <p className="text-text-soft text-[16px] leading-relaxed max-w-[440px]">{desc}</p>
          </motion.div>

          {/* Image */}
          <motion.div
            className={`hidden lg:block overflow-hidden ${imageRight ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={img}
                alt={imgAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle lime accent border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-lime" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="why" aria-labelledby="features-heading">
      {/* Section header */}
      <div className="bg-white">
        <div className="container-max pt-24 pb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 block">Why Jayple</span>
            <h2 id="features-heading" className="font-display text-display-lg text-text mb-5">
              Built for customers.{' '}
              <span className="text-navy">Designed for salon growth.</span>
            </h2>
            <p className="text-text-soft text-[16px] leading-relaxed">
              Jayple connects customers with verified beauty professionals — seamlessly, instantly, locally in Trichy.
            </p>
          </motion.div>
        </div>
      </div>

      {FEATURES.map((feature, i) => (
        <FeatureBlock key={feature.tag} {...feature} index={i} />
      ))}
    </section>
  )
}
