import Link from "next/link";
import StarRating from "./StarRating";

interface BuilderCardProps {
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  county: string;
  topIssues: string[];
}

export default function BuilderCard({
  name,
  slug,
  rating,
  reviewCount,
  county,
  topIssues,
}: BuilderCardProps) {
  return (
    <Link href={`/builder/${slug}`} style={{ textDecoration: "none" }}>
      <div className="card" style={{ cursor: "pointer" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "var(--space-2)",
            marginBottom: "var(--space-2)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: "var(--text-body)",
                fontWeight: 700,
                color: "var(--color-charcoal)",
                marginBottom: "var(--space-1)",
              }}
            >
              {name}
            </h3>
            <p style={{ fontSize: "var(--text-small)", color: "var(--color-slate)" }}>
              {county} County, NJ
            </p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <StarRating rating={rating} size="md" />
            <p
              style={{
                fontSize: "var(--text-small)",
                color: "var(--color-muted)",
                marginTop: "var(--space-1)",
              }}
            >
              {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>

        {topIssues.length > 0 && (
          <div
            style={{
              marginTop: "var(--space-2)",
              paddingTop: "var(--space-2)",
              borderTop: "1px solid var(--color-border-light)",
            }}
          >
            <p
              className="label"
              style={{ marginBottom: "var(--space-1)" }}
            >
              Common Issues
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
              {topIssues.slice(0, 3).map((issue, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-block",
                    padding: "var(--space-1) var(--space-2)",
                    backgroundColor: "#fef2f2",
                    color: "#b91c1c",
                    fontSize: "var(--text-small)",
                    fontWeight: 500,
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  {issue}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
