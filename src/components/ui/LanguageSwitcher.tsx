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
  // Si la página no tiene versión ES, el switch lleva al home en español (no a un 404).
  const targetHref = isEs
    ? pathname.slice(3) || "/"
    : ES_ROUTE_SET.has(pathname)
      ? "/es" + (pathname === "/" ? "" : pathname)
      : "/es";

  function handleSwitch() {
    document.cookie = `${LANG_COOKIE}=${targetLang}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    router.push(targetHref);
  }

  return (
    <button
      onClick={handleSwitch}
      aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-md shadow-xl hover:border-white/30 hover:bg-black/80 transition-all duration-200 cursor-pointer"
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
