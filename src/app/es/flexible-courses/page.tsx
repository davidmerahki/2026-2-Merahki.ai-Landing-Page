import { buildMetadata, buildServiceJsonLd } from "@/lib/seo/metadata";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Route } from "lucide-react";

export const metadata = buildMetadata("flexible-courses", "es");

const features = [
  {
    icon: Sparkles,
    title: "Eleva tu contenido con IA",
    bullets: [
      "Genera esquemas de cursos y contenido textual desde cero, o revitaliza el contenido existente con la ayuda de un asistente de IA. Sincroniza y reutiliza contenido de aprendizaje en múltiples cursos, programas y escuelas.",
      "Sincroniza y reutiliza contenido de aprendizaje en múltiples cursos, programas y escuelas.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/01/Course_Planner_1100x1100.webm",
    },
  },
  {
    icon: BookOpen,
    title: "Crea cursos interactivos",
    bullets: [
      "Aprovecha la biblioteca más completa de actividades de aprendizaje: ebooks interactivos y videos, evaluaciones de cursos, paquetes SCORM, sesiones en vivo y más.",
      "Engancha a todo tipo de aprendiz con formatos de contenido multimedia diversos en una sola plataforma.",
    ],
    reverse: true,
    media: {
      type: "image" as const,
      src: "/images/flexible%20courses/create%20interactive%20courses.png",
      alt: "Crea cursos interactivos",
    },
  },
  {
    icon: Route,
    title: "Construye learning pathways flexibles",
    bullets: [
      "Decide si tus aprendices navegan el programa libremente, de forma secuencial, o establece tus propios prerequisitos con un constructor visual de cursos.",
      "Personaliza las reglas de finalización para cada actividad del curso y gestiona el progreso de los aprendices de manera flexible.",
    ],
    reverse: false,
    media: {
      type: "image" as const,
      src: "/images/flexible%20courses/Build%20flexible%20learning%20pathways.png",
      alt: "Construye learning pathways flexibles",
    },
  },
];

const serviceJsonLd = buildServiceJsonLd("flexible-courses", "es");

export default function FlexibleCoursesEsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Flexible Courses
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Crea experiencias de aprendizaje{" "}
              <span className="text-gradient-blue-pink">personalizadas</span>{" "}
              que se adaptan a cada estudiante
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Herramientas de aprendizaje adaptativo potenciadas por IA con
              interfaz drag-and-drop. Crea, vende y distribuye cursos que se
              ajustan a las necesidades de cada aprendiz, más rápido que nunca.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
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

      <LogoCarousel />

      {/* Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Transforma la educación con tecnología de aprendizaje adaptativo
              </h2>
              <p className="text-white/60 leading-relaxed">
                Los cursos tradicionales de talla única no logran enganchar a
                los aprendices modernos. Sin personalización, los aprendices se
                desconectan, abandonan los cursos y nunca alcanzan su pleno
                potencial.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo cambia. Nuestra plataforma potenciada por IA
                entrega experiencias de aprendizaje personalizadas y adaptativas
                que se ajustan al ritmo, estilo y progreso de cada aprendiz —
                maximizando las tasas de finalización y los resultados medibles.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Todo lo que necesitas para construir
                <br />
                <span className="text-gradient-blue-pink">
                  Flexible Courses adaptativos
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 items-center ${
                    f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {f.title}
                    </h3>
                    <ul className="space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent-purple text-lg leading-none mt-0.5">
                            ✦
                          </span>
                          <span className="text-white/65 leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    {f.media?.type === "video" ? (
                      <video
                        src={f.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl border border-white/10 shadow-2xl"
                      />
                    ) : f.media?.type === "image" ? (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                        <Image
                          src={f.media.src}
                          alt={f.media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                        <div className="text-center space-y-2 pointer-events-none">
                          <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                          <p className="text-white/20 text-xs tracking-widest uppercase">
                            Image coming soon
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Only with merahki.ai */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              La única plataforma construida para{" "}
              <span className="text-gradient-blue-pink">
                aprendizaje verdaderamente adaptativo y flexible
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Creación de cursos AI-native, entrega personalizada y analytics
              avanzado — todo en un solo lugar.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Empieza a Construir <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Crea tu primer curso flexible"
        subheading="Diseña experiencias de aprendizaje personalizadas y adaptativas que enganchen a cada aprendiz — a cualquier escala."
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
