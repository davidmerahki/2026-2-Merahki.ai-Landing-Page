import type { Metadata } from "next";

/**
 * Showroom — URL OCULTA (no descubrible) para compartir el deck de David.
 *
 * "Oculta" = no indexable ni enlazada, NO privada: cualquiera con el link entra.
 *  - noindex/nofollow (meta robots) abajo → los buscadores la ignoran.
 *  - No está en src/app/sitemap.ts (lista explícita) → no aparece en el sitemap.
 *  - Ningún enlace interno del sitio apunta aquí.
 *  - El middleware excluye "showroom" y "decks" → sin redirect de idioma; una sola URL.
 *
 * El deck vive como bundle estático en public/decks/showroom/ (index.html +
 * deck-stage.js + assets/). Se sirve full-bleed en un iframe fixed que cubre
 * el navbar/footer del layout raíz. deck-stage.js auto-escala y letterboxea las
 * slides al viewport, así que el iframe a pantalla completa es lo que necesita.
 */
export const metadata: Metadata = {
  title: "Showroom",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function ShowroomPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <iframe
        src="/decks/showroom/index.html"
        title="Merahki — Virtualización de micro-credenciales"
        className="h-full w-full border-0"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}
