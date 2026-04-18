"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es");

  const targetHref = isEs
    ? pathname.slice(3) || "/"
    : "/es" + (pathname === "/" ? "" : pathname);

  return (
    <Link
      href={targetHref}
      aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-md shadow-xl hover:border-white/30 hover:bg-black/80 transition-all duration-200"
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
    </Link>
  );
}
