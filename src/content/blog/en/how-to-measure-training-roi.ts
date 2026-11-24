import type { Articulo } from "../types";

const INTELLUM_ROI = "https://www.intellum.com/resources/blog/roi-of-learning-and-development";
const ROI_INSTITUTE = "https://roiinstitute.net/roi-methodology/";
const BRANDON_HALL = "https://brandonhall.com/how-to-measure-the-business-impact-of-learning/";
const GALLUP = "https://www.gallup.com/workplace/247391/fixable-problem-costs-businesses-trillion.aspx";

export const articulo: Articulo = {
  slug: "how-to-measure-training-roi",
  lang: "en",
  altSlug: "roi-de-la-capacitacion-como-medirlo",
  title: "How to measure training ROI: seven methods L&D teams can group into productivity, retention, cost, and experience metrics",
  seoTitle: "How to measure training ROI: formula and 7 methods",
  description: "Training ROI compares a program's net benefits with its cost. The formula, seven ways to measure it, and how to isolate the effect of training.",
  kicker: "Training measurement",
  keywords: [
    "training roi",
    "how to measure training roi",
    "l&d roi",
    "roi of training formula",
    "phillips roi methodology",
    "training metrics",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `Training ROI is a program's net benefits divided by its total cost, expressed as a percentage. The ROI Institute's methodology (the Phillips model) treats it as the fifth level of evaluation, after reaction, learning, application, and impact.`,
    `There are seven practical ways to measure it, and they fit four metric families: <strong>productivity</strong> (ramp time, performance, skills), <strong>retention</strong> (turnover, internal mobility), <strong>cost</strong> (errors and incidents avoided), and <strong>experience</strong> (engagement and satisfaction).`,
    `Before you put a dollar figure on anything, isolate the effect of training with a control group, staggered cohorts, trend lines, or manager estimates.`,
    `Start with one or two metrics leadership already tracks, and take the baseline before the program launches.`,
  ],
  body: [
    {
      t: "p",
      html: `<strong>Training ROI</strong> is the return on investment of a learning program: the net benefit it produced (benefits minus costs) divided by what it cost, expressed as a percentage. An ROI of 0% means the program paid for itself. A positive ROI means it returned more than it cost.`,
    },
    {
      t: "p",
      html: `This guide adapts Shannon Howard's post on the Intellum blog about <a href="${INTELLUM_ROI}">seven proven methods for measuring L&D ROI</a> (November 2025). Intellum doesn't name an evaluation framework. We sort its seven methods into the four metric families merahki.ai uses to report on every program, and we connect them to the Kirkpatrick model and the Phillips ROI Methodology.`,
    },
    {
      t: "quote",
      text: "Training that does not show impact is the first budget cut.",
      cite: "Intellum, 2025",
      href: INTELLUM_ROI,
    },
    { t: "h2", text: "What is the formula for training ROI?" },
    {
      t: "p",
      html: `The <a href="${ROI_INSTITUTE}">ROI Institute's ROI Methodology</a> uses two calculations. The benefit-cost ratio (BCR) divides program benefits by program costs. ROI divides net program benefits by program costs and is expressed as a percentage.`,
    },
    {
      t: "callout",
      title: "The two formulas",
      html: `Benefit-cost ratio: <strong>BCR = program benefits ÷ program costs</strong>. Return on investment: <strong>ROI (%) = (benefits − costs) ÷ costs × 100</strong>.`,
    },
    {
      t: "p",
      html: `The division is the easy part. The hard part is filling both sides with numbers your CFO will accept. The ROI Institute breaks it into steps:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Collect data from the earlier levels:</strong> reaction, learning, application on the job, and business impact.",
        "<strong>Isolate the program's effect</strong> so training doesn't get credit for something else.",
        "<strong>Convert business changes to money</strong> using standard values, historical costs, or expert input.",
        "<strong>Add up fully loaded costs:</strong> needs assessment, design, development, delivery, participants' time, and evaluation.",
        "<strong>Report intangible benefits</strong> you can't convert to money, such as customer satisfaction or teamwork.",
      ],
    },
    { t: "h2", text: "Why measure ROI before someone asks for budget cuts" },
    {
      t: "stats",
      items: [
        {
          value: "Nearly 40%",
          label: "of learning leaders don't know how their measurement approach reflects learning's impact",
          source: "Brandon Hall Group, Think Like a CEO Study (cited 2024)",
          href: BRANDON_HALL,
        },
      ],
    },
    {
      t: "p",
      html: `When measurement stops at completions and smile sheets, L&D walks into budget review without a number finance recognizes. Measuring return forces the conversation into ramp time, turnover, errors, and customers, which is how the people approving the budget already think.`,
    },
    { t: "h2", text: "Seven ways to measure training ROI, grouped into four metric families" },
    {
      t: "p",
      html: `Intellum's seven methods answer different questions. Grouping them by family makes the choice easier: first pick the family that hurts the business most, then the method that measures it.`,
    },
    {
      t: "table",
      head: ["Family", "Method", "What you compare", "Data you need, and from whom"],
      rows: [
        ["Productivity", "1. Ramp time", "Days to first milestone before and after structured onboarding", "Hire dates and milestones, from HR and managers"],
        ["Productivity", "3. Performance", "One or two KPIs before and after, with a control group if possible", "Sales, cycle time, or CSAT, from the metric's owner"],
        ["Productivity", "4. Skill growth", "Baseline, training, reassessment", "Assessments and manager ratings"],
        ["Retention", "2. Retention and engagement", "Turnover for completers vs. non-completers in comparable roles", "Exits by cohort, from HRIS"],
        ["Retention", "5. Internal mobility", "Promotions and lateral moves of people who finished a path", "Internal moves, from HR"],
        ["Cost", "6. Cost avoidance", "Errors, rework, incidents, and compliance violations before and after", "Quality, safety, or support records"],
        ["Experience", "7. Engagement and usage", "Completions and time spent, cross-checked against performance and retention", "LMS reports"],
      ],
      caption: "Methods from Intellum (2025). The grouping into families is merahki.ai's.",
    },
    { t: "h3", text: "Productivity: ramp time, performance, and skills" },
    {
      t: "p",
      html: `Ramp time matters most in roles tied to revenue or output, like sales or engineering. The basic math: days saved to reach the milestone × the daily value of one person's contribution × the number of people trained. Use your own company's contribution figure, not a market average.`,
    },
    {
      t: "p",
      html: `For performance, choose one or two KPIs the course can realistically move and compare them before and after. For skills, use a baseline, training, and reassessment model. An evidence-based assessment or a certification gives you firmer data than self-ratings.`,
    },
    { t: "h3", text: "Retention: turnover and internal mobility" },
    {
      t: "p",
      html: `According to <a href="${GALLUP}">Gallup (2019)</a>, replacing an employee can cost between one-half and two times that person's annual salary. You'll get a better number from your own data: time to fill, recruiting, onboarding, and the months before a new hire is fully productive. With that figure, every exit avoided in the trained cohort becomes savings.`,
    },
    {
      t: "p",
      html: `To measure internal mobility, count promotions and lateral moves among people who completed a prerequisite path, such as a leadership track, and compare that with the cost of hiring from outside.`,
    },
    { t: "h3", text: "Cost: errors, incidents, and tickets avoided" },
    {
      t: "p",
      html: `Count incidents before and after the program and multiply the difference by the average cost per incident. This works for rework, safety incidents, compliance penalties, and, in customer training, for support tickets that stop coming in because customers now know how to use the product. That last one is central to our <a href="/customer-education">customer education</a> programs.`,
    },
    { t: "h3", text: "Experience: engagement as a leading indicator" },
    {
      t: "p",
      html: `Completions, time spent, and satisfaction arrive first, weeks before business data does. They are early signals, and they don't count as return on their own. They become useful when you cross them with performance or retention: if the people who engage most are also the ones who improve most, the link starts to hold up.`,
    },
    {
      t: "callout",
      title: "Watch the example numbers",
      html: `Intellum illustrates each method with sample percentages, like "20% faster ramp." Those are hypothetical. Don't borrow them as benchmarks. Your own baseline is the only figure that counts.`,
    },
    { t: "h2", text: "How to isolate the effect of training" },
    {
      t: "p",
      html: `If the metric improved, you still have to show it was the course and not a new tool, a new quota, or seasonality. These are the techniques the ROI Institute lists:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Control group:</strong> a comparable group that hasn't trained yet. Staggered cohorts give you one at no extra cost.",
        "<strong>Trend line analysis:</strong> project the metric from its past behavior and compare it with what happened.",
        "<strong>Forecasting:</strong> model the metric using the other variables that drive it.",
        "<strong>Estimates:</strong> ask participants and managers how much of the change they attribute to training, and how confident they are.",
      ],
    },
    { t: "h2", text: "Kirkpatrick, Phillips, and the four metric families in one table" },
    {
      t: "table",
      head: ["Level", "Question", "Family it usually measures", "Example data"],
      rows: [
        ["1. Reaction", "Was it relevant?", "Experience", "Relevance score, course NPS"],
        ["2. Learning", "Can they do it?", "Productivity", "Scenario score, credential earned"],
        ["3. Application", "Are they doing it on the job?", "Productivity", "Manager observation at 30 days"],
        ["4. Impact", "Did the business move?", "Retention, cost, productivity", "Turnover, incidents, cycle time"],
        ["5. ROI", "Was it worth the cost?", "All four, converted to money", "BCR and ROI (%)"],
      ],
    },
    {
      t: "p",
      html: `We cover levels 1 to 4, with sample survey questions for each one, in our guide to the <a href="/blog/kirkpatrick-model-training-impact">Kirkpatrick model</a>.`,
    },
    { t: "cta" },
    { t: "h2", text: "Where to start when your data lives in different systems" },
    {
      t: "p",
      html: `The data almost never sits in one place. The LMS has engagement, the HRIS has exits, the CRM has sales, and the help desk has tickets. You don't need to integrate everything to get started:`,
    },
    {
      t: "ol",
      items: [
        "Pick one or two metrics leadership already reviews every month.",
        "Take the baseline before launch, together with the team that owns the data.",
        "Define in the course design which behavior should move that metric.",
        "Agree up front on when and in what format you'll get the data.",
        "Add metrics with the next cohort, once the first one has results.",
      ],
    },
    {
      t: "p",
      html: `In the <a href="/training-certification">employee training and certification programs</a> merahki.ai designs and runs, we set that baseline and the target metric during design, together with the competency and the learning outcomes, and the final report comes back in those terms.`,
    },
    { t: "h2", text: "Training ROI for continuing education programs sold to companies" },
    {
      t: "p",
      html: `When a university sells a program to a company, the return that matters is the buyer's. A continuing education unit that shows up with a proposed metric (say, ramp time for new sales reps) and a plan to measure it is competing on more than its course catalog. That's how we approach corporate clients in our <a href="/lifelong-learning">lifelong learning</a> work with universities.`,
    },
  ],
  faq: [
    {
      q: "What is the formula for training ROI?",
      a: "ROI (%) = (program benefits − program costs) ÷ program costs × 100. Benefits are business changes converted to money, and costs include design, development, delivery, participants' time, and evaluation.",
    },
    {
      q: "What is the difference between ROI and the benefit-cost ratio?",
      a: "The benefit-cost ratio (BCR) divides total benefits by costs. ROI uses net benefits, meaning benefits minus costs, and is expressed as a percentage.",
    },
    {
      q: "How do you measure training ROI without a control group?",
      a: "Train in staggered cohorts, project the metric's trend line, or ask participants and managers to estimate how much of the change came from the program. Estimates are less rigorous, but they work if you report them with a confidence level.",
    },
    {
      q: "How long after training can you calculate ROI?",
      a: "It depends on the metric. Behavior change shows up around 30 days and business impact at 60 to 90 days. Turnover and internal mobility are better measured at six months or later.",
    },
    {
      q: "What do you do with benefits you can't convert to money?",
      a: "Report them as intangible benefits alongside the ROI figure. The ROI Institute's methodology recommends this for things like customer satisfaction or teamwork.",
    },
  ],
  sources: [
    { title: "How to Measure L&D ROI: 7 Proven Methods That Work", publisher: "Intellum (Shannon Howard)", url: INTELLUM_ROI, date: "2025-11-13" },
    { title: "ROI Methodology", publisher: "ROI Institute", url: ROI_INSTITUTE },
    { title: "How to Measure the Business Impact of Learning", publisher: "Brandon Hall Group", url: BRANDON_HALL, date: "2024-06-10", note: "Cites the Think Like a CEO Study" },
    { title: "This Fixable Problem Costs U.S. Businesses $1 Trillion", publisher: "Gallup", url: GALLUP, date: "2019-03-13" },
  ],
  adaptedFrom: {
    title: "How to Measure L&D ROI: 7 Proven Methods That Work",
    publisher: "Intellum",
    url: INTELLUM_ROI,
    date: "2025-11-13",
  },
  related: [
    "kirkpatrick-model-training-impact",
    "upskilling-reskilling-programs-companies",
    "customer-education-program-guide",
    "corporate-university-how-to-build",
  ],
};
