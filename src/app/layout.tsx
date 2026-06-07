import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PerksCarousel from "@/components/sections/PerksCarousel";
import ELGReportBanner from "@/components/sections/ELGReportBanner";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merahki.ai"),
  title: {
    default: "Merahki | Design and measure micro-credentials",
    template: "%s | Merahki",
  },
  description:
    "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
  openGraph: {
    title: "Merahki | Design and measure micro-credentials",
    description:
      "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
    type: "website",
    url: "https://merahki.ai",
    siteName: "Merahki",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merahki | Design and measure micro-credentials",
    description: "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
    site: "@merahki_ai",
    creator: "@merahki_ai",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://merahki.ai/#organization",
      name: "Merahki",
      url: "https://merahki.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://merahki.ai/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Ecosistema end-to-end para diseñar, virtualizar, medir y emitir microcredenciales verificables bajo tu marca.",
      sameAs: [
        "https://www.linkedin.com/company/merahki",
        "https://twitter.com/merahki_ai",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "jdsequeda@merahki.ai",
          telephone: "+57-317-781-0712",
          areaServed: ["CO", "MX", "CL", "PE", "AR", "EC", "BR"],
          availableLanguage: ["es", "en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "david@merahki.ai",
          telephone: "+1-760-338-2137",
          areaServed: ["US"],
          availableLanguage: ["en", "es"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://merahki.ai/#website",
      url: "https://merahki.ai",
      name: "Merahki",
      publisher: { "@id": "https://merahki.ai/#organization" },
      inLanguage: ["es-CO", "en-US"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body className="bg-void text-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <LanguageSwitcher />
        <main>{children}</main>
        <ELGReportBanner />
        <PerksCarousel />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
