"use client";

import EntornosTabs from "./EntornosTabs";
import SimuladorExplorable from "./SimuladorExplorable";
import SimuladorFarmacia from "./SimuladorFarmacia";
import type { DemoProps } from "./ui";

/** Simuladores explorables en dos entornos: analítica (media y mediana) y droguería (punto de pedido). */
export default function SimuladoresEntornos({ lang }: DemoProps) {
  return (
    <EntornosTabs
      lang={lang}
      label={["Entornos del simulador", "Simulator environments"]}
      entornos={[
        { id: "analitica", tab: ["Analítica · Media y mediana", "Analytics · Mean and median"], Demo: SimuladorExplorable },
        { id: "drogueria", tab: ["Droguería · Cuándo pedir", "Drugstore · When to reorder"], Demo: SimuladorFarmacia },
      ]}
    />
  );
}
