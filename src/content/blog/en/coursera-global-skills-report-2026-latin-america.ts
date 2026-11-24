import type { Articulo } from "../types";

const GSR_LATAM_EN = "https://assets.ctfassets.net/2pudprfttvy6/1S3XtxtfqGna6exnMfiRM3/f6d0e5875999d995941ff6ede1690134/Global_Skills_Report_2026_Latin_America_Caribbean.pdf";
const GSR_GLOBAL = "https://assets.ctfassets.net/2pudprfttvy6/3mZxZaJwIW5MA1ZkQHxnzH/9a273e6e888617e1ae22376338438daf/Global_Skills_Report_2026.pdf";
const GSR_LANDING = "https://www.coursera.org/skills-reports/global";
const GSR_2025 = "https://assets.ctfassets.net/2pudprfttvy6/2ROtnxoKY4HO0RlZqIh2q7/f4210ef336812af456c2b5382f34171c/Global_Skills_Report_2025_-_Latin_America_and_the_Caribbean.pdf";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";

export const articulo: Articulo = {
  slug: "coursera-global-skills-report-2026-latin-america",
  lang: "en",
  altSlug: "coursera-global-skills-report-2026-colombia-america-latina",
  title: "Coursera Global Skills Report 2026: what it says about Latin America, where Colombia ranks, and what universities and employers should do",
  seoTitle: "Coursera Global Skills Report 2026: Latin America",
  description: "Coursera's Global Skills Report 2026 ranks Colombia 4th of 18 in Latin America and 51st of 98 overall. What the index measures and how to use the data.",
  kicker: "Reports and data",
  keywords: [
    "coursera global skills report 2026",
    "global skills report latin america",
    "ai-human skills synergy index",
    "colombia skills ranking",
    "ai skills latin america",
    "ai micro-credentials",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `In the Coursera and Udemy Global Skills Report 2026, only three of 18 Latin American and Caribbean countries (Puerto Rico, Brazil, and Peru) make the top half of the new AI-Human Skills Synergy Index. Colombia ranks <strong>4th in the region</strong> and <strong>51st of 98</strong> overall.`,
    `Regional demand is climbing fast: AI course enrollments rose 68% and AI micro-credential enrollments 115% year over year.`,
    `In Colombia, AI micro-credential enrollments grew 95%, while critical thinking grew just 2% and complex problem-solving fell 2%.`,
    `The 2026 ranks can't be compared with 2025, which used a different index, country set, and weighting.`,
  ],
  body: [
    {
      t: "p",
      html: `The <strong>Coursera Global Skills Report 2026</strong> ranks 98 countries on a new AI-Human Skills Synergy Index, which measures how well learners on the platform build AI skills together with human skills like critical thinking, adjusted for each government's AI readiness. In Latin America and the Caribbean, only Puerto Rico, Brazil, and Peru make the top half. <strong>Colombia ranks 4th of 18 in the region and 51st of 98 overall.</strong>`,
    },
    {
      t: "p",
      html: `This article summarizes the report's <a href="${GSR_LATAM_EN}">Latin America and the Caribbean snapshot</a> (October 2026) and the <a href="${GSR_GLOBAL}">global report</a> (September 2026), with the page for each figure. The data is Coursera's and Udemy's. The read on what universities and employers should do is ours at merahki.ai, a Colombian company that designs and runs competency-based training programs in the region.`,
    },
    {
      t: "stats",
      items: [
        { value: "3 of 18", label: "Latin American and Caribbean countries in the top half of the index", source: "Coursera and Udemy, GSR 2026, LatAm snapshot, p. 10", href: GSR_LATAM_EN },
        { value: "+115%", label: "growth in AI micro-credential enrollments across the region", source: "Coursera and Udemy, GSR 2026, LatAm snapshot, p. 10", href: GSR_LATAM_EN },
        { value: "51 of 98", label: "Colombia's rank, 4th in the region", source: "Coursera and Udemy, GSR 2026, LatAm snapshot, p. 12", href: GSR_LATAM_EN },
        { value: "+2%", label: "growth in critical thinking enrollments in Colombia (region: +32%)", source: "Coursera and Udemy, GSR 2026, LatAm snapshot, p. 20", href: GSR_LATAM_EN },
      ],
    },
    { t: "h2", text: "What the Global Skills Report 2026 measures" },
    {
      t: "p",
      html: `This is the report's eighth edition and the first to combine Coursera and Udemy data as the two companies come together. It draws on more than 300 million registered learners and compares April 2025 through March 2026 with the prior year (LatAm snapshot, p. 3 and 32).`,
    },
    {
      t: "p",
      html: `The AI-Human Skills Synergy Index weights Coursera learning behavior at 60%: skill proficiency, the share of learners building AI and human skills together, and the breadth of skills with meaningful uptake. The other 40% comes from Oxford Insights' Government AI Readiness Index 2025 (p. 32).`,
    },
    {
      t: "callout",
      title: "What the index doesn't tell you",
      html: `The index doesn't measure the skills of a country's whole workforce. It blends signals from people learning on one platform with a government readiness score. "Colombia ranks 51st of 98 on Coursera's synergy index" is accurate. "Colombia is the 51st most skilled country" is not.`,
    },
    { t: "h2", text: "How Latin American countries rank" },
    {
      t: "p",
      html: `Nine of the region's 18 measured economies fall in the bottom quartile (p. 10). The report calls ranks 51 to 75 "emerging," and Colombia sits at the top of that tier.`,
    },
    {
      t: "table",
      head: ["Country", "Regional rank", "Global rank"],
      rows: [
        ["Puerto Rico", "1", "23"],
        ["Brazil", "2", "45"],
        ["Peru", "3", "49"],
        ["<strong>Colombia</strong>", "<strong>4</strong>", "<strong>51</strong>"],
        ["Uruguay", "5", "54"],
        ["Chile", "6", "59"],
        ["Costa Rica", "7", "62"],
        ["Argentina", "8", "68"],
        ["Ecuador", "9", "74"],
        ["Mexico", "14", "88"],
      ],
      caption: "Source: Coursera and Udemy, Global Skills Report 2026, Latin America and the Caribbean snapshot, p. 12. The full table lists 18 countries.",
    },
    {
      t: "p",
      html: `For Mexico, the snapshot cites Coursera's Micro-Credentials Impact Report 2026: 85% of employers there widely use skills-based hiring for entry-level roles, and 92% say entry-level hires with micro-credentials perform better in their first year (p. 23).`,
    },
    { t: "h2", text: "Colombia: AI enrollments grow while human skills stall" },
    {
      t: "p",
      html: `The report says Colombia's position rests more on its Coursera learner signal, which sits above the global midpoint, than on its government readiness score, which sits below it (p. 20). Learners are carrying the ranking. Here is how Colombian enrollment growth compares with the region:`,
    },
    {
      t: "table",
      head: ["Enrollments (year-over-year growth)", "Colombia", "Latin America and the Caribbean"],
      rows: [
        ["All AI courses", "+53%", "+68%"],
        ["AI micro-credentials", "+95%", "+115%"],
        ["AI security", "+409%", "+248%"],
        ["Generative AI", "+72%", "+122%"],
        ["Agentic workflows", "+37%", "+154%"],
        ["Innovation", "+50%", "+57%"],
        ["Critical thinking", "+2%", "+32%"],
        ["Complex problem-solving", "−2%", "+19%"],
      ],
      caption: "Source: Coursera and Udemy, GSR 2026, LatAm snapshot, p. 12 and 20.",
    },
    {
      t: "p",
      html: `The last two rows matter most to anyone designing training. AI skills are up across the board, and the human skills people need to use AI well are barely moving. The report frames Colombia's strong interest in AI security as an opening to widen access to the human skills that responsible use requires (p. 20).`,
    },
    {
      t: "p",
      html: `Trending AI topics in Colombia include prompting, generative AI, model- and assistant-specific skills, and AI foundations. Trending human skills include stakeholder alignment, emotional intelligence, people leadership, communication, and cross-functional collaboration (p. 21). The report is clear that these reflect learner interest, not labor market demand.`,
    },
    { t: "h2", text: "The regional picture: strong interest, uneven readiness" },
    {
      t: "p",
      html: `Across the region, AI micro-credential enrollments grew 115%, close to the 122% global rate (p. 10). Globally, enrollments in micro-credentials of every kind grew 33% (global report, p. 31). The snapshot's diagnosis is that interest is high and readiness is uneven: access to advanced training, digital infrastructure, investment, and policy execution vary widely from country to country (p. 30). It also cites ECLAC's Latin American AI Index 2025, which found that 13 of the 19 countries studied still offer no AI subjects in basic education (p. 3).`,
    },
    { t: "h2", text: "Why you can't compare 2026 ranks with 2025" },
    {
      t: "p",
      html: `In the <a href="${GSR_2025}">2025 regional edition</a>, Colombia ranked 85th of 109 countries and 17th of 20 in the region. That ranking measured something else: learner proficiency in business, technology, and data science, weighted 25% on Coursera data and 75% on third-party indicators such as the Global Innovation Index and GDP per capita (2025 edition, p. 10 and 22).`,
    },
    {
      t: "p",
      html: `Moving from 85th to 51st doesn't mean Colombia climbed 34 spots. The index, the country list, and the weights all changed. Any headline that compares the two ranks is comparing two different measurements.`,
    },
    { t: "cta" },
    { t: "h2", text: "What universities should take from the report" },
    {
      t: "p",
      html: `The report asks higher education to bring AI in earlier, expand advanced training paths, and tie curricula, applied learning, and assessment more closely to labor market needs (p. 30). For a continuing education unit, that becomes three design decisions:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Design in pairs: one AI skill with one human skill.</strong> The report lists the pairs Colombian learners build together more often than the global average, such as LLM application with emotional intelligence, with people leadership, or with complex problem-solving (p. 22). An AI program that never assesses judgment leaves out the very skills that are growing least.",
        "<strong>Certify with evidence of performance.</strong> Coursera names four traits of a valuable micro-credential: a clear purpose tied to a role, a trusted issuer, current standards, and visible outcomes (global report, p. 32). All four get decided in program design.",
        "<strong>Align to a qualifications framework and make it stackable.</strong> In Colombia that framework is the national MNC. A stackable path with learning outcomes mapped to it can be updated module by module without rebuilding a whole degree.",
      ],
    },
    {
      t: "p",
      html: `The global report cites Coursera's 2026 micro-credentials survey: 81% of higher education leaders say embedding micro-credentials speeds up curriculum updates (global report, p. 32). That is how we design stackable paths in our <a href="/lifelong-learning">lifelong learning</a> work, with <a href="/certification">verifiable certification issued through POK</a>.`,
    },
    { t: "h2", text: "What employers with teams in Latin America should do" },
    {
      t: "p",
      html: `For employers, the report recommends identifying where AI is changing roles and workflows, giving people room to practice, and evaluating training in the context of real work (p. 30). In the global report, 62% of surveyed employers report a significant productivity boost from role-based learning delivered through micro-credentials (global report, p. 29). The World Economic Forum points the same way: 65% of companies surveyed in Colombia see skills gaps as a key barrier to transforming their business (<a href="${WEF}">Future of Jobs Report 2025</a>, p. 76).`,
    },
    {
      t: "p",
      html: `In practice that means three things. A <a href="/blog/skills-mapping-guide">skills map by role</a>, so you know where the work is changing and what's missing. Learning paths that teach the tool and the judgment to use it, built on your own business cases. And measurement past satisfaction scores: if an AI course didn't change a task by day 30 or a metric by day 90, it didn't do its job. That is the standard we hold our <a href="/training-certification">employee training and certification programs</a> to.`,
    },
  ],
  faq: [
    {
      q: "Where does Colombia rank in the Coursera Global Skills Report 2026?",
      a: "Colombia ranks 51st of 98 countries on Coursera and Udemy's AI-Human Skills Synergy Index, and 4th of 18 in Latin America and the Caribbean, behind Puerto Rico, Brazil, and Peru.",
    },
    {
      q: "What is the AI-Human Skills Synergy Index?",
      a: "It measures how much Coursera learners build AI and human skills together (60% of the score) and combines that with Oxford Insights' Government AI Readiness Index (40%). It does not measure the skills of a country's entire population.",
    },
    {
      q: "Which Latin American countries are in the top half of the index?",
      a: "Only three: Puerto Rico (23rd), Brazil (45th), and Peru (49th). Nine of the 18 measured economies in the region fall in the bottom quartile.",
    },
    {
      q: "Why did Colombia rank 85th in 2025 and 51st in 2026?",
      a: "Because the two editions use different indexes. The 2025 ranking measured proficiency in business, technology, and data science across 109 countries, with 75% third-party indicators. The 2026 edition uses the new synergy index across 98 countries, so the ranks aren't comparable.",
    },
    {
      q: "Where can I download the Global Skills Report 2026?",
      a: "On Coursera's skills reports page (coursera.org/skills-reports/global), which asks you to fill out a form. The Latin America and the Caribbean snapshot is available in English and Spanish.",
    },
  ],
  sources: [
    { title: "Global Skills Report 2026: Latin America and the Caribbean", publisher: "Coursera and Udemy", url: GSR_LATAM_EN, date: "2026-10", note: "p. 3, 10, 12, 20, 21, 22, 23, 30, and 32" },
    { title: "Global Skills Report 2026: The AI-Human Skills Advantage", publisher: "Coursera and Udemy", url: GSR_GLOBAL, date: "2026-09", note: "p. 29, 31, and 32" },
    { title: "Global Skills Report 2026 (report page)", publisher: "Coursera", url: GSR_LANDING },
    { title: "Global Skills Report 2025: Latin America and the Caribbean", publisher: "Coursera", url: GSR_2025, date: "2025-05", note: "Previous edition, different index. p. 10 and 22" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 76" },
  ],
  adaptedFrom: {
    title: "Global Skills Report 2026: Latin America and the Caribbean",
    publisher: "Coursera and Udemy",
    url: GSR_LATAM_EN,
    date: "2026-10",
  },
  related: [
    "skills-employers-want-2026",
    "coursera-micro-credentials-impact-report-2026",
    "skills-mapping-guide",
    "micro-credentials-what-they-are-how-to-design",
  ],
};
