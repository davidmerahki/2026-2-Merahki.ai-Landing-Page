"use client";

import { usePathname } from "next/navigation";

/**
 * Envuelve <html> para fijar `lang` según la ruta: "es" bajo /es, "en" en el resto.
 * Es un client component para poder leer el pathname sin forzar render dinámico
 * (usar headers() en el layout raíz volvería dinámicas todas las páginas).
 */
export default function HtmlRoot({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  return (
    <html lang={lang} data-scroll-behavior="smooth" className={className} suppressHydrationWarning>
      {children}
    </html>
  );
}
