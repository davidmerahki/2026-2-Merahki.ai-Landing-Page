"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import "./home-universidades.css";

declare global {
  interface Window {
    initHomeUniversidades?: (root: HTMLElement) => () => void;
    initHomeUniversidadesEn?: (root: HTMLElement) => () => void;
    initHomeEmpresas?: (root: HTMLElement) => () => void;
    initHomeCompanies?: (root: HTMLElement) => () => void;
  }
}

/**
 * Home v8 (merahki model) en español (/es) e inglés (/). El contenido viene de los prototipos del vault
 * (`Home merahki.ai — propuesta (2026-11-20)/prototipo/v8` y `v8-en`), generados con integrar_sitio.py
 * (HOME_LANG=en para el inglés). Cada página pasa su propio HTML, así el navegador no descarga el del otro idioma.
 * La interactividad vive en /home-universidades/home.js (español) y home-en.js (inglés); cada script expone
 * su propia función de arranque para que una navegación entre idiomas nunca ejecute los textos del otro.
 * El home para empresas (/es/empresas, 26-nov-2026) usa el mismo componente con aud="empresas" y su propio script
 * (home-empresas.js, generado con HOME_LANG=empresas desde el prototipo v8-empresas). Su versión en inglés (/companies)
 * usa lang="en" aud="empresas" y home-companies.js (HOME_LANG=companies, prototipo v8-empresas-en).
 */
export default function HomeUniversidades({ lang = "es", html, aud = "universidades" }: { lang?: "es" | "en"; html: string; aud?: "universidades" | "empresas" }) {
  const ref = useRef<HTMLDivElement>(null);
  const cleanup = useRef<(() => void) | null>(null);
  const en = lang === "en";
  const emp = aud === "empresas";

  const start = () => {
    const init = emp
      ? en ? window.initHomeCompanies : window.initHomeEmpresas
      : en ? window.initHomeUniversidadesEn : window.initHomeUniversidades;
    if (!ref.current || !init || cleanup.current) return;
    cleanup.current = init(ref.current);
  };

  useEffect(() => {
    start();
    return () => {
      cleanup.current?.();
      cleanup.current = null;
    };
  }, []);

  return (
    <>
      <div ref={ref} className="mhu" lang={lang} data-aud={aud} data-role="rectoria" dangerouslySetInnerHTML={{ __html: html }} />
      <Script
        src={
          emp
            ? en ? "/home-universidades/home-companies.js" : "/home-universidades/home-empresas.js"
            : en ? "/home-universidades/home-en.js" : "/home-universidades/home.js"
        }
        strategy="afterInteractive"
        onReady={start}
      />
    </>
  );
}
