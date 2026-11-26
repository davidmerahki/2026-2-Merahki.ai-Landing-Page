import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HtmlRoot from "@/components/layout/HtmlRoot";
import PerksCarousel from "@/components/sections/PerksCarousel";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HubSpotTracking from "@/components/consent/HubSpotTracking";
import CookieBanner from "@/components/consent/CookieBanner";

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
    default: "merahki.ai | Micro-credentials, course design and online programs",
    template: "%s | merahki.ai",
  },
  description:
    "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
  openGraph: {
    title: "merahki.ai | Micro-credentials, course design and online programs",
    description:
      "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
    type: "website",
    url: "https://merahki.ai",
    siteName: "merahki.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "merahki.ai | Micro-credentials, course design and online programs",
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
      name: "merahki.ai",
      alternateName: ["Merahki", "merahki"],
      legalName: "Meraki Media S.A.S.",
      taxID: "901402436-1",
      foundingLocation: { "@type": "Place", name: "Bogotá, Colombia" },
      knowsAbout: ["micro-credentials", "microcredenciales", "instructional design", "diseño instruccional por competencias", "course virtualization", "virtualización de cursos", "verifiable digital credentials", "credenciales digitales verificables", "continuing education", "lifelong learning", "customer education", "Kirkpatrick model"],
      url: "https://merahki.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://merahki.ai/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Ecosistema end-to-end para diseñar, virtualizar, medir y emitir microcredenciales verificables bajo tu marca.",
      founder: {
        "@type": "Person",
        "@id": "https://merahki.ai/david-gonzalez#person",
        name: "David González",
        url: "https://merahki.ai/david-gonzalez",
      },
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
      name: "merahki.ai",
      alternateName: "Merahki",
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
    <HtmlRoot className={inter.variable}>
      <body className="bg-void text-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <LanguageSwitcher />
        <main>{children}</main>
        <PerksCarousel />
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Vercel mide sin cookies. HubSpot pone cookies y por eso espera el permiso del aviso (Ley 1581). */}
        <HubSpotTracking />
        <CookieBanner />
      </body>
    </HtmlRoot>
  );
}
