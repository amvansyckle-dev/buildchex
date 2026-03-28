import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="section-hero"
        style={{
          background: "linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg))",
        }}
      >
        <div className="container-site">
          <div style={{ maxWidth: "var(--container-text)", margin: "0 auto", textAlign: "center" }}>
            <h1
              className="heading-1"
              style={{ marginBottom: "var(--hero-gap-title)" }}
            >
              Know before you build.
            </h1>
            <p
              className="body-lg"
              style={{
                maxWidth: "540px",
                margin: "0 auto",
                marginBottom: "var(--hero-gap-body)",
              }}
            >
              Real experiences from New Jersey homeowners. Anonymous, AI-moderated,
              and structured so you can make informed decisions.
            </p>

            {/* Search Bar */}
            <div style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "var(--hero-gap-footer)" }}>
              <SearchBar />
            </div>

            <p className="body-sm" style={{ color: "var(--color-muted)" }}>
              No account required &middot; Free to use &middot; All reviews moderated
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <h2
            className="heading-2"
            style={{ textAlign: "center", marginBottom: "var(--section-heading-mb)" }}
          >
            How It Works
          </h2>

          {/* Stacks vertically on mobile as cards, 3-col on md+ */}
          <div
            style={{
              maxWidth: "1024px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
            }}
            className="md:grid md:grid-cols-3 md:gap-12"
          >
            {[
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Search",
                desc: "Find any builder or contractor in New Jersey by name, LLC, or individual. View aggregated data instantly.",
              },
              {
                icon: "M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25m20 0C22 10.998 17.5 6.253 12 6.253z",
                title: "Read",
                desc: "See structured data: ratings, delay patterns, cost overruns, common issues, and direct experiences from real homeowners.",
              },
              {
                icon: "M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4",
                title: "Share",
                desc: "Share your renovation experience anonymously. Your review is AI-processed and human-moderated before publication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-static"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-2)",
                }}
              >
                <div
                  style={{
                    width: "var(--space-7)",
                    height: "var(--space-7)",
                    minWidth: "var(--space-7)",
                    backgroundColor: "var(--color-teal-light)",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: "var(--space-3)", height: "var(--space-3)", color: "var(--color-teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    className="heading-4"
                    style={{ marginBottom: "var(--space-1)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="body" style={{ maxWidth: "320px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "var(--space-4)" }}>
            <Link
              href="/how-it-works"
              className="link-teal"
              style={{ fontSize: "var(--text-body)" }}
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
        <div className="container-site">
          <h2
            className="heading-2"
            style={{ textAlign: "center", marginBottom: "var(--space-1)" }}
          >
            Why Homeowners Use BuildChex
          </h2>
          <p
            className="body-lg"
            style={{
              textAlign: "center",
              maxWidth: "480px",
              margin: "0 auto",
              marginBottom: "var(--section-heading-mb)",
            }}
          >
            Transparency tools designed for real homeowners.
          </p>

          {/* Vertical stacked cards on mobile, 2-col grid on md+ */}
          <div
            style={{
              maxWidth: "var(--container-text)",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
            }}
            className="md:grid md:grid-cols-2 md:gap-6"
          >
            {[
              {
                icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
                title: "No Accounts Required",
                desc: "Search and read reviews instantly. Write anonymously without creating an account.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "AI-Moderated & Human-Reviewed",
                desc: "Every review is processed by AI and reviewed by humans to ensure quality and authenticity.",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Structured Data",
                desc: "Not just star ratings. See delays, cost overruns, \"would hire again\" rates, and more.",
              },
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Built by a Homeowner",
                desc: "Created from real frustration with contractor accountability. Made for New Jersey homeowners.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-static"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "var(--space-7)",
                    height: "var(--space-7)",
                    backgroundColor: "var(--color-teal-light)",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  <svg
                    style={{ width: "var(--space-3)", height: "var(--space-3)", color: "var(--color-teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon} />
                  </svg>
                </div>
                <h3
                  className="heading-4"
                  style={{ marginBottom: "var(--space-1)" }}
                >
                  {item.title}
                </h3>
                <p className="body" style={{ maxWidth: "320px", color: "var(--color-muted)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div
          className="container-site"
          style={{ textAlign: "center", maxWidth: "var(--container-text)" }}
        >
          <h2
            className="heading-2"
            style={{ marginBottom: "var(--space-2)" }}
          >
            Had a renovation recently?
          </h2>
          <p
            className="body-lg"
            style={{
              maxWidth: "520px",
              margin: "0 auto var(--space-3)",
            }}
          >
            Share your experience and help other New Jersey homeowners make
            better decisions. Your anonymous review takes 2 minutes.
          </p>
          <Link href="/review/new" className="btn-primary btn-lg btn-mobile-full">
            Write a Review
          </Link>
        </div>
      </section>
    </>
  );
}
