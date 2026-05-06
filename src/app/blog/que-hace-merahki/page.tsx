import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "¿Qué hace merahki.ai? — Ecosistema de Education-Led Growth",
  description: "Conoce las cinco capas integradas del ecosistema merahki.ai: diseño, virtualización, soporte operativo, learning analytics y credenciales digitales verificables.",
  openGraph: {
    title: "¿Qué hace merahki.ai? — Ecosistema de Education-Led Growth",
    description: "La infraestructura end-to-end que convierte la educación en el principal motor de crecimiento institucional.",
    url: "https://merahki.ai/blog/que-hace-merahki",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/blog/que-hace-merahki" },
};

export default function QueHaceMerahki() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Ecosistema</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">5 Capas</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Education-Led Growth</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              ¿Qué hace <span className="text-gradient-peach-purple">merahki.ai</span>?
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              La infraestructura end-to-end que convierte la educación en el principal motor de crecimiento institucional. Cinco capas integradas para diseñar, producir, escalar y certificar programas con estándares globales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Qué potencia */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Conoce cómo el ecosistema potencia a unidades educativas</h2>
          </AnimatedSection>
          {[
            "Aumento de facturación en unidades de educación continua de instituciones de educación superior.",
            "Diseño de estrategias de Education-Led Growth que ayudan a empresas a impactar business outcomes concretos (revenue, adquisición, retención y satisfacción) a partir de estrategias basadas en educación a leads, partners, clientes y talento humano.",
            "Integración con pilotos de gobierno en educación y credenciales bajo estándares globales de portabilidad, transparencia e interoperabilidad.",
            "Diseño de programas alineados al desarrollo de competencias específicas para un rol de trabajo que reducen costos de RRHH en contratación, evaluación de competencias y asesoría.",
            "Diseño de programas alineados a marcos internacionales de cualificaciones y catálogos de ocupación CUOC.",
          ].map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex gap-4 items-start glass-card rounded-xl p-5">
                <span className="text-accent-purple font-bold text-sm mt-0.5 flex-shrink-0">0{i + 1}</span>
                <p className="text-white/70 text-sm leading-relaxed">{t}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ELG en cifras */}
      <section className="relative py-20 px-6">
        <GlowBackground indigoPosition={{ x: "60%", y: "50%" }} rustPosition={{ x: "20%", y: "50%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Contexto · ELG</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La educación como motor de <span className="text-gradient-blue-pink">crecimiento</span>, no como centro de costo.</h2>
            <p className="text-white/50 max-w-2xl mb-10">ELG utiliza la educación para impulsar simultáneamente adquisición, retención, expansión y eficiencia operativa. Los programas de esta naturaleza generan retornos que superan ampliamente la inversión.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-accent-purple/30 bg-gradient-to-r from-accent-purple/15 to-accent-blue/10 p-8 mb-6 text-center">
              <p className="text-5xl md:text-6xl font-bold text-gradient-peach-purple mb-2">372%</p>
              <p className="text-white/60 text-sm">ROI a tres años de los programas Education-Led Growth · Payback de 7 meses</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { v: "73K+", l: "Horas de formación automatizadas" },
              { v: "+1,200", l: "Instituciones conectadas" },
              { v: "1.5M+", l: "Credenciales emitidas globalmente" },
              { v: "+9", l: "Países en LATAM, Caribe y USA" },
              { v: "+100", l: "Estrategias diseñadas y lanzadas" },
              { v: "+6", l: "Industrias" },
            ].map((s, i) => (
              <AnimatedSection key={s.l} delay={i * 0.06}>
                <div className="glass-card rounded-xl p-5 text-center h-full flex flex-col justify-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capa 01 — Diseño */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Capa 01 / 05</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diseño y estructuración de programas</h2>
            <p className="text-white/40 text-sm italic mb-6">Program design &amp; structuring</p>
            <p className="text-white/60 leading-relaxed mb-8">Expertos metodológicos en diseño instruccional, gamificación (framework Octalysis) y economía conductual diseñan programas alineados al Marco Nacional de Cualificaciones y al Catálogo Único de Ocupaciones (CUOC) de Colombia.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Lecciones por curso elaboradas por expertos de industria",
                "Actividades interactivas H5P por curso",
                "Estructura curricular completa y mapeo de competencias",
                "Diseño alineado a la identidad de marca de la institución",
                "Estrategia ELG integrada al Go-To-Market institucional",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capa 02 — Virtualización */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Capa 02 / 05</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Virtualización y producción de contenidos</h2>
            <p className="text-white/40 text-sm italic mb-6">Content virtualization &amp; production</p>
            <p className="text-white/60 leading-relaxed mb-8">Producción profesional de video premium por curso, con video interactivo, quizzes embebidos y analítica detallada de engagement. El Creator Agent genera estructuras y evaluaciones a partir de notas o webinars en minutos.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Producción de video premium por curso",
                "Infografías, podcasts y escenarios de realidad aumentada",
                "Analítica de engagement · rewatches y abandono",
                "Video interactivo · subtítulos y transcripciones IA",
                "Creator Agent · estructuras y evaluaciones automatizadas",
                "Entrega llave en mano a producción",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capa 03 — Soporte operativo */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Capa 03 / 05</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soporte operativo a escala</h2>
            <p className="text-white/40 text-sm italic mb-6">Operational support at scale</p>
            <p className="text-white/60 leading-relaxed mb-8">Infraestructura para cohortes de 500 hasta 10,000 participantes sin degradar la experiencia. LMS con filtros analíticos avanzados, apps nativas iOS y Android personalizadas (lanzamiento sin código) y agentes de IA que automatizan la operación.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "LMS con filtros avanzados de analítica",
                "Manager Agent · gestión por lenguaje natural",
                "Aulas virtuales · Zoom, Webex, Teams y Calendly",
                "Survey Builder con lógica condicional y asistente IA",
                "Apps iOS y Android personalizadas · sin código",
                "Learner Agent · tutor IA persistente y contextual",
                "+50 integraciones nativas · Zapier, Make y API",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capa 04 — Learning Analytics */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "40%", y: "50%" }} rustPosition={{ x: "80%", y: "30%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Capa 04 / 05</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning analytics y analítica avanzada</h2>
            <p className="text-white/40 text-sm italic mb-6">Learning analytics &amp; advanced analytics</p>
            <p className="text-white/60 leading-relaxed mb-8">Cada cohorte genera datos accionables: progreso, engagement, adquisición de competencias y puntos de abandono. La infraestructura envía información directamente a las herramientas de visualización preferidas vía integración con máquina virtual.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
                "Reportes automatizados a stakeholders por correo",
                "Radar charts, dashboards y templates listos",
                "KPIs transicionales · adopción y health score",
                "Métricas terminales · ROI, lift de LTV y deflexión",
                "Insights de IA con preguntas directas al negocio",
                "KPIs líderes · inscripciones, completitud, training",
                "KPIs de negocio · NRR, GRR, CSAT y pipeline",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-4">Resultados promedio medidos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { v: "+30.3%", l: "Adopción de producto" },
                { v: "+28.7%", l: "Engagement" },
                { v: "+34.6%", l: "Customer Lifetime Value" },
                { v: "−8.1%", l: "Ciclo de ventas" },
                { v: "−7.2%", l: "Tickets de soporte" },
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

      {/* Capa 05 — Credenciales */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Capa 05 / 05</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Credenciales digitales verificables</h2>
            <p className="text-white/40 text-sm italic mb-6">Verifiable digital credentials · POK</p>
            <p className="text-white/60 leading-relaxed mb-8">Merahki.ai integra la red global de credenciales POK: +1,200 instituciones conectadas a nuestra infraestructura de credenciales, gobiernos y empresas en +9 países de Latinoamérica, el Caribe y Estados Unidos. Única plataforma en LATAM con 100% de los estándares globales de ciberseguridad e infraestructura.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Credenciales NFT · propiedad del participante",
                "ISO 27001, SOC 2 y GDPR · certificados",
                "Open Badges 3.0 y W3C Verifiable Credentials",
                "White-label completo · wallet institucional",
                "Inmutables en blockchain pública · verificables sin intermediarios",
                "1EdTech TrustEd Apps y Data Privacy Seal",
                "ELM/Europass y IEE USA · reconocimiento internacional",
                "Leads on Pages · funnel desde cada credencial",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fractional LMS */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "30%", y: "40%" }} rustPosition={{ x: "70%", y: "60%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-3 block">Producto</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Fractional LMS</h2>
            <p className="text-white/40 text-sm italic mb-6">Una academia dedicada para cada proyecto de educación continua</p>
            <p className="text-white/60 leading-relaxed mb-4">No todos los programas necesitan vivir en la misma plataforma. Fractional LMS permite a instituciones y empresas desplegar un LMS dedicado, con marca propia y dominio independiente, para cada proyecto específico de educación continua: un diplomado, una certificación sectorial, un programa de upskilling para un cliente corporativo o un piloto de gobierno.</p>
            <p className="text-white/60 leading-relaxed mb-8">Cada instancia opera de forma autónoma, con su propio diseño, su propia audiencia y sus propias reglas — sin comprometer la infraestructura principal.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">¿Por qué Fractional?</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Porque la educación continua no es monolítica. Cada programa tiene una audiencia distinta, un ciclo de vida propio y requisitos de marca específicos. En lugar de forzar todo dentro de un único LMS institucional, Fractional LMS permite lanzar academias independientes con la velocidad de un producto digital y la robustez de una infraestructura enterprise.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-4">Lo que incluye cada instancia</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Cursos flexibles y adaptativos",
                "Video interactivo con quizzes embebidos",
                "Sesiones en vivo integradas (Zoom, Webex, Teams)",
                "Assessment builder con generación IA",
                "Survey builder con lógica condicional",
                "Rutas y colecciones de aprendizaje",
                "Sitio web y landing pages propias (drag-and-drop)",
                "App móvil nativa con marca propia (sin código)",
                "White-label completo",
                "Analítica y reportes avanzados",
                "Workflows automatizados",
                "Marketing y conversión integrados",
                "Compatibilidad SCORM y xAPI",
                "Roles de usuario personalizados",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fractional LMS — Casos de uso */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-3 block">Producto · Casos de uso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Un LMS dedicado para cada necesidad.</h2>
          </AnimatedSection>
          {[
            { title: "Educación continua universitaria", desc: "Una universidad lanza un diplomado ejecutivo en finanzas con su propia academia, dominio, app móvil y checkout de matrícula, aislada de su portal institucional." },
            { title: "Certificaciones sectoriales", desc: "Un gremio o asociación profesional despliega un programa de certificación con rutas de aprendizaje obligatorias, evaluaciones calificadas y credenciales digitales al completar." },
            { title: "Programas corporativos a medida", desc: "Una empresa contrata a la universidad para capacitar a su fuerza de ventas: la academia se entrega con la marca del cliente corporativo, acceso restringido y reportes dedicados." },
            { title: "Pilotos de gobierno", desc: "Un ministerio necesita una plataforma independiente para un programa de formación docente con analítica de impacto y credenciales verificables." },
            { title: "Redes de franquicias y partners", desc: "Una marca con operación distribuida certifica a sus socios comerciales en un LMS dedicado con módulos obligatorios, seguimiento por región y recertificación periódica." },
          ].map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-6 mb-4">
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Pricing credenciales NFT */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-3 block">Comercial</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volumen que escala con la institución.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Las credenciales Web2 son gratuitas y de emisión ilimitada. Los precios escalonados aplican a credenciales NFT con propiedad del participante e inmutabilidad en blockchain pública.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/50 font-medium">Volumen</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium">Precio Total</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium">Por Credencial</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1,000", "USD $2,500", "$2.50 / unidad"],
                    ["5,000", "USD $10,000", "$2.00 / unidad"],
                    ["10,000", "USD $16,500", "$1.65 / unidad"],
                    ["50,000", "USD $62,500", "$1.25 / unidad"],
                    ["100,000", "USD $100,000", "$1.00 / unidad"],
                  ].map(([vol, total, unit]) => (
                    <tr key={vol} className="border-b border-white/5 hover:bg-white/[0.02]">
                      <td className="py-3 px-4 text-white/80 font-medium">{vol}</td>
                      <td className="py-3 px-4 text-white/70">{total}</td>
                      <td className="py-3 px-4 text-white/50">{unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-4">Incluido sin costo adicional</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Ejecutivo comercial dedicado y onboarding",
                "Miembros de equipo y organizaciones ilimitados",
                "Rutas de aprendizaje ilimitadas",
                "Consultas, diseños y certificados ilimitados",
                "Validación de DNS y LinkedIn",
                "Documentación API completa",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 glass-card rounded-lg p-4">
                  <ArrowRight className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marketing y sitios web */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "70%", y: "40%" }} rustPosition={{ x: "30%", y: "60%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-3 block">Servicios adicionales</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un growth squad dedicado para escalar matrículas.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Para instituciones que necesitan acelerar conversiones, Merahki.ai opera campañas, integra el stack y construye sitios de academia orientados a conversión — desde el diseño estratégico hasta el despliegue técnico.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { v: "+40%", l: "Promedio de matrículas tras activar el growth squad" },
                { v: "3×", l: "Más rápido el time-to-first-enrollment" },
                { v: "−35%", l: "Reducción del costo por adquisición" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-4">Estructura comercial</h3>
            <div className="space-y-3">
              <div className="glass-card rounded-xl p-5">
                <p className="text-white font-semibold text-sm">Setup · USD $2,200 + IVA</p>
                <p className="text-white/55 text-xs mt-1">Estrategia, integración de stack, activos de conversión y primera campaña.</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <p className="text-white font-semibold text-sm">Retainer · USD $1,100 + IVA / mes</p>
                <p className="text-white/55 text-xs mt-1">Gestión continua, optimización de funnels, A/B testing y reportes ejecutivos semanales.</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <p className="text-white font-semibold text-sm">Sitios web de academia</p>
                <p className="text-white/55 text-xs mt-1">Ciclo de lanzamiento ágil, aumento de registros, IA + Core Web Vitals + soporte post-lanzamiento.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-3 block">Resultados</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Educación que mueve el negocio.</h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto mb-10">Programas diseñados para impactar revenue, adquisición, retención y satisfacción a partir de estrategias basadas en educación, con integración a pilotos de gobierno y estándares globales de credenciales.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-white/40 text-sm mb-8">Marcas en múltiples países de Latinoamérica, el Caribe y Estados Unidos.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La educación es <span className="text-gradient-peach-purple">infraestructura</span>, no campaña.</h2>
            <p className="text-white/55 leading-relaxed max-w-2xl mx-auto mb-8">Cinco capas integradas, una entrega llave en mano y la única plataforma en LATAM que cumple con el 100% de los estándares globales de ciberseguridad y credenciales. Diseñemos el motor educativo de tu institución.</p>
            <Link
              href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Agendar Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <ContactSection
        heading="¿Listos para construir el suyo?"
        subheading="Agende una reunión con el equipo de merahki.ai y diseñemos el motor educativo de su institución."
      />
    </div>
  );
}
