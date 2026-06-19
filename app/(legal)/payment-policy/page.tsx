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
      <p>
        This Payment Policy explains how payments are processed on the Jayple platform, the methods accepted, security measures in place, and terms governing the Jayple Wallet and financial transactions.
      </p>

      <h2>1. Accepted Payment Methods</h2>
      <p>Jayple accepts the following payment methods for booking salon services:</p>
      <ul>
        <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, BHIM, and all UPI-enabled apps</li>
        <li><strong>Credit Cards:</strong> Visa, Mastercard, Rupay, American Express</li>
        <li><strong>Debit Cards:</strong> All major Indian bank debit cards</li>
        <li><strong>Net Banking:</strong> All major Indian banks</li>
        <li><strong>Jayple Wallet:</strong> Use cashback balance for partial or full payment</li>
      </ul>
      <p>
        International cards and wallets (PayPal, Apple Pay, etc.) are not currently supported. We plan to add additional payment options in the future.
      </p>

      <h2>2. Payment Processing</h2>
      <p>
        All payments are securely processed by <strong>Razorpay</strong>, a PCI-DSS Level 1 certified payment gateway regulated by the Reserve Bank of India (RBI).
      </p>
      <ul>
        <li>Jayple does <strong>not</strong> store your credit card numbers, debit card numbers, CVVs, or bank account credentials at any time.</li>
        <li>All payment data is tokenised and handled exclusively by Razorpay.</li>
        <li>Payment confirmation is sent instantly via in-app notification upon successful processing.</li>
        <li>A digital receipt with transaction ID is generated for every payment.</li>
      </ul>

      <h2>3. Transaction Security</h2>
      <p>We implement multiple layers of security to protect your financial data:</p>
      <ul>
        <li><strong>Encryption:</strong> All transactions are encrypted using TLS 1.2+ and processed over HTTPS.</li>
        <li><strong>PCI-DSS compliance:</strong> Razorpay maintains PCI-DSS Level 1 certification, the highest level of payment security standards.</li>
        <li><strong>Two-factor authentication:</strong> UPI payments require PIN verification, and card payments require OTP/3D Secure authentication.</li>
        <li><strong>RBI compliance:</strong> We comply fully with RBI guidelines on online payment security, data localisation, and tokenisation norms.</li>
        <li><strong>Fraud detection:</strong> Automated fraud detection mechanisms are in place to flag suspicious transactions.</li>
      </ul>

      <h2>4. Jayple Wallet</h2>
      <p>The Jayple Wallet is an in-app digital wallet for managing cashback and payments:</p>
      <ul>
        <li><strong>Earning cashback:</strong> Cashback is earned automatically on eligible bookings. The cashback percentage may vary by promotion and is displayed before booking confirmation.</li>
        <li><strong>Using wallet balance:</strong> Wallet balance can be applied as full or partial payment for future bookings.</li>
        <li><strong>Non-transferable:</strong> Wallet credits cannot be transferred to another user&apos;s account.</li>
        <li><strong>Non-withdrawable:</strong> Wallet balance cannot be withdrawn as cash to a bank account or any external payment method.</li>
        <li><strong>Promotional credits:</strong> Credits from promotions or referral programs may have specific terms, expiry dates, or usage limitations as communicated at the time of issuance.</li>
        <li><strong>Account deletion:</strong> If you delete your Jayple account, remaining wallet balance will be forfeited after a 30-day grace period.</li>
      </ul>

      <h2>5. Pricing &amp; Taxes</h2>
      <ul>
        <li>Service prices displayed on the Platform are set by individual salon Partners.</li>
        <li>All prices shown are <strong>inclusive of applicable GST</strong> unless explicitly stated otherwise.</li>
        <li>A digital GST-compliant receipt is issued for every completed transaction.</li>
        <li>Jayple does not charge any additional booking fee or convenience fee to customers.</li>
      </ul>

      <h2>6. Payment Failures &amp; Declined Transactions</h2>
      <p>If a payment fails during the booking process:</p>
      <ul>
        <li><strong>No deduction:</strong> If the amount was not deducted from your account, simply retry the payment.</li>
        <li><strong>Deducted but not confirmed:</strong> If the amount was deducted but the booking was not confirmed, the amount will be automatically refunded within 5–7 business days. No action is needed from your end.</li>
        <li><strong>Duplicate charges:</strong> If you notice a duplicate charge, contact <a href="mailto:support@jayple.in">support@jayple.in</a> with your transaction ID. We will investigate and issue a refund within 3–5 business days if a duplicate charge is confirmed.</li>
      </ul>

      <h2>7. Currency</h2>
      <p>
        All transactions on the Jayple platform are conducted in <strong>Indian Rupees (₹ / INR)</strong>. We do not support multi-currency transactions at this time.
      </p>

      <h2>8. Refunds</h2>
      <p>
        For detailed information on refund eligibility, timelines, and processes, please refer to our <a href="/refund-policy">Cancellation &amp; Refund Policy</a>.
      </p>

      <h2>9. Chargebacks &amp; Disputes</h2>
      <p>
        If you initiate a chargeback with your bank or card issuer for a legitimate Jayple transaction, we may need to temporarily suspend your account while we investigate. Please contact us at <a href="mailto:support@jayple.in">support@jayple.in</a> before initiating a chargeback so we can resolve the issue directly and faster.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Payment Policy from time to time. Material changes will be communicated via in-app notification at least 14 days before they take effect.
      </p>

      <h2>11. Contact Us</h2>
      <p>For payment-related queries or issues:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@jayple.in">support@jayple.in</a></li>
        <li><strong>In-app:</strong> Profile → Help &amp; Support → Payment Issues</li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </>
  )
}
