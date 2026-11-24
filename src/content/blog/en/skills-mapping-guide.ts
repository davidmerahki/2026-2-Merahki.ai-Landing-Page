import type { Articulo } from "../types";

const INTELLUM_GAP = "https://www.intellum.com/resources/blog/how-to-conduct-a-skills-gap-analysis";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const ONET_HOME = "https://www.onetonline.org/";
const ONET_SALES = "https://www.onetonline.org/link/summary/41-4012.00";
const DANE_CUOC = "https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-unica-de-ocupaciones-para-colombia-cuoc";
const POK_GRAPHS = "https://www.pok.tech/en/products/skills-graphs-curriculum-skills-mapping";
const POK_INTELLIGENCE = "https://www.pok.tech/en/products/skills-intelligence-workforce-skills-gap";

export const articulo: Articulo = {
  slug: "skills-mapping-guide",
  lang: "en",
  altSlug: "mapa-de-habilidades-empresa",
  title: "Skills mapping: what a skills map is and how companies and universities build one to decide who to train, in what, and in what order",
  seoTitle: "Skills mapping guide: how to build a skills map by role",
  description: "A skills map shows which skills each role requires and where your team stands today. How to build one in five steps and use it to close the skills gap.",
  kicker: "Skills and gaps",
  keywords: [
    "skills mapping",
    "skills map",
    "skills gap analysis",
    "skills matrix",
    "how to create a skills map",
    "skills map example",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `A skills map lists, for each role, the skills it requires, the target proficiency level, and where the team stands today. The difference is the skills gap.`,
    `You build it in five steps: start from strategy, anchor each role to an occupational reference, set the target level, measure the current level, and prioritize the gaps.`,
    `In the US, O*NET is the public reference for the tasks and skills of each occupation. In Colombia, the equivalent is the DANE's CUOC.`,
    `Each priority gap turns into a competency, a learning path, and a verifiable credential. POK Skills Graphs and Skills Intelligence feed those credentials back into the map as skills data.`,
  ],
  body: [
    {
      t: "p",
      html: `A <strong>skills map</strong> is an inventory of the skills each role in an organization requires, with the target proficiency level and the level the people in that role have today. The distance between the two is the skills gap, and it tells you who to train, in what, and in what order.`,
    },
    {
      t: "p",
      html: `This guide adapts a post by Carla Yudhishthu, Chief People Officer at Intellum, on <a href="${INTELLUM_GAP}">how to conduct a skills gap analysis</a> (January 2026). The hardest step for most companies is deciding what to measure the gap against. Public occupational databases help with that, and we use them at merahki.ai so a skills map doesn't start from a blank spreadsheet.`,
    },
    {
      t: "stats",
      items: [
        { value: "39%", label: "of the average worker's core skills are expected to change or become outdated between 2025 and 2030", source: "World Economic Forum, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "63%", label: "of employers see skills gaps as the biggest barrier to transforming their business", source: "World Economic Forum, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "85%", label: "of employers plan to prioritize upskilling their workforce", source: "World Economic Forum, Future of Jobs Report 2025, p. 6", href: WEF },
      ],
    },
    { t: "h2", text: "What is a skills map and what is it for?" },
    {
      t: "p",
      html: `A skills map answers three questions a training budget needs before it approves any course. Which skills does the strategy require in each role? Which ones are missing, and in how many people? Which of those gaps holds back a business result the most? Without a map, training gets bought off a catalog, and any measurement afterward has nothing to compare against.`,
    },
    {
      t: "p",
      html: `Intellum makes the point that a skills gap analysis has to be an ongoing practice. The WEF numbers explain why: if close to four in ten skills change within five years, a map that never gets updated goes stale before the first learning path ends.`,
    },
    { t: "h2", text: "Skills map vs. skills matrix vs. skills gap analysis" },
    {
      t: "p",
      html: `People use the three terms interchangeably, but they are three different pieces of the same work:`,
    },
    {
      t: "table",
      head: ["Piece", "What it shows", "Unit", "What you use it for"],
      rows: [
        ["Skills map", "The skills each role requires and the target level", "Role", "Setting the standard for each job"],
        ["Skills matrix", "Each person's current level in each skill", "Person × skill", "Seeing where the team is today"],
        ["Skills gap analysis", "The prioritized difference between required and current", "Role or team", "Deciding who to train, in what, and in what order"],
      ],
    },
    { t: "h2", text: "What to measure the gap against: occupational references" },
    {
      t: "p",
      html: `In the US, <a href="${ONET_HOME}">O*NET OnLine</a> publishes a profile for each occupation with its tasks, skills, knowledge, and work activities. It gives you a shared vocabulary and a reference anyone can check. In Colombia, where most of our programs run, the equivalent is the <a href="${DANE_CUOC}">CUOC</a>, the national occupational classification maintained by the DANE, which organizes 682 occupations with their functions, knowledge, and skills.`,
    },
    {
      t: "callout",
      title: "An occupational profile describes the job, not the person",
      html: `The profile is where the map starts. Each company adjusts the tasks to its context, adds the skills specific to its product or culture, and decides the level it needs. What you gain from O*NET or the CUOC is common language and a reference a third party can verify.`,
    },
    { t: "h2", text: "How to create a skills map in five steps" },
    {
      t: "p",
      html: `Intellum's four steps (align with strategy, take inventory of talent, map gaps to business outcomes, and build scalable learning) become five once you add the occupational reference:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Start from strategy.</strong> Write down the business results for the next 12 to 18 months and keep only the roles that drive them. Intellum recommends small, focused analyses over one big company-wide exercise.",
        "<strong>Anchor each role to an occupational profile.</strong> Find the matching occupation, take its tasks and skills, and adjust them to what the person actually does at your company.",
        "<strong>Set the target level.</strong> For each skill, define the level with a short scale and observable behaviors. For example: 1 does it with help, 2 does it with supervision, 3 does it independently, 4 teaches others.",
        "<strong>Measure the current level.</strong> Combine self-assessment, manager ratings, and evidence: assessments, performance data, and credentials the person already holds. Self-assessment alone depends on how well each person knows their own work.",
        "<strong>Prioritize and validate.</strong> Rank gaps by their effect on the business result and by how many people they affect. Validate the list with managers before you design any training.",
      ],
    },
    { t: "h2", text: "Skills map example: a B2B sales representative" },
    {
      t: "p",
      html: `O*NET's profile for <a href="${ONET_SALES}">Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products (41-4012.00)</a> lists tasks such as recommending products based on customer needs, quoting prices, credit terms, and delivery dates, consulting with clients after the sale to resolve problems, and identifying prospective customers. Among its essential skills are active listening, speaking, and critical thinking.`,
    },
    {
      t: "table",
      head: ["Skill for the role", "O*NET task it comes from", "Related skills", "Target level", "Evidence"],
      rows: [
        ["Diagnoses customer needs and recommends a solution", "Recommend products to customers based on their needs and interests", "Active listening, critical thinking", "3", "Recorded discovery role-play scored with a rubric"],
        ["Builds a quote with clear terms", "Estimate or quote prices, credit or contract terms, warranties, and delivery dates", "Critical thinking, writing", "3", "Real quote reviewed by the manager"],
        ["Resolves post-sale problems", "Consult with clients after sales to resolve problems and provide ongoing support", "Active listening, speaking", "3", "Case documented from start to finish"],
        ["Opens new accounts", "Identify prospective customers through directories, referrals, and trade shows", "Speaking", "2", "Account plan and CRM record"],
      ],
      caption: "Tasks and skills from O*NET 41-4012.00. Target levels and evidence are a design example, not a standard.",
    },
    {
      t: "p",
      html: `With the map in place, the next step is to assess each rep against that table. If most of the team sits at level 2 in discovery and the result that matters is win rate, that is the first learning path. If the problem is slow pipeline generation, the order changes. The map doesn't make the decision for you, but it forces the decision to rest on data.`,
    },
    { t: "cta" },
    { t: "h2", text: "From skills map to learning paths and credentials" },
    {
      t: "p",
      html: `Each priority gap becomes a competency, the competency becomes learning outcomes with their evidence, and the evidence gets certified with a micro-credential. That is the sequence in our <a href="/methodology">competency-based design methodology</a>, and the map gives it a starting point: design begins from the target level and the current level, and the syllabus comes after.`,
    },
    {
      t: "p",
      html: `The credential closes the loop. In merahki.ai programs, <a href="/certification">certification is issued with POK</a>, and each credential carries its criteria and evidence. POK turns those credentials into skills data. <a href="${POK_GRAPHS}">POK Skills Graphs</a> links courses and credentials to the skills each learning path develops and builds a skills graph for every learner that updates with each new credential. <a href="${POK_INTELLIGENCE}">POK Skills Intelligence</a> starts from the roles and skills a company defines, shows the gap by role and by person, and measures it again after training.`,
    },
    {
      t: "p",
      html: `The split is simple. merahki.ai designs, builds, runs, and measures the program that closes the gap. POK issues the credential and turns it into skills intelligence the company can query later.`,
    },
    { t: "h2", text: "How universities use skills maps to decide which programs to launch" },
    {
      t: "p",
      html: `A continuing education unit can run the same exercise with its regional employers: take the occupations its corporate partners hire for most, check which tasks its current offering covers, and launch programs where there is no coverage. The path can be designed as stackable micro-credentials. That's how we build corporate offerings within <a href="/lifelong-learning">lifelong learning</a> programs for universities.`,
    },
    { t: "h2", text: "How often should you update a skills map?" },
    {
      t: "p",
      html: `There's no official cadence. We recommend reviewing it whenever strategy changes, whenever a new technology changes the tasks of a role, and at least once a year. The team's skills matrix should update after every learning path: once a person finishes the training and earns the credential, their level gets measured again. Intellum suggests treating the template as a living document, and that is what lets you see whether the gap actually closed.`,
    },
  ],
  faq: [
    {
      q: "How do you create a skills map?",
      a: "Start from the results the business needs, pick the roles that drive them, anchor each role to an occupational reference such as O*NET, set the target level for each skill, and measure where the team stands today. The prioritized difference is the gap you train for.",
    },
    {
      q: "What is the difference between a skills map and a skills matrix?",
      a: "The skills map sets the standard for each role: which skills it requires and at what level. The skills matrix shows each person's current level in each skill. Together they make up the skills gap analysis.",
    },
    {
      q: "What is a good skills map example?",
      a: "For a B2B sales rep, the map can cover needs discovery, quoting, post-sale support, and new account development, each with a target level and the evidence that proves it. The table in this article shows that example in full.",
    },
    {
      q: "Where can I find the skills required for a role?",
      a: "In the US, O*NET OnLine lists tasks, skills, and knowledge for each occupation. In Colombia, the DANE's CUOC does the same. Use the profile as a starting point and adjust it to your company.",
    },
    {
      q: "How often should a skills map be updated?",
      a: "Whenever strategy or the technology of a role changes, and at least once a year. Each person's level should be measured again after every learning path.",
    },
  ],
  sources: [
    { title: "How to Conduct a Skills Gap Analysis", publisher: "Intellum (Carla Yudhishthu)", url: INTELLUM_GAP, date: "2026-01-30" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 6" },
    { title: "O*NET OnLine", publisher: "U.S. Department of Labor, ETA", url: ONET_HOME },
    { title: "41-4012.00 Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products", publisher: "O*NET OnLine", url: ONET_SALES },
    { title: "Clasificación Única de Ocupaciones para Colombia (CUOC)", publisher: "DANE", url: DANE_CUOC, note: "Accessed November 24, 2026" },
    { title: "POK Skills Graphs", publisher: "POK", url: POK_GRAPHS },
    { title: "POK Skills Intelligence", publisher: "POK", url: POK_INTELLIGENCE },
  ],
  adaptedFrom: {
    title: "How to Conduct a Skills Gap Analysis",
    publisher: "Intellum",
    url: INTELLUM_GAP,
    date: "2026-01-30",
  },
  related: [
    "upskilling-reskilling-programs-companies",
    "competency-based-instructional-design",
    "kirkpatrick-model-training-impact",
    "skills-employers-want-2026",
  ],
};
