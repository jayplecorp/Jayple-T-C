export const EASE = [0.22, 1, 0.36, 1] as const

export const FRAMER_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export const TRANSITION_DEFAULT = {
  duration: 0.55,
  ease: EASE,
}

export const TRANSITION_SLOW = {
  duration: 0.75,
  ease: EASE,
}

export const SPRING = {
  type: 'spring' as const,
  stiffness: 280,
  damping: 22,
}

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.jayple.app'
export const APP_STORE_URL  = 'https://apps.apple.com/app/id6779542812'
export const ANDROID_PACKAGE = 'com.jayple.app'
export const IOS_SCHEME      = 'jayple://'
