"use client";

// Aviso de cookies bilingüe (26-nov-2026), conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013:
// dice para qué son las cookies, quién responde por los datos, dónde quedan, qué derechos tiene la persona
// y cómo retira el permiso. Aceptar y Rechazar pesan lo mismo. Sin decisión, HubSpot no se carga.
// Abajo a la derecha en escritorio para no tapar el botón de idioma (abajo a la izquierda).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  EVENTO_ABRIR,
  borrarCookiesHubSpot,
  guardarDecision,
  leerDecision,
  type Decision,
} from "@/lib/consentimiento";

const COPY = {
  es: {
    titulo: "merahki.ai usa cookies de HubSpot solo si las aceptas",
    texto:
      "Con ellas sabemos qué páginas de este sitio visitas. Si llenas un formulario con tu correo, esas visitas quedan en tu ficha de contacto y nos ayudan a preparar mejor la conversación contigo. Si las rechazas, el sitio funciona igual.",
    legal:
      "Responsable: Meraki Media S.A.S. (NIT 901402436‑1). HubSpot, Inc. guarda los datos en Estados Unidos. Puedes conocer, actualizar, rectificar o suprimir tus datos y retirar este permiso cuando quieras desde «Preferencias de cookies», al pie de cada página. Más detalle en la",
    politica: "política de privacidad",
    politicaHref: "/es/privacy-policy",
    aceptar: "Aceptar",
    rechazar: "Rechazar",
    cerrar: "Cerrar sin cambiar",
    estado: {
      aceptadas: "Hoy tienes las cookies de HubSpot aceptadas.",
      rechazadas: "Hoy tienes las cookies de HubSpot rechazadas.",
    },
  },
  en: {
    titulo: "merahki.ai uses HubSpot cookies only if you accept them",
    texto:
      "They tell us which pages of this site you visit. If you fill out a form with your email, those visits are added to your contact record and help us prepare a better conversation with you. If you reject them, the site works the same.",
    legal:
      "Data controller: Meraki Media S.A.S. (Tax ID 901402436‑1). HubSpot, Inc. stores the data in the United States. You can access, update, correct or delete your data and withdraw this permission at any time from “Cookie preferences” at the bottom of every page. More details in the",
    politica: "privacy policy",
    politicaHref: "/privacy-policy",
    aceptar: "Accept",
    rechazar: "Reject",
    cerrar: "Close without changes",
    estado: {
      aceptadas: "You currently accept HubSpot cookies.",
      rechazadas: "You currently reject HubSpot cookies.",
    },
  },
};

export default function CookieBanner() {
  const pathname = usePathname() || "/";
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const t = COPY[lang];
  const [abierto, setAbierto] = useState(false);
  const [actual, setActual] = useState<Decision | null>(null);

  useEffect(() => {
    const decision = leerDecision();
    setActual(decision);
    if (!decision) setAbierto(true);
    const abrir = () => {
      setActual(leerDecision());
      setAbierto(true);
    };
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  function decidir(decision: Decision) {
    const antes = leerDecision();
    guardarDecision(decision);
    setActual(decision);
    setAbierto(false);
    // Retirar el permiso: HubSpot borra sus cookies, se borran también a mano y se recarga
    // la página para que el script deje de correr.
    if (decision === "rechazadas" && antes === "aceptadas") {
      (window._hsp = window._hsp || []).push(["revokeCookieConsent"]);
      borrarCookiesHubSpot();
      window.location.reload();
    }
  }

  if (!abierto) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="aviso-cookies-titulo"
      aria-describedby="aviso-cookies-texto"
      className="fixed z-[70] inset-x-3 bottom-3 md:inset-x-auto md:right-6 md:bottom-6 md:w-[26rem] rounded-2xl border border-white/15 bg-black/90 backdrop-blur-md shadow-2xl p-5 text-white"
    >
      <p id="aviso-cookies-titulo" className="text-[15px] font-semibold leading-snug pr-6">
        {t.titulo}
      </p>
      {actual && (
        <button
          onClick={() => setAbierto(false)}
          aria-label={t.cerrar}
          className="absolute top-3 right-3 w-7 h-7 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          ×
        </button>
      )}
      <p id="aviso-cookies-texto" className="mt-2 text-[13px] leading-relaxed text-white/75">
        {t.texto}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-white/50">
        {t.legal}{" "}
        <Link href={t.politicaHref} className="underline underline-offset-2 hover:text-white">
          {t.politica}
        </Link>
        .
      </p>
      {actual && <p className="mt-2 text-xs text-white/60">{t.estado[actual]}</p>}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => decidir("rechazadas")}
          className="flex-1 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
        >
          {t.rechazar}
        </button>
        <button
          onClick={() => decidir("aceptadas")}
          className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/85 transition-colors"
        >
          {t.aceptar}
        </button>
      </div>
    </div>
  );
}
