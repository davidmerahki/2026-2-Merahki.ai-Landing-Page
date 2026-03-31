"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import { CheckCircle2 } from "lucide-react";
import ClientifyForm from "@/components/ClientifyForm";

interface ContactSectionProps {
  heading?: string;
  subheading?: string;
}

export default function ContactSection({
  heading = "Book a Demo",
  subheading = "See how merahki.ai can transform your education approach into a growth engine.",
}: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-24 px-6">
      <GlowBackground
        indigoPosition={{ x: "30%", y: "50%" }}
        rustPosition={{ x: "70%", y: "50%" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block section-badge text-white/30 mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-white/50 max-w-xl mx-auto">{subheading}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Clientify embedded form */}
            <div className="glass-card rounded-2xl overflow-hidden w-full">
              <ClientifyForm />
            </div>

            {/* Right: trust signals */}
            <div className="space-y-6 py-4">
              {[
                {
                  title: "30-min personalized walkthrough",
                  desc: "A tailored demo of the platform matched to your specific use case.",
                },
                {
                  title: "Talk to an expert, not a sales rep",
                  desc: "You'll speak with someone who deeply understands education-led growth.",
                },
                {
                  title: "Implementation roadmap included",
                  desc: "Walk away with a clear plan for launching your first program.",
                },
                {
                  title: "Used by teams in 8+ industries",
                  desc: "From healthcare to SaaS — we've seen and solved your challenges.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/45 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
