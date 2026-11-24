import type { Articulo } from "../types";

const POK_OB3 = "https://www.pok.tech/blog/es/posts/open-badge-3-0-guia-completa-credenciales-digitales";
const OB3 = "https://www.imsglobal.org/spec/ob/v3p0";
const OB3_IMPL = "https://www.imsglobal.org/spec/ob/v3p0/impl";
const OB2 = "https://www.imsglobal.org/sites/default/files/Badges/OBv2p0Final/index.html";
const ANNOUNCEMENT = "https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060";

export const articulo: Articulo = {
  slug: "open-badges-3-0-explained",
  lang: "en",
  altSlug: "open-badges-3-0-que-cambia",
  title:
    "Open Badges 3.0 explained: what changed from version 2.0 and what institutions should require from a credential platform",
  seoTitle: "Open Badges 3.0 explained: what changed from 2.0",
  description:
    "What Open Badges 3.0 is, how it aligns with W3C Verifiable Credentials, what changed from 2.0, and what to ask a credential platform before you issue.",
  kicker: "Credential standards",
  keywords: [
    "Open Badges 3.0",
    "open badges",
    "what are open badges",
    "W3C Verifiable Credentials",
    "digital badges standard",
    "CLR 2.0",
    "Open Badges 2.0 vs 3.0",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `<strong>Open Badges 3.0</strong> is the version of 1EdTech's digital badge standard that makes every badge a verifiable credential under the W3C data model 2.0. It became public in May 2024.`,
    `The core change is verification: the badge carries a cryptographic proof instead of relying on a copy hosted on the issuer's server.`,
    `Version 3.0 adds decentralized identifiers, status lists for revocation, wallet connectivity, and more fields to describe the achievement.`,
    `Open Badges 2.0 badges do not disappear. 1EdTech recommends a transition window where issuers keep 2.0 support while reissuing in 3.0.`,
    `The standard defines the container. Which skill the badge certifies, with what evidence and criteria, is still a design decision.`,
  ],
  body: [
    {
      t: "p",
      html: `<strong>Open Badges 3.0</strong> is the version of 1EdTech's open digital badge standard that turns every badge into a verifiable credential under the W3C Verifiable Credentials Data Model 2.0. The badge is signed when issued, held by the learner, and verified with the issuer's signature instead of a copy hosted on the issuer's server. 1EdTech <a href="${ANNOUNCEMENT}">made it public on May 29, 2024</a>.`,
    },
    {
      t: "p",
      html: `This article adapts <a href="${POK_OB3}">POK's Spanish-language guide to Open Badge 3.0</a>, published in May 2026, and checks its technical claims against 1EdTech's official <a href="${OB3}">specification</a> and <a href="${OB3_IMPL}">implementation guide</a>. POK explains the container. We add what goes inside it: how to write each badge so the person reading it learns something.`,
    },
    { t: "h2", text: "What are Open Badges?", id: "what-are-open-badges" },
    {
      t: "p",
      html: `Open Badges is an open standard for describing learning achievements in a format any system can read. 1EdTech, the consortium formerly known as IMS Global, maintains it. Version 2.0 was released in <a href="${OB2}">April 2018</a> and is still widely used. In 2.0, a badge has three parts: the assertion (the award to one person), the badge class (what was achieved and under which criteria), and the issuer profile.`,
    },
    {
      t: "p",
      html: `Version 3.0 keeps the idea and changes the architecture. The specification states that badges issued under 3.0 will not conform to every 2.x requirement, because the assertion now follows the W3C verifiable credential structure.`,
    },
    { t: "h2", text: "What changed in Open Badges 3.0", id: "what-changed" },
    {
      t: "table",
      head: ["Area", "Open Badges 2.0", "Open Badges 3.0"],
      rows: [
        ["Data model", "Its own format: Assertion, BadgeClass, and issuer Profile.", "A W3C verifiable credential (data model 2.0). The assertion becomes an OpenBadgeCredential and BadgeClass becomes Achievement."],
        ["Verification", "Two modes: hosted, which fetches the assertion from its URL, or signed.", "Always a cryptographic proof: VC-JWT with RS256 at minimum, or Data Integrity with EdDSA."],
        ["Issuer identity", "Profile with an HTTP URL.", "HTTP IDs are no longer required. Decentralized identifiers (DIDs) are allowed."],
        ["Recipient", "Email or another identifier, ideally hashed.", "A DID in the credential subject, or a salted identity hash."],
        ["Status and validity", "Issuer-published revocation and an expiration date.", "Bitstring Status List v1.0, validFrom and validUntil dates, and a refresh service."],
        ["Transport", "Badge backpacks and, from version 2.1, the Badge Connect API.", "Verifiable credential wallets (CHAPI, DIDComm, OpenID for Verifiable Credentials) and the Open Badges API with OAuth 2.0."],
        ["Achievement description", "Criteria, evidence, and alignment.", "Adds achievement type, credits, field of study, specialization, human-readable code, and result descriptions with rubric levels."],
      ],
      caption: "Sources: Open Badges 2.0 specification (2018), 1EdTech Open Badges 3.0 specification and implementation guide.",
    },
    {
      t: "p",
      html: `The change you notice first is verification. In 2.0, a hosted badge was checked by fetching the assertion from the issuer's server. If the institution switched vendors or the server went down, the badge still existed but nobody could prove it. In 3.0, the credential carries its own cryptographic proof, and the verifier checks it against the issuer's public key. The specification requires at least one proof mechanism and spells out the steps: check the structure, validate the signature, check revocation status, and check the validity dates.`,
    },
    {
      t: "p",
      html: `On privacy, the implementation guide mentions selective disclosure as a capability of some proof mechanisms. It does not describe it as a requirement of the standard, so ask your vendor whether they support it and how.`,
    },
    { t: "h2", text: "How Open Badges 3.0 relates to W3C Verifiable Credentials and CLR 2.0", id: "w3c-clr" },
    {
      t: "p",
      html: `The W3C Verifiable Credentials model is the general foundation for any signed digital credential: an issuer signs it, a holder keeps it, and a verifier checks it. The W3C published version 2.0 as a Recommendation on <a href="https://www.w3.org/TR/vc-data-model-2.0/">May 15, 2025</a>. Open Badges 3.0 aligns with that version and, per its specification, also provides schemas compatible with 1.1 for issuers who have not migrated yet. That is why a 3.0 badge can sit in the same wallet as other verifiable credentials.`,
    },
    {
      t: "p",
      html: `CLR 2.0 (Comprehensive Learner Record) bundles several credentials for one learner into a single signed record, similar to a transcript. It is signed the same way as a badge and has no image (<a href="https://www.1edtech.org/standards/open-badges">1EdTech</a>). For a university with stackable pathways, CLR delivers the whole pathway as one signed record.`,
    },
    { t: "h2", text: "What information every badge should carry", id: "design" },
    {
      t: "p",
      html: `POK's guide is clear on the technical side. What decides whether an employer understands a badge is something else: what you write in each field. This is the checklist we use at merahki before issuing, with an illustrative example from a continuing education course in project management.`,
    },
    {
      t: "ul",
      items: [
        `<strong>name:</strong> the skill, with a verb. "Builds a project risk register and defines responses," not "Project Management Certificate, Module 3."`,
        `<strong>description:</strong> what the skill is for and where it applies, in two or three sentences.`,
        `<strong>criteria:</strong> what the learner had to demonstrate and the passing standard.`,
        `<strong>achievementType:</strong> the kind of achievement, such as competency, course, or certification.`,
        `<strong>resultDescription:</strong> how the work was scored, with the rubric levels.`,
        `<strong>evidence:</strong> the assessed work or a description of it, on each learner's credential. 1EdTech's guide warns that results and evidence may contain confidential data, so decide what is public.`,
        `<strong>alignment:</strong> the external framework. The implementation guide shows alignment to CASE items and to CTDL competencies from Credential Engine. In Colombia, where most of our programs run, we point to the national occupation classification (CUOC) and the national qualifications framework level (MNC), with their link and code.`,
        `<strong>creditsAvailable, fieldOfStudy, humanCode, tag:</strong> credits or hours, subject area, course code, and skill tags.`,
      ],
    },
    {
      t: "p",
      html: `All of this comes from competency-based design: skill, learning outcomes, evidence, rubric, and award criterion. Without that design, the fields get filled with the course title and the hours. It is the core of our <a href="/certification">certification with verifiable credentials</a> service and our <a href="/methodology">competency-based design methodology</a>.`,
    },
    {
      t: "callout",
      title: "What the standard does not solve",
      html: `Open Badges 3.0 defines how a badge is signed, stored, and verified. Which skill it certifies, with what evidence and criteria, depends on the program. A 3.0 badge that only says "Leadership Course, 16 hours" is well signed and tells an employer very little.`,
    },
    { t: "cta" },
    { t: "h2", text: "What to ask a credential platform before you issue", id: "questions" },
    {
      t: "p",
      html: `POK suggests five questions for choosing a platform. We keep them and add the design questions that usually get left out of the purchase.`,
    },
    {
      t: "ol",
      items: [
        `Is it listed as certified for Open Badges 3.0 in the <a href="https://site.imsglobal.org/certifications">1EdTech directory</a>? The directory notes that a missing product either did not pass testing or has an expired certification.`,
        `Which signing method does it use, and where does it publish its public keys?`,
        `How does it revoke a credential, and with which status list?`,
        `Which wallets and protocols does it support so learners can take their credentials with them?`,
        `Does it support selective disclosure?`,
        `What happens to issued credentials if you switch vendors? Can it reissue your 2.0 badges as 3.0?`,
        `Can you fill every achievement field (criteria, results, evidence, alignment), or only name, image, and description?`,
        `Does it connect to your LMS so badges issue when the criterion is met?`,
      ],
    },
    { t: "h2", text: "What happens to Open Badges 2.0 badges already issued", id: "migration" },
    {
      t: "p",
      html: `The <a href="${OB3_IMPL}">implementation guide</a> acknowledges that 3.0 objects are not backward compatible with 2.0. It proposes a transition without breaking changes. An issuer can expose the same achievement data in both formats from different endpoints, without storing it twice. It can reissue a 2.0 badge as 3.0 with a new ID. And it should keep a window of 2.0 support while the systems that consume badges catch up. Anyone looking at a reissued badge can still verify the original 2.0 assertion with 2.0 protocols.`,
    },
    {
      t: "p",
      html: `For a university with 2.0 badges already out, the practical job is an inventory: how many exist, which platform hosts them, which fields are filled in, and which are worth reissuing with a better description. It is a good moment to fix badge names that only repeat the course title. For the wider picture of formats, see our guide to <a href="/blog/verifiable-digital-credentials-education">verifiable digital credentials</a>.`,
    },
  ],
  faq: [
    {
      q: "What are Open Badges?",
      a: `Open Badges is an open standard from 1EdTech for describing learning achievements in a format any system can read. Each badge states who issued it, to whom, what was achieved, under which criteria, and, when included, with what evidence.`,
    },
    {
      q: "What is Open Badges 3.0?",
      a: `It is the version of the standard 1EdTech made public in May 2024. It turns every badge into a verifiable credential under the W3C data model 2.0: signed at issuance, held by the learner, and verified with the issuer's signature.`,
    },
    {
      q: "Does Open Badges 3.0 use blockchain?",
      a: `It does not require it. Open Badges 3.0 is a format and signature-based verification standard. Some issuers add blockchain anchoring as an extra integrity layer, but the standard works without it.`,
    },
    {
      q: "Are Open Badges 2.0 badges still valid?",
      a: `They still exist and circulate. 1EdTech's guide recommends that issuers keep a 2.0 support window while reissuing in 3.0. What you do not get is automatic compatibility between the two formats.`,
    },
    {
      q: "What is the difference between Open Badges 3.0 and W3C Verifiable Credentials?",
      a: `W3C Verifiable Credentials is the general model for any signed digital credential. Open Badges 3.0 applies that model to learning achievements and adds the fields to describe them: criteria, results, evidence, and framework alignment.`,
    },
    {
      q: "How do I know if a platform is certified for Open Badges 3.0?",
      a: `Look it up in 1EdTech's certified product directory. A vendor's claim of compatibility is not the same as passing certification testing.`,
    },
  ],
  sources: [
    { title: "Open Badge 3.0: qué es, cómo funciona y por qué es el estándar global de credenciales digitales (Spanish)", publisher: "POK", url: POK_OB3, date: "2026-05-18" },
    { title: "Open Badges Specification 3.0", publisher: "1EdTech", url: OB3 },
    { title: "Open Badges 3.0 Implementation Guide", publisher: "1EdTech", url: OB3_IMPL },
    { title: "New Open Badges 3.0 standard provides enhanced security and mobility", publisher: "1EdTech", url: ANNOUNCEMENT, date: "2024-05-29" },
    { title: "Open Badges (standard overview)", publisher: "1EdTech", url: "https://www.1edtech.org/standards/open-badges" },
    { title: "Open Badges v2.0 Final Release", publisher: "1EdTech (IMS Global)", url: OB2, date: "2018-04-12" },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: "https://www.w3.org/TR/vc-data-model-2.0/", date: "2025-05-15" },
    { title: "Certified product directory", publisher: "1EdTech", url: "https://site.imsglobal.org/certifications" },
  ],
  adaptedFrom: {
    title: "Open Badge 3.0: qué es, cómo funciona y por qué es el estándar global de credenciales digitales",
    publisher: "POK",
    url: POK_OB3,
    date: "2026-05-18",
  },
  related: [
    "verifiable-digital-credentials-education",
    "how-to-design-a-micro-credential",
    "micro-credentials-vs-certificates",
    "coursera-micro-credentials-impact-report-2026",
  ],
};
