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
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Jayple platform, including the mobile application (Android &amp; iOS) and website at jayple.in (collectively, the &quot;Service&quot;), operated by Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered in Trichy (Tiruchirappalli), Tamil Nadu, India.
      </p>
      <p>
        By accessing, downloading, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you disagree with any part of these Terms, you must immediately discontinue use of the Service.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>&quot;Platform&quot;</strong> refers to the Jayple mobile application and the website jayple.in.</li>
        <li><strong>&quot;User&quot;</strong> or <strong>&quot;Customer&quot;</strong> refers to any individual who accesses the Service to discover, compare, or book salon services.</li>
        <li><strong>&quot;Partner&quot;</strong> or <strong>&quot;Vendor&quot;</strong> refers to any salon, barbershop, or beauty professional registered on Jayple.</li>
        <li><strong>&quot;Booking&quot;</strong> refers to a confirmed appointment made by a User for services at a Partner salon through the Platform.</li>
        <li><strong>&quot;Jayple Wallet&quot;</strong> refers to the digital wallet within the Platform used for cashback credits and payments.</li>
      </ul>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years of age to create an account and use Jayple. By registering, you represent and warrant that you meet this age requirement. If you are under 18, you may only use the Platform with the supervision and consent of a parent or legal guardian who agrees to these Terms on your behalf.
      </p>

      <h2>3. Account Registration</h2>
      <p>To use certain features of the Service, you must create an account. You agree to:</p>
      <ul>
        <li>Provide accurate, current, and complete information during registration</li>
        <li>Maintain and update your information to keep it accurate and current</li>
        <li>Maintain the confidentiality of your account credentials (phone number, OTP, password)</li>
        <li>Notify us immediately at <a href="mailto:support@jayple.in">support@jayple.in</a> of any unauthorised use of your account</li>
        <li>Accept responsibility for all activities that occur under your account</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate accounts that contain inaccurate information or are used in violation of these Terms.
      </p>

      <h2>4. Bookings &amp; Appointments</h2>
      <p>
        When you book an appointment through Jayple, you are entering into a direct service agreement with the Partner salon, not with Jayple. Jayple acts solely as a technology facilitator connecting Users and Partners.
      </p>
      <ul>
        <li><strong>Service quality:</strong> The quality, execution, and outcome of salon services are the sole responsibility of the Partner.</li>
        <li><strong>Availability:</strong> While we strive to ensure accurate slot availability, we cannot guarantee that a particular time slot will always be available.</li>
        <li><strong>Confirmation:</strong> A booking is considered confirmed only when you receive an in-app confirmation notification with a booking ID.</li>
        <li><strong>Punctuality:</strong> Users are expected to arrive at the salon within 10 minutes of their booked time. Late arrivals may result in cancellation at the Partner&apos;s discretion.</li>
      </ul>

      <h2>5. Payments</h2>
      <p>
        All payments on the Platform are processed securely through <strong>Razorpay</strong>, a PCI-DSS Level 1 certified payment gateway. By making a payment, you also agree to Razorpay&apos;s terms of service.
      </p>
      <ul>
        <li>Jayple does not store your credit card, debit card, or bank account details at any point.</li>
        <li>All transactions are encrypted using TLS 1.2+ and processed over HTTPS.</li>
        <li>Accepted payment methods include UPI, credit/debit cards, net banking, and Jayple Wallet balance.</li>
        <li>Service prices displayed on the Platform are inclusive of applicable GST unless stated otherwise.</li>
      </ul>

      <h2>6. Jayple Wallet</h2>
      <p>The Jayple Wallet is a digital wallet feature within the Platform. Key terms:</p>
      <ul>
        <li>Cashback earned through bookings is credited to your Jayple Wallet.</li>
        <li>Wallet balance can be used to pay for future bookings on the Platform.</li>
        <li>Wallet credits are non-transferable to another user&apos;s account.</li>
        <li>Wallet balance cannot be withdrawn as cash to a bank account.</li>
        <li>Jayple reserves the right to modify the cashback program, rates, and wallet terms with prior notice.</li>
        <li>Wallet balances have no expiry date as of the date of these Terms, but we reserve the right to introduce expiry with 90 days&apos; notice.</li>
      </ul>

      <h2>7. Cancellations &amp; Refunds</h2>
      <p>
        Cancellation and refund terms are governed by our separate <a href="/refund-policy">Cancellation &amp; Refund Policy</a>. Please review it before making any booking. Key points:
      </p>
      <ul>
        <li>Cancellations more than 2 hours before the appointment receive a full refund.</li>
        <li>Cancellations between 1–2 hours before receive a 50% refund to Jayple Wallet.</li>
        <li>Cancellations less than 1 hour before receive no refund.</li>
        <li>Partner-initiated cancellations result in a full refund plus ₹50 Jayple Wallet credit.</li>
      </ul>

      <h2>8. User Content &amp; Reviews</h2>
      <p>By submitting reviews, ratings, or other content (&quot;User Content&quot;) to the Platform, you:</p>
      <ul>
        <li>Grant Jayple a non-exclusive, worldwide, royalty-free licence to use, display, and distribute your User Content on the Platform</li>
        <li>Represent that the content is truthful, based on genuine experience, and does not infringe any third-party rights</li>
        <li>Agree not to post defamatory, obscene, fraudulent, or misleading content</li>
        <li>Acknowledge that Jayple may remove content that violates these Terms or our community standards</li>
      </ul>

      <h2>9. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful or fraudulent purpose</li>
        <li>Submit false, misleading, or fraudulent information, including fake reviews</li>
        <li>Attempt to access systems, data, or accounts you are not authorised to access</li>
        <li>Interfere with or disrupt the proper working of the Service or its infrastructure</li>
        <li>Use automated scripts, bots, or scrapers to access the Service</li>
        <li>Reverse-engineer, decompile, or disassemble any part of the Platform</li>
        <li>Circumvent any security or authentication measures</li>
        <li>Harass, abuse, or harm other Users, Partners, or Jayple staff</li>
        <li>Attempt to book appointments without genuine intent (slot-blocking)</li>
      </ul>

      <h2>10. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, designs, graphics, UI elements, software, and intellectual property on the Platform are owned by Jayple or its licensors. You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content without prior written consent from Jayple.
      </p>
      <p>
        The &quot;Jayple&quot; name, logo, and brand assets are registered trademarks. Any unauthorised use may constitute trademark infringement.
      </p>

      <h2>11. Disclaimer of Warranties</h2>
      <p>
        The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. To the fullest extent permitted by applicable law, Jayple disclaims all warranties, express or implied, including but not limited to:
      </p>
      <ul>
        <li>Implied warranties of merchantability and fitness for a particular purpose</li>
        <li>Warranties regarding the accuracy, reliability, or completeness of any content on the Platform</li>
        <li>Warranties that the Service will be uninterrupted, error-free, or free of viruses</li>
        <li>Warranties regarding the quality of services provided by salon Partners</li>
      </ul>

      <h2>12. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Jayple and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
      </p>
      <ul>
        <li>Loss of profits, revenue, or data</li>
        <li>Personal injury or property damage arising from your use of salon services</li>
        <li>Any issues arising from the conduct of Partner salons</li>
        <li>Unauthorised access to or alteration of your transmissions or data</li>
      </ul>
      <p>
        In no event shall Jayple&apos;s total liability exceed the amount paid by you through the Platform in the 12 months preceding the claim.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Jayple, its directors, officers, employees, agents, and affiliates from and against any and all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising from:
      </p>
      <ul>
        <li>Your violation of these Terms</li>
        <li>Your use of the Service</li>
        <li>Your violation of any rights of a third party</li>
        <li>Any content you submit to the Platform</li>
      </ul>

      <h2>14. Account Suspension &amp; Termination</h2>
      <p>Jayple may suspend or terminate your account at any time if:</p>
      <ul>
        <li>You violate these Terms or any applicable law</li>
        <li>You engage in fraudulent or abusive behaviour</li>
        <li>Your account is flagged for suspicious activity</li>
        <li>You have excessive no-shows or cancellations</li>
      </ul>
      <p>
        You may also delete your account at any time through the app settings or by emailing <a href="mailto:support@jayple.in">support@jayple.in</a>. Upon deletion, any remaining Jayple Wallet balance will be forfeited after a 30-day grace period.
      </p>

      <h2>15. Dispute Resolution</h2>
      <p>
        In the event of any dispute arising out of or relating to these Terms, the parties agree to first attempt resolution through good-faith negotiation. If the dispute cannot be resolved within 30 days, it shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended.
      </p>
      <ul>
        <li>The seat of arbitration shall be Trichy (Tiruchirappalli), Tamil Nadu, India.</li>
        <li>The arbitration shall be conducted in English.</li>
        <li>The decision of the arbitrator shall be final and binding on both parties.</li>
      </ul>

      <h2>16. Governing Law &amp; Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of India. Subject to the arbitration clause above, the courts of Trichy (Tiruchirappalli), Tamil Nadu shall have exclusive jurisdiction over any legal proceedings.
      </p>

      <h2>17. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
      </p>

      <h2>18. Entire Agreement</h2>
      <p>
        These Terms, together with the Privacy Policy, Cancellation &amp; Refund Policy, Payment Policy, and Cookie Policy, constitute the entire agreement between you and Jayple regarding the use of the Service and supersede all prior agreements.
      </p>

      <h2>19. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Material changes will be notified via in-app notification or email at least 14 days before they take effect. Continued use of the Service after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>20. Contact Us</h2>
      <p>For questions, concerns, or requests related to these Terms, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:legal@jayple.in">legal@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </>
  )
}
