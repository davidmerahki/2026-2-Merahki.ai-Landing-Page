import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guía Estratégica: Cómo un Partner EdTech Potencia el Crecimiento de la Educación Continua Universitaria y de sus Clientes Corporativos",
  description:
    "Datos globales, frameworks reconocidos, casos latinoamericanos y un mapa de decisión para que el rectorado defina su modelo de partner EdTech y escale la educación continua B2B.",
  openGraph: {
    title: "Guía Estratégica: Cómo un Partner EdTech Potencia el Crecimiento de la Educación Continua Universitaria | merahki.ai",
    description:
      "La educación continua universitaria deja de ser centro de costo y se convierte en motor de ingresos B2B. 372% ROI a tres años. Guía completa con benchmarks, frameworks y recomendaciones.",
    url: "https://merahki.ai/es/blog/edtech-partner-continuing-education-guide",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/es/blog/edtech-partner-continuing-education-guide" },
};

export default function EdtechPartnerContinuingEducationGuideEs() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <Link href="/es/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Blog &amp; Artículos
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Liderazgo de Pensamiento</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Educación B2B</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Educación Continua</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Guía Estratégica: Cómo un Partner EdTech Potencia{" "}
              <span className="text-gradient-peach-purple">la Educación Continua Universitaria</span>{" "}
              y de sus Clientes Corporativos
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              Una publicación de pensamiento estratégico de <strong className="text-white">merahki.ai</strong>
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-white/40 border-t border-white/10 pt-6">
              <span>merahki.ai</span>
              <span>·</span>
              <span>Mayo 2026</span>
              <span>·</span>
              <span>Versión 1.0</span>
            </div>
            <p className="text-xs text-white/30 mt-2">Audiencia: Rectores, Vicerrectores, Directores de Educación Continua y Coordinadores de Proyectos en universidades de habla hispana</p>
          </AnimatedSection>
        </div>
      </section>

      {/* TL;DR */}
      <section className="relative py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">TL;DR — Lo esencial en tres ideas</p>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-bold text-lg mb-2">La educación continua universitaria deja de ser un centro de costo y se convierte en un motor de ingresos B2B.</p>
                  <p className="text-white/75 text-sm leading-relaxed">Los datos de Forrester/Intellum (2024) confirman que un programa formalizado de educación a clientes/corporativos genera <strong className="text-white">372% de ROI a tres años</strong> y <strong className="text-white">7 meses de payback</strong>, con un retorno de <strong className="text-white">USD 6,71 por cada USD 1 invertido al tercer año</strong>. Las universidades que estructuran su unidad de educación continua con prácticas EdTech profesionales pueden capturar este efecto en un mercado B2B de educación continua que pasará de <strong className="text-white">USD 6,4 mil millones en 2025 a USD 10,08 mil millones en 2030</strong> (The Business Research Company, <em>B2B Continuing Education Report 2026</em>).</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2">El partner EdTech aporta tres palancas que la universidad raramente domina sola: velocidad-al-mercado, instrumentación de datos y operación B2B.</p>
                  <p className="text-white/75 text-sm leading-relaxed">Los modelos cohorte logran tasas de finalización del <strong className="text-white">85–97%</strong> (vs. 12–15% de los MOOC tradicionales), la educación a clientes formalizada reduce <strong className="text-white">16% los tickets de soporte y 7% los costos de soporte</strong> del cliente corporativo (Forrester/Intellum 2024), y los partners certificados de programas corporativos generan <strong className="text-white">6× más ingresos</strong> (PartnerStack). Sin estas capacidades, la universidad compite en desventaja contra Coursera for Business, LinkedIn Learning y bootcamps.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2">La urgencia es ahora: 39% de las habilidades cambiarán para 2030 y 59 de cada 100 trabajadores requieren reskilling/upskilling.</p>
                  <p className="text-white/75 text-sm leading-relaxed"><strong className="text-white">59 de cada 100 trabajadores requieren reskilling/upskilling</strong> (Foro Económico Mundial, <em>Future of Jobs Report 2025</em>, basado en &gt;1.000 empleadores globales que representan más de 14 millones de trabajadores en 22 clusters industriales y 55 economías). Las empresas no esperarán: si la universidad no responde con programas B2B medibles, contratará a otros. <strong className="text-white">Recomendación:</strong> definir el modelo de partner EdTech (build, buy, partner o híbrido) en los próximos 90 días y arrancar un piloto B2B con un cliente corporativo ancla.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Página Ejecutiva */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Página Ejecutiva (One-Pager)</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">El <span className="text-gradient-peach-purple">problema</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Las unidades de educación continua de las universidades latinoamericanas operan, en su mayoría, con lógica académica tradicional: catálogos diseñados desde la oferta del claustro, ciclos largos de lanzamiento (6–12 meses), instrumentación analógica y modelos comerciales B2C. Esto las deja en desventaja frente a tres competidores que llegan con lógica B2B y velocidad SaaS:</p>
              <div className="space-y-4 mb-8">
                {[
                  ["Plataformas de educación corporativa", "Coursera for Business, con 1.612 clientes empresariales pagos y NRR de 87% en Q4 2024."],
                  ["Bootcamps y OPMs", "Mercado global de OPM proyectado de USD 4,2B en 2022 a USD 11,5B en 2030 (Credence Research)."],
                  ["Academias propietarias de marcas tecnológicas", "HubSpot Academy reporta en su Education Partner Program \"trusted by over 200,000 professionals\" en certificaciones agnósticas; Salesforce Trailhead ofrece más de 60 certificaciones; AWS, Adobe, Microsoft y Google operan academias industriales globales."],
                ].map(([title, desc]) => (
                  <div key={title} className="glass-card rounded-xl p-5">
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">La oportunidad.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Las universidades poseen tres activos no replicables: marca académica, credencial reconocida por el regulador y contenido respaldado por investigación. Con un partner EdTech adecuado, esos activos se convierten en una propuesta B2B superior en margen y diferenciación.</p>

              <h3 className="text-2xl font-bold text-white mb-4">El modelo recomendado por merahki.ai (en este documento).</h3>
              <p className="text-white/60 text-base leading-relaxed mb-4">Una arquitectura de cuatro capas:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  ["1. Estrategia (Education-Led Growth, ELG)", "Adoptar el marco de Intellum y los Siete Pilares."],
                  ["2. Operación (Modelo de Madurez)", "Pasar de Ad Hoc → Fundacional → Estratégico → Transformacional."],
                  ["3. Producto (Onboarding Orquestado de Donna Weber + Modelos de Monetización tipo Quick/Cushard)", "Diseño cohorte, certificación y suscripción."],
                  ["4. Medición (Jerarquía KPI de cuatro capas: Leading → Transitional → Lagging → Terminal)", "Atribución a ingresos."],
                ].map(([title, desc]) => (
                  <div key={title} className="glass-card rounded-xl p-5">
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Resultado esperado en 12 meses (basado en benchmarks de la industria).</h3>
              <div className="space-y-2 mb-8">
                {[
                  ["Crecimiento de matrícula B2B:", "+25 a 40% anual (referencia: Coursera Enterprise +18% YoY en clientes pagos)."],
                  ["Tasa de finalización:", "65–85% en formato cohorte (vs. línea base de 12–15%)."],
                  ["Reducción de tickets de soporte del cliente corporativo:", "−16% (Forrester/Intellum 2024)."],
                  ["Time-to-launch de un nuevo programa:", "de 6–12 meses a 6–10 semanas."],
                  ["ROI a tres años proyectado:", ">300%, con payback en menos de 12 meses."],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-3 text-sm">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                    <span className="text-white/70"><strong className="text-white">{label}</strong> {value}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Lo que esta guía entrega</p>
                <p className="text-white/75 leading-relaxed">Datos globales, frameworks reconocidos, casos en América Latina (Tec de Monterrey, Uniandes, UC Chile, INSPER, IPADE, INCAE, FGV) y un mapa de decisión —no un argumento de venta— para que el rectorado decida con criterio.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Hallazgos Clave */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Hallazgos Clave</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Siete hallazgos que definen <span className="text-gradient-peach-purple">la oportunidad</span>.</h2>

              {/* Hallazgo 1 */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">1. El mercado se mueve más rápido que las universidades</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "Mercado B2B de educación continua: USD 6,4 mil millones (2025) → USD 10,08 mil millones (2030), CAGR 9,4% (The Business Research Company, B2B Continuing Education Report 2026).",
                      "Mercado de e-learning corporativo: USD 102,55 mil millones (2025) → USD 211,79 mil millones (2031), CAGR 12,86% (Mordor Intelligence, 2026).",
                      "Mercado de LMS corporativo: USD 14,49 mil millones (2025) → USD 72,3 mil millones (2034), CAGR 19,65% (Precedence Research, 2025).",
                      "Universidades estableciendo partnerships: En 2021 se firmaron 594 partnerships universitarios (OPM, bootcamp, pathways) globalmente; 86% de las universidades globales adoptaron acuerdos de revenue sharing con su partner OPM (HolonIQ, 2022).",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>

                {/* Hallazgo 2 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">2. La educación a clientes corporativos genera ROI cuantificado</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "372% ROI a tres años, USD 14,1M de NPV, payback de 7 meses y USD 6,71 de retorno por cada USD 1 invertido al tercer año (Forrester TEI, The Total Economic Impact of a Customer Education Program, comisionado por Intellum, mayo 2024; n=122 decisores con programas formalizados).",
                      "96% de los programas formales de educación a clientes reportan ROI positivo (Forrester/Intellum 2024).",
                      "−16% en tickets de soporte y −7% en costos de soporte para empresas con educación formalizada (mismo estudio).",
                      "Distribución de beneficios: 56% retención mejorada, 37% expansión de gasto del cliente, 7% ahorro en costos de soporte.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>

                {/* Hallazgo 3 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">3. La AI ha pasado de experimentación a operación</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "92,6% de los equipos de educación usan AI activamente —contenido, soporte al alumno, planeación— según el 2026 Education-Led Growth Report de Intellum (n=190 practitioners verificados, encuesta nov 2025–feb 2026, publicada el 22 de abril de 2026).",
                      "81,6% de los programas tienen el crecimiento de ingresos como objetivo primario, por encima de desempeño (75,3%), retención (68,9%) y reducción de costos (60%).",
                      "68% de los programas están estrechamente ligados al éxito del producto en mercado, frente a 32% en 2025 — un salto de 36 puntos porcentuales en un año (Intellum, 2026).",
                      "76% mide el impacto en menos de 90 días desde el lanzamiento (vs. 28% en 2025); solo 5% no mide consistentemente.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>

                {/* Hallazgo 4 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">4. La metodología decide el resultado</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "MOOCs autodidactas: 5–15% de finalización (Jordan 2015; Reich & Ruipérez-Valiente 2019).",
                      "Capacitación corporativa formal: 60–80%.",
                      "Cohort-based (cohorte): 85–97% — Harvard Business School Online reporta 85%, altMBA reporta 97% de finalización en su sitio oficial y en Disco.co (\"AltMBA has a 97% completion rate, and 3% drop-off rate because participants have committed to enrolling in an emotional journey of transformation\"), Esme Learning reporta 98–100%.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-white/80 text-sm leading-relaxed"><strong className="text-white">Implicación:</strong> la modalidad cohorte —operada por un partner EdTech con disciplina de proyecto— es el estándar para programas B2B de alto valor.</p>
                  </div>
                </div>

                {/* Hallazgo 5 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">5. Los empleadores ya están comprando — y en grandes volúmenes</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "63% de los empleadores citan la brecha de habilidades como la principal barrera (WEF, Future of Jobs Report 2025, sobre >1.000 empleadores que representan más de 14 millones de trabajadores en 22 clusters y 55 economías).",
                      "39% del set de habilidades de cada trabajador será transformado u obsoleto entre 2025 y 2030.",
                      "85% de los empleadores planea priorizar el upskilling de su fuerza laboral; 70% espera contratar staff con nuevas habilidades.",
                      "170 millones de empleos nuevos y 92 millones desplazados entre 2025 y 2030.",
                      "McKinsey Global Institute (The Future of Work After COVID-19, febrero 2021) estimó que, en su escenario post-COVID y a través de las ocho economías estudiadas, 107 millones de trabajadores (1 de cada 16) tendrán que cambiar de ocupación para 2030, 12% más que en su estimación pre-pandemia.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>

                {/* Hallazgo 6 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">6. Los partners EdTech aceleran outcomes específicos</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      "Coursera for Business: 327% ROI a tres años según Forrester TEI 2024 (USD 4,85M en ahorros para una organización compuesta).",
                      "Skilljar Strategic Insights muestra que la mediana de penetración de capacitación es ~29%, y el \"best-in-class\" supera 50%.",
                      "Costo de un ticket asistido vs. self-service: USD 25–35 vs. USD 1–4 (multiplicador 7–15× a favor del autoservicio educativo).",
                      "TSIA: post-capacitación, 68% de los clientes usa más el producto, 56% usa más funciones, 87% trabaja más independientemente.",
                      "Partners certificados ganan 6× más ingresos que los no certificados (PartnerStack).",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>

                {/* Hallazgo 7 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">7. América Latina: el caso ya está probado por las grandes</h3>
                  <div className="space-y-2">
                    {[
                      "Tec de Monterrey: primera universidad mexicana en aliarse con Coursera (2013); 1,7 millones de inscritos en edX/MéxicoX, 35.000 graduados de programas en línea, 1,5 millones en diplomados online (Farias-Gaytan et al., Journal of Interactive Media in Education, 2023). Alianza \"La Tríada\" con UC Chile y Uniandes vía Coursera for Campus.",
                      "Universidad de los Andes (Colombia): 1° en Colombia, 4° en América Latina, top-35 mundial en educación ejecutiva (Financial Times Executive Education Ranking 2022). Partner activo de Emeritus.",
                      "EGADE Tec de Monterrey, IPADE, INCAE, INSPER, Uniandes: todos con alianza con Emeritus para programas online de grado y certificado. Eruditus (Emeritus) reportó bookings de USD 175M en FY21, con 16% (~USD 28M) provenientes de LATAM.",
                      "FGV (Brasil): desde 2008 ofrece +200 cursos online; 17 millones de inscripciones acumuladas, 99% de satisfacción (FGV Portal, 2025).",
                      "Crehana for Business (Perú/regional): 1.200+ clientes empresariales (Santander, Falabella, Bancolombia, DiDi); más del 50% de sus ingresos provienen del segmento B2B; serie B de USD 70M liderada por General Atlantic en agosto 2021 — la mayor de EdTech en la región.",
                      "Distribución regional de universidades corporativas (cliente potencial B2B): Brasil 34%, México 22%, Argentina 14%, Colombia 11%, Perú 10% (Informe Sumaq sobre Formación, 2013 — última fuente comparativa pública; tratar como base histórica).",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA 1 */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 md:p-10 border border-purple-500/25" style={{background: "radial-gradient(ellipse 120% 100% at 30% 50%, rgba(88,28,135,0.30), rgba(49,10,101,0.35), rgba(10,5,20,0.60))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-4">merahki.ai</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">¿Listo para escalar tu <span className="text-gradient-peach-purple">educación continua B2B</span>?</h3>
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl">merahki.ai opera como partner modular: estrategia, diseño instruccional, plataforma, analytics y operaciones B2B — sin asumir el alma académica de tu institución.</p>
              <Link href="/es/continuing-education" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                Ver la solución de Educación Continua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Análisis Profundo */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Detalles (Análisis Profundo)</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">A. Por qué un partner EdTech, y <span className="text-gradient-peach-purple">no más recursos internos</span>.</h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">La pregunta del rectorado no es &ldquo;¿necesito tecnología?&rdquo; sino &ldquo;¿build, buy o partner?&rdquo;. HolonIQ documenta que la decisión global se ha desplazado del <em>build</em> (más caro y lento) al <em>partner</em> (más rápido y con riesgo compartido). Las razones son tres:</p>
              <div className="space-y-4 mb-8">
                {[
                  ["1. Velocidad-al-mercado.", "Un programa B2B típico tarda 6–12 meses en lanzarse en una universidad tradicional. Un partner EdTech con plantillas, instructional designers y plataforma operativa lo lanza en 6–10 semanas. Para un cliente corporativo que enfrenta una transformación inmediata, esa diferencia define la elección."],
                  ["2. Instrumentación.", "Las universidades miden actividad académica (asistencia, calificaciones); los corporativos exigen métricas de negocio (time-to-productivity, completion, transfer-to-job, NPS, NRR). Un partner aporta el stack de medición —LMS, integraciones con CRM (Salesforce, HubSpot), conversational analytics— que la universidad rara vez tiene."],
                  ["3. Operación B2B.", "Vender a empresas requiere ABM, propuestas a medida, contratos master, gestión de cuentas y SLAs. Es un músculo diferente al académico, y el partner permite arrendarlo mientras se construye."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70"><strong className="text-white">{title}</strong> {desc}</span></div>
                ))}
              </div>
              <div className="glass-card rounded-2xl p-6 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.30), rgba(90,25,4,0.40), rgba(18,5,1,0.55))"}}>
                <p className="text-white/85 text-sm leading-relaxed italic">El mensaje de merahki.ai en este punto es deliberado: las universidades no necesitan más tecnología; necesitan capacidad operativa B2B con tecnología detrás. Esta guía traza el camino. La decisión de cuál partner —o si construir internamente— corresponde al rectorado.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* B. Frameworks */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">B. Los frameworks que estructuran <span className="text-gradient-blue-pink">la decisión</span>.</h2>

              <h3 className="text-xl font-bold text-white mb-3">1) Education-Led Growth (Intellum) — Los Siete Pilares</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">ELG es el marco que reposiciona la educación como motor de crecimiento, no como soporte. Los siete pilares (Intellum, 2024–2026) son:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  ["Outcomes", "definir resultados medibles (ingresos, retención, eficiencia)."],
                  ["Audience", "segmentar personas y experiencias."],
                  ["Initiative", "propósito y alcance de cada programa."],
                  ["Resources", "capacidades, herramientas, AI, instructional design."],
                  ["Delivery", "modalidades (cohorte, asíncrono, certificación, eventos)."],
                  ["Marketing", "posicionar la educación como activo estratégico."],
                  ["Measurement", "atribuir educación a outcomes de negocio."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-baseline gap-3 py-2 border-b border-white/06">
                    <span className="font-mono text-purple-400/70 text-sm min-w-[100px] font-semibold">{title}</span>
                    <span className="text-white/70 text-sm">{desc}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">2) Modelo de Madurez ELG — Cuatro niveles</h3>
              <div className="space-y-2 mb-4">
                {[
                  "Ad Hoc: existe, pero es reactiva e inconsistente.",
                  "Fundacional: procesos repetibles, pero sin estrategia clara.",
                  "Estratégico: alineado a prioridades de negocio.",
                  "Transformacional: motor central de crecimiento, con personalización a escala y atribución directa al impacto.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">La encuesta de Forrester/Intellum (2024) muestra que <strong className="text-white">78% de las organizaciones high-success tienen programas formalizados, vs. 35% de las low-success.</strong> La madurez explica el resultado, no la inversión absoluta.</p>

              <h3 className="text-xl font-bold text-white mb-3">3) Onboarding Orquestado (Donna Weber) — Seis fases</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">Aplicado a B2B universitario, las seis fases del <em>Orchestrated Onboarding®</em> —Embark, Handoff, Kickoff, Adopt, Review, Expand— son la coreografía con la que la unidad de educación continua entrega valor a un cliente corporativo desde antes de la firma del contrato hasta la expansión. Embark resuelve el problema clásico de &ldquo;vendimos algo que el área académica no puede entregar&rdquo;; Expand convierte la primera cohorte en un programa anual recurrente.</p>

              <h3 className="text-xl font-bold text-white mb-3">4) Modelos de Monetización (Quick / Cushard / Avramescu)</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">Tres modelos coexisten en una unidad madura:</p>
              <div className="space-y-2 mb-4">
                {[
                  "Pay-per-seat / pay-per-program: clásico B2C / cohorte abierta.",
                  "Subscription (Learning-as-a-Service): acceso ilimitado para empleados de la empresa cliente. Renovación de suscripciones individuales en la industria EdTech: 54% (mediocre), 77% en empresarial (TSIA). Benchmark para programas exitosos: >85%.",
                  "In-product / embedded: educación dentro del flujo del producto del cliente, monetizada como upsell.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">Avramescu (<em>Customer Education: Why Smart Companies Profit by Making Customers Smarter</em>, 2019) propone medir el ROI de la educación cruzando engagement de capacitación con renovación, expansión y deflexión de soporte —una fórmula transferible al B2B universitario.</p>

              <h3 className="text-xl font-bold text-white mb-3">5) Cuatro Capas KPI (jerarquía de medición)</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">Inspirada en la práctica de medición de Avramescu, Spinks y la lógica del Forrester TEI:</p>
              <div className="space-y-2 mb-8">
                {[
                  "Leading (líderes): matrículas, asistencia, engagement, NPS de curso.",
                  "Transitional (transicionales): finalización, certificación, time-to-completion.",
                  "Lagging (rezagados): retención del cliente corporativo (NRR), recompra, expansión de cuenta.",
                  "Terminal: ingresos atribuibles, margen del programa, lifetime value, ROI a tres años.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">La unidad inmadura mide solo Leading. La transformacional mide los cuatro y atribuye Terminal a las decisiones de Leading.</p>

              <h3 className="text-xl font-bold text-white mb-3">6) Octalysis (Yu-kai Chou) para diseño motivacional</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">Las ocho <em>Core Drives</em> —significado, logro, empoderamiento, propiedad, influencia social, escasez, impredecibilidad, evitación de pérdida— ofrecen un lenguaje técnico para gamificar programas B2B. Aplicado a educación corporativa, eleva engagement y completion. Estudios revisados por pares (Chen et al., <em>Computers &amp; Education</em>, 2023) demuestran impacto positivo sobre desempeño y motivación.</p>

              <h3 className="text-xl font-bold text-white mb-3">7) Community-Led Growth aplicado a alumni</h3>
              <p className="text-white/60 text-sm leading-relaxed">La red de alumni y certificados es un activo subutilizado. El caso Salesforce Trailblazer Community —reportado por Erica Kuhl, ex-VP de Community— mostró <strong className="text-white">2× tamaño de deal, 2× pipeline y +85% en propensión a cross-sell/upsell</strong> de las cuentas activas en comunidad. Para las universidades, la comunidad de egresados de educación continua es el canal natural de adquisición B2B repetido.</p>
            </div>
          </AnimatedSection>

          {/* C. Outcomes universidad */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">C. Los outcomes para <span className="text-gradient-peach-purple">la universidad</span> (palanca a palanca).</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Outcome", "Métrica", "Benchmark / Dato", "Fuente"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ingresos B2B", "NRR clientes empresa", "Coursera 87% (2024); meta best-in-class >100%", "Coursera 10-K 2024"],
                      ["Crecimiento matrícula", "Crecimiento clientes pagos", "Coursera Enterprise +18% YoY", "Coursera Q4 2024"],
                      ["Finalización", "Tasa de finalización", "85–97% en cohorte; 60–80% workplace", "HBS Online; altMBA; Forrester"],
                      ["Eficiencia", "Time-to-launch", "6–10 semanas con partner vs. 6–12 meses interno", "Boundless Learning; UPCEA 2024"],
                      ["Costo por aprendiz", "Multiplicador self-service", "7–15× ahorro vs. soporte asistido", "TSIA"],
                      ["Diferenciación", "Ranking ejecutivo", "Uniandes Top-35 global FT 2022", "Financial Times Executive Education Ranking"],
                      ["Alumni LTV", "Trained customer LTV", "+25% vs. no entrenado", "Northpass / Gainsight"],
                    ].map(([outcome, metric, benchmark, source]) => (
                      <tr key={outcome} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{outcome}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{metric}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{benchmark}</td>
                        <td className="px-4 py-3 text-white/50 text-xs">{source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* D. Outcomes cliente corporativo */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">D. Los outcomes para el <span className="text-gradient-blue-pink">cliente corporativo</span> (lo que hay que prometer).</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Outcome para el cliente B2B", "Dato cuantificado", "Fuente"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Adopción de producto", "68% usa más el producto post-training", "TSIA"],
                      ["Uso ampliado de features", "56% usa más funciones", "TSIA"],
                      ["Independencia operativa", "87% trabaja más independientemente", "TSIA"],
                      ["Time-to-value", "Hasta 86% más rápido en clientes entrenados", "Northpass"],
                      ["Reducción de tickets", "−16% en soporte", "Forrester/Intellum 2024"],
                      ["Reducción de costo de soporte", "−7%", "Forrester/Intellum 2024"],
                      ["Productividad partners certificados", "+6× ingreso vs. no certificado", "PartnerStack"],
                      ["Reskilling de fuerza laboral", "39% de skills cambiarán para 2030", "WEF Future of Jobs 2025"],
                    ].map(([outcome, dato, source]) => (
                      <tr key={outcome} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{outcome}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{dato}</td>
                        <td className="px-4 py-3 text-white/50 text-xs">{source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* E. Urgencia */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">E. La urgencia: AI, búsqueda generativa y <span className="text-gradient-peach-purple">first-mover advantage</span>.</h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">Tres factores convierten &ldquo;podemos esperar&rdquo; en una decisión arriesgada:</p>
              <div className="space-y-4">
                {[
                  ["1. AI en búsqueda.", "ChatGPT, Perplexity y Google AI Overviews están redirigiendo las consultas informacionales. La universidad que no tenga contenido digital indexable (cursos, certificaciones, microcredenciales) pierde el primer punto de contacto con su mercado."],
                  ["2. AI en producción.", "Intellum (2026) reporta que 92,6% de los equipos de educación usan AI. La universidad que produce contenido al ritmo análogo no compite en velocidad."],
                  ["3. First-mover en credenciales.", "Cada empresa que firma con Coursera for Business o LinkedIn Learning hoy es una empresa que no firmará con la universidad mañana. Net Retention Rates de 87% en la competencia significan que recuperar esa cuenta tomará 3–5 años."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70"><strong className="text-white">{title}</strong> {desc}</span></div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* F. Comparación competitiva */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">F. Comparación competitiva — qué puede hacer la universidad que <span className="text-gradient-blue-pink">el bootcamp no</span>.</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Atributo", "Bootcamp / MOOC", "Universidad con partner EdTech"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Marca académica", "Limitada", "Diferenciador #1"],
                      ["Reconocimiento regulatorio", "No (microcredencial)", "Sí (diplomado / posgrado oficial)"],
                      ["Contenido respaldado por investigación", "Escaso", "Activo principal"],
                      ["Velocidad operativa", "Alta", "Alta (con partner)"],
                      ["Comunidad alumni", "Volátil", "Estable y multigeneracional"],
                      ["Capacidad B2B comercial", "Alta", "Mediana → Alta (con partner)"],
                      ["Tasa de finalización demostrable", "Variable", "Alta (cohorte)"],
                    ].map(([attr, bootcamp, uni]) => (
                      <tr key={attr} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{attr}</td>
                        <td className="px-4 py-3 text-white/50 text-sm">{bootcamp}</td>
                        <td className="px-4 py-3 text-emerald-400/80 text-sm font-medium">{uni}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-white/80 text-sm leading-relaxed"><strong className="text-white">La conclusión estratégica:</strong> la universidad tiene los activos no replicables; el partner aporta los músculos operativos faltantes. Juntos crean la oferta más defendible del mercado B2B de educación continua.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Recomendaciones */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Recomendaciones (Pasos accionables)</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Tres fases. <span className="text-gradient-peach-purple">Umbrales claros.</span></h2>

              <h3 className="text-xl font-bold text-white mb-4">Fase 0 — Diagnóstico (semanas 1–4)</h3>
              <div className="space-y-2 mb-8">
                {[
                  "1. Auditar la madurez actual usando los cuatro niveles del Modelo ELG (Ad Hoc → Transformacional). Honestidad ejecutiva: la mayoría de unidades latinoamericanas hoy están entre Ad Hoc y Fundacional.",
                  "2. Mapear los Siete Pilares — identificar dónde la universidad ya tiene capacidad y dónde necesita complementarse.",
                  "3. Establecer la línea base de KPIs en las cuatro capas (Leading → Terminal). Sin esta línea base, no hay forma de demostrar ROI en 12 meses.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Fase 1 — Decisión estratégica (semanas 5–8)</h3>
              <div className="space-y-3 mb-4">
                <p className="text-white/70 text-sm"><strong className="text-white">4. Decidir el modelo de partnership</strong> entre cuatro opciones:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                  {[
                    ["Build:", "alta autonomía, alta inversión, lento. Recomendado solo si la universidad ya tiene economías de escala (>10.000 estudiantes B2C en línea)."],
                    ["Buy/Adquirir:", "rara vez viable."],
                    ["Partner full-stack (OPM clásico):", "rápido, revenue-share del 35–65%; presión regulatoria creciente (Inside Higher Ed, 2024; bancarrota Chapter 11 de 2U el 25 de julio de 2024)."],
                    ["Partner modular (a la carta) — recomendado para la mayoría:", "la universidad mantiene el control académico y de marca; el partner aporta marketing, captación, instructional design, plataforma, analytics. Es el modelo donde un actor como merahki.ai opera: facilitando la capacidad B2B sin asumir el alma académica."],
                  ].map(([title, desc]) => (
                    <div key={title} className="glass-card rounded-xl p-4">
                      <p className="text-white font-bold text-xs mb-1">{title}</p>
                      <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm mb-8"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70"><strong className="text-white">5. Definir el cliente corporativo ancla.</strong> Una sola cuenta B2B grande (banca, retail, energía, salud, gobierno) que diseñe con la universidad un programa de 12–18 meses. Casos LATAM probados: Crehana con Bancolombia, Tec con corporativos mexicanos, FGV con bancos brasileños.</span></div>

              <h3 className="text-xl font-bold text-white mb-4">Fase 2 — Piloto (meses 3–9)</h3>
              <div className="space-y-2 mb-8">
                {[
                  "6. Lanzar un piloto cohorte B2B con métricas explícitas: 1 programa, 1 cliente ancla, 60–120 participantes, 12 semanas. KPIs objetivo: Finalización ≥75%, NPS ≥50, Time-to-launch ≤10 semanas, Margen ≥35%.",
                  "7. Implementar Onboarding Orquestado desde la fase Embark (preventa) hasta Expand (renovación a programa anual).",
                  "8. Instrumentar AI desde el día uno —generación de contenido, análisis conversacional de cohortes, soporte al alumno 24/7. El benchmark de Intellum 2026 (92,6% de adopción) es el techo.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Fase 3 — Escalado (meses 10–24)</h3>
              <div className="space-y-2 mb-8">
                {[
                  "9. Pasar de un programa a un portafolio modular —certificación, diplomado, suscripción corporativa (Learning-as-a-Service).",
                  "10. Construir la comunidad alumni B2B como canal de leads. Modelo Salesforce Trailblazer.",
                  "11. Reportar trimestralmente al consejo los KPIs de las cuatro capas. Si Terminal no mueve a los 12 meses, reevaluar el partner o el segmento.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" /><span className="text-white/70">{item}</span></div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Umbrales que cambian la recomendación</h3>
              <div className="space-y-3">
                {[
                  ["Si el time-to-launch sigue por encima de 16 semanas al mes 9,", "el partner no está aportando velocidad — renegociar o cambiar."],
                  ["Si la finalización del piloto cae por debajo de 60%,", "hay un problema de diseño cohorte; revisar Octalysis y comunidad."],
                  ["Si el NRR del cliente ancla cae por debajo de 90% al año 1,", "el problema está en Adopt/Review (Weber) — no en el contrato."],
                  ["Si el ROI proyectado no supera 200% a tres años,", "el modelo de monetización está mal calibrado — revisar Quick/Cushard."],
                ].map(([threshold, action]) => (
                  <div key={threshold} className="glass-card rounded-xl p-4 border border-orange-400/15" style={{background: "rgba(170,60,8,0.15)"}}>
                    <p className="text-sm"><strong className="text-orange-300/90">{threshold}</strong> <span className="text-white/70">{action}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Caveats */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Caveats (Advertencias y matices)</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que necesita <span className="text-gradient-peach-purple">matizarse</span></h2>
              <div className="space-y-3">
                {[
                  "1. Los benchmarks Forrester/Intellum (372% ROI) provienen de organizaciones B2B SaaS, no de universidades. La transferencia es directiva, no idéntica. La universidad debe construir su propia línea base.",
                  "2. El dato \"22% México / 34% Brasil\" sobre distribución de universidades corporativas proviene del Informe Sumaq sobre Formación (2013), que sigue siendo la fuente comparativa pública más completa. Trátese como base histórica, no como cifra 2026.",
                  "3. El modelo OPM revenue-share enfrenta presión regulatoria creciente (Departamento de Educación de EE. UU., Minnesota mayo 2024 que prohibió a sus universidades públicas firmar contratos de tuition-share con OPMs, y bancarrota Chapter 11 de 2U el 25 de julio de 2024 con salida como compañía privada el 13 de septiembre de 2024). En LATAM la regulación es menos restrictiva, pero la tendencia internacional es hacia modelos fee-for-service o híbridos. Diseñar el contrato con esta tendencia en mente.",
                  "4. Los datos de Coursera Enterprise (NRR 87%) corresponden a su mix global; en mercados emergentes el NRR tiende a ser menor. Calibrar expectativas.",
                  "5. Las tasas de finalización de cohorte (85–97%) se logran con disciplina operativa rigurosa. No son automáticas por contratar un LMS.",
                  "6. El estudio Forrester TEI de Coursera for Business (327% ROI) está comisionado por el proveedor; los TEI son metodológicamente sólidos pero deben leerse junto con benchmarks independientes.",
                  "7. La evidencia específica de universidades latinoamericanas con métricas detalladas de educación continua B2B es escasa públicamente. Los casos citados (Tec, Uniandes, UC Chile, INSPER, IPADE, INCAE, FGV) confirman tracción y partnerships, pero las cifras finas de revenue por programa rara vez son divulgadas.",
                  "8. Esta guía es un documento estratégico, no un manual de implementación. Cada universidad debe adaptar los frameworks a su realidad regulatoria (CONEAU, SEP, MEN, MEC), de gobernanza y de mercado.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm"><span className="text-orange-400/70 text-xs mt-0.5 shrink-0">⚠</span><span className="text-white/60 leading-relaxed">{item}</span></div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Footer */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <p className="text-white/70 text-sm leading-relaxed italic">Esta guía fue producida por <strong className="text-white">merahki.ai</strong>, especialistas en education-led growth y en operación B2B de educación continua universitaria. Nuestra misión en esta publicación no es vender un servicio; es traer al rectorado latinoamericano el conocimiento global y los benchmarks que permiten tomar decisiones informadas sobre el futuro de su unidad de educación continua. Cuando el momento llegue, conversaremos. Por ahora, esperamos que esta lectura le sea útil.</p>
              <p className="text-white/40 text-xs">Versión 1.0 — Mayo 2026. Próxima actualización: Q4 2026 con datos del 2026 Outlook completo de HolonIQ y la edición 2027 del State of ELG.</p>
            </div>
          </AnimatedSection>

          {/* CTA final */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 md:p-10 border border-purple-500/25" style={{background: "radial-gradient(ellipse 120% 100% at 30% 50%, rgba(88,28,135,0.30), rgba(49,10,101,0.35), rgba(10,5,20,0.60))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-4">Siguiente paso</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Agenda una sesión estratégica <span className="text-gradient-peach-purple">sin compromiso</span>.</h3>
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl">30 minutos con un experto en education-led growth para evaluar tu modelo de madurez, identificar tu cliente corporativo ancla y definir la hoja de ruta de 90 días.</p>
              <Link href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                Agendar sesión estratégica <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <ContactSection
        heading="¿Hablamos?"
        subheading="Agenda una sesión estratégica con el equipo de merahki.ai para evaluar el modelo de partnership correcto para tu institución."
      />
    </div>
  );
}
