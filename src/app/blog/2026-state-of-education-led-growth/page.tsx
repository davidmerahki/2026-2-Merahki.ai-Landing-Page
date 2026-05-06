import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogBackLink from "@/components/blog/BlogBackLink";

export const metadata: Metadata = {
  title: "2026 State of Education-Led Growth Report | merahki.ai",
  description: "How companies turn education into a strategic growth engine. Key findings: 92.6% AI adoption, 81.6% revenue priority, education expanding into customer lifecycle expansion.",
  openGraph: {
    title: "2026 State of Education-Led Growth Report",
    description: "How companies turn education into a strategic growth engine. Full findings from 190 enterprise respondents.",
    url: "https://merahki.ai/blog/2026-state-of-education-led-growth",
    type: "article",
  },
  alternates: { canonical: "https://merahki.ai/blog/2026-state-of-education-led-growth" },
};

export default function ELGReport2026() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection><BlogBackLink /></AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">Report</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">2026</span>
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/80 text-xs font-medium tracking-widest uppercase">Education-Led Growth</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              2026 State of <span className="text-gradient-peach-purple">Education-Led Growth</span> Report
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-white/60 leading-relaxed mb-4 max-w-3xl">
              How Companies Turn Education Into a Strategic Growth Engine
            </p>
            <p className="text-sm text-white/40">Source: Intellum · 190 respondents · Nov 2025 – Feb 2026</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Executive Summary</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Five key findings shaping education strategy in 2026</h2>
          </AnimatedSection>
          {[
            { title: "Education is expanding beyond retention into revenue growth.", body: "While implementation, product adoption, and retention remain the most common lifecycle stages for education programs, focus on customer expansion has increased significantly year over year. This shift reflects how organizations are beginning to view education not only as a support or retention tool, but as a strategic lever for driving expansion revenue and long-term customer value." },
            { title: "Executive representation is increasing—and it matters.", body: "Education leadership is gradually moving higher within organizations. Programs led by C-level or VP leaders demonstrate stronger indicators of maturity, including higher learner completion rates, broader use of analytics tools, and greater investment in emerging technologies such as AI." },
            { title: "AI adoption has moved from experimentation to everyday implementation.", body: "AI is now widely used across education programs, with 92.6% of organizations reporting active use. Teams are prioritizing AI for accelerating written content creation, supporting learners through automation, and assisting with strategic planning." },
            { title: "Marketing and analytics capabilities are becoming key enablers of education impact.", body: "Programs with stronger marketing support and analytics capabilities are better positioned to drive measurable business outcomes. Education data increasingly connects with systems like CRM and support platforms, expanding the analytics ecosystem around the LMS." },
            { title: "Measurement maturity is improving across education teams.", body: "A growing share of teams now begin measuring outcomes within the first three months of launching a new initiative, and far fewer programs report inconsistent measurement practices compared with the previous year." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card rounded-xl p-6 mb-4">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What is ELG */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "20%", y: "80%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-purple text-xs font-bold tracking-widest uppercase mb-3 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Education-Led Growth?</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">Education-Led Growth (ELG) is a strategic framework positioning employee, customer, and partner education as a primary driver of business growth. By aligning education with revenue, retention, and adoption goals, companies can create measurable business impact.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">The ELG™ Framework — 7 Pillars</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {["Outcomes", "Audience", "Initiative", "Resources", "Delivery", "Marketing", "Measurement"].map((pillar, i) => (
                <div key={pillar} className="glass-card rounded-xl p-4 text-center">
                  <span className="text-accent-purple font-bold text-xs block mb-1">{i + 1}</span>
                  <span className="text-white/70 text-xs">{pillar}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center mt-3 italic">Continuous Improvement ↻</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Survey Demographics */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Survey Demographics</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who participated</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-10">190 respondents verified by name and email. Primarily U.S.-based, enterprise companies. Survey period: Nov 2025 – Feb 2026.</p>
          </AnimatedSection>

          {/* Industry */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Industry</h3>
            <p className="text-white/50 text-sm mb-4">55.3% from Manufacturing or Technology, with the remaining 44.7% representing other industries.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {[
                { v: "27.9%", l: "Manufacturing" }, { v: "27.4%", l: "Technology" },
                { v: "13.2%", l: "Education" }, { v: "12.1%", l: "Retail" },
                { v: "5.8%", l: "Software" }, { v: "5.3%", l: "Business Services" },
                { v: "3.2%", l: "Finance / Insurance" }, { v: "1.6%", l: "Consulting" },
                { v: "1.6%", l: "Energy" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Company Size */}
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-4">Company Size</h3>
            <div className="space-y-2 mb-10">
              {[
                { range: "100 – 499 employees", pct: "20%" },
                { range: "500 – 999 employees", pct: "26.3%" },
                { range: "1,000 – 4,999 employees", pct: "34.2%" },
                { range: "5,000 – 19,000 employees", pct: "12.6%" },
                { range: "20,000+ employees", pct: "6.8%" },
              ].map((row) => (
                <div key={row.range} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.range}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Company Revenue */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Company Revenue</h3>
            <p className="text-white/50 text-sm mb-4">Nearly three-quarters (74.2%) reported annual revenue exceeding $100M.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {[
                { v: "25.8%", l: "$1M–$99M" }, { v: "14.7%", l: "$100M–$199M" },
                { v: "9.5%", l: "$200M–$299M" }, { v: "11.6%", l: "$300M–$399M" },
                { v: "7.9%", l: "$400M–$499M" }, { v: "15.8%", l: "$500M–$1B" },
                { v: "7.4%", l: "$1B–$5B" }, { v: "6.9%", l: ">$5B" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Roles */}
          <AnimatedSection delay={0.25}>
            <h3 className="text-lg font-semibold mb-4">Roles Represented</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { v: "15.8%", l: "C-Level" }, { v: "11.6%", l: "VP" },
                { v: "49.5%", l: "Director" }, { v: "23.2%", l: "Manager" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Department */}
          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold mb-2">Education teams are embedded across the business.</h3>
            <p className="text-white/50 text-sm mb-4">The majority reported into HR/L&D (25.8%), Education Services (12.6%), or Professional Services (12.1%).</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {[
                { v: "25.8%", l: "HR / L&D" }, { v: "12.6%", l: "Education Services" },
                { v: "12.1%", l: "Professional Services" }, { v: "10.5%", l: "Customer Experience" },
                { v: "7.4%", l: "Marketing" }, { v: "7.4%", l: "Own department" },
                { v: "5.8%", l: "Sales" }, { v: "5.3%", l: "Customer Success" },
                { v: "4.2%", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Senior-level */}
          <AnimatedSection delay={0.35}>
            <h3 className="text-lg font-semibold mb-2">Senior-level representation matters.</h3>
            <p className="text-white/50 text-sm mb-4">22.2% report executive-level leadership. Programs with C-level or VP leadership show higher learner completion rates, greater use of data visualization tools, and stronger commitment to AI.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {[
                { v: "34.2%", l: "Director" }, { v: "17.9%", l: "Manager" },
                { v: "13.7%", l: "Sr. Manager" }, { v: "11.1%", l: "C-Level" },
                { v: "8.4%", l: "Sr. Director" }, { v: "7.9%", l: "VP" },
                { v: "3.7%", l: "Head of" }, { v: "3.2%", l: "SVP" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Collaboration */}
          <AnimatedSection delay={0.4}>
            <h3 className="text-lg font-semibold mb-2">Top collaboration partners</h3>
            <p className="text-white/50 text-sm mb-4">Customer Support, Customer Success, and Product teams are the top collaboration partners.</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Customer Support", v: "58.9%" }, { l: "Customer Success", v: "58.4%" },
                { l: "Product", v: "55.3%" }, { l: "Sales", v: "54.7%" },
                { l: "Marketing", v: "48.4%" }, { l: "Customer Experience", v: "23.7%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Completion rates */}
          <AnimatedSection delay={0.45}>
            <h3 className="text-lg font-semibold mb-2">Audience completion rates</h3>
            <p className="text-white/50 text-sm mb-4">Education programs reach a meaningful share of their audience, but rarely the entire base. Internal audiences report highest completion; external audiences (prospects, partners) report much lower participation.</p>
            <div className="space-y-2 mb-10">
              {[
                { range: "Less than 20%", pct: "3.3%" }, { range: "21 – 40%", pct: "21.4%" },
                { range: "41 – 60%", pct: "32.4%" }, { range: "61 – 80%", pct: "27.5%" },
                { range: "81 – 100%", pct: "15.4%" },
              ].map((row) => (
                <div key={row.range} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.range}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Charging */}
          <AnimatedSection delay={0.5}>
            <h3 className="text-lg font-semibold mb-2">Charging for education</h3>
            <p className="text-white/50 text-sm mb-4">Of those educating external audiences, less than a quarter did not charge for any of their programs.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "53.6%", l: "Both on-demand + live" }, { v: "26.5%", l: "No charge" },
                { v: "13.9%", l: "Only live training" }, { v: "6%", l: "Only on-demand" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "60%", y: "40%" }} rustPosition={{ x: "30%", y: "70%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Business Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue and performance metrics take <span className="text-gradient-blue-pink">priority</span>.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-4">Cost reduction (60%) remains the least prioritized objective, indicating most organizations position education as a growth driver rather than purely an operational efficiency tool.</p>
            <p className="text-white/50 text-xs leading-relaxed mb-8"><strong className="text-white/70">Revenue</strong> = increased revenue, product activation, active users · <strong className="text-white/70">Retention</strong> = reduced churn, improved sentiment, product adoption · <strong className="text-white/70">Performance</strong> = improved ramp time, goal attainment, skill proficiency · <strong className="text-white/70">Cost Reduction</strong> = reduced content creation, support, onboarding costs.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { v: "81.6%", l: "Revenue" }, { v: "75.3%", l: "Performance" },
                { v: "68.9%", l: "Retention" }, { v: "60%", l: "Cost Reduction" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Priorities shift with scale</h3>
              <p className="text-white/55 text-sm leading-relaxed">Larger teams (51–99 and 100+ employees) are most likely to prioritize revenue growth (~55%), while also showing the strongest focus on cost reduction—especially the 51–99 group (69%). Smaller teams (5–10 employees) also track revenue and cost closely, reflecting a strong emphasis on demonstrating clear financial impact.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Audience Strategy */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Audience Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which audiences do companies educate?</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { v: "87.4%", l: "Employees" }, { v: "63.1%", l: "Customers" },
                { v: "46.8%", l: "Partners" }, { v: "43.1%", l: "Prospects" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Education is growing across the customer lifecycle.</h3>
            <p className="text-white/50 text-sm mb-4">Focus on expansion has climbed 20 percentage points YoY, highlighting the potential for education to impact customer growth revenue.</p>
            <div className="space-y-2">
              {[
                { stage: "Implementation & Onboarding", pct: "88.8%" },
                { stage: "Product Adoption", pct: "88.8%" },
                { stage: "Retention / Renewal", pct: "78.9%" },
                { stage: "Expansion", pct: "76.3%" },
                { stage: "Sales", pct: "63.8%" },
                { stage: "Marketing", pct: "52%" },
                { stage: "Advocacy", pct: "40.8%" },
              ].map((row) => (
                <div key={row.stage} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.stage}</span>
                  <span className="text-white font-bold text-sm">{row.pct}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Initiative Strategy */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Initiative Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top education initiatives</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">Skills & enablement remain the primary focus. 94.2% of respondents report skills & enablement initiatives, making it the most common education use case by a wide margin.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { v: "94.2%", l: "Skills & Enablement" }, { v: "71.1%", l: "Onboarding" },
                { v: "66.8%", l: "Certifications" }, { v: "60.5%", l: "Compliance" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gradient-peach-purple mb-1">{s.v}</p>
                  <p className="text-white/50 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Certifications and compliance scale with company size</h3>
              <p className="text-white/55 text-sm leading-relaxed">Larger companies are significantly more likely to offer formal certification and compliance initiatives. Compliance reaches its highest levels among organizations with 20,000+ employees, while certification programs are most common in companies with 5,000–19,999 employees. Highly regulated sectors such as Finance and Insurance report the highest use of compliance initiatives.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resource Strategy */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Resource Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training methods & team structure</h2>
          </AnimatedSection>

          {/* Training methods */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">Structured and video-based learning dominate.</h3>
            <p className="text-white/50 text-sm mb-4">Training videos remain the most widely used content type (68.4%), followed by virtual and in-person instructor-led training.</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Training videos (e.g., how-tos)", v: "68.4%" },
                { l: "Virtual instructor-led training", v: "59.5%" },
                { l: "Instructor-led training (in-person)", v: "57.4%" },
                { l: "Knowledge base / help articles", v: "55.8%" },
                { l: "Certification program", v: "55.8%" },
                { l: "On-demand, long-form videos", v: "48.4%" },
                { l: "Customer community", v: "42.1%" },
                { l: "Published training documentation", v: "41.6%" },
                { l: "Prebuilt courseware / training modules", v: "41.6%" },
                { l: "Custom eLearning", v: "41.6%" },
                { l: "In-app guides", v: "34.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Team size */}
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Education team size</h3>
            <p className="text-white/50 text-sm mb-4">The largest share (22.6%) report teams of 11–20 employees, followed by 100+ (20%) and 21–50 (19.5%). Team size strongly correlates with company size.</p>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { v: "8.4%", l: "1–4" }, { v: "14.2%", l: "5–10" },
                { v: "22.6%", l: "11–20" }, { v: "19.5%", l: "21–50" },
                { v: "15.3%", l: "51–99" }, { v: "20%", l: "100+" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs">{s.l} employees</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* External vendors */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">External vendors play a key role.</h3>
            <p className="text-white/50 text-sm mb-4">83.1% use external vendors to support education programs.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl border border-accent-purple/30 bg-accent-purple/10 p-5 text-center">
                <p className="text-3xl font-bold text-gradient-peach-purple">83.1%</p>
                <p className="text-white/60 text-xs mt-1">Use external vendor</p>
              </div>
              <div className="glass-card rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-white/40">16.9%</p>
                <p className="text-white/40 text-xs mt-1">Do not use</p>
              </div>
            </div>
            <p className="text-white/50 text-sm mb-3">Top vendor use cases:</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Pre-built / ready-made learning content", v: "50.3%" },
                { l: "Custom content development", v: "49.7%" },
                { l: "Instructional design / curriculum design", v: "39.5%" },
                { l: "Learning technology / platform support", v: "37.6%" },
                { l: "Education strategy / program design", v: "28%" },
                { l: "Education marketing & promotion", v: "25.5%" },
                { l: "Learner engagement & community management", v: "24.8%" },
                { l: "Certification / exam development", v: "24.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* AI adoption */}
          <AnimatedSection delay={0.25}>
            <h3 className="text-lg font-semibold mb-2">AI is now widely adopted.</h3>
            <p className="text-white/50 text-sm mb-4">92.6% of respondents report using AI — the technology has moved from experimentation to practical implementation.</p>
            <div className="rounded-2xl border border-accent-purple/30 bg-gradient-to-r from-accent-purple/15 to-accent-blue/10 p-8 mb-6 text-center">
              <p className="text-5xl md:text-6xl font-bold text-gradient-peach-purple mb-2">92.6%</p>
              <p className="text-white/60 text-sm">of education programs now use AI</p>
            </div>
          </AnimatedSection>

          {/* AI use cases */}
          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold mb-2">Planned AI adoption priorities</h3>
            <p className="text-white/50 text-sm mb-4">Percentage of respondents who &quot;Agree&quot; or &quot;Completely Agree&quot; they plan to use AI for:</p>
            <div className="space-y-2">
              {[
                { l: "Written Content Creation", v: "69.9%" },
                { l: "Learner Support Automation", v: "65.3%" },
                { l: "Content Planning", v: "65.3%" },
                { l: "Data Analysis / Visualization", v: "59.1%" },
                { l: "Adaptive Learning / Virtual Tutoring", v: "57%" },
                { l: "Predictive Insights (Impact/Outcomes)", v: "57%" },
                { l: "Assessment Creation", v: "55.4%" },
                { l: "Scalable Multimedia / Accessibility", v: "54.4%" },
                { l: "Transcription / Translation", v: "48.2%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "70%", y: "50%" }} rustPosition={{ x: "20%", y: "40%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Marketing Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing support varies significantly by audience.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">External-only education teams report the strongest marketing support (72% dedicated marketing resources), while internal-only teams are the most resource-constrained (40% report no marketing support).</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Marketing access</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { v: "36.4%", l: "Dedicated resources from marketing" },
                { v: "33.5%", l: "Dedicated marketer on education team" },
                { v: "21.4%", l: "Do own marketing (no dedicated marketer)" },
                { v: "8.7%", l: "No marketing resources" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Promotion tactics</h3>
            <p className="text-white/50 text-sm mb-4">Personalized outreach and email lead education promotion tactics.</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Personalized outreach from other departments", v: "63.7%" },
                { l: "Email marketing", v: "58.4%" },
                { l: "Social media", v: "55.8%" },
                { l: "Website banners and pop-ups", v: "44.7%" },
                { l: "Inclusion in product launch or sales collateral", v: "38.9%" },
                { l: "Paid advertising (PPC, sponsored content)", v: "37.9%" },
                { l: "In-app messaging", v: "36.8%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Learner re-engagement</h3>
            <p className="text-white/50 text-sm mb-4">Email remains the primary driver of learner re-engagement. With the rise of AI, personalized learning paths are increasingly used for re-engagement.</p>
            <div className="space-y-2">
              {[
                { l: "Automated reminder emails for incomplete courses", v: "54.7%" },
                { l: "Email campaigns promoting new content", v: "54.2%" },
                { l: "Regular webinars or live sessions", v: "53.7%" },
                { l: "Personalized learning paths", v: "50%" },
                { l: "Community engagement (forums, user groups)", v: "46.8%" },
                { l: "Incentives / Gamification (badges, certificates)", v: "45.3%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Measurement Strategy */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Measurement Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurement maturity is <span className="text-gradient-blue-pink">improving</span>.</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">27% now measure impact immediately (up from 25% in 2025). 49% begin within three months (up from 35%). Programs not consistently measuring dropped from 28% to just 5%.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-4">Time to start measuring impact</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
              {[
                { v: "27%", l: "Immediately" }, { v: "49%", l: "Within 3 months" },
                { v: "18%", l: "6–12 months" }, { v: "16%", l: "1 year+" },
                { v: "5%", l: "Not consistent" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Analytics ecosystem around the LMS</h3>
            <p className="text-white/50 text-sm mb-4">The LMS remains foundational (41.1%), but education data increasingly connects with CRM (55.3%) and support platforms (51.6%).</p>
            <div className="space-y-2 mb-10">
              {[
                { l: "Customer Relationship Management (CRM)", v: "55.3%" },
                { l: "Support software", v: "51.6%" },
                { l: "Survey and feedback platforms", v: "45.8%" },
                { l: "Data visualization", v: "42.6%" },
                { l: "Learning Management System", v: "41.1%" },
                { l: "Customer success tool", v: "36.8%" },
                { l: "Certification and credentialing platforms", v: "36.3%" },
                { l: "Video hosting and analytics platforms", v: "34.7%" },
                { l: "Marketing automation software", v: "32.6%" },
                { l: "eLearning analytics tools", v: "31.6%" },
                { l: "Data warehouse", v: "27.9%" },
                { l: "Product analytics", v: "26.3%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold mb-2">Top measurement challenges</h3>
            <p className="text-white/50 text-sm mb-4">Integration between systems remains the top challenge (31%), but 25.8% report no major obstacles — a growing number of teams are building the processes needed to demonstrate impact.</p>
            <div className="space-y-2">
              {[
                { l: "Lack of integration between systems", v: "31%" },
                { l: "Lack of clear metrics or KPIs", v: "26.8%" },
                { l: "None of these are obstacles", v: "25.8%" },
                { l: "Limited visibility into learner engagement", v: "23.7%" },
                { l: "Difficulty aligning education metrics with business goals", v: "23.7%" },
                { l: "Time constraints prevent consistent tracking", v: "23.2%" },
                { l: "Limited training on analytics tools", v: "22.1%" },
                { l: "Lack of executive buy-in", v: "20.5%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Go-To-Market */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <GlowBackground indigoPosition={{ x: "40%", y: "50%" }} rustPosition={{ x: "80%", y: "30%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Role of Education in Go-To-Market</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education is integral to go-to-market strategy.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">Product alignment</h3>
            <p className="text-white/50 text-sm mb-4">68% say their programs are closely tied to product outcomes. Only 9.6% report minimal or no alignment — down from 32% in 2025.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { v: "56.4%", l: "Very closely" }, { v: "34%", l: "Somewhat closely" },
                { v: "8.5%", l: "Minimally" }, { v: "1.1%", l: "Not at all" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gradient-peach-purple">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">GTM contributions</h3>
            <p className="text-white/50 text-sm mb-4">All GTM-related roles increased year over year. Only 5.8% report education is not integrated into GTM.</p>
            <div className="space-y-2">
              {[
                { l: "Supports customer onboarding and adoption", v: "59.5%" },
                { l: "Helps build brand loyalty and retention", v: "58.9%" },
                { l: "Generates upsell and cross-sell opportunities", v: "54.7%" },
                { l: "Enhances partner enablement", v: "46.3%" },
                { l: "Drives demand generation (new leads)", v: "44.7%" },
                { l: "Not integrated into GTM", v: "5.8%" },
              ].map((row) => (
                <div key={row.l} className="flex items-center justify-between glass-card rounded-lg p-3">
                  <span className="text-white/70 text-sm">{row.l}</span>
                  <span className="text-white font-bold text-sm">{row.v}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Recommendations */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-white/30 text-xs font-medium tracking-widest uppercase mb-4 block">Key Recommendations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to design education programs for real business <span className="text-gradient-peach-purple">impact</span></h2>
          </AnimatedSection>
          {[
            { title: "Prioritize audiences and lifecycle stages with the clearest business value.", body: "Most programs already support implementation, adoption, and retention well. Look for opportunities to extend education into expansion and other high-value moments, rather than spreading resources too thin across every stage." },
            { title: "Strengthen the systems around your LMS.", body: "The LMS remains foundational, but business impact is often proven through connected data from CRM, support, and analytics platforms. Improve the integrations and reporting workflows that help you connect learning activity to customer and business outcomes." },
            { title: "Design programs with measurement built in from the start.", body: "Teams that measure impact immediately typically begin with a clear plan for what success looks like. Define your success metrics before launch, ensure systems and integrations are in place, and establish reporting workflows so you can track outcomes as soon as the program goes live." },
            { title: "Use AI where it saves time fastest.", body: "The most common AI use cases are written content creation, learner support, and planning. Start with high-volume, repeatable work (e.g., drafting content, summarizing material, or powering support workflows) before expanding into more advanced use cases." },
            { title: "Use outside expertise selectively.", body: "Organizations most often use partners for content development, instructional design, and platform support. If internal bandwidth is limited, prioritize external help in the areas that are hardest to scale alone." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card rounded-xl p-6 mb-4">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education is <span className="text-gradient-peach-purple">infrastructure</span>, not campaign.</h2>
            <p className="text-white/55 leading-relaxed max-w-2xl mx-auto mb-8">merahki.ai provides the end-to-end infrastructure to design, produce, scale, and certify education programs that drive measurable business outcomes — aligned to the ELG framework.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Download the ELG Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <ContactSection
        heading="Ready to build your ELG program?"
        subheading="Schedule a meeting with the merahki.ai team and let's design your education-led growth engine."
      />
    </div>
  );
}
