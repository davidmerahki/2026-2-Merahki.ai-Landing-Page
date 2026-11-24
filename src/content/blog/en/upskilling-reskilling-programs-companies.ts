import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const MCIR = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const ONET = "https://www.onetonline.org/";
const POK_TALENT = "https://www.pok.tech/blog/es/posts/credenciales-digitales-potencial-talento-pok";

export const articulo: Articulo = {
  slug: "upskilling-reskilling-programs-companies",
  lang: "en",
  altSlug: "upskilling-reskilling-programas-empresas",
  title: "Upskilling and reskilling: what they are and how a company designs a program that closes measurable skills gaps",
  seoTitle: "Upskilling vs. reskilling: how to design a company program",
  description: "The difference between upskilling and reskilling, how to find the skills gap in each role, and how to design, certify, and measure a company program.",
  kicker: "Corporate learning",
  keywords: [
    "upskilling",
    "reskilling",
    "upskilling vs reskilling",
    "what is upskilling",
    "upskilling programs for employees",
    "reskilling programs",
    "skills gap",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "<strong>Upskilling</strong> trains people to do their current job better. <strong>Reskilling</strong> trains them for a different job.",
    "In the World Economic Forum's 2025 survey, 59 out of every 100 workers will need training by 2030: 29 upskilled in their current role and 19 trained and redeployed into another role.",
    "A program starts with the skills gap in each role, is designed around competencies with evidence from real work, and ends in verifiable credentials.",
    "Many companies build their paths from university continuing education portfolios, plus custom modules for what that catalog doesn't cover.",
    "Measure the change against a baseline taken before the first module, using productivity, retention, cost, and experience metrics.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Upskilling</strong> is training people to do their current job better or take on new tasks within the same role. <strong>Reskilling</strong> is training them for a different role when theirs changes or goes away. Both are how a company responds to a skills gap, the distance between what a role requires and what its people can do today.",
    },
    {
      t: "p",
      html: "This guide explains how a company finds that gap, designs the program, certifies what people learn, and measures the change. It also covers how to use university continuing education portfolios to build the learning paths, a service corporate clients often ask merahki for.",
    },
    { t: "h2", text: "Upskilling vs. reskilling: the difference, with examples" },
    {
      t: "table",
      head: ["", "Upskilling", "Reskilling"],
      rows: [
        ["Goal", "Do the current job better or expand it", "Move into a different job"],
        ["When to use it", "The role changes because of new tools, AI, or regulation", "The role is shrinking, or the company needs profiles it can't hire for"],
        ["Example", "An accountant learns to automate reconciliations with AI", "An administrative assistant retrains as a data analyst"],
        ["What gets certified", "New competencies for the same role", "The competencies of the target role"],
        ["Main metric", "Productivity and quality in the role", "Roles filled internally and time to productivity in the new role"],
      ],
    },
    {
      t: "p",
      html: "The <a href=\"" + WEF + "\">World Economic Forum's Future of Jobs Report 2025</a>, based on a survey of more than 1,000 employers in 55 economies, sizes both needs.",
    },
    {
      t: "stats",
      items: [
        { value: "29 of 100", label: "workers will need upskilling in their current role by 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "19 of 100", label: "will need training to be redeployed into another role (reskilling)", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "11 of 100", label: "will need training and won't get it", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
      ],
    },
    {
      t: "p",
      html: "Employers see the gap clearly. In the same report, 63% name skills gaps as the biggest barrier to transforming their business, and 85% plan to prioritize upskilling their workforce. The skills growing fastest are AI and big data, networks and cybersecurity, and technological literacy, while analytical thinking remains the most sought-after core skill.",
    },
    { t: "h2", text: "How to find the skills gap in each role" },
    {
      t: "ol",
      items: [
        "Pick the critical roles: the ones that weigh most on revenue, quality, or risk, and the ones your strategic plan says are about to change.",
        "Define the competencies for each role. In the US, <a href=\"" + ONET + "\">O*NET</a> describes the tasks, knowledge, and skills of each occupation, so you don't start from a blank page.",
        "Assess the current level with three inputs: a self-assessment, a manager assessment, and a practical test on a real task from the job.",
        "Rank the gaps by impact: what it costs the business when that competency is missing, and how many people need it.",
      ],
    },
    {
      t: "p",
      html: "The output is a skills map by role. That map decides which learning paths get built first and what progress gets measured against.",
    },
    { t: "h2", text: "How to design an upskilling or reskilling program" },
    {
      t: "p",
      html: "Design starts from the competency you need to close, and the available course catalog gets reviewed afterward. Each competency becomes learning outcomes, each outcome becomes evidence, and each piece of evidence becomes the activities that prepare people to produce it. Four criteria separate a program that closes gaps from one that only adds training hours.",
    },
    {
      t: "ul",
      items: [
        "<strong>Short, stackable paths.</strong> Each module certifies one competency, and people can apply it at work before moving to the next one.",
        "<strong>Evidence from real work.</strong> The assessment asks for a work product: a report, a procedure carried out, a customer conversation.",
        "<strong>Protected time.</strong> When learning gets pushed to after hours, it competes with operations and usually loses.",
        "<strong>Practice in the target role.</strong> In reskilling, the path includes a rotation or shadowing someone in the new team before the formal move.",
      ],
    },
    {
      t: "p",
      html: "Here is what that looks like for the accountant in the table above. Module one covers the AI tools the team is allowed to use. Module two has them automate one real reconciliation and document the controls. Module three asks them to review an automated output and catch its errors. Each module ends with a work product their manager signs off on.",
    },
    {
      t: "p",
      html: "Employers report results from role-based training. In <a href=\"" + MCIR + "\">Coursera's Micro-Credentials Impact Report 2026</a>, 62% of employers report a significant productivity increase from role-targeted training with micro-credentials, and 52% report a significant impact on profitability. It is a survey of employers in seven countries, including the US, and it captures what they say, not an audited outcome.",
    },
    { t: "h2", text: "Upskilling and reskilling with university continuing education portfolios" },
    {
      t: "p",
      html: "Part of what a company needs to teach already exists in universities' continuing education catalogs: certificates, short courses, and micro-credentials in analytics, management, AI, finance, or leadership. Corporate clients regularly ask merahki to stitch those university portfolios into their upskilling and reskilling programs. Compared with a generic tuition benefit, a curated path points every course at a gap on the skills map. The work has four steps.",
    },
    {
      t: "ol",
      items: [
        "Map the gaps by role, with the competencies the program has to close.",
        "Review the portfolio of one or more universities to find courses whose learning outcomes match those competencies. The marketing page of a course isn't enough. You need the syllabus and the assessments.",
        "Build the path with modules from different universities in a logical order, plus custom modules for what the catalog doesn't cover, such as the company's internal processes.",
        "Set shared evidence and certification for the whole path, so the company tracks progress with one standard and employees earn verifiable credentials.",
      ],
    },
    {
      t: "table",
      head: ["Party", "What it brings", "What it decides"],
      rows: [
        ["Company", "Roles, gaps, business data, and its people's time", "Which paths come first and who takes part"],
        ["University", "Academically backed programs and expert faculty", "The content and assessment of its courses"],
        ["merahki", "Competency-based path design, custom modules, operations, and measurement", "How the pieces fit together and how progress is reported"],
      ],
      caption: "Each party decides what it owns. The combined path reports progress on one dashboard.",
    },
    {
      t: "p",
      html: "For the university, this model opens a B2B revenue line for its continuing education unit. That is how we work with university <a href=\"/lifelong-learning\">lifelong learning</a> teams.",
    },
    { t: "h2", text: "How to certify what people learn" },
    {
      t: "p",
      html: "An internal PDF certificate means little outside the department that issued it. A verifiable credential states which competency was certified, against which criteria, and with what evidence, and anyone can check it. POK makes the case in its <a href=\"" + POK_TALENT + "\">article on credentials for workforce talent</a> (in Spanish): stackable credentials by role give HR an objective record for promotions and internal moves.",
    },
    {
      t: "p",
      html: "The criteria behind the credential matter. In the hiring market, a standalone online certificate still carries little weight: only 14% of employers in the WEF survey plan to consider online certificates in hiring decisions. That is why each credential should carry its criteria and its evidence. merahki issues them with POK on the Open Badges 3.0 standard, as described on our <a href=\"/certification\">verifiable credentials</a> page.",
    },
    { t: "h2", text: "How to measure the impact of an upskilling or reskilling program" },
    {
      t: "table",
      head: ["Metric family", "Upskilling", "Reskilling"],
      rows: [
        ["Productivity", "Time per task, volume, and errors", "Time to productivity in the new role"],
        ["Retention", "Turnover among trained employees", "Roles filled with internal talent"],
        ["Cost", "Rework and overtime", "External hiring avoided"],
        ["Experience", "Training satisfaction and team engagement", "Satisfaction of the receiving manager"],
      ],
    },
    {
      t: "p",
      html: "Kirkpatrick levels 3 and 4 (behavior and results) get reviewed at 30 and 90 days. The fairest comparison is against people in the same role who haven't taken the path yet.",
    },
    {
      t: "callout",
      title: "Take the baseline before the first module",
      html: "If you don't measure the metric before you start, there's nothing to compare against at the end, and the program can only report enrollments and hours. Picking one or two metrics per path and tracking them from day one is what lets you defend next year's budget.",
    },
    {
      t: "p",
      html: "merahki designs, builds, runs, and measures upskilling and reskilling programs for corporate clients, with custom paths or paths built with universities. See our <a href=\"/training-certification\">corporate training and certification</a> page and our <a href=\"/methodology\">competency-based design methodology</a>.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "What is upskilling?",
      a: "Upskilling is training people to do their current job better or take on new tasks within the same role. Companies use it when a role changes because of new tools, regulations, or processes.",
    },
    {
      q: "What is the difference between upskilling and reskilling?",
      a: "Upskilling trains for the same role, and reskilling trains for a different one. An analyst who learns to automate their work with AI is upskilling. An administrative assistant who retrains as a data analyst is reskilling.",
    },
    {
      q: "What is a skills gap?",
      a: "It is the distance between the competencies a role requires and the ones its people can demonstrate today. You find it by defining the role's competencies and assessing current levels with a self-assessment, a manager review, and a practical test.",
    },
    {
      q: "Can companies use university courses for upskilling?",
      a: "Yes. Many companies build their paths from certificates and short courses in partner universities' continuing education catalogs. The work is checking that those courses' learning outcomes match the role's competencies and filling the rest with custom modules.",
    },
    {
      q: "Which skills should an upskilling program prioritize?",
      a: "The ones your role map calls for. As a reference, the WEF's 2025 survey lists AI and big data, networks and cybersecurity, and technological literacy as the fastest-growing skills, with creative thinking, resilience, and curiosity also rising.",
    },
    {
      q: "How do you measure the results of a reskilling program?",
      a: "With metrics from the target role: how long people take to become productive in the new job, how many roles get filled internally, and how much external hiring is avoided. Measure against a baseline taken before the program starts.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 5-6 and 61-62" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: MCIR, date: "2026", note: "Survey of more than 3,500 students, employers, and higher education leaders in 7 countries, p. 6" },
    { title: "O*NET OnLine", publisher: "US Department of Labor, Employment and Training Administration", url: ONET },
    { title: "Por qué las credenciales digitales son la clave para potenciar el talento en tu empresa", publisher: "POK", url: POK_TALENT, date: "2025-09-10", note: "In Spanish" },
  ],
  related: [
    "corporate-university-how-to-build",
    "skills-mapping-guide",
    "skills-employers-want-2026",
    "micro-credentials-what-they-are-how-to-design",
    "how-to-measure-training-roi",
  ],
};
