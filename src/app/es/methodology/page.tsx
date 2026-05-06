import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Metodología — Virtualización Integral | merahki.ai",
  description:
    "Estándar AICET · Entrega Ágil · Gamificación Octalysis · Marco ICAP · Kirkpatrick 4 Niveles — la metodología completa que impulsa cada experiencia de aprendizaje de merahki.ai.",
  openGraph: {
    title: "Metodología de Virtualización Integral — merahki.ai",
    description:
      "AICET · Ágil · Octalysis · ICAP · Kirkpatrick — aplicados a las 6 soluciones de merahki.ai.",
    url: "https://merahki.ai/es/methodology",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/methodology",
  },
};

/* ────────────────────────── tiny helpers ────────────────────────── */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
    {children}
  </span>
);

const SectionHeading = ({
  id,
  badge,
  title,
  subtitle,
}: {
  id?: string;
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
}) => (
  <div id={id} className="scroll-mt-24 space-y-4 text-center max-w-4xl mx-auto mb-14">
    <AnimatedSection>
      <Badge>{badge}</Badge>
    </AnimatedSection>
    <AnimatedSection delay={0.05}>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
    </AnimatedSection>
    {subtitle && (
      <AnimatedSection delay={0.1}>
        <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </AnimatedSection>
    )}
  </div>
);

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto -mx-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th
              key={h}
              className="text-left px-4 py-3 text-xs font-bold text-accent-purple uppercase tracking-wider border-b border-white/10 bg-white/[0.03]"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-4 py-3 leading-relaxed ${
                  j === 0 ? "font-semibold text-white/90" : "text-white/60"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-accent-purple/60 pl-5 py-3 my-6 text-white/70 italic leading-relaxed text-sm md:text-base">
    {children}
  </div>
);

/* ──────────────────────────── PAGE ──────────────────────────── */
export default function MethodologyPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden text-white">
      {/* ░░░ HERO ░░░ */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "35%", y: "35%" }}
          rustPosition={{ x: "65%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <Badge>Metodología</Badge>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm text-white/40 font-semibold tracking-wider uppercase">
              merahki.ai
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Arquitectura Sistémica de{" "}
              <span className="text-gradient-peach-purple">
                Virtualización Integral
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              El ecosistema de alto impacto de merahki.ai
            </p>
            <p className="text-sm text-white/35 mt-2">
              Estándar AICET&nbsp;·&nbsp;Scrum&nbsp;·&nbsp;Octalysis&nbsp;·&nbsp;ICAP&nbsp;·&nbsp;Kirkpatrick&nbsp;·&nbsp;Mayer&nbsp;·&nbsp;Anderson &amp; Krathwohl&nbsp;·&nbsp;Wiggins &amp; McTighe
            </p>
            <p className="text-xs text-white/25 mt-1">
              Learning Design &amp; Instructional Design — Versión 2.0 — 2025
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* ░░░ INTRODUCCIÓN ░░░ */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <GlassCard>
              <p className="text-white/60 leading-relaxed mb-6">
                La evolución de la educación corporativa y académica en el 2025 exige trascender la transferencia de información para consolidarse como una <strong className="text-white/90">ingeniería del comportamiento</strong>. La metodología de merahki.ai propone una reingeniería del acto educativo fundamentada en el aprendizaje experiencial, donde el estudiante no es un receptor, sino un protagonista que construye conocimiento a través de la práctica y la resolución de problemas reales.
              </p>
              <p className="text-white/55 leading-relaxed text-sm">
                Este marco se sustenta en la convergencia de ocho pilares científicos: el Estándar AICET, marcos ágiles (Scrum), la arquitectura Octalysis, la taxonomía ICAP, el modelo Kirkpatrick del Nuevo Mundo, los principios Multimedia de Mayer, la Taxonomía Revisada de Anderson y Krathwohl, y el Diseño Inverso de Wiggins y McTighe.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ AICET ░░░ */}
      <section id="aicet" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "30%" }}
          rustPosition={{ x: "80%", y: "70%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Estándar AICET"
            title={
              <>
                Dimensiones de Calidad Instruccional bajo el{" "}
                <span className="text-gradient-peach-purple">Estándar AICET</span>
              </>
            }
            subtitle="El Estándar AICET garantiza la excelencia en todas las dimensiones de una experiencia virtual, asegurando que la tecnología sea el vehículo y no el fin del aprendizaje."
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <Table
                headers={["Dimensión", "Propósito y Enfoque Experiencial", "Peso"]}
                rows={[
                  ["A — Análisis de Necesidades", "Diagnóstico de brechas de desempeño y diseño de \"preguntas esenciales\".", "20 %"],
                  ["I — Interacción Pedagógica", "Estrategias activas y colaborativas basadas en la co-construcción.", "25 %"],
                  ["C — Contenido y Recursos", "Recursos multimodales optimizados bajo principios de carga cognitiva de Mayer.", "20 %"],
                  ["E — Evaluación del Aprendizaje", "Alineamiento constructivo y evaluación auténtica de niveles superiores.", "20 %"],
                  ["T — Tecnología y Plataforma", "Interoperabilidad (xAPI) y accesibilidad universal bajo principios POUR.", "15 %"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ MAYER ░░░ */}
      <section id="mayer" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Principios de Mayer"
            title={
              <>
                Optimización de Recursos:{" "}
                <span className="text-gradient-blue-pink">Los Principios de Mayer</span>
              </>
            }
            subtitle="En la Dimensión C, aplicamos la Teoría Cognitiva del Aprendizaje Multimedia de Richard Mayer para reducir la carga cognitiva extraña y fomentar el procesamiento profundo."
          />

          <AnimatedSection>
            <GlassCard>
              <div className="space-y-6">
                {[
                  { title: "Principio de Coherencia", desc: "Eliminamos elementos decorativos o irrelevantes que distraen del objetivo." },
                  { title: "Principio de Señalización", desc: "Añadimos pistas visuales para dirigir la atención hacia la información clave." },
                  { title: "Principio de Modalidad", desc: "Preferimos el uso de imágenes con narración sobre imágenes con texto denso en pantalla." },
                  { title: "Principio de Segmentación", desc: "Dividimos los contenidos en micro-apartados manejables que el estudiante controla a su ritmo." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-accent-purple mt-0.5 shrink-0">✓</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/55 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ ANDERSON & KRATHWOHL ░░░ */}
      <section id="taxonomia" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "25%" }}
          rustPosition={{ x: "25%", y: "75%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Taxonomía de Anderson & Krathwohl"
            title={
              <>
                Objetivos de Alto Orden:{" "}
                <span className="text-gradient-purple-blue">Taxonomía de Anderson y Krathwohl</span>
              </>
            }
            subtitle="En la Dimensión E, migramos de la memorización a la creación."
          />

          <AnimatedSection>
            <GlassCard>
              <p className="text-white/55 leading-relaxed mb-6 text-sm">
                Siguiendo la revisión de Anderson y Krathwohl (2001), diseñamos actividades que escalan en complejidad: <strong className="text-white/80">Recordar → Comprender → Aplicar → Analizar → Evaluar → Crear</strong>. El aprendizaje experiencial de merahki.ai se enfoca prioritariamente en los niveles de <em>Evaluar</em> (emitir juicios basados en criterios) y <em>Crear</em> (generar productos o soluciones originales).
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white/70">
                {["Recordar", "Comprender", "Aplicar", "Analizar", "Evaluar", "Crear"].map((level, i) => (
                  <span key={level} className={`px-3 py-1.5 rounded-lg ${i >= 4 ? "bg-accent-purple/20 text-accent-purple" : "bg-white/5 text-white/50"}`}>
                    {level}
                  </span>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ SPRINT INSTRUCCIONAL ░░░ */}
      <section id="sprint" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Cadencia Ágil"
            title={
              <>
                Cadencia de Entrega Ágil:{" "}
                <span className="text-gradient-peach-purple">El Sprint Instruccional</span>
              </>
            }
            subtitle="Utilizamos el marco Scrum (Schwaber & Sutherland, 2020) para adaptar el diseño instruccional a entornos cambiantes mediante ciclos iterativos denominados Sprints de 2 a 4 semanas."
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">Pilares</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Transparencia", "Inspección", "Adaptación"].map((p) => (
                      <span key={p} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">{p}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">Valores</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Compromiso", "Coraje", "Foco", "Apertura", "Respeto"].map((v) => (
                      <span key={v} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <h4 className="text-sm font-bold text-accent-purple mb-3 uppercase tracking-wider">Definición de Hecho (DoD)</h4>
                <p className="text-sm text-white/55 leading-relaxed">
                  Para que un incremento sea &ldquo;Hecho&rdquo;, debe superar la auditoría AICET, cumplir con accesibilidad WCAG 2.1 (Principios: Perceptible, Operable, Comprensible, Robusto) y ser aprobado por el Product Owner.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ DISEÑO INVERSO ░░░ */}
      <section id="backward-design" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "40%" }}
          rustPosition={{ x: "50%", y: "60%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Wiggins & McTighe"
            title={
              <>
                Diseño Inverso:{" "}
                <span className="text-gradient-blue-pink">Planificar desde el Impacto</span>
              </>
            }
            subtitle="Inspirados en Wiggins y McTighe (2005), nuestra fase de planificación no comienza con el contenido, sino con los resultados deseados."
          />

          <AnimatedSection>
            <GlassCard>
              <div className="space-y-6">
                {[
                  { stage: "Etapa 1", title: "Identificar los Resultados Deseados", desc: "Definimos las \"Ideas Grandes\" y las \"Preguntas Esenciales\" que impulsan la indagación crítica." },
                  { stage: "Etapa 2", title: "Determinar las Evidencias Aceptables", desc: "Diseñamos tareas de desempeño de Evaluación Auténtica, que imitan desafíos reales del mundo profesional." },
                  { stage: "Etapa 3", title: "Planificar las Experiencias de Aprendizaje", desc: "Solo aquí seleccionamos los recursos y actividades que llevarán al estudiante a alcanzar los niveles de comprensión previstos." },
                ].map((item) => (
                  <div key={item.stage} className="flex gap-4">
                    <span className="px-3 py-1 rounded-lg bg-accent-purple/20 text-accent-purple text-xs font-bold shrink-0 h-fit mt-0.5">{item.stage}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/55 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ OCTALYSIS ░░░ */}
      <section id="octalysis" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Octalysis"
            title={
              <>
                Arquitectura Motivacional Octalysis:{" "}
                <span className="text-gradient-peach-purple">Gamificación Estratégica</span>
              </>
            }
            subtitle={'El marco Octalysis (Chou, 2015) estructura la motivación del estudiante a través de 8 impulsos clave (Core Drives), equilibrando la motivación de "Sombrero Blanco" (empoderamiento) y "Sombrero Negro" (urgencia).'}
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-3">Impulsores de Cerebro Izquierdo (Extrínsecos)</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Desarrollo y Realización (CD2)", "Propiedad (CD4)", "Escasez (CD6)"].map((d) => (
                      <span key={d} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-3">Impulsores de Cerebro Derecho (Intrínsecos)</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Sentido Épico (CD1)", "Empoderamiento de la Creatividad (CD3)", "Influencia Social (CD5)", "Impredecibilidad (CD7)"].map((d) => (
                      <span key={d} className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white/80 mb-3">Motor de Urgencia</h4>
                  <span className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400">Evitar la Pérdida (CD8): Mantener la constancia en el aprendizaje</span>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ ICAP ░░░ */}
      <section id="icap" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "25%" }}
          rustPosition={{ x: "25%", y: "75%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Marco ICAP"
            title={
              <>
                Marco ICAP:{" "}
                <span className="text-gradient-purple-blue">Profundidad del Compromiso Cognitivo</span>
              </>
            }
            subtitle="El Marco ICAP (Chi & Wylie, 2014) clasifica el compromiso según comportamientos observables. En nuestras experiencias experienciales, la meta es la Interacción y la Construcción."
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <Table
                headers={["Modo", "Descripción", "Profundidad"]}
                rows={[
                  ["Interactivo (I)", "Co-construcción de conocimiento mediante el diálogo y la crítica constructiva con pares.", "Profundo + Social"],
                  ["Constructivo (C)", "Generación de productos originales (mapas, soluciones, planes) que trascienden la información recibida.", "Profundo"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <h4 className="text-sm font-bold text-accent-purple mb-2 uppercase tracking-wider">
                Regla de Diseño
              </h4>
              <p className="text-sm text-white/55 leading-relaxed">
                Al menos el <strong className="text-white/80">60 %</strong> del tiempo debe dedicarse a modos Activo, Constructivo o Interactivo. Ningún curso de merahki.ai es 100 % pasivo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ KIRKPATRICK ░░░ */}
      <section id="kirkpatrick" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Kirkpatrick"
            title={
              <>
                Niveles de Kirkpatrick del Nuevo Mundo:{" "}
                <span className="text-gradient-peach-purple">Garantía de Resultados</span>
              </>
            }
            subtitle="Evaluamos el impacto real mediante el modelo Kirkpatrick del Nuevo Mundo, asegurando que la formación se traduzca en comportamientos observables."
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <Table
                headers={["Nivel", "Enfoque New World", "Instrumento de Medición"]}
                rows={[
                  ["K1: Reacción", "Participación y Relevancia: El estudiante ve el valor inmediato para su trabajo.", "NPS + Encuesta de Relevancia."],
                  ["K2: Aprendizaje", "Confianza y Compromiso: El grado en que el estudiante cree que puede y quiere aplicar lo aprendido.", "Pre/Post Test + Evaluaciones de Desempeño."],
                  ["K3: Comportamiento", "Impulsores Requeridos: Refuerzos y monitoreo de la aplicación en el puesto de trabajo.", "Contratos de Aplicación a 30-90 días."],
                  ["K4: Resultados", "Impacto en los indicadores estratégicos de la organización.", "ROI (Fórmula de Phillips) y KPIs de Negocio."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <h4 className="text-sm font-bold text-white/80 mb-3">Fórmula ROI</h4>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center">
                <p className="text-lg font-mono text-accent-purple">
                  ROI = (Beneficio Neto / Costes Totales) × 100
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ APLICACIÓN A LAS 6 SOLUCIONES ░░░ */}
      <section id="soluciones" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "40%" }}
          rustPosition={{ x: "50%", y: "60%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Las 6 Soluciones"
            title={
              <>
                Aplicación a las 6{" "}
                <span className="text-gradient-blue-pink">Soluciones de merahki.ai</span>
              </>
            }
            subtitle="Cada solución adapta estos marcos para maximizar el retorno de inversión y la satisfacción del usuario."
          />

          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="space-y-6">
                {[
                  { title: "Certificación y Evaluación", desc: "Basada en Open Badges 3.0, integrando W3C Verifiable Credentials y tecnología blockchain para credenciales inmutables y portables." },
                  { title: "Customer Education", desc: "Foco en reducir el Time-to-Value mediante micro-learning bajo principios de segmentación de Mayer." },
                  { title: "Partner Academies", desc: "Uso de Octalysis (CD2 y CD6) para crear rutas de certificación exclusivas y escalables." },
                  { title: "Training & Certification", desc: "Ingeniería de comportamiento organizacional mediante evaluaciones auténticas de niveles superiores de Bloom." },
                  { title: "Product Adoption", desc: "Aprendizaje basado en la acción dentro de la interfaz (en-app guides), priorizando el modo ICAP Constructivo." },
                  { title: "Marketing Your Courses", desc: "Diseño de contenidos gratuitos (magnet) que activan la curiosidad (CD7) y demuestran valor experiencial inmediato." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-accent-purple mt-0.5 shrink-0">✓</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/55 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ SÍNTESIS ░░░ */}
      <section id="sintesis" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Síntesis"
            title="Síntesis de la Metodología Experiencial"
          />

          <AnimatedSection>
            <GlassCard className="mb-10">
              <Table
                headers={["Marco", "Contribución Clave", "Meta Final"]}
                rows={[
                  ["Wiggins & McTighe", "Diseño Inverso y Evaluación Auténtica.", "Comprensión Profunda."],
                  ["Mayer", "Reducción de Carga Cognitiva Multimedia.", "Eficiencia en el Procesamiento."],
                  ["Anderson & Krathwohl", "Jerarquía de Procesos Mentales.", "Capacidad de Crear e Innovar."],
                  ["AICET", "Estándar de Calidad Auditable.", "Excelencia Instruccional."],
                  ["Octalysis", "Arquitectura de Motivación Humana.", "Engagement Sostenido."],
                  ["ICAP", "Taxonomía de Comportamiento Activo.", "Aprendizaje Profundo."],
                  ["Kirkpatrick", "Medición de Impacto en 4 Niveles.", "ROI Organizacional."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* ── Compromiso ── */}
          <AnimatedSection>
            <div className="border-gradient-peach-purple rounded-2xl p-8 text-center space-y-5">
              <h3 className="text-2xl font-bold">Compromiso de merahki.ai</h3>
              <Callout>
                Una experiencia que no genera un cambio de comportamiento en el mundo real (Nivel K3) no es aprendizaje; es entretenimiento informativo. Diseñamos para la acción, evaluamos para la transformación y certificamos para la vida.
              </Callout>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="¿Listo para transformar tus programas de aprendizaje?"
        subheading="Agenda un demo y descubre cómo nuestra metodología integral impulsa resultados reales de aprendizaje."
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
