import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "Reporte 2026 del Estado del Education-Led Growth",
  description: "Cómo las empresas convierten la educación en un motor estratégico de crecimiento. Hallazgos clave: 92.6% adopción de IA, 81.6% prioridad en revenue, la educación expandiéndose en el customer lifecycle.",
  openGraph: {
    title: "Reporte 2026 del Estado del Education-Led Growth",
    description: "Cómo las empresas convierten la educación en un motor estratégico de crecimiento. Hallazgos de 190 encuestados enterprise.",
    url: "https://merahki.ai/blog/reporte-2026-education-led-growth",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/blog/reporte-2026-education-led-growth" },
};

export default function ELGReport2026ES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Reporte</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">2026</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Education-Led Growth</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Reporte 2026 del Estado del <span className="text-gradient-peach-purple">Education-Led Growth</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-4 max-w-3xl">
              Cómo las Empresas Convierten la Educación en un Motor Estratégico de Crecimiento
            </p>
            <p className="text-sm text-white/40">Fuente: Intellum · 190 encuestados · Nov 2025 – Feb 2026</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Resumen Ejecutivo</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Cinco hallazgos clave que moldean la estrategia educativa en 2026</h2>
          </AnimatedSection>
          {[
            { title: "La educación se está expandiendo más allá de la retention hacia el revenue growth.", body: "Aunque la implementación, la product adoption y la retention siguen siendo las etapas del lifecycle más comunes, el enfoque en la customer expansion ha aumentado significativamente año tras año. Las organizaciones están comenzando a ver la educación como una palanca estratégica para impulsar el expansion revenue y el customer value a largo plazo." },
            { title: "La representación ejecutiva está aumentando — y eso importa.", body: "El liderazgo educativo está ascendiendo dentro de las organizaciones. Los programas liderados por ejecutivos C-level o VP demuestran indicadores más fuertes de madurez, incluyendo mayores tasas de completion, uso más amplio de herramientas de analytics y mayor inversión en tecnologías como la IA." },
            { title: "La adopción de IA ha pasado de la experimentación a la implementación cotidiana.", body: "El 92.6% de las organizaciones reportan uso activo de IA. Los equipos priorizan la IA para acelerar la creación de contenido escrito, apoyar a los learners mediante automatización y asistir con la planificación estratégica." },
            { title: "Las capacidades de marketing y analytics se están convirtiendo en habilitadores clave.", body: "Los programas con mayor soporte de marketing y capacidades de analytics están mejor posicionados para impulsar resultados de negocio medibles. Los datos educativos se conectan cada vez más con CRM y plataformas de soporte, expandiendo el ecosistema de analytics alrededor del LMS." },
            { title: "La madurez en medición está mejorando en los equipos de educación.", body: "Una proporción creciente de equipos comienza a medir resultados dentro de los primeros tres meses del lanzamiento. Muchos menos programas reportan prácticas de medición inconsistentes comparado con el año anterior." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card rounded-xl p-6 mb-4">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ¿Qué es ELG? */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "20%", y: "80%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Definición</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es Education-Led Growth?</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">Education-Led Growth (ELG) es un framework estratégico que posiciona la educación de empleados, clientes y partners como un motor principal de crecimiento empresarial. Al alinear la educación con objetivos de revenue, retention y adoption, las empresas pueden crear un impacto de negocio medible.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Framework de ELG™ — 7 Pilares</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {["Outcomes", "Audience", "Initiative", "Resources", "Delivery", "Marketing", "Measurement"].map((pillar, i) => (
                <div key={pillar} className="glass-card rounded-xl p-4 text-center">
                  <span className="text-accent-purple font-bold text-xs block mb-1">{i + 1}</span>
                  <span className="text-white/70 text-xs">{pillar}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center mt-3 italic">Continuous Improvement ↻</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Demografía de la Encuesta */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Demografía de la Encuesta</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiénes participaron</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-10">190 encuestados verificados por nombre y email. Principalmente empresas de EE.UU., enfocadas en enterprise. Período: Nov 2025 – Feb 2026.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Industria</h3>
            <p className="text-white/50 text-sm mb-4">55.3% de Manufactura o Tecnología, con el 44.7% restante representando otras industrias.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {[
                { v: "27.9%", l: "Manufactura" }, { v: "27.4%", l: "Tecnología" },
                { v: "13.2%", l: "Educación" }, { v: "12.1%", l: "Retail" },
                { v: "5.8%", l: "Software" }, { v: "5.3%", l: "Servicios Empresariales" },
                { v: "3.2%", l: "Finanzas / Seguros" }, { v: "1.6%", l: "Consultoría" },
                { v: "1.6%", l: "Energía" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-4">Tamaño de Empresa</h3>
            <div className="space-y-2 mb-10">
              {[
                { range: "100 – 499 empleados", pct: "20%" },
                { range: "500 – 999 empleados", pct: "26.3%" },
                { range: "1,000 – 4,999 empleados", pct: "34.2%" },
                { range: "5,000 – 19,000 empleados", pct: "12.6%" },
                { range: "20,000+ empleados", pct: "6.8%" },
              ].map((row) => (
                <div key={row.range} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.range}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Ingresos de la Empresa</h3>
            <p className="text-white/50 text-sm mb-4">Casi tres cuartas partes (74.2%) reportaron ingresos anuales superiores a $100M.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {[
                { v: "25.8%", l: "$1M–$99M" }, { v: "14.7%", l: "$100M–$199M" },
                { v: "9.5%", l: "$200M–$299M" }, { v: "11.6%", l: "$300M–$399M" },
                { v: "7.9%", l: "$400M–$499M" }, { v: "15.8%", l: "$500M–$1B" },
                { v: "7.4%", l: "$1B–$5B" }, { v: "6.9%", l: ">$5B" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h3 className="text-lg font-semibold mb-4">Roles Representados</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { v: "15.8%", l: "C-Level" }, { v: "11.6%", l: "VP" },
                { v: "49.5%", l: "Director" }, { v: "23.2%", l: "Manager" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold mb-2">Los equipos de educación están integrados en toda la empresa.</h3>
            <p className="text-white/50 text-sm mb-4">La mayoría reportaron pertenecer a HR/L&D (25.8%), Education Services (12.6%) o Professional Services (12.1%).</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {[
                { v: "25.8%", l: "HR / L&D" }, { v: "12.6%", l: "Education Services" },
                { v: "12.1%", l: "Professional Services" }, { v: "10.5%", l: "Customer Experience" },
                { v: "7.4%", l: "Marketing" }, { v: "7.4%", l: "Departamento propio" },
                { v: "5.8%", l: "Sales" }, { v: "5.3%", l: "Customer Success" },
                { v: "4.2%", l: "Soporte" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <h3 className="text-lg font-semibold mb-2">La representación a nivel senior importa.</h3>
            <p className="text-white/50 text-sm mb-4">22.2% reportan liderazgo a nivel ejecutivo. Los programas con liderazgo C-level o VP muestran mayores tasas de completion, mayor uso de herramientas de data visualization y compromiso más fuerte con la IA.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {[
                { v: "34.2%", l: "Director" }, { v: "17.9%", l: "Manager" },
                { v: "13.7%", l: "Sr. Manager" }, { v: "11.1%", l: "C-Level" },
                { v: "8.4%", l: "Sr. Director" }, { v: "7.9%", l: "VP" },
                { v: "3.7%", l: "Head of" }, { v: "3.2%", l: "SVP" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="text-lg font-semibold mb-2">Principales socios de colaboración</h3>
            <div className="space-y-2 mb-10">
              {[
                { l: "Customer Support", v: "58.9%" }, { l: "Customer Success", v: "58.4%" },
                { l: "Producto", v: "55.3%" }, { l: "Sales", v: "54.7%" },
                { l: "Marketing", v: "48.4%" }, { l: "Customer Experience", v: "23.7%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <h3 className="text-lg font-semibold mb-2">Tasas de completion de la audiencia</h3>
            <p className="text-white/50 text-sm mb-4">Los programas alcanzan una proporción significativa de su audiencia, pero rara vez la base completa. Las audiencias internas reportan la mayor completion; las externas (prospects, partners) mucho menor participación.</p>
            <div className="space-y-2 mb-10">
              {[
                { range: "Menos del 20%", pct: "3.3%" }, { range: "21 – 40%", pct: "21.4%" },
                { range: "41 – 60%", pct: "32.4%" }, { range: "61 – 80%", pct: "27.5%" },
                { range: "81 – 100%", pct: "15.4%" },
              ].map((row) => (
                <div key={row.range} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.range}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h3 className="text-lg font-semibold mb-2">Cobro por la educación</h3>
            <p className="text-white/50 text-sm mb-4">De los que educan audiencias externas, menos de una cuarta parte no cobraba por ninguno de sus programas.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "53.6%", l: "Ambos on-demand + en vivo" }, { v: "26.5%", l: "Sin cobro" },
                { v: "13.9%", l: "Solo formación en vivo" }, { v: "6%", l: "Solo on-demand" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resultados de Negocio */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "60%", y: "40%" }} rustPosition={{ x: "30%", y: "70%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Resultados de Negocio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Las métricas de revenue y performance son <span className="text-gradient-blue-pink">prioridad</span>.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-4">La cost reduction (60%) sigue siendo el objetivo menos priorizado, indicando que la mayoría posiciona la educación como motor de crecimiento en lugar de herramienta de eficiencia operativa.</p>
            <p className="text-white/50 text-xs leading-relaxed mb-8"><strong className="text-white/70">Revenue</strong> = aumento de revenue, product activation, usuarios activos · <strong className="text-white/70">Retention</strong> = reducción de churn, mejora del sentiment, product adoption · <strong className="text-white/70">Performance</strong> = mejora del ramp time, goal attainment, skill proficiency · <strong className="text-white/70">Cost Reduction</strong> = reducción de costos de contenido, soporte, onboarding.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { v: "81.6%", l: "Revenue" }, { v: "75.3%", l: "Performance" },
                { v: "68.9%", l: "Retention" }, { v: "60%", l: "Cost Reduction" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Las prioridades cambian con la escala</h3>
              <p className="text-white/55 text-sm leading-relaxed">Los equipos más grandes (51–99 y 100+ empleados) son los más propensos a priorizar el revenue growth (~55%), mientras que también muestran el enfoque más fuerte en cost reduction — especialmente el grupo de 51–99 (69%). Los equipos más pequeños (5–10 empleados) también siguen de cerca el revenue y el costo.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estrategia de Audiencia */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Estrategia de Audiencia</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿A qué audiencias educan las empresas?</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { v: "87.4%", l: "Empleados" }, { v: "63.1%", l: "Clientes" },
                { v: "46.8%", l: "Partners" }, { v: "43.1%", l: "Prospects" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">La educación está creciendo a lo largo del customer lifecycle.</h3>
            <p className="text-white/50 text-sm mb-4">El enfoque en expansion ha subido 20 puntos porcentuales YoY, destacando el potencial para impactar el customer growth revenue.</p>
            <div className="space-y-2">
              {[
                { stage: "Implementation & Onboarding", pct: "88.8%" },
                { stage: "Product Adoption", pct: "88.8%" },
                { stage: "Retention / Renewal", pct: "78.9%" },
                { stage: "Expansion", pct: "76.3%" },
                { stage: "Sales", pct: "63.8%" },
                { stage: "Marketing", pct: "52%" },
                { stage: "Advocacy", pct: "40.8%" },
              ].map((row) => (
                <div key={row.stage} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.stage}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estrategia de Iniciativas */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Estrategia de Iniciativas</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Principales iniciativas educativas</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Skills & enablement siguen siendo el enfoque principal. El 94.2% de los encuestados reportan iniciativas de skills & enablement, el caso de uso más común por amplio margen.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { v: "94.2%", l: "Skills & Enablement" }, { v: "71.1%", l: "Onboarding" },
                { v: "66.8%", l: "Certificaciones" }, { v: "60.5%", l: "Compliance" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Las certificaciones y compliance escalan con el tamaño de la empresa</h3>
              <p className="text-white/55 text-sm leading-relaxed">Las empresas más grandes tienen significativamente más probabilidades de ofrecer iniciativas formales de certificación y compliance. El compliance alcanza sus niveles más altos en organizaciones con 20,000+ empleados. Los sectores altamente regulados como Finanzas y Seguros reportan el mayor uso de compliance.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estrategia de Recursos */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Estrategia de Recursos</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Métodos de formación y estructura del equipo</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">El aprendizaje estructurado y basado en video domina.</h3>
            <p className="text-white/50 text-sm mb-4">Los videos de formación siguen siendo el tipo de contenido más utilizado (68.4%), seguidos por formación virtual e in-person instructor-led training.</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Videos de formación (ej., how-tos)", v: "68.4%" },
                { l: "Virtual instructor-led training", v: "59.5%" },
                { l: "Instructor-led training (in-person)", v: "57.4%" },
                { l: "Knowledge base / artículos de ayuda", v: "55.8%" },
                { l: "Programa de certificación", v: "55.8%" },
                { l: "Videos on-demand de formato largo", v: "48.4%" },
                { l: "Comunidad de clientes", v: "42.1%" },
                { l: "Documentación de formación publicada", v: "41.6%" },
                { l: "Courseware prearmado / módulos de formación", v: "41.6%" },
                { l: "eLearning personalizado", v: "41.6%" },
                { l: "Guías in-app", v: "34.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Tamaño del equipo de educación</h3>
            <p className="text-white/50 text-sm mb-4">La mayor proporción (22.6%) reporta equipos de 11–20 empleados, seguidos por 100+ (20%) y 21–50 (19.5%). Fuertemente correlacionado con el tamaño de la empresa.</p>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { v: "8.4%", l: "1–4" }, { v: "14.2%", l: "5–10" },
                { v: "22.6%", l: "11–20" }, { v: "19.5%", l: "21–50" },
                { v: "15.3%", l: "51–99" }, { v: "20%", l: "100+" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l} empleados</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Los proveedores externos juegan un papel clave.</h3>
            <p className="text-white/50 text-sm mb-4">83.1% usan proveedores externos para apoyar sus programas de educación.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl border border-accent-purple/30 bg-accent-purple/10 p-5 text-center">
                <p className="text-3xl font-bold text-gradient-peach-purple">83.1%</p>
                <p className="text-white/60 text-xs mt-1">Usan proveedor externo</p>
              </div>
              <div className="glass-card rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-white/40">16.9%</p>
                <p className="text-white/40 text-xs mt-1">No usan</p>
              </div>
            </div>
            <p className="text-white/50 text-sm mb-3">Principales casos de uso de proveedores:</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Contenido de aprendizaje pre-built / ready-made", v: "50.3%" },
                { l: "Desarrollo de contenido personalizado", v: "49.7%" },
                { l: "Diseño instruccional / diseño curricular", v: "39.5%" },
                { l: "Tecnología de aprendizaje / soporte de plataforma", v: "37.6%" },
                { l: "Estrategia educativa / diseño de programa", v: "28%" },
                { l: "Marketing y promoción educativa", v: "25.5%" },
                { l: "Learner engagement y gestión de comunidad", v: "24.8%" },
                { l: "Desarrollo de certificación / exámenes", v: "24.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h3 className="text-lg font-semibold mb-2">La IA ahora se adopta ampliamente.</h3>
            <p className="text-white/50 text-sm mb-4">El 92.6% de los encuestados reportan usar IA — la tecnología ha pasado de la experimentación a la implementación práctica.</p>
            <div className="rounded-2xl border border-accent-purple/30 bg-gradient-to-r from-accent-purple/15 to-accent-blue/10 p-8 mb-6 text-center">
              <p className="text-5xl md:text-6xl font-bold text-gradient-peach-purple mb-2">92.6%</p>
              <p className="text-white/60 text-sm">de los programas de educación ahora usan IA</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold mb-2">Prioridades de adopción planificada de IA</h3>
            <p className="text-white/50 text-sm mb-4">Porcentaje de encuestados &quot;De Acuerdo&quot; o &quot;Completamente de Acuerdo&quot; que planean usar IA para:</p>
            <div className="space-y-2">
              {[
                { l: "Written Content Creation", v: "69.9%" },
                { l: "Learner Support Automation", v: "65.3%" },
                { l: "Content Planning", v: "65.3%" },
                { l: "Data Analysis / Visualization", v: "59.1%" },
                { l: "Adaptive Learning / Virtual Tutoring", v: "57%" },
                { l: "Predictive Insights (Impact/Outcomes)", v: "57%" },
                { l: "Assessment Creation", v: "55.4%" },
                { l: "Scalable Multimedia / Accessibility", v: "54.4%" },
                { l: "Transcription / Translation", v: "48.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estrategia de Marketing */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "70%", y: "50%" }} rustPosition={{ x: "20%", y: "40%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Estrategia de Marketing</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">El soporte de marketing varía significativamente según la audiencia.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Los equipos de educación enfocados solo en audiencias externas reportan el soporte más fuerte (72% recursos de marketing dedicados), mientras que los equipos solo internos son los más restringidos (40% sin soporte de marketing).</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Acceso a marketing</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { v: "36.4%", l: "Recursos dedicados del departamento de marketing" },
                { v: "33.5%", l: "Marketer dedicado en el equipo de educación" },
                { v: "21.4%", l: "Hacen su propio marketing (sin marketer dedicado)" },
                { v: "8.7%", l: "Sin recursos de marketing" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Tácticas de promoción</h3>
            <p className="text-white/50 text-sm mb-4">El outreach personalizado y el email lideran las tácticas de promoción educativa.</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Outreach personalizado desde otros departamentos", v: "63.7%" },
                { l: "Email marketing", v: "58.4%" },
                { l: "Social media", v: "55.8%" },
                { l: "Banners y pop-ups en el sitio web", v: "44.7%" },
                { l: "Inclusión en lanzamiento de producto o sales collateral", v: "38.9%" },
                { l: "Publicidad pagada (PPC, sponsored content)", v: "37.9%" },
                { l: "Mensajes in-app", v: "36.8%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Re-engagement de learners</h3>
            <p className="text-white/50 text-sm mb-4">El email sigue siendo el principal impulsor del re-engagement. Con el auge de la IA, los personalized learning paths son cada vez más usados.</p>
            <div className="space-y-2">
              {[
                { l: "Emails de recordatorio automatizados para cursos incompletos", v: "54.7%" },
                { l: "Campañas de email promoviendo contenido nuevo", v: "54.2%" },
                { l: "Webinars regulares o sesiones en vivo", v: "53.7%" },
                { l: "Personalized learning paths", v: "50%" },
                { l: "Community engagement (foros, grupos de usuarios)", v: "46.8%" },
                { l: "Incentivos / Gamification (badges, certificados)", v: "45.3%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estrategia de Medición */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Estrategia de Medición</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La madurez en medición está <span className="text-gradient-blue-pink">mejorando</span>.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">27% ahora mide el impacto inmediatamente (vs. 25% en 2025). 49% comienza dentro de tres meses (vs. 35%). Los que no miden consistentemente cayeron del 28% a solo 5%.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Tiempo para comenzar a medir impacto</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
              {[
                { v: "27%", l: "Inmediatamente" }, { v: "49%", l: "Dentro de 3 meses" },
                { v: "18%", l: "6–12 meses" }, { v: "16%", l: "1 año+" },
                { v: "5%", l: "No consistente" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Ecosistema de analytics alrededor del LMS</h3>
            <p className="text-white/50 text-sm mb-4">El LMS sigue siendo fundamental (41.1%), pero los datos se conectan cada vez más con CRM (55.3%) y plataformas de soporte (51.6%).</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Customer Relationship Management (CRM)", v: "55.3%" },
                { l: "Software de soporte", v: "51.6%" },
                { l: "Plataformas de encuestas y feedback", v: "45.8%" },
                { l: "Data visualization", v: "42.6%" },
                { l: "Learning Management System", v: "41.1%" },
                { l: "Herramienta de customer success", v: "36.8%" },
                { l: "Plataformas de certificación y credenciales", v: "36.3%" },
                { l: "Plataformas de video hosting y analytics", v: "34.7%" },
                { l: "Software de marketing automation", v: "32.6%" },
                { l: "Herramientas de eLearning analytics", v: "31.6%" },
                { l: "Data warehouse", v: "27.9%" },
                { l: "Product analytics", v: "26.3%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Principales desafíos de medición</h3>
            <p className="text-white/50 text-sm mb-4">La integración entre sistemas sigue siendo el principal desafío (31%), pero el 25.8% no reporta obstáculos importantes — un número creciente de equipos está construyendo los procesos necesarios.</p>
            <div className="space-y-2">
              {[
                { l: "Falta de integración entre sistemas", v: "31%" },
                { l: "Falta de métricas claras o KPIs", v: "26.8%" },
                { l: "Ninguno de estos son obstáculos", v: "25.8%" },
                { l: "Visibilidad limitada en learner engagement", v: "23.7%" },
                { l: "Dificultad para alinear métricas con objetivos de negocio", v: "23.7%" },
                { l: "Restricciones de tiempo impiden seguimiento consistente", v: "23.2%" },
                { l: "Formación limitada sobre herramientas de analytics", v: "22.1%" },
                { l: "Falta de executive buy-in", v: "20.5%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* El Rol de la Educación en el Go-To-Market */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "40%", y: "50%" }} rustPosition={{ x: "80%", y: "30%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">El Rol de la Educación en el Go-To-Market</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La educación es integral para la estrategia go-to-market.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">Alineación con el producto</h3>
            <p className="text-white/50 text-sm mb-4">El 68% dice que sus programas están estrechamente vinculados a los product outcomes. Solo el 9.6% reporta alineación mínima o nula — una caída desde el 32% en 2025.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { v: "56.4%", l: "Muy estrechamente" }, { v: "34%", l: "Algo estrechamente" },
                { v: "8.5%", l: "Mínimamente" }, { v: "1.1%", l: "Para nada" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Contribuciones al GTM</h3>
            <p className="text-white/50 text-sm mb-4">Todos los roles relacionados con GTM aumentaron año tras año. Solo el 5.8% reporta que la educación no está integrada en el GTM.</p>
            <div className="space-y-2">
              {[
                { l: "Apoya el customer onboarding y la adoption", v: "59.5%" },
                { l: "Ayuda a construir brand loyalty y retention", v: "58.9%" },
                { l: "Genera oportunidades de upsell y cross-sell", v: "54.7%" },
                { l: "Mejora el partner enablement", v: "46.3%" },
                { l: "Impulsa la demand generation (nuevos leads)", v: "44.7%" },
                { l: "No integrada en el GTM", v: "5.8%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Recomendaciones Clave */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Recomendaciones Clave</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo diseñar programas de educación para un impacto real de <span className="text-gradient-peach-purple">negocio</span></h2>
          </AnimatedSection>
          {[
            { title: "Priorice las audiencias y etapas del lifecycle con el business value más claro.", body: "La mayoría de los programas ya apoyan bien la implementación, la adoption y la retention. Busque oportunidades para extender la educación hacia la expansion y otros momentos de alto valor, en lugar de distribuir recursos en cada etapa." },
            { title: "Fortalezca los sistemas alrededor de su LMS.", body: "El LMS sigue siendo fundamental, pero el impacto de negocio se demuestra a través de datos conectados del CRM, plataformas de soporte y analytics. Mejore las integraciones y los workflows de reporting que conectan la actividad de aprendizaje con los resultados de negocio." },
            { title: "Diseñe programas con medición incorporada desde el inicio.", body: "Los equipos que miden el impacto inmediatamente comienzan con un plan claro de cómo luce el éxito. Defina sus métricas antes del lanzamiento, asegure que los sistemas estén en su lugar, y establezca workflows de reporting para rastrear resultados desde el día uno." },
            { title: "Use la IA donde ahorra tiempo más rápido.", body: "Los casos de uso más comunes son creación de contenido escrito, soporte al learner y planificación. Comience con trabajo de alto volumen y repetible antes de expandirse hacia casos más avanzados." },
            { title: "Use la experiencia externa de forma selectiva.", body: "Las organizaciones más frecuentemente usan partners para desarrollo de contenido, diseño instruccional y soporte de plataforma. Si el ancho de banda interno es limitado, priorice la ayuda externa en las áreas más difíciles de escalar solo." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card rounded-xl p-6 mb-4">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA de Cierre */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La educación es <span className="text-gradient-peach-purple">infraestructura</span>, no campaña.</h2>
            <p className="text-white/55 leading-relaxed max-w-2xl mx-auto mb-8">merahki.ai provee la infraestructura end-to-end para diseñar, producir, escalar y certificar programas de educación que impulsan resultados de negocio medibles — alineados al framework ELG.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Descarga el Reporte ELG <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <ContactSection
        heading="¿Listos para construir su programa ELG?"
        subheading="Agende una reunión con el equipo de merahki.ai y diseñemos su motor de crecimiento basado en educación."
      />
    </div>
  );
}
