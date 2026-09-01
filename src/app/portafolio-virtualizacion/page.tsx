import type { Metadata } from "next";

/**
 * Portafolio de Virtualización — URL OCULTA (no descubrible) para compartir
 * el deck comercial de virtualización (3 opciones + add-ons + cronograma +
 * láminas seleccionadas del showroom).
 *
 * Mismo patrón que /showroom:
 *  - noindex/nofollow (meta robots) → los buscadores la ignoran.
 *  - No está en src/app/sitemap.ts → no aparece en el sitemap.
 *  - Ningún enlace interno del sitio apunta aquí.
 *  - El middleware excluye "portafolio-virtualizacion" y "decks" → sin
 *    redirect de idioma; una sola URL.
 *
 * El deck vive como bundle estático en public/decks/portafolio-virtualizacion/
 * (index.html, que reutiliza deck-stage.js y assets del showroom).
 */
export const metadata: Metadata = {
  title: "Portafolio de Virtualización",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function PortafolioVirtualizacionPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <iframe
        src="/decks/portafolio-virtualizacion/index.html"
        title="Merahki — Portafolio de Virtualización"
        className="h-full w-full border-0"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}
