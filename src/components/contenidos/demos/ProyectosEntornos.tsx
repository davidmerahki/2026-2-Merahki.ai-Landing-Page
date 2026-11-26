"use client";

import EntornosTabs from "./EntornosTabs";
import ProyectoSQL from "./ProyectoSQL";
import ProyectoHoja from "./ProyectoHoja";
import type { DemoProps } from "./ui";

/** Proyectos con retroalimentación en dos entornos: analítica (consulta SQL) y equipo de ventas (hoja de comisiones). */
export default function ProyectosEntornos({ lang }: DemoProps) {
  return (
    <EntornosTabs
      lang={lang}
      label={["Entornos del proyecto", "Project environments"]}
      entornos={[
        { id: "sql", tab: ["Analítica · Consulta SQL", "Analytics · SQL query"], Demo: ProyectoSQL },
        { id: "ventas", tab: ["Equipo de ventas · Hoja de comisiones", "Sales team · Commission sheet"], Demo: ProyectoHoja },
      ]}
    />
  );
}
