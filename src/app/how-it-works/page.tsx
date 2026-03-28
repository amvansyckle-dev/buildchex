import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg))" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h1 className="heading-1" style={{ marginBottom: "var(--space-3)" }}>
            How BuildChex Works
          </h1>
          <p className="body-lg" style={{ maxWidth: "540px", margin: "0 auto" }}>
            A transparent, AI-moderated platform designed to give homeowners
            the information they need to make confident hiring decisions.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <h2 className="heading-2" style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
            Three Simple Steps
          </h2>
          <div
            style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
            className="md:grid md:grid-cols-3 md:gap-10"
          >
            {[
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Step 1: Search", desc: "Look up any residential builder or contractor in New Jersey. Search by company name, LLC, or individual. No account needed." },
              { icon: "M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25m20 0C22 10.998 17.5 6.253 12 6.253z", title: "Step 2: Review Data", desc: "See aggregated, structured data: ratings, delays, cost overruns, common issues, and direct quotes from homeowners." },
              { icon: "M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4", title: "Step 3: Share Your Story", desc: "Share your renovation experience anonymously. Your review gets processed and moderated before going live." },
            ].map((step) => (
              <div key={step.title} className="card-static" style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)", padding: "var(--space-3)" }}>
                <div style={{ width: "56px", height: "56px", minWidth: "56px", backgroundColor: "var(--color-teal-light)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg style={{ width: "24px", height: "24px", color: "var(--color-teal)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-4" style={{ marginBottom: "var(--space-1)" }}>{step.title}</h3>
                  <p className="body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Moderation */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
        <div className="container-site" style={{ maxWidth: "880px" }}>
          <h2 className="heading-2" style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
            How Moderation Works
          </h2>
          <div className="card-static" style={{ padding: "var(--space-3)", marginBottom: "var(--space-3)" }}>
            <h3 className="heading-3" style={{ marginBottom: "var(--space-3)" }}>Our Quality Process</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[
                { num: 1, title: "Automated Screening", desc: "When you submit a review, our AI system immediately analyzes it for spam, profanity, duplicate submissions, and suspicious patterns." },
                { num: 2, title: "Data Extraction", desc: "AI extracts key information: delays mentioned, cost overruns, common issues, sentiment, and authenticity signals." },
                { num: 3, title: "Human Review", desc: "Our team reviews submissions within 24-48 hours to verify authenticity, ensure compliance with our guidelines, and flag any concerns." },
                { num: 4, title: "Publication", desc: "Approved reviews are published and immediately contribute to builder ratings, issue patterns, and the overall database." },
              ].map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "var(--space-2)" }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", width: "40px", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-teal)", color: "white", fontWeight: 700, fontSize: "var(--text-small)" }}>
                      {item.num}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)", fontSize: "var(--text-body)" }}>{item.title}</h4>
                    <p className="body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-static" style={{ padding: "var(--space-3)" }}>
            <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>Why This Matters</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {["Prevents spam and fake reviews", "Ensures fair representation of builder reputations", "Protects homeowner privacy and anonymity", "Creates structured, actionable data from narratives"].map((text) => (
                <div key={text} style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
                  <svg style={{ width: "24px", height: "24px", color: "var(--color-teal)", flexShrink: 0, marginTop: "2px" }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="body">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site" style={{ maxWidth: "880px" }}>
          <h2 className="heading-2" style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }} className="md:grid md:grid-cols-2 md:gap-10">
            {[
              { q: "Is it really free?", a: "Yes. BuildChex is completely free to search and read reviews. Writing reviews is also free. We believe accountability in construction should be accessible to everyone." },
              { q: "Do I need an account?", a: "No account is required to search and read reviews. You can write reviews anonymously without creating an account." },
              { q: "How is anonymity protected?", a: "We don't collect IP addresses, emails, or personal information unless you voluntarily provide it. Reviews are published without any identifying information." },
              { q: "Can builders respond to reviews?", a: "Currently, we don't allow builder responses. This keeps the focus on homeowner experiences. We're exploring response options for the future." },
              { q: "What if a review is false?", a: "We take false reviews seriously. Builders can report reviews they believe are false, and we'll investigate. We have legal safeguards in place." },
              { q: "Is this available outside NJ?", a: "We're starting with New Jersey homeowners. We'd love to expand to other states if there's demand. Contact us if you're interested." },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="heading-4" style={{ marginBottom: "var(--space-2)" }}>{faq.q}</h3>
                <p className="body">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
        <div className="container-site" style={{ textAlign: "center", maxWidth: "720px" }}>
          <h2 className="heading-2" style={{ marginBottom: "var(--space-3)" }}>Ready to contribute?</h2>
          <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto var(--space-4)" }}>
            Share your renovation experience and help other New Jersey homeowners make informed decisions.
          </p>
          <Link href="/review/new" className="btn-primary btn-lg btn-mobile-full">Write a Review</Link>
        </div>
      </section>
    </div>
  );
}
