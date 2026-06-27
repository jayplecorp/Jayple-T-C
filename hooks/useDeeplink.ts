'use client'

import { useEffect, useCallback } from 'react'
import {
  PLAY_STORE_URL,
  APP_STORE_URL,
  ANDROID_PACKAGE,
} from '@/lib/tokens'

/* ── Platform detection ─────────────────────────────── */

function getPlatform(): 'ios' | 'android' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'

  const ua = navigator.userAgent || navigator.vendor || ''

  // iOS detection (iPhone, iPad, iPod — including iPadOS reporting as Mac)
  if (/iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream) {
    return 'ios'
  }
  // iPadOS 13+ reports as Mac — check touch support
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) {
    return 'ios'
  }

  if (/android/i.test(ua)) {
    return 'android'
  }

  return 'desktop'
}

/* ── Redirect logic ─────────────────────────────────── */

/**
 * Smart deep-link redirect:
 *
 * Android → Intent URI (opens app if installed) → fallback to Play Store.
 * iOS     → Universal Link / scheme attempt → fallback to App Store.
 * Desktop → no redirect at all (normal website).
 *
 * Uses a hidden iframe to attempt the custom scheme so the current page
 * doesn't navigate away (avoids blank-page on failure). Falls back via
 * visibilitychange (app opened = page hidden) + timeout.
 */
function handleAppRedirect() {
  const platform = getPlatform()

  if (platform === 'desktop') return // Desktop: show normal website

  if (platform === 'android') {
    // Android Intent URL — opens the app if installed, otherwise does nothing.
    // After a delay, redirect to Play Store as fallback.
    const intentUrl =
      `intent://#Intent;scheme=jayple;package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`

    window.location.replace(intentUrl)
    return // Intent URL handles its own fallback via S.browser_fallback_url
  }

  if (platform === 'ios') {
    // For iOS: Universal Links handle the "app installed" case automatically
    // when the AASA file is set up. For explicit "Get the App" button clicks,
    // we try the custom scheme first, then fallback to App Store.

    const start = Date.now()
    let fallbackTimer: ReturnType<typeof setTimeout>

    // Listen for the page becoming hidden — means the app opened
    const onVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(fallbackTimer)
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Try custom scheme via a hidden iframe (avoids blank page if scheme fails)
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = 'jayple://'
    document.body.appendChild(iframe)

    // Remove iframe after a tick
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 100)

    // Fallback: if the app didn't open within 1.5s, go to App Store
    fallbackTimer = setTimeout(() => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      // Only redirect if we're still on the page (app didn't open)
      if (!document.hidden && Date.now() - start < 3000) {
        window.location.replace(APP_STORE_URL)
      }
    }, 1500)
  }
}

/**
 * Returns the appropriate store URL for the current platform.
 * Used as the href fallback for download buttons.
 */
export function getStoreUrl(): string {
  const platform = getPlatform()
  if (platform === 'ios') return APP_STORE_URL
  if (platform === 'android') return PLAY_STORE_URL
  return '#get-app' // Desktop: scroll to CTA section
}

/* ── React hook ─────────────────────────────────────── */

/**
 * Auto-redirects mobile visitors on page load.
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
