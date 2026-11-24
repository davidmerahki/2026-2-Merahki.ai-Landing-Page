import type { Articulo } from "../types";

const LANDING = "https://www.coursera.org/enterprise/resources/pdf/micro-credentials-report-2026-pdf";
const PDF = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const BLOG = "https://blog.coursera.org/coursera-micro-credentials-impact-report-2026/";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";

export const articulo: Articulo = {
  slug: "coursera-micro-credentials-impact-report-2026",
  lang: "en",
  altSlug: "informe-microcredenciales-coursera-2026",
  title:
    "Coursera Micro-Credentials Impact Report 2026: key findings from employers, students, and universities, and what they mean for Latin America",
  seoTitle: "Coursera Micro-Credentials Impact Report 2026",
  description:
    "Key findings from Coursera's Micro-Credentials Impact Report 2026 with page references, what the survey measures, and what it means for Latin America.",
  kicker: "Research and data",
  keywords: [
    "Coursera micro-credentials report 2026",
    "Micro-Credentials Impact Report 2026",
    "micro-credentials statistics 2026",
    "micro-credentials employers",
    "credit-bearing micro-credentials",
    "micro-credentials Latin America",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `Coursera's <strong>Micro-Credentials Impact Report 2026</strong> surveyed more than 3,500 students, employers, and higher education leaders in seven countries in February and March 2026.`,
    `94% of employers say they are willing to offer higher starting salaries to graduates with micro-credentials, and 95% see micro-credentials as a differentiator between candidates.`,
    `Credit-bearing, industry co-designed, and project-based micro-credentials carry the most weight.`,
    `Mexico is the only Latin American country in the sample. Colombia is not included, so the data works as a regional reference only.`,
    `These are stated perceptions from a survey run by a micro-credential provider, not measured outcomes.`,
  ],
  body: [
    {
      t: "p",
      html: `Coursera's <strong>Micro-Credentials Impact Report 2026</strong> is a survey of more than 3,500 students, employers, and higher education leaders in seven countries, fielded in February and March 2026. Its central finding is that employers say they value micro-credentials in hiring, especially credit-bearing ones, those co-designed with industry, and those assessed through projects. Mexico is the only Latin American country in the sample.`,
    },
    {
      t: "p",
      html: `This article summarizes and comments on the <a href="${LANDING}">Coursera report</a>. Every figure carries its page number in the <a href="${PDF}">original PDF</a>. We wrote it from Bogotá, so the second half looks at what the findings mean for universities and employers in Colombia and the rest of Latin America, which the sample mostly leaves out.`,
    },
    { t: "h2", text: "What the report measures and who was surveyed", id: "sample" },
    {
      t: "p",
      html: `Coursera ran the survey with Rep Data in the United States, the United Kingdom, India, Saudi Arabia, Mexico, Indonesia, and the Philippines. Each country had roughly 300 students or recent graduates who already hold a micro-credential, 100 employers (managers at companies with 500+ employees who know what micro-credentials are), and 100 higher education leaders (p. 23). The global sample has a margin of error of ±3.7% at a 95% confidence level.`,
    },
    {
      t: "stats",
      items: [
        { value: "3,500+", label: "students, employers, and higher education leaders surveyed", source: "Coursera, Micro-Credentials Impact Report 2026, pp. 1 and 23", href: PDF },
        { value: "7", label: "countries in the sample. Mexico is the only one in Latin America", source: "Coursera, Micro-Credentials Impact Report 2026, p. 23", href: PDF },
        { value: "±3.7%", label: "margin of error for the global sample at 95% confidence", source: "Coursera, Micro-Credentials Impact Report 2026, p. 23", href: PDF },
      ],
    },
    {
      t: "p",
      html: `The report builds its definition on UNESCO's 2022 proposal: a micro-credential verifies specific skills a learner demonstrates through assessments aligned to clear standards, is issued by a trusted provider, holds standalone value, and may count toward a larger qualification such as a degree (p. 7).`,
    },
    { t: "h2", text: "What employers say about micro-credentials", id: "employers" },
    {
      t: "ul",
      items: [
        `98% use skills-based hiring for entry-level roles, and 86% use it extensively (pp. 4 and 6).`,
        `95% say micro-credentials set candidates apart, and 87% rate them as highly important in hiring (p. 6).`,
        `94% are willing to offer a higher starting salary to graduates with micro-credentials (pp. 4 and 7). That is stated willingness, not a measured pay increase.`,
        `92% say entry-level hires with micro-credentials perform better in their first year. 73% say these candidates move faster through hiring, and 73% say they are more likely to be promoted. 58% say micro-credentials reduce hiring risk (p. 8).`,
        `With role-based training, 62% report a significant productivity boost and 52% a significant impact on profitability (p. 6).`,
        `60% would choose a less experienced candidate with a generative AI credential over a more experienced one without it (p. 11).`,
      ],
    },
    { t: "h2", text: "What students and graduates say", id: "students" },
    {
      t: "ul",
      items: [
        `71% are likely to enroll in a program that offers credit-bearing micro-credentials, compared with 35% for programs with none (p. 9).`,
        `91% feel more motivated when a course leads to an industry-recognized credential (p. 9).`,
        `87% of graduates with micro-credentials landed a job in their field within 12 months, and 83% of employed graduates say the micro-credential played a significant role (p. 8).`,
        `75% would pursue micro-credentials with a formal credit recommendation, versus 18% without one. 82% of those holding credit-bearing credentials report salary increases of 10% or more, versus 60% for non-credit (pp. 12-13).`,
        `82% of students and 88% of graduates prefer project-based micro-credentials over content-only ones (p. 13).`,
      ],
    },
    { t: "h2", text: "What higher education leaders say", id: "universities" },
    {
      t: "p",
      html: `81% of leaders say embedding micro-credentials speeds up curriculum updates, and 79% say it lets them pilot new skills at low risk. 59% see moderate or significant strategic risk in not embedding them. 76% link academic credit to higher retention (pp. 10 and 12-13). For a provost or dean, the most useful number is the second one: a micro-credential can work as a pilot for new content before it goes into a degree program.`,
    },
    { t: "h2", text: "What the report says about Mexico", id: "mexico" },
    {
      t: "table",
      head: ["Indicator", "Mexico", "Global"],
      rows: [
        ["Employers using skills-based hiring extensively for entry-level roles", "85%", "86%"],
        ["Employers using it in some form", "98%", "98%"],
        ["Employers who say entry-level hires with micro-credentials perform better in year one", "92%", "92%"],
        ["Graduates with micro-credentials who found a job in their field within 12 months", "82%", "87%"],
        ["Students likely to pursue micro-credentials with formal credit, versus without", "74% vs. 20%", "75% vs. 18%"],
        ["Employers placing greater trust in credit-bearing micro-credentials", "63%", "58%"],
        ["Students ranking industry-created micro-credentials that count toward a degree as the top signal of rigor and value", "59%", "51%"],
        ["Leaders who say embedding them speeds up curriculum updates", "73%", "81%"],
      ],
      caption: "Source: Coursera, Micro-Credentials Impact Report 2026, pp. 4-17. Mexico sample: about 300 students, 100 employers, and 100 leaders.",
    },
    {
      t: "p",
      html: `The regional read: in Mexico, academic credit matters more than the global average for both employers and students. Mexican universities trail slightly on perceived curriculum agility. With 100 employers and 100 leaders per country, the margin of error for Mexico is wider than the global one.`,
    },
    { t: "h2", text: "What the data does not tell you", id: "limits" },
    {
      t: "quote",
      text: "Not all micro-credentials deliver equal value.",
      cite: "Coursera, Micro-Credentials Impact Report 2026, p. 4",
      href: PDF,
    },
    {
      t: "ul",
      items: [
        `<strong>These are perceptions.</strong> The report measures what people say, not payroll salaries or performance reviews.`,
        `<strong>The student sample only includes people who already hold a micro-credential.</strong> They are likely to value it.`,
        `<strong>Coursera sells micro-credentials.</strong> That does not invalidate the study, but it calls for a careful read.`,
        `<strong>Most of Latin America is missing.</strong> Any use for Colombia, Chile, or Peru should say the reference is Mexico.`,
        `<strong>Other surveys pull the other way.</strong> In the World Economic Forum's <a href="${WEF}">Future of Jobs Report 2025</a>, only 14% of employers plan to consider online certificates in hiring decisions (pp. 61-62). The gap between the two studies is the gap between a well-designed micro-credential and a standalone certificate.`,
      ],
    },
    { t: "h2", text: "Trust, evidence, and outcomes: the framework Coursera proposes", id: "framework" },
    {
      t: "p",
      html: `The report closes with three questions for judging a micro-credential (p. 13). We mapped them to design decisions and to how we answer them in Colombia.`,
    },
    {
      t: "table",
      head: ["Coursera's question", "What it means for design", "How we answer it in Colombia"],
      rows: [
        ["Trust: does the credential carry weight?", "Academic credit, industry co-design, and a recognized issuer.", "A credit equivalence rule, alignment with the national qualifications framework (MNC), and employers in the design team."],
        ["Evidence: does it produce observable proof of applied skill?", "Project-based assessment with a rubric, and the evidence inside the credential.", "Observable learning outcomes and a verifiable Open Badges 3.0 credential issued with POK."],
        ["Outcomes: does it move the metrics that matter?", "Indicators defined before launch.", "Kirkpatrick measurement: learning, on-the-job transfer, and business results."],
      ],
    },
    { t: "cta" },
    { t: "h2", text: "What it means for universities in Latin America", id: "implications-universities" },
    {
      t: "p",
      html: `If academic credit is the strongest signal, a university's job is to define how a continuing education micro-credential counts toward a degree. That takes an equivalence rule and learning outcomes that can be compared. Continuing education works as the lab: new content is tested there at low risk, as 79% of surveyed leaders say, and what works moves into undergraduate or graduate programs. That is how we run our <a href="/lifelong-learning">lifelong learning service for universities</a>.`,
    },
    {
      t: "p",
      html: `The second front is co-design with employers. 82% of employers value industry co-designed micro-credentials more. In Colombia, the national occupation classification (CUOC) gives universities and companies a shared language for jobs, and the MNC gives one for qualification levels.`,
    },
    { t: "h2", text: "What it means for employers", id: "implications-employers" },
    {
      t: "p",
      html: `Hiring for skills means reading credentials. An HR team needs to know which skill a credential certifies, with what evidence, and whether it can be verified without calling the institution. That calls for verifiable credentials with criteria and evidence. Our guide to <a href="/blog/verifiable-digital-credentials-education">verifiable digital credentials</a> covers how that works. The same logic applies inside the company: corporate academies can issue role-based micro-credentials and use them for internal mobility, as we do in <a href="/training-certification">corporate training and certification</a>.`,
    },
  ],
  faq: [
    {
      q: "What is the Micro-Credentials Impact Report 2026?",
      a: `It is a Coursera survey run with Rep Data in February and March 2026 among more than 3,500 students, employers, and higher education leaders in seven countries. It measures how much value they place on micro-credentials when hiring, studying, and designing programs.`,
    },
    {
      q: "Which countries are in the report?",
      a: `The United States, the United Kingdom, India, Saudi Arabia, Mexico, Indonesia, and the Philippines. Mexico is the only Latin American country, so for the rest of the region it works as a reference, not as local data.`,
    },
    {
      q: "Do micro-credentials raise salaries?",
      a: `The report says 94% of employers are willing to offer higher starting salaries to graduates with micro-credentials. That is a stated intention in a survey, not a measured raise. Among holders of credit-bearing credentials, 82% report increases of 10% or more.`,
    },
    {
      q: "Which micro-credentials do employers value most?",
      a: `According to the report, those co-designed with industry, those that carry academic credit, and those assessed through projects. 82% of employers value industry co-designed micro-credentials more, and 58% place greater trust in credit-bearing ones.`,
    },
    {
      q: "What should a university do with these findings?",
      a: `Define how its micro-credentials count toward degree programs, design them with employers, and assess them through real work. Then issue them as verifiable credentials and measure results from the first cohort.`,
    },
  ],
  sources: [
    { title: "Micro-Credentials Impact Report 2026 (report page)", publisher: "Coursera", url: LANDING, date: "2026" },
    { title: "Micro-Credentials Impact Report 2026 (PDF)", publisher: "Coursera", url: PDF, date: "2026", note: "Coursera and Rep Data survey, February to March 2026" },
    { title: "Introducing Coursera's Micro-Credentials Report 2026", publisher: "Coursera Blog", url: BLOG, date: "2026-06-04" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "pp. 61-62" },
  ],
  adaptedFrom: {
    title: "Micro-Credentials Impact Report 2026",
    publisher: "Coursera",
    url: LANDING,
    date: "2026",
  },
  related: [
    "micro-credentials-what-they-are-how-to-design",
    "verifiable-digital-credentials-education",
    "coursera-global-skills-report-2026-latin-america",
    "skills-employers-want-2026",
  ],
};
