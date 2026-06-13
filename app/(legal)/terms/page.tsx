import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Jayple',
  description: 'Jayple Terms & Conditions — rules governing your use of the Jayple platform and services.',
  alternates: { canonical: 'https://jayple.in/terms/' },
}

export default function TermsPage() {
  return (
    <>
      <h1>Terms &amp; Conditions</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        These Terms &amp; Conditions govern your use of the Jayple platform, including the mobile application and website (collectively, the &quot;Service&quot;), operated by Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree, please do not use the Service.
      </p>

      <h2>1. Use of the Service</h2>
      <p>
        You must be at least 18 years old to use Jayple. By creating an account, you represent that you meet this requirement. You are responsible for maintaining the confidentiality of your account credentials.
      </p>

      <h2>2. Bookings & Appointments</h2>
      <p>
        When you book an appointment through Jayple, you are entering into an agreement with the salon partner, not with Jayple. Jayple acts as a technology facilitator. Appointment availability, service quality, and execution are the sole responsibility of the partner salon.
      </p>

      <h2>3. Payments</h2>
      <p>
        Payments are processed securely through Razorpay. By making a payment, you agree to Razorpay&apos;s terms of service. Jayple does not store payment card details. All transactions are encrypted and PCI-DSS compliant.
      </p>

      <h2>4. Cancellations & Refunds</h2>
      <p>
        Cancellation and refund terms are governed by our separate <strong>Cancellation &amp; Refund Policy</strong>. Please review it before booking.
      </p>

      <h2>5. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Submit false, misleading, or fraudulent information</li>
        <li>Attempt to access systems or data you are not authorized to access</li>
        <li>Interfere with the proper working of the Service</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, and intellectual property on the Service are owned by Jayple or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Jayple shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Trichy (Tiruchirappalli), Tamil Nadu.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about these Terms, contact us at <a href="mailto:legal@jayple.in">legal@jayple.in</a>.
      </p>
    </>
  )
}
