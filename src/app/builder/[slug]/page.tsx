import StarRating from "@/components/StarRating";
import Link from "next/link";

const mockBuilder = {
  name: "Thompson & Sons Construction",
  llc: "Thompson & Sons Construction LLC",
  county: "Monmouth",
  slug: "thompson-sons-construction",
  overallRating: 4.2,
  reviewCount: 23,
  wouldHireAgainPercentage: 76,
  averageDelay: 3.2,
  averageCostOverrun: 12.5,
};

const mockReviews = [
  { id: "1", rating: 5, projectType: "Kitchen Remodel", comment: "Thompson & Sons did an excellent job on our kitchen remodel. They were professional, communicative, and finished on time.", wouldHireAgain: "yes", createdAt: new Date("2024-03-15") },
  { id: "2", rating: 3, projectType: "Bathroom Renovation", comment: "Work quality was good but they had some scheduling delays. Overall satisfied but communication could have been better.", wouldHireAgain: "unsure", createdAt: new Date("2024-03-10") },
  { id: "3", rating: 4, projectType: "Deck Addition", comment: "Good work, reasonable pricing, finished a bit late but nothing major.", wouldHireAgain: "yes", createdAt: new Date("2024-03-01") },
];

export default function BuilderPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container-site section-sm">
      {/* Header */}
      <div style={{ marginBottom: "var(--space-5)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-4)" }}>
        <h1 className="heading-2" style={{ marginBottom: "var(--space-1)" }}>
          {mockBuilder.name}
        </h1>
        <p className="body" style={{ marginBottom: "var(--space-3)" }}>
          {mockBuilder.llc}
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
          className="sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div>
            <p className="label" style={{ marginBottom: "var(--space-1)" }}>Location</p>
            <p style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--color-charcoal)" }}>
              {mockBuilder.county} County, NJ
            </p>
          </div>
          <div>
            <p className="label" style={{ marginBottom: "var(--space-1)" }}>Overall Rating</p>
            <StarRating rating={mockBuilder.overallRating} size="lg" />
          </div>
          <div>
            <p className="label" style={{ marginBottom: "var(--space-1)" }}>Reviews</p>
            <p style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--color-charcoal)" }}>
              {mockBuilder.reviewCount} total
            </p>
          </div>
          <Link href="/review/new" className="btn-primary btn-mobile-full" style={{ height: "fit-content" }}>
            Write a Review
          </Link>
        </div>
      </div>

      {/* Rating Summary */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}
        className="md:grid-cols-4"
      >
        <div className="card-static">
          <p className="label" style={{ marginBottom: "var(--space-2)" }}>Overall Rating</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-1)", marginBottom: "var(--space-1)" }}>
            <div style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: "var(--color-charcoal)" }}>{mockBuilder.overallRating}</div>
            <div className="body-sm">/5</div>
          </div>
          <StarRating rating={mockBuilder.overallRating} />
        </div>
        <div className="card-static">
          <p className="label" style={{ marginBottom: "var(--space-2)" }}>Would Hire Again</p>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: "var(--color-teal)", marginBottom: "var(--space-1)" }}>
            {mockBuilder.wouldHireAgainPercentage}%
          </div>
          <p className="body-sm">of homeowners</p>
        </div>
        <div className="card-static">
          <p className="label" style={{ marginBottom: "var(--space-2)" }}>Average Delay</p>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
            {mockBuilder.averageDelay}
          </div>
          <p className="body-sm">weeks over estimate</p>
        </div>
        <div className="card-static">
          <p className="label" style={{ marginBottom: "var(--space-2)" }}>Cost Overrun</p>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "var(--space-1)" }}>
            {mockBuilder.averageCostOverrun}%
          </div>
          <p className="body-sm">above estimate</p>
        </div>
      </div>

      {/* Issue Signals */}
      <div style={{ marginBottom: "var(--space-5)" }}>
        <h2 className="heading-3" style={{ marginBottom: "var(--space-3)" }}>Common Issues</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {[
            { name: "Missed Deadlines", percentage: 35 },
            { name: "Communication Problems", percentage: 28 },
            { name: "Cost Overruns", percentage: 22 },
            { name: "Permit/Inspection Delays", percentage: 15 },
          ].map((issue) => (
            <div key={issue.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-1)" }}>
                <p style={{ fontWeight: 700, color: "var(--color-charcoal)", fontSize: "var(--text-small)" }}>{issue.name}</p>
                <p className="body-sm">{issue.percentage}%</p>
              </div>
              <div style={{ width: "100%", backgroundColor: "var(--color-bg-muted)", borderRadius: "var(--radius-pill)", height: "8px" }}>
                <div style={{ backgroundColor: "#ef4444", height: "8px", borderRadius: "var(--radius-pill)", width: `${issue.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ marginBottom: "var(--space-5)" }}>
        <h2 className="heading-3" style={{ marginBottom: "var(--space-3)" }}>Recent Reviews</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {mockReviews.map((review) => (
            <div key={review.id} className="card-static">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-2)" }} className="sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, color: "var(--color-charcoal)", fontSize: "var(--text-body)" }}>{review.projectType}</span>
                    <span className="body-sm">{review.createdAt.toLocaleDateString()}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <span
                  style={{
                    fontSize: "var(--text-small)", fontWeight: 700,
                    padding: "6px var(--space-2)", borderRadius: "var(--radius-pill)", alignSelf: "flex-start",
                    backgroundColor: review.wouldHireAgain === "yes" ? "#dcfce7" : review.wouldHireAgain === "no" ? "#fef2f2" : "#fefce8",
                    color: review.wouldHireAgain === "yes" ? "#15803d" : review.wouldHireAgain === "no" ? "#b91c1c" : "#a16207",
                  }}
                >
                  {review.wouldHireAgain === "yes" ? "Would Hire Again" : review.wouldHireAgain === "no" ? "Would Not Hire Again" : "Not Sure"}
                </span>
              </div>
              <p className="body">{review.comment}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-4)" }}>
          <button className="link-teal" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "var(--text-body)" }}>
            View all {mockBuilder.reviewCount} reviews →
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="card-static" style={{ padding: "var(--space-4)", textAlign: "center", marginBottom: "var(--space-5)", backgroundColor: "var(--color-bg-subtle)" }}>
        <h3 className="heading-3" style={{ marginBottom: "var(--space-2)" }}>Share Your Experience</h3>
        <p className="body" style={{ maxWidth: "400px", margin: "0 auto var(--space-3)" }}>
          Did you work with {mockBuilder.name}? Share your anonymous review and help other homeowners make informed decisions.
        </p>
        <Link href="/review/new" className="btn-primary btn-mobile-full">Write a Review</Link>
      </div>

      {/* Legal */}
      <div style={{ backgroundColor: "var(--color-bg-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-3)" }}>
        <p style={{ fontWeight: 700, color: "var(--color-charcoal)", fontSize: "0.6875rem", marginBottom: "var(--space-1)" }}>Legal Notice</p>
        <p className="body-sm" style={{ lineHeight: "var(--leading-body)" }}>
          All reviews are user-submitted and moderated for quality and authenticity. BuildChex does not endorse any particular builder or contractor. Reviews are the opinions of individual homeowners and do not represent BuildChex&apos;s views. Always conduct your own due diligence before hiring any contractor.
        </p>
      </div>
    </div>
  );
}
