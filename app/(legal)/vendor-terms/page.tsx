import type { Metadata } from 'next'
import LegalDocViewer from '@/components/LegalDocViewer'

export const metadata: Metadata = {
  title: 'Vendor Terms & Conditions — Jayple',
  description: 'Terms and conditions for salon partners and vendors on the Jayple platform.',
  alternates: { canonical: 'https://jayple.in/vendor-terms/' },
}

export default function VendorTermsPage() {
  return (
    <LegalDocViewer>
      <h1>Vendor Terms &amp; Conditions</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        These Vendor Terms &amp; Conditions (&quot;Vendor Terms&quot;) govern your participation as a salon partner (&quot;Vendor&quot;, &quot;Partner&quot;, or &quot;you&quot;) on the Jayple platform. By completing the onboarding process and listing your salon on Jayple, you agree to be bound by these Vendor Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        To become a Jayple partner, your salon or beauty business must meet the following requirements:
      </p>
      <ul>
        <li>Be a legitimate, registered business operating in India with valid business registration (GST, Shop &amp; Establishment, or equivalent)</li>
        <li>Provide accurate business information, valid identification of the business owner/manager, and a functioning bank account for settlements</li>
        <li>Operate from a physical premises that meets basic hygiene and safety standards</li>
        <li>Have at least one trained stylist or beauty professional on staff</li>
        <li>Be located within Jayple&apos;s currently operational service areas</li>
      </ul>

      <h2>2. Onboarding Process</h2>
      <p>The partner onboarding process includes:</p>
      <ul>
        <li>Submission of business details, owner identification, and bank information</li>
        <li>Verification of business registration documents</li>
        <li>An optional premises inspection or virtual verification call</li>
        <li>Profile setup including services, pricing, photos, and availability</li>
        <li>Agreement to these Vendor Terms and the <a href="/vendor-policy">Partner Policy</a></li>
      </ul>
      <p>Jayple reserves the right to reject any application at its sole discretion without providing reasons.</p>

      <h2>3. Listing Accuracy</h2>
      <p>
        You are responsible for maintaining accurate and up-to-date information on your Jayple listing at all times, including:
      </p>
      <ul>
        <li>Salon name, address, and contact information</li>
        <li>Service names, descriptions, and accurate pricing</li>
        <li>Operating hours and availability</li>
        <li>Salon photos (must be recent, accurate, and representative of the current premises)</li>
        <li>Staff profiles and specialisations</li>
      </ul>
      <p>
        Misleading, outdated, or false information may result in listing suspension, reduced visibility, or permanent removal from the platform.
      </p>

      <h2>4. Appointment Obligations</h2>
      <p>
        Once a booking is confirmed through Jayple, you are obligated to honour the appointment at the agreed time, service, and price. Specifically:
      </p>
      <ul>
        <li>You must serve the customer at the booked time slot or within a reasonable window (10 minutes)</li>
        <li>You must provide the exact service and at the price listed on the platform</li>
        <li>You must not charge the customer any additional fees beyond the amount confirmed in the booking</li>
        <li>You must not redirect customers to off-platform bookings or payments</li>
      </ul>

      <h2>5. Cancellation by Partner</h2>
      <p>
        You should avoid cancelling confirmed bookings. If cancellation is unavoidable (e.g., emergency, staff unavailability), you must cancel through the Jayple Partner App as early as possible. Consequences of partner cancellations include:
      </p>
      <ul>
        <li>A full refund is issued to the customer plus a ₹50 goodwill credit from Jayple</li>
        <li>Repeated cancellations (&gt;3 in a month) will trigger a review and may result in penalties</li>
        <li>Excessive cancellations may lead to temporary or permanent removal from the platform</li>
      </ul>

      <h2>6. Commission &amp; Settlements</h2>
      <ul>
        <li>Jayple charges a platform commission on each completed booking. The commission rate is communicated during onboarding and may vary by service category.</li>
        <li>Settlements are processed on a <strong>T+2 business day</strong> cycle to your registered bank account via NEFT/IMPS.</li>
        <li>A detailed settlement report is available in the Jayple Partner App after each payout cycle.</li>
        <li>Commission rates may be updated with <strong>30 days&apos; prior notice</strong> via email and in-app notification.</li>
        <li>Promotional commission waivers or reduced rates, if offered, are time-bound and subject to separate terms.</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <ul>
        <li>The Jayple brand, logo, UI, software, and platform technology are the exclusive property of Jayple. You may not use Jayple&apos;s branding without prior written permission.</li>
        <li>By uploading photos, descriptions, and content to your listing, you grant Jayple a non-exclusive, royalty-free licence to display and promote your salon on the platform and in marketing materials.</li>
        <li>You retain ownership of your original content (photos, descriptions). You may request removal of your content upon termination of the partnership.</li>
      </ul>

      <h2>8. Data Ownership &amp; Usage</h2>
      <ul>
        <li>Customer data shared with you (name, booking details) must be used solely for fulfilling the booked appointment.</li>
        <li>You must not contact customers for marketing, solicit off-platform bookings, or share customer data with third parties.</li>
        <li>Booking analytics, revenue data, and performance metrics provided to you in the Partner App are for your internal business use only.</li>
        <li>For detailed data handling terms, refer to our <a href="/vendor-privacy">Vendor Privacy Policy</a>.</li>
      </ul>

      <h2>9. Liability &amp; Indemnification</h2>
      <ul>
        <li>You are solely responsible for the quality, safety, and execution of salon services provided to customers.</li>
        <li>Jayple is not liable for any injury, damage, dissatisfaction, or dispute arising from services rendered by you.</li>
        <li>You agree to indemnify Jayple against any claims, damages, losses, or expenses arising from your services, conduct, or breach of these Vendor Terms.</li>
        <li>You must maintain adequate professional liability insurance (recommended but not currently mandatory).</li>
      </ul>

      <h2>10. Quality Standards</h2>
      <p>
        All services must meet the quality and hygiene standards outlined in our <a href="/vendor-policy">Partner Policy</a>. Key requirements include:
      </p>
      <ul>
        <li>Maintain a clean, hygienic, and safe working environment</li>
        <li>Use sterilised and quality-grade tools and products</li>
        <li>Employ trained and qualified staff for all listed services</li>
        <li>Partners with consistently low ratings (below 3.5 average) will be subject to review, coaching, or removal</li>
      </ul>

      <h2>11. Termination</h2>
      <ul>
        <li><strong>By Partner:</strong> You may terminate the partnership with 30 days&apos; written notice to <a href="mailto:partner@jayple.in">partner@jayple.in</a>. Outstanding settlements will be processed within 15 business days of termination.</li>
        <li><strong>By Jayple:</strong> Jayple may terminate the partnership immediately in cases of fraud, repeated policy violations, legal non-compliance, or behaviour that harms the platform&apos;s reputation.</li>
        <li><strong>Effect of termination:</strong> Your listing will be removed, pending settlements will be processed, and customer data must be deleted or returned.</li>
      </ul>

      <h2>12. Dispute Resolution</h2>
      <p>
        Any disputes between you and Jayple shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, the dispute shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996, with the seat in Trichy, Tamil Nadu.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Vendor Terms are governed by the laws of India. Subject to the arbitration clause, courts in Trichy (Tiruchirappalli), Tamil Nadu shall have exclusive jurisdiction.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        Jayple may update these Vendor Terms from time to time. Material changes will be communicated via email and in-app notification at least 30 days before they take effect. Continued use of the Partner App after the effective date constitutes acceptance.
      </p>

      <h2>15. Contact</h2>
      <p>For vendor-related queries:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:partner@jayple.in">partner@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </LegalDocViewer>
  )
}
