import Link from "next/link";
import { ArrowDown, ArrowRight, BarChart3, Boxes, Check, Layers, PenTool } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import GradientText from "@/components/ui/GradientText";
import FeatureCard from "@/components/ui/FeatureCard";
import CaseStudyVideo from "@/components/case-studies/CaseStudyVideo";
import InsightCallout from "@/components/case-studies/InsightCallout";
import MetricStrip from "@/components/case-studies/MetricStrip";
import QuoteCard from "@/components/case-studies/QuoteCard";

type Locale = "en" | "es";

const hubspotUrl = "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";
const caseStudyDocUrl = "/assets/case-studies/uniandes-sanofi-microbiota/case_study_v4.docx";

const content = {
  es: {
    eyebrow: "Case Study · Uniandes × Sanofi CHC · 2022",
    h1Lead: "De 8 semanas a USD $550K:",
    h1Rest: " cómo virtualizamos un programa de educación médica multinacional bajo presión — y arrancamos la relación que más ha crecido la facturación de educación continua de Uniandes Medicina.",
    subheading: "Dos tracks clínicos. 200+ alergólogos. 95+ insignias digitales. 8 países. Orquestado de punta a punta por merahki.ai.",
    cta: "Hablar con merahki.ai",
    videoCta: "Ver el testimonio",
    metrics: [
      { value: "8 sem.", label: "Producción y lanzamiento" },
      { value: "95+", label: "Insignias digitales emitidas" },
      { value: "+200", label: "Alergólogos capacitados" },
      { value: "8 países", label: "LATAM alcanzados" },
    ],
    summaryTitle: "Resumen ejecutivo",
    summary: "En 2022 la Facultad de Medicina de la Universidad de los Andes tenía 8 semanas para virtualizar y lanzar dos programas certificados sobre microbiota, probióticos y prebióticos, dirigidos a dos audiencias clínicas distintas —médicos generales y pediatras de toda Latinoamérica, y alergólogos con foco clínico especializado—. La capacidad académica estaba; el tiempo no. merahki.ai entró como orquestador de punta a punta — diseño instruccional acelerado, virtualización modular, montaje en el LMS de la Universidad, comunicaciones automatizadas y reportería semanal que se entregaba a los project managers de la universidad y de Sanofi. El proyecto se desarrolló en dos fases secuenciales que materializaron el modelo modular. En la primera fase, producimos el programa para médicos generales y pediatras de Latinoamérica y entregamos 95+ insignias digitales a médicos certificados en 8 países. En la segunda fase, reutilizamos esa misma base de contenido —sin volver a producir desde cero— para reestructurar la ruta formativa para una audiencia clínica especializada, y capacitamos a +200 alergólogos. Una sola inversión de producción, dos audiencias clínicas certificadas, y un activo modular reutilizable para futuros programas de upskilling y reskilling.",
    julianaCaption: "Juliana González, Project Manager de la Facultad de Medicina de Uniandes, sobre el impacto acumulado de los programas que merahki.ai ha virtualizado para la Facultad.",
    alliesTitle: "El cliente y los aliados",
    allies: [
      { name: "Universidad de los Andes — Facultad de Medicina", role: "Líder académico del programa y responsable del LMS institucional." },
      { name: "Sanofi CHC (Consumer Healthcare)", role: "Aliado corporativo para educación médica continua en Latinoamérica." },
      { name: "Sociedad Iberoamericana de Microbiota, Probióticos y Prebióticos", role: "Aval académico y respaldo técnico del contenido clínico." },
      { name: "merahki.ai", role: "Orquestador end-to-end: diseño, virtualización, operación y reportería." },
    ],
    challengeTitle: "El desafío",
    challenge: [
      "El equipo tenía el respaldo académico, el patrocinador corporativo y una audiencia clínica de alto valor. Lo que faltaba era tiempo operativo para convertir el contenido en una experiencia virtual certificada, confiable y lista para desplegarse en varios países.",
      "El programa debía coordinar expertos médicos, producción instruccional, LMS institucional, comunicaciones, seguimiento y evidencia de avance sin frenar el calendario de lanzamiento.",
      "Track 1 (primera fase): médicos generales y pediatras de toda Latinoamérica.",
      "Track 2 (segunda fase, sobre el activo modular reestructurado): alergólogos con foco clínico especializado.",
    ],
    strategicInsightTitle: "El insight estratégico",
    strategicInsight: "Cuando el cuello de botella no es la capacidad de producir sino la capacidad de orquestar, el aliado correcto no es un productor: es un operador integral que articule al experto académico, al patrocinador corporativo, al equipo técnico de la universidad y al cronograma de lanzamiento bajo un mismo plan ejecutivo.",
    whyTitle: "Por qué merahki.ai",
    capabilities: [
      { icon: PenTool, title: "Diseño instruccional acelerado con expertos académicos", description: "Convertimos el criterio clínico del equipo académico en una ruta certificable, clara y operable en 8 semanas." },
      { icon: Boxes, title: "Virtualización modular reutilizable — lego pedagógico", description: "Estructuramos piezas de contenido que podían recombinarse para una segunda audiencia clínica sin duplicar producción." },
      { icon: BarChart3, title: "Operación y reportería en tiempo real", description: "Montaje en LMS, comunicaciones automatizadas, seguimiento de participantes y reportería semanal para los actores del proyecto." },
    ],
    methodologyTitle: "Nuestra metodología",
    methodology: [
      "Inmersión con el experto técnico de la universidad",
      "Aceleración del diseño instruccional",
      "Selección de herramientas interactivas",
      "Virtualización modular y montaje en LMS",
      "Automatización de comunicaciones, seguimiento y reportería",
    ],
    implementationTitle: "Implementación: dos tracks, un activo modular",
    tracks: [
      { title: "Track 1 — Médicos generales y pediatras", body: "Programa orientado a profesionales y estudiantes del área de la salud en Latinoamérica, con foco en medicina general y pediatría. Fue el primer programa producido bajo este convenio: lo construimos desde cero junto al experto académico y lo publicamos como activo modular base en el LMS de la Universidad. El contenido abordó microbioma, colonización normal y patológica, cepas microbiológicas, y los conceptos clínicos de probióticos, prebióticos, postbióticos y simbióticos. 95+ insignias digitales · 8 países LATAM." },
      { title: "Track 2 — Alergólogos", body: "En la segunda fase del proyecto, reutilizamos el activo modular del programa para médicos generales y pediatras y reestructuramos la ruta formativa para una audiencia clínica especializada: la comunidad de alergólogos. Los contenidos fueron repensados —no reproducidos desde cero— para enfatizar las aplicaciones terapéuticas de probióticos en la práctica alergológica clínica. Esta segunda fase materializó la promesa de la virtualización modular: una sola inversión de producción de fondo, dos audiencias clínicas certificadas, ROI maximizado del activo académico. +200 alergólogos capacitados." },
    ],
    legoTitle: "Por qué el modelo lego importó",
    legoInsight: "Una vez producido y lanzado el primer programa —el de médicos generales y pediatras—, reestructuramos la ruta formativa para una segunda audiencia clínica —los alergólogos— sin duplicar el costo de producción. Esto no es solo eficiencia — es una capacidad estructural: convertir cada programa en un activo académico recombinable para futuros ciclos de upskilling y reskilling sobre el mismo dominio de conocimiento.",
    resultsTitle: "Resultados",
    results: [
      { title: "8.1 Capacitación y alcance", bullets: ["95+ insignias digitales entregadas a médicos generales y pediatras en la primera fase del proyecto.", "+200 alergólogos capacitados en la segunda fase, sobre el activo modular reestructurado.", "8 países de Latinoamérica alcanzados (la red regional cubrió, entre otros, Ecuador, Guatemala y Colombia con evidencia documentada en testimonios)."] },
      { title: "8.2 Operación y experiencia", bullets: ["Producción y lanzamiento cumplidos en 8 semanas.", "Experiencia clínica virtual publicada en el LMS institucional.", "Reporterías semanales para seguimiento ejecutivo."] },
      { title: "8.3 Activo académico reutilizable", bullets: ["Curaduría modular del dominio microbiota / probióticos / prebióticos que la Universidad puede reactivar para nuevas audiencias y nuevos ciclos formativos sin volver a producir desde cero — capacidad ya demostrada en este mismo proyecto al reestructurar el contenido del programa de médicos generales y pediatras para crear el track de alergólogos.", "Ruta recombinable para audiencias médicas distintas.", "Credencialización digital integrada al entregable."] },
    ],
    businessTitle: "8.4 Impacto de negocio",
    businessMetric: "COP $2.000 millones ≈ USD $550K",
    businessBody: "Impacto aproximado atribuible al portafolio completo de programas virtualizados desde 2022; el de microbiota fue el primero. Fuente: testimonio en video de Juliana González.",
    actorsTitle: "Lo que dicen los actores",
    corporate: "Del cliente corporativo (Sanofi CHC)",
    university: "De la universidad",
    participants: "De los participantes",
    sanofiCaption: "Video oficial de cierre: Sanofi CHC × Facultad de Medicina, Universidad de los Andes.",
    replicableTitle: "Modelo replicable y próximos pasos",
    replicable: [
      "Producción contra reloj sin sacrificar rigor académico",
      "Multi-actor sin fricción",
      "Activos académicos modulares (lego pedagógico)",
      "Credenciales digitales como parte del entregable, con mención a la alianza con Pok.tech y Open Badges 3.0",
    ],
    closingTitle: "¿Tu institución tiene una ventana corta para lanzar un programa certificado de alto impacto?",
    closingBody: "El mismo modelo que orquestó este caso está disponible para tu equipo.",
    downloadLabel: "Descargar el caso completo (.docx)",
  },
  en: {
    eyebrow: "Case Study · Uniandes × Sanofi CHC · 2022",
    h1Lead: "From 8 weeks to USD $550K:",
    h1Rest: " how we virtualized a multinational medical education program under pressure — and kickstarted the relationship that has driven the largest growth in Uniandes Medicine's continuing-education revenue.",
    subheading: "Two clinical tracks. 200+ allergists. 95+ digital badges. 8 countries. End-to-end orchestrated by merahki.ai.",
    cta: "Talk to merahki.ai",
    videoCta: "Watch the testimonial",
    metrics: [
      { value: "8 weeks", label: "Production and launch" },
      { value: "95+", label: "Digital badges issued" },
      { value: "+200", label: "Allergists trained" },
      { value: "8 countries", label: "LATAM reached" },
    ],
    summaryTitle: "Executive summary",
    summary: "In 2022, the School of Medicine at Universidad de los Andes had 8 weeks to virtualize and launch two certified programs on microbiota, probiotics, and prebiotics for two distinct clinical audiences — general practitioners and pediatricians across Latin America, and allergists with specialized clinical focus. The academic capacity was there; the time was not. merahki.ai came in as the end-to-end orchestrator — accelerated instructional design, modular virtualization, deployment in the University's LMS, automated communications, and weekly reporting delivered to the university's and Sanofi's project managers. The project unfolded in two sequential phases that brought the modular model to life. In the first phase, we produced the program for general practitioners and pediatricians across Latin America and issued 95+ digital badges to certified physicians in 8 countries. In the second phase, we reused that same content base — without producing from scratch — to restructure the learning path for a specialized clinical audience, training 200+ allergists. One production investment, two certified clinical audiences, and a modular asset reusable for future upskilling and reskilling cycles.",
    julianaCaption: "Juliana González, Project Manager at Uniandes School of Medicine, on the accumulated impact of the programs merahki.ai has virtualized for the School.",
    alliesTitle: "The client and the allies",
    allies: [
      { name: "Universidad de los Andes — School of Medicine", role: "Academic leader of the program and owner of the institutional LMS." },
      { name: "Sanofi CHC (Consumer Healthcare)", role: "Corporate ally for continuing medical education across Latin America." },
      { name: "Ibero-American Society of Microbiota, Probiotics and Prebiotics", role: "Academic endorsement and technical backing for the clinical content." },
      { name: "merahki.ai", role: "End-to-end orchestrator: design, virtualization, operation, and reporting." },
    ],
    challengeTitle: "The challenge",
    challenge: [
      "The team had academic backing, a corporate sponsor, and a high-value clinical audience. What was missing was operational time to turn the content into a certified virtual experience that was reliable and ready to deploy across several countries.",
      "The program had to coordinate medical experts, instructional production, the institutional LMS, communications, follow-up, and progress evidence without delaying the launch calendar.",
      "Track 1 (first phase): general practitioners and pediatricians across Latin America.",
      "Track 2 (second phase, on the restructured modular asset): allergists with specialized clinical focus.",
    ],
    strategicInsightTitle: "The strategic insight",
    strategicInsight: "When the bottleneck is not the capacity to produce but the capacity to orchestrate, the right ally is not a producer: it is an integral operator that aligns the academic expert, the corporate sponsor, the university technical team, and the launch timeline under one executive plan.",
    whyTitle: "Why merahki.ai",
    capabilities: [
      { icon: PenTool, title: "Accelerated instructional design with academic experts", description: "We turned the clinical judgment of the academic team into a certifiable, clear, and operable pathway in 8 weeks." },
      { icon: Boxes, title: "Reusable modular virtualization — pedagogical lego", description: "We structured content pieces that could be recombined for a second clinical audience without duplicating production." },
      { icon: BarChart3, title: "Real-time operation and reporting", description: "LMS deployment, automated communications, participant follow-up, and weekly reporting for the project stakeholders." },
    ],
    methodologyTitle: "Our methodology",
    methodology: [
      "Immersion with the university's technical expert",
      "Instructional design acceleration",
      "Selection of interactive tools",
      "Modular virtualization and LMS deployment",
      "Automation of communications, follow-up, and reporting",
    ],
    implementationTitle: "Implementation: two tracks, one modular asset",
    tracks: [
      { title: "Track 1 — General practitioners and pediatricians", body: "Program for healthcare professionals and students across Latin America, focused on general medicine and pediatrics. This was the first program produced under this agreement: we built it from scratch with the academic expert and published it as the modular base asset on the University's LMS. The content covered the microbiome, normal and pathological colonization, microbiological strains, and the clinical concepts of probiotics, prebiotics, postbiotics, and synbiotics. 95+ digital badges · 8 LATAM countries." },
      { title: "Track 2 — Allergists", body: "In the second phase of the project, we reused the modular asset from the program for general practitioners and pediatricians, restructuring the learning path for a specialized clinical audience: the allergist community. The content was reframed — not reproduced from scratch — to emphasize the therapeutic applications of probiotics in clinical allergology. This second phase delivered on the promise of modular virtualization: one core production investment, two certified clinical audiences, maximized ROI on the academic asset. +200 allergists trained." },
    ],
    legoTitle: "Why the lego model mattered",
    legoInsight: "Once the first program was produced and launched — the one for general practitioners and pediatricians — we restructured the learning path for a second clinical audience — the allergists — without duplicating the production cost. This is not just efficiency — it is a structural capability: turning each program into a recombinable academic asset for future upskilling and reskilling cycles on the same knowledge domain.",
    resultsTitle: "Results",
    results: [
      { title: "8.1 Training and reach", bullets: ["95+ digital badges issued to general practitioners and pediatricians in the first phase of the project.", "200+ allergists trained in the second phase, on the restructured modular asset.", "8 Latin American countries reached (the regional network covered, among others, Ecuador, Guatemala, and Colombia, with documented evidence in testimonials)."] },
      { title: "8.2 Operation and experience", bullets: ["Production and launch completed in 8 weeks.", "Virtual clinical experience published in the institutional LMS.", "Weekly reports for executive follow-up."] },
      { title: "8.3 Reusable academic asset", bullets: ["Modular curation of the microbiota / probiotics / prebiotics domain that the University can reactivate for new audiences and new training cycles without producing from scratch — a capability already demonstrated in this very project when we restructured the content of the general practitioners and pediatricians program to create the allergists track.", "Recombinable pathway for different medical audiences.", "Digital credentialing integrated into the deliverable."] },
    ],
    businessTitle: "8.4 Business impact",
    businessMetric: "COP $2.000 million ≈ USD $550K",
    businessBody: "Approximate impact attributable to the full portfolio of programs virtualized since 2022; microbiota was the first. Source: Juliana González's video testimonial.",
    actorsTitle: "What the actors say",
    corporate: "From the corporate client (Sanofi CHC)",
    university: "From the university",
    participants: "From the participants",
    sanofiCaption: "Official closing video: Sanofi CHC × School of Medicine, Universidad de los Andes.",
    replicableTitle: "Replicable model and next steps",
    replicable: [
      "Production under deadline without sacrificing academic rigor",
      "Multi-actor coordination without friction",
      "Modular academic assets (pedagogical lego)",
      "Digital credentials as part of the deliverable, with Pok.tech and Open Badges 3.0",
    ],
    closingTitle: "Does your institution have a tight window to launch a high-impact certified program?",
    closingBody: "The same model that orchestrated this case is available for your team.",
    downloadLabel: "Download the full case study (.docx)",
  },
};

const quoteGroups = {
  es: {
    corporate: [
      { name: "Angela Daza", role: "Scientific Affairs, Sanofi CHC", quote: "Para Sanofi CHC es muy importante robustecer la educación médica continua, con el objetivo de que los médicos, aliados en el cuidado de la salud de todas las personas, tengan las mejores herramientas para ayudar a perseguir los milagros de la ciencia." },
      { name: "Yanindore Rodríguez", role: "HCP Engagement, Sanofi CHC", quote: "Estos últimos seis meses hemos recorrido un largo camino en nuestro curso profesional de Microbiota, Prebióticos y Probióticos. Con el apoyo de la Universidad de los Andes, la Sociedad Iberoamericana de Microbiota, Probióticos y Prebióticos, y Sanofi CHC, hoy entregaremos más de 95 insignias digitales a médicos entre medicina general y pediatría en ocho países de Latinoamérica." },
      { name: "María Cruz", role: "Medical Manager, Sanofi CHC", quote: "Esperamos que este programa profesional haya sido provechoso para todos y que a través del mismo hayan adquirido más herramientas para la atención integral de sus pacientes." },
    ],
    university: [
      { name: "Juliana González", role: "Project Manager, Uniandes — Facultad de Medicina", quote: "Como Universidad de los Andes, les agradecemos su compromiso y dedicación en este programa. Para la Facultad de Medicina es muy importante la educación médica de alta calidad. Es esto lo que nos ha posicionado como una de las mejores universidades de Latinoamérica." },
    ],
    participants: [
      { name: "Dra. Gina Vivas", role: "Pediatra, Hospital de Fuerzas Armadas, Ecuador", quote: "Soy la doctora Gina Vivas, médico pediatra del Hospital de Fuerzas Armadas del Ecuador. Estoy convencida que los conocimientos adquiridos durante este diplomado serán en beneficio propio y lo más importante, en beneficio de mis pequeños pacientes." },
      { name: "Dra. Carolina Ortiz", role: "Gastroenteróloga Pediatra, Guatemala", quote: "Quiero felicitar a los organizadores, a los coordinadores y a todos quienes estuvieron brindándonos las charlas. Fue un curso excelente, aprendimos muchísimo y todo lo que nos enseñaron seguramente lo vamos a poder aplicar en nuestra práctica diaria. Fue un curso de alto nivel académico. Muy recomendado." },
      { name: "Médico participante", role: "Programa de actualización en microbiota", quote: "Realmente fue un diplomado que aportó mucho para mi vida como médico, y así tal cual poder empezar a formular y poder entender varias patologías y sus tratamientos con base a este diplomado." },
    ],
  },
  en: {
    corporate: [
      { name: "Angela Daza", role: "Scientific Affairs, Sanofi CHC", quote: "For Sanofi CHC, strengthening continuing medical education is very important, so that physicians, allies in caring for everyone's health, have the best tools to help pursue the miracles of science." },
      { name: "Yanindore Rodríguez", role: "HCP Engagement, Sanofi CHC", quote: "Over the last six months we have come a long way in our professional course on Microbiota, Prebiotics, and Probiotics. With the support of Universidad de los Andes, the Ibero-American Society of Microbiota, Probiotics and Prebiotics, and Sanofi CHC, today we will deliver more than 95 digital badges to physicians in general medicine and pediatrics across eight Latin American countries." },
      { name: "María Cruz", role: "Medical Manager, Sanofi CHC", quote: "We hope this professional program has been valuable for everyone and that through it you have acquired more tools for the comprehensive care of your patients." },
    ],
    university: [
      { name: "Juliana González", role: "Project Manager, Uniandes — School of Medicine", quote: "As Universidad de los Andes, we thank you for your commitment and dedication to this program. For the School of Medicine, high-quality medical education is very important. This is what has positioned us as one of the best universities in Latin America." },
    ],
    participants: [
      { name: "Dra. Gina Vivas", role: "Pediatrician, Hospital de Fuerzas Armadas, Ecuador", quote: "I am Dr. Gina Vivas, pediatrician at the Hospital de Fuerzas Armadas del Ecuador. I am convinced that the knowledge acquired during this diploma program will benefit me personally and, most importantly, benefit my young patients." },
      { name: "Dra. Carolina Ortiz", role: "Pediatric Gastroenterologist, Guatemala", quote: "I want to congratulate the organizers, the coordinators, and everyone who gave us the talks. It was an excellent course, we learned a great deal, and everything we were taught we will surely be able to apply in our daily practice. It was a high-level academic course. Highly recommended." },
      { name: "Participating physician", role: "Microbiota update program", quote: "It truly was a diploma program that contributed a lot to my life as a physician, and in that same way helped me begin to formulate and understand several pathologies and their treatments based on this diploma program." },
    ],
  },
};

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="space-y-4">
      {eyebrow && <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent-peach">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">{title}</h2>
    </div>
  );
}

export default function UniandesSanofiCaseStudy({ locale }: { locale: Locale }) {
  const t = content[locale];
  const quotes = quoteGroups[locale];

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <GlowBackground indigoPosition={{ x: "22%", y: "36%" }} rustPosition={{ x: "78%", y: "45%" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">{t.eyebrow}</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 max-w-6xl text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              <GradientText>{t.h1Lead}</GradientText>{t.h1Rest}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-7 max-w-4xl text-lg md:text-xl leading-relaxed text-white/70">{t.subheading}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 max-w-5xl">
              <MetricStrip metrics={t.metrics} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href={hubspotUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-peach to-accent-purple px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
                {t.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#juliana-testimonial" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/[0.05]">
                {t.videoCta} <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="juliana-testimonial" className="relative px-6 py-20 md:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <AnimatedSection className="lg:col-span-7 lg:order-2">
            <CaseStudyVideo videoId="1060513524" title="Universidad de los Andes — Juliana González" caption={t.julianaCaption} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="lg:col-span-5 lg:order-1">
            <SectionTitle title={t.summaryTitle} />
            <SummaryText locale={locale} />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><SectionTitle title={t.alliesTitle} /></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.allies.map((ally, index) => (
              <AnimatedSection key={ally.name} delay={index * 0.07}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  {/* TODO: logo */}
                  <div className="mb-5 h-12 rounded-xl border border-dashed border-white/10 bg-white/[0.02]" />
                  <h3 className="text-lg font-semibold text-white leading-tight">{ally.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{ally.role}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto space-y-10">
          <AnimatedSection><SectionTitle title={t.challengeTitle} /></AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base md:text-lg leading-[1.75] text-white/70">
              {t.challenge.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <InsightCallout title={t.strategicInsightTitle}>{t.strategicInsight}</InsightCallout>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><SectionTitle title={t.whyTitle} /></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.capabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 0.08}>
                <FeatureCard icon={capability.icon} title={capability.title} description={capability.description} iconBg="bg-accent-purple/10" iconClassName="text-accent-peach" className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection><SectionTitle title={t.methodologyTitle} /></AnimatedSection>
          <div className="mt-12 space-y-5">
            {t.methodology.map((step, index) => (
              <AnimatedSection key={step} delay={index * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                  <span className="text-3xl md:text-4xl font-bold leading-none text-accent-peach">{String(index + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-lg md:text-xl font-semibold text-white">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-10">
          <AnimatedSection><SectionTitle title={t.implementationTitle} /></AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.tracks.map((track, index) => (
              <AnimatedSection key={track.title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">{track.title}</h3>
                  <p className="mt-5 text-xl text-gradient-peach-purple font-bold">{track.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <InsightCallout title={t.legoTitle} variant="blue">{t.legoInsight}</InsightCallout>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><SectionTitle title={t.resultsTitle} /></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.results.map((result, index) => (
              <AnimatedSection key={result.title} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-xl font-semibold text-white">{result.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {result.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/65">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-peach" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.25}>
            <article className="mt-8 rounded-3xl border border-accent-purple/30 bg-white/[0.04] p-7 md:p-10">
              <h3 className="text-2xl font-semibold text-white">{t.businessTitle}</h3>
              <p className="mt-4 text-4xl md:text-6xl font-bold text-gradient-peach-purple">{t.businessMetric}</p>
              <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-white/65">{t.businessBody}</p>
              <Link href="#juliana-testimonial" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-peach hover:text-accent-peach/80">
                {t.videoCta} <ArrowDown className="w-4 h-4" />
              </Link>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-12">
          <AnimatedSection><SectionTitle title={t.actorsTitle} /></AnimatedSection>
          <QuoteGroup title={t.corporate} quotes={quotes.corporate} quoteLang={locale === "en" ? "es" : undefined} />
          <QuoteGroup title={t.university} quotes={quotes.university} quoteLang={locale === "en" ? "es" : undefined} />
          <QuoteGroup title={t.participants} quotes={quotes.participants} quoteLang={locale === "en" ? "es" : undefined} />
          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto pt-4">
              <CaseStudyVideo videoId="1050039506" title="Programa Profesional Microbiota, Prebióticos y Probióticos — Sanofi CHC × Uniandes" caption={t.sanofiCaption} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><SectionTitle title={t.replicableTitle} /></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.replicable.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <Layers className="h-6 w-6 text-accent-blue" />
                  <p className="mt-5 text-white/75 leading-relaxed">{item}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-36 text-center">
        <GlowBackground indigoPosition={{ x: "30%", y: "45%" }} rustPosition={{ x: "70%", y: "45%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">{t.closingTitle}</h2>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-white/70">{t.closingBody}</p>
            <Link href={hubspotUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-peach to-accent-purple px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
              {t.cta} <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="mt-5">
              <Link href={caseStudyDocUrl} className="text-sm text-white/45 underline underline-offset-4 transition-colors hover:text-white/70">
                {t.downloadLabel}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function SummaryText({ locale }: { locale: Locale }) {
  if (locale === "es") {
    return (
      <p className="mt-7 text-base md:text-lg leading-[1.75] text-white/70">
        En 2022 la Facultad de Medicina de la Universidad de los Andes tenía 8 semanas para virtualizar y lanzar dos programas certificados sobre microbiota, probióticos y prebióticos, dirigidos a dos audiencias clínicas distintas —médicos generales y pediatras de toda Latinoamérica, y alergólogos con foco clínico especializado—. La capacidad académica estaba; el tiempo no. merahki.ai entró como orquestador de punta a punta — diseño instruccional acelerado, virtualización modular, montaje en el LMS de la Universidad, comunicaciones automatizadas y reportería semanal que se entregaba a los project managers de la universidad y de Sanofi. El proyecto se desarrolló en dos fases secuenciales que materializaron el modelo modular. En la primera fase, producimos el programa para médicos generales y pediatras de Latinoamérica y entregamos <strong className="font-semibold text-white">95+ insignias digitales</strong> a médicos certificados en <strong className="font-semibold text-white">8 países</strong>. En la segunda fase, reutilizamos esa misma base de contenido —sin volver a producir desde cero— para reestructurar la ruta formativa para una audiencia clínica especializada, y capacitamos a <strong className="font-semibold text-white">+200 alergólogos</strong>. Una sola inversión de producción, dos audiencias clínicas certificadas, y un activo modular reutilizable para futuros programas de upskilling y reskilling.
      </p>
    );
  }

  return (
    <p className="mt-7 text-base md:text-lg leading-[1.75] text-white/70">
      In 2022, the School of Medicine at Universidad de los Andes had 8 weeks to virtualize and launch two certified programs on microbiota, probiotics, and prebiotics for two distinct clinical audiences — general practitioners and pediatricians across Latin America, and allergists with specialized clinical focus. The academic capacity was there; the time was not. merahki.ai came in as the end-to-end orchestrator — accelerated instructional design, modular virtualization, deployment in the University's LMS, automated communications, and weekly reporting delivered to the university's and Sanofi's project managers. The project unfolded in two sequential phases that brought the modular model to life. In the first phase, we produced the program for general practitioners and pediatricians across Latin America and issued <strong className="font-semibold text-white">95+ digital badges</strong> to certified physicians in <strong className="font-semibold text-white">8 countries</strong>. In the second phase, we reused that same content base — without producing from scratch — to restructure the learning path for a specialized clinical audience, training <strong className="font-semibold text-white">200+ allergists</strong>. One production investment, two certified clinical audiences, and a modular asset reusable for future upskilling and reskilling cycles.
    </p>
  );
}

function QuoteGroup({ title, quotes, quoteLang }: { title: string; quotes: { name: string; role: string; quote: string }[]; quoteLang?: "en" | "es" }) {
  return (
    <div>
      <AnimatedSection>
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      </AnimatedSection>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {quotes.map((quote, index) => (
          <AnimatedSection key={`${quote.name}-${quote.role}`} delay={index * 0.06}>
            <QuoteCard {...quote} quoteLang={quoteLang} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
