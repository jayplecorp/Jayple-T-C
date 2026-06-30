import type { Metadata } from 'next'
import LegalDocViewer from '@/components/LegalDocViewer'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — Jayple',
  description: 'Jayple\'s cancellation and refund policy — how to cancel bookings, refund timelines, and eligibility.',
  alternates: { canonical: 'https://jayple.in/refund-policy/' },
}

export default function RefundPolicyPage() {
  return (
    <LegalDocViewer>
      <h1>Cancellation &amp; Refund Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This Cancellation &amp; Refund Policy explains the terms under which bookings made through the Jayple platform may be cancelled and refunds issued. By making a booking on Jayple, you agree to the terms outlined below.
      </p>

      <h2>1. Cancellation by Customer</h2>
      <p>You may cancel a booking through the Jayple app at any time before your appointment. The refund amount depends on how much notice you provide:</p>
      <ul>
        <li><strong>More than 2 hours before appointment:</strong> Full refund to your Jayple Wallet or original payment method (your choice).</li>
        <li><strong>1–2 hours before appointment:</strong> 50% refund credited to your Jayple Wallet only.</li>
        <li><strong>Less than 1 hour before appointment:</strong> No refund will be issued.</li>
      </ul>
      <p>
        To cancel a booking, open the Jayple app → My Bookings → select the booking → tap &quot;Cancel Booking&quot;. You will see the applicable refund amount before confirming the cancellation.
      </p>

      <h2>2. Cancellation by Salon Partner</h2>
      <p>
        If a salon partner cancels your confirmed booking for any reason, you will receive:
      </p>
      <ul>
        <li>A <strong>full refund</strong> to your original payment method within 5–7 business days</li>
        <li>An additional <strong>₹50 Jayple Wallet credit</strong> as a goodwill gesture</li>
        <li>An in-app notification and email confirming the cancellation and refund</li>
      </ul>
      <p>
        Partners who repeatedly cancel confirmed bookings are subject to penalties, reduced visibility, or removal from the platform.
      </p>

      <h2>3. Cancellation Due to Unforeseen Circumstances</h2>
      <p>
        In cases of genuine emergencies (medical emergency, natural disaster, or other force majeure events), please contact us at <a href="mailto:support@jayple.in">support@jayple.in</a> with relevant details. We will review your case on an individual basis and may offer a full or partial refund at our discretion.
      </p>

      <h2>4. No-Show Policy</h2>
      <p>
        If you do not show up for your appointment without prior cancellation (&quot;No-Show&quot;):
      </p>
      <ul>
        <li>No refund will be issued for the missed appointment.</li>
        <li>A no-show is recorded on your account.</li>
        <li>After <strong>3 consecutive no-shows</strong>, your account may be temporarily restricted from making new bookings for 7 days.</li>
        <li>Repeated no-show behaviour may result in permanent account suspension.</li>
      </ul>

      <h2>5. Rescheduling</h2>
      <p>
        You may reschedule a booking free of charge up to 2 hours before the appointment, subject to slot availability at the Partner salon. Rescheduling within 2 hours of the appointment is treated as a cancellation followed by a new booking, and the applicable cancellation terms will apply.
      </p>

      <h2>6. Refund Process &amp; Timelines</h2>
      <p>Refund timelines depend on the payment method used:</p>
      <ul>
        <li><strong>Jayple Wallet:</strong> Instant credit (within seconds).</li>
        <li><strong>UPI (Google Pay, PhonePe, etc.):</strong> 1–3 business days.</li>
        <li><strong>Net Banking:</strong> 3–5 business days.</li>
        <li><strong>Credit / Debit Cards:</strong> 5–7 business days (subject to your bank&apos;s processing time).</li>
      </ul>
      <p>
        All refunds are processed through <strong>Razorpay</strong>. If you do not receive your refund within the stated timeline, please check with your bank first, then contact us at <a href="mailto:support@jayple.in">support@jayple.in</a> with your booking ID and transaction reference.
      </p>

      <h2>7. Partial Service Completion</h2>
      <p>
        If a salon partner is unable to complete the full service after it has begun (e.g., equipment failure, stylist emergency), you may be eligible for a partial refund. Please report the issue within 24 hours of your appointment by contacting <a href="mailto:support@jayple.in">support@jayple.in</a> with your booking ID and a description of the issue.
      </p>

      <h2>8. Service Quality Complaints</h2>
      <p>
        If you are dissatisfied with the quality of service received, please contact us at <a href="mailto:support@jayple.in">support@jayple.in</a> within <strong>24 hours</strong> of your appointment. Provide your booking ID and details of the issue.
      </p>
      <p>We will:</p>
      <ul>
        <li>Investigate the complaint with the salon partner within 48 hours</li>
        <li>Where warranted, issue a partial or full refund to your Jayple Wallet</li>
        <li>Take corrective action with the Partner if the complaint is substantiated</li>
      </ul>
      <p>
        Jayple acts as a technology platform and does not directly provide salon services. While we take all complaints seriously, our ability to offer refunds for service quality issues is subject to investigation.
      </p>

      <h2>9. Non-Refundable Items</h2>
      <p>The following are not eligible for refunds:</p>
      <ul>
        <li>No-show appointments</li>
        <li>Cancellations made less than 1 hour before the appointment</li>
        <li>Jayple Wallet cashback credits (these cannot be converted to cash)</li>
        <li>Promotional or complimentary booking credits</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Cancellation &amp; Refund Policy from time to time. Changes will be communicated via in-app notification. The updated policy will apply to all bookings made after the effective date.
      </p>

      <h2>11. Contact Us</h2>
      <p>For cancellation or refund queries, reach us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@jayple.in">support@jayple.in</a></li>
        <li><strong>In-app:</strong> My Bookings → select booking → &quot;Need Help?&quot;</li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </LegalDocViewer>
  )
}
