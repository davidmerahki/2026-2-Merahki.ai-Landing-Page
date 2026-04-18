import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Play, Zap, FileText, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Video",
  description:
    "Convierte la observación pasiva en aprendizaje activo con nuestra plataforma de video educativo. Subtítulos, cuestionarios, resúmenes y navegación estructurada al instante.",
  openGraph: {
    title: "Interactive Video — merahki.ai",
    description:
      "Transforma cualquier video en una experiencia de aprendizaje interactiva y rastreable con interactividad potenciada por IA y analytics integrado.",
    url: "https://merahki.ai/es/interactive-video",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/interactive-video",
    languages: { en: "https://merahki.ai/interactive-video" },
  },
};

const features = [
  {
    icon: Zap,
    title: "Haz el aprendizaje dinámico y receptivo",
    bullets: [
      "Hace el aprendizaje más dinámico con preguntas interactivas generadas por IA y checkpoints de engagement que mantienen a los aprendices motivados — convirtiendo los videos de formación en aprendizaje activo y medible.",
      "Empodera a los aprendices con tablas de contenido generadas por IA, permitiéndoles explorar y controlar su journey de aprendizaje y encontrar momentos clave al instante.",
    ],
    reverse: false,
    media: {
      type: "image" as const,
      src: "/images/interactive%20video/make%20learning%20dynamic%20and%20responsive.png",
      alt: "Haz el aprendizaje dinámico y receptivo",
    },
  },
  {
    icon: FileText,
    title: "Genera subtítulos y transcripciones",
    bullets: [
      "Haz tu contenido accesible para todos, incluyendo personas con discapacidad auditiva o barreras idiomáticas. Crea subtítulos y transcripciones precisas automáticamente con IA.",
      "Edita subtítulos manualmente para mayor precisión, o usa traducciones impulsadas por IA para llegar a audiencias globales sin horas adicionales de post-producción.",
    ],
    reverse: true,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/ai-video-subtitles.webm",
    },
  },
  {
    icon: Layers,
    title: "Pop-ups inteligentes",
    bullets: [
      "Usa pop-ups prediseñados para explicaciones más profundas, insights o guía — justo cuando los aprendices los necesitan, sin interrumpir el flujo.",
      "Agrega elementos interactivos como botones CTA, reacciones sociales y contenido embebido para crear una experiencia de aprendizaje más rica y conectada.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/popup.webm",
    },
  },
];

const deliverItems = [
  {
    title: "Una experiencia de video consistente en todos los dispositivos",
    body: "Entrega una experiencia de video fluida y completamente responsive en todos los dispositivos y navegadores — sin interrupciones, sin limitaciones.",
  },
  {
    title: "Mantén tus videos seguros y protegidos",
    body: "Aloja tus videos sin complicaciones con hosting de video educativo integrado en nuestra plataforma sin costo adicional. Disfruta de seguridad integrada, streaming rápido y marcas de agua opcionales para la protección del contenido.",
  },
  {
    title: "Descubre reportes interesantes de visualización",
    body: "Obtén insights más profundos sobre el engagement de los aprendices con reportes detallados sobre reproducciones, repeticiones, abandonos e interacciones para optimizar tu contenido. Usa los datos para mejorar tus videos, corregir los puntos de abandono y amplificar lo que funciona.",
  },
];

const stats = [
  { value: "IA", label: "Subtítulos, traducciones y resúmenes" },
  { value: "100%", label: "Mobile-ready y seguro" },
  { value: "Profundo", label: "Analytics en cada interacción" },
];

export default function InteractiveVideoEsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / video right */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            <div className="flex-1 space-y-6">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Interactive Video
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Convierte la observación pasiva en{" "}
                  <span className="text-gradient-blue-pink">
                    aprendizaje activo
                  </span>{" "}
                  con nuestra plataforma de video educativo
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Potencia tus videos con interacciones impulsadas por IA.
                  Agrega subtítulos, cuestionarios, resúmenes y navegación
                  estructurada al instante — todo en un solo lugar, sin horas
                  extra de post-producción.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <Link
                  href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                >
                  Agenda un Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <video
                src="https://www.learnworlds.com/app/uploads/2026/02/interactive-video-hero.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-blue-pink">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Haz tus videos interactivos y captura la atención de tus
                aprendices como nunca antes
              </h2>
              <p className="text-white/60 leading-relaxed">
                La mayoría de los videos de formación son pasivos — los
                aprendices miran, se desconectan y olvidan. Sin checkpoints de
                engagement, retroalimentación en tiempo real o funcionalidades
                de accesibilidad, incluso el mejor contenido cae plano.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai transforma cualquier video en una experiencia de
                aprendizaje interactiva y rastreable. Subtítulos generados por
                IA, cuestionarios, resúmenes y pop-ups mantienen a los
                aprendices comprometidos — y el analytics detallado te dice
                exactamente qué está funcionando.
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
                Interactividad impulsada por IA
                <br />
                <span className="text-gradient-blue-pink">
                  integrada en cada video
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
                    {f.media.type === "video" ? (
                      <video
                        src={f.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl border border-white/10 shadow-2xl"
                      />
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                        <Image
                          src={f.media.src}
                          alt={f.media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliver section */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-3xl mx-auto">
                Entrega una experiencia de aprendizaje más inteligente, segura y
                fluida — en cualquier dispositivo — con las features de{" "}
                <span className="text-gradient-blue-pink">
                  Interactive Video de merahki.ai
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-10 items-center md:flex-row">
              <div className="flex-1 w-full">
                <video
                  src="https://www.learnworlds.com/app/uploads/2026/02/interactive-video-section4.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>

              <div className="flex-1 space-y-8">
                {deliverItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Play className="w-4 h-4 text-accent-purple flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/60 leading-relaxed pl-7">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
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
              Cada video se convierte en una{" "}
              <span className="text-gradient-blue-pink">
                experiencia de aprendizaje
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Subtítulos, cuestionarios, resúmenes y pop-ups generados por IA —
              todo integrado, todo rastreable, sin herramientas adicionales.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Prueba el Interactive Video <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Haz que cada video cuente"
        subheading="Transforma el video pasivo en experiencias de aprendizaje interactivas y medibles — impulsadas por IA."
      />
    </div>
  );
}
