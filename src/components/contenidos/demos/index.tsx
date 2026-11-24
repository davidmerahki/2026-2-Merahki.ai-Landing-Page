"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DemoId } from "@/content/contenidos/experiencias";
import type { DemoProps } from "./ui";

/** Cada demo se carga solo cuando alguien abre su ficha. */
function Cargando() {
  return <div className="h-[360px] w-full rounded-2xl border border-white/10 bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />;
}

export const DEMOS: Record<DemoId, ComponentType<DemoProps>> = {
  copiloto: dynamic(() => import("./Copiloto"), { ssr: false, loading: Cargando }),
  "escenario-ramificado": dynamic(() => import("./EscenarioRamificado"), { ssr: false, loading: Cargando }),
  "proyecto-sql": dynamic(() => import("./ProyectoSQL"), { ssr: false, loading: Cargando }),
  "simulador-explorable": dynamic(() => import("./SimuladorExplorable"), { ssr: false, loading: Cargando }),
  "recorrido-360": dynamic(() => import("./Recorrido360"), { ssr: false, loading: Cargando }),
  "busqueda-tesoro-ra": dynamic(() => import("./BusquedaTesoroRA"), { ssr: false, loading: Cargando }),
  "video-presentador": dynamic(() => import("./VideoPresentador"), { ssr: false, loading: Cargando }),
  practica: dynamic(() => import("./Practica"), { ssr: false, loading: Cargando }),
  diagnostico: dynamic(() => import("./Diagnostico"), { ssr: false, loading: Cargando }),
};
