import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    default: "Caio Oliveira Gonçalves — Engenheiro de Dados",
    template: "%s — Caio Oliveira",
  },
  description:
    "Portfólio de Caio Oliveira Gonçalves, Engenheiro de Dados especializado em pipelines batch e streaming, arquitetura de dados na nuvem (GCP) e soluções de IA generativa para fintechs e governo.",
  keywords: [
    "Caio Oliveira",
    "Engenheiro de Dados",
    "Data Engineer",
    "GCP",
    "BigQuery",
    "Vertex AI",
    "PySpark",
    "Apache Airflow",
    "Governo de Goiás",
    "Minsait",
    "Portfólio",
  ],
  authors: [{ name: "Caio Oliveira Gonçalves" }],
  creator: "Caio Oliveira Gonçalves",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Caio Oliveira Gonçalves — Engenheiro de Dados",
    description:
      "Pipelines de dados batch e streaming, arquitetura na nuvem e IA generativa aplicada a fintechs e governo.",
    siteName: "Caio Oliveira",
    images: [{ url: "/images/gcp-data-engineer-badge.png", width: 1040, height: 1040 }],
  },
  twitter: {
    card: "summary",
    title: "Caio Oliveira Gonçalves — Engenheiro de Dados",
    description:
      "Pipelines de dados batch e streaming, arquitetura na nuvem e IA generativa aplicada a fintechs e governo.",
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
    jobTitle: "Engenheiro de Dados",
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
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="grain">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
