"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BuilderCard from "@/components/BuilderCard";
import Link from "next/link";

const mockResults = [
  { name: "Thompson & Sons Construction", slug: "thompson-sons-construction", rating: 4.2, reviewCount: 23, county: "Monmouth", topIssues: ["Missed Deadlines", "Communication Issues"] },
  { name: "BuildRight Contractors LLC", slug: "buildright-contractors", rating: 3.8, reviewCount: 18, county: "Bergen", topIssues: ["Cost Overruns", "Permit Delays"] },
  { name: "Premier Home Builders", slug: "premier-home-builders", rating: 4.6, reviewCount: 45, county: "Morris", topIssues: [] },
  { name: "Coastal Renovations Inc", slug: "coastal-renovations", rating: 3.5, reviewCount: 12, county: "Ocean", topIssues: ["Poor Workmanship", "Unresponsive"] },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = mockResults.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container-site section-sm">
      <div style={{ marginBottom: "var(--space-4)" }}>
        <h1 className="heading-2" style={{ marginBottom: "var(--space-1)" }}>
          Search Results
        </h1>
        <p className="body">
          {results.length === 0
            ? `No results found for "${query}"`
            : `Found ${results.length} builder${results.length !== 1 ? "s" : ""} matching "${query}"`}
        </p>
      </div>

      {results.length > 0 ? (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}
          className="md:grid md:grid-cols-2 md:gap-6"
        >
          {results.map((builder) => (
            <BuilderCard key={builder.slug} {...builder} />
          ))}
        </div>
      ) : (
        <div
          className="card-static"
          style={{ padding: "var(--space-5) var(--space-3)", textAlign: "center", marginBottom: "var(--space-5)" }}
        >
          <h2 className="heading-3" style={{ marginBottom: "var(--space-2)" }}>
            Builder not found
          </h2>
          <p className="body" style={{ maxWidth: "400px", margin: "0 auto var(--space-3)" }}>
            We couldn&apos;t find &quot;{query}&quot; in our database. If this is a legitimate
            builder in New Jersey, submit a request below.
          </p>
          <button className="btn-primary btn-mobile-full" style={{ marginBottom: "var(--space-2)" }}>
            Request This Builder
          </button>
          <p className="body-sm" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-1)" }}>
            Or{" "}
            <Link href="/" className="link-teal" style={{ fontSize: "var(--text-small)" }}>
              return to search
            </Link>
          </p>
        </div>
      )}

      <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-5)" }}>
        <h2 className="heading-3" style={{ marginBottom: "var(--space-3)" }}>
          Popular Builders in New Jersey
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
          className="md:grid md:grid-cols-2 md:gap-6"
        >
          {mockResults.slice(0, 2).map((builder) => (
            <BuilderCard key={builder.slug} {...builder} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container-site section-sm">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
