import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Jayple',
  description: 'Jayple Cookie Policy — how we use cookies and similar technologies on our website.',
  alternates: { canonical: 'https://jayple.in/cookie-policy/' },
}

export default function CookiePolicyPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> June 2026</p>
      <p>
        This Cookie Policy explains how Jayple uses cookies and similar tracking technologies on our website (jayple.in).
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Strictly Necessary:</strong> Essential for the website to function. Cannot be disabled.</li>
        <li><strong>Analytics:</strong> Help us understand how visitors interact with our website (anonymised). Examples: Google Analytics.</li>
        <li><strong>Preference:</strong> Remember your settings such as language and theme.</li>
        <li><strong>Marketing:</strong> Used to deliver relevant advertisements. We use these sparingly and with consent.</li>
      </ul>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website. Most browsers allow you to:
      </p>
      <ul>
        <li>View cookies stored on your device</li>
        <li>Delete all or specific cookies</li>
        <li>Block cookies from specific websites</li>
        <li>Block third-party cookies</li>
      </ul>

      <h2>4. Third-Party Cookies</h2>
      <p>
        We may use third-party services that set their own cookies. These are governed by their respective privacy policies. Key third parties include Google Analytics and Razorpay.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about cookies: <a href="mailto:privacy@jayple.in">privacy@jayple.in</a>
      </p>
    </>
  )
}
