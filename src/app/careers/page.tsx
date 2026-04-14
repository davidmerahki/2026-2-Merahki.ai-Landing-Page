import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at merahki.ai",
  description:
    "Join the merahki.ai team and help shape the future of education-led growth. Explore our current job openings.",
  openGraph: {
    title: "Careers at merahki.ai",
    description: "Join our team and help shape the future of education-led growth.",
    url: "https://merahki.ai/careers",
    type: "website",
  },
};

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  applyLink: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "sales-development-representative",
    title: "Sales Development Representative",
    location: "Remote",
    type: "Full-time",
    department: "Sales",
    description: "This role is for someone who loves to connect with people and is passionate about education. As a Representative, you'll be the first point of contact for many of our customers, helping them discover how merahki.ai can transform their business through education-led growth.",
    responsibilities: [
      "Engage with potential customers to understand their needs and pain points",
      "Conduct product demos and presentations to showcase merahki.ai's capabilities",
      "Build and maintain strong relationships with prospects throughout the sales cycle",
      "Collaborate with the sales team to develop strategies for customer acquisition",
      "Track and report on key metrics related to customer engagement and conversion",
      "Stay up-to-date on industry trends and competitive landscape",
      "Provide feedback to product and marketing teams based on customer insights"
    ],
    qualifications: [
      "1+ year of experience in a customer-facing role (sales, account management, or customer success)",
      "Excellent communication and presentation skills",
      "Strong ability to build rapport and trust with customers",
      "Self-motivated with a proven track record of meeting or exceeding targets",
      "Experience with CRM tools (e.g., Salesforce, HubSpot) is a plus",
      "Familiarity with SaaS or EdTech industries is preferred",
      "Bachelor's degree or equivalent work experience"
    ],
    benefits: [
      "Competitive salary: $3,000,000 - $4,500,000 COP based on proficiency",
      "Performance-based bonuses",
      "Flexible remote work environment",
      "Professional development and learning opportunities",
      "Health and wellness benefits",
      "Collaborative and inclusive company culture",
      "Opportunity to make a real impact in the education technology space"
    ],
    applyLink: "https://reuniones.clientify.com/#/davidmerahki/2/?v2=true"
  }
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <GlowBackground
        indigoPosition={{ x: "30%", y: "40%" }}
        rustPosition={{ x: "70%", y: "60%" }}
      />
      
      {/* Job Openings */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          {jobOpenings.map((job, index) => (
            <div key={job.id} className="space-y-12">
              {/* Job Header */}
              <AnimatedSection delay={0.1 * index}>
                <div className="space-y-2">
                  <p className="text-sm text-white/50 uppercase tracking-wider">MERAHKI.AI — REMOTE — FULL-TIME</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {job.title}
                  </h1>
                  <p className="text-white/70 leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                </div>
              </AnimatedSection>

              {/* Key Metrics */}
              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-2">
                    <div className="text-3xl font-bold text-white">67%</div>
                    <p className="text-xs text-white/60 leading-tight">
                      of customers say education influenced their purchase decision
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-2">
                    <div className="text-3xl font-bold text-white">3–13x</div>
                    <p className="text-xs text-white/60 leading-tight">
                      ROI on customer education programs
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-2">
                    <div className="text-3xl font-bold text-white">38.3%</div>
                    <p className="text-xs text-white/60 leading-tight">
                      increase in product adoption through education
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-2">
                    <div className="text-3xl font-bold text-white">3x</div>
                    <p className="text-xs text-white/60 leading-tight">
                      higher NPS scores for educated customers
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* About Merahki.ai */}
              <AnimatedSection delay={0.3}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">About Merahki.ai</h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Most companies treat customer education as an afterthought — a help center nobody reads, a webinar nobody watches. At Merahki.ai, we treat education as the growth lever it actually is. We build corporate academies that reduce churn, accelerate product adoption, and turn certified customers into the most reliable source of qualified leads a company can have.
                    </p>
                    <p>
                      Our approach is called <strong className="text-white">Education-Led Growth (ELG)</strong>. Instead of campaigns that interrupt, we build academies that attract. Instead of renewal calls, we build certification programs that make customers want to stay. The results are measurable, consistent, and defensible.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* The Role */}
              <AnimatedSection delay={0.4}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">THE ROLE</h2>
                  <p className="text-white/70 leading-relaxed">
                    We are looking for a Sales Development Representative who can become a key part of our growth engine. You&apos;ll be the first point of contact for many of our customers, helping them discover how merahki.ai can transform their business through education-led growth.
                  </p>
                </div>
              </AnimatedSection>

              {/* What You'll Do */}
              <AnimatedSection delay={0.5}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">WHAT YOU&apos;LL DO</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/70">
                        <span className="text-accent-purple mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Who We're Looking For */}
              <AnimatedSection delay={0.6}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">WHO WE&apos;RE LOOKING FOR</h2>
                  <ul className="space-y-3">
                    {job.qualifications.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/70">
                        <span className="text-accent-purple mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* What We Offer */}
              <AnimatedSection delay={0.7}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">WHAT WE OFFER</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/70">
                        <span className="text-accent-purple mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* How to Apply */}
              <AnimatedSection delay={0.8}>
                <div className="space-y-4 pb-24">
                  <h2 className="text-2xl font-bold text-white">HOW TO APPLY</h2>
                  <p className="text-white/70 leading-relaxed">
                    If this role excites you and you believe you&apos;re a great fit, we&apos;d love to hear from you. Click the button below to schedule a conversation with our team.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Apply Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-white">
            <p className="font-semibold">Ready to join?</p>
            <p className="text-sm text-white/60">Apply for Sales Development Representative</p>
          </div>
          <Link
            href={jobOpenings[0].applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-accent-purple text-white hover:bg-accent-purple/85 transition-all text-sm"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
