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
        Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information in compliance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023, and other applicable data protection regulations. This Privacy Policy explains how we collect, use, share, store, and protect your data when you use the Jayple mobile application, website (jayple.in), and related services (collectively, the &quot;Service&quot;).
      </p>
      <p>
        By using the Service, you consent to the collection and use of your data as described in this Privacy Policy. If you do not agree, please discontinue use of the Service.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of data:</p>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Account data:</strong> Full name, phone number, email address, and profile photo (optional)</li>
        <li><strong>Booking data:</strong> Appointment history, services booked, salon preferences, and review content</li>
        <li><strong>Payment data:</strong> Transaction IDs, payment amounts, and payment method type (card/UPI/wallet). We do <strong>not</strong> store card numbers, CVVs, or bank account credentials — these are handled exclusively by Razorpay.</li>
        <li><strong>Communication data:</strong> Messages sent to our support team, feedback, and survey responses</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Device data:</strong> Device type, manufacturer, operating system, OS version, app version, unique device identifiers</li>
        <li><strong>Usage data:</strong> Pages viewed, features used, session duration, tap/click events, and navigation paths</li>
        <li><strong>Location data:</strong> Approximate location (city-level) derived from IP address. We do <strong>not</strong> collect precise GPS location without explicit permission.</li>
        <li><strong>Log data:</strong> IP address, browser type, access timestamps, referring/exit pages, and crash reports</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <ul>
        <li><strong>Razorpay:</strong> Transaction status, payment confirmation, and settlement data</li>
        <li><strong>Google/Apple Sign-In:</strong> Name and email (if you use social login in the future)</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>Your data is used for the following specific purposes:</p>
      <ul>
        <li><strong>Service delivery:</strong> Process and confirm salon bookings, send appointment reminders, and enable in-app communication with salon partners</li>
        <li><strong>Payments:</strong> Process payments, issue refunds, and credit cashback to your Jayple Wallet</li>
        <li><strong>Personalisation:</strong> Show relevant salon recommendations, services, and offers based on your booking history and location</li>
        <li><strong>Customer support:</strong> Respond to your queries, complaints, and feedback</li>
        <li><strong>Analytics:</strong> Improve the platform through anonymised, aggregated usage analytics</li>
        <li><strong>Communication:</strong> Send transactional notifications (booking confirmations, payment receipts) and, with your consent, promotional communications</li>
        <li><strong>Safety &amp; security:</strong> Detect and prevent fraud, abuse, and security threats</li>
        <li><strong>Legal compliance:</strong> Comply with applicable laws, regulations, and legal processes</li>
      </ul>

      <h2>3. Legal Basis for Processing (DPDP Act)</h2>
      <p>Under India&apos;s DPDP Act, 2023, we process your data based on:</p>
      <ul>
        <li><strong>Consent:</strong> For marketing communications, promotional offers, and optional features like location-based recommendations</li>
        <li><strong>Contractual necessity:</strong> To fulfil our service obligations — processing bookings, payments, and delivering the service you requested</li>
        <li><strong>Legitimate interest:</strong> For fraud prevention, platform security, and improving user experience through anonymised analytics</li>
        <li><strong>Legal obligation:</strong> To comply with tax laws, financial regulations, and government requests</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>We do <strong>not sell</strong> your personal data to any third party. We share data only in the following limited circumstances:</p>
      <ul>
        <li><strong>Salon Partners:</strong> Your name and appointment details are shared with the Partner salon to fulfil your booking. Your phone number may be shared for appointment coordination.</li>
        <li><strong>Razorpay:</strong> Payment processing data is shared with Razorpay, governed by <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">Razorpay&apos;s Privacy Policy</a>.</li>
        <li><strong>Analytics providers:</strong> Anonymised, aggregated usage data only (no personally identifiable information). We may use services like Google Analytics or Firebase Analytics.</li>
        <li><strong>Cloud infrastructure:</strong> Your data is stored on secure cloud servers. Our infrastructure providers are contractually bound to maintain data confidentiality.</li>
        <li><strong>Legal authorities:</strong> When required by applicable law, court order, or government request</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity with prior notice</li>
      </ul>

      <h2>5. Data Retention</h2>
      <ul>
        <li><strong>Active accounts:</strong> We retain your data for as long as your account is active.</li>
        <li><strong>Deleted accounts:</strong> Upon account deletion, personal data is purged within 90 days, except data required for legal or regulatory compliance.</li>
        <li><strong>Financial records:</strong> Transaction records are retained for 7 years as required by Indian tax laws.</li>
        <li><strong>Anonymised data:</strong> Aggregated, anonymised analytics data may be retained indefinitely as it cannot be linked back to you.</li>
      </ul>
      <p>
        You may request deletion of your account and personal data at any time by emailing <a href="mailto:privacy@jayple.in">privacy@jayple.in</a> or through the app settings.
      </p>

      <h2>6. Your Rights Under the DPDP Act</h2>
      <p>As a data principal under India&apos;s Digital Personal Data Protection Act, 2023, you have the right to:</p>
      <ul>
        <li><strong>Right to access:</strong> Request a summary of the personal data we hold about you</li>
        <li><strong>Right to correction:</strong> Request correction of inaccurate or outdated personal data</li>
        <li><strong>Right to erasure:</strong> Request deletion of your personal data, subject to legal retention requirements</li>
        <li><strong>Right to withdraw consent:</strong> Withdraw consent for data processing at any time (note: this may affect your ability to use certain features)</li>
        <li><strong>Right to grievance redressal:</strong> File a complaint with our Grievance Officer or the Data Protection Board of India</li>
        <li><strong>Right to nominate:</strong> Nominate a person to exercise your data rights in the event of your death or incapacity</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>. We will respond within 30 days.</p>

      <h2>7. Consent &amp; Withdrawal</h2>
      <p>
        By creating a Jayple account, you provide consent for the collection and processing of your data as described in this policy. You may withdraw consent at any time by:
      </p>
      <ul>
        <li>Adjusting notification preferences in the app settings</li>
        <li>Emailing <a href="mailto:privacy@jayple.in">privacy@jayple.in</a> with your withdrawal request</li>
        <li>Deleting your account through the app or via email</li>
      </ul>
      <p>
        Please note that withdrawal of consent for essential data processing (e.g., booking and payment processing) will result in the inability to use core features of the Service.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Jayple is not intended for use by individuals under the age of 18 without parental or guardian consent. We do not knowingly collect personal data from children under 18. If we become aware that we have collected data from a child without appropriate consent, we will take steps to delete that information promptly. If you believe a child has provided us with personal data, please contact us at <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>.
      </p>

      <h2>9. Cookies &amp; Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar tracking technologies to improve your browsing experience. For complete details on what cookies we use, why we use them, and how to manage them, please refer to our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>10. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data, including:</p>
      <ul>
        <li><strong>Encryption:</strong> All data in transit is encrypted using TLS 1.2+ / HTTPS. Sensitive data at rest is encrypted using AES-256.</li>
        <li><strong>Access controls:</strong> Role-based access controls (RBAC) ensure that only authorised personnel can access personal data.</li>
        <li><strong>Payment security:</strong> All payments are processed through Razorpay&apos;s PCI-DSS Level 1 certified infrastructure.</li>
        <li><strong>Monitoring:</strong> We conduct regular security audits and vulnerability assessments.</li>
        <li><strong>Incident response:</strong> We have an incident response plan to handle data breaches. In the event of a breach affecting your data, we will notify you and relevant authorities as required by law.</li>
      </ul>
      <p>
        While we take reasonable measures to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
      </p>

      <h2>11. Data Localisation</h2>
      <p>
        In compliance with RBI guidelines and Indian data protection laws, all payment data and financial information is stored within India. Other personal data may be processed using cloud services with servers located in India or other jurisdictions with adequate data protection safeguards.
      </p>
      <p>
        If your data is transferred outside India, we ensure appropriate safeguards are in place, including contractual protections with our service providers.
      </p>

      <h2>12. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites or services (e.g., Razorpay, Google Play Store, Apple App Store). We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before sharing any personal data.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes:
      </p>
      <ul>
        <li>We will notify you via in-app notification or email at least 14 days before the changes take effect</li>
        <li>The &quot;Last updated&quot; date at the top of this page will be revised</li>
        <li>Continued use of the Service after the effective date constitutes acceptance of the updated policy</li>
      </ul>

      <h2>14. Grievance Officer</h2>
      <p>
        In accordance with the DPDP Act, 2023, and the Information Technology Act, 2000, we have appointed a Grievance Officer to address your concerns regarding data processing:
      </p>
      <ul>
        <li><strong>Name:</strong> Jayaprakash (Grievance Officer)</li>
        <li><strong>Email:</strong> <a href="mailto:grievance@jayple.in">grievance@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
        <li><strong>Response time:</strong> We will acknowledge your complaint within 48 hours and resolve it within 30 days</li>
      </ul>
      <p>
        If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of India as established under the DPDP Act.
      </p>

      <h2>15. Contact Us</h2>
      <p>For any privacy-related questions, requests, or concerns, contact us at:</p>
      <ul>
        <li><strong>Data Protection Officer:</strong> <a href="mailto:privacy@jayple.in">privacy@jayple.in</a></li>
        <li><strong>General support:</strong> <a href="mailto:support@jayple.in">support@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </>
  )
}
