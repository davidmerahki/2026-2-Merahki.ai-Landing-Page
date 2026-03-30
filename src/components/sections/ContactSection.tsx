"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  heading?: string;
  subheading?: string;
}

export default function ContactSection({
  heading = "Book a Demo",
  subheading = "See how merahki.ai can transform your education approach into a growth engine.",
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            {/* Left: form */}
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent-purple/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Request received!
                  </h3>
                  <p className="text-white/50 text-sm">
                    A member of our team will be in touch within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">
                        Role
                      </label>
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white/70 focus:outline-none focus:border-accent-purple/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select your role</option>
                        <option value="ceo" className="bg-black">CEO / Founder</option>
                        <option value="growth" className="bg-black">Head of Growth</option>
                        <option value="cx" className="bg-black">Customer Success</option>
                        <option value="enablement" className="bg-black">Sales Enablement</option>
                        <option value="learning" className="bg-black">L&D / Training</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-1.5 uppercase tracking-wider">
                      What are you looking to achieve?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your use case..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm text-black bg-white hover:bg-white/90 transition-all"
                  >
                    Request a Demo <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-white/25 text-xs">
                    No commitment. We&apos;ll reach out within 1 business day.
                  </p>
                </form>
              )}
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
