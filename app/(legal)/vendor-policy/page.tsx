import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner Policy — Jayple',
  description: 'Jayple Partner Policy — conduct standards, listing requirements, and operational guidelines for salon partners.',
  alternates: { canonical: 'https://jayple.in/vendor-policy/' },
}

export default function VendorPolicyPage() {
  return (
    <>
      <h1>Partner Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This Partner Policy outlines the conduct standards, operational guidelines, and requirements for all salon partners on the Jayple platform.
      </p>

      <h2>1. Salon Standards</h2>
      <p>All Jayple partner salons must:</p>
      <ul>
        <li>Maintain a clean, hygienic, and safe working environment</li>
        <li>Use sterilised and quality-grade tools and products</li>
        <li>Employ trained and qualified staff for all services offered</li>
        <li>Display pricing transparently with no hidden charges</li>
      </ul>

      <h2>2. Listing Requirements</h2>
      <ul>
        <li>All services listed must be actively offered at your salon</li>
        <li>Prices must reflect actual in-salon charges</li>
        <li>Photos must be accurate, recent, and representative of your salon</li>
        <li>Operating hours must be kept updated in real-time</li>
      </ul>

      <h2>3. Customer Conduct</h2>
      <p>
        Partners must treat all customers with respect and professionalism. Discrimination of any kind is strictly prohibited and will result in immediate removal from the platform.
      </p>

      <h2>4. Review Integrity</h2>
      <p>
        Partners must not solicit, incentivise, or manipulate customer reviews. All reviews on Jayple are verified against actual bookings. Fake reviews will result in permanent suspension.
      </p>

      <h2>5. Reporting Issues</h2>
      <p>
        Partners can report platform issues, policy violations by customers, or disputes by contacting <a href="mailto:partner@jayple.in">partner@jayple.in</a>.
      </p>

      <h2>6. Policy Updates</h2>
      <p>
        Jayple reserves the right to update this policy. Partners will be notified 14 days in advance of significant changes.
      </p>
    </>
  )
}
