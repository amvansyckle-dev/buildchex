"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  size?: "sm" | "lg";
  placeholder?: string;
}

export default function SearchBar({
  size = "lg",
  placeholder = "Search by builder name, LLC, or individual...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const isLarge = size === "lg";

  if (!isLarge) {
    /* Small variant — inline row, used in nav */
    return (
      <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "var(--space-1)", alignItems: "center" }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="input-base"
            style={{
              flex: 1,
              minHeight: "48px",
              fontSize: "var(--text-small)",
              padding: "var(--space-1) var(--space-2)",
              borderRadius: "var(--radius-pill)",
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{
              minHeight: "48px",
              padding: "0 var(--space-2)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>
    );
  }

  /* Large variant — hero search bar, stacks on mobile */
  return (
    <form onSubmit={handleSearch} style={{ width: "100%", maxWidth: "560px", margin: "0 auto" }}>
      {/* Stacked on mobile, inline row on sm+ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
        }}
        className="sm:flex-row"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="input-base"
          style={{
            flex: 1,
            minHeight: "56px",
            fontSize: "var(--text-body)",
            padding: "var(--space-2) var(--space-3)",
            borderRadius: "var(--radius-pill)",
            boxShadow: "var(--shadow-soft)",
          }}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{
            minHeight: "56px",
            padding: "0 var(--space-4)",
            borderRadius: "var(--radius-pill)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-1)",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(26, 179, 148, 0.2)",
          }}
        >
          <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span style={{ fontSize: "var(--text-body)", fontWeight: 600 }}>
            Search
          </span>
        </button>
      </div>
    </form>
  );
}
