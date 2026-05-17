"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";

const testimonials = [
  {
    quote:
      "Juliana lidera la transformación digital de la educación continua en la Facultad de Medicina de Uniandes — y comparte su experiencia operando con merahki.ai.",
    name: "Juliana González Cuervo",
    role: "Directora de proyectos de educación continua · Facultad de Medicina, Universidad de los Andes",
    image: "/images/Images-testimonies/Juliana.png",
    href: "#",
  },
  {
    quote:
      "Alexander dirige la educación continua de la Escuela de Gobierno Alberto Lleras Camargo — y cuenta cómo merahki.ai amplifica su capacidad operativa.",
    name: "Alexander Riascos",
    role: "Director de proyectos de educación continua · Facultad de Gobierno Alberto Lleras Camargo",
    image: "/images/Images-testimonies/Alexander.png",
    href: "#",
  },
  {
    quote:
      "Jaime habla del impacto de un programa de educación continua diseñado, producido y operado con la metodología merahki.ai.",
    name: "Jaime Molina",
    role: "Consultor PwC · Presidente Project Management Institute Colombia",
    image: "/images/Images-testimonies/Jaime.jpeg",
    href: "#",
  },
];

export default function TestimonialsES() {
  return (
    <section className="relative py-24 px-6">
      <GlowBackground
        indigoPosition={{ x: "60%", y: "50%" }}
        rustPosition={{ x: "30%", y: "50%" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Lo que dicen los directores que{" "}
              <span className="text-gradient-peach-purple">
                ya operan con nosotros.
              </span>
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 h-full flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <span className="text-3xl font-serif text-accent-pink leading-none">
                    &ldquo;&ldquo;
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/40 text-xs leading-tight mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-accent-pink/40 text-accent-pink text-xs font-semibold uppercase tracking-wider hover:bg-accent-pink/10 transition-colors"
                  >
                    Ver testimonio &raquo;
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
