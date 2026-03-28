import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: "var(--color-muted)",
    fontSize: "var(--text-small)",
    textDecoration: "none" as const,
    display: "flex" as const,
    alignItems: "center" as const,
    minHeight: "44px",
    transition: "color var(--duration) var(--ease)",
    WebkitTapHighlightColor: "transparent" as const,
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-charcoal)",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-site" style={{ paddingTop: "var(--space-6)", paddingBottom: "var(--space-6)" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{ gap: "var(--space-5)", marginBottom: "var(--space-5)" }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "var(--space-2)" }}>
              <span style={{ fontWeight: 700, fontSize: "var(--text-h3-mobile)" }}>
                <span style={{ color: "white" }}>Build</span>
                <span style={{ color: "var(--color-teal)" }}>Chex</span>
              </span>
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "var(--text-small)", fontStyle: "italic" }}>
              Built by homeowners, for homeowners
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3
              style={{
                fontWeight: 600,
                color: "white",
                fontSize: "var(--text-small)",
                marginBottom: "var(--space-1)",
              }}
            >
              Product
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li>
                <Link href="/" style={linkStyle} className="hover:text-teal">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/review/new" style={linkStyle} className="hover:text-teal">
                  Write a Review
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" style={linkStyle} className="hover:text-teal">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                fontWeight: 600,
                color: "white",
                fontSize: "var(--text-small)",
                marginBottom: "var(--space-1)",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li>
                <Link href="/about" style={linkStyle} className="hover:text-teal">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@buildchex.com" style={linkStyle} className="hover:text-teal">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              style={{
                fontWeight: 600,
                color: "white",
                fontSize: "var(--text-small)",
                marginBottom: "var(--space-1)",
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li>
                <Link href="/terms" style={linkStyle} className="hover:text-teal">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={linkStyle} className="hover:text-teal">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "var(--space-4)",
          }}
        >
          <p style={{ color: "var(--color-muted)", fontSize: "var(--text-small)", textAlign: "center" }}>
            &copy; {currentYear} BuildChex. All rights reserved. Made in New Jersey with ♦ for homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
}
