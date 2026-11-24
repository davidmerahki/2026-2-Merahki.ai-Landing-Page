import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const POK_TALENT = "https://www.pok.tech/blog/es/posts/credenciales-digitales-potencial-talento-pok";
const ONET = "https://www.onetonline.org/";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/";

export const articulo: Articulo = {
  slug: "corporate-university-how-to-build",
  lang: "en",
  altSlug: "universidad-corporativa-como-crearla",
  title: "Corporate university: what it is and how a company builds one in five phases, from skills mapping to impact measurement",
  seoTitle: "Corporate university: what it is and how to build one",
  description: "What a corporate university (or corporate academy) is, how it differs from a course catalog, and how to build one in five phases with metrics from day one.",
  kicker: "Corporate learning",
  keywords: [
    "corporate university",
    "corporate academy",
    "what is a corporate university",
    "how to build a corporate university",
    "corporate university examples",
    "competency-based corporate training",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "A <strong>corporate university</strong> is a company's learning function that organizes, by role and competency, what its people need to learn to deliver the strategy, then certifies and measures that learning.",
    "It differs from a course catalog or an LMS because it has an executive mandate, governance, role-based learning paths, and business metrics.",
    "You build it in five phases: mandate and governance, skills mapping by role, competency-based learning paths, platform and operations, and measurement.",
    "In the World Economic Forum's 2025 survey, 63% of employers named skills gaps as the biggest barrier to transforming their business, and 85% plan to prioritize upskilling.",
    "The most common mistake is starting by buying the platform. Choose it once the skills map and the paths exist.",
  ],
  body: [
    {
      t: "p",
      html: "A <strong>corporate university</strong> (or corporate academy) is a company's learning function that organizes, by role and competency, what its people need to learn to deliver the strategy. Beyond running courses, it certifies what people learn and measures it with business metrics such as productivity, turnover, or quality.",
    },
    {
      t: "p",
      html: "Companies use <em>corporate university</em> and <em>corporate academy</em> almost interchangeably. Some reserve <em>university</em> for a system with several schools (leadership, sales, technical) and use <em>academy</em> for one function or audience, such as customers or channel partners. What defines both is the job they do inside the company.",
    },
    { t: "h2", text: "Why companies build a corporate university" },
    {
      t: "p",
      html: "The underlying reason is that the skills a company needs change faster than the labor market supplies them. The <a href=\"" + WEF + "\">World Economic Forum's Future of Jobs Report 2025</a>, based on a survey of more than 1,000 employers in 55 economies, puts numbers on it.",
    },
    {
      t: "stats",
      items: [
        { value: "63%", label: "of employers see skills gaps as the biggest barrier to transforming their business", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "39%", label: "of workers' core skills are expected to change or become outdated between 2025 and 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "85%", label: "of employers plan to prioritize upskilling their workforce", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
      ],
    },
    {
      t: "p",
      html: "Almost every company already trains. The problem is how. Courses bought from different vendors, each department with its own budget, PDF certificates nobody verifies, and no data linking training to performance. A corporate university turns that into one system with a clear owner.",
    },
    { t: "h2", text: "Corporate university vs. corporate academy, L&D team, and LMS" },
    {
      t: "table",
      head: ["Concept", "What it is", "What it decides", "What's missing if it stands alone"],
      rows: [
        ["Corporate university", "A learning system with an executive mandate, several schools, and its own governance", "Which capabilities the strategy needs and in what order to build them", "Without measurement, it becomes a large catalog"],
        ["Corporate academy", "A learning program for one function or audience (sales, technical, customers, partners)", "That audience's learning paths and certifications", "Connection to the rest of the company"],
        ["L&D team", "The team that manages the annual training plan and vendors", "Which courses to buy and when", "Role-based paths and outcome measurement"],
        ["LMS", "Software where training is published, taken, and tracked", "How content is delivered and what gets recorded", "Design, content, operations, and judgment"],
      ],
      caption: "A corporate university runs on an LMS and works with L&D, but neither one replaces it.",
    },
    { t: "h2", text: "How to build a corporate university in five phases" },
    {
      t: "p",
      html: "The phases run in order. Each one produces what the next one needs. Skipping one is the most frequent reason academies launch with a big announcement and sit unused six months later.",
    },
    { t: "h3", text: "Phase 1: mandate and governance" },
    {
      t: "p",
      html: "A corporate university starts with a leadership question: which capability is the company missing to deliver its strategy over the next two or three years? That question produces an executive sponsor, an academic council with department leaders, and the ground rules. Who approves a learning path, who pays for it, and how much work time is protected for learning.",
    },
    {
      t: "p",
      html: "Sponsorship matters more than it looks. In <a href=\"" + ELG2026 + "\">Intellum's 2026 survey</a> of 190 education leaders, only 22.2% of programs report executive-level leadership. Without that voice, learning competes with operations for time, and it usually loses.",
    },
    { t: "h3", text: "Phase 2: skills mapping by role" },
    {
      t: "p",
      html: "Pick the roles that move the business most (the ones that sell, produce, or carry risk) and define the competencies each one needs. You don't have to start from scratch. In the US, <a href=\"" + ONET + "\">O*NET</a> describes occupations with their tasks, knowledge, and skills. In Colombia, where merahki works, the official occupational classification (CUOC) plays the same role through <a href=\"" + OCUPACOL + "\">Ocupacol</a>.",
    },
    {
      t: "p",
      html: "With competencies defined, assess where people in each role stand today. The difference between what the role requires and what people can demonstrate is the skills gap, and it decides which paths get built first.",
    },
    { t: "h3", text: "Phase 3: competency-based learning paths" },
    {
      t: "p",
      html: "Each competency on the map becomes learning outcomes, each outcome becomes evidence that proves it, and each piece of evidence becomes the activities that prepare people to produce it. A role-based path is a sequence of stackable micro-credentials. POK, our verifiable credentials partner, explains on its <a href=\"" + POK_TALENT + "\">blog on workforce talent</a> (in Spanish) how stackable credentials by role give HR an objective record of who has mastered what.",
    },
    {
      t: "ul",
      items: [
        "<strong>Example path for new managers.</strong> Performance conversations, delegation and follow-up, reading team metrics.",
        "<strong>Evidence for that path.</strong> A recorded performance conversation with feedback, a delegation plan applied for a month, and a team dashboard reviewed with their own manager.",
        "<strong>What gets certified.</strong> Each micro-credential certifies one competency with its evidence. The full path certifies the role.",
      ],
    },
    { t: "h3", text: "Phase 4: platform, production, and operations" },
    {
      t: "p",
      html: "Most of what the company needs to teach already lives in its experts' heads. Production means getting it out and turning it into online courses, cases, simulations, and live sessions. Internal subject matter experts supply the content, and an instructional design team structures it and builds the courses. According to the same Intellum survey, 83.1% of education teams work with outside vendors or partners.",
    },
    {
      t: "p",
      html: "Operations need a cohort calendar, coaching, reminders, learner support, and an update cycle when processes change. Some paths don't need to be built at all. A partner university's continuing education portfolio can cover them, as long as its learning outcomes match the competencies on your map.",
    },
    { t: "h3", text: "Phase 5: measurement from day one" },
    {
      t: "p",
      html: "Measurement is designed together with the path. The Kirkpatrick model gives four levels, and each one connects to a metric the company already reports.",
    },
    {
      t: "table",
      head: ["Level", "What it measures", "Example in a corporate university"],
      rows: [
        ["1 · Reaction", "Whether the training was useful and relevant", "Survey at the end of each module"],
        ["2 · Learning", "Whether the person has mastered the competency", "Evidence scored with a rubric and a credential issued"],
        ["3 · Behavior", "Whether they apply it on the job", "Manager observation at 30 and 90 days"],
        ["4 · Results", "Whether the business moved", "Time to productivity, turnover, rework, or sales of the trained group vs. an untrained one"],
      ],
    },
    { t: "h2", text: "What a corporate university looks like inside: schools and typical paths" },
    {
      t: "table",
      head: ["School", "Audience", "Example path", "Metric it moves"],
      rows: [
        ["Sales", "Reps and account executives", "Prospecting, sales conversations, CRM use, negotiation, and product", "Time to first deal for new reps"],
        ["Leadership", "New and mid-level managers", "Performance conversations, delegation, reading metrics", "Team turnover and engagement scores"],
        ["Technical or operations", "Plant, service, or field staff", "Critical procedures, safety, and quality", "Incidents, rework, and nonconformities"],
        ["Customers and partners", "Customers and resellers", "Onboarding, advanced use, partner certification", "Adoption, tickets, and channel sales"],
      ],
      caption: "Each school has its own council, its own paths, and a business metric that justifies it.",
    },
    {
      t: "p",
      html: "The customer and partner school is the one companies forget. Training the resellers who sell and implement your product has a direct effect on revenue, and we cover it on our <a href=\"/partner-academies\">partner academies</a> page.",
    },
    { t: "h2", text: "The most common mistake: starting with the platform" },
    {
      t: "p",
      html: "The usual sequence goes like this. The company buys an LMS, uploads the courses it has, launches it with an email from the CEO, and six months later usage is low. The conclusion is that the platform failed. It almost never is the platform. The mandate, the map, and the paths were missing, and people found a catalog with no reason to come in.",
    },
    {
      t: "callout",
      title: "Choose the platform once the skills map and paths exist",
      html: "Phases 1 to 3 tell you what the platform has to do: which formats it delivers, which evidence it collects, what data it sends to your HR system, and which credentials it issues. With that list in hand, choosing an LMS takes a few weeks and holds no surprises.",
    },
    { t: "h2", text: "How merahki helps build a corporate university" },
    {
      t: "p",
      html: "merahki designs, produces, runs, and measures learning programs for corporate clients. For a corporate university, we work with your internal experts across all five phases: the competency map by role, the design of each path with our <a href=\"/methodology\">competency-based design methodology</a>, online course development, operations on the merahki.ai LMS, and Kirkpatrick measurement.",
    },
    {
      t: "p",
      html: "Competencies are certified with verifiable credentials issued with POK that anyone can check and employees can share on LinkedIn. See our <a href=\"/training-certification\">corporate training and certification</a> and <a href=\"/certification\">verifiable credentials</a> pages for the details.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "What is a corporate university?",
      a: "It is a company's learning function that organizes, by role and competency, what its people need to learn to deliver the strategy. It has an executive mandate, role-based paths, certification, and measurement tied to business metrics. Many companies call it a corporate academy.",
    },
    {
      q: "How do you build a corporate university?",
      a: "In five phases: mandate and governance, skills mapping by role, competency-based learning paths, platform and operations, and measurement. Start with one or two paths for the roles that matter most to the business and scale once you have results.",
    },
    {
      q: "What is the difference between a corporate university and an L&D department?",
      a: "The L&D department manages the annual training plan and course vendors. A corporate university decides which capabilities the strategy needs, designs role-based paths, and measures their effect on the business. In many companies, L&D is the team that runs the corporate university.",
    },
    {
      q: "Can a corporate university grant degrees?",
      a: "Degrees are granted by accredited higher education institutions. A corporate university certifies competencies with verifiable credentials. When it needs academic recognition, it partners with a university so certain paths become continuing education programs, or seeks a college credit recommendation, such as ACE's in the US.",
    },
    {
      q: "Does a mid-sized company need a corporate university?",
      a: "It needs the function, even if it doesn't use the name. An academy with two or three paths for critical roles, each with evidence and one metric, already does the job. The system of schools comes as the company grows.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "Survey of more than 1,000 employers in 55 economies, p. 5-6" },
    { title: "The 2026 State of Education-Led Growth Report", publisher: "Intellum Research", url: ELG2026, date: "2026-04", note: "Survey of 190 education leaders, mostly US-based" },
    { title: "Por qué las credenciales digitales son la clave para potenciar el talento en tu empresa", publisher: "POK", url: POK_TALENT, date: "2025-09-10", note: "In Spanish" },
    { title: "O*NET OnLine", publisher: "US Department of Labor, Employment and Training Administration", url: ONET },
    { title: "Ocupacol: Catálogo de Ocupaciones para Colombia (CUOC)", publisher: "Colombian Ministry of Labor", url: OCUPACOL },
  ],
  related: [
    "upskilling-reskilling-programs-companies",
    "skills-mapping-guide",
    "competency-based-instructional-design",
    "kirkpatrick-model-training-impact",
    "how-to-measure-training-roi",
  ],
};
