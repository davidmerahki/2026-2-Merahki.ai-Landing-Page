"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Formulario de cotización de HubSpot con carga diferida (24-nov-2026).
 * Usa los mismos dos formularios del home, uno por idioma, que ya avisan por correo a David y a JD:
 * ES de3af84a-fc9f-49db-b812-33ecc7646629 · EN 8a15f82d-64f8-4be1-ad50-192574435497 (portal 51381899, na1).
 * Antes cargaba un formulario en español también en las páginas en inglés.
 * El script de HubSpot (v2) se inyecta solo cuando el contenedor queda a 800 px del viewport.
 * Estilos en globals.css (.hsq).
 */
const FORMS = {
  es: "de3af84a-fc9f-49db-b812-33ecc7646629",
  en: "8a15f82d-64f8-4be1-ad50-192574435497",
};

type Hbspt = { forms: { create: (o: Record<string, unknown>) => void } };

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const target = document.createElement("div");
    target.id = `hsq-${lang}-${Math.random().toString(36).slice(2, 8)}`;
    container.appendChild(target);

    let loaded = false;
    const create = () => {
      const w = window as unknown as { hbspt?: Hbspt };
      try {
        w.hbspt?.forms.create({ portalId: "51381899", formId: FORMS[lang], region: "na1", target: `#${target.id}`, css: "" });
      } catch {
        /* sin formulario: el resto de la página sigue funcionando */
      }
    };
    const load = () => {
      if (loaded) return;
      loaded = true;
      const w = window as unknown as { hbspt?: Hbspt };
      if (w.hbspt?.forms) return create();
      const existing = document.querySelector<HTMLScriptElement>('script[src="https://js.hsforms.net/forms/embed/v2.js"]');
      if (existing) {
        existing.addEventListener("load", create);
        return;
      }
      const s = document.createElement("script");
      s.src = "https://js.hsforms.net/forms/embed/v2.js";
      s.charset = "utf-8";
      s.async = true;
      s.onload = create;
      document.head.appendChild(s);
    };

    if (typeof IntersectionObserver === "undefined") {
      load();
      return () => {
        container.innerHTML = "";
      };
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(container);
    return () => {
      io.disconnect();
      container.innerHTML = "";
    };
  }, [lang]);

  return <div ref={containerRef} className="hsq" />;
}
