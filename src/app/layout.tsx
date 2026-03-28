import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BuildChex — Know Before You Build",
  description:
    "Real experiences from New Jersey homeowners. Anonymous, AI-moderated reviews of residential builders and contractors. Search by name, read structured data, and share your experience.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BuildChex — Know Before You Build",
    description:
      "Real experiences from New Jersey homeowners. Anonymous, AI-moderated reviews of residential builders and contractors.",
    type: "website",
    url: "https://buildchex.com",
    images: [
      {
        url: "https://buildchex.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildChex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildChex — Know Before You Build",
    description:
      "Real experiences from New Jersey homeowners. Anonymous, AI-moderated reviews of residential builders and contractors.",
    images: ["https://buildchex.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white antialiased font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
