import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate a Digital Credentials Platform: A Complete Guide",
  description:
    "A comprehensive due diligence framework — technical audit, functional validation, blockchain verifiability, master evaluation form, and comparative matrix for universities.",
  openGraph: {
    title: "How to Evaluate a Digital Credentials Platform: A Complete Guide",
    description:
      "Complete framework for universities to evaluate digital credentials platforms with technical, operational, legal, and functional rigor.",
    url: "https://merahki.ai/blog/how-to-evaluate-digital-credentials-platform",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/blog/how-to-evaluate-digital-credentials-platform" },
};

export default function HowToEvaluateDigitalCredentialsPlatform() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "35%" }}
          rustPosition={{ x: "75%", y: "65%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Blog &amp; Articles
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Due Diligence</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Technical Audit</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Digital Credentials</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              How to evaluate and choose a{" "}
              <span className="text-gradient-peach-purple">digital credentials</span>{" "}
              platform
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              A complete due diligence framework — technical audit, functional validation, blockchain verifiability, master evaluation form, and comparative matrix for universities and educational institutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-white/40 border-t border-white/10 pt-6">
              <span>merahki.ai</span>
              <span>·</span>
              <span>April 2026</span>
              <span>·</span>
              <span>v1.0</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core idea */}
      <section className="relative py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Core idea</p>
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                Comparing demos, commercial claims, or feature lists is not enough. An institution must demand{" "}
                <span className="text-white font-bold">verifiable evidence</span>: implemented standards, active certifications, functional tests, proven integrations, data architecture, privacy controls, operational continuity, and a real verifiability audit of the credential.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* TOC */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Table of contents</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ["01", "Objectives, scope, and evaluation principles"],
                  ["02", "Recommended selection process"],
                  ["03", "What to request from the vendor"],
                  ["04", "Evaluation dimensions and required evidence"],
                  ["05", "How to validate declared features"],
                  ["06", "Technical audit and blockchain verifiability"],
                  ["07", "Red flags and discard criteria"],
                  ["08", "Master institutional evaluation form"],
                  ["09", "Demo, pilot, and testing script"],
                  ["10", "Scoring methodology and comparative matrix"],
                  ["11", "Economic, contractual, and exit plan evaluation"],
                  ["12", "Final institutional recommendation"],
                  ["A", "Quick discard checklist"],
                  ["B", "RFI/RFP template"],
                  ["C", "Standards and frameworks references"],
                ].map(([num, title]) => (
                  <div key={num} className="flex items-baseline gap-3 py-2 border-b border-white/06">
                    <span className="font-mono text-purple-400/70 text-sm min-w-[28px]">{num}</span>
                    <span className="text-white/80 text-sm leading-snug">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §1 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">01 · Objectives, scope, and principles</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A rigorous evaluation, not a <span className="text-gradient-peach-purple">commercial demo</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">This document enables universities to evaluate digital credentials platforms with technical, operational, legal, and functional rigor before signing a contract. It can be used as a market guide, internal committee document, due diligence checklist, RFI/RFP form, pilot test basis, or comparison matrix across multiple vendors.</p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">The institution is not just buying a tool to issue visually attractive badges or certificates. It is choosing <strong className="text-white font-semibold">critical infrastructure</strong> for digital reputation, verification, portability, traceability, privacy, employability, academic integration, and future continuity.</p>
              <h3 className="text-xl font-bold text-white mb-4">Six guiding principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  ["01", "Prioritize interoperability and portability", "The institution must avoid being locked into a vendor or a proprietary viewer."],
                  ["02", "Distinguish standard, implementation, and certification", "Saying a platform 'supports' a standard does not equal demonstrating a real, verifiable implementation."],
                  ["03", "Evaluate the full product, not just issuance", "Analyze issuance, verification, revocation, corrections, recipient experience, integrations, analytics, operational governance, and future exit."],
                  ["04", "Demand evidence, not just claims", "Every relevant claim must be backed by documents, tests, sandbox, logs, certificates, reports, or verifiable references."],
                  ["05", "Compare against real use cases", "Validation must cover concrete scenarios: diploma, micro-credential with skills, stackable badge, LMS/SIS integration, public verification, and revocation."],
                  ["06", "Decide with weighted criteria", "There must be a scoring system, minimum thresholds, and discard red flags."],
                ].map(([num, title, desc]) => (
                  <div key={num} className="glass-card rounded-2xl p-6">
                    <span className="text-xs font-mono text-purple-400/80 font-semibold">{num}</span>
                    <h4 className="text-white font-bold mt-2 mb-2 text-base">{title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ten domains of minimum scope</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Information security",
                  "Open standards and interoperability",
                  "Regulatory compliance and certifications",
                  "Blockchain, verifiability, and credential audit",
                  "Product features and user experience",
                  "Integrations, APIs, LMS, SIS, SSO, and webhooks",
                  "Privacy, consent, and data governance",
                  "Cloud infrastructure, continuity, and resilience",
                  "Monitoring, traceability, and operational audit",
                  "Operational sustainability, support, roadmap, and exit plan",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2.5 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §2 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">02 · Recommended selection process</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seven phases. <span className="text-gradient-peach-purple">Skipping steps</span> is expensive.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Skipping phases usually results in purchases based on commercial pitch, hidden costs, and painful migrations.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Phase", "Objective", "Deliverable", "What it validates", "Progress signal"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1. Internal definition", "Align academic, technical, legal, and employability objectives", "Prioritized use cases, success criteria, and owners", "What you want to issue and why", "The institution knows exactly what it needs"],
                      ["2. Initial RFI", "Filter vendors that don't meet minimums", "Documentary response and evidence", "Seriousness, standards, certifications, integrations, and support", "Only viable vendors remain"],
                      ["3. Guided demo", "Compare real flows under the same script", "Demo record with observations", "Commercial claims and real UX", "Claims are validated against actual product"],
                      ["4. Due diligence", "Review security, privacy, architecture, and compliance", "Full checklist with traffic-light status", "Hidden risks not visible in a demo", "Structural weaknesses are detected"],
                      ["5. Controlled pilot", "Test with real institutional data and processes", "Pilot results and feedback", "Real operation, timelines, and adoption", "It works in institutional context"],
                      ["6. Economic and contractual review", "Understand total cost and future exit", "TCO, SLA, DPA, exit plan", "Hidden costs, lock-in, and continuity", "Economic comparison is realistic"],
                      ["7. Decision and implementation", "Choose and start with clear governance", "Final matrix and rollout plan", "Overall vendor maturity", "Start with owners, KPIs, and scope defined"],
                    ].map(([phase, ...cols]) => (
                      <tr key={phase} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{phase}</td>
                        {cols.map((c, i) => <td key={i} className="px-4 py-3 text-white/70 text-sm">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 glass-card rounded-2xl p-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-3">Practical recommendation</p>
                <p className="text-white/90 leading-relaxed">The vendor <strong className="text-white">should not see</strong> the full weighting before responding. Evidence first; then the institution applies the scoring. This prevents &ldquo;optimized&rdquo; answers without real substance.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* §3 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">03 · What to request from the vendor</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-gradient-peach-purple">minimum evidence</span> package.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">If the vendor cannot or will not provide it, that is already a risk signal.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Document / evidence", "Why it matters", "Acceptable if…"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Technical product sheet and architecture", "Understand real scope, limits, modules, dependencies, and data model", "Describes environments, architecture, main flows, modules, APIs, and dependencies"],
                      ["API documentation + sandbox", "Validates real integrability", "Includes endpoints, auth, examples, rate limits, versioning, and test environment"],
                      ["Supported standards matrix", "Prevents vague claims", "States exact standard, version, scope, and conformance evidence"],
                      ["Active certifications list", "Proves maturity", "Includes body, validity, scope, and audit date"],
                      ["DPA/DPSA and privacy policy", "Reviews legal obligations", "Clarifies roles, sub-processors, international transfers, and data subject rights"],
                      ["Sub-processors list", "Shows the data treatment chain", "Includes vendor, function, country, and contractual safeguards"],
                      ["SLA and support scheme", "Allows service enforcement", "Defines times, channels, severity levels, escalation, and coverage hours"],
                      ["Continuity / disaster recovery plan", "Evaluates resilience", "States backups, RTO, RPO, and periodic testing"],
                      ["Pentest report or executive letter", "Measures real security", "Recent, by independent third party, with documented remediations"],
                      ["Reference customers", "Contrasts claims with real use", "Cases comparable to the institution"],
                      ["Exit plan", "Prevents lock-in", "Explains export, verification continuity, revocations, and exit costs"],
                    ].map(([doc, why, cond]) => (
                      <tr key={doc} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{doc}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{why}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{cond}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA 1 */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 md:p-10 border border-purple-500/25" style={{background: "radial-gradient(ellipse 120% 100% at 30% 50%, rgba(88,28,135,0.30), rgba(49,10,101,0.35), rgba(10,5,20,0.60))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-4">merahki.ai + pok.tech</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Already know what to ask. <span className="text-gradient-peach-purple">We already have the answers.</span></h3>
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl">merahki.ai, powered by pok.tech, delivers the complete evidence package this guide requires: open standards, active ISO 27001, blockchain-verifiable credentials, documented APIs with sandbox, and a clear exit plan.</p>
              <Link
                href="https://merahki.ai/certification"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                See the certification solution <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* §4 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">04 · Evaluation dimensions and required evidence</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ten pillars. Each with <span className="text-gradient-peach-purple">documentable evidence</span>.</h2>
              <div className="space-y-4">
                {[
                  {
                    num: "4.1", title: "Information security", gradient: "text-gradient-blue-pink",
                    items: ["Mandatory MFA for administrative and issuer profiles.", "Role management with least-privilege principle and immediate access revocation.", "Encryption in transit with TLS 1.2+ and encryption at rest, ideally AES-256.", "Auditable logs for access, permission changes, issuance, revocation, export, and critical events.", "Vulnerability scans, external pentests, secure SDLC, code review, and dependency management.", "Incident response plan, clear owners, and notification SLA."],
                    how: "Request a live demo of user creation, role change, and revocation; ask for logs; request evidence of encryption policies and an executive summary of security audits."
                  },
                  {
                    num: "4.2", title: "Open standards and interoperability", gradient: "text-gradient-purple-blue",
                    items: ["Open Badges 3.0 implemented natively, not just mentioned commercially.", "W3C Verifiable Credentials when the product claims to issue verifiable credentials aligned to that model.", "CLR when the project needs a broader longitudinal or academic record.", "LTI 1.3, OneRoster, CASE, or other frameworks when the institution needs formal academic integrations.", "European Learning Model (ELM) and Europass compatibility for alignment with the European ecosystem, academic mobility, semantic portability, or issuance of European Digital Credentials for Learning.", "Ability to export in standard formats and validate with independent tools."],
                    how: "For any standard: exact version, concrete scope, issued examples, documentation, external validators, and where it exists, certification or presence in official directories."
                  },
                  {
                    num: "4.3", title: "Regulatory compliance and certifications", gradient: "text-gradient-blue-pink",
                    items: ["Active ISO/IEC 27001 for information security management.", "SOC 2 Type II where applicable, covering Security, Availability, Confidentiality, Processing Integrity, and Privacy.", "Compliance with GDPR, LGPD, CCPA, LFPDPPP, FERPA, or other relevant regulations.", "Clear DPA/DPSA, identified sub-processors, and international transfer mechanisms."],
                    how: "Do not accept generic responses like 'we comply with GDPR'. Request contractual roles, policies, data subject rights flows, data map, and concrete mechanisms for deletion, export, and incident response."
                  },
                  {
                    num: "4.4", title: "Blockchain and verifiability", gradient: "text-gradient-purple-blue",
                    items: ["Precise statement of which blockchain is used and what function it serves.", "Exact explanation of what is recorded on-chain vs. off-chain.", "Confirmation that no personal data is stored on-chain.", "Public validator and ability for independent verification on an explorer.", "Ability to audit hash, timestamp, status, and traceability of a credential."],
                    how: null
                  },
                  {
                    num: "4.5", title: "Technical product features", gradient: "text-gradient-peach-purple",
                    items: ["Individual and bulk issuance.", "Templates, branding, multi-language, academic units, and role-based permissions.", "Skills, competencies, outcomes, evidence, rubrics, pathways, stackability, and credential relationships.", "Revocation, expiration, renewal, reissuance, controlled correction, and versioning.", "Recipient wallet or locker, sharing, download, public verification, accessibility, and mobile experience.", "Operational analytics and reports useful for academic and employability management."],
                    how: null
                  },
                  {
                    num: "4.6", title: "Integrations and APIs", gradient: "text-gradient-blue-pink",
                    items: ["Documented APIs with clear auth, sandbox, examples, rate limits, versioning, and backward compatibility.", "SSO with SAML 2.0, OAuth 2.0, or OpenID Connect as applicable.", "LMS, SIS, CRM, ERP, HRIS, assessment platforms, and messaging.", "Webhooks or events for issuance, revocation, claim, expiration, or other flows.", "LTI 1.3 and other edtech frameworks when applicable."],
                    how: null
                  },
                  {
                    num: "4.7", title: "Privacy and data management", gradient: "text-gradient-purple-blue",
                    items: ["Exact map of personal and academic data: required, optional, and derived.", "Data location by environment and by customer.", "Retention, deletion, correction, anonymization, export, and right of access.", "Explicit consent when applicable and auditable record of that consent.", "Ability to separate verification continuity from personal data deletion."],
                    how: null
                  },
                  {
                    num: "4.8", title: "Cloud infrastructure", gradient: "text-gradient-peach-purple",
                    items: ["Hosting region or country.", "Redundancy, backups, high availability, and multi-tenant or single-tenant architecture.", "RTO, RPO, operational continuity, and disaster recovery testing.", "Secrets management, key management, and separated environments."],
                    how: null
                  },
                  {
                    num: "4.9", title: "Monitoring and audit", gradient: "text-gradient-blue-pink",
                    items: ["Log retention period and detail level.", "Security alerts and traceability of administrative actions.", "Log integrity, exportability, and forensic analysis support.", "Monitoring panels or reports available to the institution."],
                    how: null
                  },
                  {
                    num: "4.10", title: "Operational sustainability", gradient: "text-gradient-purple-blue",
                    items: ["Clear and consistent product roadmap.", "Support team and real implementation capacity.", "Business viability and vendor continuity.", "Community, partnerships, references, and service stability."],
                    how: null
                  },
                ].map(({ num, title, gradient, items, how }) => (
                  <div key={num} className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-purple-400/70 text-sm shrink-0 pt-1">{num}</span>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 ${gradient}`}>{title}</h3>
                        <ul className="space-y-2 mb-4">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                              <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {how && (
                          <div className="rounded-xl p-4 border border-orange-400/15" style={{background: "rgba(170,60,8,0.20)"}}>
                            <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-2">How to validate it</p>
                            <p className="text-white/85 text-sm leading-relaxed">{how}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §5 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">05 · How to validate declared features</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Two vendors can say <span className="text-gradient-peach-purple">&ldquo;yes&rdquo;</span> to the same thing and offer <span className="text-gradient-blue-pink">radically different</span> products.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">A feature should only be considered available if it was both documented and demonstrated end-to-end.</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Require a demonstration based on a common script prepared by the university.",
                  "Request temporary access to a sandbox or test tenant.",
                  "Ask for documentation, screenshots, short video, or walkthrough for each critical feature.",
                  "Use an institution-specific test case with real or semi-real data.",
                  "Verify the feature end-to-end: configuration, issuance, student experience, external verification, post-correction, and administration.",
                  "Record evidence in a record with traffic-light status: available, partially available, requires additional development, depends on partner/professional services, or not available.",
                  "Do not score roadmap, marketplace items, or third-party dependencies as natively available features.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-white mb-4">Nine tests with 0–5 score</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Critical feature", "Required test", "Expected result"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Bulk issuance", "Issue a real batch with a test file", "Issued correctly with traceability and controlled errors"],
                      ["Public verification", "Validate credential without login from external link", "Clear, public, and consistent verification"],
                      ["Revocation", "Revoke and re-validate", "Status changes correctly and is audited"],
                      ["Correction / update", "Edit allowed field or reissue per policy", "History trace and coherence maintained"],
                      ["Skills / competencies", "Map skill, level, evidence, and criteria", "Structure is visible and verifiable"],
                      ["LTI / LMS", "Launch from LMS and capture context", "Flow works with declared standard"],
                      ["Issuance API", "Issue via API with test credentials", "Issuance works with documented auth and response"],
                      ["Analytics", "Extract dashboard or useful report", "Data is usable for management"],
                      ["Export", "Download data and credentials", "Format is standard and usable"],
                    ].map(([feat, test, result]) => (
                      <tr key={feat} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{feat}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{test}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* §6 Blockchain */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">06 · Technical audit and blockchain verifiability</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The word <span className="text-gradient-peach-purple">&ldquo;blockchain&rdquo;</span> is often used without technical rigor.</h2>
              <div className="glass-card rounded-2xl p-6 mb-8" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-3">Critical warning</p>
                <p className="text-white/90 leading-relaxed">This section describes how to audit whether a credential was actually registered correctly and verifiably — or whether the vendor is only presenting a marketing narrative.</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.1 · Seven non-negotiable questions for the vendor</h3>
              <ul className="space-y-3 mb-8">
                {[
                  ["Which blockchain exactly?", "Ethereum, Polygon, LACNet, Bitcoin, Solana, Hyperledger, private chain, sidechain, or other."],
                  ["Who operates the nodes", "and whether the network is public, permissioned, or fully private."],
                  ["What data is recorded on-chain:", "hash, identifier, cryptographic proof, contract event, minimal metadata, or the full credential."],
                  ["What data is stored off-chain", "and where it is hosted."],
                  ["How is integrity validation performed", "for a credential and how is revocation proven."],
                  ["How does it avoid", "storing personal data on-chain."],
                  ["What is the relationship", "between the credential viewer, the validation button, and the transaction shown on the explorer."],
                ].map(([q, rest]) => (
                  <li key={q} className="flex items-start gap-3 text-sm leading-relaxed list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2 shrink-0" />
                    <span className="text-white/70"><strong className="text-white">{q}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-white mb-4">6.2 · Mandatory on-chain audit procedure (10 steps)</h3>
              <div className="glass-card rounded-2xl p-6 mb-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-white/90 leading-relaxed">The university must open a <strong className="text-white">real credential</strong> from the vendor, validate it using the validation button, then click the hash, icon, or blockchain link shown on the credential, and verify in the explorer that the transaction was correct. The transaction must not be in a <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">failed</code>, <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">reverted</code>, or <code className="bg-pink-500/15 px-1.5 py-0.5 rounded text-white text-xs">dropped</code> state.</p>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  ["01", "Open a real credential from the vendor — preferably a public credential issued by a client or by the vendor itself."],
                  ["02", "Use the credential's validation button. The validator must confirm the credential's status and expose, directly or indirectly, the link to the cryptographic proof or transaction."],
                  ["03", "Click the hash, icon, or blockchain link shown on the credential or validator. That link should lead to a blockchain explorer or equivalent publicly verifiable reference."],
                  ["04", "Once in the explorer, verify that the transaction exists and its status is successful. It must not appear as failed, reverted, dropped, cancelled, or equivalent states for that chain."],
                  ["05", "Review the transaction hash, timestamp, block, address or contract involved, and consistency with the credential's issuance date."],
                  ["06", "Review all relevant tabs in the explorer: Overview, Logs, Token Transfers, Internal Transactions, Events, or State. Do not stop at the transaction's overview page."],
                  ["07", "Confirm there is no misleading situation where the explorer shows a failed transaction, no token transfers, or failed internal transactions."],
                  ["08", "Verify that the recorded data or emitted event is reasonably connected to the audited credential. If the vendor only shows a generic explorer link with no way to connect it, that proof is insufficient."],
                  ["09", "Repeat the validation on more than one credential if possible: one active, one revoked, and one recently issued."],
                  ["10", "Document screenshots, URLs, transaction status, and any inconsistencies detected."],
                ].map(([n, text]) => (
                  <div key={n} className="flex gap-4 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/80 text-sm font-semibold min-w-[32px]">{n}</span>
                    <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.3 · Explorer review operational matrix</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Element", "What should be visible", "Red flag"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Status", "Success, confirmed, or equivalent. The transaction must exist and have been processed correctly.", "Failed, reverted, dropped, cancelled, indefinite pending, or unexplained error."],
                      ["Token Transfers", "Only if the model actually implies minting or transfer. Must be consistent with the audited credential.", "No transfers when vendor claims minting/NFT; transfers inconsistent with date, contract, or recipient."],
                      ["Internal Transactions", "Must be consistent with contract logic, or absent if the architecture doesn't use them.", "Failed internal transactions, reverts, or inconsistent traces without sufficient technical explanation."],
                      ["Logs / Events", "Contract events or logs that link the on-chain evidence to the credential.", "No way to connect the credential to the event, or logs contradict the viewer."],
                      ["Timestamp, block, and contract", "Must be consistent with issuance date, network, and contract declared by the vendor.", "Relevant time differences, unidentified contract, or different network than declared."],
                    ].map(([elem, should, flag]) => (
                      <tr key={elem} className="border-b border-white/08">
                        <td className="px-4 py-3 text-white font-semibold text-sm">{elem}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{should}</td>
                        <td className="px-4 py-3 text-pink-400/80 text-sm">{flag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-8 glass-card rounded-xl p-4">Not all architectures register a credential as a token transfer. Some only record hashes, events, or cryptographic proofs. Verification is not about &ldquo;seeing an NFT&rdquo; — it is about confirming that the <strong className="text-white">real on-chain proof exists, was successful, and is consistently linked</strong> to the audited credential.</p>
              <h3 className="text-xl font-bold text-white mb-4">6.4 · Six minimum practical verifiability tests</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  ["Test 1", "Test credential generation", "Request a test credential, download it or view it in the viewer, and extract its identifiers."],
                  ["Test 2", "Independent hash or txid verification", "Use the explorer directly — do not rely solely on the vendor's viewer."],
                  ["Test 3", "Cryptographic signature validation", "Or verifiable structure validation where the standard allows it."],
                  ["Test 4", "Revocation", "Revoke the test credential and confirm that the status changes in the validator and, when applicable, in the on-chain evidence."],
                  ["Test 5", "Public validator", "Confirm a third party can verify the credential without login and without exposing unnecessary data."],
                  ["Test 6", "Portability", "Export the credential or its metadata in standard format and confirm it remains usable."],
                ].map(([label, title, desc]) => (
                  <div key={label} className="glass-card rounded-2xl p-5">
                    <p className="text-xs font-mono text-purple-400/80 font-semibold mb-2">{label}</p>
                    <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
                    <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">6.5 · Nine blockchain-washing red flags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Cannot explain exactly which blockchain they use.",
                  "Cannot show a real transaction on a public or verifiable explorer.",
                  "Validation only works inside the proprietary viewer.",
                  "The validation button does not expose independently verifiable evidence.",
                  "The explorer shows failed transactions, failed internal transactions, or time inconsistencies.",
                  "No reasonable way to link the credential to the on-chain data.",
                  "Personal data appears to be stored directly on-chain.",
                  "Charges for credential verification, or verification depends entirely on the vendor's commercial continuity.",
                  "Talks about 'immutability' or 'NFT' without being able to show auditable technical proof.",
                ].map((flag) => (
                  <div key={flag} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 shrink-0" style={{boxShadow: "0 0 8px rgba(236,72,153,0.6)"}} />
                    <span className="text-white/70 text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §7 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">07 · Red flags and discard criteria</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Situations that <span className="text-gradient-blue-pink">justify stopping</span> an evaluation.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Unless the vendor can address them with strong, verifiable evidence.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Absence of relevant technical documentation.",
                  "Refusal to show sandbox or functional tests.",
                  "Standards claims without documentation, validators, or examples.",
                  "No response on sub-processors, data location, or DPA/DPSA.",
                  "No MFA for issuers and administrators.",
                  "Inability to export data and credentials in usable formats.",
                  "No exit plan or verification continuity after contract ends.",
                  "Ambiguous blockchain use without independent proof.",
                  "Expired, partial, or non-applicable certifications.",
                  "Roadmap presented as currently available product.",
                ].map((flag) => (
                  <div key={flag} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 shrink-0" style={{boxShadow: "0 0 8px rgba(236,72,153,0.6)"}} />
                    <span className="text-white/70 text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA 2 */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 md:p-10 border border-purple-500/25" style={{background: "radial-gradient(ellipse 120% 100% at 30% 50%, rgba(88,28,135,0.30), rgba(49,10,101,0.35), rgba(10,5,20,0.60))"}}>
              <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-4">merahki.ai + pok.tech</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">None of these red flags <span className="text-gradient-blue-pink">apply to us</span>.</h3>
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl">Full technical documentation. Auditable blockchain trail on public explorers. Active ISO 27001. DPA-ready. APIs with sandbox. A clear exit plan — all verifiable, no commercial pitch needed.</p>
              <Link
                href="https://merahki.ai/certification"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Verify it yourself <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* §8 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">08 · Master institutional evaluation form</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to <span className="text-gradient-purple-blue">score each item</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">This battery can be used as an RFI/RFP or due diligence form. Responses should include attached evidence, and each item marked as: <strong className="text-white">Documented · Demonstrated · Certified · Pending · Not available</strong>.</p>
              {[
                {
                  num: "8.1", title: "Product and functional scope",
                  questions: [
                    "What types of credentials does the platform issue and manage?",
                    "Does it support individual and bulk issuance, renewal, expiration, revocation, reissuance, and versioning?",
                    "Does it support skills, competencies, learning outcomes, evidence, rubrics, or alignments?",
                    "Does it support pathways, stackability, equivalencies, or relationships between credentials?",
                    "Does it support multiple brands, academic units, campuses, languages, and role-based permissions?",
                  ]
                },
                {
                  num: "8.2", title: "Standards and interoperability",
                  questions: [
                    "Which standards does it support exactly? State version and scope: Open Badges, W3C Verifiable Credentials, CLR, European Learning Model (ELM), Europass / European Digital Credentials for Learning, LTI, OneRoster, CASE, or others.",
                    "Can the vendor demonstrate semantic compatibility and/or practical interoperability with Europass or ELM? Attach field mapping, issued examples, validation, and functional evidence.",
                    "Which parts of the standard are natively implemented vs. require additional development?",
                    "Is there external certification, validation, or presence in official directories?",
                    "How is cryptographic verification, revocation, and portability between systems handled?",
                    "What dependency exists on proprietary viewers or wallets?",
                  ]
                },
                {
                  num: "8.3", title: "Integrations",
                  questions: [
                    "What APIs are available? Attach documentation, auth, rate limits, and versioning.",
                    "Are there webhooks, queues, scheduled exports, or native connectors?",
                    "Which integrations exist with LMS, SIS, CRM, ERP, HRIS, assessment platforms, and SSO?",
                    "Does it support SAML, OAuth 2.0, OpenID Connect, or SCIM where applicable?",
                    "How are students, courses, results, cohorts, and changes synchronized?",
                  ]
                },
                {
                  num: "8.4", title: "Security",
                  questions: [
                    "Is MFA required for administrators and issuers?",
                    "How is privileged access, tenant segregation, and immediate user revocation managed?",
                    "What encryption is used in transit and at rest?",
                    "Are auditable logs maintained? For how long? How is integrity and monitoring guaranteed?",
                    "How often are vulnerability scans and external pentests performed?",
                    "What secure SDLC, code review, dependency management, and CI/CD practices are applied?",
                    "What is the incident management and customer notification process?",
                  ]
                },
                {
                  num: "8.5", title: "Privacy and data",
                  questions: [
                    "What personal and academic data is stored exactly? Separate required, optional, and derived.",
                    "Where is data hosted by environment and by customer? State country or region.",
                    "Who are the sub-processors and what role do they play?",
                    "How are retention, deletion, anonymization, correction, and export managed?",
                    "What mechanisms are used for international data transfers?",
                    "How is GDPR, FERPA, and applicable local legislation addressed?",
                  ]
                },
                {
                  num: "8.6", title: "Operation and service",
                  questions: [
                    "What is the standard SLA and what does support include?",
                    "What language and time zone does support cover?",
                    "How is implementation done, how long does it take, and what depends on the customer?",
                    "What training is offered to administrators, issuers, and internal support?",
                    "What comparable references can they share?",
                  ]
                },
                {
                  num: "8.7", title: "Contract, costs, and exit",
                  questions: [
                    "Describe the pricing model and all billable components.",
                    "State usage limits: storage, issuers, templates, integrations, wallets, analytics, and environments.",
                    "What happens at contract end for verification, hosting, and data export?",
                    "Is there a cost for migration, exit, or verification continuity?",
                    "Does the university retain ownership and control over its data and metadata?",
                  ]
                },
              ].map(({ num, title, questions }) => (
                <div key={num} className="mb-6 glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-purple-400/70 text-sm">{num}</span>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div className="space-y-2">
                    {questions.map((q, i) => (
                      <div key={i} className="flex items-start gap-3 py-2 border-b border-white/06">
                        <span className="font-mono text-purple-400/50 text-xs min-w-[24px] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-white/70 text-sm leading-relaxed">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* §9 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">09 · Demo, pilot, and testing script</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Twelve steps of the <span className="text-gradient-blue-pink">pilot</span>.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Configure a credential with institutional branding, metadata, criteria, and evidence.",
                  "Issue an individual credential and a bulk batch.",
                  "Assign skills or competencies and display them in the credential or its detail view.",
                  "Perform claim by the recipient and share it externally.",
                  "Verify the credential from outside the platform.",
                  "Audit the validation button and blockchain/explorer link where applicable.",
                  "Revoke a credential and verify the status change.",
                  "Correct an allowed field and review the audit trail.",
                  "Consume a sample API or webhook.",
                  "Show role permissions and segregation by academic units.",
                  "Export data, metadata, and relevant evidence.",
                  "Test accessibility, mobile experience, and multi-language where required.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/80 text-sm font-semibold min-w-[28px]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* §10 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">10 · Scoring methodology</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Scale <span className="text-gradient-purple-blue">0 – 5</span>.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Scoring must only be applied to documented and demonstrated features or controls. Roadmap items do not count as current availability.</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {["Score", "Meaning", "Interpretation", "Acceptance"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0", "#ec4899", "Does not comply", "Not implemented or explicitly unsupported", "🔴 Rejection"],
                      ["1", "#f4a27a", "Very weak / roadmap", "Promised or partially conceptual", "🟠 Do not count as available feature"],
                      ["2", "#f4a27a", "Partial", "Exists with significant limitations", "🟠 Requires additional investigation"],
                      ["3", "#a855f7", "Adequate", "Correctly implemented with sufficient evidence", "🟣 Meets minimum"],
                      ["4", "#3b82f6", "Solid", "Robustly implemented with auditable maturity", "🟢 Very good level"],
                      ["5", "#3b82f6", "Excellent", "Exceptional, transparent, leading implementation", "🟢 Clear strength"],
                    ].map(([score, color, sig, interp, acept]) => (
                      <tr key={score} className="border-b border-white/08">
                        <td className="px-4 py-3 font-mono font-bold text-2xl" style={{color}}>{score}</td>
                        <td className="px-4 py-3 text-white font-semibold text-sm">{sig}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{interp}</td>
                        <td className="px-4 py-3 text-white/70 text-sm">{acept}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Suggested weighting by dimension</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        {["Dimension", "Weight", "Min. threshold"].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-white/40 text-xs font-bold tracking-widest uppercase border-b border-white/20">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Standards and interoperability", "20%", "≥ 3/5"],
                        ["Product features", "20%", "≥ 3/5"],
                        ["Security", "15%", "≥ 4/5"],
                        ["Privacy and data", "15%", "≥ 4/5"],
                        ["Blockchain and verifiability", "10%", "≥ 3/5"],
                        ["Integrations and APIs", "10%", "≥ 3/5"],
                        ["Operations and support", "5%", "≥ 3/5"],
                        ["Total economics", "3%", "≥ 3/5"],
                        ["Exit plan / no lock-in", "2%", "≥ 3/5"],
                      ].map(([dim, peso, umbral]) => (
                        <tr key={dim} className="border-b border-white/08">
                          <td className="px-4 py-2 text-white text-sm">{dim}</td>
                          <td className="px-4 py-2 font-mono text-purple-400 text-sm">{peso}</td>
                          <td className="px-4 py-2 text-white/70 text-sm">{umbral}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-3">Suggested formula</p>
                    <code className="text-white/90 text-sm font-mono">Final score = Σ (dimension score × weight)</code>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-purple-400/80 mb-3">Interpretation</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-white/70"><strong className="text-white">≥ 4.0</strong> · recommended</li>
                      <li className="text-white/70"><strong className="text-white">3.0 – 3.9</strong> · acceptable with reservations</li>
                      <li className="text-white/70"><strong className="text-white">&lt; 3.0</strong> · not recommended</li>
                    </ul>
                  </div>
                  <div className="rounded-xl p-5 border border-orange-400/15" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))"}}>
                    <p className="text-xs font-bold tracking-widest uppercase text-orange-300/70 mb-2">Governance rule</p>
                    <p className="text-white/85 text-sm leading-relaxed">Even if the overall score is high, a vendor should not pass if it does not meet minimums in <strong className="text-white">security, privacy, or verifiability</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* §11 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">11 · Economic, contractual, and exit plan evaluation</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Total cost, <span className="text-gradient-purple-blue">real TCO</span>, and exit.</h2>
              <ul className="space-y-3">
                {[
                  "Review pricing per issuer, per student, per credential, per module, per integration, or per storage.",
                  "Identify hidden costs: implementation, branding, APIs, analytics, premium support, migration, wallet, templates, environments, and training.",
                  "Require SLA, DPA, liability limits, sub-processors, continuity, backups, and incident handling.",
                  "Confirm what happens at contract end: data export, revocations, verification continuity, costs, and delivery format.",
                  "Verify that the university retains ownership and control over its data, metadata, and evidence.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 list-none">
                    <span className="w-1 h-1 bg-purple-400/60 rounded-full mt-2.5 shrink-0" />
                    <span className="text-white/70 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* §12 */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">12 · Final institutional recommendation</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Do not choose based on <span className="text-gradient-peach-purple">aesthetics</span> or <span className="text-gradient-blue-pink">commercial pitch</span>.</h2>
              <div className="space-y-4">
                <p className="text-white/70 text-lg leading-relaxed">A university should choose a platform based on demonstrated capacity to <strong className="text-white">issue, verify, integrate, preserve, protect, and govern</strong> credentials and data with open standards, verifiable evidence, and an understandable total cost.</p>
                <p className="text-white/70 text-lg leading-relaxed">Best practice is to combine documentary form, guided demo, due diligence, real pilot, weighted scoring, and contractual review. When a vendor truly has the capability they claim, this process strengthens their case. When they don&apos;t, this process exposes it.</p>
                <p className="text-white/70 text-lg leading-relaxed">Every mature evaluation should include the <strong className="text-white">practical audit of a real credential</strong> and its validation evidence. If the credential cannot be verified reliably and independently, the promise of verifiability is seriously undermined.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Annex A */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Annex A · Quick discard checklist</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Eight <span className="text-gradient-blue-pink">traffic-light</span> questions.</h2>
              <div className="space-y-3 mb-6">
                {[
                  "Does it have active ISO 27001 and, if applicable, SOC 2 Type II?",
                  "Does it implement open standards with an exact version and real evidence?",
                  "Can it demonstrate, when claimed, real compatibility with Europass and/or the European Learning Model (ELM), with technical evidence and functional validation?",
                  "Can a credential be verified independently and its technical evidence audited?",
                  "Does it have documented APIs, sandbox, and auditable logs?",
                  "Does it comply with privacy requirements and avoid storing personal data on-chain?",
                  "Does it allow exporting data and credentials in usable formats?",
                  "Does it have an exit plan and verification continuity?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 py-3 border-b border-white/08">
                    <span className="w-2 h-2 bg-purple-400/60 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
              <div className="glass-card rounded-2xl p-6" style={{background: "radial-gradient(ellipse 90% 90% at 20% 50%, rgba(170,60,8,0.45), rgba(90,25,4,0.55), rgba(18,5,1,0.70))", border: "1px solid rgba(255,140,60,0.15)"}}>
                <p className="text-white/90 leading-relaxed">If the answer is <strong className="text-white">no</strong> to any of these questions and the vendor does not provide evidence of immediate remediation, the platform should move to <strong className="text-white">discard or pause</strong> status.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Annex B */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Annex B · RFI / RFP template</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ten blocks of an <span className="text-gradient-purple-blue">RFI / RFP</span>.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Institutional description and use cases.",
                  "Expected credential volume and user profiles.",
                  "Required standards and minimum accepted versions.",
                  "Mandatory and desirable integrations.",
                  "Security, privacy, and hosting requirements.",
                  "Support requirements, languages, and implementation timelines.",
                  "Mandatory evidence to present.",
                  "Pilot format and acceptance criteria.",
                  "Required pricing model and full breakdown.",
                  "Minimum export and exit conditions.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-white/06">
                    <span className="font-mono text-purple-400/60 text-xs min-w-[24px] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Annex C */}
          <AnimatedSection>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Annex C · Standards and frameworks references</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="text-gradient-peach-purple">Official sources</span> consulted.</h2>
              <div className="space-y-3">
                {[
                  ["01", "1EdTech Consortium — Open Badges.", "Official standard page and implementation resources.", "www.1edtech.org/standards/open-badges"],
                  ["02", "1EdTech — Open Badges Certification Process.", "Official conformance certification process.", "www.1edtech.org/certification/open-badges"],
                  ["03", "1EdTech — TrustEd Apps Program.", "Official directory of products with verified certification/interoperability.", "www.1edtech.org/program/trustedapps"],
                  ["04", "W3C — Verifiable Credentials Data Model v2.0.", "Official recommendation published May 15, 2025.", "www.w3.org/TR/vc-data-model-2.0"],
                  ["05", "Europass — European Digital Credentials.", "Official infrastructure for creating, issuing, storing, sharing, and verifying European digital credentials.", "europass.europa.eu/en/european-digital-credentials"],
                  ["06", "Europass — EDC for Learning.", "Official definition of European digital credentials for learning.", "europass.europa.eu/en/european-digital-credentials-learning"],
                  ["07", "Europass — Information for Developers.", "Technical documentation for the Europass ecosystem.", "europass.europa.eu/en/information-developers"],
                  ["08", "Europass — European Learning Model (ELM) Browser.", "Official European data model for learning and credentials.", "europa.eu/europass/elm-browser/index.html"],
                  ["09", "Europass — Latest developments to the European Learning Model.", "", "europass.europa.eu/en/news/latest-developments-european-learning-model"],
                  ["10", "OWASP — Application Security Verification Standard (ASVS).", "", "owasp.org/www-project-application-security-verification-standard"],
                  ["11", "OWASP — Authentication Cheat Sheet.", "", "cheatsheetseries.owasp.org"],
                  ["12", "NIST — SP 800-218 Secure Software Development Framework (SSDF).", "", "csrc.nist.gov/publications/detail/sp/800-218/final"],
                  ["13", "EUR-Lex — Regulation (EU) 2016/679 (GDPR).", "", "eur-lex.europa.eu/eli/reg/2016/679/oj"],
                  ["14", "Etherscan Docs.", "", "docs.etherscan.io"],
                ].map(([n, title, desc, url]) => (
                  <div key={n} className="flex gap-4 py-3 border-b border-white/08">
                    <span className="font-mono text-purple-400/70 text-sm font-semibold min-w-[28px]">{n}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title} {desc && <span className="text-white/60 font-normal">{desc}</span>}</p>
                      <p className="font-mono text-purple-400/60 text-xs mt-1">{url}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm leading-relaxed mt-6">References consolidated from official sources of 1EdTech, W3C, and OWASP reviewed in March 2026. Always verify the validity of certifications, standard versions, and technical evidence directly from official sources at the time of purchase.</p>
            </div>
          </AnimatedSection>

          {/* Closing */}
          <AnimatedSection>
            <div className="text-center py-8 space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold">Don&apos;t buy <span className="text-gradient-peach-purple">declarations</span>.</h2>
              <h2 className="text-5xl md:text-7xl font-bold">Buy <span className="text-gradient-blue-pink">evidence</span>.</h2>
              <p className="text-white/40 text-sm tracking-widest uppercase mt-6">merahki.ai · Complete Guide · v1.0 · April 2026</p>
              <div className="pt-8">
                <Link
                  href="https://merahki.ai/certification"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-base"
                >
                  See the merahki.ai + pok.tech certification solution <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom nav */}
          <AnimatedSection>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to blog
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Talk to an expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <ContactSection
        heading="Is your institution evaluating digital credentials platforms?"
        subheading="The merahki.ai team can help you apply this evaluation framework and find the right solution for your use cases."
      />
    </div>
  );
}
