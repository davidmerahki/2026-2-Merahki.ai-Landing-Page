import Link from "next/link";
import {
  Check,
  ArrowRight,
  GraduationCap,
  Building2,
  Landmark,
  PenTool,
  Clapperboard,
  MonitorPlay,
  Globe,
  Users,
  BarChart3,
  BadgeCheck,
  Blocks,
  FileCheck,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import Accordion from "@/components/ui/Accordion";
import HubSpotForm from "@/components/HubSpotForm";
import LogoCarousel from "@/components/sections/LogoCarousel";
import TestimonialsES from "@/components/sections/TestimonialsES";
import TestimonialsEN from "@/components/sections/TestimonialsEN";
import KineticText from "@/components/landing/KineticText";
import HeroScroll from "@/components/landing/HeroScroll";
import CourseCarousel from "@/components/landing/CourseCarousel";
import { homeCopy, getHomeFaqItems, getCourses, type Locale } from "@/components/landing/home-v4-copy";

const USE_CASE_ICONS = { uni: GraduationCap, corp: Building2, gov: Landmark } as const;

const FEATURE_ICONS = {
  id: PenTool,
  av: Clapperboard,
  adaptive: MonitorPlay,
  academy: Globe,
  cohorts: Users,
  analytics: BarChart3,
  credentials: BadgeCheck,
  lms: Blocks,
  reports: FileCheck,
} as const;

/* Jerarquía tipográfica única para toda la home */
const H2 = "font-bold tracking-tight leading-[1.1] text-[clamp(1.85rem,3.6vw,3.25rem)] text-white";
const EYEBROW = "text-xs font-semibold tracking-[0.28em] uppercase mb-4";
const SUB = "mt-5 text-base md:text-lg text-white/55 leading-relaxed";

export default function HomeV4({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const agendaHref = `#${t.anchor}`;

  return (
    <div className="relative min-h-screen bg-void overflow-x-clip">
      {/* ── 1. HERO — scroll-driven: el video protagoniza, el texto entra al scroll ── */}
      <HeroScroll copy={t.hero} agendaHref={agendaHref} />

      {/* ── 2. PARA CADA INSTITUCIÓN ── */}
      <section className="relative py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className={`${EYEBROW} text-accent-blue`}>{t.useCases.eyebrow}</p>
              <h2 className={H2}>
                <KineticText text={t.useCases.title} />
              </h2>
              <p className={SUB}>{t.useCases.sub}</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.useCases.cards.map((card, i) => {
              const Icon = USE_CASE_ICONS[card.key as keyof typeof USE_CASE_ICONS];
              return (
                <AnimatedSection key={card.key} delay={i * 0.1}>
                  <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col transition-all duration-300 hover:border-accent-purple/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-purple-blue flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mt-6 text-xl md:text-2xl font-bold text-white leading-snug">{card.title}</h3>
                    <p className="mt-3 text-white/60 text-base leading-relaxed flex-1">{card.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICIOS 001–005 ── */}
      <section className="relative py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className={`${EYEBROW} text-accent-purple`}>{t.services.eyebrow}</p>
            <h2 className={`${H2} max-w-2xl`}>
              <KineticText text={t.services.title} />
            </h2>
          </AnimatedSection>

          <div className="mt-12">
            {t.services.items.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.05}>
                <div className="group grid grid-cols-1 md:grid-cols-[88px_1fr_minmax(0,400px)] items-baseline gap-1 md:gap-8 border-t border-white/10 py-6 md:py-7 px-2 transition-colors hover:bg-white/[0.03]">
                  <span className="text-sm font-semibold text-accent-peach tracking-[0.2em]">{s.num}</span>
                  <h3 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed md:text-right">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* ── 4. CAPACIDADES (features grid) ── */}
      <section className="relative py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className={`${EYEBROW} text-accent-purple`}>{t.features.eyebrow}</p>
              <h2 className={H2}>
                <KineticText text={t.features.title} />
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.items.map((f, i) => {
              const Icon = FEATURE_ICONS[f.key as keyof typeof FEATURE_ICONS];
              return (
                <AnimatedSection key={f.key} delay={(i % 3) * 0.07}>
                  <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-accent-peach/40 hover:bg-white/[0.05]">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent-peach/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent-peach/20">
                        <Icon className="w-5 h-5 text-accent-peach" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white leading-snug">{f.title}</h3>
                        <p className="mt-1.5 text-white/50 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CASOS — carrusel 3D de cursos virtualizados ── */}
      <section className="relative py-16 md:py-20 px-6 border-t border-white/5 overflow-hidden">
        <GlowBackground indigoPosition={{ x: "85%", y: "20%" }} rustPosition={{ x: "10%", y: "85%" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className={`${EYEBROW} text-accent-peach`}>{t.work.eyebrow}</p>
              <h2 className={H2}>
                <KineticText text={t.work.title} />
              </h2>
              <p className={SUB}>{t.work.sub}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <CourseCarousel
              courses={getCourses(locale)}
              prevLabel={t.work.carouselPrev}
              nextLabel={t.work.carouselNext}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-8 text-center">
              <Link
                href={t.work.allHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
              >
                {t.work.allLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. LOGOS (prueba social) ── */}
      <LogoCarousel heading={t.logosHeading} />

      {/* ── 6b. TESTIMONIOS (voces de directores que ya operan con merahki) ── */}
      {locale === "es" ? <TestimonialsES /> : <TestimonialsEN />}

      {/* ── 7. MANIFIESTO ── */}
      <section className="relative py-16 md:py-24 px-6 border-t border-white/5 overflow-hidden">
        <GlowBackground indigoPosition={{ x: "75%", y: "35%" }} rustPosition={{ x: "25%", y: "75%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-5 md:space-y-6">
            {t.manifesto.lines.map((line, i) => (
              <h2
                key={line}
                className={`font-bold tracking-tight leading-[1.08] text-[clamp(1.75rem,4vw,3.5rem)] ${
                  i === t.manifesto.lines.length - 1 ? "pb-2" : "text-white"
                }`}
              >
                <KineticText
                  text={line}
                  delay={i * 0.1}
                  wordClassName={i === t.manifesto.lines.length - 1 ? "text-gradient-peach-purple" : undefined}
                />
              </h2>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section id="faq" className="relative py-16 md:py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className={`${H2} text-center mb-10`}>{t.faqTitle}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion items={getHomeFaqItems(locale)} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 9. CIERRE — evento único de conversión ── */}
      <section id={t.anchor} className="relative py-16 md:py-24 px-6 overflow-hidden border-t border-white/5 scroll-mt-24">
        <GlowBackground indigoPosition={{ x: "20%", y: "30%" }} rustPosition={{ x: "80%", y: "70%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mx-auto max-w-[840px]">
              <h2 className="font-semibold text-white tracking-tight leading-tight text-[clamp(2rem,4.2vw,3.5rem)]">
                <KineticText text={t.closing.h2} />
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed max-w-[680px] mx-auto">
                {t.closing.subtitle}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-2 md:p-4 order-1">
                <HubSpotForm />
              </div>
              <ul className="space-y-8 order-2">
                {t.closing.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-accent-peach" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-white font-medium text-base md:text-lg leading-snug">{bullet.lead}</p>
                      <p className="mt-2 text-white/60 text-sm md:text-base leading-relaxed">{bullet.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
