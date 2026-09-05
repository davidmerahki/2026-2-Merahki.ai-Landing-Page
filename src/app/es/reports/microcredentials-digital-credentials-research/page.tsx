import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "Microcredenciales y Credenciales Digitales: Investigación, Casos de Uso y Marco Estratégico",
  description:
    "Reporte completo sobre el auge de las microcredenciales y las credenciales digitales — datos globales, casos de uso institucionales y un marco estratégico para universidades y empresas.",
  openGraph: {
    title: "Microcredenciales y Credenciales Digitales: Investigación, Casos de Uso y Marco Estratégico",
    description:
      "Datos globales, casos de uso institucionales y un marco estratégico para adoptar certificación verificable y basada en competencias a escala.",
    url: "https://merahki.ai/es/reports/microcredentials-digital-credentials-research",
    type: "article",
  },
  alternates: {
    canonical: "https://merahki.ai/es/reports/microcredentials-digital-credentials-research",
  },
};

/* ── helpers ── */
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
);

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto -mx-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left px-4 py-3 text-xs font-bold text-accent-purple uppercase tracking-wider border-b border-white/10 bg-white/[0.03]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-semibold text-white/90" : "text-white/60"}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function MicrocredentialsReportES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Investigación</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Microcredenciales</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Credenciales Digitales</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Microcredenciales y{" "}<span className="text-gradient-peach-purple">Credenciales Digitales</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/70 mb-4">
              Investigación, Casos de Uso y Marco Estratégico
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-4 max-w-3xl">
              Cómo universidades y empresas están adoptando certificación verificable y basada en competencias para cerrar la brecha de habilidades, aumentar la empleabilidad y crear nuevas fuentes de ingresos.
            </p>
            <p className="text-sm text-white/40">merahki.ai Research · Mayo 2026</p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Descarga el Reporte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4">Resumen Ejecutivo</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                La fuerza laboral global está experimentando un cambio fundamental. Los títulos tradicionales por sí solos ya no señalan preparación laboral — y los empleadores exigen cada vez más pruebas de habilidades específicas y verificables. Las microcredenciales y las credenciales digitales han surgido como el puente entre la educación y la empleabilidad.
              </p>
              <p className="text-white/55 leading-relaxed text-sm">
                Este reporte examina el estado actual de la adopción de microcredenciales y credenciales digitales a nivel mundial, presenta casos de uso institucionales en educación superior y empresas, y ofrece un marco estratégico para organizaciones que buscan lanzar o escalar programas de credenciales con impacto medible.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Por qué importan las microcredenciales */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "70%", y: "30%" }} rustPosition={{ x: "30%", y: "70%" }} />
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-center">Por Qué las Microcredenciales Importan Ahora</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "94%", label: "de los empleadores valoran la contratación basada en habilidades por encima de los títulos (LinkedIn, 2025)." },
                { stat: "72%", label: "de las universidades a nivel mundial planean ofrecer microcredenciales para 2027 (UNESCO, 2025)." },
                { stat: "$3.2B", label: "mercado global proyectado de credenciales digitales para 2028 (MarketsandMarkets)." },
              ].map((item) => (
                <div key={item.stat} className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-gradient-peach-purple mb-2">{item.stat}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">La Crisis de la Brecha de Habilidades</h3>
              <p className="text-white/60 leading-relaxed mb-4 text-sm">
                El Foro Económico Mundial estima que el <strong className="text-white/80">50% de todos los empleados necesitarán recapacitación para 2027</strong>. Sin embargo, los programas de grado tradicionales toman de 2 a 4 años — demasiado lento para el ritmo del cambio tecnológico. Las microcredenciales ofrecen un camino más rápido y focalizado hacia la competencia verificada.
              </p>
              <p className="text-white/55 leading-relaxed text-sm">
                Para las empresas, las microcredenciales permiten una recapacitación rápida de la fuerza laboral mientras crean evidencia verificable del aprendizaje. Para las universidades, desbloquean nuevas fuentes de ingresos a través de programas más cortos y apilables que sirven a profesionales en activo.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Definiciones */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Definiciones Clave</h2>
          </AnimatedSection>
          <AnimatedSection>
            <GlassCard>
              <Table
                headers={["Concepto", "Definición", "Estándares Clave"]}
                rows={[
                  ["Microcredencial", "Una certificación corta y enfocada de resultados de aprendizaje en un área específica, diseñada para ser apilable hacia cualificaciones mayores.", "Marco de Microcredenciales UNESCO, Recomendación del Consejo de la UE (2022)"],
                  ["Credencial Digital", "Un registro de un logro, habilidad o cualificación habilitado por tecnología y verificable criptográficamente.", "Open Badges 3.0, W3C Verifiable Credentials, Estándar CLR"],
                  ["Credencial Blockchain", "Una credencial digital anclada en un libro mayor distribuido para inmutabilidad y verificación descentralizada.", "ELM/Europass, Blockcerts, emisión compatible con ISO 27001"],
                  ["Credencial Apilable", "Una credencial diseñada para acumularse hacia una cualificación de nivel superior (ej: certificado → diploma → grado).", "Alineación con marcos nacionales de cualificaciones"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "50%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center">Casos de Uso Institucionales</h2>
            <p className="text-white/50 text-center max-w-3xl mx-auto text-sm mb-8">
              Las microcredenciales y las credenciales digitales se están implementando en diversos sectores. Estos son los casos de uso de mayor impacto que hemos identificado.
            </p>
          </AnimatedSection>

          {[
            { sector: "Educación Superior", title: "Credenciales apilables para educación continua", desc: "Las universidades ofrecen programas profesionales cortos (40–120 horas) que se apilan en diplomas o certificados. Cada módulo otorga una credencial digital verificable en blockchain. Este modelo impulsa la matrícula de profesionales en activo y crea ingresos recurrentes.", kpi: "3x crecimiento en matrícula de educación continua en 18 meses." },
            { sector: "Formación Corporativa", title: "Verificación de competencias para compliance y upskilling", desc: "Las empresas utilizan microcredenciales para verificar la competencia de empleados en industrias reguladas (salud, finanzas, manufactura). Las credenciales digitales reemplazan los certificados en papel y habilitan dashboards de compliance en tiempo real.", kpi: "40% reducción en tiempo de preparación para auditorías de compliance." },
            { sector: "Ecosistemas de Partners", title: "Certificación de canal a escala", desc: "Las empresas de tecnología certifican a sus partners de canal a través de programas de credenciales escalonados (Bronce → Plata → Oro). Los partners certificados generan en promedio 2.3x más ingresos que los no certificados.", kpi: "2.3x ingresos por partner certificado vs. no certificado." },
            { sector: "Gobierno y Desarrollo de Fuerza Laboral", title: "Marcos nacionales de cualificación", desc: "Agencias gubernamentales adoptan credenciales digitales para modernizar los sistemas nacionales de cualificación, facilitando que los ciudadanos demuestren sus competencias de forma portable entre fronteras.", kpi: "Programas piloto en 23 países (EU Digital Credentials for Learning)." },
            { sector: "Salud", title: "Educación médica continua (EMC)", desc: "Hospitales y asociaciones médicas emiten credenciales verificables para programas de EMC, permitiendo la verificación instantánea para renovación de licencias y la portabilidad de credenciales entre instituciones.", kpi: "60% más rápido en procesamiento de renovación de licencias." },
            { sector: "EdTech y Plataformas SaaS", title: "Certificación de producto como palanca de crecimiento", desc: "Las empresas SaaS utilizan programas de certificación de producto para impulsar la adopción, reducir el churn y crear una comunidad de power users. Los usuarios certificados tienen tasas de retención 45% más altas.", kpi: "45% mayor retención entre usuarios certificados." },
          ].map((item) => (
            <AnimatedSection key={item.sector}>
              <GlassCard className="mb-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">{item.sector}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">KPI de Impacto</p>
                  <p className="text-sm text-accent-purple font-semibold">{item.kpi}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Marco Estratégico */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center">Marco Estratégico de Adopción</h2>
            <p className="text-white/50 text-center max-w-3xl mx-auto text-sm mb-8">
              Un enfoque de 5 fases para organizaciones que lanzan o escalan programas de microcredenciales y credenciales digitales.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <Table
                headers={["Fase", "Acciones", "Entregable Clave"]}
                rows={[
                  ["1. Evaluación", "Mapear programas existentes a marcos de competencias. Identificar brechas de habilidades de alta demanda. Benchmarking contra estándares de la industria.", "Análisis de Brecha de Habilidades + Mapa de Oportunidades de Credenciales"],
                  ["2. Diseño", "Definir taxonomía de credenciales (micro → macro). Alinear a estándares Open Badges 3.0 / W3C VC. Diseñar rúbricas de evaluación para cada credencial.", "Documento de Arquitectura de Credenciales"],
                  ["3. Construcción", "Desarrollar experiencias de aprendizaje usando diseño inverso. Integrar evaluaciones auténticas. Configurar plataforma de emisión con verificación blockchain.", "Programa de credenciales listo para piloto"],
                  ["4. Lanzamiento y Validación", "Ejecutar cohorte piloto (50–200 aprendices). Recopilar datos K1–K2 de Kirkpatrick. Validar verificabilidad y portabilidad de credenciales.", "Reporte de Resultados del Piloto + Plan de Iteración"],
                  ["5. Escalar y Optimizar", "Expandir a programas adicionales. Integrar con sistemas de RRHH, LinkedIn y registros nacionales. Automatizar flujos de emisión y revocación.", "Ecosistema de credenciales escalado + Dashboard de ROI"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "50%", y: "50%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Estándares Tecnológicos e Interoperabilidad</h2>
          </AnimatedSection>
          <AnimatedSection>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Open Badges 3.0", desc: "El estándar global para credenciales digitales portables, mantenido por 1EdTech. Soporta metadatos enriquecidos, enlaces de evidencia y alineación a marcos de competencias." },
                  { title: "W3C Verifiable Credentials", desc: "Un estándar W3C que permite credenciales criptográficamente seguras, respetuosas de la privacidad y verificables por máquinas en cualquier plataforma." },
                  { title: "Comprehensive Learner Record (CLR)", desc: "Un estándar para agregar múltiples credenciales en un perfil holístico del aprendiz, habilitando apilabilidad y pasaportes de competencias." },
                  { title: "Anclaje Blockchain", desc: "Los registros inmutables on-chain aseguran que las credenciales no puedan ser falsificadas, revocadas sin registro de auditoría, o perdidas — incluso si la institución emisora deja de existir." },
                ].map((item) => (
                  <div key={item.title} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                    <h4 className="text-sm font-bold text-accent-purple mb-2">{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Conclusión */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="border-gradient-peach-purple rounded-2xl p-8 text-center space-y-5">
              <h3 className="text-2xl font-bold">El Futuro Es Verificable</h3>
              <p className="text-sm text-white/55 max-w-3xl mx-auto leading-relaxed">
                Las microcredenciales y las credenciales digitales no son una tendencia — son la infraestructura del futuro del aprendizaje. Las organizaciones que las adopten ahora construirán ventaja competitiva a través de la agilidad de su fuerza laboral, la reputación institucional y nuevos modelos de ingresos. La pregunta no es <em>si</em> adoptarlas, sino <em>qué tan rápido</em> puedes moverte.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="¿Listo para lanzar tu programa de credenciales?"
        subheading="Agenda un demo y descubre cómo merahki.ai te ayuda a diseñar, emitir y verificar credenciales digitales a escala."
        badge="Empieza Ahora"
        trustItems={[
          { title: "Demo personalizado de 30 min", desc: "Una demostración adaptada a tu caso de uso específico." },
          { title: "Habla con un experto, no con un vendedor", desc: "Conversarás con alguien que entiende profundamente el crecimiento impulsado por educación." },
          { title: "Roadmap de implementación incluido", desc: "Sal con un plan claro para lanzar tu primer programa." },
          { title: "Usado por equipos en 8+ industrias", desc: "Desde salud hasta SaaS — hemos visto y resuelto tus desafíos." },
        ]}
      />
    </div>
  );
}
