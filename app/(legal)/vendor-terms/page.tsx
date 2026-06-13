import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vendor Terms & Conditions — Jayple',
  description: 'Terms and conditions for salon partners and vendors on the Jayple platform.',
  alternates: { canonical: 'https://jayple.in/vendor-terms/' },
}

export default function VendorTermsPage() {
  return (
    <>
      <h1>Vendor Terms &amp; Conditions</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        These Vendor Terms govern your participation as a salon partner (&quot;Vendor&quot;) on the Jayple platform. By onboarding as a partner, you agree to these terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        To become a Jayple partner, your salon must be a legitimate, registered business operating in India. You must provide accurate business information, valid identification, and a functioning bank account for settlements.
      </p>

      <h2>2. Listing Accuracy</h2>
      <p>
        You are responsible for maintaining accurate and up-to-date information on your Jayple listing, including service names, prices, availability, and salon details. Misleading information may result in account suspension.
      </p>

      <h2>3. Appointment Obligations</h2>
      <p>
        Once a booking is confirmed through Jayple, you are obligated to honour the appointment at the agreed time and price. Repeated cancellations or no-shows may result in penalties or removal from the platform.
      </p>

      <h2>4. Commission & Settlements</h2>
      <p>
        Jayple charges a platform commission on each completed booking. Settlements are processed on a T+2 business day cycle to your registered bank account. The commission rate is communicated during onboarding and may be updated with 30 days&apos; notice.
      </p>

      <h2>5. Quality Standards</h2>
      <p>
        All services must meet the quality and hygiene standards communicated by Jayple. Partners with consistently low ratings (&lt;3.5) may be subject to review and removal.
      </p>

      <h2>6. Termination</h2>
      <p>
        Either party may terminate the partnership with 30 days&apos; written notice. Jayple may terminate immediately in cases of fraud, repeated policy violations, or legal non-compliance.
      </p>

      <h2>7. Contact</h2>
      <p>
        For vendor-related queries: <a href="mailto:partner@jayple.in">partner@jayple.in</a>
      </p>
    </>
  )
}
