import type { Articulo } from "../types";

// Article 7 (EN) · ADDIE model vs competency-based design (W3, 24-nov-2026). Origin verified on ERIC
// (IPISD, Florida State University, 1975). The worked example uses sample data.
const IPISD = "https://eric.ed.gov/?id=ED122022";
const IPISD_ANALYZE = "https://eric.ed.gov/?id=ED122018";
const IPISD_CONTROL = "https://eric.ed.gov/?id=ED122021";
const SAM = "https://learn.alleninteractions.com/services/custom-learning/sam/elearning-development";
const KIRKPATRICK = "https://www.kirkpatrickpartners.com/the-kirkpatrick-model/";

export const articulo: Articulo = {
  slug: "addie-model-vs-competency-based-design",
  lang: "en",
  altSlug: "modelo-addie-fases-y-diseno-por-competencias",
  title: "ADDIE model vs competency-based design: the five ADDIE phases with a worked example, and when L&D teams should combine the two",
  seoTitle: "ADDIE model vs competency-based design: phases and example",
  description: "The five phases of the ADDIE model, a worked corporate example, its pros and cons, and how it compares with SAM and competency-based design.",
  kicker: "Instructional design models",
  keywords: ["addie model", "addie model phases", "addie instructional design", "addie model example", "addie vs sam", "competency-based design"],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "ADDIE is an instructional design model with five phases: analysis, design, development, implementation and evaluation. It organizes a training project from the need to the course review.",
    "Its most cited origin is IPISD, prepared by Florida State University in 1975 for US military training. Its fifth phase was called control and included evaluating graduates on the job.",
    "ADDIE tells you the order of work. It does not tell you how to write learning outcomes or what evidence to require, which is where competency-based design comes in.",
    "ADDIE fits projects with clear scope and formal sign-offs. When stakeholders need to see prototypes early, SAM adds short iterative cycles.",
  ],
  body: [
    { t: "p", html: "The ADDIE model is an instructional design framework that organizes a training project into five phases: analysis, design, development, implementation and evaluation. Each phase produces a deliverable that feeds the next, from the training need to a review of the course based on learner data." },
    { t: "p", html: "Universities, corporate L&D teams and government agencies use it because it gives a sequence that is easy to explain to a steering committee. This guide walks through each phase with a corporate example, covers its limits and shows how to pair it with competency-based design." },
    { t: "h2", text: "Where does the ADDIE model come from?" },
    { t: "p", html: `The most cited predecessor is <em>Interservice Procedures for Instructional Systems Development</em> (IPISD), a five-part series published in 1975 by Florida State University's Center for Educational Technology and sponsored by the US Naval Education and Training Command. Its phases were analyze, design, develop, implement and control (<a href="${IPISD}">ERIC, 1975</a>).` },
    { t: "p", html: `The control phase had three steps: internal evaluation of learner performance in the course, external evaluation of graduates' performance on the job, and revision of the system based on that data (<a href="${IPISD_CONTROL}">ERIC, 1975</a>). The original model already looked at what people did at work after training. Today it goes by the acronym ADDIE, with evaluation as the fifth phase.` },
    { t: "h2", text: "What are the five phases of the ADDIE model?" },
    { t: "h3", text: "1. Analysis" },
    { t: "p", html: `Define the performance problem and decide whether training can solve it. Study the audience, what they already know, the work context, the tasks of the role and the constraints on time, budget, technology and deadline. In IPISD this phase included analyzing the job, selecting tasks, building job performance measures, reviewing existing courses and choosing the instructional setting (<a href="${IPISD_ANALYZE}">ERIC, 1975</a>). <strong>Deliverable:</strong> analysis report with the need, the audience and the target result.` },
    { t: "h3", text: "2. Design" },
    { t: "p", html: "Write the learning outcomes, the module structure, the assessment strategy and the sequence of activities. Choose the delivery format and media. <strong>Deliverable:</strong> design document or blueprint approved by the subject matter expert." },
    { t: "h3", text: "3. Development" },
    { t: "p", html: "Produce the materials: scripts, video, interactions, job aids, question banks and rubrics. The expert reviews each piece and a small group of users tests the course before launch. <strong>Deliverable:</strong> complete course, ready to load into the LMS." },
    { t: "h3", text: "4. Implementation" },
    { t: "p", html: "Load the course into the LMS, prepare facilitators and tutors, open enrollment and run the first cohort. Plan the help desk, the reminders and a weekly report of active and at-risk learners from day one. <strong>Deliverable:</strong> live course with a support plan." },
    { t: "h3", text: "5. Evaluation" },
    { t: "p", html: "Measure whether the course delivered what it promised, then adjust. Formative evaluation runs through the earlier phases and summative evaluation comes at the end. For the summative part, many teams use the Kirkpatrick Model and its four levels: reaction, learning, behavior and results. Kirkpatrick Partners is direct about where to begin:" },
    { t: "quote", text: "it is critical to start with Level 4: Results", cite: "Kirkpatrick Partners, The Kirkpatrick Model", href: KIRKPATRICK },
    { t: "p", html: "In ADDIE terms, the Level 4 metric gets defined during analysis, long before the evaluation phase starts. <strong>Deliverable:</strong> evaluation report with improvements for the next version." },
    { t: "h2", text: "ADDIE model example: a corporate analytics course" },
    { t: "p", html: "Sample data: a financial services company wants its 40 analysts to close the monthly report in 3 days instead of 5. The L&D team proposes a 32-hour online micro-credential over 8 weeks." },
    {
      t: "table",
      caption: "The five ADDIE phases in the example (sample data)",
      head: ["Phase", "What the team did", "Deliverable"],
      rows: [
        ["Analysis", "Interviews with managers and analysts. Finding: data arrives unvalidated and the close is presented in scattered spreadsheets. Training targets those two causes. A third cause, a process issue, goes to the business unit", "Needs analysis with a 5-day baseline"],
        ["Design", "Competency, knowing, doing and being outcomes, four modules and one piece of evidence per module. Final evidence: a dashboard of each analyst's real monthly close", "Blueprint approved by the expert"],
        ["Development", "Scripts approved before recording, expert videos, exercises with sample data and rubrics", "Course package per module"],
        ["Implementation", "LMS setup, a cohort of 40 analysts and a weekly report of active and at-risk learners", "Live course"],
        ["Evaluation", "Usefulness survey, pre and post assessment, manager follow-up at 60 days and measurement of close time", "Report with the measured result"],
      ],
    },
    { t: "p", html: "In the example, the close dropped to 3.4 days. That is close to the target, and the report explains the gap: the process issue was still open. That kind of honest reading is what makes an evaluation credible." },
    { t: "h2", text: "What are the pros and cons of the ADDIE model?" },
    { t: "p", html: "Pros:" },
    {
      t: "ul",
      items: [
        "It is easy to explain to a committee or a client.",
        "Every phase ends with a deliverable that gets signed off.",
        "It keeps large projects with several owners in order.",
      ],
    },
    { t: "p", html: "Cons:" },
    {
      t: "ul",
      items: [
        "Run strictly phase by phase, it leaves user testing for the end, when changes cost the most.",
        "It does not say how to write a learning outcome or what evidence to require.",
        "It does not force anyone to set the business result before design starts.",
      ],
    },
    { t: "p", html: `The first limitation is why SAM exists. Michael Allen's Successive Approximation Model works with a preparation phase followed by short design and development cycles built around early prototypes (<a href="${SAM}">Allen Interactions</a>). For the other two, teams pair ADDIE with competency-based design.` },
    { t: "h2", text: "Common mistakes when applying ADDIE" },
    {
      t: "ul",
      items: [
        "<strong>Skipping analysis because the client already asked for a course.</strong> If the problem is a process or a tool, no course will fix it. Analysis is how you say so in time.",
        "<strong>Writing instructor objectives instead of learner outcomes.</strong> \"Teach analysts to prioritize metrics\" describes what the instructor does. \"Prioritizes which metrics to track and justifies the ones left out\" describes what the learner does, and it can be assessed.",
        "<strong>Recording before the script is approved.</strong> Every re-shoot spends the expert's calendar, the scarcest resource in the project.",
        "<strong>Leaving evaluation for the end.</strong> If the business metric and its baseline were not set during analysis, the evaluation phase can only measure satisfaction.",
      ],
    },
    { t: "h2", text: "ADDIE vs SAM vs competency-based design" },
    {
      t: "table",
      caption: "How three approaches to program design compare",
      head: ["Criterion", "ADDIE", "SAM", "Competency-based design"],
      rows: [
        ["What it organizes", "Project phases", "Project phases, in cycles", "Content and assessment"],
        ["Starting point", "Needs analysis", "A kickoff session with stakeholders and a prototype", "The competency the role requires"],
        ["How it moves", "Phase by phase, with sign-offs", "Iterations with alpha, beta and gold versions", "From competency to outcomes, evidence and activities"],
        ["What it delivers", "A course and its evaluation", "Successive versions of the course", "A blueprint that traces every outcome"],
        ["Main risk", "Finding out late what does not work", "Losing the design thread between iterations", "Forcing alignment to a standard that does not fit"],
      ],
    },
    { t: "h2", text: "When should you combine ADDIE with competency-based design?" },
    { t: "p", html: "Whenever the program certifies something or has to show results. The combination is simple: ADDIE runs the project, and competency-based design decides what happens inside each phase." },
    {
      t: "ul",
      items: [
        "<strong>In analysis</strong>, besides the need, identify the occupation and the on-the-job behavior that should change.",
        "<strong>In design</strong>, write objectives as learning outcomes for knowing, doing and being, each with its evidence and rubric.",
        "<strong>In development</strong>, make every activity practice a piece of the evidence that comes next.",
        "<strong>In evaluation</strong>, measure from Level 4 down, using the metrics set during analysis.",
      ],
    },
    { t: "p", html: `That is how the <a href="/methodology">merahki.ai methodology</a> works. The step-by-step method for writing learning outcomes, evidence and rubrics is in our guide to <a href="/blog/competency-based-instructional-design">competency-based instructional design</a>. For role-based programs in companies, see <a href="/training-certification">training and certification for corporate teams</a>.` },
    { t: "cta", html: "Tell us which program you want to design or audit, who it is for and which result it has to move." },
  ],
  faq: [
    { q: "What is the ADDIE model?", a: "It is an instructional design model that organizes a training project into five phases: analysis, design, development, implementation and evaluation. Each phase ends with a deliverable that feeds the next." },
    { q: "What are the five phases of ADDIE?", a: "Analysis of the need and the audience, design of outcomes and assessment, development of the materials, implementation with the first cohort, and evaluation of what was achieved to improve the next version." },
    { q: "What is an example of the ADDIE model?", a: "A course to help a team of analysts close the monthly report in fewer days. Analysis sets the baseline, design defines outcomes and evidence, development builds the course, implementation runs the cohort and evaluation measures close time." },
    { q: "Is ADDIE a linear model?", a: "It can be run phase by phase or with reviews between phases. The 1975 IPISD model ended with a data-based revision of the system, and SAM proposes short cycles with prototypes to catch problems earlier." },
    { q: "What is the difference between ADDIE and SAM?", a: "ADDIE moves through five phases with a sign-off at each one. SAM, created by Michael Allen, starts with a preparation phase and then iterates design and development in short cycles with alpha, beta and gold versions." },
  ],
  sources: [
    { title: "Interservice Procedures for Instructional Systems Development: Executive Summary and Model (Branson, R. K.)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122022)", url: IPISD, date: "1975" },
    { title: "Interservice Procedures for Instructional Systems Development. Phase I: Analyze (Branson, R. K. and others)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122018)", url: IPISD_ANALYZE, date: "1975" },
    { title: "Interservice Procedures for Instructional Systems Development. Phase IV: Implement and Phase V: Control (Branson, R. K. and others)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122021)", url: IPISD_CONTROL, date: "1975" },
    { title: "SAM: the Successive Approximation Model", publisher: "Allen Interactions", url: SAM },
    { title: "The Kirkpatrick Model", publisher: "Kirkpatrick Partners", url: KIRKPATRICK },
  ],
  related: ["competency-based-instructional-design", "custom-elearning-development-guide", "kirkpatrick-model-training-impact", "how-to-design-a-micro-credential"],
};
