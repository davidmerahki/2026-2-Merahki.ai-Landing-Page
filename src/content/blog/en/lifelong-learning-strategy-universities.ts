import type { Articulo } from "../types";

const UIL = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=lifelong+learning";
const UNESCO_MC = "https://connect.unevoc.unesco.org/home/UNESCO+Publications/lang=en/akt=detail/qs=6648";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const QS = "https://insights.qs.com/hubfs/Reports/QS_World_Future_Skills_Index_2027.pdf";
const OECD = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const CASE = "/case-studies/uniandes-sanofi-microbiota";

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const articulo: Articulo = {
  slug: "lifelong-learning-strategy-universities",
  lang: "en",
  altSlug: "lifelong-learning-universidades-educacion-continua",
  title: "Lifelong learning strategy for universities: how a continuing education unit builds stackable pathways, micro-credentials and corporate training",
  seoTitle: "Lifelong Learning Strategy for Universities",
  description: "What lifelong learning means for a university and how continuing education units build stackable pathways, micro-credentials and corporate training.",
  kicker: "Continuing education",
  keywords: [
    "lifelong learning strategy",
    "lifelong learning universities",
    "university continuing education",
    "what is lifelong learning",
    "continuing education strategy",
    "stackable credentials",
    "micro-credentials higher education",
  ],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    "<strong>Lifelong learning</strong> is learning that continues across a person's whole life, at any age, in any setting, and through formal, non-formal and informal routes, as the UNESCO Institute for Lifelong Learning describes it.",
    "At a university, the continuing education unit turns that principle into strategy through three lines: stackable pathways built from micro-credentials, custom training for corporate clients, and programs for alumni.",
    "The pressure comes from work: employers expect 39% of workers' core skills to change between 2025 and 2030, and 59 of every 100 workers will need training, according to the World Economic Forum.",
    "The operating model has five layers: competency-based design, production, LMS operations, verifiable credentials, and measurement with the Kirkpatrick model.",
    "Track it from enrollment to report: conversion, completion, approved evidence, verified credentials, on-the-job transfer, and repeat corporate purchases.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Lifelong learning</strong> is the principle that people keep learning throughout their lives, at any age, in any setting, and through formal, non-formal and informal routes. For a university, a lifelong learning strategy is how the continuing education unit organizes its offer: stackable pathways, micro-credentials and programs for corporate clients, measured from enrollment to report.",
    },
    {
      t: "p",
      html: "This guide is for deans, provosts and continuing education directors who want to move from a catalog of one-off courses to an offer with structure. It covers the UNESCO definition, why the topic moved up the agenda, how to organize the offer, what operating model it needs, and which indicators to track.",
    },

    { t: "h2", text: "What lifelong learning means, according to UNESCO" },
    {
      t: "quote",
      text: "Rooted in the integration of learning and living.",
      cite: "UNESCO Institute for Lifelong Learning",
      href: UIL,
    },
    {
      t: "p",
      html: `The UNESCO Institute for Lifelong Learning (UIL) defines lifelong learning as covering people of all ages, in every life-wide context (family, school, community, workplace) and across formal, non-formal and informal modalities. The definition, published in the ${a(UIL, "UNESCO-UNEVOC TVETipedia glossary")}, lists five elements: all age groups, all levels of education, all learning modalities, all learning spheres and spaces, and a variety of purposes.`,
    },
    {
      t: "p",
      html: "For a university, the practical consequence is simple. The relationship with a student no longer ends at graduation. Alumni come back at 30, 45 and 60, often sent and paid for by their employer, and the institution needs something to offer them each time.",
    },
    {
      t: "p",
      html: "The same idea shows up in policies on recognition of prior learning, which let an institution assess and credit what someone learned at work or on their own. That is the bridge between what adults already know and what a continuing education unit can certify.",
    },

    { t: "h2", text: "Why universities are reorganizing continuing education around lifelong learning" },
    {
      t: "p",
      html: `The pressure comes from the labor market. The World Economic Forum's ${a(WEF, "Future of Jobs Report 2025")}, based on more than 1,000 employers in 55 economies, expects 39% of a worker's core skills to change or become outdated between 2025 and 2030. Employers also name skills gaps as the top barrier to transforming their business.`,
    },
    {
      t: "stats",
      items: [
        { value: "39%", label: "of workers' core skills are expected to change between 2025 and 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "59 of 100", label: "workers worldwide will need training by 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "85%", label: "of employers plan to prioritize upskilling their workforce", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "81%", label: "of higher education leaders surveyed say integrating micro-credentials speeds up curriculum updates", source: "Coursera, Micro-Credentials Impact Report 2026, p. 10", href: COURSERA },
      ],
    },
    {
      t: "p",
      html: `On the academic side, the ${a(QS, "QS World Future Skills Index 2027")} warns that demand for human, digital, green and AI skills is moving faster than higher education's response, and calls for more employer investment in workforce development and lifelong learning. Running continuing education as a side business of the university no longer matches that demand.`,
    },
    {
      t: "p",
      html: `A note on the 81%: the ${a(COURSERA, "Coursera study")} surveyed students, employers and higher education leaders in seven countries, including the US, and Coursera sells micro-credentials. These are stated perceptions from respondents, without measured outcomes.`,
    },

    { t: "h2", text: "Continuing education vs. lifelong learning strategy: what changes" },
    {
      t: "p",
      html: "Continuing education is the unit most universities already have. A lifelong learning strategy is the way that unit organizes its offer so learners come back and corporate clients buy more than once. The difference shows up in seven decisions.",
    },
    {
      t: "table",
      head: ["Decision", "Continuing education catalog", "Lifelong learning strategy"],
      rows: [
        ["Unit of offer", "A standalone course or certificate", "A stackable pathway made of micro-credentials with value of their own"],
        ["Design starting point", "The topic a faculty member knows well", "The occupation, the level, and the learning outcomes"],
        ["Customer", "The individual who enrolls", "The individual, the employer that sends them, and the public agency that funds them"],
        ["Alumni relationship", "Ends at the certificate", "Continues at each stage of their career"],
        ["Credential", "A PDF certificate", "A verifiable credential with criteria and evidence"],
        ["Measurement", "Enrollments and a satisfaction survey", "Enrollment to report: completion, evidence, transfer and repeat purchases"],
        ["Production", "Every program is built from scratch", "Modular pieces reused for new audiences"],
      ],
      caption: "Seven decisions that separate a course catalog from a lifelong learning strategy.",
    },

    { t: "h2", text: "How a continuing education unit organizes its offer" },
    {
      t: "p",
      html: "A lifelong learning offer has three lines that share design standards, a platform and credentials: stackable pathways for individuals, custom training for corporate clients, and programs for alumni.",
    },
    { t: "h3", text: "Stackable pathways and micro-credentials" },
    {
      t: "p",
      html: `A micro-credential is a record of a focused learning achievement, assessed against clear standards and issued by a trusted provider. It has value on its own and can stack toward other credentials or a degree. That is the definition a panel of experts convened by ${a(UNESCO_MC, "UNESCO")} proposed in 2022. It is a consensus proposal, not an official UNESCO position.`,
    },
    {
      t: "p",
      html: `Stacking is what turns courses into a pathway. The ${a(OECD, "OECD (2023)")} describes Switzerland, where an adult can build a Certificate of Advanced Studies (10+ ECTS credits) toward a Diploma (30+) and then a Master of Advanced Studies (60+). Studies compiled by the OECD also show the payoff of finishing the stack: in Singapore, people who completed a full qualification saw a 5.8% real wage gain, compared with 0.8% for those who certified only individual modules.`,
    },
    {
      t: "p",
      html: "The OECD adds a warning US institutions should hear. In studies from California and North Carolina, the earnings return on short certificates flattened or dropped to zero seven to nine years later, while associate degrees held their value longer. The same review notes that combining short credentials with longer qualifications, especially bachelor's degrees, is associated with substantial economic benefits. Design for the full stack from day one.",
    },
    { t: "p", html: "A stackable pathway takes five design steps:" },
    {
      t: "ol",
      items: [
        "Pick the occupation and the level. Start from what the person does at work, then place the complexity on the qualifications framework or industry standard your employers recognize.",
        "Write the learning outcomes and the evidence for each one: a project, a solved case, a simulation.",
        "Cut the pathway into micro-credentials that make sense on their own, for the learner and for their employer.",
        "Agree on the stacking rules with the registrar: which piece counts toward which program, for how many credits, and under which policy.",
        "Define the verifiable credential for each piece and for the full pathway.",
      ],
    },
    {
      t: "p",
      html: "In US terms, step four is the noncredit-to-credit bridge. Many continuing education units run noncredit programs that never connect to a degree. Pathway design fixes that before production starts: the registrar and the academic department agree on which noncredit micro-credentials can count toward credit programs, through what assessment, and with what evidence on file. Without that agreement, the learner hits a wall the day they want to keep going.",
    },
    { t: "h3", text: "Custom training for corporate clients: upskilling and reskilling" },
    {
      t: "p",
      html: "The second line sells to employers. They already plan to retrain the people they have: 85% of employers in the WEF survey plan to prioritize upskilling. That work needs someone to design it by role and certify it, and the university brings an academic seal the company cannot produce on its own.",
    },
    {
      t: "p",
      html: "A corporate program starts with a skills gap assessment for the team, gets designed around the competencies of the role, runs in cohorts, and ends with a report for HR that shows progress, approved evidence and observable behaviors on the job. The same micro-credentials in the open catalog can be packaged into closed pathways for each corporate client. Ask the employer for one business metric up front, such as time to productivity for new hires or error rates, so the final report shows more than completion.",
    },
    { t: "h3", text: "Programs for alumni" },
    {
      t: "p",
      html: "The third line takes the least sales effort and gets the least attention. Alumni already trust the institution. A cohort-based update program, with credit for what they already completed and a path back to a graduate degree, turns the alumni base into recurring enrollment.",
    },

    { t: "h2", text: "The operating model: design, production, LMS, credentials and measurement" },
    {
      t: "p",
      html: "Lifelong learning strategies tend to break down in operations. A stackable pathway needs five capabilities that few continuing education units have fully in house.",
    },
    {
      t: "table",
      head: ["Capability", "What it includes", "What happens without it"],
      rows: [
        ["Competency-based design", "Learning outcomes, evidence, rubrics and stacking rules", "Courses that add up to nothing and that the registrar cannot recognize"],
        ["Production and online course development", "Scripts, video, interactive activities and modular pieces", "Every new program is built from scratch and takes months"],
        ["LMS operations", "Enrollment, cohorts, communications, learner support and follow-up", "Early dropout nobody sees in time"],
        ["Verifiable credentials", "Issuance in Open Badges 3.0 or W3C Verifiable Credentials, with criteria and evidence", "A PDF nobody can check"],
        ["Measurement", "Kirkpatrick levels 1 to 4 and reports by cohort and by corporate client", "A unit that cannot defend its budget to leadership"],
      ],
      caption: "The five capabilities a continuing education unit needs to run stackable pathways.",
    },
    {
      t: "p",
      html: `At merahki.ai we run those five layers for continuing education units: we design by competencies, build courses online with an AI-native team, operate the LMS, issue verifiable credentials with our partner POK, and measure with Kirkpatrick. See our ${a("/lifelong-learning", "lifelong learning service for universities")} and our ${a("/methodology", "competency-based design methodology")}.`,
    },
    {
      t: "callout",
      title: "The real decision",
      html: "The question for university leadership is which capabilities to build in house and which to run with a partner. Academic judgment and employer relationships usually stay inside. Production, LMS operations and credential issuance can be delegated without losing control, as long as the partner delivers data and reports every week.",
    },

    { t: "h2", text: "Which indicators continuing education should track, from enrollment to report" },
    {
      t: "p",
      html: `Tracking only enrollments and satisfaction leaves the unit blind. According to the ${a(OECD, "OECD")}, fully online courses on MOOC platforms have completion rates between 3% and 15%. Without progress indicators, nobody knows which week a cohort starts to drop, or why.`,
    },
    {
      t: "table",
      head: ["Stage", "Indicator", "Question it answers"],
      rows: [
        ["Enrollment", "Lead-to-enrollment conversion and share of enrollment paid by employers", "Does the offer find buyers?"],
        ["Progress", "First-week activation and completion by cohort", "Where do people drop off?"],
        ["Learning", "Approved evidence and achievement of each learning outcome (Kirkpatrick 2)", "Did they learn what the pathway promises?"],
        ["Credential", "Credentials issued, shared and verified by third parties", "Does the credential travel, and does anyone check it?"],
        ["Transfer", "Observable behaviors on the job (Kirkpatrick 3)", "Do they apply it at work?"],
        ["Results", "Repeat corporate purchases, returning alumni and the client's business metric (Kirkpatrick 4)", "Do they buy again?"],
      ],
      caption: "Continuing education indicators, from enrollment to report.",
    },
    {
      t: "p",
      html: `We group these indicators into four families that matter to whoever pays: productivity, retention, cost and experience. A continuing education director who reports this way speaks the same language as the HR teams at their corporate clients. And when each ${a("/certification", "certification is backed by evidence")}, every credential adds a data point: who shared it and who verified it.`,
    },
    {
      t: "p",
      html: "Employers are still cautious about short credentials. In a study of 600 US employers cited by the OECD, 72% said a bachelor's degree is an unreliable signal of skills, yet 52% still saw graduates of degree programs as the less risky hire. Verifiable evidence is how a continuing education credential closes that gap.",
    },
    {
      t: "cta",
      html: "If your continuing education unit wants to launch its first stackable pathway or a program for corporate clients, merahki.ai designs, builds, runs and certifies it with you.",
    },

    { t: "h2", text: "Case study: Universidad de los Andes and Sanofi CHC reused one modular base for two clinical audiences" },
    {
      t: "p",
      html: "In 2022, the School of Medicine at Universidad de los Andes in Colombia had eight weeks to build and launch a certified online program on microbiota, probiotics and prebiotics, with Sanofi CHC as corporate partner and academic endorsement from the Ibero-American Society of Microbiota, Probiotics and Prebiotics. merahki.ai handled instructional design, modular course development, deployment on the university's LMS, automated communications, and weekly reports for the university and Sanofi teams.",
    },
    {
      t: "p",
      html: `The first phase issued more than 95 digital badges to general practitioners and pediatricians in 8 Latin American countries. In the second, the same content base was restructured for a specialized audience, and more than 200 allergists were trained without producing from scratch. That is a lifelong learning strategy at the scale of one program: modular pieces, different pathways for different audiences, and a credential at every exit. Read the full ${a(CASE, "Uniandes × Sanofi CHC case study")}.`,
    },

    { t: "h2", text: "How to start a lifelong learning strategy at your university" },
    {
      t: "ol",
      items: [
        "Inventory the current offer: which courses sell, to whom, and which ones share content.",
        "Pick one or two sectors where the university already has prestige and employer relationships.",
        "Design a pilot pathway with a few micro-credentials, aligned to a recognized framework and backed by performance evidence.",
        "Agree on stacking and credit rules with the registrar before launch.",
        "Define the enrollment-to-report dashboard and who receives it every week.",
        "Sell the pathway to one employer as a closed program, then use that result to open it to the public.",
      ],
    },
    {
      t: "p",
      html: "Order matters. Academic rules first, production second. A pathway produced without stacking rules ends up as one more catalog, with nicer graphics.",
    },
  ],
  faq: [
    {
      q: "What is lifelong learning?",
      a: "Lifelong learning is learning that continues throughout life, at any age, in any setting, and through formal, non-formal and informal routes. The UNESCO Institute for Lifelong Learning describes it as a principle that ties learning to everyday life. For a university, it means serving students and alumni at every stage of their careers.",
    },
    {
      q: "What is a lifelong learning strategy for a university?",
      a: "It is the plan that organizes continuing education into stackable pathways, micro-credentials, programs for corporate clients and offers for alumni, all sharing design standards, a platform and verifiable credentials. It also defines the indicators the unit reports, from enrollment to business results.",
    },
    {
      q: "What is the difference between continuing education and lifelong learning?",
      a: "Continuing education is the unit and its catalog. Lifelong learning is the principle that shapes how the catalog is organized: pathways that stack, credentials that can be verified, an ongoing relationship with alumni, and sales to employers. A unit can have a large catalog and no lifelong learning strategy at all.",
    },
    {
      q: "What are stackable credentials in higher education?",
      a: "Stackable credentials are short credentials that add up to a larger one, such as a certificate that counts toward a diploma and then a master's degree. The OECD cites Switzerland's Certificate, Diploma and Master of Advanced Studies sequence as an example. The institution decides the stacking rules in its academic policy.",
    },
    {
      q: "Which KPIs should a university continuing education unit track?",
      a: "Lead-to-enrollment conversion, first-week activation, completion by cohort, approved evidence, verified credentials, on-the-job transfer and repeat corporate purchases. The four Kirkpatrick levels structure the learning and results part.",
    },
  ],
  sources: [
    { title: "TVETipedia Glossary: Lifelong learning (UNESCO Institute for Lifelong Learning definition)", publisher: "UNESCO-UNEVOC", url: UIL, note: "UIL definition accessed by UNEVOC in September 2023" },
    { title: "Towards a common definition of micro-credentials", publisher: "UNESCO", url: UNESCO_MC, date: "2022" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "January 2025" },
    { title: "QS World Future Skills Index 2027", publisher: "QS Quacquarelli Symonds", url: QS, date: "June 2026" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities (Education Policy Perspectives No. 66)", publisher: "OECD", url: OECD, date: "2023" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Survey in seven countries" },
    { title: "Uniandes × Sanofi CHC case study", publisher: "merahki.ai", url: "https://merahki.ai/case-studies/uniandes-sanofi-microbiota", date: "2022" },
  ],
  related: [
    "micro-credentials-what-they-are-how-to-design",
    "upskilling-reskilling-programs-companies",
    "kirkpatrick-model-training-impact",
    "verifiable-digital-credentials-education",
    "skills-employers-want-2026",
  ],
};
