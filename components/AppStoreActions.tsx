'use client'

import React from 'react'
import { companyData, isVerifiedValue } from '@/lib/companyData'
import { onAppCTAClick } from '@/hooks/useDeeplink'

interface AppStoreActionsProps {
  type?: 'customer' | 'partner'
  className?: string
}

export default function AppStoreActions({
  type = 'customer',
  className = '',
}: AppStoreActionsProps) {
  const isCustomer = type === 'customer'
  const appUrls = isCustomer ? companyData.apps.customer : companyData.apps.partner

  const hasAndroid = isVerifiedValue(appUrls.android)
  const hasIos = isVerifiedValue(appUrls.ios)

  if (!hasAndroid && !hasIos) return null

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {/* Android Badges */}
      {hasAndroid && (
        <a
          href={appUrls.android}
          onClick={onAppCTAClick}
          className="flex items-center gap-3 bg-white/08 border border-white/15 hover:bg-white/14 px-4.5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          aria-label={`Get Jayple ${isCustomer ? 'Customer' : 'Partner'} App on Google Play`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zM14.5 13.5l2.8 2.8-9.9 5.6 7.1-8.4zm0-3L7.4 2.1l9.9 5.6-2.8 2.8zM18.6 9.1l3.1 1.8c.7.4.7 1.4 0 1.8l-3.1 1.8L15.5 12l3.1-2.9z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[9px] text-text-on-dark-muted font-medium uppercase tracking-wider">GET IT ON</span>
            <span className="block text-xs font-bold text-white">Google Play</span>
          </span>
        </a>
      )}

      {/* iOS Badge */}
      {hasIos && (
        <a
          href={appUrls.ios}
          onClick={onAppCTAClick}
          className="flex items-center gap-3 bg-white/08 border border-white/15 hover:bg-white/14 px-4.5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          aria-label={`Download Jayple ${isCustomer ? 'Customer' : 'Partner'} App on App Store`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.4 1.4c.1 1-.3 2-.9 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.6-.8 1.7-1.3 2.6-1.4zM19 17.3c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9-1.8 0-2.2.9-3.6.9-1.5 0-2.7-1.5-3.5-2.9C.8 16.3.5 11.9 2.2 9.6c1-1.4 2.5-2.2 4-2.2 1.5 0 2.5 1 3.7 1 1.2 0 1.9-1 3.7-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 1.3 7.9z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[9px] text-text-on-dark-muted font-medium uppercase tracking-wider">Download on the</span>
            <span className="block text-xs font-bold text-white">App Store</span>
          </span>
        </a>
      )}
    </div>
  )
}
