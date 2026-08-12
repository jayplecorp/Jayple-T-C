'use client'

import { useEffect } from 'react'

export default function MobileCustomerRedirect() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || ''

    const isMobile =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )

    if (isMobile) {
      window.location.replace('https://customer.jayple.in')
    }
  }, [])

  return null
}