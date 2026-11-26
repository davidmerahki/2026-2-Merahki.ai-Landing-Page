"use client";

// Código de seguimiento de HubSpot (26-nov-2026). Solo se carga si la persona aceptó las cookies en el aviso.
// Con el código, las visitas de un contacto identificado (llenó un formulario de HubSpot en este navegador,
// o abrió un correo de marketing enviado desde HubSpot) quedan en su ficha, y alimentan la temperatura
// de la empresa que calcula tablero-diario/cuentas.py.
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { EVENTO_DECISION, leerDecision, type Decision } from "@/lib/consentimiento";

const PORTAL_HUBSPOT = "51381899"; // portal de merahki.ai (account-info/v3/details), región de datos na1

export default function HubSpotTracking() {
  const pathname = usePathname();
  const [aceptado, setAceptado] = useState(false);
  const cargado = useRef(false);
  const ultimaRuta = useRef<string | null>(null);

  useEffect(() => {
    const aplicar = (decision: Decision | null) => {
      if (decision !== "aceptadas") return;
      // El aviso es nuestro: se apaga el banner propio de HubSpot para no mostrar dos avisos.
      // La bandera tiene que existir antes de que cargue el script.
      window.disableHubSpotCookieBanner = true;
      (window._hsp = window._hsp || []).push([
        "setHubSpotConsent",
        { analytics: true, advertisement: false, functionality: false },
      ]);
      setAceptado(true);
    };
    aplicar(leerDecision());
    const alDecidir = (e: Event) => aplicar((e as CustomEvent<Decision>).detail);
    window.addEventListener(EVENTO_DECISION, alDecidir);
    return () => window.removeEventListener(EVENTO_DECISION, alDecidir);
  }, []);

  // El sitio navega sin recargar la página. HubSpot registra sola la primera vista al cargar,
  // y cada cambio de ruta posterior se registra con setPath y trackPageView (guía de HubSpot para SPA).
  useEffect(() => {
    if (!cargado.current) return;
    const ruta = window.location.pathname + window.location.search;
    if (ruta === ultimaRuta.current) return;
    ultimaRuta.current = ruta;
    const cola = (window._hsq = window._hsq || []);
    cola.push(["setPath", ruta]);
    cola.push(["trackPageView"]);
  }, [pathname]);

  if (!aceptado) return null;
  return (
    <Script
      id="hs-script-loader"
      src={`https://js.hs-scripts.com/${PORTAL_HUBSPOT}.js`}
      strategy="afterInteractive"
      onLoad={() => {
        cargado.current = true;
        ultimaRuta.current = window.location.pathname + window.location.search;
      }}
    />
  );
}
