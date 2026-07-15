"use client";
import { useEffect, useRef } from "react";

/**
 * Form de HubSpot con carga diferida: el script de terceros (js.hsforms.net +
 * el bundle del form que arrastra) NO baja durante la carga inicial de la
 * página. Se inyecta recién cuando el contenedor entra al rango de 800px del
 * viewport (IntersectionObserver) — el form vive al fondo de la home (#agenda),
 * así que el visitante que no scrollea nunca lo paga.
 */
export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;

      // Create the target div for HubSpot
      const formDiv = document.createElement("div");
      formDiv.className = "hs-form-frame";
      formDiv.setAttribute("data-region", "na1");
      formDiv.setAttribute("data-form-id", "68a587ca-28b2-4fb2-a25b-62d2df74281b");
      formDiv.setAttribute("data-portal-id", "51381899");
      container.appendChild(formDiv);

      // Load (or re-load) the HubSpot embed script so it picks up the new div
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/51381899.js";
      script.async = true;
      script.defer = true;
      container.appendChild(script);
    };

    // Fallback: navegadores sin IntersectionObserver cargan de inmediato
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
      // Cleanup on unmount to avoid duplicates
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="p-6" />;
}
