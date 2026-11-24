"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DemoId } from "@/content/contenidos/tipos";
import type { DemoProps } from "./ui";

/** Cada demo se carga solo cuando alguien abre su ficha. */
function Cargando() {
  return <div className="h-[360px] w-full rounded-2xl border border-white/10 bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />;
}

export const DEMOS: Record<DemoId, ComponentType<DemoProps>> = {
  "video-interactivo": dynamic(() => import("./VideoInteractivo"), { ssr: false, loading: Cargando }),
  "linea-tiempo": dynamic(() => import("./LineaTiempo"), { ssr: false, loading: Cargando }),
  "recorrido-360": dynamic(() => import("./Recorrido360"), { ssr: false, loading: Cargando }),
  "busqueda-tesoro-ra": dynamic(() => import("./BusquedaTesoroRA"), { ssr: false, loading: Cargando }),
  "escenario-ramificado": dynamic(() => import("./EscenarioRamificado"), { ssr: false, loading: Cargando }),
  "juego-memoria": dynamic(() => import("./JuegoMemoria"), { ssr: false, loading: Cargando }),
  cuestionario: dynamic(() => import("./Cuestionario"), { ssr: false, loading: Cargando }),
  "test-personalidad": dynamic(() => import("./TestPersonalidad"), { ssr: false, loading: Cargando }),
  "rellenar-espacios": dynamic(() => import("./RellenarEspacios"), { ssr: false, loading: Cargando }),
  "marcar-palabras": dynamic(() => import("./MarcarPalabras"), { ssr: false, loading: Cargando }),
  "arrastrar-soltar": dynamic(() => import("./ArrastrarSoltar"), { ssr: false, loading: Cargando }),
  "arrastrar-palabras": dynamic(() => import("./ArrastrarPalabras"), { ssr: false, loading: Cargando }),
  "ordenar-parrafos": dynamic(() => import("./OrdenarParrafos"), { ssr: false, loading: Cargando }),
  "hotspots-imagenes": dynamic(() => import("./HotspotsImagen"), { ssr: false, loading: Cargando }),
  "yuxtaposicion-imagenes": dynamic(() => import("./Yuxtaposicion"), { ssr: false, loading: Cargando }),
  flashcards: dynamic(() => import("./Flashcards"), { ssr: false, loading: Cargando }),
  "tarjetas-dialogo": dynamic(() => import("./TarjetasDialogo"), { ssr: false, loading: Cargando }),
  acordeon: dynamic(() => import("./Acordeon"), { ssr: false, loading: Cargando }),
};
