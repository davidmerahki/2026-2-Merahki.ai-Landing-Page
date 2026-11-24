"use client";

import { usePathname } from "next/navigation";

/**
 * Reemplaza los precios públicos de los planes (decisión de David, 23-nov-2026:
 * ningún precio en superficies públicas). Detecta el idioma por la ruta porque los
 * componentes de planes se comparten entre /es y la versión en inglés.
 */
export default function ScopePrice() {
  const es = (usePathname() || "").startsWith("/es");
  return (
    <>
      <p className="text-2xl md:text-3xl font-bold text-white">{es ? "Según alcance" : "Scope-based"}</p>
      <p className="text-white/50 text-sm mt-1">
        {es ? "El valor depende del alcance: lo vemos en una reunión de 30 minutos." : "Pricing depends on scope: we cover it in a 30-minute meeting."}
      </p>
    </>
  );
}
