import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "Microcredentials & Digital Credentials: Research, Use Cases & Strategic Framework",
  description:
    "A comprehensive research report on the rise of microcredentials and digital credentials — global data, institutional use cases, and a strategic framework for universities and enterprises.",
  openGraph: {
    title: "Microcredentials & Digital Credentials: Research, Use Cases & Strategic Framework",
    description:
      "Global data, institutional use cases, and a strategic framework for adopting verifiable, skills-based certification at scale.",
    url: "https://merahki.ai/reports/microcredentials-digital-credentials-research",
    type: "article",
  },
  alternates: {
    canonical: "https://merahki.ai/reports/microcredentials-digital-credentials-research",
  },
};

/* ── helpers ── */
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
);

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto -mx-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left px-4 py-3 text-xs font-bold text-accent-purple uppercase tracking-wider border-b border-white/10 bg-white/[0.03]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-semibold text-white/90" : "text-white/60"}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function MicrocredentialsReport() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Research</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Microcredentials</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Digital Credentials</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Microcredentials &amp; <span className="text-gradient-peach-purple">Digital Credentials</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/70 mb-4">
              Research, Use Cases &amp; Strategic Framework
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-4 max-w-3xl">
              How universities and enterprises are adopting verifiable, skills-based certification to close the skills gap, increase employability, and create new revenue streams.
            </p>
            <p className="text-sm text-white/40">merahki.ai Research · May 2026</p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Download Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                The global workforce is undergoing a fundamental shift. Traditional degrees alone no longer signal job readiness — and employers increasingly demand proof of specific, verifiable skills. Microcredentials and digital credentials have emerged as the bridge between education and employability.
              </p>
              <p className="text-white/55 leading-relaxed text-sm">
                This report examines the current state of microcredentials and digital credentials adoption worldwide, presents institutional use cases across higher education and enterprise, and offers a strategic framework for organizations looking to launch or scale credential programs with measurable impact.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Microcredentials Matter */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "70%", y: "30%" }} rustPosition={{ x: "30%", y: "70%" }} />
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-center">Why Microcredentials Matter Now</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "94%", label: "of employers say they value skills-based hiring over degrees alone (LinkedIn, 2025)." },
                { stat: "72%", label: "of universities worldwide plan to offer microcredentials by 2027 (UNESCO, 2025)." },
                { stat: "$3.2B", label: "projected global digital credentials market by 2028 (MarketsandMarkets)." },
              ].map((item) => (
                <div key={item.stat} className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-gradient-peach-purple mb-2">{item.stat}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">The Skills Gap Crisis</h3>
              <p className="text-white/60 leading-relaxed mb-4 text-sm">
                The World Economic Forum estimates that <strong className="text-white/80">50% of all employees will need reskilling by 2027</strong>. Yet traditional degree programs take 2–4 years to complete — far too slow for the pace of technological change. Microcredentials offer a faster, more targeted path to verified competency.
              </p>
              <p className="text-white/55 leading-relaxed text-sm">
                For enterprises, microcredentials enable rapid workforce upskilling while creating verifiable evidence of learning. For universities, they unlock new revenue streams through shorter, stackable programs that serve working professionals.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Definitions */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Key Definitions</h2>
          </AnimatedSection>
          <AnimatedSection>
            <GlassCard>
              <Table
                headers={["Concept", "Definition", "Key Standards"]}
                rows={[
                  ["Microcredential", "A short, focused certification of learning outcomes in a specific area, designed to be stackable toward larger qualifications.", "UNESCO Microcredential Framework, EU Council Recommendation (2022)"],
                  ["Digital Credential", "A technology-enabled, cryptographically verifiable record of an achievement, skill, or qualification.", "Open Badges 3.0, W3C Verifiable Credentials, CLR Standard"],
                  ["Blockchain Credential", "A digital credential anchored on a distributed ledger for immutability and decentralized verification.", "ELM/Europass, Blockcerts, ISO 27001 compliant issuance"],
                  ["Stackable Credential", "A credential designed to accumulate toward a higher-level qualification (e.g., certificate → diploma → degree).", "Quality assurance alignment with national frameworks"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "50%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center">Institutional Use Cases</h2>
            <p className="text-white/50 text-center max-w-3xl mx-auto text-sm mb-8">
              Microcredentials and digital credentials are being deployed across diverse sectors. Here are the most impactful use cases we&apos;ve identified.
            </p>
          </AnimatedSection>

          {[
            { sector: "Higher Education", title: "Stackable credentials for continuing education", desc: "Universities offer short professional programs (40–120 hours) that stack into diplomas or certificates. Each module awards a digital credential that is blockchain-verifiable. This model drives enrollment from working professionals and creates recurring revenue.", kpi: "3x enrollment growth in continuing ed programs within 18 months." },
            { sector: "Corporate Training", title: "Skills verification for compliance & upskilling", desc: "Enterprises use microcredentials to verify employee competency in regulated industries (healthcare, finance, manufacturing). Digital credentials replace paper certificates and enable real-time compliance dashboards.", kpi: "40% reduction in compliance audit preparation time." },
            { sector: "Partner Ecosystems", title: "Channel certification at scale", desc: "Technology companies certify channel partners through tiered credential programs (Bronze → Silver → Gold). Certified partners generate 2.3x more revenue on average than non-certified ones.", kpi: "2.3x revenue per certified partner vs. non-certified." },
            { sector: "Government & Workforce Development", title: "National qualification frameworks", desc: "Government agencies adopt digital credentials to modernize national qualification systems, making it easier for citizens to demonstrate skills portably across borders.", kpi: "Pilot programs in 23 countries (EU Digital Credentials for Learning)." },
            { sector: "Healthcare", title: "Continuing medical education (CME)", desc: "Hospitals and medical associations issue verifiable credentials for CME programs, enabling instant license renewal verification and cross-institutional credential portability.", kpi: "60% faster license renewal processing." },
            { sector: "EdTech & SaaS Platforms", title: "Product certification as growth lever", desc: "SaaS companies use product certification programs to drive adoption, reduce churn, and create a community of power users. Certified users have 45% higher retention rates.", kpi: "45% higher retention among certified users." },
          ].map((item) => (
            <AnimatedSection key={item.sector}>
              <GlassCard className="mb-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">{item.sector}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Impact KPI</p>
                  <p className="text-sm text-accent-purple font-semibold">{item.kpi}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center">Strategic Framework for Adoption</h2>
            <p className="text-white/50 text-center max-w-3xl mx-auto text-sm mb-8">
              A 5-phase approach for organizations launching or scaling microcredential and digital credential programs.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <Table
                headers={["Phase", "Actions", "Key Deliverable"]}
                rows={[
                  ["1. Assessment", "Map existing programs to skills frameworks. Identify high-demand skills gaps. Benchmark against industry standards.", "Skills Gap Analysis + Credential Opportunity Map"],
                  ["2. Design", "Define credential taxonomy (micro → macro). Align to Open Badges 3.0 / W3C VC standards. Design assessment rubrics for each credential.", "Credential Architecture Document"],
                  ["3. Build", "Develop learning experiences using backward design. Integrate authentic assessments. Configure issuance platform with blockchain verification.", "Pilot-ready credential program"],
                  ["4. Launch & Validate", "Run pilot cohort (50–200 learners). Collect K1–K2 Kirkpatrick data. Validate credential verifiability and portability.", "Pilot Results Report + Iteration Plan"],
                  ["5. Scale & Optimize", "Expand to additional programs. Integrate with HR systems, LinkedIn, and national registries. Automate issuance and revocation workflows.", "Scaled credential ecosystem + ROI dashboard"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-16 px-6">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "50%", y: "50%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technology Standards &amp; Interoperability</h2>
          </AnimatedSection>
          <AnimatedSection>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Open Badges 3.0", desc: "The global standard for portable digital credentials, maintained by 1EdTech. Supports rich metadata, evidence links, and alignment to skills frameworks." },
                  { title: "W3C Verifiable Credentials", desc: "A W3C standard enabling cryptographically secure, privacy-preserving, and machine-verifiable credentials across any platform." },
                  { title: "Comprehensive Learner Record (CLR)", desc: "A standard for aggregating multiple credentials into a holistic learner profile, enabling stackability and skills passports." },
                  { title: "Blockchain Anchoring", desc: "Immutable on-chain records ensure credentials cannot be forged, revoked without audit trail, or lost — even if the issuing institution ceases to exist." },
                ].map((item) => (
                  <div key={item.title} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                    <h4 className="text-sm font-bold text-accent-purple mb-2">{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="border-gradient-peach-purple rounded-2xl p-8 text-center space-y-5">
              <h3 className="text-2xl font-bold">The Future Is Verifiable</h3>
              <p className="text-sm text-white/55 max-w-3xl mx-auto leading-relaxed">
                Microcredentials and digital credentials are not a trend — they are the infrastructure of the future of learning. Organizations that adopt them now will build competitive advantage through workforce agility, institutional reputation, and new revenue models. The question is not <em>whether</em> to adopt, but <em>how fast</em> you can move.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Ready to launch your credential program?"
        subheading="Book a demo and discover how merahki.ai helps you design, issue, and verify digital credentials at scale."
      />
    </div>
  );
}
