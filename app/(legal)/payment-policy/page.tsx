import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Policy — Jayple',
  description: 'Jayple Payment Policy — accepted payment methods, security, and transaction processing.',
  alternates: { canonical: 'https://jayple.in/payment-policy/' },
}

export default function PaymentPolicyPage() {
  return (
    <>
      <h1>Payment Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>

      <h2>1. Payment Methods</h2>
      <p>Jayple accepts the following payment methods:</p>
      <ul>
        <li>UPI (Google Pay, PhonePe, Paytm, BHIM, and all UPI apps)</li>
        <li>Credit Cards (Visa, Mastercard, Rupay)</li>
        <li>Debit Cards</li>
        <li>Net Banking</li>
        <li>Jayple Wallet (cashback balance)</li>
      </ul>

      <h2>2. Payment Processing</h2>
      <p>
        All payments are securely processed by <strong>Razorpay</strong>, a PCI-DSS Level 1 certified payment gateway. Jayple does not store your card or bank account details at any point.
      </p>

      <h2>3. Transaction Security</h2>
      <p>
        All transactions are encrypted using TLS 1.2+ and processed over HTTPS. We comply fully with RBI guidelines on online payment security and data localisation.
      </p>

      <h2>4. Jayple Wallet</h2>
      <p>
        Cashback earned through bookings is credited to your Jayple Wallet. Wallet balance can be used for future bookings on the platform. Wallet credits are non-transferable and non-refundable as cash.
      </p>

      <h2>5. Payment Failures</h2>
      <p>
        If a payment fails, the amount is not deducted. If a payment is deducted but the booking is not confirmed, the amount will be automatically refunded within 5–7 business days. Please contact <a href="mailto:support@jayple.in">support@jayple.in</a> if you face any issues.
      </p>

      <h2>6. GST & Taxes</h2>
      <p>
        Applicable GST is included in the service price displayed on the platform. A digital receipt is issued for every transaction.
      </p>

      <h2>7. Contact</h2>
      <p>
        For payment-related queries: <a href="mailto:support@jayple.in">support@jayple.in</a>
      </p>
    </>
  )
}
