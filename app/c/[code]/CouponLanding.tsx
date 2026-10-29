'use client'

import { useEffect, useState } from 'react'

const PLAY = 'https://play.google.com/store/apps/details?id=com.jayple.app'
const APPSTORE = 'https://apps.apple.com/in/app/jayple/id6779542812'

export default function CouponLanding({ code }: { code: string }) {
  const [os, setOs] = useState<'android' | 'ios' | 'other'>('other')
  const [copied, setCopied] = useState(false)

  const store = os === 'ios' ? APPSTORE
    : `${PLAY}&referrer=${encodeURIComponent(`utm_source=share_link&utm_campaign=${code.toLowerCase()}`)}`

  useEffect(() => {
    const ua = navigator.userAgent || ''
    const detected = /android/i.test(ua) ? 'android' : /iphone|ipad|ipod/i.test(ua) ? 'ios' : 'other'
    setOs(detected)
    if (detected === 'other') return
    // Copy the code first (works only after a tap on most phones; harmless if blocked).
    navigator.clipboard?.writeText(code).catch(() => {})
    const t = setTimeout(() => {
      window.location.href = detected === 'ios' ? APPSTORE
        : `${PLAY}&referrer=${encodeURIComponent(`utm_source=share_link&utm_campaign=${code.toLowerCase()}`)}`
    }, 2500)
    return () => clearTimeout(t)
  }, [code])

  const copy = () => {
    navigator.clipboard?.writeText(code).then(() => setCopied(true)).catch(() => setCopied(true))
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'radial-gradient(120% 90% at 50% 30%, #4a0d22 0%, #12030c 70%)', color: '#fff' }}>
      <img src="/images/diwali-500wala.jpg" alt="" className="w-full max-w-sm rounded-2xl shadow-2xl mb-8" />
      <div className="text-sm font-bold tracking-[0.2em] mb-3" style={{ color: '#F5C451' }}>YOUR CODE</div>
      <button onClick={copy}
        className="rounded-2xl px-8 py-4 text-3xl font-black tracking-widest mb-3"
        style={{ border: '3px dashed #F5C451', background: 'rgba(245,196,81,0.08)' }}>
        {code}
      </button>
      <div className="text-sm mb-8" style={{ color: '#FFE3A3' }}>
        {copied ? 'Copied! Apply it in your cart.' : 'Tap to copy · apply it in your cart'}
      </div>
      <a href={os === 'other' ? '/customer/' : store}
        className="w-full max-w-sm rounded-full py-4 text-lg font-extrabold"
        style={{ background: '#F5C451', color: '#12030c' }}>
        {os === 'ios' ? 'Get Jayple on the App Store' : os === 'android' ? 'Get Jayple on Google Play' : 'Get the Jayple app'}
      </a>
      {os !== 'other' && <div className="text-xs mt-4" style={{ color: 'rgba(255,255,255,.6)' }}>Taking you to the store…</div>}
      {os === 'other' && (
        <div className="flex gap-4 mt-4 text-sm underline" style={{ color: '#FFE3A3' }}>
          <a href={PLAY}>Google Play</a><a href={APPSTORE}>App Store</a>
        </div>
      )}
    </div>
  )
}
