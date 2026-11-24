"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { ES_ROUTES } from "@/lib/routes.generated";

const LANG_COOKIE = "preferred-lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
// Rutas con versión ES real (generadas desde src/app/es).
const ES_ROUTE_SET = new Set<string>(ES_ROUTES);

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isEs = pathname === "/es" || pathname.startsWith("/es/");

  const targetLang = isEs ? "en" : "es";
  // Destino cuando la página no declara su versión en el otro idioma (hreflang):
  // - un artículo sin traducción lleva al blog del otro idioma (antes: 404, o una redirección
  //   que devolvía al artículo en español y el botón parecía no responder; 24-nov-2026);
  // - una página sin versión ES lleva al home en español.
  const isArticle = /^\/(es\/)?blog\/[^/]+/.test(pathname);
  const targetHref = isEs
    ? isArticle
      ? "/blog"
      : pathname.slice(3) || "/"
    : ES_ROUTE_SET.has(pathname)
      ? "/es" + (pathname === "/" ? "" : pathname)
      : isArticle
        ? "/es/blog"
        : "/es";

  function handleSwitch() {
    document.cookie = `${LANG_COOKIE}=${targetLang}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    // Si la página declara su versión en el otro idioma (hreflang), se usa esa URL:
    // los artículos del blog tienen slugs distintos en cada idioma.
    const alt = document.querySelector<HTMLLinkElement>(
      `link[rel="alternate"][hreflang="${targetLang === "es" ? "es" : "en-US"}"]`
    );
    if (alt?.href) {
      const u = new URL(alt.href);
      if (u.pathname !== pathname) return router.push(u.pathname + u.search);
    }
    router.push(targetHref);
  }

  // En celular va arriba, junto al botón de menú: abajo tapaba las cifras del encabezado
  // y chocaba con el botón fijo de agendar del home en español (auditoría 23-nov-2026).
  return (
    <button
      onClick={handleSwitch}
      aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
      className="fixed top-[14px] right-14 md:top-auto md:right-auto md:bottom-6 md:left-6 z-[60] group flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-md shadow-xl hover:border-white/30 hover:bg-black/80 transition-all duration-200 cursor-pointer"
    >
      <Globe className="w-3.5 h-3.5 text-white/45 group-hover:text-white/70 transition-colors flex-shrink-0" />
      <span
        className={`text-xs font-bold tracking-wide transition-colors ${
          !isEs ? "text-white" : "text-white/35"
        }`}
      >
        EN
      </span>
      <span className="text-white/20 text-xs select-none">|</span>
      <span
        className={`text-xs font-bold tracking-wide transition-colors ${
          isEs ? "text-white" : "text-white/35"
        }`}
      >
        ES
      </span>
    </button>
  );
}
