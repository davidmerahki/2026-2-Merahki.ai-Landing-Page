"use client";

import { usePathname } from "next/navigation";

/**
 * Frase del carrusel de reconocimientos. PerksCarousel vive en el layout raíz
 * (componente de servidor sin parámetros de ruta), así que el idioma se lee de la ruta:
 * español cuando la ruta es /es o empieza por /es/.
 */
export default function PerksCarouselCaption() {
  const pathname = usePathname() || "";
  const es = pathname === "/es" || pathname.startsWith("/es/");
  return es
    ? "Soluciones del ecosistema de merahki.ai y sus aliados, con certificaciones y reconocimientos de la industria."
    : "Trusted by the world's leading software review platforms, all merahki.ai and partners ecosystem solutions meet the highest industry standards.";
}
