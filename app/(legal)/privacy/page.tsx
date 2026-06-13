import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Jayple',
  description: 'Jayple Privacy Policy — how we collect, use, and protect your personal data in compliance with India\'s DPDP Act.',
  alternates: { canonical: 'https://jayple.in/privacy/' },
}

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information in compliance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023. This Privacy Policy explains how we collect, use, share, and protect your data.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of data:</p>
      <ul>
        <li><strong>Account data:</strong> Name, phone number, email address</li>
        <li><strong>Booking data:</strong> Appointment history, services booked, salon preferences</li>
        <li><strong>Payment data:</strong> Transaction IDs and amounts (card/bank details are never stored by Jayple)</li>
        <li><strong>Device data:</strong> Device type, OS, app version, IP address</li>
        <li><strong>Usage data:</strong> Pages viewed, features used, session duration</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>Your data is used to:</p>
      <ul>
        <li>Process and confirm salon bookings</li>
        <li>Send booking confirmations and reminders</li>
        <li>Credit wallet cashback rewards</li>
        <li>Provide customer support</li>
        <li>Improve the platform through anonymised analytics</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>We do not sell your personal data. We share data only with:</p>
      <ul>
        <li><strong>Salon partners:</strong> Your name and appointment details, to fulfil bookings</li>
        <li><strong>Razorpay:</strong> Payment processing (governed by Razorpay&apos;s privacy policy)</li>
        <li><strong>Analytics providers:</strong> Anonymised, aggregated usage data only</li>
        <li><strong>Legal authorities:</strong> When required by applicable law</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active or as required by law. You may request deletion of your account and data by emailing <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>.
      </p>

      <h2>5. Your Rights (DPDP Act)</h2>
      <p>Under India&apos;s DPDP Act, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate or outdated data</li>
        <li>Request erasure of your data</li>
        <li>Withdraw consent for data processing</li>
        <li>File a complaint with the Data Protection Board of India</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Our website uses cookies to improve your experience. See our <a href="/cookie-policy">Cookie Policy</a> for full details.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard encryption (TLS/HTTPS), access controls, and regular security audits to protect your data. Payments are processed through Razorpay&apos;s PCI-DSS certified infrastructure.
      </p>

      <h2>8. Contact</h2>
      <p>
        For privacy-related requests, contact our Data Protection Officer at <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>.
      </p>
    </>
  )
}
