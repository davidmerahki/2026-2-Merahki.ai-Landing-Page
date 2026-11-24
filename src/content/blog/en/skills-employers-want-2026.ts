import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const QS = "https://insights.qs.com/hubfs/Reports/QS_World_Future_Skills_Index_2027.pdf";
const QS_WEBINAR = "https://insights.qs.com/hubfs/Webinar%20Presentations/World%20Future%20Skills%20Index%202027/World%20Future%20Skills%20Index%202027.pdf";
const HOLONIQ = "https://www.holoniq.com/notes/2026-latin-america-edtech-100";
const UNESCO_MC = "https://connect.unevoc.unesco.org/home/UNESCO+Publications/lang=en/akt=detail/qs=6648";
const OECD = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const articulo: Articulo = {
  slug: "skills-employers-want-2026",
  lang: "en",
  altSlug: "habilidades-que-piden-los-empleadores-2026",
  title: "Skills employers want in 2026: what the WEF, QS and HolonIQ data says, and how to prove those skills with verifiable credentials",
  seoTitle: "Skills Employers Want in 2026: WEF, QS and HolonIQ Data",
  description: "The skills employers want in 2026 according to the WEF Future of Jobs Report, QS and HolonIQ, and how to train and certify them with verifiable evidence.",
  kicker: "Skills and hiring",
  keywords: [
    "skills employers want",
    "most in-demand skills 2026",
    "future of jobs report 2025 skills",
    "skills gap",
    "soft skills employers want",
    "skills-based hiring",
    "verifiable credentials",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "According to the World Economic Forum's <strong>Future of Jobs Report 2025</strong>, analytical thinking is the most sought-after core skill, and the fastest-growing skills through 2030 are AI and big data, networks and cybersecurity, and technological literacy.",
    "Human skills rise alongside them: creative thinking, resilience, flexibility and agility, and curiosity and lifelong learning. QS finds that gaps in human skills are as large as, or larger than, technical gaps.",
    "Employers expect 39% of core skills to change between 2025 and 2030, and 63% call skills gaps the biggest barrier to transforming their business.",
    "Only 14% of employers plan to consider online certificates in hiring, while 81% rely on work experience and 48% on skills assessments.",
    "The fix is to design training around observable behaviors and issue verifiable credentials that carry criteria and evidence of performance.",
  ],
  body: [
    {
      t: "p",
      html: `The skills employers want most for 2026 to 2030 are analytical thinking, AI and big data, networks and cybersecurity, and technological literacy, together with human skills such as creative thinking, resilience, flexibility and curiosity, according to the World Economic Forum's ${a(WEF, "Future of Jobs Report 2025")}. Employers expect 39% of workers' core skills to change in that period, and 63% name skills gaps as the biggest barrier to transforming their business.`,
    },
    {
      t: "p",
      html: "This article adapts the WEF report and cross-checks it with the QS World Future Skills Index 2027 and HolonIQ's research on the training market. It is written for HR, L&D and continuing education leaders who need to decide what to train for in 2026 and how to prove that people actually learned it.",
    },

    { t: "h2", text: "The most in-demand skills, according to the World Economic Forum" },
    {
      t: "p",
      html: "The WEF surveyed more than 1,000 employers representing more than 14 million workers across 22 industry clusters and 55 economies. Analytical thinking remains the most sought-after core skill: seven in ten companies consider it essential. These are the skills growing fastest through 2030:",
    },
    {
      t: "ul",
      items: [
        "<strong>AI and big data</strong>, at the top of the global list.",
        "<strong>Networks and cybersecurity</strong>.",
        "<strong>Technological literacy</strong>.",
        "<strong>Creative thinking</strong>.",
        "<strong>Resilience, flexibility and agility</strong>.",
        "<strong>Curiosity and lifelong learning</strong>.",
      ],
    },
    {
      t: "p",
      html: "The list mixes technology with human judgment, and that mix is the finding. A company that trains only on AI tools covers half of what the market is asking for.",
    },
    {
      t: "stats",
      items: [
        { value: "39%", label: "of workers' core skills will change or become outdated between 2025 and 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "59 of 100", label: "workers will need training by 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "63%", label: "of employers see skills gaps as the biggest barrier to business transformation", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "85%", label: "of employers plan to prioritize upskilling their workforce", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
      ],
    },
    {
      t: "p",
      html: "The pace has slowed. The 2023 edition expected 44% of skills to change, and the 2020 edition expected 57%. Even so, out of every 100 workers, 29 will need upskilling in their current role, 19 will be upskilled and redeployed, and 11 are unlikely to get the training they need.",
    },

    { t: "h2", text: "Why human skills matter as much as technical skills, according to QS" },
    {
      t: "p",
      html: `The ${a(QS, "QS World Future Skills Index 2027")} covers 89 economies and draws on QS's employer reputation survey, where more than 92,000 employers say whether the graduates they hire can do the job. Its conclusion: human skills are the most sought after, and their gaps are equal to or larger than technical gaps.`,
    },
    {
      t: "p",
      html: "Leading economies are not exempt. The United States shows double-digit gaps in human cognitive skills (−13.0) and people-centered leadership (−12.2), with similar gaps in the United Kingdom and Australia. In the index launch presentation, QS reported that demand for future skills exceeds supply in 51% of countries.",
    },
    {
      t: "p",
      html: "QS also warns that higher education is moving slower than the labor market on human, digital, green and AI skills, and calls on employers to invest in workforce development and lifelong learning. Without upskilling and reskilling, it adds, AI may concentrate opportunity among people who already have the skills.",
    },

    { t: "h2", text: "The training market is shifting toward job outcomes, according to HolonIQ" },
    {
      t: "quote",
      text: "A market moving past general course delivery toward training tied to a job outcome.",
      cite: "HolonIQ, 2026 Latin America EdTech 100",
      href: HOLONIQ,
    },
    {
      t: "p",
      html: `HolonIQ wrote that about Latin America, where workforce training makes up 37% of its ${a(HOLONIQ, "2026 EdTech 100")} list, up from 28% in 2020. Generic upskilling lost weight as a category, while career support and development grew. The direction matches what employers told the WEF: buyers of training now ask what job result a program produces before they ask how many courses it includes.`,
    },

    { t: "h2", text: "Why only 14% of employers consider online certificates when hiring" },
    {
      t: "p",
      html: "The WEF asked employers how they will assess candidates' skills between 2025 and 2030. The answers rank where trust sits today:",
    },
    {
      t: "table",
      head: ["How employers will assess skills in hiring", "Share of employers (2025 to 2030)"],
      rows: [
        ["Work experience", "81%"],
        ["Skills assessments", "48%"],
        ["University degree as a requirement", "43%"],
        ["Psychometric tests", "34%"],
        ["Prioritizing apprenticeships", "17%"],
        ["Online certificates", "14%"],
      ],
      caption: "WEF, Future of Jobs Report 2025, pp. 61 and 62.",
    },
    {
      t: "p",
      html: "Employers trust what shows performance, like experience or a skills test. Most online certificates only show that someone finished a course. And while 63% of employers see effective reskilling and upskilling as a way to increase talent availability, only 19% plan to remove degree requirements and hire on skills (WEF, p. 53).",
    },
    {
      t: "p",
      html: `The answer is a credential that behaves like a skills assessment. It needs five things: the competency described in terms of the job, the criteria used to assess it, evidence of performance (a project, a solved case), an identifiable issuer, and verification a third party can run in seconds. Open Badges 3.0 and W3C Verifiable Credentials can carry all of that inside the credential. The micro-credential definition proposed by ${a(UNESCO_MC, "UNESCO in 2022")} points the same way: verifying means being able to check what the holder claims, whatever the technology.`,
    },
    {
      t: "callout",
      title: "The standard worth designing for",
      html: `A credential a recruiter can open, read and check looks more like a skills assessment than a certificate of attendance. That is how we design ${a("/certification", "skills certification with verifiable credentials")} at merahki.ai.`,
    },

    { t: "h2", text: "How to turn these skills into training programs and credentials" },
    {
      t: "p",
      html: "A skill from the WEF list cannot be taught or assessed as written. First it has to be translated into observable behaviors on the job, with a decision about which evidence proves it.",
    },
    {
      t: "table",
      head: ["Skill (WEF)", "Observable behavior", "Evidence for the credential"],
      rows: [
        ["Analytical thinking", "Breaks down a team problem and justifies a decision with data", "Case report scored with a rubric"],
        ["AI and big data", "Uses an AI tool in a real workflow of the role and validates the output", "Deliverable with a prompt log and verification notes"],
        ["Leadership and social influence", "Runs a follow-up meeting and secures commitments from the team", "Simulation or video scored by the manager and a peer"],
        ["Empathy and active listening", "Restates a customer's need before proposing a solution", "Role-play conversation scored with a rubric"],
        ["Talent management", "Gives feedback with an explicit model and leaves a development plan", "Development plan for a direct report, reviewed by HR"],
      ],
      caption: "Examples of how a skill becomes an observable behavior and a piece of evidence.",
    },
    {
      t: "ol",
      items: [
        "Pick the roles and the skills gap using your own data. The global list points the way, but it does not replace your assessment.",
        "Translate each skill into observable behaviors for the role, anchored to an occupational standard.",
        "Write the learning outcomes and define the evidence for each one.",
        "Design activities built on real work: cases, projects and simulations.",
        "Issue a verifiable credential that carries the criteria and the evidence.",
        "Measure with Kirkpatrick: learning (level 2), behavior on the job (level 3) and business results (level 4).",
      ],
    },
    {
      t: "p",
      html: "Two rules keep the credential honest. First, the person who scores the evidence uses a rubric written before the program starts, so the criteria do not drift between cohorts. Second, the evidence stays attached to the credential, so a recruiter can see the project or the case, and the badge carries more than a course title.",
    },
    {
      t: "p",
      html: `For companies, the starting point is a role-based ${a("/training-certification", "employee training and certification program")}. For universities, it is a short ${a("/lifelong-learning", "lifelong learning pathway")} co-designed with employers in the sector. The ${a(OECD, "OECD (2023)")} found that short credentials carry more weight in sectors where industry helps design them or talent is scarce, such as IT, health care and manufacturing.`,
    },
    {
      t: "cta",
      html: "merahki.ai designs by competencies, builds, runs and certifies programs that turn these skills into evidence an employer can verify.",
    },

    { t: "h2", text: "What the data says about Latin America" },
    {
      t: "p",
      html: "For companies with teams in Latin America, the WEF's Colombia profile shows more pressure than the global average. Among employers surveyed there, 65% see skills gaps as a key barrier, 44% of core skills are expected to change by 2030, and 55 of every 100 workers will need training. Four of the five skills with growing use in Colombia are human skills: talent management, leadership and social influence, creative thinking, and empathy and active listening.",
    },
    {
      t: "p",
      html: `Regionally, 84% of Latin American companies in the WEF survey plan to reskill their own workforce, ahead of hiring new people with new skills (68%). QS's ${a(QS_WEBINAR, "supply and demand chart")} places Colombia on the excess-supply side, which QS links to talent migration and lower entry salaries. Closing that gap takes training aligned with what employers demand, and adding generic graduates makes it wider.`,
    },
  ],
  faq: [
    {
      q: "What skills do employers want most in 2026?",
      a: "According to the WEF Future of Jobs Report 2025, analytical thinking is the most sought-after core skill. The fastest-growing skills through 2030 are AI and big data, networks and cybersecurity, and technological literacy, followed by creative thinking, resilience, flexibility and agility, and curiosity and lifelong learning.",
    },
    {
      q: "What soft skills do employers look for?",
      a: "The ones the WEF and QS call human skills: creative thinking, leadership and social influence, empathy and active listening, resilience and flexibility, and talent management. QS found that gaps in these skills are equal to or larger than gaps in technical skills.",
    },
    {
      q: "Do employers value online certificates?",
      a: "Not much, for now. Only 14% of employers surveyed by the WEF plan to consider online certificates in hiring, compared with 81% who rely on work experience and 48% who use skills assessments. A verifiable credential with criteria and evidence of performance gets closer to what employers already trust.",
    },
    {
      q: "What is a skills gap?",
      a: "A skills gap is the difference between the skills an organization needs and the skills its people have or it can find in the market. In the WEF survey, 63% of employers call it the biggest barrier to transforming their business.",
    },
    {
      q: "How can someone prove a skill to an employer?",
      a: "With evidence of performance: a project, a solved case or a simulation scored against clear criteria. That evidence can travel inside a verifiable credential in Open Badges 3.0, so the employer can check it without calling the issuer.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "January 2025", note: "Executive summary (p. 6), skills assessment (pp. 53, 61 and 62) and Colombia profile (pp. 128 and 129)" },
    { title: "QS World Future Skills Index 2027", publisher: "QS Quacquarelli Symonds", url: QS, date: "June 2026" },
    { title: "Global Webinar: QS World Future Skills Index 2027 (slides)", publisher: "QS Quacquarelli Symonds", url: QS_WEBINAR, date: "July 2026" },
    { title: "2026 Latin America EdTech 100", publisher: "HolonIQ", url: HOLONIQ, date: "October 2026" },
    { title: "Towards a common definition of micro-credentials", publisher: "UNESCO", url: UNESCO_MC, date: "2022" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OECD", url: OECD, date: "2023" },
  ],
  adaptedFrom: { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "January 2025" },
  related: [
    "skills-mapping-guide",
    "upskilling-reskilling-programs-companies",
    "verifiable-digital-credentials-education",
    "lifelong-learning-strategy-universities",
    "coursera-global-skills-report-2026-latin-america",
  ],
};
