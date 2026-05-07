import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "Microcredenciales: la nueva arquitectura del aprendizaje | merahki.ai",
  description:
    "Por qué las microcredenciales no son educación más pequeña — y qué deben hacer las instituciones antes de que sea tarde. Casos de éxito, datos globales y un plan de acción de 3 pasos.",
  openGraph: {
    title: "Microcredenciales: la nueva arquitectura del aprendizaje",
    description:
      "Casos de Singapur, Google, IBM, Walmart, MIT y Tec de Monterrey. El plan de 3 pasos para lanzar microcredenciales con impacto real.",
    url: "https://merahki.ai/blog/microcredenciales-nueva-arquitectura-aprendizaje",
    type: "article",
  },
  alternates: {
    canonical: "https://merahki.ai/blog/microcredenciales-nueva-arquitectura-aprendizaje",
  },
};

/* ── Inline CTA component ── */
function UrgencyCTA() {
  return (
    <div className="my-12 glass-card rounded-2xl p-8 space-y-5">
      <p className="text-white/80 font-medium text-[15px] leading-relaxed">
        El sector productivo en Colombia y LATAM ya no está esperando. Están diseñando sus propias rutas de formación con microcredenciales — <strong className="text-white">con o sin las universidades.</strong>
      </p>
      <p className="text-white/60 text-[15px] leading-relaxed">
        La pregunta es si su institución va a liderar esa conversación o va a llegar tarde a ella.
      </p>
      <Link
        href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
      >
        Agenda 30 minutos para ver cómo lo estamos implementando en la práctica <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function InlineCTA() {
  return (
    <div className="my-12 border-gradient-peach-purple rounded-2xl p-8 text-center space-y-5">
      <p className="text-xs text-accent-purple uppercase tracking-widest font-bold">
        Ellos ya lo están haciendo
      </p>
      {/* Logo grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center my-6">
        {[
          { src: "/images/logos/pok.png", alt: "POK" },
          { src: "/images/logos/novartis.png", alt: "Novartis" },
          { src: "/images/logos/universidad-de-los-andes.png", alt: "Universidad de los Andes" },
          { src: "/images/logos/astrazeneca.png", alt: "AstraZeneca" },
          { src: "/images/logos/universidad-del-valle.png", alt: "Universidad del Valle" },
          { src: "/images/logos/codere.png", alt: "Codere" },
          { src: "/images/logos/terumo.png", alt: "Terumo" },
          { src: "/images/logos/fundacion-santa-fe-bogota.png", alt: "Fundación Santa Fe de Bogotá" },
          { src: "/images/logos/bid.png", alt: "BID" },
          { src: "/images/logos/universidad-cesar-vallejo.png", alt: "Universidad César Vallejo" },
          { src: "/images/logos/celsia.png", alt: "Celsia" },
          { src: "/images/logos/sanofi.png", alt: "Sanofi" },
        ].map((logo) => (
          <div key={logo.alt} className="relative w-[100px] h-[36px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain opacity-70"
              sizes="100px"
            />
          </div>
        ))}
      </div>
      <Link
        href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
      >
        Agenda consultoría gratuita para diseñar tu estrategia de Microcredenciales <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function MicrocredencialesPost() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Thought Leadership</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Microcredenciales</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Credenciales Digitales</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Microcredenciales: la nueva arquitectura del{" "}
              <span className="text-gradient-peach-purple">aprendizaje</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              Por qué no son educación más pequeña — y qué deben hacer las instituciones antes de que sea tarde
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-sm font-bold text-accent-purple">DG</div>
              <div>
                <p className="text-sm text-white/80 font-medium">David González</p>
                <p className="text-xs text-white/40">Founder, merahki.ai · Mayo 2026</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section className="relative py-10 px-6">
        <div className="relative z-10 max-w-3xl mx-auto prose-invert">

          {/* Intro */}
          <AnimatedSection>
            <div className="space-y-6 text-white/65 leading-relaxed text-[15px]">
              <p>
                En noviembre de 2021, una empresa llamada 2U pagó ochocientos millones de dólares por edX, la plataforma de educación online que Harvard y MIT habían fundado para llevar sus aulas al mundo entero. Tres años después, el 25 de julio de 2024, esa misma empresa se declaró en quiebra.
              </p>
              <p>
                La paradoja es inevitable: si las microcredenciales son el futuro de la educación superior, ¿cómo se explica que el pionero más visible del modelo haya colapsado?
              </p>
              <p>
                La respuesta cambia por completo la forma en que deberíamos pensar las microcredenciales en nuestras instituciones. Porque lo que falló no fue el concepto. <strong className="text-white/90">Fue la ejecución sin estrategia.</strong> Y entender esa diferencia es lo que separa a las instituciones que van a liderar la próxima década de las que van a quedarse discutiendo si esto es tendencia o moda.
              </p>
            </div>
          </AnimatedSection>

          {/* La tesis */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">La tesis</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p className="text-white/80 font-medium text-lg border-l-4 border-accent-purple/60 pl-5 py-2">
                Las microcredenciales no son educación más pequeña. Son una nueva arquitectura del aprendizaje: modular, verificable, portable y permanente.
              </p>
              <p>
                Si las entendemos solo como cursos cortos, perdemos lo más importante — que están reorganizando la relación entre lo que aprendemos, dónde lo aprendemos y cómo lo demostramos al mundo.
              </p>
              <p>
                Escribo desde la trinchera. Soy David González, founder de Merahki.ai. En los últimos años, nos hemos dedicado a ayudar a unidades educativas de universidades y empresas a diseñar, lanzar y operar rutas de formación cuyo impacto y trazabilidad son 100% medibles.
              </p>
              <p>
                Le mostramos a una empresa de software cuánto aumentan las ventas cruzadas por cada partner certificado versus uno que no pasó por la ruta de formación. Le demostramos a una red hospitalaria la correlación entre las horas de formación completadas y la reducción en la rotación de personal por unidad, trimestre a trimestre.
              </p>
              <p>
                Le probamos a un banco cuánto se reduce la cantidad de incidentes de ciberseguridad por cada peso invertido en formación. Y le enseñamos a una universidad cuánto baja el costo de virtualización por programa cuando se implementa una metodología de producción estandarizada con componentes reutilizables, en lugar del modelo artesanal donde cada facultad arranca de cero.
              </p>
              <p>
                Nuestra infraestructura está diseñada para convertir a las universidades en motores de crecimiento — para sus clientes corporativos, sus estudiantes y sus profesores — a través de rutas de formación pertinentes y, sobre todo, atractivas para el mercado laboral. Una infraestructura end-to-end que va desde el diseño del programa hasta la emisión de la credencial.
              </p>
              <p>
                Lo que sigue en este artículo es el resultado de esa experiencia y de la investigación que la respalda.
              </p>
            </div>
          </AnimatedSection>

          {/* El salvaje oeste */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">El salvaje oeste de las credenciales</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p>
                Para dimensionar el problema, conviene empezar con un dato: en diciembre de 2025, <strong className="text-white/80">Credential Engine registró 1.850.000 credenciales únicas en Estados Unidos</strong>. Tres veces más que en 2018. Microcredenciales, certificaciones, badges, nanodegrees, bootcamps, professional certificates — un ecosistema que aprendices, instituciones y empleadores tienen que tratar de descifrar sin un estándar común.
              </p>
              <p>
                Inside Higher Ed lo llamó, sin rodeos, el &ldquo;salvaje oeste.&rdquo;
              </p>
              <p>
                Y mientras el panorama se fragmenta, las urgencias no esperan. El World Economic Forum, en su Future of Jobs Report 2025, recogió la voz de más de mil empresas en cincuenta y cinco economías. Los hallazgos son contundentes:
              </p>
              <ul className="space-y-2 pl-0">
                <li className="flex gap-3"><span className="text-accent-purple shrink-0 mt-1">●</span> El 22% de los empleos se transformarán completamente para 2030</li>
                <li className="flex gap-3"><span className="text-accent-purple shrink-0 mt-1">●</span> El 39% de las habilidades actuales quedarán obsoletas o transformadas</li>
                <li className="flex gap-3"><span className="text-accent-purple shrink-0 mt-1">●</span> El 85% de los empleadores ya están priorizando el reskilling de sus equipos</li>
              </ul>
              <p>
                Traducción para las instituciones educativas: <strong className="text-white/80">en cinco años, cuatro de cada diez competencias que se están enseñando hoy se habrán transformado.</strong>
              </p>
            </div>
          </AnimatedSection>

          {/* Urgencia LATAM */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">La urgencia latinoamericana</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p>
                En la región, la presión es aún mayor. ManpowerGroup reportó en 2025 que <strong className="text-white/80">el 70% de los empleadores en México no encuentran el talento que necesitan</strong>. La OECD, en su Latin American Economic Outlook 2025, lo dice todavía más duro: las firmas de Latinoamérica tienen trece veces más probabilidades de enfrentar problemas de desempeño por brechas de habilidades que las firmas del este de Asia.
              </p>
              <p>
                Mientras tanto, los estudiantes ya se están moviendo por su cuenta. El reporte de impacto de Coursera 2025 muestra que uno de cada tres estudiantes en LATAM ya tiene microcredenciales. Y el 92% de ellos quiere que cuenten para un grado.
              </p>
              <p className="text-white/80 font-medium text-lg border-l-4 border-accent-purple/60 pl-5 py-2">
                Nueve de cada diez estudiantes ya están construyendo credenciales por fuera del sistema formal. La pregunta es si las instituciones van a reconocerlas o van a ignorarlas hasta que sea demasiado tarde.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA #1 */}
          <InlineCTA />

          {/* Tres formas de fracasar */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Las tres formas seguras de fracasar</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p>
                James Fong, Chief Research Officer de UPCEA — la asociación más grande de educación continua universitaria en Estados Unidos — lo sintetiza así: <em>no hay casi razón para que las instituciones ofrezcan microcredenciales en las que el sector productivo no esté directamente involucrado.</em>
              </p>
              <p>Es contraintuitivo, pero las instituciones que fallan suelen cometer los mismos tres errores.</p>

              <div className="glass-card rounded-xl p-5 space-y-4">
                <div>
                  <p className="text-white font-semibold text-sm">Error 1: Re-empaquetar lo que ya tienen</p>
                  <p className="text-white/55 text-sm mt-1">Un módulo de un diplomado existente, un curso de extensión — ponerle un badge digital y llamarlo microcredencial. Sin involucrar al empleador. Cuando una microcredencial no tiene éxito, simplemente desaparece del sitio web, y eso son costos hundidos.</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Error 2: Lanzar en cantidad sin curaduría</p>
                  <p className="text-white/55 text-sm mt-1">UNESCO IESALC tiene un término para este fenómeno: <em>badge fatigue</em>. Saturación del mercado, dilución del valor, y aprendices más confundidos que antes.</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Error 3: Emitirlas como un PDF</p>
                  <p className="text-white/55 text-sm mt-1">Sin verificabilidad, sin portabilidad, sin lo que las hace microcredenciales en primer lugar. Cada credencial emitida en formato cerrado es deuda técnica.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Lo que funciona */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Lo que ya está funcionando</h2>
            <p className="text-white/65 leading-relaxed text-[15px] mb-8">
              Pero no todos están fallando. Hay países, empresas y universidades que están haciendo cosas distintas, y los resultados son contundentes.
            </p>
          </AnimatedSection>

          {/* Singapur */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Singapur</span>
              <h3 className="text-xl font-bold mt-2 mb-3">La formación continua como derecho ciudadano</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>En 2016, el gobierno de Singapur lanzó SkillsFuture Credit: cada ciudadano mayor de 25 años recibe créditos de formación del Estado para usar a lo largo de su vida en cualquier programa acreditado.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { n: "1.05M", l: "ciudadanos activos" },
                    { n: "37%", l: "de la población" },
                    { n: "555K", l: "inscripciones en 2024" },
                    { n: "69%", l: "mejoraron su desempeño" },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/[0.03] rounded-lg p-3 text-center border border-white/5">
                      <p className="text-lg font-bold text-accent-purple">{s.n}</p>
                      <p className="text-xs text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p>Singapur normalizó lo que en otros países sigue siendo retórica.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Google */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Google</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Career Certificates: un millón de graduados sin título universitario</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Programas de tres a seis meses en habilidades como soporte IT, análisis de datos, project management y diseño UX. Para diciembre de 2024: el graduado número un millón. Reconocida por más de 150 empleadores.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { n: "1M+", l: "graduados" },
                    { n: "70%+", l: "resultados positivos en 6 meses" },
                    { n: "$96K", l: "mediana salarial (USD/año)" },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/[0.03] rounded-lg p-3 text-center border border-white/5">
                      <p className="text-lg font-bold text-accent-purple">{s.n}</p>
                      <p className="text-xs text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p>Costo del programa: $49/mes, promedio total de $200–$300. Ray Bryant, sin título universitario, completó el Google IT Support Certificate en 4 meses, fue contratado por Google como data center technician, y su salario subió $20.000/año.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* IBM */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">IBM</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Eliminar el requisito del título</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>IBM lanzó SkillsBuild en 2021 con el compromiso de capacitar a 30 millones de personas para 2030. La CHRO de IBM declaró que <strong className="text-white/80">el 50% de los empleos de IBM en Estados Unidos ya no requieren un título de cuatro años</strong>. La proporción de contrataciones sin grado se acerca al 20%.</p>
                <p>La empresa que vende los computadores que mueven la economía global decidió que la mitad de sus posiciones no necesitan título universitario.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Walmart */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Walmart</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Educación que genera promociones</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Live Better U: 100% de la matrícula pagada a empleados. 120.000 participantes, $500M ahorrados en matrículas.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: "80%", l: "más promociones (empleados blancos)" },
                    { n: "88%", l: "más promociones (afroamericanos)" },
                    { n: "71%", l: "más promociones (hispanos)" },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/[0.03] rounded-lg p-3 text-center border border-white/5">
                      <p className="text-lg font-bold text-accent-purple">{s.n}</p>
                      <p className="text-xs text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p>La empresa pagó la educación, los empleados recibieron promociones, y Walmart retuvo más talento.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* MIT */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">MIT</span>
              <h3 className="text-xl font-bold mt-2 mb-3">MicroMasters: la rampa hacia el grado</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Secuencias de cinco cursos a nivel de posgrado con examen final supervisado. Quienes los completan y después son admitidos al máster residencial pueden convalidar los cursos. La microcredencial apila hacia el grado.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: "9,500+", l: "credenciales emitidas" },
                    { n: "50+", l: "universidades aceptan créditos" },
                    { n: "1.25M+", l: "inscripciones (Supply Chain)" },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/[0.03] rounded-lg p-3 text-center border border-white/5">
                      <p className="text-lg font-bold text-accent-purple">{s.n}</p>
                      <p className="text-xs text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p>Robert Rains — veterano militar en logística humanitaria en África — completó el MicroMasters por ~$1.500, fue admitido al máster residencial y se graduó del MIT en 2019. La microcredencial bien diseñada no es una alternativa al grado. Es la rampa hacia el grado.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Tec */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Tec de Monterrey</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Esto ya pasa en LATAM</h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Antes de la pandemia, el Tec ya emitía títulos en blockchain. Durante 2020 escalaron de 3.400 a 39.000 usuarios online. Hoy más de 6.500 graduados reciben credenciales digitales curriculares con badges de competencias específicas.</p>
                <p>Participan en el consorcio MOCHILA, financiado por Erasmus+, junto con la Universidad de Chile, INTEC en República Dominicana, Universidad Galileo en Guatemala y la Universidad de San Carlos.</p>
                <p className="text-white/80 font-medium">Esto no es solo San Francisco o Singapur. Está pasando en la región.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Patrón */}
          <AnimatedSection>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold text-white mb-3">El patrón que se repite</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">¿Qué tienen en común todos estos casos? Tres cosas:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Involucran al empleador desde el diseño",
                  "Adoptan estándares técnicos abiertos",
                  "Construyen pathways académicos claros",
                ].map((t) => (
                  <div key={t} className="flex gap-2 items-start">
                    <span className="text-accent-purple shrink-0 mt-0.5">✓</span>
                    <p className="text-white/70 text-sm font-medium">{t}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-4">Las tres cosas juntas.</p>
            </div>
          </AnimatedSection>

          {/* CTA #2 */}
          <InlineCTA />

          {/* Tres pasos */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Tres pasos antes del próximo lunes</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-lg bg-accent-purple/20 text-accent-purple text-xs font-bold shrink-0 h-fit">Paso 1</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Un caso de uso, un empleador</h3>
                  <div className="text-white/60 text-sm leading-relaxed space-y-3">
                    <p>No diez. Uno. Una habilidad específica, en una industria específica, con un empleador concreto que se comprometa a contratar o priorizar graduados.</p>
                    <p className="text-white/80 font-medium border-l-4 border-accent-purple/40 pl-4">&ldquo;Vamos a crear una microcredencial en análisis de datos para el sector salud, en alianza con un hospital específico, que va a contratar al menos a quince graduados al año.&rdquo;</p>
                    <p>Concreto, específico, con compromiso en papel.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-lg bg-accent-purple/20 text-accent-purple text-xs font-bold shrink-0 h-fit">Paso 2</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Open Badges 3.0 desde el primer día</h3>
                  <div className="text-white/60 text-sm leading-relaxed space-y-3">
                    <p>No PDFs. No plataformas propietarias sin estándar abierto. El estándar, aprobado en mayo de 2024 por el consorcio 1EdTech junto con el modelo W3C de credenciales verificables, ofrece infraestructura criptográficamente segura, portable y basada en JSON-LD.</p>
                    <p>Cada credencial emitida en formato cerrado es deuda técnica que se pagará después. La portabilidad — el hecho de que el aprendiz pueda llevar esa credencial a una wallet digital — es lo que hará que la credencial valga más en el mercado en 2027, 2028, 2029.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-lg bg-accent-purple/20 text-accent-purple text-xs font-bold shrink-0 h-fit">Paso 3</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Pathway académico desde el diseño</h3>
                  <div className="text-white/60 text-sm leading-relaxed space-y-3">
                    <p>&ldquo;Esta microcredencial vale X créditos hacia el diplomado Y.&rdquo; &ldquo;Estas tres microcredenciales completan el primer módulo del programa Z.&rdquo;</p>
                    <p>Sin pathway, las microcredenciales son fragmentos sueltos. Con pathway, son los bloques con los que los estudiantes construyen su propia torre.</p>
                    <p>De los tres pasos, este es el más difícil — porque toca lo más sagrado: la estructura curricular, los reglamentos académicos, los consejos universitarios. Y por eso es donde hay que invertir más tiempo político.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Urgencia */}
          <UrgencyCTA />

          {/* El currículum del futuro */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">El currículum del futuro cabe en un bolsillo</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p>
                Hay algo más que está ocurriendo en paralelo a las microcredenciales y que, cuando converja con ellas, va a cambiar completamente cómo se contrata gente en el mundo.
              </p>
              <p>
                Hoy, más del 85% de los empleos publicados online pasan por un Applicant Tracking System antes de que un humano los vea. Al mismo tiempo, Gartner predijo en septiembre de 2024 que para 2026, al menos <strong className="text-white/80">500 millones de personas estarían usando wallets de identidad digital</strong>.
              </p>
              <p>
                El escenario que ya se pilotea: una graduada termina una microcredencial emitida en Open Badges 3.0. Esa credencial va automáticamente a su wallet digital, junto con su grado de pregrado, certificaciones externas y experiencia laboral verificada. Cuando aplica a un empleo, no envía un CV en PDF. Comparte un permiso de su wallet. El ATS del empleador escanea, verifica la autenticidad de cada credencial directamente en blockchain, hace match con los requisitos de la vacante y presenta al hiring manager un ranking de candidatos en milisegundos.
              </p>
              <p className="text-white/80 font-medium text-lg border-l-4 border-accent-purple/60 pl-5 py-2">
                La pregunta para las instituciones es directa: cuando esa graduada, en 2027, comparta su wallet con un empleador, ¿la credencial de su institución va a estar adentro? ¿O va a ser la pieza que falte porque se emitió en PDF?
              </p>
            </div>
          </AnimatedSection>

          {/* Dos versiones de 2030 */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Dos versiones de 2030</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="glass-card rounded-xl p-5 border-l-4 border-green-500/40">
                <h4 className="text-sm font-bold text-green-400 mb-2">Versión A</h4>
                <ul className="text-white/55 text-sm leading-relaxed space-y-2">
                  <li>Los graduados comparten wallets verificadas</li>
                  <li>Cada microcredencial emitida está viva, escaneable</li>
                  <li>Pathways académicos referenciados por empleadores</li>
                  <li>Datos de empleabilidad respaldan cada decisión</li>
                </ul>
              </div>
              <div className="glass-card rounded-xl p-5 border-l-4 border-red-500/40">
                <h4 className="text-sm font-bold text-red-400 mb-2">Versión B</h4>
                <ul className="text-white/55 text-sm leading-relaxed space-y-2">
                  <li>Los graduados siguen enviando PDFs</li>
                  <li>Competidores modulares ganan estudiantes</li>
                  <li>Los consejos siguen discutiendo</li>
                  <li>La pregunta de 2026 ya tiene respuesta histórica</li>
                </ul>
              </div>
            </div>
            <p className="text-white/65 text-[15px] leading-relaxed">
              La diferencia entre ambas versiones no es presupuesto, ni tamaño, ni geografía. <strong className="text-white/90">Es decisión.</strong>
            </p>
          </AnimatedSection>

          {/* Cierre */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Torres de Lego, no torres de marfil</h2>
            <div className="space-y-5 text-white/65 leading-relaxed text-[15px]">
              <p>
                Anant Agarwal, fundador de edX, lo dijo cuando ya sabía que su empresa iba a perder relevancia: <em>la torre de marfil de la educación superior se está derrumbando para la generación Z. Hay que darle a los aprendices bloques tipo Lego para que construyan sus propias torres hacia el éxito.</em>
              </p>
              <p>
                La pregunta para los líderes de la educación superior no es si van a entrar a este modelo. Es si van a ser quienes ofrezcan los bloques — quienes diseñen el sistema — o quienes pidan permiso para participar en el sistema que diseñaron otros.
              </p>
              <p className="text-white/80 font-medium text-lg border-l-4 border-accent-purple/60 pl-5 py-2">
                Las microcredenciales no son educación más pequeña. Son la arquitectura. Y la arquitectura la diseña quien llega primero.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Urgencia */}
          <UrgencyCTA />

          {/* Fuentes */}
          <AnimatedSection>
            <div className="mt-14 pt-8 border-t border-white/10">
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">Fuentes</h4>
              <p className="text-xs text-white/30 leading-relaxed">
                Credential Engine (dic 2025), World Economic Forum Future of Jobs Report 2025, ManpowerGroup 2025, OECD Latin American Economic Outlook 2025, Coursera Impact Report 2025, SkillsFuture Singapore, Google Career Certificates, IBM SkillsBuild, Walmart/Lumina Foundation, MIT MicroMasters, Tec de Monterrey/Consorcio MOCHILA, UPCEA, UNESCO IESALC, 1EdTech Open Badges 3.0, Gartner Security &amp; Risk Summit 2024.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <ContactSection
        heading="¿Listo para diseñar tu estrategia de microcredenciales?"
        subheading="Agenda una consultoría gratuita y diseñemos juntos tu primera ruta de formación con credenciales verificables."
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
