"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "56px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0, textDecoration: "none" }}>
            <span style={{ fontWeight: 700, fontSize: "var(--text-h3-mobile)" }}>
              <span style={{ color: "var(--color-charcoal)" }}>Build</span>
              <span style={{ position: "relative" }}>
                <span style={{ color: "var(--color-teal)" }}>Chex</span>
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: 0,
                    color: "var(--color-teal)",
                    fontSize: "var(--text-small)",
                  }}
                >
                  ▲
                </span>
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "var(--space-4)" }}>
            <Link
              href="/how-it-works"
              style={{
                color: "var(--color-charcoal)",
                fontWeight: 500,
                fontSize: "var(--text-small)",
                textDecoration: "none",
                transition: "color var(--duration) var(--ease)",
              }}
              className="hover:text-teal"
            >
              How It Works
            </Link>

            <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search builder..."
                className="input-base"
                style={{
                  minHeight: "48px",
                  width: "200px",
                  fontSize: "var(--text-small)",
                  padding: "var(--space-1) var(--space-2)",
                  borderRadius: "var(--radius-pill)",
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ minHeight: "48px", padding: "0 var(--space-2)", borderRadius: "var(--radius-pill)" }}
              >
                <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <Link href="/review/new" className="btn-primary" style={{ fontSize: "var(--text-small)", minHeight: "48px" }}>
              Write a Review
            </Link>
          </div>

          {/* Mobile Menu Button — 44px tap target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-md)",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginRight: "-8px",
              WebkitTapHighlightColor: "transparent",
              transition: "background-color var(--duration) var(--ease)",
            }}
            onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-bg-muted)"; }}
            onTouchEnd={(e) => { setTimeout(() => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }, 150); }}
          >
            <svg style={{ width: "24px", height: "24px", color: "var(--color-charcoal)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu — generous spacing */}
        {mobileMenuOpen && (
          <div
            className="md:hidden"
            style={{
              paddingTop: "var(--space-2)",
              paddingBottom: "var(--space-3)",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
            }}
          >
            <Link
              href="/how-it-works"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "var(--color-charcoal)",
                fontWeight: 500,
                fontSize: "var(--text-body)",
                textDecoration: "none",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>

            <form onSubmit={handleSearch} style={{ display: "flex", gap: "var(--space-2)" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search builder..."
                className="input-base"
                style={{
                  flex: 1,
                  minHeight: "56px",
                  fontSize: "var(--text-body)",
                  padding: "var(--space-2) var(--space-2)",
                  borderRadius: "var(--radius-pill)",
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{
                  minHeight: "56px",
                  padding: "0 var(--space-3)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <Link
              href="/review/new"
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "56px",
                textDecoration: "none",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-body)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Write a Review
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
