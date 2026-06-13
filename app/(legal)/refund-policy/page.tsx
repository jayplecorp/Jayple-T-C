import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — Jayple',
  description: 'Jayple\'s cancellation and refund policy — how to cancel bookings, refund timelines, and eligibility.',
  alternates: { canonical: 'https://jayple.in/refund-policy/' },
}

export default function RefundPolicyPage() {
  return (
    <>
      <h1>Cancellation &amp; Refund Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>

      <h2>1. Cancellation by Customer</h2>
      <p>You may cancel a booking through the Jayple app subject to the following:</p>
      <ul>
        <li><strong>More than 2 hours before appointment:</strong> Full refund to Jayple Wallet or original payment method.</li>
        <li><strong>1–2 hours before appointment:</strong> 50% refund to Jayple Wallet.</li>
        <li><strong>Less than 1 hour before appointment:</strong> No refund.</li>
      </ul>

      <h2>2. Cancellation by Salon Partner</h2>
      <p>
        If a salon partner cancels your confirmed booking, you will receive a full refund to your original payment method within 5–7 business days. A Jayple Wallet credit of ₹50 will also be added as a goodwill gesture.
      </p>

      <h2>3. No-Show Policy</h2>
      <p>
        If you do not show up for your appointment without prior cancellation, no refund will be issued. Repeated no-shows may result in account restrictions.
      </p>

      <h2>4. Refund Process</h2>
      <ul>
        <li><strong>Jayple Wallet:</strong> Instant credit.</li>
        <li><strong>UPI / Net Banking:</strong> 3–5 business days.</li>
        <li><strong>Credit / Debit Cards:</strong> 5–7 business days (subject to bank processing).</li>
      </ul>

      <h2>5. Service Quality Issues</h2>
      <p>
        If you are dissatisfied with a service received, please contact us at <a href="mailto:support@jayple.in">support@jayple.in</a> within 24 hours of your appointment. We will investigate and, where warranted, issue a partial or full refund.
      </p>

      <h2>6. Contact</h2>
      <p>
        For cancellation or refund queries, contact us at <a href="mailto:support@jayple.in">support@jayple.in</a>.
      </p>
    </>
  )
}
