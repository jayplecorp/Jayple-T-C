import type { Metadata } from 'next'
import LegalDocViewer from '@/components/LegalDocViewer'

export const metadata: Metadata = {
  title: 'Partner Policy — Jayple',
  description: 'Jayple Partner Policy — conduct standards, listing requirements, and operational guidelines for salon partners.',
  alternates: { canonical: 'https://jayple.in/vendor-policy/' },
}

export default function VendorPolicyPage() {
  return (
    <LegalDocViewer>
      <h1>Partner Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This Partner Policy outlines the conduct standards, operational guidelines, and quality requirements for all salon partners on the Jayple platform. By registering as a Jayple partner, you agree to abide by these standards. This policy is supplementary to the <a href="/vendor-terms">Vendor Terms &amp; Conditions</a>.
      </p>

      <h2>1. Salon Standards &amp; Hygiene</h2>
      <p>All Jayple partner salons must maintain the following standards at all times:</p>
      <ul>
        <li>Maintain a clean, hygienic, and safe working environment</li>
        <li>Use sterilised and quality-grade tools and equipment for every customer</li>
        <li>Sanitise workstations between customers</li>
        <li>Employ trained and qualified staff for all services listed on the platform</li>
        <li>Ensure proper waste disposal and ventilation</li>
        <li>Display pricing transparently with no hidden charges</li>
        <li>Keep first-aid supplies accessible on premises</li>
        <li>Follow all local municipal health and safety regulations</li>
      </ul>

      <h2>2. Listing Requirements</h2>
      <p>Your Jayple listing must accurately represent your salon:</p>
      <ul>
        <li>All services listed must be actively offered at your salon</li>
        <li>Prices must reflect actual in-salon charges — no bait-and-switch pricing</li>
        <li>Photos must be accurate, recent (taken within the last 6 months), and representative of your salon&apos;s current condition</li>
        <li>Operating hours must be kept updated in real-time, including holiday closures</li>
        <li>Staff profiles should include accurate names, specialisations, and experience levels</li>
        <li>Any temporary unavailability (vacation, renovation) must be updated promptly</li>
      </ul>

      <h2>3. Customer Conduct &amp; Service Excellence</h2>
      <p>
        Partners must treat all customers with respect, professionalism, and courtesy. This includes:
      </p>
      <ul>
        <li>Welcoming customers warmly and acknowledging their booking</li>
        <li>Providing the booked service at the confirmed time and price</li>
        <li>Not discriminating against any customer based on gender, religion, caste, race, disability, or any other protected characteristic</li>
        <li>Handling complaints professionally and de-escalating conflicts</li>
        <li>Respecting customer preferences and asking for consent before any additional services</li>
        <li>Never pressuring customers to purchase additional products or services</li>
      </ul>
      <p>
        <strong>Zero tolerance:</strong> Discrimination, harassment, or abusive behaviour towards any customer will result in immediate removal from the platform without prior notice.
      </p>

      <h2>4. Review Integrity</h2>
      <p>
        Customer reviews are a critical trust signal on Jayple. To maintain review integrity:
      </p>
      <ul>
        <li>Partners must <strong>not</strong> solicit, incentivise, or manipulate customer reviews</li>
        <li>Partners must <strong>not</strong> offer discounts, freebies, or cashback in exchange for positive reviews</li>
        <li>Partners must <strong>not</strong> ask customers to change or remove negative reviews</li>
        <li>All reviews on Jayple are verified against actual completed bookings</li>
        <li>Fake or manipulated reviews will result in review removal and potential account suspension</li>
      </ul>
      <p>
        Partners may respond to reviews professionally through the Partner App. Jayple reviews responses before they are published to ensure they meet community standards.
      </p>

      <h2>5. Slot &amp; Availability Management</h2>
      <p>Proper slot management is essential for a good customer experience:</p>
      <ul>
        <li>Keep your availability calendar updated daily</li>
        <li>Block off slots when you or your staff are unavailable</li>
        <li>Do not accept more bookings than you can serve in a given time window</li>
        <li>If a customer arrives and you cannot serve them due to overbooking, Jayple will issue a full refund and the incident will be recorded</li>
      </ul>

      <h2>6. Off-Platform Activity</h2>
      <p>Partners must not:</p>
      <ul>
        <li>Redirect Jayple customers to book directly (via phone, WhatsApp, or walk-in) to avoid platform commission</li>
        <li>Collect customer phone numbers or personal data for off-platform marketing</li>
        <li>Offer different (lower) prices to customers who book outside Jayple</li>
        <li>Encourage customers to cancel Jayple bookings and rebook directly</li>
      </ul>
      <p>Violation of this policy will result in warnings, penalties, and potential removal from the platform.</p>

      <h2>7. Enforcement &amp; Consequences</h2>
      <p>Jayple takes policy violations seriously. Our enforcement process follows a graduated approach:</p>

      <h3>Level 1 — Warning</h3>
      <ul>
        <li>First-time minor violations (e.g., outdated photos, minor pricing discrepancy)</li>
        <li>Email and in-app notification with corrective guidance</li>
        <li>7-day window to rectify the issue</li>
      </ul>

      <h3>Level 2 — Temporary Suspension</h3>
      <ul>
        <li>Repeated minor violations or first-time moderate violations (e.g., customer complaint, overbooking)</li>
        <li>Listing suspended for 7–14 days</li>
        <li>Reinstatement after corrective action and acknowledgement</li>
      </ul>

      <h3>Level 3 — Permanent Removal</h3>
      <ul>
        <li>Severe violations: fraud, discrimination, harassment, repeated customer safety complaints</li>
        <li>Immediate listing removal without prior notice</li>
        <li>Outstanding settlements processed within 15 business days</li>
        <li>Banned from re-registering on the platform</li>
      </ul>

      <h2>8. Reporting Issues</h2>
      <p>
        Partners can report platform issues, policy violations by customers, disputes, or concerns by contacting:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:partner@jayple.in">partner@jayple.in</a></li>
        <li><strong>In-app:</strong> Partner App → Support → Report Issue</li>
        <li><strong>Urgent issues:</strong> Email with subject line &quot;URGENT&quot; for priority handling</li>
      </ul>
      <p>We aim to acknowledge all partner reports within 24 hours and resolve them within 5 business days.</p>

      <h2>9. Policy Updates</h2>
      <p>
        Jayple reserves the right to update this Partner Policy from time to time. Partners will be notified via email and in-app notification at least <strong>14 days in advance</strong> of significant changes. Continued use of the Partner App after the effective date constitutes acceptance of the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>For questions or clarifications about this policy:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:partner@jayple.in">partner@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </LegalDocViewer>
  )
}
