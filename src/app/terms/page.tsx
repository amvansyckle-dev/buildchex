export default function TermsPage() {
  return (
    <div className="container-narrow section-sm">
      <h1 className="heading-1" style={{ fontSize: "var(--text-h2-mobile)", marginBottom: "var(--space-1)" }}>
        Terms of Service
      </h1>
      <p className="body-lg" style={{ marginBottom: "var(--space-5)" }}>
        Last updated: March 27, 2026
      </p>

      <div className="prose-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using BuildChex, you agree to be bound by these Terms of
            Service. If you do not agree to abide by the above, please do not use this
            service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials
            (information or software) on BuildChex for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on BuildChex</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on BuildChex are provided on an &quot;as is&quot; basis. BuildChex makes
            no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>
            In no event shall BuildChex or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use the
            materials on BuildChex.
          </p>
        </section>

        <section>
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on BuildChex could include technical, typographical,
            or photographic errors. BuildChex does not warrant that any of the materials
            on its website are accurate, complete, or current. BuildChex may make changes
            to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2>6. User Reviews</h2>
          <p>
            You agree not to post any material that is unlawful, threatening, abusive,
            defamatory, obscene, vulgar, sexually explicit, or otherwise objectionable.
            BuildChex reserves the right to refuse, delete, or edit any user submission
            that violates these terms.
          </p>
        </section>

        <section>
          <h2>7. Limitations of Liability</h2>
          <p>
            BuildChex and its suppliers will not be held liable to you in relation to the
            contents of, or use of, or otherwise in connection with, this website for any
            indirect, special, or consequential loss, or for any business losses, loss of
            revenue, income, profits or anticipated savings.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the
            laws of the State of New Jersey, and you irrevocably submit to the exclusive
            jurisdiction of the courts located in New Jersey.
          </p>
        </section>

        <section>
          <h2>9. Modifications</h2>
          <p>
            BuildChex may revise these terms of service for its website at any time without
            notice. By using this website, you are agreeing to be bound by the then current
            version of these terms of service.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@buildchex.com" style={{ color: "var(--color-teal)", fontWeight: 500 }}>
              legal@buildchex.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
