import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const EU = "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022H0627(02)";
const ONET = "https://www.onetonline.org/link/summary/13-1071.00";
const OB3 = "https://www.1edtech.org/standards/open-badges";
const W3C = "https://www.w3.org/TR/vc-data-model-2.0/";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const POK_SANTOTO = "https://www.pok.tech/blog/es/posts/microcredenciales-homologables-universidad-santo-tomas-santotoup";
const POK_ACCEPTANCE = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";

export const articulo: Articulo = {
  slug: "how-to-design-a-micro-credential",
  lang: "en",
  altSlug: "como-disenar-una-microcredencial",
  title: "How to design a micro-credential: a competency-based template and worked example for universities and employers that certify skills",
  seoTitle: "How to design a micro-credential: template and example",
  description: "A field-by-field template to design a competency-based micro-credential: target job, learning outcomes, evidence, rubric, level, workload and metadata.",
  kicker: "Micro-credential design",
  keywords: [
    "how to design a micro-credential",
    "micro-credential template",
    "how to create micro-credentials",
    "competency-based micro-credentials",
    "micro-credential rubric",
    "micro-credential framework",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `Design a micro-credential backward: target job, competency, learning outcomes, evidence and rubric. Course content comes last.`,
    `The template covers a skill-based name, the target occupation, the competency, know, do and be outcomes, evidence, rubric, level, workload, delivery mode and badge metadata.`,
    `Map the occupation with O*NET in the US or ESCO in Europe, place the level against a qualifications framework, and align workload with your credit-hour policy if the credential will carry credit.`,
    `Badge metadata comes from the design. The EU recommendation lists title, learning outcomes, workload, level, type of assessment and form of participation among its mandatory elements.`,
  ],
  body: [
    {
      t: "p",
      html: `To design a micro-credential, start from the target job and the competency, then work in this order: know, do and be learning outcomes, assessable evidence, a rubric, level and workload, and the credential metadata. Build the course content last, once it is clear what the learner must demonstrate and how it will be scored.`,
    },
    {
      t: "p",
      html: `This guide walks through the template we use at merahki.ai, field by field, and a complete worked example. It is written for continuing education units at universities and for corporate learning teams. It focuses on design, which is where most of the project time goes. Issuance is the shorter part.`,
    },
    { t: "h2", text: "What to decide before you design", id: "before" },
    {
      t: "ol",
      items: [
        "<strong>Which skills gap, for whom.</strong> What the target audience cannot do today, and in which role they need it.",
        "<strong>Whether it will carry credit.</strong> If so, identify the receiving program and the course it could replace before you write a single outcome.",
        "<strong>Who defines the competency with you.</strong> In <a href=\"" + COURSERA + "\">Coursera's 2026 survey</a>, 82% of employers place greater value on micro-credentials developed with industry partners. Put an employer or an industry association at the table.",
        "<strong>Who approves it.</strong> Which academic or business owner signs off on the design and on the issuance rule.",
        "<strong>Stand-alone or stackable.</strong> A stackable micro-credential needs a declared place in a sequence.",
      ],
    },
    { t: "h2", text: "The micro-credential template, field by field", id: "template" },
    { t: "h3", text: "Name and target occupation" },
    {
      t: "p",
      html: `Name the credential after the competency, not the course. "Competency-based interviewing" tells a recruiter what the person can do. "HR Certificate, Module 3" tells them nothing. Next to the name, record the target occupation from an occupational framework. In the US that is usually O*NET, which lists tasks, knowledge and skills for each occupation. In Europe it is ESCO. Either one gives you language to justify relevance to a curriculum committee or a business sponsor.`,
    },
    { t: "h3", text: "Competency and learning outcomes" },
    {
      t: "p",
      html: `Write the competency with a verb, an object and a condition. It should describe a complete capability you could observe on the job. Then break it into three kinds of learning outcomes: know (what the person understands and can explain), do (what they can perform) and be (the professional disposition they bring). Every outcome needs to be demonstrable, so use one observable verb per outcome. "Understand" and "be familiar with" cannot be assessed.`,
    },
    { t: "h3", text: "Evidence and rubric" },
    {
      t: "p",
      html: `Connect each outcome to at least one piece of evidence: a work product, a solved case, a simulation, a report. The rubric has criteria, drawn from the outcomes, and performance levels that describe what each level looks like. Publish it before learners start. Applied evidence matters to the people you are designing for. In the same <a href="${COURSERA}">Coursera report</a>, 82% of students and 88% of graduates prefer project-based or industry-based micro-credentials over content-only ones.`,
    },
    { t: "h3", text: "Level, workload and credit" },
    {
      t: "p",
      html: `Place the level against a qualifications framework that your partners recognize, such as the European Qualifications Framework or your country's national framework. Levels are described by knowledge, skills and autonomy, so this step forces you to check that the outcomes match the complexity you claim. Declare workload as total learner effort in hours, including instruction and independent work. If the credential will carry credit, align it with your institution's credit-hour policy, or plan for a third-party credit recommendation. Coursera's survey cites ACE, ECTS and NSQF as examples.`,
    },
    { t: "h3", text: "Delivery mode, prerequisites and metadata" },
    {
      t: "p",
      html: `The <a href="${EU}">EU Council Recommendation on micro-credentials</a> works as a checklist even outside Europe. Its 11 mandatory elements include, beyond the fields above, the form of participation (online, onsite or blended), the type of assessment and the type of quality assurance. Its optional elements include prerequisites and stacking options. All of it travels as metadata in the badge, which under <a href="${OB3}">Open Badges 3.0</a> is signed as a credential compatible with the <a href="${W3C}">W3C Verifiable Credentials Data Model 2.0</a>.`,
    },
    { t: "h2", text: "Worked example: a micro-credential in competency-based interviewing", id: "example" },
    {
      t: "p",
      html: `This example is illustrative. We built it to show how the template fills in, using a real occupation: O*NET 13-1071.00, <a href="${ONET}">Human Resources Specialists</a>, whose description centers on recruiting, screening, interviewing and placing people.`,
    },
    {
      t: "table",
      head: ["Field", "Content"],
      rows: [
        ["Name", "Competency-based interviewing"],
        ["Target occupation", "O*NET 13-1071.00 Human Resources Specialists"],
        ["Need", "Hiring teams interview without shared criteria and cannot justify their selection decisions"],
        ["Competency", "Selects candidates through structured, competency-based interviews with defined scoring criteria for the role"],
        ["Level", "Professional level, placed by the institution against its qualifications framework"],
        ["Workload", "45 hours of learner effort: 15 with an instructor and 30 independent, split per the institution's credit-hour policy"],
        ["Delivery mode", "Online, with one live practice session"],
        ["Prerequisite", "Experience in HR processes or prior study in the field"],
        ["Stacking", "First piece of a talent management pathway. Eligible for credit in a receiving program's recruitment course"],
      ],
      caption: "Micro-credential profile. Illustrative example by merahki.ai.",
    },
    {
      t: "table",
      head: ["Type", "Learning outcome", "Evidence", "Rubric criterion (proficient level)"],
      rows: [
        ["Know", "Explains interview types and the most common rater biases", "Short case quiz", "Identifies the bias in at least four of five cases and explains how to avoid it"],
        ["Do", "Writes behavioral questions aligned to the competencies in the job profile", "Interview guide for a real role", "Every competency in the profile has at least two behavioral questions"],
        ["Do", "Scores answers on a scale of observable behaviors", "Recorded mock interview", "Scores fall within one scale point of the expert rater's"],
        ["Do", "Writes a hiring recommendation backed by interview evidence", "Selection report", "The recommendation cites observed behaviors, not general impressions"],
        ["Be", "Treats candidates consistently and protects confidential information", "Mock interview and report", "No discriminatory questions, and the report protects candidate data"],
      ],
      caption: "Outcomes, evidence and rubric. The full rubric has four levels: beginning, developing, proficient and exemplary.",
    },
    {
      t: "table",
      head: ["Badge metadata", "Value"],
      rows: [
        ["Title", "Competency-based interviewing"],
        ["Issuer", "The university or company that teaches and assesses"],
        ["Description and criteria", "The competency, the five outcomes and the pass rule: proficient on every criterion"],
        ["Workload and level", "45 hours, professional level"],
        ["Type of assessment", "Performance assessment with a mock interview and report, scored with a rubric"],
        ["Form of participation", "Online"],
        ["Evidence", "Link to the selection report, if the earner chooses to make it public"],
        ["Verification", "Public verification link"],
      ],
      caption: "Credential metadata, aligned with the EU recommendation's elements and with Open Badges 3.0.",
    },
    {
      t: "callout",
      title: "Three questions to ask before you approve the design",
      html: `Coursera's <a href="${COURSERA}">Micro-Credentials Impact Report 2026</a> proposes judging a micro-credential on trust, evidence and outcomes: does the credential carry weight with whoever receives it, does it produce observable proof of applied skill, and does it move the metrics the organization cares about. If the design cannot answer all three, it is not ready.`,
    },
    { t: "h2", text: "How a micro-credential gets approved", id: "approval" },
    {
      t: "p",
      html: `Every institution has its own governance, so the exact path varies. Two things are non-negotiable: someone with academic or business authority signs off on the design, and a written procedure governs issuance. An order that works:`,
    },
    {
      t: "ol",
      items: [
        "The design team presents the profile, the outcomes and evidence matrix, and the rubric.",
        "A faculty peer or an industry representative reviews the relevance of the competency.",
        "The curriculum committee or equivalent body approves the design and, where relevant, the credit rule.",
        "The procedure states who validates each issuance, who approves it, who issues it and who keeps the record.",
      ],
    },
    {
      t: "p",
      html: `Universidad Santo Tomás in Tunja, Colombia, handled that last step with a four-step procedure and four separate owners, according to a <a href="${POK_SANTOTO}">case documented by POK</a> (in Spanish). Separating those roles lets an institution issue at volume and keep a clean audit trail. In companies the path is shorter, but the logic holds: the learning team designs, the business owner of the skill validates, and one named person is accountable for issuance.`,
    },
    { t: "h2", text: "How the design becomes a verifiable credential", id: "issuance" },
    {
      t: "p",
      html: `When a learner reaches proficient on every criterion, the LMS records the result and the credential is issued. At merahki.ai, issuance runs on POK, the verifiable credential and Skills Intelligence infrastructure we partner with, using Open Badges 3.0 and W3C Verifiable Credentials. The learner accepts and shares the credential, and any employer can verify it through a public link.`,
    },
    {
      t: "p",
      html: `Timing changes results. POK published data from three programs in Brazil: bulk sends to alumni saw about 20% acceptance, while a teacher-training program that issued to participants still in the program reached 68% (<a href="${POK_ACCEPTANCE}">POK, 2026</a>, in Spanish). So the design includes the ending: the credential arrives at the moment of achievement, with instructions to accept and share it. After that, we track the full journey from enrollment to on-the-job transfer with the Kirkpatrick model.`,
    },
    {
      t: "cta",
      html: `merahki.ai designs competency-based micro-credentials, produces and runs them in the LMS, and issues them with POK. If you want to certify a skill for your workforce or your continuing education catalog, we will send you a tailored proposal.`,
    },
    {
      t: "p",
      html: `Read more about our <a href="/methodology">instructional design methodology</a>, about issuance on our <a href="/certification">certification with verifiable credentials</a> page, and, for companies, about <a href="/training-certification">training and certification programs</a>. For the big picture, see <a href="/blog/micro-credentials-what-they-are-how-to-design">micro-credentials: what they are and how to design them</a>.`,
    },
  ],
  faq: [
    {
      q: "How do you create a micro-credential?",
      a: "Define the target job and the competency, write know, do and be learning outcomes, design one piece of evidence per outcome plus a rubric, set the level and workload, and build the content last. Issue the credential when the learner reaches the required level on the rubric.",
    },
    {
      q: "What should a micro-credential include?",
      a: "A skill-based title, the issuer, the competency and criteria, learning outcomes, workload, level, type of assessment, form of participation, the issue date and a verification link. The EU recommendation of 2022 is a useful checklist even outside Europe.",
    },
    {
      q: "How long should a micro-credential be?",
      a: "As long as the competency requires for learners to reach the outcomes and produce the evidence. If it will carry credit, size the workload so it converts cleanly under your credit-hour policy.",
    },
    {
      q: "Who approves a micro-credential?",
      a: "At a university, usually the curriculum committee or the academic body that approves programs, plus the receiving program if credit is involved. In a company, the learning team designs and the business owner of the skill validates. Either way, a written procedure should govern each issuance.",
    },
    {
      q: "What is the difference between a micro-credential and a digital badge?",
      a: "The badge is the digital format. The micro-credential is the assessed achievement it carries. Our comparison of <a href=\"/blog/micro-credentials-vs-certificates\">micro-credentials, certificates and badges</a> explains the difference in detail.",
    },
  ],
  sources: [
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "pp. 12-13: credit recommendation, industry co-creation, applied assessment and the trust, evidence, outcomes framework." },
    { title: "Council Recommendation on a European approach to micro-credentials (2022/C 243/02), Annex I", publisher: "Council of the European Union (EUR-Lex)", url: EU, date: "2022-06-16" },
    { title: "13-1071.00 Human Resources Specialists", publisher: "O*NET OnLine, U.S. Department of Labor", url: ONET },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: W3C },
    { title: "Towards a common definition of micro-credentials (definition in the TVETipedia glossary)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022" },
    { title: "Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP", publisher: "POK", url: POK_SANTOTO, date: "2026-08-13", note: "In Spanish. Case documented by POK." },
    { title: "Tasa de aceptación de credenciales digitales: qué esperar de tus egresados y cómo aumentarla", publisher: "POK", url: POK_ACCEPTANCE, date: "2026-10-20", note: "In Spanish. Data from three programs in Brazil." },
  ],
  related: [
    "micro-credentials-what-they-are-how-to-design",
    "micro-credentials-vs-certificates",
    "competency-based-instructional-design",
    "open-badges-3-0-explained",
    "kirkpatrick-model-training-impact",
    "skills-mapping-guide",
  ],
};
