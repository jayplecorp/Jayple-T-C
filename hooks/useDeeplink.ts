'use client'

import { useEffect, useCallback } from 'react'
import {
  PLAY_STORE_URL,
  APP_STORE_URL,
  ANDROID_PACKAGE,
  IOS_SCHEME,
} from '@/lib/tokens'

/**
 * Migrated 1:1 from site.js handleAppRedirect().
 * Android → Intent URL → fallback Play Store (2 s).
 * iOS     → Custom scheme → fallback App Store (2 s).
 * Desktop → no redirect.
 */
function handleAppRedirect() {
  if (typeof window === 'undefined') return

  const ua = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || ''
  const isAndroid = /android/i.test(ua as string)
  const isIOS = /iPad|iPhone|iPod/.test(ua as string) && !(window as Window & { MSStream?: unknown }).MSStream

  if (isAndroid) {
    const intentUrl = `intent://#Intent;scheme=jayple;package=${ANDROID_PACKAGE};end`
    window.location.replace(intentUrl)
    setTimeout(() => { window.location.replace(PLAY_STORE_URL) }, 2000)
  } else if (isIOS) {
    window.location.replace(IOS_SCHEME)
    setTimeout(() => { window.location.replace(APP_STORE_URL) }, 2000)
  }
  // Desktop: no redirect — let the normal href work
}

/**
 * Auto-redirects mobile visitors on page load (same as site.js).
 * Returns a memoized click handler for CTA buttons.
 */
export function useDeeplink(autoRedirect = true) {
  useEffect(() => {
    if (autoRedirect) handleAppRedirect()
  }, [autoRedirect])

  const onAppClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    handleAppRedirect()
  }, [])

  return { onAppClick }
}

/** Standalone click handler — use where you don't want the auto-redirect hook. */
export function onAppCTAClick(e: React.MouseEvent | React.TouchEvent) {
  e.preventDefault()
  handleAppRedirect()
}
