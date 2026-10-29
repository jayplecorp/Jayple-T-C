import type { Metadata } from 'next'
import CouponLanding from './CouponLanding'

// Share links like jayple.in/c/500wala. With the app installed, Android App
// Links / iOS Universal Links open the app straight away (it applies the code
// in the cart). This page is only what people WITHOUT the app see: it sends
// them to their store and shows the code to copy.
const CODES = ['500wala', 'just4u']

export function generateStaticParams() {
  return CODES.map((code) => ({ code }))
}

export const metadata: Metadata = {
  title: 'Jayple — Diwali cashback',
  description: 'Book your salon on Jayple and get up to ₹500 cashback with code 500WALA.',
  robots: { index: false },
}

export default function Page({ params }: { params: { code: string } }) {
  const { code } = params
  return <CouponLanding code={code.toUpperCase()} />
}
