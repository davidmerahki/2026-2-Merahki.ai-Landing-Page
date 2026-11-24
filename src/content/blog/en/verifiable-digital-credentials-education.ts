import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const COURSERA = "https://www.coursera.org/enterprise/resources/pdf/micro-credentials-report-2026-pdf";
const OB3 = "https://www.imsglobal.org/spec/ob/v3p0";
const OB3_IMPL = "https://www.imsglobal.org/spec/ob/v3p0/impl";
const POK_VERIF = "https://www.pok.tech/blog/es/posts/como-verifican-empleadores-credenciales-digitales";
const POK_ACEPT = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";

export const articulo: Articulo = {
  slug: "verifiable-digital-credentials-education",
  lang: "en",
  altSlug: "credenciales-digitales-verificables",
  title:
    "Verifiable digital credentials: what they are, which types exist, and how universities and companies use them to certify skills",
  seoTitle: "Verifiable digital credentials: types and how they work",
  description:
    "What a verifiable digital credential is, how it differs from a PDF certificate or a badge, how employers verify it, and what institutions must design.",
  kicker: "Verifiable credentials",
  keywords: [
    "digital credentials",
    "verifiable digital credentials",
    "verifiable credentials in education",
    "digital badges",
    "Open Badges 3.0",
    "W3C Verifiable Credentials",
    "skills-based hiring",
  ],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    `A <strong>verifiable digital credential</strong> is a signed record of a learning achievement that anyone can check online: who issued it, to whom, when, and whether it was changed.`,
    `Four formats get mixed up: the PDF certificate, the digital badge, the verifiable credential built on Open Badges 3.0 or W3C Verifiable Credentials 2.0, and the blockchain-anchored credential.`,
    `Verification proves origin and integrity. What an employer learns about the skill depends on design: criteria, evidence, results, and framework alignment.`,
    `Issuing well takes data from the SIS, the LMS, and the program design, and the credential should go out inside the learning journey, not months later.`,
    `merahki designs, runs, and measures the program. Its partner POK issues the credentials and turns them into skills intelligence.`,
  ],
  body: [
    {
      t: "p",
      html: `A <strong>verifiable digital credential</strong> is an electronic record of a learning achievement, signed by the issuer, that anyone can check online: who issued it, to whom, when, and whether anyone tampered with it. Universities and companies use verifiable credentials to certify skills, courses, and micro-credentials. This guide is about learning records, not login credentials or the PKI certificates that secure websites.`,
    },
    {
      t: "p",
      html: `The timing matters because employers still rarely use online certificates to hire. In the World Economic Forum's <a href="${WEF}">Future of Jobs Report 2025</a>, 19% of employers plan to remove degree requirements and hire for skills, and only 14% plan to consider online certificates when making hiring decisions. A credential that can be checked, and that describes the evidence behind it, closes part of that gap.`,
    },
    {
      t: "stats",
      items: [
        { value: "19%", label: "of employers plan to remove degree requirements and hire for skills", source: "WEF, Future of Jobs Report 2025, p. 53", href: WEF },
        { value: "14%", label: "of employers plan to consider online certificates in hiring decisions", source: "WEF, Future of Jobs Report 2025, pp. 61-62", href: WEF },
        { value: "98%", label: "of employers surveyed by Coursera use skills-based hiring for entry-level roles", source: "Coursera, Micro-Credentials Impact Report 2026, p. 6", href: COURSERA },
      ],
    },
    { t: "h2", text: "What a digital credential is, and what it is not", id: "what-it-is" },
    {
      t: "p",
      html: `In IT, "digital credentials" usually means a username and password. "Digital certificate" often refers to the cryptographic certificates behind HTTPS or document signing. Neither is the topic here. In education, a digital credential is proof that a person learned something and demonstrated it.`,
    },
    {
      t: "p",
      html: `The most cited reference is the micro-credential definition UNESCO published in 2022 after consulting 47 experts: a record of a focused learning achievement, assessed against clear standards and awarded by a trusted provider (see the <a href="https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential">UNESCO-UNEVOC glossary</a>). UNESCO notes that it is an expert consensus, not an official position. The same report says "verify" means being able to check what the holder claims to have achieved, without tying it to any specific technology. That is a useful test. If a third party cannot check the credential without asking the institution for a favor, it is not verifiable.`,
    },
    { t: "h2", text: "Which types of digital credentials exist", id: "types" },
    {
      t: "p",
      html: `Registrars, HR teams, and marketing teams tend to use four formats interchangeably. They differ in how they are checked and how much they say about the achievement.`,
    },
    {
      t: "table",
      head: ["Format", "What it is", "How it is checked", "What it tells an employer"],
      rows: [
        ["PDF or image certificate", "A document with a name, program, date, and a scanned signature. Sometimes it includes a QR code.", "By contacting the institution, or through the QR code if it points to an issuer page.", "That the person says they finished something. Easy to edit."],
        ["Digital badge on Open Badges 2.0", "An image with metadata: issuer, criteria, date, and sometimes evidence.", "In hosted mode, the verifier fetches the record from the issuer's server. A signed mode also exists.", "Which criteria were met, as long as the issuer's record stays online."],
        ["Verifiable credential on Open Badges 3.0 or W3C VC 2.0", "A digitally signed record held by the learner, with the achievement description, criteria, and evidence.", "With the issuer's cryptographic signature and a status check: valid, expired, or revoked.", "Who issued it, to whom, whether it was altered, and what skill the person demonstrated."],
        ["Blockchain-anchored credential", "A verifiable credential whose hash is recorded on a public blockchain. It is an extra layer, not a separate standard.", "With an independent verifier that compares the hash with the public record.", "Everything above, plus an integrity proof that does not depend on the vendor."],
      ],
      caption: "Digital credential formats in education. Sources: 1EdTech Open Badges 2.0 and 3.0 specifications, and POK.",
    },
    {
      t: "p",
      html: `Where do micro-credentials fit? A micro-credential is a type of program: a short, assessed learning achievement with value of its own. It can be delivered in any of the formats above. Issuing it as a verifiable credential is the better choice, because the employer sees the skill and the evidence along with the course name. We cover the design side in our <a href="/certification">certification with verifiable credentials</a> service.`,
    },
    { t: "h2", text: "The standards behind verifiable credentials: Open Badges 3.0, W3C VC 2.0, and CLR 2.0", id: "standards" },
    {
      t: "p",
      html: `Three open standards support verifiable credentials in education. No vendor owns them. Consortia with public processes maintain them.`,
    },
    {
      t: "ul",
      items: [
        `<strong>W3C Verifiable Credentials Data Model 2.0.</strong> The general foundation. The W3C published it as a Recommendation on May 15, 2025. It defines three roles: the issuer who signs, the holder who keeps the credential, and the verifier who checks it (<a href="https://www.w3.org/TR/vc-data-model-2.0/">W3C specification</a>).`,
        `<strong>Open Badges 3.0.</strong> 1EdTech's standard for badges and achievements. 1EdTech made it publicly available on <a href="https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060">May 29, 2024</a> and aligned it with the W3C data model 2.0 (<a href="${OB3}">Open Badges 3.0 specification</a>). Each badge carries a description of the achievement: name, criteria, type, credits, evidence, and alignment to skills frameworks.`,
        `<strong>CLR 2.0 (Comprehensive Learner Record).</strong> Also from 1EdTech. It bundles several credentials for one learner into a single signed record, similar to a transcript, and has no image (<a href="https://www.1edtech.org/standards/open-badges">1EdTech</a>).`,
      ],
    },
    {
      t: "p",
      html: `One detail many institutions skip: "compatible with Open Badges 3.0" is not the same as certified. 1EdTech tests products and publishes a <a href="https://site.imsglobal.org/certifications">certification directory</a>. The directory itself says that a product missing from the list either did not pass testing or has an expired certification. For what changed from version 2.0 and what to ask a vendor, read <a href="/blog/open-badges-3-0-explained">Open Badges 3.0 explained</a>.`,
    },
    { t: "h2", text: "How employers verify a digital credential", id: "verification" },
    {
      t: "p",
      html: `On the employer side, it takes seconds. The candidate shares a link, a QR code, or the credential on their LinkedIn profile. The recruiter opens it and sees a public verification page. Behind that page, software runs the checks that the <a href="${OB3}">Open Badges 3.0 specification</a> lays out step by step:`,
    },
    {
      t: "ol",
      items: [
        `It confirms the credential follows the structure of the standard.`,
        `It checks the digital signature against the issuer's public key. If the signature fails, the credential was altered or was not issued by the claimed issuer.`,
        `It checks status. If the institution revoked the credential, that shows up in a status list the issuer publishes.`,
        `It checks the start and expiration dates, when the credential has them.`,
        `Optionally, it matches the credential subject to the person presenting it, through an identifier or a hashed email.`,
      ],
    },
    {
      t: "p",
      html: `POK, the verifiable credential infrastructure and Skills Intelligence company merahki issues with, describes <a href="${POK_VERIF}">three verification tiers</a>. The first is the signed credential on Open Badges 3.0 and W3C VC, which is the baseline. The second anchors a hash of the credential on a public blockchain using the Blockcerts standard, so anyone can validate it with a third-party verifier. The third issues the credential as an NFT in the holder's wallet. For high-volume hiring, POK notes that applicant tracking systems can read the standardized metadata without contacting each issuer.`,
    },
    {
      t: "callout",
      title: "What verification does not prove",
      html: `Verification confirms where the credential came from and that nobody changed it. It does not tell you what the person can do. That depends on how the skill was written, what evidence was assessed, and which criterion triggered the award. A signed badge that reads "Excel Course, 20 hours" is verifiable and says almost nothing.`,
    },
    { t: "h2", text: "What universities and companies must design before issuing", id: "design" },
    {
      t: "p",
      html: `Open Badges 3.0 provides the fields. Filling them in well is instructional design work. This is the anatomy we use at merahki, with field names from the specification and an illustrative continuing education example.`,
    },
    {
      t: "table",
      head: ["Open Badges 3.0 field", "What to write", "Illustrative example"],
      rows: [
        ["name", "The skill, phrased as what the person does. Not the course title.", "Builds sales performance dashboards for leadership"],
        ["description", "What the skill is for and where it applies.", "Builds and presents dashboards from sales data for weekly decisions."],
        ["criteria", "What the person had to demonstrate and the passing standard.", "Delivered a dashboard with real data and reached the \"proficient\" level on the rubric."],
        ["evidence", "A link to, or description of, the assessed work. It sits on each learner's credential.", "Link to the dashboard and the assessor's feedback."],
        ["resultDescription", "How the work was scored: rubric levels or a score range.", "Four-level rubric. Awarded from \"proficient\" up."],
        ["alignment", "The external framework item it points to: an occupation, a qualification level, or a competency.", "A CASE item or a Credential Engine competency. In Colombia, a CUOC occupation and an MNC level."],
        ["creditsAvailable, fieldOfStudy, tag", "Credits or hours, subject area, and searchable tags.", "Hours of work, sales analytics, skill tags."],
      ],
      caption: "Fields from the 1EdTech Open Badges 3.0 specification. The example is illustrative.",
    },
    {
      t: "p",
      html: `Alignment is where a credential becomes readable to a hiring manager. The <a href="${OB3_IMPL}">Open Badges 3.0 implementation guide</a> shows alignment to CASE framework items and to Credential Engine (CTDL) competencies. merahki works mostly in Latin America, where the national references are occupation and qualification frameworks: in Colombia, the CUOC (the national occupation classification) and the MNC (the national qualifications framework, with eight levels). With an occupation and a level on the badge, an HR team can map the credential to its job profiles.`,
    },
    {
      t: "p",
      html: `The design sequence never changes: skill, learning outcomes, evidence, rubric, and award criterion. Start from the badge artwork and you get a nice image with nothing behind it. The full process is in our <a href="/methodology">competency-based instructional design methodology</a>.`,
    },
    {
      t: "cta",
      html: `If you need to define the skills, the evidence, and the issuing flow for your verifiable credentials, merahki designs and runs the program with you and POK issues the credentials.`,
    },
    { t: "h2", text: "How universities and companies use verifiable credentials", id: "uses" },
    { t: "h3", text: "Universities and continuing education" },
    {
      t: "p",
      html: `In a continuing education unit, a verifiable credential does three jobs. It makes each step of a stackable pathway visible. It gives the registrar something concrete to evaluate when a short course counts toward credit in a degree, once the university sets the equivalence rule. And it puts the institution's name on every professional profile where a graduate shares it. That is how we approach <a href="/lifelong-learning">lifelong learning for universities</a>.`,
    },
    {
      t: "p",
      html: `Design also shapes what employers value. In Coursera's 2026 survey, 82% of employers say they place more value on micro-credentials co-designed with industry, and 82% of students prefer project-based micro-credentials over content-only ones (<a href="${COURSERA}">Micro-Credentials Impact Report 2026</a>, p. 13). These are stated perceptions from seven countries, including the United States and Mexico.`,
    },
    { t: "h3", text: "Companies: employees, customers, and partners" },
    {
      t: "p",
      html: `Inside a company, the same logic serves three audiences. For employees, credentials record which skills each person has and support internal mobility. For customers, they certify that someone knows how to use the product, which cuts support load and speeds adoption. For resellers and partners, they mark partner tiers with a criterion anyone can check. This is the daily work of the customer education and partner academies we design.`,
    },
    { t: "h2", text: "What data issuing requires: SIS, LMS, and program design", id: "data" },
    {
      t: "p",
      html: `Issuing draws on three sources. If one breaks, credentials go out late, go out incomplete, or go out from a spreadsheet someone maintains by hand.`,
    },
    {
      t: "table",
      head: ["Source", "Data", "Why it matters"],
      rows: [
        ["SIS (student information system)", "Legal name, email or ID, program, cohort, and enrollment status.", "Identify the holder correctly and avoid issuing to withdrawn learners."],
        ["LMS", "Completion, rubric level, completion date, and a link to the evidence.", "Issue when the criterion is met, not at the end of the term."],
        ["Program design", "Skill, criteria, hours, qualification level, and occupation.", "Fill the fields an employer reads after verifying."],
      ],
    },
    {
      t: "p",
      html: `When the credential arrives changes what happens next. POK documented three programs in Brazil with 30,441 credentials issued. In bulk sends to graduates, about 20% of recipients accepted their credential. In a teacher training program where the credential arrived as the course ended, acceptance reached 68% (<a href="${POK_ACEPT}">POK, October 2026</a>). POK cautions that one comparison cannot isolate the cause. The design takeaway still holds: issue the credential inside the learning journey, connected to the LMS. Collect consent for processing personal data at enrollment, under whatever privacy rules apply to you.`,
    },
    { t: "h2", text: "What to ask before choosing credential issuing infrastructure", id: "questions" },
    {
      t: "ul",
      items: [
        `Is it certified by 1EdTech for Open Badges 3.0? Look it up in the 1EdTech directory.`,
        `How is a credential revoked, and what does a verifier see when that happens?`,
        `Can learners store credentials in standard wallets and keep them after they leave?`,
        `What happens to issued credentials if you switch vendors or the vendor shuts down?`,
        `Does it connect to your LMS and SIS so credentials issue on criteria, without manual lists?`,
        `What skills data do you get back after issuing?`,
      ],
    },
    {
      t: "p",
      html: `merahki works with <a href="https://www.pok.tech/en">POK</a> as its issuing partner. merahki designs, produces, runs, and measures the program. POK issues the verifiable credentials and turns those records into skills intelligence: which skills a network of people holds and where the gaps are. POK reports that it is certified by 1EdTech for Open Badges 3.0.`,
    },
  ],
  faq: [
    {
      q: "What are digital credentials used for?",
      a: `They are electronic records of a learning achievement. They let a person show what they learned and let an employer or a university check it without calling the institution. Verifiable credentials carry the issuer's digital signature and a description of the skill.`,
    },
    {
      q: "What types of digital credentials are there?",
      a: `Education uses four formats: the PDF or image certificate, the digital badge, the verifiable credential on Open Badges 3.0 or W3C VC 2.0, and the blockchain-anchored credential. A micro-credential is a type of program that can be issued in any of them.`,
    },
    {
      q: "What is a digital badge?",
      a: `A digital badge is a credential with an image and metadata describing the achievement: issuer, criteria, date, and evidence. The most widely used open standard is Open Badges from 1EdTech. In version 3.0, the badge is also a signed verifiable credential that the learner holds.`,
    },
    {
      q: "How do you create verifiable digital credentials?",
      a: `Start by designing the skill, the evidence, and the award criterion. Then set up the badge in certified issuing infrastructure and connect it to the LMS so it issues when the learner meets the criterion. Design takes longer than issuing, and it decides whether the credential says anything useful.`,
    },
    {
      q: "Do verifiable credentials require blockchain?",
      a: `No. An Open Badges 3.0 credential is verified with the issuer's digital signature and a status check. Blockchain anchoring is an optional layer that adds an integrity proof independent of the vendor.`,
    },
    {
      q: "Is a PDF with a QR code a verifiable credential?",
      a: `Only partly. The QR code may point to an issuer page, but the PDF can be edited and the proof depends on that page staying online. A verifiable credential carries its cryptographic proof inside the record itself.`,
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "pp. 53 and 61-62" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Survey fielded February to March 2026 in seven countries. pp. 6 and 13" },
    { title: "Micro-credential (TVETipedia Glossary)", publisher: "UNESCO-UNEVOC", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential", note: "Definition from Towards a common definition of micro-credentials (UNESCO, 2022)" },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: "https://www.w3.org/TR/vc-data-model-2.0/", date: "2025-05-15" },
    { title: "Open Badges Specification 3.0", publisher: "1EdTech", url: OB3 },
    { title: "Open Badges 3.0 Implementation Guide", publisher: "1EdTech", url: OB3_IMPL },
    { title: "New Open Badges 3.0 standard provides enhanced security and mobility", publisher: "1EdTech", url: "https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060", date: "2024-05-29" },
    { title: "Open Badges (standard overview)", publisher: "1EdTech", url: "https://www.1edtech.org/standards/open-badges" },
    { title: "Open Badges v2.0 Final Release", publisher: "1EdTech (IMS Global)", url: "https://www.imsglobal.org/sites/default/files/Badges/OBv2p0Final/index.html", date: "2018-04-12" },
    { title: "Certified product directory", publisher: "1EdTech", url: "https://site.imsglobal.org/certifications" },
    { title: "Cómo verifican los empleadores las credenciales digitales en 2026 (Spanish)", publisher: "POK", url: POK_VERIF, date: "2026-07-14" },
    { title: "Tasa de aceptación de credenciales digitales (Spanish)", publisher: "POK", url: POK_ACEPT, date: "2026-10-20" },
  ],
  related: [
    "open-badges-3-0-explained",
    "micro-credentials-what-they-are-how-to-design",
    "coursera-micro-credentials-impact-report-2026",
    "how-to-design-a-micro-credential",
  ],
};
