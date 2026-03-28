import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg))" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h1 className="heading-1" style={{ marginBottom: "var(--space-3)" }}>About BuildChex</h1>
          <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Born from frustration. Built for every homeowner.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <h2 className="heading-2" style={{ marginBottom: "var(--space-4)" }}>The Story Behind BuildChex</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <p className="body-lg">BuildChex started with a simple frustration: homeowners in New Jersey had no reliable way to research builders and contractors before hiring them.</p>
            <p className="body-lg">After a $200,000 renovation gone wrong—delays that stretched months, undisclosed costs, subcontractors that disappeared—the founder realized this wasn&apos;t a unique problem.</p>
            <p className="body-lg">CARFAX exists for cars. Yelp exists for restaurants. Glassdoor exists for employers. But residential builders and contractors? They operated in complete anonymity, free from accountability.</p>
            <p className="body-lg">That&apos;s when BuildChex was born. Not as a rating company, but as a platform for homeowners to share structured information about their experiences.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
        <div className="container-site">
          <h2 className="heading-2" style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>Our Mission</h2>
          <div
            style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
            className="md:grid md:grid-cols-3 md:gap-6"
          >
            {[
              { title: "Transparency", desc: "Every homeowner deserves access to honest information about contractors before hiring them. No more surprises. No more regrets." },
              { title: "Accountability", desc: "Contractors thrive when they know their reputation matters. BuildChex creates real incentives for quality, honesty, and professionalism." },
              { title: "Equity", desc: "Construction is expensive. Homeowners should have the same information advantages as billion-dollar corporations. Access to knowledge should be free." },
            ].map((item) => (
              <div key={item.title} className="card-static" style={{ padding: "var(--space-3)" }}>
                <h3 className="heading-3" style={{ marginBottom: "var(--space-2)" }}>{item.title}</h3>
                <p className="body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Reviews Work */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <h2 className="heading-2" style={{ marginBottom: "var(--space-5)" }}>How Reviews Power Better Decisions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[
              { num: "1", title: "Real Experiences", desc: "Every review is from a homeowner who actually worked with the builder. We verify anonymously to prevent spam and fake submissions." },
              { num: "2", title: "Structured Data", desc: "We don't just collect star ratings. We extract specific, actionable metrics: delays, cost overruns, common issues, and sentiment." },
              { num: "3", title: "Pattern Recognition", desc: "When dozens of homeowners report similar issues with a builder, a pattern emerges. Red flags become obvious. Strengths shine through." },
              { num: "4", title: "Informed Decisions", desc: "You walk in knowing the builder's track record. You ask the right questions. You avoid costly mistakes. Your renovation is better." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "48px", width: "48px", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-bg-muted)" }}>
                    <span style={{ fontSize: "var(--text-h3-mobile)", fontWeight: 700, color: "var(--color-teal)" }}>{item.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="heading-4" style={{ marginBottom: "var(--space-1)" }}>{item.title}</h3>
                  <p className="body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Builders */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
        <div className="container-narrow">
          <h2 className="heading-2" style={{ marginBottom: "var(--space-4)" }}>For Builders</h2>
          <div className="card-static" style={{ padding: "var(--space-3)" }}>
            <p className="body-lg" style={{ marginBottom: "var(--space-3)" }}>
              We understand that transparency can feel uncomfortable if you&apos;re not used to it. But here&apos;s the reality: your reputation is your business.
            </p>
            <p className="body-lg" style={{ marginBottom: "var(--space-4)" }}>
              BuildChex isn&apos;t about tearing you down. It&apos;s about rewarding builders who do good work.
            </p>
            <h3 className="heading-3" style={{ marginBottom: "var(--space-3)" }}>What You Can Expect</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[
                { title: "Authentic Reviews Only", desc: "We verify reviews to prevent fake submissions and competitor attacks." },
                { title: "Legal Safeguards", desc: "We take defamation seriously. False reviews can be reported and removed." },
                { title: "Competitive Advantage", desc: "Good builders win more customers. Your reputation becomes your marketing." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  <svg style={{ width: "24px", height: "24px", color: "var(--color-teal)", flexShrink: 0, marginTop: "2px" }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--color-charcoal)", fontSize: "var(--text-body)", marginBottom: "var(--space-1)" }}>{item.title}</p>
                    <p className="body-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="body-lg" style={{ marginTop: "var(--space-4)" }}>
              Questions? Contact us at{" "}
              <a href="mailto:builders@buildchex.com" className="link-teal" style={{ fontSize: "inherit", minHeight: "auto", padding: 0 }}>builders@buildchex.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site" style={{ textAlign: "center", maxWidth: "720px" }}>
          <h2 className="heading-2" style={{ marginBottom: "var(--space-3)" }}>Help Shape the Future of Home Building</h2>
          <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto var(--space-4)" }}>
            Whether you&apos;re a homeowner with a story to share or a builder committed to quality and transparency, BuildChex is for you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }} className="sm:flex-row sm:justify-center sm:gap-4">
            <Link href="/review/new" className="btn-primary btn-lg btn-mobile-full">Write a Review</Link>
            <a href="mailto:hello@buildchex.com" className="btn-outline btn-lg btn-mobile-full">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
