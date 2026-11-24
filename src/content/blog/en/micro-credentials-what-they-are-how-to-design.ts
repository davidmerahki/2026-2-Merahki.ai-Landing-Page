import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const EU = "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022H0627(02)";
const OECD = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const ONET = "https://www.onetonline.org/link/summary/13-1071.00";
const OB3 = "https://www.1edtech.org/standards/open-badges";
const W3C = "https://www.w3.org/TR/vc-data-model-2.0/";
const POK_ACCEPTANCE = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";

export const articulo: Articulo = {
  slug: "micro-credentials-what-they-are-how-to-design",
  lang: "en",
  altSlug: "microcredenciales-que-son-como-disenarlas",
  title: "Micro-credentials for universities, colleges and employers: what they are, how to design them around competencies, and how to issue them as verifiable credentials",
  seoTitle: "Micro-credentials: what they are and how to design them",
  description: "What a micro-credential is, how it differs from a certificate or a badge, and how universities and employers design, assess and issue a verifiable one.",
  kicker: "Micro-credentials",
  keywords: [
    "micro credentials",
    "what are micro credentials",
    "micro-credentials in higher education",
    "who can issue micro-credentials",
    "are micro-credentials worth it",
    "micro-credential design",
    "verifiable credentials",
  ],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    `A <strong>micro-credential</strong> is a verifiable record of a short, assessed learning experience. It certifies one specific competency, backed by evidence and graded against clear criteria.`,
    `It differs from a course certificate or an attendance certificate in two ways: it attests to an assessed competency, and anyone can verify it online.`,
    `Universities, community colleges, employers and professional associations can all issue them. Their value depends on design, assessment quality and verification.`,
    `Designing one comes down to five decisions: the target job, the competency and its learning outcomes, the evidence and rubric, the level and workload, and the credential metadata (Open Badges 3.0).`,
    `Employers in Coursera's 2026 survey rate them highly, while the OECD finds labor-market evidence still thin. Stacking toward a larger credential is where the evidence is strongest.`,
  ],
  body: [
    {
      t: "p",
      html: `A <strong>micro-credential</strong> is a verifiable record of a short, assessed learning experience. It certifies that a person can perform a specific competency, shows the evidence behind that claim, and is issued by a provider that others trust. It can stand on its own or stack toward a larger certificate program or a degree.`,
    },
    {
      t: "p",
      html: `This guide is for continuing education and workforce leaders at universities and colleges, and for corporate learning teams that want to launch micro-credentials with real rigor. It covers the main definitions, how micro-credentials compare with certificates and badges, who can issue them, and how to design one step by step. The method is the one we use at merahki.ai with corporate clients and universities across Latin America.`,
    },
    { t: "h2", text: "What is a micro-credential? The UNESCO, EU and US definitions", id: "definition" },
    {
      t: "p",
      html: `There is no single legal definition, but the most cited ones agree on the core. In 2022, UNESCO published a definition built with a panel of 47 experts. It describes a micro-credential as a record of focused learning achievement that verifies what a learner knows, understands or can do. It includes an assessment against defined standards, is awarded by a trusted provider, has value on its own and can stack into larger credentials. UNESCO notes that this is an expert proposal, not an official position of the organization (<a href="${UNEVOC}">UNESCO-UNEVOC glossary</a>).`,
    },
    {
      t: "p",
      html: `The Council of the European Union adopted a <a href="${EU}">recommendation on micro-credentials</a> on June 16, 2022. It defines them as the record of learning outcomes acquired after a small volume of learning, assessed against transparent criteria. It adds three traits that matter for design: the micro-credential is owned by the learner, can be shared and is portable. Its annex lists 11 mandatory elements, including learning outcomes, workload, level and type of assessment.`,
    },
    {
      t: "quote",
      text: "more than a single course but less than a full degree",
      cite: "IIEP-UNESCO (2023), describing US usage, as cited in the UNESCO-UNEVOC glossary",
      href: UNEVOC,
    },
    {
      t: "p",
      html: `That US shorthand is useful, but size alone does not make something a micro-credential. Five traits do. If one is missing, the credential will be hard to defend in front of a hiring manager or a curriculum committee.`,
    },
    {
      t: "ul",
      items: [
        `<strong>Explicit learning outcomes.</strong> What the person knows, does and how they act at the end, written with verbs you can observe.`,
        `<strong>Assessment against clear criteria.</strong> A piece of evidence (a project, a case, a performance) graded with a rubric that learners see in advance.`,
        `<strong>Declared workload.</strong> Hours of learner effort and, if the credential will carry credit, how those hours map to your credit policy.`,
        `<strong>Verification.</strong> Anyone can confirm who issued it, to whom and for what, without emailing the registrar.`,
        `<strong>Stackability.</strong> It is designed to combine with others into a pathway or to count toward a larger program.`,
      ],
    },
    { t: "h2", text: "Micro-credentials vs. certificates, digital badges and degrees", id: "comparison" },
    {
      t: "p",
      html: `The most common mix-up is treating a micro-credential as a short course with a badge attached. The badge is only the container. The credential gets its value from what it attests to and how that was proven.`,
    },
    {
      t: "table",
      head: ["Format", "What it attests to", "How it is assessed", "Online verification"],
      rows: [
        ["Course completion certificate", "That the person finished a course", "Varies, often completion only", "Rarely"],
        ["Attendance or CEU record", "Hours or sessions attended", "Usually no competency assessment", "Rarely"],
        ["Professional certification", "That the person passed a certifying body's exam", "Standardized exam, often with renewal", "Usually through the certifying body"],
        ["Micro-credential", "One specific competency and its learning outcomes", "Evidence plus a published rubric", "Yes, with metadata and a public link"],
        ["Degree", "A complete formal program", "The program's full curriculum", "Through the institution"],
      ],
      caption: "Summary comparison by merahki.ai, based on UNESCO (2022) and the EU Council Recommendation (2022).",
    },
    {
      t: "p",
      html: `For a deeper comparison, including undergraduate and graduate certificate programs, read <a href="/blog/micro-credentials-vs-certificates">micro-credentials vs. certificates</a>.`,
    },
    { t: "h2", text: "Who can issue micro-credentials", id: "issuers" },
    {
      t: "p",
      html: `Universities, community colleges, professional associations, employers with corporate academies and public workforce agencies all issue them. UNESCO's definition only asks for a trusted provider and does not restrict who that can be. The practical question is who will trust the credential. Three things carry more weight than the issuer's logo:`,
    },
    {
      t: "ul",
      items: [
        "The competency answers a documented need of an industry or a role.",
        "The assessment produces evidence and criteria that a third party can review.",
        "The credential can be verified online with open standards, without depending on the issuer to answer an email.",
      ],
    },
    {
      t: "p",
      html: `A noncredit micro-credential does not award a degree. To count toward one, the institution that grants the degree has to recognize it as credit, under its own policies or through a formal credit recommendation. Coursera's survey names ACE, ECTS and NSQF as examples of the latter.`,
    },
    { t: "h2", text: "How to design a micro-credential around a competency", id: "design" },
    {
      t: "p",
      html: `Design starts at the end: what the person must be able to do, in which job, and how they will prove it. Content comes last. This is backward design in the sense of Wiggins and McTighe, and it is the backbone of the <a href="/methodology">merahki.ai methodology</a> and of <a href="/blog/competency-based-instructional-design">competency-based instructional design</a>. In practice it comes down to five decisions.`,
    },
    { t: "h3", text: "1. Start from a job, not from a course" },
    {
      t: "p",
      html: `Every micro-credential should close a specific skills gap for a specific role. Occupational frameworks make that explicit. In the United States, O*NET describes occupations with their tasks, knowledge and skills. In Europe, ESCO plays a similar role, and Colombia uses its national occupational classification, the CUOC. A micro-credential in competency-based interviewing, for example, maps to O*NET 13-1071.00, <a href="${ONET}">Human Resources Specialists</a>, whose description centers on recruiting, screening, interviewing and placing people.`,
    },
    { t: "h3", text: "2. Turn the competency into learning outcomes" },
    {
      t: "p",
      html: `Write the competency as a complete, assessable capability: verb, object and condition. Then break it into three kinds of learning outcomes, which we call know, do and be. Know covers what the person understands. Do covers what they can perform. Be covers the professional disposition they bring, such as fairness or confidentiality. Use one observable verb per outcome. "Understand behavioral interviewing" cannot be assessed. "Writes behavioral questions aligned to a competency in the job profile" can.`,
    },
    { t: "h3", text: "3. Define the evidence and the rubric" },
    {
      t: "p",
      html: `Each outcome needs evidence: a work product, a solved case, a recorded simulation, a report. The rubric states what counts as sufficient on each criterion, and learners see it before they start. Employers look for that evidence. In Coursera's <a href="${COURSERA}">Micro-Credentials Impact Report 2026</a>, 82% of students and 88% of graduates surveyed prefer project-based or industry-based micro-credentials over content-only ones.`,
    },
    { t: "h3", text: "4. Set the level and the workload" },
    {
      t: "p",
      html: `Level describes how complex the competency is. Qualifications frameworks such as the European Qualifications Framework or national frameworks describe levels by knowledge, skills and autonomy, and placing a micro-credential on one tells receiving programs where it can stack. Workload is the total learner effort in hours, including instruction and independent work. If the credential will carry credit, align that workload with your institution's credit-hour policy from day one, so the hours convert cleanly when a program accepts it.`,
    },
    { t: "h3", text: "5. Write the credential metadata (Open Badges 3.0)" },
    {
      t: "p",
      html: `The digital credential carries the design inside it. Under <a href="${OB3}">Open Badges 3.0</a>, the 1EdTech standard, each badge is signed as a verifiable credential compatible with the <a href="${W3C}">W3C Verifiable Credentials Data Model 2.0</a>. The EU recommendation's mandatory elements include the title, learning outcomes, workload, level, type of assessment and form of participation. Almost all of that comes from instructional design, not from the tool that issues the badge.`,
    },
    {
      t: "callout",
      title: "Trust in a micro-credential is decided at the design stage",
      html: `In <a href="${COURSERA}">Coursera's 2026 survey</a>, 82% of employers place greater value on micro-credentials developed with industry partners, and 75% of students say they would pursue micro-credentials with a formal credit recommendation, compared with 18% without one. Who you define the competency with, and how it connects to credit, are design decisions made long before issuance.`,
    },
    { t: "h2", text: "Worked example: a micro-credential in competency-based interviewing", id: "example" },
    {
      t: "table",
      head: ["Decision", "Example"],
      rows: [
        ["Target job", "O*NET 13-1071.00 Human Resources Specialists"],
        ["Competency", "Selects candidates through structured, competency-based interviews with defined scoring criteria for the role"],
        ["Learning outcomes", "Know: explains interview types and common rater biases. Do: writes behavioral questions and scores answers on a defined scale. Be: treats candidates consistently and protects confidential information"],
        ["Evidence and rubric", "Recorded mock interview plus a written hiring recommendation, scored on a four-criterion rubric"],
        ["Level and workload", "Professional level, placed against your qualifications framework. 45 hours of learner effort, mapped to the receiving program's credit policy"],
        ["Metadata", "Skill-based name, issuer, criteria, evidence, date and verification link"],
      ],
      caption: "Illustrative example by merahki.ai.",
    },
    {
      t: "p",
      html: `The full field-by-field template is in <a href="/blog/how-to-design-a-micro-credential">how to design a micro-credential</a>.`,
    },
    { t: "h2", text: "How long does a micro-credential take?", id: "length" },
    {
      t: "p",
      html: `There is no fixed length. The EU speaks of a small volume of learning, and the <a href="${OECD}">OECD (2023)</a> notes that micro-credentials vary widely in duration and level. The competency sets the length: how many hours a learner needs to reach the outcomes and produce the evidence. Stacking then builds larger units. The OECD describes the Swiss model for adults, where a Certificate of Advanced Studies (10+ ECTS) can build toward a Diploma (30+ ECTS) and then a Master of Advanced Studies (60+ ECTS).`,
    },
    { t: "h2", text: "How micro-credentials are issued and verified", id: "issuance" },
    {
      t: "p",
      html: `Once the evidence is approved, the credential is issued digitally. The learner receives it by email or in a digital wallet, shares it on LinkedIn or attaches it to a job application, and anyone can verify it through a public link. At merahki.ai, issuance runs on POK, the verifiable credential and Skills Intelligence infrastructure we partner with. POK issues to Open Badges 3.0 and W3C Verifiable Credentials and turns issued credentials into skills intelligence. Read more in <a href="/blog/verifiable-digital-credentials-education">verifiable digital credentials in education</a> and on our <a href="/certification">certification with verifiable credentials</a> page.`,
    },
    {
      t: "p",
      html: `Timing is part of the design too. POK published data from three programs in Brazil: bulk sends to alumni saw about 20% acceptance, while a teacher-training program that issued credentials to participants still in the program reached 68% (<a href="${POK_ACCEPTANCE}">POK, 2026</a>, in Spanish). That is why we design the end of a course so the credential arrives at the moment of achievement.`,
    },
    { t: "h2", text: "Are micro-credentials worth it? What the data says", id: "data" },
    {
      t: "stats",
      items: [
        { value: "92%", label: "of employers say entry-level hires with micro-credentials perform better in their first year", source: "Coursera, Micro-Credentials Impact Report 2026, p. 8", href: COURSERA },
        { value: "94%", label: "of employers are willing to offer a higher starting salary to graduates with micro-credentials", source: "Coursera, Micro-Credentials Impact Report 2026, pp. 4 and 7", href: COURSERA },
        { value: "75% vs. 18%", label: "of students would pursue micro-credentials with a formal credit recommendation vs. without one", source: "Coursera, Micro-Credentials Impact Report 2026, pp. 12-13", href: COURSERA },
      ],
    },
    {
      t: "p",
      html: `These are stated perceptions from a survey run by Coursera, a company that sells micro-credentials, in February and March 2026, across seven countries including the United States. The OECD is more cautious. Its 2023 review finds labor-market evidence still limited and says impact depends on matching the right program to the right learner. Studies it summarizes from California and North Carolina found that returns on short certificates flattened or fell to zero seven to nine years later, while returns on associate degrees lasted longer. In Singapore, completing a full qualification was linked to a 5.8% real wage gain, against 0.8% for people who certified only single modules (<a href="${OECD}">OECD, 2023, p. 7</a>).`,
    },
    {
      t: "p",
      html: `Our reading: micro-credentials pay off when they are assessed on real work and planned as part of a pathway. A stand-alone badge with no evidence behind it is the weakest version of the idea.`,
    },
    { t: "h2", text: "Common mistakes when launching micro-credentials", id: "mistakes" },
    {
      t: "ul",
      items: [
        "<strong>Badging attendance.</strong> Without evidence and a rubric, an employer has nothing to verify.",
        "<strong>Naming the credential after the course.</strong> \"Module 3\" tells a recruiter nothing. \"Competency-based interviewing\" tells them what the person can do.",
        "<strong>Launching with no credit or recognition rule.</strong> If no program has agreed to accept the credential, learners cannot see what stacking gets them.",
        "<strong>Restructuring an instructor's course without understanding the method.</strong> Learn how the author teaches, what each piece does and who signs off before you split a program into credentials.",
        "<strong>Counting only credentials issued.</strong> Track the full journey: enrollment, progress, completion, issuance, acceptance and on-the-job transfer. We measure it with the Kirkpatrick model.",
      ],
    },
    {
      t: "cta",
      html: `merahki.ai designs competency-based micro-credential pathways for universities and companies, produces and runs them in the LMS, and issues them with POK. Tell us what you want to certify and we will send you a tailored proposal.`,
    },
    { t: "h2", text: "What merahki.ai does and what POK does", id: "merahki-pok" },
    {
      t: "p",
      html: `merahki.ai designs, produces, operates and measures the program. We define the competency against occupational and qualifications frameworks, write the learning outcomes, design the evidence and rubric, build the online course, run it in the LMS and report results from enrollment onward. POK issues the verifiable credential and turns credentials into skills intelligence. If you lead continuing education, see how we build stackable pathways under your brand in <a href="/lifelong-learning">lifelong learning for universities</a>.`,
    },
  ],
  faq: [
    {
      q: "What is a micro-credential?",
      a: "A micro-credential is a verifiable record of a short, assessed learning experience that certifies one specific competency. It includes learning outcomes, an assessment against clear criteria and an issuer that others trust. It can stand alone or stack toward a larger credential.",
    },
    {
      q: "Who can issue micro-credentials?",
      a: "Universities, community colleges, professional associations, employers and public workforce agencies. No single global body approves them. Their value depends on the issuer's credibility, the quality of the assessment and whether they can be verified online.",
    },
    {
      q: "Are micro-credentials worth it?",
      a: "Employers in Coursera's 2026 survey value them, and 92% say entry-level hires who hold them perform better in their first year. The OECD finds the evidence on wages still limited and strongest when credentials stack into a full qualification. They are worth it when they are assessed on real work and part of a pathway.",
    },
    {
      q: "What are some examples of micro-credentials?",
      a: "A credential in competency-based interviewing for HR specialists, in data visualization for analysts, or in clinical documentation for nurses. Each one names a single competency, requires evidence such as a project or a simulation, and carries metadata that anyone can verify.",
    },
    {
      q: "Is a micro-credential the same as a digital badge?",
      a: "No. A digital badge is the format that carries the information. A micro-credential is the assessed achievement inside it. A badge for attending a webinar and a badge for a project-based micro-credential can look the same but attest to very different things.",
    },
  ],
  sources: [
    { title: "Towards a common definition of micro-credentials (definition in the TVETipedia glossary)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022", note: "Expert consensus proposal, not an official UNESCO position. The glossary also cites IIEP-UNESCO (2023) on US usage." },
    { title: "Council Recommendation on a European approach to micro-credentials for lifelong learning and employability (2022/C 243/02)", publisher: "Council of the European Union (EUR-Lex)", url: EU, date: "2022-06-16" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Survey of 3,500+ students, employers and higher education leaders in 7 countries, Feb.-Mar. 2026." },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities (Education Policy Perspectives No. 66)", publisher: "OECD", url: OECD, date: "2023", note: "Copy of the original OECD PDF hosted by Utrecht University. pp. 1-16." },
    { title: "13-1071.00 Human Resources Specialists", publisher: "O*NET OnLine, U.S. Department of Labor", url: ONET },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: W3C },
    { title: "Tasa de aceptación de credenciales digitales: qué esperar de tus egresados y cómo aumentarla", publisher: "POK", url: POK_ACCEPTANCE, date: "2026-10-20", note: "In Spanish. Data from three programs in Brazil." },
  ],
  related: [
    "micro-credentials-vs-certificates",
    "how-to-design-a-micro-credential",
    "verifiable-digital-credentials-education",
    "open-badges-3-0-explained",
    "coursera-micro-credentials-impact-report-2026",
    "competency-based-instructional-design",
  ],
};
