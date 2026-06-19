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
        This Cookie Policy explains how Jayple (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website (jayple.in) and use our mobile application. This policy should be read alongside our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device (computer, tablet, or smartphone) when you visit a website. They help the website recognise your device, remember your preferences, and improve your browsing experience. Similar technologies include web beacons, pixels, and local storage.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <p>We use the following categories of cookies:</p>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the website to function properly. They enable core functionality such as page navigation, secure areas, and session management. You cannot disable these cookies as the website cannot function without them.
      </p>
      <ul>
        <li><strong>Session cookies:</strong> Maintain your browsing session — deleted when you close the browser</li>
        <li><strong>Security cookies:</strong> Help detect and prevent security threats</li>
      </ul>

      <h3>2.2 Analytics &amp; Performance Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting anonymised information about page visits, traffic sources, and user behaviour patterns.
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> Tracks page views, session duration, and bounce rates (anonymised)</li>
        <li><strong>Firebase Analytics:</strong> In-app usage patterns and feature adoption (mobile app)</li>
      </ul>

      <h3>2.3 Preference &amp; Functionality Cookies</h3>
      <p>
        These cookies remember your preferences and choices (such as language, region, or theme) to provide a more personalised experience.
      </p>

      <h3>2.4 Marketing &amp; Advertising Cookies</h3>
      <p>
        We use these sparingly and only with your consent. They help us deliver relevant advertisements and measure the effectiveness of our marketing campaigns.
      </p>

      <h2>3. Cookie Duration Table</h2>
      <p>Below is a summary of the key cookies we use:</p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Analytics</td>
            <td>2 years</td>
            <td>Google Analytics — distinguishes users</td>
          </tr>
          <tr>
            <td>_ga_*</td>
            <td>Analytics</td>
            <td>2 years</td>
            <td>Google Analytics — maintains session state</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Analytics</td>
            <td>24 hours</td>
            <td>Google Analytics — distinguishes users</td>
          </tr>
          <tr>
            <td>session_id</td>
            <td>Necessary</td>
            <td>Session</td>
            <td>Maintains your browsing session</td>
          </tr>
          <tr>
            <td>cookie_consent</td>
            <td>Necessary</td>
            <td>1 year</td>
            <td>Records your cookie preferences</td>
          </tr>
          <tr>
            <td>theme_pref</td>
            <td>Preference</td>
            <td>1 year</td>
            <td>Stores display preferences</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Third-Party Cookies</h2>
      <p>
        We may use third-party services that set their own cookies on your device. These are governed by their respective privacy policies. Key third-party services include:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> Web traffic analysis — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        <li><strong>Razorpay:</strong> Payment processing — <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">Razorpay Privacy Policy</a></li>
        <li><strong>Firebase:</strong> App analytics and crash reporting — <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy</a></li>
      </ul>

      <h2>5. Managing Cookies</h2>
      <p>
        You can control and manage cookies through your browser settings. Most browsers allow you to:
      </p>
      <ul>
        <li>View all cookies stored on your device</li>
        <li>Delete all or specific cookies</li>
        <li>Block cookies from specific or all websites</li>
        <li>Block third-party cookies while allowing first-party cookies</li>
        <li>Set your browser to notify you when a cookie is being set</li>
      </ul>
      <p>
        <strong>Important:</strong> Disabling certain cookies (especially strictly necessary cookies) may affect the functionality of our website. Some features may not work properly if cookies are disabled.
      </p>

      <h3>Browser-Specific Instructions</h3>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
        <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
      </ul>

      <h2>6. Do Not Track (DNT)</h2>
      <p>
        Some browsers offer a &quot;Do Not Track&quot; (DNT) feature that sends a signal to websites requesting that they do not track you. We currently honour DNT signals by disabling non-essential analytics cookies when a DNT header is detected.
      </p>

      <h2>7. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. When we make changes, the &quot;Last updated&quot; date at the top will be revised. Material changes will be communicated via a cookie consent banner on our website.
      </p>

      <h2>8. Contact Us</h2>
      <p>For questions about our use of cookies:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacy@jayple.in">privacy@jayple.in</a></li>
        <li><strong>Address:</strong> Jayple, Trichy (Tiruchirappalli), Tamil Nadu, India — 620 001</li>
      </ul>
    </>
  )
}
