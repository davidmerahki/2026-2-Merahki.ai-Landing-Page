import type { Metadata } from "next";
import QueHaceMerahki from "@/app/blog/que-hace-merahki/page";

export const metadata: Metadata = {
  title: "¿Qué hace merahki.ai? — Ecosistema de Education-Led Growth",
  description:
    "Conoce las cinco capas integradas del ecosistema merahki.ai: diseño, virtualización, soporte operativo, learning analytics y credenciales digitales verificables.",
  openGraph: {
    title: "¿Qué hace merahki.ai? — Ecosistema de Education-Led Growth",
    description:
      "La infraestructura end-to-end que convierte la educación en el principal motor de crecimiento institucional.",
    url: "https://merahki.ai/es/blog/que-hace-merahki",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/es/blog/que-hace-merahki" },
};

export default QueHaceMerahki;
