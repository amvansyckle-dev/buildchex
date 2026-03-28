import Link from "next/link";

export default function ReviewSubmittedPage() {
  return (
    <div className="container-narrow section-sm" style={{ maxWidth: "720px", textAlign: "center" }}>
      <div style={{ marginBottom: "var(--space-5)" }}>
        <div style={{ marginBottom: "var(--space-3)", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "64px", height: "64px", backgroundColor: "var(--color-bg-muted)", borderRadius: "var(--radius-pill)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg
              style={{ width: "32px", height: "32px", color: "var(--color-teal)" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h1 className="heading-1" style={{ fontSize: "var(--text-h2-mobile)", fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-2)" }}>
          Thanks for sharing your experience
        </h1>
        <p className="body-lg" style={{ color: "var(--color-muted)", lineHeight: "var(--leading-body)" }}>
          Your review has been submitted and is being processed by our moderation
          system.
        </p>
      </div>

      {/* Timeline */}
      <div className="card-static" style={{ padding: "var(--space-3)", marginBottom: "var(--space-5)" }}>
        <h2 className="heading-2" style={{ marginBottom: "var(--space-4)", textAlign: "left" }}>What happens next</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {/* Step 1 */}
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", width: "40px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-teal)", color: "white", fontWeight: 700, fontSize: "var(--text-body)" }}>
                1
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>AI Processing</h3>
              <p className="body" style={{ color: "var(--color-muted)", marginBottom: "var(--space-1)" }}>
                Your review is analyzed by our AI system to check for spam,
                profanity, and ensure it meets our quality standards.
              </p>
              <p className="body-sm" style={{ color: "var(--color-muted)" }}>Duration: ~15 minutes</p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", width: "40px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-teal)", color: "white", fontWeight: 700, fontSize: "var(--text-body)" }}>
                2
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>Human Review</h3>
              <p className="body" style={{ color: "var(--color-muted)", marginBottom: "var(--space-1)" }}>
                A member of our team reviews your submission to verify it meets
                our community standards and is authentic.
              </p>
              <p className="body-sm" style={{ color: "var(--color-muted)" }}>Duration: ~24-48 hours</p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", width: "40px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--color-teal)", color: "white", fontWeight: 700, fontSize: "var(--text-body)" }}>
                3
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>Published</h3>
              <p className="body" style={{ color: "var(--color-muted)", marginBottom: "var(--space-1)" }}>
                Once approved, your review will be live on BuildChex and visible
                to other homeowners.
              </p>
              <p className="body-sm" style={{ color: "var(--color-muted)" }}>Duration: Instant upon approval</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div style={{ marginBottom: "var(--space-5)" }}>
        <h2 className="heading-2" style={{ marginBottom: "var(--space-3)", textAlign: "left" }}>Common questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <div className="card-static" style={{ padding: "var(--space-3)", textAlign: "left" }}>
            <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
              Will my identity be revealed?
            </h3>
            <p className="body" style={{ color: "var(--color-muted)" }}>
              No. Your review is completely anonymous. We don't collect or display
              any personal information. Your anonymity is protected by design.
            </p>
          </div>

          <div className="card-static" style={{ padding: "var(--space-3)", textAlign: "left" }}>
            <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
              Can I edit my review after submission?
            </h3>
            <p className="body" style={{ color: "var(--color-muted)" }}>
              Currently, reviews cannot be edited after submission. Please review
              your information carefully before submitting.
            </p>
          </div>

          <div className="card-static" style={{ padding: "var(--space-3)", textAlign: "left" }}>
            <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
              What if my review is rejected?
            </h3>
            <p className="body" style={{ color: "var(--color-muted)" }}>
              If your review doesn't meet our community standards, it will be
              rejected and you'll receive an explanation. You're welcome to
              resubmit with adjustments.
            </p>
          </div>

          <div className="card-static" style={{ padding: "var(--space-3)", textAlign: "left" }}>
            <h3 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
              How can I report a fake review?
            </h3>
            <p className="body" style={{ color: "var(--color-muted)" }}>
              If you see a review that appears to be fake or violates our policies,
              click "Report" on that review. Our team will investigate and take
              appropriate action.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <p className="body" style={{ color: "var(--color-muted)", marginBottom: "var(--space-3)" }}>
          Want to see your review in action? Search for the builder now.
        </p>
        <Link href="/" className="btn-primary btn-lg">
          Back to Search
        </Link>
      </div>
    </div>
  );
}
