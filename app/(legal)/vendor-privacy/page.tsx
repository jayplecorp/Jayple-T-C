import type { Metadata } from 'next'
import LegalDocViewer from '@/components/LegalDocViewer'

export const metadata: Metadata = {
  title: 'Vendor Privacy Policy — Jayple',
  description: 'How Jayple collects, uses, and protects data belonging to salon partners and vendors.',
  alternates: { canonical: 'https://jayple.in/vendor-privacy/' },
}

export default function VendorPrivacyPage() {
  return (
    <LegalDocViewer>
      <h1>Vendor Privacy Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This Vendor Privacy Policy explains how Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects the personal and business data of salon partners (&quot;Vendors&quot;) registered on the Jayple platform. This policy is supplementary to our general <a href="/privacy">Privacy Policy</a> and complies with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023.
      </p>

      <h2>1. Data We Collect from Vendors</h2>

      <h3>1.1 Business Information</h3>
      <ul>
        <li>Business name, trade name, and registration number (GST/Shop &amp; Establishment)</li>
        <li>Business address and salon location coordinates</li>
        <li>Business category and service types offered</li>
        <li>Salon photos, interior images, and branding assets</li>
        <li>Operating hours and holiday schedules</li>
      </ul>

      <h3>1.2 Personal Information</h3>
      <ul>
        <li>Owner / manager full name and contact number</li>
        <li>Email address</li>
        <li>Government-issued ID (Aadhaar, PAN, or equivalent — for verification only)</li>
        <li>Profile photo (optional)</li>
      </ul>

      <h3>1.3 Financial Information</h3>
      <ul>
        <li>Bank account details (account number, IFSC, account holder name) for settlement processing</li>
        <li>GST number and tax-related information</li>
        <li>Transaction history, commission records, and settlement data</li>
      </ul>

      <h3>1.4 Operational Data</h3>
      <ul>
        <li>Service listings, pricing, and slot availability</li>
        <li>Booking and revenue data</li>
        <li>Customer ratings and reviews received</li>
        <li>Partner App usage analytics (login frequency, feature usage)</li>
        <li>Support tickets and communication history</li>
      </ul>

      <h2>2. How We Use Vendor Data</h2>
      <ul>
        <li><strong>Listing display:</strong> To display your salon, services, prices, photos, and ratings on the Jayple platform to potential customers</li>
        <li><strong>Settlements:</strong> To process payment settlements and issue payouts to your registered bank account</li>
        <li><strong>Communications:</strong> To send booking notifications, operational updates, policy changes, and settlement reports</li>
        <li><strong>Analytics:</strong> To provide you with business performance insights, booking trends, and revenue analytics in the Partner App</li>
        <li><strong>Quality assurance:</strong> To monitor service quality through customer feedback and take action on complaints</li>
        <li><strong>Verification:</strong> To verify your identity, business registration, and legitimacy during onboarding</li>
        <li><strong>Legal compliance:</strong> To comply with tax regulations (GST returns, TDS), financial reporting, and government requests</li>
        <li><strong>Platform improvement:</strong> To improve partner tools, features, and the overall platform experience through anonymised analytics</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p><strong>Publicly visible data:</strong> The following information is displayed on your public Jayple listing:</p>
      <ul>
        <li>Business name, location, and address</li>
        <li>Services offered and pricing</li>
        <li>Salon photos and ratings</li>
        <li>Operating hours and availability</li>
      </ul>
      <p><strong>Not shared with customers:</strong></p>
      <ul>
        <li>Personal phone number (unless you opt-in for direct customer calls)</li>
        <li>Bank account details</li>
        <li>Government ID information</li>
        <li>Revenue and settlement data</li>
      </ul>
      <p><strong>Shared with third parties:</strong></p>
      <ul>
        <li><strong>Razorpay:</strong> Bank account details are shared solely for processing settlements, governed by <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">Razorpay&apos;s Privacy Policy</a></li>
        <li><strong>Tax authorities:</strong> Financial data shared as required by Indian tax laws</li>
        <li><strong>Legal authorities:</strong> When required by court order or government directive</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We protect vendor data using the same security measures as customer data:</p>
      <ul>
        <li><strong>Encryption:</strong> TLS 1.2+ for data in transit, AES-256 for sensitive data at rest</li>
        <li><strong>Access controls:</strong> Role-based access — only authorised Jayple personnel can access vendor data</li>
        <li><strong>Bank details:</strong> Encrypted and stored in compliance with PCI-DSS standards via Razorpay</li>
        <li><strong>ID documents:</strong> Government IDs used for verification are stored securely and access-restricted</li>
        <li><strong>Audit trails:</strong> All access to vendor data is logged for security monitoring</li>
      </ul>

      <h2>5. Data Retention</h2>
      <ul>
        <li><strong>Active partnerships:</strong> Data is retained for the duration of the active partnership.</li>
        <li><strong>After termination:</strong> Business data is retained for 90 days post-termination for settlement processing and dispute resolution, then deleted.</li>
        <li><strong>Financial records:</strong> Transaction records, settlement data, and tax-related information are retained for <strong>7 years</strong> as required by Indian tax and accounting laws.</li>
        <li><strong>Government ID:</strong> Verification documents are retained for 1 year after termination, then securely destroyed.</li>
        <li><strong>Anonymised data:</strong> Aggregated, anonymised analytics may be retained indefinitely.</li>
      </ul>

      <h2>6. Your Rights (DPDP Act Compliance)</h2>
      <p>As a data principal under the DPDP Act, 2023, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of all personal data we hold about you and your business</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or outdated data</li>
        <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations</li>
        <li><strong>Portability:</strong> Request your data in a commonly used, machine-readable format</li>
        <li><strong>Withdraw consent:</strong> Withdraw consent for non-essential data processing (note: this may affect your ability to remain on the platform)</li>
        <li><strong>Grievance redressal:</strong> File a complaint with our Grievance Officer or the Data Protection Board of India</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:privacy@jayple.in">privacy@jayple.in</a> with your registered business name and details.</p>

      <h2>7. Grievance Officer</h2>
      <p>For vendor data-related complaints:</p>
      <ul>
        <li><strong>Name:</strong> Jayaprakash (Grievance Officer)</li>
        <li><strong>Email:</strong> <a href="mailto:grievance@jayple.in">grievance@jayple.in</a></li>
        <li><strong>Response time:</strong> Acknowledgement within 48 hours, resolution within 30 days</li>
      </ul>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Vendor Privacy Policy periodically. Material changes will be communicated via email and in-app notification at least 14 days before they take effect.
      </p>

      <h2>9. Contact</h2>
      <p>For privacy-related queries:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacy@jayple.in">privacy@jayple.in</a></li>
        <li><strong>Partner support:</strong> <a href="mailto:partner@jayple.in">partner@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </LegalDocViewer>
  )
}
