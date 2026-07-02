import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://caiooliveira.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Caio Oliveira — Data Engineer",
    template: "%s — Caio Oliveira",
  },
  description:
    "Portfolio of Caio Oliveira, a Data Engineer specialized in batch and streaming pipelines, cloud data architecture (GCP) and generative AI solutions for fintech and government.",
  keywords: [
    "Caio Oliveira",
    "Data Engineer",
    "GCP",
    "BigQuery",
    "Vertex AI",
    "PySpark",
    "Apache Airflow",
    "Goiás Government",
    "Minsait",
    "Portfolio",
  ],
  authors: [{ name: "Caio Oliveira Gonçalves" }],
  creator: "Caio Oliveira Gonçalves",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Caio Oliveira — Data Engineer",
    description: "Batch and streaming data pipelines, cloud architecture and generative AI applied to fintech and government.",
    siteName: "Caio Oliveira",
    images: [{ url: "/images/gcp-data-engineer-badge.png", width: 1040, height: 1040 }],
  },
  twitter: {
    card: "summary",
    title: "Caio Oliveira — Data Engineer",
    description: "Batch and streaming data pipelines, cloud architecture and generative AI applied to fintech and government.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon-512.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caio Oliveira Gonçalves",
    jobTitle: "Data Engineer",
    url: siteUrl,
    email: "mailto:caio11goncalves@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/in/caio-oliveira-6889001bb/",
      "https://github.com/caioOlivera",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Goiás",
    },
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
