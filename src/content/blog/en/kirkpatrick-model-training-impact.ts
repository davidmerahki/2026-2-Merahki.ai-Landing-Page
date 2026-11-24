import type { Articulo } from "../types";

const INTELLUM_SURVEYS = "https://www.intellum.com/resources/blog/training-survey-questions";
const INTELLUM_DESIGN = "https://www.intellum.com/resources/blog/design-with-the-end-in-mind";
const ATD_2019 = "https://www.td.org/research-reports/effective-evaluation";

export const articulo: Articulo = {
  slug: "kirkpatrick-model-training-impact",
  lang: "en",
  altSlug: "modelo-kirkpatrick-medir-impacto-capacitacion",
  title: "The Kirkpatrick model: what each of the four levels measures and how L&D teams use it to evaluate training impact",
  seoTitle: "Kirkpatrick model: the 4 levels and how to apply them",
  description: "The Kirkpatrick model evaluates training on four levels: reaction, learning, behavior, and results. What to measure at each level and what to ask.",
  kicker: "Training measurement",
  keywords: [
    "kirkpatrick model",
    "kirkpatrick model levels",
    "training evaluation",
    "post-training survey questions",
    "how to measure training effectiveness",
    "kirkpatrick model example",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `The Kirkpatrick model evaluates training on four levels: <strong>reaction</strong> (was it relevant?), <strong>learning</strong> (can people do it?), <strong>behavior</strong> (are they doing it on the job?), and <strong>results</strong> (did a business metric move?).`,
    `Each level has its own timing: reaction and learning within 24 hours, behavior around 30 days, and results at 60 to 90 days.`,
    `Measurement is designed backward: start with the business result (level 4), then the behaviors that drive it (level 3), then what people must learn (level 2), and reaction last (level 1).`,
    `In ATD's 2019 research, 83% of organizations measured reaction and only 38% measured business results.`,
    `ROI is a fifth level added by the Phillips ROI Methodology, and it requires cost data.`,
  ],
  body: [
    {
      t: "p",
      html: `The <strong>Kirkpatrick model</strong> is a method for evaluating training on four levels: how participants reacted, what they learned, what they changed in their work, and what results that change produced for the organization. Each level answers a different question, gets measured at a different time, and comes from a different respondent.`,
    },
    {
      t: "p",
      html: `This guide adapts two posts from the Intellum blog: <a href="${INTELLUM_SURVEYS}">Dr. Anderson Campbell's guide to training survey questions</a> (October 2026) and Vanessa Alzate's piece on <a href="${INTELLUM_DESIGN}">designing training backward from level 4</a> (September 2025). Alzate is CEO of Kirkpatrick Partners. The sample questions below are ours. We added how merahki.ai ties each level to competency-based design and to the four metric families we report on: productivity, retention, cost, and experience.`,
    },
    { t: "h2", text: "What are the four levels of the Kirkpatrick model?" },
    {
      t: "p",
      html: `The levels run from easiest to measure to what leadership cares about most. You can measure the first two when the course ends. The last two require a follow-up weeks later, and the learner's manager has to answer too.`,
    },
    {
      t: "table",
      head: ["Level", "Question it answers", "Instrument", "When", "Who answers"],
      rows: [
        ["1. Reaction", "Was the course relevant and clear?", "Short survey", "Within 24 hours", "Learner"],
        ["2. Learning", "Can the learner do what the course taught?", "Scenario questions, evidence-based assessment", "At course end", "Learner"],
        ["3. Behavior", "Is the learner applying it on the job?", "Learner and manager surveys, observation", "Around 30 days", "Learner and manager"],
        ["4. Results", "Did a business metric move?", "Business data plus a manager survey", "60 to 90 days", "Manager and the metric's owner"],
      ],
      caption: "Timing follows Intellum's 2026 guide. Adjust it to the length of your program.",
    },
    { t: "h2", text: "Training evaluation survey questions for each level" },
    {
      t: "p",
      html: `Long surveys get poor answers. Intellum's guide suggests about 12 questions right after the session, then about six for the learner and four for the manager at 30 days. A useful filter: if the answer won't change anything about the course, cut the question.`,
    },
    { t: "h3", text: "Level 1: reaction" },
    {
      t: "p",
      html: `Ask about relevance first, because it predicts whether people will use the skill. Liking a course is a weak signal. Ask about content load and clarity too.`,
    },
    {
      t: "ul",
      items: [
        "On a scale of 1 to 5, how closely did the content match the tasks you do each week?",
        "For the time you had, was there too little, the right amount, or too much content?",
        "Which part was hardest to follow, and why?",
        "On a scale of 0 to 10, how likely are you to recommend this course to someone on your team?",
      ],
    },
    { t: "h3", text: "Level 2: learning" },
    {
      t: "p",
      html: `Self-ratings like "I understood the topic" tell you little. Scenario questions work better because the learner has to make a call. Add a confidence question to catch people who know the answer but won't act on it yet.`,
    },
    {
      t: "ul",
      items: [
        "Scenario: a customer asks to exchange a product after the return window has closed. What is your first step? (four options, one correct)",
        "Put the steps of the case-closing procedure in order.",
        "On a scale of 1 to 5, how confident are you doing this task without help?",
        "What would keep you from using this next week?",
      ],
    },
    { t: "h3", text: "Level 3: behavior" },
    {
      t: "p",
      html: `Tie every question to a specific task. Ask the learner whether they did it and what got in the way. Ask the manager what looks different.`,
    },
    {
      t: "ul",
      items: [
        "Learner: in the past two weeks, did you do [task] the way the course taught it? Yes, partly, or no. If not, what stopped you?",
        "Learner: what did the job require that the course didn't cover?",
        "Learner: has your manager talked with you about what you learned?",
        "Manager: what is this person doing differently since the course? Give one example.",
        "Manager: what keeps them from applying it more?",
      ],
    },
    { t: "h3", text: "Level 4: results" },
    {
      t: "p",
      html: `Pick the business metric first, then write the questions. Ask managers about task time, errors or escalated tickets, and anything else that changed in the period, like a new tool or a new quota.`,
    },
    {
      t: "ul",
      items: [
        "Has the time your team spends on [task] gone up, stayed the same, or gone down?",
        "Have errors, rework, or escalated cases in [process] dropped?",
        "What else changed in these months (staffing, tools, targets) that could explain the result?",
      ],
    },
    { t: "h2", text: "Why measurement drops off at levels 3 and 4" },
    {
      t: "p",
      html: `ATD's <a href="${ATD_2019}">Effective Evaluation</a> research, published in 2019 and cited by Intellum in 2026, showed a steep drop from one level to the next. The numbers are from 2019, so treat them as a picture of the pattern. Today's figures may differ.`,
    },
    {
      t: "stats",
      items: [
        { value: "83%", label: "measured reaction (level 1)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "54%", label: "checked on-the-job application (level 3)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "38%", label: "measured business results (level 4)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "16%", label: "calculated ROI (level 5)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
      ],
    },
    {
      t: "p",
      html: `The barriers ATD reported are practical. It is hard to isolate the effect of training, teams lack access to business data, and higher-level evaluation looks expensive. All three share one cause: measurement got planned after the course was built, when nobody had agreed with the metric's owner on what to track or against which baseline.`,
    },
    { t: "h2", text: "How to design measurement backward from level 4" },
    {
      t: "p",
      html: `The modernized version of the model, as Alzate explains it, flips the order: start with the result. merahki.ai follows the same logic in its <a href="/methodology">competency-based instructional design</a>, which moves from competency to learning outcomes, evidence, and activities. Here is the sequence:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Level 4. Define the result.</strong> One or two business metrics, each with a baseline and an owner who reports it. Example: tickets escalated to tier 2 per month.",
        "<strong>Level 3. Define the critical behaviors.</strong> What people must do differently on the job for that metric to move, written as observable behaviors. Example: resolves the five most common contact reasons on the first call.",
        "<strong>Level 2. Define learning outcomes and their evidence.</strong> What learners must be able to show at the end, and the work product or performance that proves it.",
        "<strong>Level 1. Tie reaction to relevance.</strong> Satisfaction questions focus on whether the content fits those tasks.",
        "<strong>Plan the supports and the schedule.</strong> Job aids, manager coaching, and reminders, plus the survey dates: 24 hours, 30 days, and 60 to 90 days.",
      ],
    },
    {
      t: "callout",
      title: "Rule of thumb",
      html: `If nobody can name the business metric and its baseline before the course is built, you won't be able to measure level 4 later. That agreement with the metric's owner is the first deliverable of the design.`,
    },
    { t: "h2", text: "Kirkpatrick model example: onboarding for customer support agents" },
    {
      t: "p",
      html: `This example is illustrative and has no figures. It shows how each level maps to one of the four metric families we report on.`,
    },
    {
      t: "table",
      head: ["Level", "What you define", "Metric", "Family"],
      rows: [
        ["4. Results", "Fewer escalations and higher customer satisfaction", "Escalated tickets per agent per month, CSAT", "Cost and experience"],
        ["3. Behavior", "Agents resolve the five most common contact reasons on the first call", "First-contact resolution rate, supervisor observation", "Productivity"],
        ["2. Learning", "Agents solve scenarios for those five reasons with the right procedure", "Scenario score, performance evidence", "Productivity"],
        ["1. Reaction", "Content matches the real cases on their shift", "Relevance score, 1 to 5", "Experience"],
      ],
    },
    {
      t: "p",
      html: `When the support lead signs off on this table before production, the course gets built around those five contact reasons, the assessments mirror those cases, and the final report talks about escalations and CSAT, which is what the support lead tracks anyway.`,
    },
    { t: "cta" },
    { t: "h2", text: "How to read the results without advanced statistics" },
    {
      t: "p",
      html: `You don't need an analytics team to start. Intellum's guide boils it down to two moves: compare the share of favorable answers against your baseline, and count the themes that repeat in open-ended answers. To make that comparison hold up:`,
    },
    {
      t: "ul",
      items: [
        "Tag every response by team, role, course, and cohort when you send it. Without tags you can't line answers up against the business metric.",
        "Report by cohort, not by person. The survey can stay anonymous and people answer more candidly.",
        "If you can, train the team in staggered groups. The group that hasn't trained yet becomes the comparison for the one that has.",
        "Log other changes in the period. A new tool or a new target can explain a result as much as the course can.",
      ],
    },
    {
      t: "p",
      html: `When merahki.ai runs a program on the merahki.ai LMS, we schedule the 24-hour, 30-day, and 60 to 90-day sends from day one and tag responses by cohort with the same course code the report uses.`,
    },
    { t: "h2", text: "The Kirkpatrick model and training ROI" },
    {
      t: "p",
      html: `The Kirkpatrick model stops at results. The <a href="https://roiinstitute.net/roi-methodology/">ROI Institute's ROI Methodology</a>, often called the Phillips model, adds a fifth level that compares a program's monetary benefits with its fully loaded costs. Getting there means isolating the effect of training and converting results to money. We walk through it in our guide on <a href="/blog/how-to-measure-training-roi">how to measure training ROI</a>.`,
    },
    { t: "h2", text: "What a micro-credential adds to level 2 measurement" },
    {
      t: "p",
      html: `A well-designed micro-credential certifies level 2 with evidence. Learners earn the badge by demonstrating the skill against public criteria, and attendance alone doesn't qualify. That evidence also sets up level 3, because it spells out what you should see on the job. In merahki.ai programs, <a href="/certification">certification is issued with POK</a> as a verifiable Open Badges 3.0 credential, and each credential's status (issued and accepted) feeds the program report.`,
    },
  ],
  faq: [
    {
      q: "What are the four levels of the Kirkpatrick model?",
      a: "Reaction, learning, behavior, and results. Reaction measures whether the course was relevant, learning whether people can do what it taught, behavior whether they apply it on the job, and results whether a business metric moved.",
    },
    {
      q: "How long after training should you measure behavior?",
      a: "Around 30 days, once people have had a chance to apply what they learned. Business results come later, at 60 to 90 days, because metrics take longer to move.",
    },
    {
      q: "How many questions should a post-training survey have?",
      a: "Intellum's guide suggests about 12 right after the session, then about six for the learner and four for the manager at 30 days. If a question won't change a decision about the course, drop it.",
    },
    {
      q: "Can a training survey be anonymous and still connect to business results?",
      a: "Yes. Tag each response by cohort, team, role, and course, and report by group rather than by person. That lets you compare against the business metric without identifying anyone.",
    },
    {
      q: "What is the difference between the Kirkpatrick model and the Phillips model?",
      a: "Kirkpatrick evaluates on four levels and ends at business results. The Phillips ROI Methodology, promoted by the ROI Institute, adds a fifth level: return on investment, which compares monetary benefits with program costs.",
    },
  ],
  sources: [
    { title: "Training Survey Questions That Measure More Than Reaction", publisher: "Intellum (Dr. Anderson Campbell)", url: INTELLUM_SURVEYS, date: "2026-10-23" },
    { title: "Design with the End in Mind: How to Future-Proof Training Using the Modernized Kirkpatrick Model", publisher: "Intellum (Vanessa Alzate, Kirkpatrick Partners)", url: INTELLUM_DESIGN, date: "2025-09-24" },
    { title: "Effective Evaluation: Measuring Learning Programs for Success", publisher: "Association for Talent Development (ATD)", url: ATD_2019, date: "2019-11", note: "Figures as cited by Intellum (2026)" },
    { title: "The Kirkpatrick Model", publisher: "Kirkpatrick Partners", url: "https://www.kirkpatrickpartners.com/the-kirkpatrick-model/" },
    { title: "ROI Methodology", publisher: "ROI Institute", url: "https://roiinstitute.net/roi-methodology/" },
  ],
  adaptedFrom: {
    title: "Training Survey Questions That Measure More Than Reaction",
    publisher: "Intellum",
    url: INTELLUM_SURVEYS,
    date: "2026-10-23",
  },
  related: [
    "how-to-measure-training-roi",
    "competency-based-instructional-design",
    "skills-mapping-guide",
    "upskilling-reskilling-programs-companies",
  ],
};
