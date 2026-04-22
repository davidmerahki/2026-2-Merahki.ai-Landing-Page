import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guía Integral: Cómo Evaluar una Plataforma de Credenciales Digitales",
  description:
    "Marco completo de due diligence, auditoría técnica, validación funcional, pruebas de verificabilidad, checklist documental y matriz comparativa para universidades.",
  openGraph: {
    title: "Guía Integral: Cómo Evaluar una Plataforma de Credenciales Digitales",
    description:
      "Marco completo para que universidades evalúen plataformas de credenciales digitales con rigor técnico, operativo, legal y funcional.",
    url: "https://merahki.ai/blog/guia-credenciales-digitales",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/blog/guia-credenciales-digitales" },
};

export default function GuiaCredencialesDigitales() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "35%" }}
          rustPosition={{ x: "75%", y: "65%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Blog &amp; Articles
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Due Diligence</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Auditoría técnica</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Credenciales Digitales</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Cómo evaluar y elegir una{" "}
              <span className="text-gradient-peach-purple">plataforma de credenciales</span>{" "}
              digitales
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              Marco completo de due diligence, auditoría técnica, validación funcional, pruebas de verificabilidad, checklist documental, formulario maestro y matriz comparativa para universidades e instituciones educativas.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-white/40 border-t border-white/10 pt-6">
              <span>merahki.ai</span>
              <span>·</span>
              <span>Abril 2026</span>
              <span>·</span>
              <span>v1.0</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Idea central */}
      <section className="relative py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Idea central</p>
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                No alcanza con comparar demos, claims comerciales o listas de features. Una institución debe exigir{" "}
                <span className="text-white font-bold">evidencia verificable</span>: estándares implementados, certificaciones vigentes, pruebas funcionales, integraciones comprobadas, arquitectura de datos, controles de privacidad, continuidad operativa y una auditoría real de verificabilidad de la credencial.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* TOC */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Contenido de esta guía</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ["01", "Objetivo, alcance y principios de evaluación"],
                  ["02", "Proceso recomendado de selección"],
                  ["03", "Qué pedir obligatoriamente al proveedor"],
                  ["04", "Dimensiones de evaluación y evidencia exigible"],
                  ["05", "Cómo validar las funcionalidades declaradas"],
                  ["06", "Auditoría técnica y verificabilidad en blockchain"],
                  ["07", "Red flags y causales de descarte"],
                  ["08", "Formulario maestro de evaluación institucional"],
                  ["09", "Guion de demo, piloto y pruebas"],
                  ["10", "Metodología de scoring y matriz comparativa"],
                  ["11", "Evaluación económica, contractual y plan de salida"],
                  ["12", "Recomendación institucional final"],
                  ["A", "Checklist rápida de descarte"],
                  ["B", "Plantilla resumida para RFI/RFP"],
                  ["C", "Referencias de estándares y marcos utilizados"],
                ].map(([num, title]) => (
                  <div key={num} className="flex items-baseline gap-3 py-2 border-b border-white/06">
                    <span className="font-mono text-purple-400/70 text-sm min-w-[28px]">{num}</span>
                    <span className="text-white/80 text-sm leading-snug">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §1 Objetivo y principios */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">01 · Objetivo, alcance y principios</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Una evaluación rigurosa, no una <span className="text-gradient-peach-purple">demo comercial</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">Este documento está diseñado para que una universidad pueda evaluar con rigor técnico, operativo, legal y funcional una plataforma de credenciales digitales antes de contratarla. Puede utilizarse como guía de mercado, documento interno de comité, checklist de due diligence, formulario de RFI/RFP, base para una prueba piloto y matriz de comparación entre múltiples proveedores.</p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">La institución no está comprando solamente una herramienta para emitir badges o certificados visualmente atractivos. Está eligiendo <strong className="text-white font-semibold">infraestructura crítica</strong> para reputación digital, verificación, portabilidad, trazabilidad, privacidad, empleabilidad, integración académica y continuidad futura.</p>
              <h3 className="text-xl font-bold text-white mb-4">Seis principios rectores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  ["01", "Priorizar interoperabilidad y portabilidad", "La institución debe evitar quedar atada a un proveedor o a un visor propietario."],
                  ["02", "Distinguir estándar, implementación y certificación", "Decir que una plataforma «soporta» un estándar no equivale a demostrar una implementación real y verificable."],
                  ["03", "Evaluar el producto completo, no solo la emisión", "Deben analizarse emisión, verificación, revocación, correcciones, experiencia del receptor, integraciones, analytics, gobierno operativo y salida futura."],
                  ["04", "Pedir evidencia y no solo afirmaciones", "Cada claim relevante debe venir acompañado de documentos, pruebas, sandbox, logs, certificados, reportes o referencias verificables."],
                  ["05", "Comparar con casos de uso reales", "La validación debe hacerse con escenarios concretos: diploma, microcredencial con skills, badge apilable, integración con LMS/SIS, verificación pública y revocación."],
                  ["06", "Tomar una decisión con criterios ponderados", "Debe existir scoring, umbrales mínimos y red flags de descarte."],
                ].map(([num, title, desc]) => (
                  <div key={num} className="glass-card rounded-2xl p-6">
                    <span className="text-xs font-mono text-purple-400/80 font-semibold">{num}</span>
                    <h4 className="text-white font-bold mt-2 mb-2 text-base">{title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Diez dominios del alcance mínimo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Seguridad de la información",
                  "Estándares abiertos e interoperabilidad",
                  "Cumplimiento regulatorio y certificaciones",
                  "Blockchain, verificabilidad y auditoría de credenciales",
                  "Funcionalidades de producto y experiencia del usuario",
                  "Integraciones, APIs, LMS, SIS, SSO y webhooks",
                  "Privacidad, consentimiento y gobierno de datos",
                  "Infraestructura en nube, continuidad y resiliencia",
                  "Monitoreo, trazabilidad y auditoría operativa",
                  "Sostenibilidad operativa, soporte, roadmap y plan de salida",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2.5 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §2 Proceso */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">02 · Proceso recomendado de selección</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Siete fases. <span className="text-gradient-peach-purple">Saltar etapas</span> sale caro.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Saltarse etapas suele generar compras basadas en discurso comercial, costos ocultos y migraciones traumáticas.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Fase", "Objetivo", "Entregable", "Qué valida", "Señal de avance"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1. Definición interna", "Alinear objetivos académicos, técnicos, legales y de empleabilidad", "Casos de uso priorizados, criterios de éxito y responsables", "Qué se quiere emitir y para qué", "La institución sabe exactamente qué necesita"],
                      ["2. RFI inicial", "Filtrar proveedores que no cumplen mínimos", "Respuesta documental y evidencias", "Seriedad, estándar, certificaciones, integraciones y soporte", "Quedan solo proveedores viables"],
                      ["3. Demo guiada", "Comparar flujos reales bajo el mismo guion", "Acta de demo con observaciones", "Claims comerciales y UX real", "Se valida lo que el proveedor dice tener"],
                      ["4. Due diligence", "Revisar seguridad, privacidad, arquitectura y cumplimiento", "Checklist completo con semáforos", "Riesgos ocultos no visibles en una demo", "Se detectan debilidades estructurales"],
                      ["5. Piloto controlado", "Probar con datos y procesos reales", "Resultados del piloto y feedback", "Operación real, tiempos y adopción", "Se comprueba que funciona en contexto institucional"],
                      ["6. Evaluación económica y contractual", "Entender costo total y salida futura", "TCO, SLA, DPA, plan de salida", "Costos ocultos, lock-in y continuidad", "La comparación económica es realista"],
                      ["7. Decisión e implementación", "Elegir y arrancar con gobernanza clara", "Matriz final y plan de rollout", "Madurez global del proveedor", "Inicio con responsables, KPIs y alcance"],
                    ].map(([fase, ...cols]) => (
                      <tr key={fase} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{fase}</td>
                        {cols.map((c, i) => <td key={i} className="px-4 py-3 text-white/70 text-sm">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 glass-card rounded-2xl p-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-3">Recomendación práctica</p>
                <p className="text-white/90 leading-relaxed">El proveedor <strong className="text-white">no debería ver</strong> la ponderación completa antes de responder. Primero debe entregar evidencia; luego la universidad aplica el scoring. Esto evita respuestas «optimizadas» para un formulario sin sustento real.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* §3 Qué pedir */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">03 · Qué pedir obligatoriamente al proveedor</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">La <span className="text-gradient-peach-purple">carpeta mínima</span> de evidencias.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Si el proveedor no puede o no quiere entregarla, ya existe una señal de riesgo.</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Documento / evidencia", "Por qué importa", "Aceptable si…"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ficha técnica del producto y arquitectura", "Permite entender alcance real, límites, módulos, dependencias y modelo de datos", "Describe entornos, arquitectura, flujos principales, módulos, APIs y dependencias"],
                      ["Documentación de APIs + sandbox", "Valida integrabilidad real", "Incluye endpoints, autenticación, ejemplos, rate limits, versionado y ambiente de prueba"],
                      ["Matriz de estándares soportados", "Evita claims vagos", "Indica estándar exacto, versión, alcance y evidencia de conformidad"],
                      ["Listado de certificaciones vigentes", "Comprueba madurez", "Incluye organismo, vigencia, alcance y fecha de auditoría"],
                      ["DPA/DPSA y política de privacidad", "Revisa obligaciones legales", "Aclara roles, subprocesadores, transferencias internacionales y derechos del titular"],
                      ["Listado de subprocesadores", "Muestra la cadena de tratamiento de datos", "Incluye proveedor, función, país y medidas contractuales"],
                      ["SLA y esquema de soporte", "Permite exigir servicio", "Define tiempos, canales, severidades, escalamiento y cobertura horaria"],
                      ["Plan de continuidad / disaster recovery", "Evalúa resiliencia", "Indica backups, RTO, RPO y pruebas periódicas"],
                      ["Informe de pentest o carta ejecutiva", "Mide seguridad real", "Es reciente, de tercero independiente y con remediaciones documentadas"],
                      ["Clientes de referencia", "Contrasta discurso con uso real", "Hay casos comparables a la institución"],
                      ["Plan de salida", "Evita lock-in", "Explica exportación, continuidad de verificación, revocaciones y costos de salida"],
                    ].map(([doc, why, cond]) => (
                      <tr key={doc} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{doc}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{why}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{cond}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* §4 Dimensiones */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">04 · Dimensiones de evaluación y evidencia exigible</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Diez pilares. Cada uno con evidencia <span className="text-gradient-peach-purple">documentable</span>.</h2>
              <div className="space-y-4">
                {[
                  {
                    num: "4.1", title: "Seguridad de la información", gradient: "text-gradient-blue-pink",
                    items: ["Autenticación multifactor obligatoria para perfiles administrativos y emisores.", "Gestión de roles con principio de menor privilegio y revocación inmediata de accesos.", "Cifrado en tránsito con TLS 1.2 o superior y cifrado en reposo, idealmente AES-256.", "Logs auditables de acceso, cambios de permisos, emisión, revocación, exportación y eventos críticos.", "Escaneos de vulnerabilidades, pentests externos, SDLC seguro, revisión de código y gestión de dependencias.", "Plan de respuesta a incidentes, responsables claros y SLA de notificación."],
                    how: "Pedir demostración en vivo de alta, cambio de rol y revocación; solicitar logs; pedir evidencia de políticas de cifrado y un resumen ejecutivo de las auditorías de seguridad."
                  },
                  {
                    num: "4.2", title: "Estándares abiertos e interoperabilidad", gradient: "text-gradient-purple-blue",
                    items: ["Open Badges 3.0 implementado de manera nativa, no solo mencionado comercialmente.", "W3C Verifiable Credentials cuando el producto afirma emitir credenciales verificables alineadas a ese modelo.", "CLR cuando el proyecto necesita un registro longitudinal o académico más amplio.", "LTI 1.3, OneRoster, CASE u otros marcos cuando la institución necesita integraciones académicas formales.", "European Learning Model (ELM) y compatibilidad con Europass para alineación con el ecosistema europeo, movilidad académica, portabilidad semántica o emisión de credenciales compatibles con European Digital Credentials for Learning.", "Posibilidad de exportación en formatos estándar y validación con herramientas independientes."],
                    how: "Para cualquier estándar: versión exacta, alcance concreto, ejemplos emitidos, documentación, validadores externos y, cuando exista, certificación o presencia en directorios oficiales."
                  },
                  {
                    num: "4.3", title: "Cumplimiento regulatorio y certificaciones", gradient: "text-gradient-blue-pink",
                    items: ["ISO/IEC 27001 vigente para gestión de seguridad de la información.", "SOC 2 Type II cuando aplique, cubriendo Security, Availability, Confidentiality, Processing Integrity y Privacy.", "Cumplimiento con GDPR, LGPD, CCPA, LFPDPPP, FERPA u otras normas relevantes.", "DPA/DPSA claros, subprocesadores identificados y mecanismos de transferencia internacional."],
                    how: "No aceptar respuestas genéricas del tipo «cumplimos con GDPR». Deben pedirse roles contractuales, políticas, flujos de derechos del titular, mapa de datos y mecanismos concretos de eliminación, exportación y respuesta a incidentes."
                  },
                  {
                    num: "4.4", title: "Blockchain y verificabilidad", gradient: "text-gradient-purple-blue",
                    items: ["Declaración precisa de qué blockchain se usa y qué función cumple.", "Explicación exacta de qué se registra on-chain y qué se mantiene off-chain.", "Confirmación de que no se almacenan datos personales en blockchain.", "Existencia de validador público y posibilidad de comprobación independiente en explorer.", "Capacidad de auditar hash, timestamp, estado y trazabilidad de una credencial."],
                    how: null
                  },
                  {
                    num: "4.5", title: "Funcionalidades técnicas del producto", gradient: "text-gradient-peach-purple",
                    items: ["Emisión individual y masiva.", "Templates, branding, múltiples idiomas, unidades académicas y permisos por rol.", "Skills, competencias, outcomes, evidencias, rúbricas, pathways, stackability y relaciones entre credenciales.", "Revocación, expiración, renovación, reemisión, corrección controlada y versionado.", "Wallet o locker del receptor, sharing, descarga, verificación pública, accesibilidad y experiencia móvil.", "Analytics operativos y reportes útiles para gestión académica y empleabilidad."],
                    how: null
                  },
                  {
                    num: "4.6", title: "Integraciones y APIs", gradient: "text-gradient-blue-pink",
                    items: ["APIs documentadas, autenticación clara, sandbox, ejemplos, límites, versionado y backward compatibility.", "SSO con SAML 2.0, OAuth 2.0 u OpenID Connect según el caso.", "LMS, SIS, CRM, ERP, HRIS, plataformas de assessment y mensajería.", "Webhooks o eventos para emisión, revocación, claim, expiración u otros flujos.", "LTI 1.3 y otros marcos edtech cuando corresponda."],
                    how: null
                  },
                  {
                    num: "4.7", title: "Privacidad y gestión de datos", gradient: "text-gradient-purple-blue",
                    items: ["Mapa exacto de datos personales y académicos: obligatorios, opcionales y derivados.", "Ubicación de datos por ambiente y por cliente.", "Retención, eliminación, corrección, anonimización, exportación y derecho de acceso.", "Consentimiento explícito cuando corresponda y registro auditable de ese consentimiento.", "Capacidad de separar continuidad de verificación de eliminación de datos personales."],
                    how: null
                  },
                  {
                    num: "4.8", title: "Infraestructura en nube", gradient: "text-gradient-peach-purple",
                    items: ["Región o país de hosting.", "Redundancia, backups, alta disponibilidad y arquitectura multi-tenant o single-tenant.", "RTO, RPO, continuidad operativa y pruebas de disaster recovery.", "Gestión de secretos, llaves y ambientes separados."],
                    how: null
                  },
                  {
                    num: "4.9", title: "Monitoreo y auditoría", gradient: "text-gradient-blue-pink",
                    items: ["Retención de logs y nivel de detalle.", "Alertas de seguridad y trazabilidad de acciones administrativas.", "Integridad de registros, exportabilidad y soporte a análisis forense.", "Paneles o reportes de monitoreo para la institución."],
                    how: null
                  },
                  {
                    num: "4.10", title: "Sostenibilidad operativa", gradient: "text-gradient-purple-blue",
                    items: ["Roadmap claro y consistencia del producto.", "Equipo de soporte y capacidad real de implementación.", "Viabilidad de negocio y continuidad del proveedor.", "Comunidad, alianzas, referencias y estabilidad del servicio."],
                    how: null
                  },
                ].map(({ num, title, gradient, items, how }) => (
                  <div key={num} className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-purple-400/70 text-sm shrink-0 pt-1">{num}</span>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 ${gradient}`}>{title}</h3>
                        <ul className="space-y-2 mb-4">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                              <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {how && (
                          <div className="rounded-xl p-4 border border-orange-400/15" style={{background: "rgba(170,60,8,0.20)"}}>
                            <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-2">Cómo validarlo</p>
                            <p className="text-white/85 text-sm leading-relaxed">{how}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §5 Validar funcionalidades */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">05 · Cómo validar las funcionalidades declaradas</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dos proveedores pueden decir <span className="text-gradient-peach-purple">&ldquo;sí&rdquo;</span> a lo mismo y ofrecer productos <span className="text-gradient-blue-pink">radicalmente distintos</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Una funcionalidad solo debe considerarse disponible si fue documentada y además demostrada end-to-end.</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Exigir una demostración sobre un guion común preparado por la universidad.",
                  "Pedir acceso temporal a sandbox o tenant de prueba.",
                  "Solicitar documentación, capturas, video corto o walkthrough por cada feature crítica.",
                  "Usar un caso de prueba propio de la institución con datos reales o semi-reales.",
                  "Verificar la funcionalidad de punta a punta: configuración, emisión, experiencia del alumno, verificación externa, corrección posterior y administración.",
                  "Registrar evidencia en acta con semáforo: existe, existe parcialmente, requiere desarrollo adicional, depende de partner/servicio profesional o no existe.",
                  "No puntuar roadmap, marketplace o dependencia de terceros como funcionalidad nativa disponible.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-white mb-4">Nueve pruebas con score 0–5</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Feature crítica", "Prueba exigida", "Resultado esperado"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Emisión masiva", "Emitir lote real con archivo de prueba", "Se emiten correctamente, con trazabilidad y errores controlados"],
                      ["Verificación pública", "Validar credencial sin login desde enlace externo", "Verificación clara, pública y consistente"],
                      ["Revocación", "Revocar y volver a validar", "El estado cambia correctamente y queda auditado"],
                      ["Corrección / actualización", "Editar dato permitido o reemitir según política", "Se mantiene traza y coherencia del historial"],
                      ["Skills / competencias", "Mapear skill, nivel, evidencia y criterio", "La estructura queda visible y verificable"],
                      ["LTI / LMS", "Lanzar desde el LMS y capturar contexto", "El flujo funciona con el estándar declarado"],
                      ["API de emisión", "Emitir desde API con credenciales de prueba", "La emisión funciona con auth y respuesta documentadas"],
                      ["Analytics", "Extraer dashboard o reporte útil", "Los datos son utilizables para gestión"],
                      ["Exportación", "Descargar datos y credenciales", "El formato es estándar y utilizable"],
                    ].map(([feat, test, result]) => (
                      <tr key={feat} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{feat}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{test}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* §6 Blockchain */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">06 · Auditoría técnica y verificabilidad en blockchain</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">La palabra <span className="text-gradient-peach-purple">&ldquo;blockchain&rdquo;</span> se usa con frecuencia sin rigor técnico.</h2>
              <div className="glass-card rounded-2xl p-6 mb-8" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-3">Advertencia crítica</p>
                <p className="text-white/90 leading-relaxed">Esta sección describe cómo auditar si una credencial realmente fue registrada de forma correcta y verificable, o si el proveedor solo exhibe una narrativa de marketing.</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.1 · Siete preguntas no negociables al proveedor</h3>
              <ul className="space-y-3 mb-8">
                {[
                  ["¿Qué blockchain utiliza exactamente?", "Ethereum, Polygon, LACNet, Bitcoin, Solana, Hyperledger, cadena privada, sidechain u otra."],
                  ["¿Quién opera los nodos", "y si la red es pública, permisionada o completamente privada."],
                  ["¿Qué dato registra on-chain:", "hash, identificador, prueba criptográfica, evento de contrato, metadata mínima o la credencial completa."],
                  ["¿Qué dato se guarda off-chain", "y dónde se aloja."],
                  ["¿Cómo se realiza la validación", "de integridad de una credencial y cómo se prueba la revocación."],
                  ["¿Cómo evita", "almacenar datos personales en blockchain."],
                  ["¿Cuál es la relación", "entre el viewer de la credencial, el botón de validación y la transacción que muestra el explorer."],
                ].map(([q, rest]) => (
                  <li key={q} className="flex items-start gap-3 text-sm leading-relaxed list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                    <span className="text-white/70"><strong className="text-white">{q}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-white mb-4">6.2 · Procedimiento obligatorio de auditoría on-chain (10 pasos)</h3>
              <div className="glass-card rounded-2xl p-6 mb-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-white/90 leading-relaxed">La universidad debe entrar en una <strong className="text-white">credencial real</strong> del proveedor, validar la credencial apretando el botón de validación, luego hacer click en el hashtag, ícono o enlace de blockchain que muestra la credencial, y recién allí verificar en el explorer que la transacción fue correcta. La transacción no puede estar en estado <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">failed</code>, <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">reverted</code> o <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">dropped</code>.</p>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  ["01", "Entrar en una credencial real del proveedor, preferentemente una credencial pública emitida por un cliente o por el propio proveedor."],
                  ["02", "Usar el botón de validación de la credencial. El validador debe confirmar el estado de la credencial y exponer, directa o indirectamente, el vínculo con la prueba criptográfica o transacción."],
                  ["03", "Hacer click en el hashtag, ícono o enlace de blockchain que muestra la credencial o el validador. Ese link debería llevar a un blockchain explorer o a una referencia equivalente verificable públicamente."],
                  ["04", "Una vez en el explorer, verificar que la transacción exista y que su estado sea exitoso. No debe figurar como failed, reverted, dropped, cancelled ni con estados equivalentes según la cadena."],
                  ["05", "Revisar el hash de transacción, timestamp, bloque, dirección o contrato involucrado y consistencia con la fecha de emisión de la credencial."],
                  ["06", "Revisar todos los tabs relevantes del explorer: Overview, Logs, Token Transfers, Internal Transactions, Events o State. La revisión no debe quedarse solo en la portada de la transacción."],
                  ["07", "Confirmar que no exista una situación engañosa en la que el explorer muestre una transacción fallida, sin token transfers, o con failed internal transactions."],
                  ["08", "Verificar que el dato grabado o el evento emitido esté razonablemente conectado con la credencial auditada. Si el proveedor solo muestra un link genérico al explorer sin forma de vincularlo, la prueba no alcanza."],
                  ["09", "Repetir la validación en más de una credencial si es posible: una activa, una revocada y una recién emitida."],
                  ["10", "Documentar capturas, URLs, estado de transacción y cualquier inconsistencia detectada."],
                ].map(([n, text]) => (
                  <div key={n} className="flex gap-4 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/80 text-sm font-semibold min-w-[32px]">{n}</span>
                    <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.3 · Matriz operativa de revisión del explorer</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Elemento", "Qué debería verse", "Red flag"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Estado / Status", "Success, confirmed o equivalente. Debe existir la transacción y haber sido procesada correctamente.", "Failed, reverted, dropped, cancelled, pending indefinido o error sin explicación."],
                      ["Token Transfers", "Solo si el modelo realmente implica minting o transferencia. Deben ser coherentes con la credencial auditada.", "No hay transfers cuando el proveedor afirma minting/NFT; transfers inconsistentes con fecha, contrato o receptor."],
                      ["Internal Transactions", "Deben ser coherentes con la lógica del contrato, o no existir si la arquitectura no las usa.", "Failed internal transactions, reverts o trazas inconsistentes sin explicación técnica suficiente."],
                      ["Logs / Events", "Eventos del contrato o logs que permitan vincular la evidencia on-chain con la credencial.", "No hay forma de conectar la credencial con el evento, o los logs contradicen lo que dice el visor."],
                      ["Timestamp, bloque y contrato", "Deben ser consistentes con fecha de emisión, red y contrato declarados por el proveedor.", "Diferencias temporales relevantes, contrato no identificado o red distinta a la declarada."],
                    ].map(([elem, should, flag]) => (
                      <tr key={elem} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{elem}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{should}</td>
                        <td className="px-4 py-3 text-pink-400/80 text-sm">{flag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-8 glass-card rounded-xl p-4">No todas las arquitecturas registran una credencial como token transfer. Algunas registran solo hashes, eventos o pruebas criptográficas. La verificación no consiste en «ver un NFT», sino en entender si la <strong className="text-white">prueba on-chain real existe, fue exitosa y está vinculada</strong> de manera consistente con la credencial auditada.</p>
              <h3 className="text-xl font-bold text-white mb-4">6.4 · Seis pruebas prácticas mínimas de verificabilidad</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  ["Prueba 1", "Generación de credencial test", "Pedir una credencial de prueba, descargarla o verla en el viewer y extraer sus identificadores."],
                  ["Prueba 2", "Verificación independiente del hash o txid", "Usar el explorer directamente y no depender solo del viewer del proveedor."],
                  ["Prueba 3", "Validación de firma criptográfica", "O de estructura verificable, cuando el estándar lo permita."],
                  ["Prueba 4", "Revocación", "Revocar la credencial de prueba y comprobar que el estado cambia en el validador y, cuando aplica, en la evidencia on-chain."],
                  ["Prueba 5", "Validador público", "Comprobar que una tercera parte puede verificar la credencial sin login y sin exponer datos innecesarios."],
                  ["Prueba 6", "Portabilidad", "Exportar la credencial o sus metadatos en formato estándar y comprobar que siguen siendo utilizables."],
                ].map(([label, title, desc]) => (
                  <div key={label} className="glass-card rounded-2xl p-5">
                    <p className="text-xs font-mono text-purple-400/80 font-semibold mb-2">{label}</p>
                    <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
                    <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.5 · Nueve red flags de blockchain-washing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "No pueden explicar qué blockchain usan exactamente.",
                  "No pueden mostrar una transacción real en un explorer público o verificable.",
                  "La validación solo funciona dentro del visor propietario.",
                  "El botón de validación no expone evidencia verificable independiente.",
                  "El explorer muestra transacciones failed, internal transactions fallidas o inconsistencias temporales.",
                  "No se puede vincular razonablemente la credencial con el dato on-chain.",
                  "Guardan o parecen guardar datos personales directamente en blockchain.",
                  "Cobran por verificar credenciales o la verificación depende enteramente de la continuidad comercial del proveedor.",
                  "Hablan de «inmutabilidad» o «NFT» sin poder mostrar pruebas técnicas auditables.",
                ].map((flag) => (
                  <div key={flag} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 shrink-0" style={{boxShadow: "0 0 8px rgba(236,72,153,0.6)"}} />
                    <span className="text-white/70 text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §7 Red flags */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">07 · Red flags y causales de descarte</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Situaciones que <span className="text-gradient-blue-pink">justifican detener</span> una evaluación.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Salvo que el proveedor pueda remediarlas con evidencia fuerte y verificable.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Ausencia de documentación técnica relevante.",
                  "Negativa a mostrar sandbox o pruebas funcionales.",
                  "Claims de estándares sin documentación, validadores ni ejemplos.",
                  "Falta de respuesta sobre subprocesadores, ubicación de datos o DPA/DPSA.",
                  "Ausencia de MFA para emisores y administradores.",
                  "Imposibilidad de exportar datos y credenciales en formatos útiles.",
                  "Falta de plan de salida o continuidad de verificación al terminar el contrato.",
                  "Uso ambiguo de blockchain sin prueba independiente.",
                  "Certificaciones vencidas, parciales o no aplicables al servicio ofrecido.",
                  "Roadmap presentado como producto disponible.",
                ].map((flag) => (
                  <div key={flag} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 shrink-0" style={{boxShadow: "0 0 8px rgba(236,72,153,0.6)"}} />
                    <span className="text-white/70 text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §8 Formulario maestro */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">08 · Formulario maestro de evaluación institucional</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo se <span className="text-gradient-purple-blue">califica cada ítem</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Esta batería puede utilizarse como formulario de RFI/RFP o de due diligence. Se recomienda pedir respuestas con evidencia adjunta y marcar cada ítem como: <strong className="text-white">Documentado · Demostrado · Certificado · Pendiente · No disponible</strong>.</p>
              {[
                {
                  num: "8.1", title: "Producto y alcance funcional",
                  questions: [
                    "¿Qué tipos de credenciales emite y gestiona la plataforma?",
                    "¿Soporta emisión individual y masiva, renovación, expiración, revocación, reemisión y versionado?",
                    "¿Permite skills, competencias, resultados de aprendizaje, evidencias, rúbricas o alineaciones?",
                    "¿Soporta pathways, stackability, equivalencias o relaciones entre credenciales?",
                    "¿Permite múltiples marcas, unidades académicas, campus, idiomas y permisos por rol?",
                  ],
                },
                {
                  num: "8.2", title: "Estándares e interoperabilidad",
                  questions: [
                    "¿Qué estándares soporta exactamente? Indicar versión y alcance: Open Badges, W3C Verifiable Credentials, CLR, European Learning Model (ELM), Europass / European Digital Credentials for Learning, LTI, OneRoster, CASE u otros.",
                    "¿El proveedor puede demostrar compatibilidad semántica y/o interoperabilidad práctica con Europass o con el European Learning Model (ELM)? Adjuntar mapeo de campos, ejemplos emitidos, validación y evidencia funcional.",
                    "¿Qué partes del estándar están implementadas nativamente y cuáles requieren desarrollo adicional?",
                    "¿Existe certificación externa, validación o presencia en directorios oficiales?",
                    "¿Cómo se maneja la verificación criptográfica, la revocación y la portabilidad entre sistemas?",
                    "¿Qué dependencia existe de viewers o wallets propietarias?",
                  ],
                },
                {
                  num: "8.3", title: "Integraciones",
                  questions: [
                    "¿Qué APIs ofrece? Adjuntar documentación, autenticación, rate limits y versionado.",
                    "¿Cuenta con webhooks, colas, exportaciones programadas o conectores nativos?",
                    "¿Qué integraciones tiene con LMS, SIS, CRM, ERP, HRIS, assessment platforms y SSO?",
                    "¿Puede operar con SAML, OAuth 2.0, OpenID Connect o SCIM donde corresponda?",
                    "¿Cómo se sincronizan alumnos, cursos, resultados, cohortes y cambios?",
                  ],
                },
                {
                  num: "8.4", title: "Seguridad",
                  questions: [
                    "¿Requiere MFA para perfiles administradores y emisores?",
                    "¿Cómo se gestiona el acceso privilegiado, la segregación por tenant y la revocación inmediata de usuarios?",
                    "¿Qué cifrado utiliza en tránsito y en reposo?",
                    "¿Conserva logs auditables? ¿Por cuánto tiempo? ¿Cómo garantiza integridad y monitoreo?",
                    "¿Con qué frecuencia realiza escaneos de vulnerabilidades y pentests externos?",
                    "¿Qué prácticas de SDLC seguro, revisión de código, gestión de dependencias y CI/CD aplica?",
                    "¿Cuál es su proceso de gestión de incidentes y notificación a clientes?",
                  ],
                },
                {
                  num: "8.5", title: "Privacidad y datos",
                  questions: [
                    "¿Qué datos personales y académicos almacena exactamente? Separar obligatorios, opcionales y derivados.",
                    "¿Dónde se alojan los datos por ambiente y por cliente? Indicar país o región.",
                    "¿Quiénes son sus subprocesadores y qué rol cumplen?",
                    "¿Cómo se gestionan retención, borrado, anonimización, corrección y exportación?",
                    "¿Qué mecanismos usa para transferencias internacionales de datos?",
                    "¿Cómo aborda GDPR, FERPA y legislación local aplicable?",
                  ],
                },
                {
                  num: "8.6", title: "Operación y servicio",
                  questions: [
                    "¿Cuál es el SLA estándar y qué incluye el soporte?",
                    "¿Qué idioma y huso horario cubre el soporte?",
                    "¿Cómo se implementa, cuánto dura y qué depende del cliente?",
                    "¿Qué formación ofrece a administradores, emisores y soporte interno?",
                    "¿Qué referencias comparables puede compartir?",
                  ],
                },
                {
                  num: "8.7", title: "Contrato, costos y salida",
                  questions: [
                    "Describir el modelo de pricing y todos los componentes facturables.",
                    "Indicar límites de uso, storage, emisores, templates, integraciones, wallets, analytics y ambientes.",
                    "¿Qué ocurre al terminar el contrato con verificación, hosting y exportación de datos?",
                    "¿Existe costo por migración, salida o continuidad de verificación?",
                    "¿La universidad conserva propiedad y control sobre sus datos y metadatos?",
                  ],
                },
              ].map(({ num, title, questions }) => (
                <div key={num} className="mb-6 glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-purple-400/70 text-sm">{num}</span>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div className="space-y-2">
                    {questions.map((q, i) => (
                      <div key={i} className="flex items-start gap-3 py-2 border-b border-white/06">
                        <span className="font-mono text-purple-400/50 text-xs min-w-[24px] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-white/70 text-sm leading-relaxed">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* §9 Guion demo */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">09 · Guion de demo, piloto y pruebas</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Doce pasos del <span className="text-gradient-blue-pink">piloto</span>.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Configurar una credencial con branding institucional, metadatos, criterios y evidencias.",
                  "Emitir una credencial individual y un lote masivo.",
                  "Asignar skills o competencias y mostrarlas en la credencial o en su detalle.",
                  "Realizar claim por parte del receptor y compartirla externamente.",
                  "Verificar la credencial desde fuera de la plataforma.",
                  "Auditar el botón de validación y el enlace a blockchain/explorer cuando exista.",
                  "Revocar una credencial y verificar el cambio de estado.",
                  "Corregir un dato permitido y revisar la trazabilidad.",
                  "Consumir una API o webhook de ejemplo.",
                  "Mostrar permisos por rol y segregación por unidades académicas.",
                  "Exportar datos, metadatos y evidencias relevantes.",
                  "Probar accesibilidad, experiencia móvil y multilenguaje cuando sea requisito.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/80 text-sm font-semibold min-w-[28px]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §10 Scoring */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">10 · Metodología de scoring</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Escala <span className="text-gradient-purple-blue">0 – 5</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">El scoring debe aplicarse solamente a funcionalidades o controles documentados y demostrados. El roadmap no se puntúa como disponibilidad actual.</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Score", "Significado", "Interpretación", "Aceptación"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0", "#ec4899", "No cumple", "No implementado o explícitamente no soportado", "🔴 Rechazo"],
                      ["1", "#f4a27a", "Muy débil / roadmap", "Prometido o parcialmente conceptual", "🟠 No contar como feature disponible"],
                      ["2", "#f4a27a", "Parcial", "Existe con limitaciones significativas", "🟠 Requiere investigación adicional"],
                      ["3", "#a855f7", "Adecuado", "Implementado correctamente y con evidencia suficiente", "🟣 Cumple mínimo"],
                      ["4", "#3b82f6", "Sólido", "Implementado robustamente y con auditoría o madurez comprobable", "🟢 Muy buen nivel"],
                      ["5", "#3b82f6", "Excelente", "Implementación excepcional, transparente y líder", "🟢 Fortaleza clara"],
                    ].map(([score, color, sig, interp, acept]) => (
                      <tr key={score} className="border-b border-white/08">
                        <td className="px-4 py-3 font-mono font-bold text-2xl" style={{color}}>{score}</td>
                        <td className="px-4 py-3 text-white font-semibold text-sm">{sig}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{interp}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{acept}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ponderación sugerida por dimensión</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        {["Dimensión", "Peso", "Umbral mín."].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Estándares e interoperabilidad", "20%", "≥ 3/5"],
                        ["Funcionalidad del producto", "20%", "≥ 3/5"],
                        ["Seguridad", "15%", "≥ 4/5"],
                        ["Privacidad y datos", "15%", "≥ 4/5"],
                        ["Blockchain y verificabilidad", "10%", "≥ 3/5"],
                        ["Integraciones y APIs", "10%", "≥ 3/5"],
                        ["Operación y soporte", "5%", "≥ 3/5"],
                        ["Economía total", "3%", "≥ 3/5"],
                        ["Plan de salida / no lock-in", "2%", "≥ 3/5"],
                      ].map(([dim, peso, umbral]) => (
                        <tr key={dim} className="border-b border-white/08">
                          <td className="px-4 py-2 text-white text-sm">{dim}</td>
                          <td className="px-4 py-2 font-mono text-purple-400 text-sm">{peso}</td>
                          <td className="px-4 py-2 text-white/70 text-sm">{umbral}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-3">Fórmula sugerida</p>
                    <code className="text-white/90 text-sm leading-relaxed font-mono">Score final = Σ (score dimensión × peso)</code>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-3">Interpretación</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-white/70"><strong className="text-white">≥ 4.0</strong> · recomendado</li>
                      <li className="text-white/70"><strong className="text-white">3.0 – 3.9</strong> · aceptable con reservas</li>
                      <li className="text-white/70"><strong className="text-white">&lt; 3.0</strong> · no recomendado</li>
                    </ul>
                  </div>
                  <div className="rounded-xl p-5 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))"}}>
                    <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-2">Regla de gobierno</p>
                    <p className="text-white/85 text-sm leading-relaxed">Aunque el promedio general sea alto, un proveedor no debería aprobar si no alcanza los mínimos en <strong className="text-white">seguridad, privacidad o verificabilidad</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* §11 Económica */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">11 · Evaluación económica, contractual y plan de salida</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Costo total, <span className="text-gradient-purple-blue">TCO real</span> y salida.</h2>
              <ul className="space-y-3">
                {[
                  "Revisar precio por emisor, por alumno, por credencial, por módulo, por integración o por storage.",
                  "Identificar costos ocultos: implementación, branding, APIs, analytics, soporte premium, migración, wallet, templates, ambientes y training.",
                  "Exigir SLA, DPA, límites de responsabilidad, subprocesadores, continuidad, backups y tratamiento de incidentes.",
                  "Confirmar qué ocurre al finalizar el contrato: exportación de datos, revocaciones, continuidad de verificación, costos y formato de entrega.",
                  "Verificar que la universidad conserve propiedad y control sobre datos, metadatos y evidencias que le pertenecen.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2.5 shrink-0" />
                    <span className="text-white/70 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* §12 Recomendación final */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">12 · Recomendación institucional final</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">No elegir por <span className="text-gradient-peach-purple">estética</span> ni por <span className="text-gradient-blue-pink">discurso comercial</span>.</h2>
              <div className="space-y-4">
                <p className="text-white/70 text-lg leading-relaxed">Una universidad debería elegir una plataforma por capacidad demostrada para <strong className="text-white">emitir, verificar, integrar, preservar, proteger y gobernar</strong> credenciales y datos con estándares abiertos, evidencia verificable y un costo total entendible.</p>
                <p className="text-white/70 text-lg leading-relaxed">La mejor práctica es combinar formulario documental, demo guiada, due diligence, piloto real, scoring ponderado y revisión contractual. Cuando un proveedor realmente tiene la capacidad que declara, este proceso lo fortalece. Cuando no la tiene, este proceso lo expone.</p>
                <p className="text-white/70 text-lg leading-relaxed">Toda evaluación madura debería incluir la <strong className="text-white">auditoría práctica de una credencial real</strong> y de su evidencia de validación. Si la credencial no puede validarse de manera confiable e independiente, la promesa de verificabilidad queda seriamente debilitada.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Anexo A */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Anexo A · Checklist rápida de descarte</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ocho preguntas de <span className="text-gradient-blue-pink">semáforo</span>.</h2>
              <div className="space-y-3 mb-6">
                {[
                  "¿Tiene ISO 27001 vigente y, si aplica, SOC 2 Type II?",
                  "¿Implementa estándares abiertos con versión exacta y evidencia real?",
                  "¿Puede demostrar, cuando lo declara, compatibilidad real con Europass y/o con el European Learning Model (ELM), con evidencia técnica y validación funcional?",
                  "¿Se puede verificar una credencial independientemente y auditar su evidencia técnica?",
                  "¿Tiene APIs documentadas, sandbox y logs auditables?",
                  "¿Cumple privacidad y evita almacenar datos personales en blockchain?",
                  "¿Permite exportar datos y credenciales en formatos utilizables?",
                  "¿Tiene plan de salida y continuidad de verificación?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 py-3 border-b border-white/08">
                    <span className="w-2 h-2 bg-purple-400/60 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
              <div className="glass-card rounded-2xl p-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-white/90 leading-relaxed">Si la respuesta es <strong className="text-white">no</strong> a cualquiera de estas preguntas y el proveedor no aporta evidencia de remediación inmediata, la plataforma debería pasar a estado de <strong className="text-white">descarte o pausa</strong>.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Anexo B */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Anexo B · Plantilla resumida para RFI / RFP</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Diez bloques de una <span className="text-gradient-purple-blue">RFI / RFP</span>.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Descripción institucional y casos de uso.",
                  "Volumen esperado de credenciales y perfiles de usuario.",
                  "Estándares requeridos y versiones mínimas aceptadas.",
                  "Integraciones obligatorias y deseables.",
                  "Requisitos de seguridad, privacidad y hosting.",
                  "Requisitos de soporte, idiomas y plazos de implementación.",
                  "Evidencia obligatoria a presentar.",
                  "Formato del piloto y criterios de aceptación.",
                  "Modelo de pricing requerido y desglose completo.",
                  "Condiciones mínimas de exportación y salida.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="font-mono text-purple-400/60 text-xs min-w-[24px] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Anexo C */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Anexo C · Referencias de estándares y marcos utilizados</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fuentes <span className="text-gradient-peach-purple">oficiales</span> consultadas.</h2>
              <div className="space-y-3">
                {[
                  ["01", "1EdTech Consortium — Open Badges.", "Página oficial del estándar y recursos de implementación.", "www.1edtech.org/standards/open-badges"],
                  ["02", "1EdTech — Open Badges Certification Process.", "Proceso oficial de certificación de conformidad.", "www.1edtech.org/certification/open-badges"],
                  ["03", "1EdTech — TrustEd Apps Program.", "Directorio oficial de productos con certificación/interoperabilidad verificada.", "www.1edtech.org/program/trustedapps"],
                  ["04", "W3C — Verifiable Credentials Data Model v2.0.", "Recomendación oficial publicada el 15 de mayo de 2025.", "www.w3.org/TR/vc-data-model-2.0"],
                  ["05", "Europass — European Digital Credentials.", "Infraestructura oficial para crear, emitir, almacenar, compartir y verificar credenciales digitales europeas.", "europass.europa.eu/en/european-digital-credentials"],
                  ["06", "Europass — EDC for Learning.", "Definición oficial de credenciales digitales europeas para aprendizaje.", "europass.europa.eu/en/european-digital-credentials-learning"],
                  ["07", "Europass — Information for Developers.", "Documentación técnica del ecosistema Europass.", "europass.europa.eu/en/information-developers"],
                  ["08", "Europass — European Learning Model (ELM) Browser.", "Modelo oficial de datos europeo para aprendizaje y credenciales.", "europa.eu/europass/elm-browser/index.html"],
                  ["09", "Europass — Latest developments to the European Learning Model.", "", "europass.europa.eu/en/news/latest-developments-european-learning-model"],
                  ["10", "OWASP — Application Security Verification Standard (ASVS).", "", "owasp.org/www-project-application-security-verification-standard"],
                  ["11", "OWASP — Authentication Cheat Sheet.", "", "cheatsheetseries.owasp.org"],
                  ["12", "NIST — SP 800-218 Secure Software Development Framework (SSDF).", "", "csrc.nist.gov/publications/detail/sp/800-218/final"],
                  ["13", "EUR-Lex — Regulation (EU) 2016/679 (GDPR).", "", "eur-lex.europa.eu/eli/reg/2016/679/oj"],
                  ["14", "Etherscan Docs.", "", "docs.etherscan.io"],
                ].map(([n, title, desc, url]) => (
                  <div key={n} className="flex gap-4 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/70 text-sm font-semibold min-w-[28px]">{n}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title} {desc && <span className="text-white/60 font-normal">{desc}</span>}</p>
                      <p className="font-mono text-purple-400/60 text-xs mt-1">{url}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm leading-relaxed mt-6">Referencias consolidadas a partir de fuentes oficiales de 1EdTech, W3C y OWASP revisadas en marzo de 2026. Se recomienda verificar siempre la vigencia de certificaciones, versiones de estándares y evidencias técnicas directamente en las fuentes oficiales al momento de la compra.</p>
            </div>
          </AnimatedSection>

          {/* Closing callout */}
          <AnimatedSection>
            <div className="text-center py-8 space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold">
                No compre <span className="text-gradient-peach-purple">declaraciones</span>.
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold">
                Compre <span className="text-gradient-blue-pink">evidencia</span>.
              </h2>
              <p className="text-white/40 text-sm tracking-widest uppercase mt-6">merahki.ai · Guía Integral · v1.0 · Abril 2026</p>
            </div>
          </AnimatedSection>

          {/* Back to blog */}
          <AnimatedSection>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Volver al blog
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Hablar con un experto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <ContactSection
        heading="¿Tu institución está evaluando plataformas de credenciales digitales?"
        subheading="El equipo de merahki.ai puede ayudarte a aplicar este marco de evaluación y encontrar la solución adecuada para tus casos de uso."
      />
    </div>
  );
}
