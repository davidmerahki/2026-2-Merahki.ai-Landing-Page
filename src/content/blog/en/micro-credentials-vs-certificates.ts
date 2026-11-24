import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const UNESCO_PDF = "https://microcredenciales.uca.es/wp-content/uploads/2024/09/UNESCO_MICROCREDENCIALES.pdf";
const EU = "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022H0627(02)";
const OECD = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const OB3 = "https://www.1edtech.org/standards/open-badges";

export const articulo: Articulo = {
  slug: "micro-credentials-vs-certificates",
  lang: "en",
  altSlug: "diferencia-microcredencial-diplomado-certificado",
  title: "Micro-credentials vs. certificates: how micro-credentials compare with certificate programs, certifications, digital badges and degrees for universities and employers",
  seoTitle: "Micro-credentials vs. certificates: the key differences",
  description: "How micro-credentials differ from certificate programs, certifications, digital badges and degrees, with a comparison table and when to use each format.",
  kicker: "Micro-credentials",
  keywords: [
    "micro credentials vs certificates",
    "micro credential vs digital badge",
    "micro-credentials vs certifications",
    "micro-credential vs certificate program",
    "macro-credentials",
    "stackable credentials",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `A <strong>certificate</strong> usually attests to completing a course or a program. A <strong>micro-credential</strong> attests to one specific competency, assessed with evidence and verifiable online.`,
    `A <strong>professional certification</strong> is awarded by a certifying body after a standardized exam. A <strong>digital badge</strong> is only the format, and it can carry anything from attendance to an assessed micro-credential.`,
    `None of these is a degree. Degrees are macro-credentials, and a micro-credential counts toward one only when the institution recognizes it as credit.`,
    `Turning a certificate program into a stack of micro-credentials makes sense when its courses already map to distinct competencies with their own evidence.`,
  ],
  body: [
    {
      t: "p",
      html: `The difference between a micro-credential and a certificate is what each one attests to. A certificate usually shows that someone completed a course or a program. A <strong>micro-credential</strong> shows that someone can perform one specific competency, proven with assessed evidence and verifiable online by anyone, including employers who have never heard of the program.`,
    },
    {
      t: "p",
      html: `The word "certificate" covers very different things in the United States, from a completion record for a one-day workshop to a graduate certificate built from several credit-bearing courses. This comparison is for continuing education and workforce leaders deciding which format fits which goal.`,
    },
    { t: "h2", text: "Each format in one sentence", id: "definitions" },
    {
      t: "ul",
      items: [
        `<strong>Course completion certificate:</strong> a record that the learner finished a course, with or without an assessment of skills.`,
        `<strong>Certificate program:</strong> a structured set of courses in one field. It can be credit-bearing or noncredit, depending on the institution.`,
        `<strong>Professional certification:</strong> a credential awarded by a certifying body after a standardized exam, often with renewal requirements.`,
        `<strong>Digital badge:</strong> a digital container, usually built on <a href="${OB3}">Open Badges</a>, that carries metadata about an achievement.`,
        `<strong>Micro-credential:</strong> a record of focused learning achievement, assessed against defined standards and awarded by a trusted provider, in <a href="${UNEVOC}">UNESCO's 2022 definition</a>.`,
        `<strong>Macro-credential:</strong> UNESCO's term for degrees, diplomas, certificates and licenses, generally awarded by accredited or regulated institutions and typically taking years (<a href="${UNESCO_PDF}">UNESCO, 2022</a>).`,
      ],
    },
    { t: "h2", text: "Comparison table: micro-credentials, certificates, certifications and badges", id: "table" },
    {
      t: "table",
      head: ["Criterion", "Completion certificate", "Certificate program", "Professional certification", "Micro-credential"],
      rows: [
        ["What it attests to", "Course finished", "Program completed", "Exam passed", "One specific competency"],
        ["Assessment", "Varies", "Course grades", "Standardized exam", "Evidence plus a published rubric"],
        ["Who issues it", "Any provider", "A college or university", "A certifying body", "Any trusted provider"],
        ["Learning outcomes", "Sometimes", "Usually, per course", "Defined by an exam blueprint", "Always, explicit"],
        ["Online verification", "Rarely", "Through the institution", "Through the certifying body's registry", "Yes, with metadata and a public link"],
        ["Stacks with others", "No", "Can be the top of a stack", "Sometimes, through tiers", "Yes, by design"],
        ["Counts toward a degree", "No", "If credit-bearing and accepted", "Only if a program grants credit for it", "Only if a program recognizes it as credit"],
      ],
      caption: "Summary by merahki.ai, based on UNESCO (2022), the EU Council Recommendation (2022) and common US practice.",
    },
    { t: "h2", text: "Micro-credential vs. certificate program", id: "vs-certificate" },
    {
      t: "p",
      html: `A certificate program bundles several courses around a field and awards one credential at the end. Its strength is depth. Its limit is granularity: a learner or an employer who needs one skill still has to buy, take and certify the whole bundle. A micro-credential isolates one competency and makes it legible on its own. The two work well together when the certificate program is the top of a stack and each course inside it earns its own micro-credential along the way.`,
    },
    { t: "h2", text: "Micro-credential vs. professional certification", id: "vs-certification" },
    {
      t: "p",
      html: `A professional certification measures a person against an industry standard set by a certifying body, usually through a proctored exam, and often expires unless it is renewed. A micro-credential is issued by the provider that taught and assessed the learning, and its assessment is usually a work product rather than a test. They answer different questions. A certification says the person met an industry benchmark. A micro-credential says the person produced evidence of a specific skill in a specific program. Some micro-credentials prepare learners for a certification exam, which is a sensible pathway design.`,
    },
    { t: "h2", text: "Micro-credential vs. digital badge", id: "vs-badge" },
    {
      t: "p",
      html: `The badge is the container. Under Open Badges 3.0, the 1EdTech standard, a badge is signed as a verifiable credential and carries metadata anyone can check. The same technology can issue a badge for watching a webinar or for passing a project-based assessment. They look alike on LinkedIn. The difference sits behind the badge: learning outcomes, evidence and criteria. For more on the format, see <a href="/blog/verifiable-digital-credentials-education">verifiable digital credentials in education</a>.`,
    },
    { t: "h2", text: "Is a micro-credential a degree?", id: "degree" },
    {
      t: "p",
      html: `No. A degree is a macro-credential tied to a complete formal program. A micro-credential can count toward a degree when the degree-granting institution recognizes it as credit, either through its own transfer and prior-learning policies or through a formal credit recommendation. The <a href="${EU}">EU recommendation of 2022</a> describes micro-credentials as able to stand alone or combine into larger credentials, which is the design goal.`,
    },
    {
      t: "p",
      html: `Degrees still carry weight with employers, even when they doubt them. In a study of 600 US employers summarized by the <a href="${OECD}">OECD (2023)</a>, 72% said a bachelor's degree is an unreliable indicator of skills, yet 52% still saw graduates of degree programs as a lower-risk hire. That is a good argument for stacking micro-credentials into degree pathways rather than positioning them as a replacement.`,
    },
    {
      t: "p",
      html: `Short credentials also have a shelf life. The same OECD review summarizes studies from California and North Carolina in which the earnings return on short certificates flattened or fell to zero seven to nine years after completion, while returns on associate degrees lasted longer. Stacking keeps a short credential tied to a larger one that holds its value.`,
    },
    { t: "h2", text: "What a micro-credential needs to be trusted", id: "trust" },
    {
      t: "p",
      html: `Whatever you call it, a credential earns trust from employers when it has explicit learning outcomes, an assessment based on real work, a declared workload, online verification and a clear place in a pathway. Without the assessment, an employer has no reason to treat it differently from a completion certificate. The design steps are in <a href="/blog/how-to-design-a-micro-credential">how to design a micro-credential</a>.`,
    },
    { t: "h2", text: "Which format fits which goal", id: "by-goal" },
    {
      t: "table",
      head: ["If the goal is", "Use", "Why"],
      rows: [
        ["Logging required training hours or event attendance", "Completion or attendance certificate", "Participation is all you need to prove"],
        ["Updating a broad audience on one topic", "Short course", "It is quick and needs no performance assessment"],
        ["Building deep expertise in a field", "Certificate program", "The value is in the full sequence"],
        ["Proving someone can do a specific job task", "Micro-credential", "It requires evidence that employers can verify"],
        ["Meeting an industry-wide benchmark", "Professional certification", "The certifying body sets and maintains the standard"],
        ["Giving noncredit learners a path into a degree", "Stack of micro-credentials with a credit rule", "Each piece converts to credit in a formal program"],
      ],
    },
    { t: "h2", text: "When to turn a certificate program into a stack of micro-credentials", id: "restructure" },
    {
      t: "ul",
      items: [
        "Its courses already map to distinct competencies, and each can be proven with its own evidence.",
        "Learners arrive with different needs, and many want only part of the program.",
        "Employers want to train teams in one competency, not in the full certificate.",
        "A degree program is willing to accept the micro-credentials as credit.",
      ],
    },
    {
      t: "p",
      html: `Keep the program as one unit when its value comes from integrating the courses, when the final assessment depends on the whole sequence, or when the instructor's method requires an order that cannot be split.`,
    },
    {
      t: "callout",
      title: "How to decide without breaking the instructor's method",
      html: `Start with a diagnostic alongside the people who designed the program: how they teach, what is inside each course, which resources already exist (projects, journals, assessments) and what role each piece plays in the learner's journey. Only then propose which courses become micro-credentials and which stay together. Nothing gets cut without the instructor's approval, and the full certificate can remain as the credential at the top of the stack.`,
    },
    {
      t: "p",
      html: `Demand points the same way. In Coursera's <a href="${COURSERA}">Micro-Credentials Impact Report 2026</a>, 71% of students said they were likely to enroll in a program offering credit-bearing micro-credentials, compared with 35% for programs with none. It is a survey by a company that sells micro-credentials, so read it as a signal, not a forecast.`,
    },
    {
      t: "cta",
      html: `merahki.ai helps continuing education teams decide which programs stay whole and which become stackable micro-credentials, then designs, builds and issues them with POK.`,
    },
    {
      t: "p",
      html: `See how we work with universities in <a href="/lifelong-learning">lifelong learning for universities</a>, or read about issuance and verification on our <a href="/certification">certification with verifiable credentials</a> page. The full overview is in <a href="/blog/micro-credentials-what-they-are-how-to-design">micro-credentials: what they are and how to design them</a>.`,
    },
  ],
  faq: [
    {
      q: "What is the difference between a micro-credential and a certificate?",
      a: "A certificate usually shows that someone completed a course or a program. A micro-credential shows that someone can perform one specific competency, proven with assessed evidence and verifiable online. A certificate program can contain several micro-credentials.",
    },
    {
      q: "What is the difference between a micro-credential and a digital badge?",
      a: "A digital badge is the format that carries information about an achievement. A micro-credential is an assessed achievement that can travel inside a badge. A badge can also be issued for attendance alone, with no competency assessment behind it.",
    },
    {
      q: "Are micro-credentials better than professional certifications?",
      a: "They do different jobs. A certification shows that a person met an industry benchmark set by a certifying body. A micro-credential shows evidence of a specific skill from a specific program. Many pathways use micro-credentials to prepare learners for a certification exam.",
    },
    {
      q: "Do micro-credentials count for college credit?",
      a: "Only when a degree-granting institution recognizes them, through its own credit policies or a formal credit recommendation. Design the micro-credential with declared hours and explicit learning outcomes so a receiving program can evaluate it.",
    },
    {
      q: "What is a macro-credential?",
      a: "It is UNESCO's term for degrees, diplomas, certificates and licenses that accredited or regulated institutions generally award and that typically take years. Micro-credentials can stack toward a macro-credential when a recognition rule exists.",
    },
  ],
  sources: [
    { title: "Towards a common definition of micro-credentials (definition in the TVETipedia glossary)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022" },
    { title: "Towards a common definition of micro-credentials (full report)", publisher: "UNESCO", url: UNESCO_PDF, date: "2022", note: "Copy of the original UNESCO document hosted by the University of Cádiz. p. 5 (macro-credentials)." },
    { title: "Council Recommendation on a European approach to micro-credentials for lifelong learning and employability (2022/C 243/02)", publisher: "Council of the European Union (EUR-Lex)", url: EU, date: "2022-06-16" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OECD", url: OECD, date: "2023", note: "Copy of the original OECD PDF hosted by Utrecht University. p. 8." },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "p. 9." },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
  ],
  related: [
    "micro-credentials-what-they-are-how-to-design",
    "how-to-design-a-micro-credential",
    "verifiable-digital-credentials-education",
    "open-badges-3-0-explained",
    "lifelong-learning-strategy-universities",
  ],
};
