import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Methodology — Integral Virtualization | merahki.ai",
  description:
    "AICET Standard · Agile Delivery · Octalysis Gamification · ICAP Framework · Kirkpatrick 4 Levels — the complete methodology powering every merahki.ai learning experience.",
  openGraph: {
    title: "Integral Virtualization Methodology — merahki.ai",
    description:
      "AICET · Agile · Octalysis · ICAP · Kirkpatrick — applied to the 6 merahki.ai solutions.",
    url: "https://merahki.ai/methodology",
    type: "website",
  },
};

/* ────────────────────────── tiny helpers ────────────────────────── */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
    {children}
  </span>
);

const SectionHeading = ({
  id,
  badge,
  title,
  subtitle,
}: {
  id?: string;
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
}) => (
  <div id={id} className="scroll-mt-24 space-y-4 text-center max-w-4xl mx-auto mb-14">
    <AnimatedSection>
      <Badge>{badge}</Badge>
    </AnimatedSection>
    <AnimatedSection delay={0.05}>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
    </AnimatedSection>
    {subtitle && (
      <AnimatedSection delay={0.1}>
        <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </AnimatedSection>
    )}
  </div>
);

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto -mx-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th
              key={h}
              className="text-left px-4 py-3 text-xs font-bold text-accent-purple uppercase tracking-wider border-b border-white/10 bg-white/[0.03]"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-4 py-3 leading-relaxed ${
                  j === 0 ? "font-semibold text-white/90" : "text-white/60"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-accent-purple/60 pl-5 py-3 my-6 text-white/70 italic leading-relaxed text-sm md:text-base">
    {children}
  </div>
);

/* ──────────────────────────── PAGE ──────────────────────────── */
export default function MethodologyPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden text-white">
      {/* ░░░ HERO ░░░ */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "35%", y: "35%" }}
          rustPosition={{ x: "65%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <Badge>Methodology</Badge>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm text-white/40 font-semibold tracking-wider uppercase">
              merahki.ai
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Integral{" "}
              <span className="text-gradient-peach-purple">
                Virtualization Methodology
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              AICET Standard&nbsp;·&nbsp;Agile Delivery&nbsp;·&nbsp;Octalysis
              Gamification&nbsp;·&nbsp;ICAP Framework&nbsp;·&nbsp;Kirkpatrick 4 Levels
            </p>
            <p className="text-sm text-white/35 mt-2">
              Applied to the 6 merahki.ai Solutions
            </p>
            <p className="text-xs text-white/25 mt-1">
              Learning Design &amp; Instructional Design — Version 2.0 — 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ TABLE OF CONTENTS ░░░ */}
      <section className="relative py-10 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <GlassCard>
              <h2 className="text-lg font-bold mb-4 text-white/80">Contents</h2>
              <nav className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {[
                  ["#summary", "Executive Summary"],
                  ["#part-1", "Part I — AICET + Agile Approach"],
                  ["#part-2", "Part II — Octalysis Framework"],
                  ["#part-3", "Part III — ICAP Framework"],
                  ["#part-4", "Part IV — Kirkpatrick 4 Levels"],
                  ["#part-5", "Part V — Integration of the 5 Frameworks"],
                  ["#part-6", "Part VI — The 6 Solutions"],
                  ["#references", "References"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-white/50 hover:text-white transition-colors py-1"
                  >
                    → {label}
                  </a>
                ))}
              </nav>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ EXECUTIVE SUMMARY ░░░ */}
      <section id="summary" className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading
            badge="Summary"
            title="Executive Summary"
          />
          <AnimatedSection>
            <GlassCard>
              <p className="text-white/60 leading-relaxed mb-6">
                This methodology is the complete theoretical and operational framework governing the design, production, launch, and continuous improvement of all virtual learning experiences within the merahki.ai ecosystem. It integrates five complementary frameworks:
              </p>
              <ul className="space-y-3 text-sm text-white/60 leading-relaxed">
                <li className="flex gap-3"><span className="text-accent-purple font-bold shrink-0">AICET</span> Instructional quality criteria across 5 auditable dimensions.</li>
                <li className="flex gap-3"><span className="text-accent-purple font-bold shrink-0">Agile</span> Delivery velocity through short inspection-and-adaptation cycles (Instructional Scrum).</li>
                <li className="flex gap-3"><span className="text-accent-purple font-bold shrink-0">Octalysis</span> Motivational architecture of 8 Core Drives to sustain learner engagement (Yu-kai Chou).</li>
                <li className="flex gap-3"><span className="text-accent-purple font-bold shrink-0">ICAP</span> Cognitive engagement taxonomy to guarantee learning depth (Chi &amp; Wylie, 2014).</li>
                <li className="flex gap-3"><span className="text-accent-purple font-bold shrink-0">Kirkpatrick</span> System for measuring real impact at K1 (reaction), K2 (learning), K3 (transfer), and K4 (results).</li>
              </ul>
              <p className="text-white/50 text-sm mt-6">
                The final section translates this methodology into a specific playbook for each of the 6 merahki.ai solutions.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART I ░░░ */}
      <section id="part-1" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "30%" }}
          rustPosition={{ x: "80%", y: "70%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part I"
            title={
              <>
                Base Methodology:{" "}
                <span className="text-gradient-peach-purple">AICET Standard + Agile Approach</span>
              </>
            }
            subtitle="Effective virtualization is not the digitization of content: it is the re-engineering of the educational act."
          />

          <AnimatedSection>
            <p className="text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-14 text-sm">
              Every design decision —from the granularity of micro-content to the logic of assessments— must trace back to a learning evidence, a measurable organizational impact, and an experience that is both rigorous and deeply motivating.
            </p>
          </AnimatedSection>

          {/* 1.1 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">1.1 The AICET Standard and Its 5 Dimensions</h3>
              <Table
                headers={["Dimension", "Purpose", "Weight"]}
                rows={[
                  ["A — Needs Analysis", "Diagnosis of performance gaps, target audience, and technological context.", "20 %"],
                  ["I — Pedagogical Interaction", "Active and collaborative strategies with timely, specific feedback.", "25 %"],
                  ["C — Content & Resources", "Quality, multimodality, accessibility, and optimal content granularity.", "20 %"],
                  ["E — Learning Assessment", "Constructive alignment, authentic assessment, and traceability.", "20 %"],
                  ["T — Technology & Platform", "SCORM/xAPI interoperability, WCAG 2.1 usability, and scalability.", "15 %"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* 1.2 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">1.2 The 6 Phases of the Methodological Cycle</h3>
              <Table
                headers={["Phase", "AICET Dimension", "Primary Deliverable"]}
                rows={[
                  ["1. Discovery & Analysis", "A", "Analysis & Scope Document (ASD) + Learner Persona Card"],
                  ["2. Instructional Design", "I + E", "Instructional Design Document (IDD) + Alignment Matrix"],
                  ["3. Content Production", "C", "Approved learning objects with AICET-C rubric signed by SME and QA"],
                  ["4. Assembly & Configuration", "T", "Functional course in LMS + technical and accessibility test report"],
                  ["5. Pilot & Validation", "All", "Pilot report with analytics + prioritized adjustment plan"],
                  ["6. Launch & Continuous Improvement", "All", "Learning analytics dashboard + semi-annual AICET audit"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* 1.3 */}
          <AnimatedSection>
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">1.3 Instructional Sprint — Agile Cadence</h3>
              <p className="text-white/55 leading-relaxed mb-4 text-sm">
                The Instructional Sprint adapts Scrum to the e-learning design context. Cycles of 2 to 4 weeks produce functional, reviewable, and navigable increments of the learning product. Sprint events include:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Sprint Planning (2-4 h)", "Daily Sync (15 min)", "Sprint Review with stakeholders (1-2 h)", "Team Retrospective (1 h)", "Integrated AICET Review (30 min)"].map((e) => (
                  <span key={e} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
                    {e}
                  </span>
                ))}
              </div>
              <h4 className="text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">Definition of Done — Completion Criteria</h4>
              <ul className="space-y-2 text-sm text-white/55 leading-relaxed">
                {[
                  "Aligned to the learning objective in the Alignment Matrix.",
                  "Reviewed and approved by the SME with no pending observations.",
                  "Reviewed by instructional QA against the corresponding AICET rubric.",
                  "Published and functional in the LMS development environment.",
                  "xAPI/SCORM metadata recording correctly.",
                  "Meets WCAG 2.1 Level A accessibility minimum.",
                  "Demonstrated and approved in the Sprint Review by the Product Owner.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent-purple mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART II — OCTALYSIS ░░░ */}
      <section id="part-2" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part II"
            title={
              <>
                Octalysis Framework:{" "}
                <span className="text-gradient-blue-pink">Strategic Gamification</span>
              </>
            }
            subtitle="Gamification is the intentional application of game elements in learning contexts to drive desired behaviors."
          />

          <AnimatedSection>
            <p className="text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-14 text-sm">
              The Octalysis Framework (Chou, 2015) moves beyond the superficial PBL approach (Points, Badges, Leaderboards) by providing a motivational architecture of 8 Core Drives that activate both intrinsic and extrinsic motivation in a balanced, ethical way.
            </p>
          </AnimatedSection>

          {/* 2.1 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">2.1 The 8 Core Drives</h3>
              <Table
                headers={["Core Drive", "Description", "Type", "Mechanisms in e-Learning"]}
                rows={[
                  ["CD1 — Epic Meaning", "The learner believes they are contributing to something greater than themselves.", "White Hat", "Impact narratives, visible mission, public blockchain credentials."],
                  ["CD2 — Accomplishment", "A sense of progress, mastery, and accumulated skill.", "White Hat", "Progress bars, competency badges, visible adaptive learning paths."],
                  ["CD3 — Empowerment", "The learner experiments, combines elements, and expresses their own ideas.", "White Hat", "Open-ended projects, maker challenges, portfolio construction."],
                  ["CD4 — Ownership", "A sense of ownership and personalization of the learning experience.", "White Hat", "Downloadable credentials, personalized paths, personal resource space."],
                  ["CD5 — Social Influence", "Collaboration, friendly competition, and peer reference.", "White Hat", "Discussion forums, co-creation, opt-in leaderboards, peer mentoring."],
                  ["CD6 — Scarcity", "Motivation driven by the rarity or exclusivity of something.", "Black Hat", "Level-exclusive content, Early Bird access, limited enrollment windows."],
                  ["CD7 — Unpredictability", "Curiosity and anticipation in the face of the unknown.", "Black Hat", "Surprise quizzes, easter eggs, non-linear content, progressive discovery."],
                  ["CD8 — Loss Avoidance", "The learner acts to avoid losing a resource or status.", "Black Hat", "Study streaks, countdown timers, access expiration warnings."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* 2.2 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">2.2 Octalysis Cycles in the Instructional Process</h3>
              <Table
                headers={["Learner Cycle", "Priority Core Drives", "Pedagogical Goal"]}
                rows={[
                  ["Discovery (onboarding)", "CD1 (Epic Meaning) + CD7 (Unpredictability)", "Activate curiosity and connect the program to the learner's identity and aspirations."],
                  ["Incorporation (early units)", "CD2 (Accomplishment) + CD4 (Ownership)", "Build visible progress momentum and a sense of agency over the learning journey."],
                  ["Scaffolding (development)", "CD3 (Empowerment) + CD5 (Social Influence)", "Sustain engagement through active production and social learning with peers."],
                  ["Closure & certification", "CD2 (Accomplishment) + CD6 (Scarcity) + CD1", "Consolidate pride of achievement, credential exclusivity, and perceived impact."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <Callout>
              <strong className="text-white/90">Ethical Gamification Principle:</strong>{" "}
              Gamification is only ethical and effective when game mechanics reinforce deep learning rather than replace it. A badge that does not certify a real competency is decoration. A verifiable credential that demonstrates a proven skill is human capital. Every game element must trace back to an instructional objective and a measurable post-program behavior.
            </Callout>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART III — ICAP ░░░ */}
      <section id="part-3" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "25%" }}
          rustPosition={{ x: "25%", y: "75%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part III"
            title={
              <>
                ICAP Framework:{" "}
                <span className="text-gradient-purple-blue">Depth of Cognitive Engagement</span>
              </>
            }
            subtitle="Interactive > Constructive > Active > Passive in terms of deep understanding, transfer, and long-term retention."
          />

          <AnimatedSection>
            <p className="text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-14 text-sm">
              The ICAP Framework (Chi &amp; Wylie, 2014) provides an empirically validated taxonomy of four modes of cognitive engagement. This does not invalidate lower modes —exposure and practice are necessary— but no program should remain exclusively at those levels. Instructional design must create deliberate progressions that elevate the mode of engagement.
            </p>
          </AnimatedSection>

          {/* 3.1 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">3.1 The Four ICAP Modes</h3>
              <Table
                headers={["Mode", "Learner Behavior", "Examples in e-Learning", "Depth"]}
                rows={[
                  ["Passive (P)", "Receives information without actively transforming it. Only observes or listens.", "Watching a video, reading an article, listening to an educational podcast.", "Surface"],
                  ["Active (A)", "Manipulates the material in some observable way without generating new knowledge.", "Highlighting, completing forms, drag-and-drop, answering without reflection.", "Procedural"],
                  ["Constructive (C)", "Generates new information beyond the original material; elaborates, infers, explains.", "Concept maps, reflective writing, problem-solving, projects, case analyses.", "Deep"],
                  ["Interactive (I)", "Two or more learners build knowledge mutually through critical dialogue.", "Structured discussion, peer review, co-creation of artifacts, debates.", "Deep + Social"],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* 3.2 */}
          <AnimatedSection>
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">3.2 ICAP Progressions by Learning Unit</h3>
              <p className="text-white/55 leading-relaxed mb-4 text-sm">
                Each learning unit is designed with a deliberate <strong className="text-white/80">P → A → C → I</strong> progression. The learner first receives information (P), then interacts with it in an observable way (A), then elaborates to generate new understanding (C), and finally co-constructs or critically contrasts it with peers (I). Not every unit will reach level I, but none should remain exclusively at P or A.
              </p>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mt-4">
                <h4 className="text-sm font-bold text-accent-purple mb-2 uppercase tracking-wider">
                  ICAP Design Rule (Auditable at Phase 5)
                </h4>
                <p className="text-sm text-white/55 leading-relaxed">
                  No module may allocate more than <strong className="text-white/80">40 %</strong> of its total time to Passive mode. The remaining 60 % must be distributed among Active, Constructive, and Interactive modes, with a minimum of <strong className="text-white/80">20 %</strong> in Constructive or Interactive mode. This distribution is audited via session-time analysis and the type of interactions recorded in the LMS.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART IV — KIRKPATRICK ░░░ */}
      <section id="part-4" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part IV"
            title={
              <>
                Kirkpatrick 4 Levels:{" "}
                <span className="text-gradient-peach-purple">Result Assurance</span>
              </>
            }
            subtitle="The most widely used framework globally for measuring the impact of training programs."
          />

          <AnimatedSection>
            <p className="text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-14 text-sm">
              The New World Kirkpatrick innovation is planning in reverse: starting by defining the business outcomes (Level 4) and working backwards to the design of the learning experience (Level 1). This logic is fully aligned with Wiggins and McTighe&apos;s backward design principle and is integrated into Phase 1 of this methodology.
            </p>
          </AnimatedSection>

          {/* 4.1 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">4.1 The 4 Levels and Their Application</h3>
              <Table
                headers={["Level", "What It Measures", "When", "Instruments", "AICET Threshold"]}
                rows={[
                  ["K1 — Reaction", "Satisfaction, perceived relevance, likelihood of applying learning, NPS.", "Upon completing the course or module.", "Exit survey (NPS + 5-point Likert scale). Qualitative comments.", "Satisfaction ≥ 4.0/5.0. NPS ≥ 40."],
                  ["K2 — Learning", "Knowledge, skills, and attitudes acquired (pre vs. post).", "At the start and end of each module/program.", "Pre/post test, summative assessment, portfolio, competency rubrics.", "70 % of learners achieve ≥ 80 % of objectives."],
                  ["K3 — Transfer", "Application of learning in the real work or social context (observable behavior).", "30, 60, and 90 days post-program.", "Follow-up survey, structured interview, 360° evaluation, direct observation.", "60 % report effective application at 60 days."],
                  ["K4 — Results", "Impact on organizational or business KPIs attributable to the program.", "6 to 12 months post-launch.", "KPI analysis, ROI case study, comparative benchmarking.", "Positive ROI at 12 months + improved business indicator."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* 4.2 */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-4">4.2 Designing from K4 to K1 (Backward Design)</h3>
              <p className="text-white/55 leading-relaxed mb-4 text-sm">
                The planning sequence within Phase 1 follows the New World Kirkpatrick protocol: (1) identify the critical organizational outcome (K4); (2) define observable workplace behaviors (K3); (3) establish learning objectives that develop those behaviors (K2); and (4) design the experience that generates the engagement and motivation needed to make it work (K1).
              </p>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 my-4">
                <h4 className="text-xs font-bold text-accent-purple mb-3 uppercase tracking-wider">The Learning Value Chain</h4>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white/70">
                  <span className="px-3 py-1.5 rounded-lg bg-accent-purple/20 text-accent-purple">Business outcome (K4)</span>
                  <span className="text-white/30">←</span>
                  <span className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400">Workplace behaviors (K3)</span>
                  <span className="text-white/30">←</span>
                  <span className="px-3 py-1.5 rounded-lg bg-pink-500/20 text-pink-400">Real learning (K2)</span>
                  <span className="text-white/30">←</span>
                  <span className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400">Effective experience (K1)</span>
                </div>
                <p className="text-xs text-white/40 mt-4 text-center">
                  Every resource or activity must be able to answer: &laquo;How does this contribute to the K1 → K4 chain?&raquo; If the answer is unclear, the element does not belong in the program.
                </p>
              </div>
              <Callout>
                A program that cannot demonstrate impact at K3 is not a learning program — it is formative entertainment.
              </Callout>
            </GlassCard>
          </AnimatedSection>

          {/* 4.3 */}
          <AnimatedSection>
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">4.3 Required and Supporting Behaviors</h3>
              <p className="text-white/55 leading-relaxed text-sm">
                The New World Kirkpatrick introduces <strong className="text-white/80">Required Behaviors</strong> (non-negotiable behaviors the program must generate) and <strong className="text-white/80">Supporting Behaviors</strong> (workplace conditions that must be in place for transfer to occur). The instructional team documents both in the Analysis &amp; Scope Document and shares them with area managers, transferring shared accountability for K3 to the learner&apos;s organization.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART V — INTEGRATION ░░░ */}
      <section id="part-5" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "40%" }}
          rustPosition={{ x: "50%", y: "60%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part V"
            title={
              <>
                Integration of the 5 Frameworks{" "}
                <span className="text-gradient-blue-pink">by Methodological Phase</span>
              </>
            }
            subtitle="The five frameworks do not operate in silos. They integrate into each phase as layers that add depth to decisions already present in the base methodology."
          />

          <AnimatedSection>
            <GlassCard>
              <Table
                headers={["Phase", "AICET", "ICAP", "Octalysis", "Kirkpatrick"]}
                rows={[
                  ["1. Discovery", "Dim. A: gap and audience diagnosis.", "Diagnose dominant learning mode of target group.", "Identify the 2-3 dominant Core Drives of the target audience.", "Define K4 & K3: expected outcomes and workplace behaviors."],
                  ["2. Design", "Dims. I & E: interaction and assessment.", "Design P→A→C→I progressions per unit. Min. 60 % in C or I.", "Complete Octalysis Map of the program by module.", "Define K1-K4 instruments. Backward design from K4."],
                  ["3. Production", "Dim. C: quality and multimodality.", "ICAP mode documented for each learning object.", "Gamification mechanics integrated into production (not layered on top).", "Post-activity reflection guides to feed K2 measurement."],
                  ["4. Assembly", "Dim. T: technology and platform.", "Interactive activities (forums, peer review) configured in LMS.", "Points, badges, and progress configured in LMS per Core Drive.", "K1 surveys and K2 pre/post assessments configured in LMS."],
                  ["5. Pilot", "Full AICET audit pre-launch.", "Session-time analysis by mode. Adjust if Passive > 40 %.", "Engagement analysis per Core Drive. Adjust active drives.", "First K1 and K2 data collection. Calibrate assessment difficulty."],
                  ["6. Operations", "Semi-annual AICET audit.", "Continuous monitoring of interaction mode via LMS analytics.", "Mechanics refresh at 6 months to prevent habituation.", "K3 follow-up (30-90 days) and K4 measurement (6-12 months)."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ PART VI — 6 SOLUTIONS ░░░ */}
      <section id="part-6" className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading
            badge="Part VI"
            title={
              <>
                Application to the 6{" "}
                <span className="text-gradient-peach-purple">merahki.ai Solutions</span>
              </>
            }
            subtitle="merahki.ai serves more than 1,100 organizations across 19 countries. Its six solutions cover the complete cycle of organizational and academic learning."
          />

          <AnimatedSection>
            <p className="text-white/50 leading-relaxed text-center max-w-3xl mx-auto mb-14 text-sm">
              The methodology is not applied uniformly: it adapts to the target audience, motivational context, and KPIs of each solution.
            </p>
          </AnimatedSection>

          {/* ── Solution 1 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 1</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Certification &amp; Assessment</h3>
              <p className="text-sm text-white/40 mb-4">Blockchain-Verified Digital Credentials at Scale — Open Badges 3.0 · W3C VC · ELM/Europass · ISO 27001 · SOC 2 · Powered by POK.tech</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                merahki.ai&apos;s Certification &amp; Assessment solution, powered by POK.tech, turns learning achievement into publicly verifiable academic and professional capital. The central instructional challenge: ensuring that the credential issued represents a genuinely demonstrated competency, not simply time spent on a platform.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The E dimension (Assessment) is the most critical. Evaluations must be authentic —projects, case studies, practical demonstrations— not purely memorization-based. Each credential maps exactly to one or more verified objectives with a public rubric.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD1 (Epic Meaning) — a blockchain credential is global, permanent, and publicly verifiable. CD4 (Ownership) — the credential belongs to the learner, not to the institution. CD2 (Accomplishment) — microcredential progression creates a visible mastery path.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Assessment activities must operate in Constructive (C) and Interactive (I) modes. An assessment that only measures in Passive mode does not justify the issuance of a verifiable credential.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K3 — the credential motivates new behaviors: applying for new roles, negotiating salary increases, accessing exclusive communities. K4 — the institution gains reputation and attracts qualified talent.</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Credential issuance rate vs. program completion rate (benchmark: ≥ 85 %).</li>
                <li>• % of credentials shared on LinkedIn and professional networks.</li>
                <li>• NPS of certified learners one month after receiving their credential (K1).</li>
                <li>• Impact on employability or internal promotion at 6 months (K3-K4).</li>
                <li>• Annual re-certification rate — learner loyalty to the ecosystem.</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Solution 2 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 2</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Customer Education</h3>
              <p className="text-sm text-white/40 mb-4">Reduce Churn &amp; Accelerate TTV — AI-powered onboarding, adoption, and expansion programs that turn users into brand advocates</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Customer education is one of the highest-ROI investments in the SaaS and enterprise world: educated customers retain more, expand more, and generate more referrals. The instructional challenge: the learner (customer) has no obligation to complete the program, has limited time, and constantly evaluates whether the content is worth their attention.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The I dimension (Interaction) is critical. The experience must be conversational, fast, and immediately applicable. Micro-learning of 3-5 minutes per object with direct application to the product at the moment of learning.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD1 — learning the product gives a genuine competitive edge. CD2 — gamified onboarding paths with &lsquo;Power User&rsquo; badges. CD5 — communities of advanced users sharing best practices.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Constructive mode is the priority — the customer configures the product for their own use cases DURING the learning, not after. Active mode through guided tutorials with interactive sandboxes in real time.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K3: does the customer actively use the features they learned? K4: reduced churn, increased NRR (Net Revenue Retention), and shorter Time to Value (TTV).</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Time to Value (TTV): time between registration and first value obtained (benchmark: 30-50 % reduction).</li>
                <li>• Product Adoption Rate: % of features activated vs. features available.</li>
                <li>• Churn Rate of customers who completed the program vs. those who did not.</li>
                <li>• NPS of educated vs. non-educated customers (benchmark: ≥ 15-point differential).</li>
                <li>• MRR expansion in accounts where the program was completed (K4).</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Solution 3 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 3</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Partner Academies</h3>
              <p className="text-sm text-white/40 mb-4">Certify &amp; Scale Your Channel — AI-enabled enablement programs that help partners sell more, sooner</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Partner enablement is the most underutilized growth lever in organizations with commercial channels. The instructional challenge: the partner is an independent professional with split loyalty across multiple brands and extremely limited time. The program must be as valuable to the partner as to the company funding it.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The A dimension (Analysis) requires deep characterization of the partner: what other brands do they represent? What competencies do they already have? What prevents them from selling more today?</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD2 — tiered certification paths (Bronze, Silver, Gold) with growing status and benefits. CD5 — partner communities where top performers share cases. CD6 — exclusive content and preferential margins for advanced levels.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Constructive mode — partners build their own sales playbooks adapted to their markets. Interactive mode in communities of practice where they share real objections and closing tactics.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K3: does the certified partner sell more, faster? K4: increase in GMV or ARR generated by the certified channel vs. the non-certified channel.</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Partner Ramp-Up Time: time between onboarding and first successful sale (benchmark: 40 % reduction).</li>
                <li>• Certification rate by level (Bronze/Silver/Gold): completion and learning retention.</li>
                <li>• Revenue per certified partner vs. non-certified partner (K4).</li>
                <li>• CSAT score of end customers served by certified partners.</li>
                <li>• Annual certification renewal rate — retention of the active commercial channel.</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Solution 4 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 4</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Training &amp; Certification</h3>
              <p className="text-sm text-white/40 mb-4">Workforce Training &amp; Certification — Boost Readiness</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Corporate Training &amp; Certification faces the most persistent challenge in organizational learning: the gap between knowing and doing. Employees can complete 100 % of mandatory courses and continue with the same behaviors. Instructional design for this solution is organizational behavior engineering, not merely knowledge transmission.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The E dimension must move away from multiple-choice tests and prioritize performance simulations, decision-making scenarios, and projects applied to real work. The I dimension activates deliberate practice between peers and leader coaching.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD2 — certification paths tied to career development and compensation plans. CD1 — linked to the organization&apos;s mission and values, not just compliance. CD4 — the employee selects their own development path.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Constructive mode (personal action plans, reflecting on past experiences) and Interactive mode (learning circles, peer coaching, communities of practice) produce sustained behavior change.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K3 via &lsquo;application contracts&rsquo; where participant and manager validate the execution plan and share accountability. K4 measured against team performance KPIs: productivity, quality, cycle time, compliance.</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Mandatory training completion rate (benchmark: ≥ 95 % for compliance programs).</li>
                <li>• Rate of application contracts completed and validated by the manager (K3).</li>
                <li>• Change in team performance KPIs for trained vs. untrained groups at 90 days (K4).</li>
                <li>• Compliance incidents in teams with valid certification vs. those without (K4).</li>
                <li>• Internal promotion rate of employees with completed certification paths (K3-K4).</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Solution 5 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 5</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Product Adoption &amp; Onboarding</h3>
              <p className="text-sm text-white/40 mb-4">Close the Adoption Gap — AI-driven programs that help customers realize value faster and stay longer</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                This solution addresses the most critical moment in the customer lifecycle: the first 90 days. If the customer does not experience the product&apos;s &lsquo;aha moment&rsquo; within the first few weeks, churn probability escalates exponentially. The average learner spends fewer than 7 minutes on any onboarding resource without immediately perceived value.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The C dimension (Content) requires maximum granularity. Each micro-object answers a single question or builds a single critical skill. Content is activated by user behavior in the product (behavior-triggered learning).</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD7 — discovery of hidden features generates organic curiosity. CD2 — onboarding checklists with visible progress. CD8 — notifications informing the customer what value they are leaving on the table.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Active mode is dominant — learning happens while the customer uses the product in their own account with interactive in-app guides. Constructive mode when the customer configures the product to their own needs.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K2 — key actions in the product platform. K3 — sustained adoption at 30-60 days. K4 — contribution to NRR and likelihood of account expansion.</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Time to First Value (TTFV): time between registration and first value action in the product.</li>
                <li>• Feature Adoption Rate by onboarding cohort (benchmark: ≥ 60 % of key features in 30 days).</li>
                <li>• Activation Rate: % of new customers who complete the mandatory onboarding.</li>
                <li>• Correlation between onboarding completion and Customer LTV.</li>
                <li>• 90-day churn of customers who completed vs. did not complete onboarding (K3-K4).</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Solution 6 ── */}
          <AnimatedSection>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">Solution 6</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Marketing Your Courses</h3>
              <p className="text-sm text-white/40 mb-4">Outsourced Growth Engine for Academies — The marketing execution team that scales your academy using the best-in-class stack</p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                An academy designed with excellence that nobody discovers impacts nobody. Instructional design and course marketing are complementary, not sequential. This methodology integrates — from Phase 1 — the elements that will make the program commercially compelling.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-accent-purple mb-2">AICET</h4>
                  <p className="text-xs text-white/50 leading-relaxed">The E dimension (Assessment) is the strongest marketing asset. Verifiable learner outcomes are the most powerful sales argument. Graduate testimonials, employment rates, salary increases, and blockchain credentials are high-impact marketing assets.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Octalysis</h4>
                  <p className="text-xs text-white/50 leading-relaxed">CD1 — the message communicates the transformation, not the content. Not &lsquo;50 hours of video&rsquo; but &lsquo;in 8 weeks you will launch your first campaign with real results&rsquo;. CD6 — limited seats, Early Bird pricing. CD7 — high-value free content that generates curiosity.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-pink-400 mb-2">ICAP in Marketing</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Free content must operate in Active and Constructive modes — workshops, mini-projects, diagnostic assessments — so the prospect experiences the program&apos;s learning style before purchasing.</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-bold text-orange-400 mb-2">Kirkpatrick</h4>
                  <p className="text-xs text-white/50 leading-relaxed">K2 — the prospect learns something valuable from the free content. K3 — the enrollment decision. K4 — revenue generated by the academy. The attribution model connects to the LMS to measure which free content best predicts conversion.</p>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">Key Impact KPIs</h4>
              <ul className="text-xs text-white/50 leading-relaxed space-y-1">
                <li>• Conversion rate from free content to paid enrollment (benchmark: ≥ 2-5 % from webinars, ≥ 10 % from mini-courses).</li>
                <li>• CAC (Customer Acquisition Cost) per program vs. student LTV.</li>
                <li>• Re-enrollment rate in advanced programs (upsell) as a deep satisfaction indicator.</li>
                <li>• Net Promoter Score of the program (predictor of organic referrals).</li>
                <li>• Revenue per cohort and by acquisition channel (for marketing budget optimization).</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* ── Synthesis Table ── */}
          <AnimatedSection>
            <GlassCard className="mb-10">
              <h3 className="text-xl font-bold mb-6">Synthesis: The Integral Methodology Across All Solutions</h3>
              <Table
                headers={["merahki.ai Solution", "Priority Core Drives", "Dominant ICAP Modes", "Central Kirkpatrick KPI"]}
                rows={[
                  ["Certification & Assessment", "CD1 (Epic Meaning), CD2 (Accomplishment), CD4 (Ownership)", "C + I", "K3: employability impact. K4: institutional reputation."],
                  ["Customer Education", "CD1, CD2 (Accomplishment), CD5 (Social Influence)", "A + C", "K3: feature adoption. K4: churn rate + NRR."],
                  ["Partner Academies", "CD2 (Accomplishment), CD5 (Social), CD6 (Scarcity)", "C + I", "K3: revenue per certified partner. K4: certified channel GMV."],
                  ["Training & Certification", "CD1 (Epic Meaning), CD2, CD4 (Ownership)", "C + I", "K3: application contracts completed. K4: team performance KPIs."],
                  ["Product Adoption", "CD2, CD7 (Unpredictability), CD8 (Loss Avoidance)", "A + C", "K2: in-product activation. K3: adoption at 30-60 days."],
                  ["Marketing Your Courses", "CD1 (Epic Meaning), CD6 (Scarcity), CD7", "A + C", "K3: enrollment conversion. K4: student LTV."],
                ]}
              />
            </GlassCard>
          </AnimatedSection>

          {/* ── Commitment ── */}
          <AnimatedSection>
            <div className="border-gradient-peach-purple rounded-2xl p-8 text-center space-y-5">
              <h3 className="text-2xl font-bold">merahki.ai Methodological Commitment</h3>
              <p className="text-sm text-white/50 max-w-3xl mx-auto leading-relaxed">
                Every learning experience designed under this methodology guarantees:
              </p>
              <ul className="text-sm text-white/60 leading-relaxed space-y-2 max-w-2xl mx-auto text-left">
                <li className="flex gap-2"><span className="text-accent-purple mt-0.5">✓</span> Verifiable quality across the 5 AICET criteria.</li>
                <li className="flex gap-2"><span className="text-accent-purple mt-0.5">✓</span> Sustained motivation through at least 3 active Octalysis Core Drives.</li>
                <li className="flex gap-2"><span className="text-accent-purple mt-0.5">✓</span> Deep cognitive engagement: minimum 60 % of time in ICAP Constructive or Interactive modes.</li>
                <li className="flex gap-2"><span className="text-accent-purple mt-0.5">✓</span> Measurable impact at a minimum of two Kirkpatrick levels, including — always — Level 3 (transfer to real context).</li>
              </ul>
              <Callout>
                A program that cannot demonstrate K3 impact is not a learning program — it is formative entertainment.
              </Callout>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ░░░ REFERENCES ░░░ */}
      <section id="references" className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "50%" }}
          rustPosition={{ x: "60%", y: "50%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading badge="References" title="References" />
          <AnimatedSection>
            <GlassCard>
              <ul className="space-y-3 text-sm text-white/55 leading-relaxed">
                <li>Chi, M. T. H., &amp; Wylie, R. (2014). <em>The ICAP Framework: Linking Cognitive Engagement to Active Learning Outcomes.</em> Educational Psychologist, 49(4), 219-243.</li>
                <li>Chou, Y.-K. (2015). <em>Actionable Gamification: Beyond Points, Badges, and Leaderboards.</em> Octalysis Media.</li>
                <li>Kirkpatrick, J. D., &amp; Kirkpatrick, W. K. (2016). <em>Kirkpatrick&apos;s Four Levels of Training Evaluation.</em> ATD Press.</li>
                <li>Anderson, L. W., &amp; Krathwohl, D. R. (Eds.). (2001). <em>A Taxonomy for Learning, Teaching, and Assessing.</em> Addison Wesley Longman.</li>
                <li>Mayer, R. E. (2009). <em>Multimedia Learning</em> (2nd ed.). Cambridge University Press.</li>
                <li>Schwaber, K., &amp; Sutherland, J. (2020). <em>The Scrum Guide.</em> Scrum.org.</li>
                <li>W3C. (2018). <em>Web Content Accessibility Guidelines (WCAG) 2.1.</em> https://www.w3.org/TR/WCAG21/</li>
                <li>Wiggins, G., &amp; McTighe, J. (2005). <em>Understanding by Design</em> (2nd ed.). ASCD.</li>
              </ul>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 text-center">
              <p className="text-xs text-white/30">
                Intellectual Property — Property of merahki.ai. Reserved for internal use. Total or partial reproduction requires express authorization from the Learning Design team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Ready to transform your learning programs?"
        subheading="Book a demo and discover how our integral methodology powers real learning outcomes."
      />
    </div>
  );
}
