export default function PrivacyPage() {
  return (
    <div className="container-narrow section-sm">
      <h1 className="heading-1" style={{ fontSize: "var(--text-h2-mobile)", marginBottom: "var(--space-1)" }}>
        Privacy Policy
      </h1>
      <p className="body-lg" style={{ marginBottom: "var(--space-5)" }}>
        Last updated: March 27, 2026
      </p>

      <div className="prose-content">
        <section>
          <h2>Introduction</h2>
          <p>
            At BuildChex, we are committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Review submissions (builder name, project type, rating, comment)</li>
            <li>Feedback or inquiries sent to us via email</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>BuildChex uses the information we collect to:</p>
          <ul>
            <li>Process and publish reviews</li>
            <li>Prevent spam and fraudulent activity</li>
            <li>Improve our website and services</li>
            <li>Respond to inquiries and feedback</li>
            <li>Analyze usage patterns and trends</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Anonymity &amp; Privacy</h2>
          <p>
            We are committed to protecting the anonymity of reviewers. When you submit a
            review, we do not collect or display:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your IP address</li>
            <li>Your phone number</li>
            <li>Your address</li>
            <li>Any identifying information</li>
          </ul>
          <p>
            We may retain anonymized review metadata for aggregate analysis and quality
            assurance purposes only.
          </p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            BuildChex implements appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration, disclosure,
            or destruction. However, no method of transmission over the Internet is 100%
            secure.
          </p>
        </section>

        <section>
          <h2>5. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties.
            We may share information in the following circumstances:
          </p>
          <ul>
            <li>As required by law or legal process</li>
            <li>To protect our legal rights and the safety of our users</li>
            <li>With service providers who assist us in operating our website</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            BuildChex may use cookies to enhance your experience. You can disable cookies
            through your browser settings. Disabling cookies may limit your ability to
            use certain features of our website.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            BuildChex may contain links to third-party websites. We are not responsible
            for the privacy practices of these external sites. We encourage you to review
            their privacy policies before providing any information.
          </p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>
            You have the right to request what personal information BuildChex holds about
            you, and to request that we delete such information (subject to legal
            obligations).
          </p>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            BuildChex is not intended for children under 18 years of age. We do not
            knowingly collect personal information from children. If we become aware of
            such collection, we will take steps to delete this information immediately.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            BuildChex reserves the right to update this Privacy Policy at any time. We
            will notify you of material changes by updating the &quot;Last updated&quot; date above.
            Your continued use of the website constitutes your acceptance of the revised
            policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices,
            please contact us at{" "}
            <a href="mailto:privacy@buildchex.com" style={{ color: "var(--color-teal)", fontWeight: 500 }}>
              privacy@buildchex.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
