import type { Articulo } from "../types";

const ACADEMY = "https://www.intellum.com/resources/blog/customer-academy";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const FORRESTER = "https://www.intellum.com/resources/2024-customer-education-forrester-report";

export const articulo: Articulo = {
  slug: "customer-education-program-guide",
  lang: "en",
  altSlug: "customer-education-formacion-de-clientes",
  title: "Customer education: what it is, how a B2B company designs a program, and which metrics tie it to adoption and renewal",
  seoTitle: "Customer education program: what it is and how to build one",
  description: "What customer education is, which programs it includes (onboarding, customer academy, certification), and which metrics tie customer training to renewal.",
  kicker: "Customer education",
  keywords: [
    "customer education",
    "customer education program",
    "customer academy",
    "customer training",
    "what is customer education",
    "customer education metrics",
    "customer education specialist",
  ],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    "<strong>Customer education</strong> is the training a company gives its customers so they use the product, reach their goal with it, and renew.",
    "It differs from support. Support fixes a problem once it shows up. Customer education teaches customers to get value so fewer problems show up.",
    "The most common programs are educational onboarding, a customer academy, customer certification, and partner training.",
    "It is measured with product adoption, support tickets, renewal, and NRR. In Forrester's 2024 study for Intellum, adoption of the products customers were trained on rose 38.3% on average.",
    "Start with one learning path tied to a metric you can already measure, then scale to a full academy once you have the data.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Customer education</strong> is the set of programs a company uses to teach its customers how to use its product or service and get the outcome they paid for. The goal is a business goal: customers who adopt more, open fewer support tickets, and renew.",
    },
    {
      t: "p",
      html: "This guide covers what a customer education program includes, how it differs from support and onboarding, which metrics connect it to revenue, and how a B2B company designs one. The customer academy section adapts Intellum's article <a href=\"" + ACADEMY + "\"><em>What Is a Customer Academy?</em></a> (2026) and adds merahki's approach: competency-based design, course development, program operations, and measurement.",
    },
    { t: "h2", text: "What customer education is, and what it isn't" },
    {
      t: "p",
      html: "Customer education is defined by what it does across the customer lifecycle. Format is secondary. A webinar, a course, an in-app guide, or a certification exam are all possible outputs. The job is to move three things: how much the customer uses the product, how much it costs you to serve them, and whether they stay.",
    },
    {
      t: "p",
      html: "A help center full of videos, with no design and no measurement, leaves customers searching on their own. If nobody defined what they should be able to do, in what order, and how you check it, customers learn in fragments and go back to opening tickets. What turns that material into a program is designed learning paths and a measured effect.",
    },
    {
      t: "p",
      html: "Intellum, which champions the <em>Education-Led Growth</em> approach, puts customer training alongside employee and partner training as a revenue driver. In its <a href=\"" + ELG2026 + "\">2026 survey of 190 education leaders</a>, mostly in the US, 81.6% named revenue growth as the main objective of their program.",
    },
    { t: "h2", text: "Customer education vs. support, onboarding, and customer success" },
    {
      t: "p",
      html: "These functions overlap, but each answers a different question. Mixing them up leads to asking support to train customers or asking an academy to put out fires.",
    },
    {
      t: "table",
      head: ["Function", "What it solves", "When it acts", "How it's measured"],
      rows: [
        ["Support", "A specific problem the customer reports", "When the customer asks", "Response time and resolved tickets"],
        ["Customer success", "Account health, outcomes, and renewal for each customer", "Throughout the contract", "Health score, renewal, and expansion"],
        ["Onboarding", "Getting started: setup and the first result", "The first weeks", "Time to first value and activation"],
        ["Customer education", "Customers who know how to use the product to reach their goal, and keep reaching it", "Before purchase, at kickoff, and at every renewal", "Adoption, deflected tickets, renewal, and NRR"],
      ],
      caption: "Customer education includes educational onboarding and takes load off support and customer success, but it has its own metrics.",
    },
    {
      t: "p",
      html: "Onboarding is the first and most urgent customer education path. Training continues after that: when the product ships a new feature, when the customer's users change, or when the account wants to do something more advanced.",
    },
    { t: "h2", text: "Types of customer education programs" },
    {
      t: "ul",
      items: [
        "<strong>Educational onboarding.</strong> A short path that gets a new customer to their first result with the product. It pays back fastest.",
        "<strong>Customer academy.</strong> An organized set of learning paths by persona (admin, end user, the manager who reads the reports) that supports the whole customer lifecycle.",
        "<strong>Customer certification.</strong> An assessment that confirms a user has mastered the product. Customers use it to show their skills. You use it to find your power users.",
        "<strong>Partner training.</strong> Learning paths for resellers, integrators, and partners who sell or implement the product. It has its own tiers and certification logic, covered on our <a href=\"/partner-academies\">partner academies</a> page.",
        "<strong>Prospect education.</strong> Educational content for buyers who are still evaluating. It attracts and qualifies buyers who understand the problem your product solves.",
      ],
    },
    {
      t: "stats",
      items: [
        { value: "63.1%", label: "of surveyed education teams train customers", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "46.8%", label: "train partners", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "43.1%", label: "train prospects who haven't bought yet", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
      ],
    },
    {
      t: "p",
      html: "Most teams start with employees (87.4% in the same survey) and then extend training to customers, partners, and prospects. Keep in mind this is a learning software vendor surveying its own market. Read it as a signal of where the practice is heading.",
    },
    { t: "h2", text: "What a customer academy is" },
    {
      t: "p",
      html: "A customer academy is the structured program that sequences training across the entire customer journey, from first awareness to offboarding. That is how Shannon Howard describes it on <a href=\"" + ACADEMY + "\">Intellum's blog</a>, using a helpful comparison: courses and content supply the power, and the academy is the engine that turns it into progress.",
    },
    {
      t: "p",
      html: "Without an academy, training lives in scattered pieces. A YouTube video, a PDF in the welcome email, a recorded webinar nobody can find. Customers don't know where to start or what comes next. According to the same article, a good academy brings three benefits: higher product adoption, lower support costs because fewer reactive tickets come in, and a stronger brand, because customers who learn trust you and recommend you.",
    },
    {
      t: "quote",
      text: "Not all customer content belongs in your academy.",
      cite: "Shannon Howard, Intellum",
      href: ACADEMY,
    },
    { t: "h2", text: "How to design a customer education program in five steps" },
    {
      t: "p",
      html: "Intellum lays out five steps to build an academy. We use them as the base and explain what gets decided at each step when design starts from the customer's competencies, which is how we work at merahki.",
    },
    { t: "h3", text: "Step 1: the customer outcome and the business metric" },
    {
      t: "p",
      html: "Intellum starts with knowing your audience and the goal they want to reach with the product. We add a second question in the same meeting: which company metric moves if the customer gets there? It might be usage of a feature, ticket volume, or onboarding time. Without that metric, the path gets built, but nobody can tell whether it worked.",
    },
    { t: "h3", text: "Step 2: an audit of the content you already have" },
    {
      t: "p",
      html: "Almost every company has manuals, recordings, and slide decks. Moving all of it into the academy is the classic mistake. Each piece gets checked against what the customer needs to be able to do. Keep it, rebuild it, convert it to a better format, or retire it. The audit usually shows plenty of feature walkthroughs and very little on the customer's real tasks.",
    },
    { t: "h3", text: "Step 3: persona paths built from competencies" },
    {
      t: "p",
      html: "Intellum recommends persona-based paths that balance structured and self-directed learning. At merahki every path starts from the competency: what the user must be able to do with the product, which learning outcomes show it, and which evidence proves it. The table of contents of your manual is a poor script. An admin path teaches setup and how to solve the frequent cases. A manager path teaches how to read the reports and act on them.",
    },
    { t: "h3", text: "Step 4: metrics defined before production" },
    {
      t: "p",
      html: "Intellum suggests tracking completion, satisfaction, and advocacy, and tying them to business results. We organize them into four metric families (productivity, retention, cost, and experience) and the four levels of the Kirkpatrick model. The practical rule is simple. If the metric isn't defined before you record the first video, you won't have a baseline to compare against later.",
    },
    { t: "h3", text: "Step 5: delivery, operations, and certification" },
    {
      t: "p",
      html: "The platform matters for how it delivers content, how users find it, and how it personalizes, as well as how content gets created. Then come operations: who answers learner questions, who updates lessons when the product changes, and who builds the monthly report. If the path ends in an assessment, the customer can earn a verifiable credential to share on LinkedIn, which also puts your product's name in front of their network.",
    },
    {
      t: "callout",
      title: "One learning path comes before the full academy",
      html: "A full academy can take months and spread the effort thin. One path for one persona and one metric (for example, adoption of the feature that generates the most tickets) launches sooner, gets compared against untrained customers at 60 or 90 days, and gives you the data to decide whether to scale.",
    },
    { t: "h2", text: "Customer education metrics: adoption, tickets, renewal, and NRR" },
    {
      t: "p",
      html: "A customer education program earns its budget with business metrics. Course completions are an operations number. These are the four metric families we use to connect training to results, from enrollment to the executive report.",
    },
    {
      t: "table",
      head: ["Family", "Metric", "How to measure it", "Kirkpatrick level"],
      rows: [
        ["Productivity", "Feature adoption and time to first value", "Product usage of trained vs. untrained customers", "3 · behavior"],
        ["Retention", "Renewal, churn, NRR, and GRR", "Trained vs. untrained cohorts at 60, 90, and 120 days", "4 · results"],
        ["Cost", "Tickets per customer and deflected tickets", "Support volume before and after the path", "4 · results"],
        ["Experience", "CSAT, NPS, and advocacy", "Survey at path completion and at 30 days", "1 · reaction"],
      ],
      caption: "Kirkpatrick level 2 (learning) is checked with the path assessment and the credential.",
    },
    {
      t: "p",
      html: "NRR (net revenue retention) measures how much revenue you keep from existing customers after adding expansion and subtracting churn and downgrades. It is the number your CFO cares about most in a subscription business, and the slowest to move. Report adoption and tickets first, since they react sooner.",
    },
    {
      t: "stats",
      items: [
        { value: "38.3%", label: "average increase in adoption of the products customers were trained on", source: "Forrester Consulting for Intellum, 2024", href: FORRESTER },
        { value: "96%", label: "of organizations broke even or saw a positive return on their program", source: "Forrester Consulting for Intellum, 2024", href: FORRESTER },
        { value: "372%", label: "three-year ROI in the study's economic impact model, with a 7-month payback", source: "Forrester Consulting for Intellum, 2024", href: FORRESTER },
      ],
    },
    {
      t: "p",
      html: "A fair warning about these numbers. Intellum commissioned the study from Forrester Consulting, and the sample is 300 customer education decision-makers in the US. The data shows the direction of the effect, not what will happen at your company. The way to know is to measure your own cohorts.",
    },
    {
      t: "p",
      html: "Teams are also measuring sooner. In <a href=\"" + ELG2026 + "\">Intellum's 2026 survey</a>, 27% measure impact from launch and another 49% start within the first three months. Only 5% don't measure consistently, down from 28% in the previous edition. The top obstacle to measurement, cited by 31%, is that systems aren't integrated.",
    },
    { t: "h2", text: "Platform and program operations" },
    {
      t: "p",
      html: "The LMS is the foundation, but the data that convinces executives lives elsewhere: the CRM, the support platform, and product analytics. To compare cohorts, every completion and every credential has to land on the customer record in the CRM. If you don't design that from the start, the report ends up as an enrollment count.",
    },
    {
      t: "p",
      html: "Operations is the most underestimated part. An academy needs a live session calendar, someone who answers learners, nudges for people who drop out of a path, and an update cycle every time the product changes. At merahki we run the program on the merahki.ai LMS and report on the metrics agreed in step 1.",
    },
    {
      t: "p",
      html: "Certification closes the loop. With POK, our partner for verifiable credential infrastructure and skills intelligence, customers who pass receive an Open Badges 3.0 credential that anyone can verify. See how we design that layer on our <a href=\"/certification\">certification with verifiable credentials</a> page.",
    },
    {
      t: "cta",
      html: "We design your first customer education path with you, with the metric you want to move defined on day one.",
    },
    { t: "h2", text: "Customer education for customers in Latin America" },
    {
      t: "p",
      html: "Most customer education research comes from US software companies. If you sell into Latin America, or you are a Latin American company, the principles hold, but five design conditions change.",
    },
    {
      t: "ul",
      items: [
        "<strong>Native language.</strong> Customers learn better from content written and recorded in their Spanish (or Portuguese), with examples from their market. A translated headquarters academy carries terms, cases, and regulations that mean nothing to them.",
        "<strong>User turnover.</strong> In many accounts the people who run the product change often. The onboarding path gets reused every time someone new arrives, so it has to work without a consultant in the room.",
        "<strong>Lean customer success teams.</strong> One CSM covers many accounts. Training gives them one-to-many reach without new headcount.",
        "<strong>Channels.</strong> Beyond the LMS, customers respond to email and WhatsApp reminders and to short live sessions. The design should plan for those channels from the start.",
        "<strong>Partner-led implementation.</strong> When a reseller or integrator runs the implementation, the quality of customer training depends on partner training. Design both academies together.",
      ],
    },
    { t: "h2", text: "How merahki builds customer education programs" },
    {
      t: "p",
      html: "merahki designs, produces, runs, and measures customer education programs for B2B companies. The work follows the same order as this guide.",
    },
    {
      t: "ol",
      items: [
        "Discovery of the customer's goal and the business metric the program will move.",
        "Competency-based instructional design of the first path, with learning evidence, following the <a href=\"/methodology\">merahki methodology</a>.",
        "Content production and course development with an AI-native team and your product experts.",
        "Operations on the merahki.ai LMS, with live sessions, reminders, and learner support.",
        "Verifiable credentials issued with POK and reporting on the four metric families.",
      ],
    },
    {
      t: "p",
      html: "For the full picture of a customer academy built with us, visit the <a href=\"/customer-education\">merahki customer education</a> page.",
    },
  ],
  faq: [
    {
      q: "What does customer education mean?",
      a: "Customer education is the training a company gives its customers so they can use its product and get the outcome they paid for. It includes educational onboarding, customer academies, and certifications. It is measured with product adoption, support tickets, and renewal.",
    },
    {
      q: "What does a customer education specialist do?",
      a: "They design customer learning paths, coordinate content production with product experts, and measure the effect on adoption, support, and renewal. On small teams they also run the platform and build the reports. The role usually sits in customer success or product.",
    },
    {
      q: "What is the difference between a customer academy and customer education?",
      a: "Customer education is the whole discipline. The customer academy is the structured program where its paths, courses, and certifications live. You can start with guided onboarding and no academy, but as you grow, an academy keeps training from scattering into one-off pieces.",
    },
    {
      q: "Is customer education the same as customer success?",
      a: "No. Customer success is the team that works with each account to reach outcomes and renew. Customer education is one of its strongest tools, because it teaches many customers at once what a CSM would otherwise teach one by one.",
    },
    {
      q: "How do you measure whether a customer training program works?",
      a: "Compare a cohort of trained customers with a similar cohort of untrained ones. Track feature adoption and tickets per customer first, then renewal and NRR over a longer window. Course satisfaction helps, but on its own it doesn't prove impact.",
    },
    {
      q: "Should customer training be free?",
      a: "It depends on the model. Many academies are free because adoption and retention pay for them, while others charge for advanced certifications or live training to recover costs. In <a href=\"" + ELG2026 + "\">Intellum's 2026 survey</a>, 53.6% of external programs charge for both on-demand and live training.",
    },
  ],
  sources: [
    { title: "What Is a Customer Academy?", publisher: "Intellum (Shannon Howard)", url: ACADEMY, date: "2026-10-01" },
    {
      title: "The 2026 State of Education-Led Growth Report",
      publisher: "Intellum Research",
      url: ELG2026,
      date: "2026-04",
      note: "Survey of 190 education leaders, mostly US-based (Nov 2025 to Feb 2026)",
    },
    {
      title: "Customer Education Benchmarks, Trends & Total Economic Impact",
      publisher: "Forrester Consulting for Intellum",
      url: FORRESTER,
      date: "2024-05",
      note: "Commissioned by Intellum. Survey of 300 customer education decision-makers in the US.",
    },
  ],
  adaptedFrom: { title: "What Is a Customer Academy?", publisher: "Intellum", url: ACADEMY, date: "2026-10-01" },
  related: [
    "partner-enablement-academy",
    "kirkpatrick-model-training-impact",
    "verifiable-digital-credentials-education",
    "how-to-measure-training-roi",
    "corporate-university-how-to-build",
  ],
};
