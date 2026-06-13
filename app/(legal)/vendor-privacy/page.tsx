import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vendor Privacy Policy — Jayple',
  description: 'How Jayple collects, uses, and protects data belonging to salon partners and vendors.',
  alternates: { canonical: 'https://jayple.in/vendor-privacy/' },
}

export default function VendorPrivacyPage() {
  return (
    <>
      <h1>Vendor Privacy Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This policy explains how Jayple handles the personal and business data of salon partners (&quot;Vendors&quot;) registered on our platform.
      </p>

      <h2>1. Data We Collect from Vendors</h2>
      <ul>
        <li>Business name, address, and registration details</li>
        <li>Owner / manager name and contact information</li>
        <li>Bank account details for settlement processing</li>
        <li>Salon photos, service listings, and pricing</li>
        <li>Booking and revenue data</li>
        <li>App usage analytics</li>
      </ul>

      <h2>2. How We Use Vendor Data</h2>
      <ul>
        <li>To display your salon listing to customers on the Jayple platform</li>
        <li>To process settlements and issue payouts</li>
        <li>To send booking notifications and operational communications</li>
        <li>To provide business analytics and performance insights</li>
        <li>To comply with tax and regulatory requirements</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        Your business data (name, location, services, ratings) is shared publicly on the Jayple platform. Personal contact information is not shared with customers. Bank details are shared only with Razorpay for settlement processing.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain vendor data for the duration of the partnership and for 7 years thereafter for financial compliance purposes. You may request data deletion after the retention period.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        As a vendor, you may request access to, correction of, or deletion of your personal data by emailing <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>
      </p>
    </>
  )
}
