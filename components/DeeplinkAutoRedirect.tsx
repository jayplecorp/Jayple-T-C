'use client'

import { useDeeplink } from '@/hooks/useDeeplink'

/**
 * Mounts on the homepage and auto-redirects mobile visitors
 * exactly as site.js did — no UI rendered.
 */
export default function DeeplinkAutoRedirect() {
  useDeeplink(true)
  return null
}
