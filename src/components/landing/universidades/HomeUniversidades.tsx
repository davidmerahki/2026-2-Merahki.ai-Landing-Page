"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import "./home-universidades.css";
import { HOME_HTML } from "./home-html";

declare global {
  interface Window {
    initHomeUniversidades?: (root: HTMLElement) => () => void;
  }
}

/**
 * Home para universidades (/es). El contenido viene del prototipo v5 aprobado en el vault
 * (`Home merahki.ai — propuesta (2026-11-20)/prototipo`), generado con integrar_sitio.py:
 * el HTML se renderiza en el servidor y la interactividad vive en /home-universidades/home.js.
 */
export default function HomeUniversidades() {
  const ref = useRef<HTMLDivElement>(null);
  const cleanup = useRef<(() => void) | null>(null);

  const start = () => {
    if (!ref.current || !window.initHomeUniversidades || cleanup.current) return;
    cleanup.current = window.initHomeUniversidades(ref.current);
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
      <div ref={ref} className="mhu" data-role="rectoria" dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
      <Script src="/home-universidades/home.js" strategy="afterInteractive" onReady={start} />
    </>
  );
}
