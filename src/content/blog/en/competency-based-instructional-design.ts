import type { Articulo } from "../types";

// Pillar 3 (EN) · Competency-based instructional design (W3, 24-nov-2026). Method: merahki.ai's
// DAAA-V1 blueprint and learning-outcome method. The worked example uses sample data (the same as the
// merahki model on the home page).
const MEN = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const DANE = "https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-unica-de-ocupaciones-para-colombia-cuoc";
const IPISD = "https://eric.ed.gov/?id=ED122022";
const UBD = "https://files.ascd.org/staticfiles/ascd/pdf/siteASCD/publications/UbD_WhitePaper0312.pdf";
const SAM = "https://learn.alleninteractions.com/services/custom-learning/sam/elearning-development";
const KIRKPATRICK = "https://www.kirkpatrickpartners.com/the-kirkpatrick-model/";
const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";

export const articulo: Articulo = {
  slug: "competency-based-instructional-design",
  lang: "en",
  altSlug: "diseno-instruccional-por-competencias",
  title: "Competency-based instructional design: what it is, which models exist and how universities and companies move from a competency to assessable evidence",
  seoTitle: "Competency-based instructional design: models and steps",
  description: "What competency-based instructional design is, how it compares with ADDIE, SAM and backward design, and how to write outcomes, evidence and rubrics.",
  kicker: "Instructional design",
  keywords: ["competency-based instructional design", "instructional design", "instructional design models", "learning outcomes", "competency-based curriculum design", "how to write learning outcomes", "assessment rubrics"],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    "Instructional design is the process of planning a training program so people reach a concrete result: what they will be able to do, how they practice it and what evidence proves it.",
    "Competency-based design starts from what a person must demonstrate on the job and works down to learning outcomes for knowing, doing and being, then evidence, rubrics and activities.",
    "ADDIE and SAM organize the project. Backward design and competency-based design organize the content around the result. Most teams combine one of each.",
    "Qualifications frameworks and occupational classifications give the outcomes a shared level and vocabulary without dictating content.",
    "Measurement is planned from Kirkpatrick Level 4 down: business result first, then behaviors, learning and reaction.",
  ],
  body: [
    { t: "p", html: "Instructional design is the process of planning a training program so people reach a concrete result: it defines what they will be able to do at the end, which activities they use to practice and what evidence proves they got there. Competency-based instructional design is the version that starts from what a person must demonstrate on the job." },
    { t: "p", html: "This guide is for instructional designers, faculty, continuing education coordinators and corporate L&D teams. It compares the most widely used models, explains how to write learning outcomes and walks through a finished module built with the merahki.ai method." },
    { t: "h2", text: "What is instructional design?" },
    { t: "p", html: "It is the discipline that turns a training need into a program you can deliver, assess and improve. The subject matter expert brings the content. The instructional designer brings the method: the sequence, the type of practice, the assessment and what gets measured at the end." },
    { t: "p", html: "The output is a document anyone on the team can read and act on. At merahki.ai it is called a blueprint (DAAA-V1 format), and it holds the competency, the weighted learning outcomes, the evidence for each module, the activities and the learner path. Production, delivery and measurement all work from that one document." },
    { t: "h2", text: "What are the main instructional design models?" },
    { t: "p", html: "Models answer two different questions. Some organize the project: which phases exist and in what order. Others organize the content: where decisions about what to teach and assess come from. These four are the ones universities and companies use most." },
    {
      t: "table",
      caption: "Four instructional design models and what each one organizes",
      head: ["Model", "What it organizes", "Core idea", "When it fits"],
      rows: [
        ["ADDIE", "The project", "Five phases: analysis, design, development, implementation and evaluation", "Projects with clear scope, several owners and formal sign-offs"],
        ["SAM", "The project", "Short design and development cycles with prototypes the client reviews early", "Projects where the client needs to see the course to make decisions"],
        ["Backward design", "The content", "Desired results first, then acceptable evidence, then the learning plan", "Programs that must show transfer to the job"],
        ["Competency-based design", "The content", "From the competency the role requires to learning outcomes, evidence and activities", "Credit-bearing programs, micro-credentials and role-based training"],
      ],
    },
    { t: "p", html: `ADDIE's most cited origin is <em>Interservice Procedures for Instructional Systems Development</em>, prepared by Florida State University in 1975 for US military training, with five phases: analyze, design, develop, implement and control (<a href="${IPISD}">ERIC, Branson, 1975</a>). SAM, the Successive Approximation Model, was created by Michael Allen as an iterative alternative to ADDIE (<a href="${SAM}">Allen Interactions</a>). Backward design comes from <em>Understanding by Design</em> by Grant Wiggins and Jay McTighe, with three stages: desired results, evidence and learning plan (<a href="${UBD}">McTighe and Wiggins, ASCD, 2012</a>).` },
    { t: "p", html: `In practice teams combine them. ADDIE or SAM runs the calendar and approvals, and competency-based design decides what goes into each module. A side-by-side comparison with a worked example is in our guide to the <a href="/blog/addie-model-vs-competency-based-design">ADDIE model vs competency-based design</a>.` },
    { t: "h2", text: "What changes when you design around competencies?" },
    { t: "p", html: "The starting point changes. Topic-based design starts from a content outline and ends with a test on that outline. Competency-based design starts from what the person has to do at work, in what context and to what standard. Only then does it decide which content is needed to get there." },
    { t: "p", html: `Colombia's Ministry of Education defines a competency as the demonstrated ability to put knowledge, skills and attitudes into action, shown through the achievement of learning outcomes (<a href="${MEN}">MEN, National Qualifications Framework</a>). Three design rules follow from it:` },
    {
      t: "ul",
      items: [
        "A competency is shown through something observable. Seat time does not show it.",
        "Every learning outcome needs evidence that proves it.",
        "Activities exist to prepare that evidence.",
      ],
    },
    { t: "p", html: `Employers read it the same way. In Coursera's 2026 survey, 82% of employers said they value micro-credentials co-designed with industry more, and 88% of graduates preferred project-based micro-credentials over content-only ones (<a href="${COURSERA}">Coursera, 2026</a>). These are stated perceptions across seven countries, including the US, and they line up with the method.` },
    {
      t: "stats",
      items: [
        { value: "82%", label: "of employers value micro-credentials co-designed with industry more", source: "Coursera, Micro-Credentials Impact Report 2026", href: COURSERA },
        { value: "88%", label: "of graduates prefer project-based micro-credentials", source: "Coursera, Micro-Credentials Impact Report 2026", href: COURSERA },
      ],
    },
    { t: "h2", text: "How do you move from a competency to evidence?" },
    { t: "h3", text: "The competency and its performance context" },
    { t: "p", html: "Write the competency as job performance, with its context. For example: \"Analyzes operational data to support business decisions.\" Before going further, the designer confirms four things with the client: who the audience is and what they already know, how many hours the program has, what format it uses and which business result should move. If any of those is missing, ask. Designing on an assumption means rewriting the outcomes later." },
    { t: "h3", text: "Learning outcomes for knowing, doing and being" },
    { t: "p", html: "Each competency breaks down into learning outcomes in three domains. merahki.ai labels them RAEC (knowing what), RAEH (knowing how) and RAEAV (being), which map to the knowledge, skills and attitudes columns that most qualifications frameworks use to describe levels." },
    { t: "p", html: "They all follow the same formula: <strong>observable verb + object + connector + condition</strong>. The condition is what lets two assessors grade the same performance the same way." },
    {
      t: "table",
      caption: "The three domains of learning outcomes",
      head: ["Domain", "Question it answers", "Typical verbs", "Example"],
      rows: [
        ["Knowing (RAEC)", "What must the learner be able to explain or tell apart?", "Explains, distinguishes, argues", "Explains which measure best summarizes a data set given how it is distributed"],
        ["Doing (RAEH)", "What must the learner be able to build or solve?", "Builds, designs, prioritizes, solves", "Builds a dashboard that answers a business question with validated data"],
        ["Being (RAEAV)", "What stance must the learner hold while acting?", "Maintains, acts with, upholds", "Communicates findings while stating the limits of the data"],
      ],
    },
    { t: "p", html: "Some verbs don't work because they describe mental states nobody can observe: know, understand, grasp, become familiar with, internalize, appreciate. \"Understand data analysis\" says nothing about what the learner must do to pass. \"Explains which measure best summarizes a data set\" does." },
    { t: "p", html: "Quantity has a rule too. For a 16 to 30 hour program, the merahki.ai method uses 4 to 6 knowing outcomes, 4 to 6 doing outcomes and 2 to 4 being outcomes. Within each domain the weights add up to 100, and no outcome weighs less than 10 or more than 40. A module that touches no being outcome is probably just delivering content." },
    { t: "h3", text: "Evidence and rubrics" },
    { t: "p", html: "Evidence is the product that demonstrates a learning outcome. To accept it, the designer asks whether a professional would produce it on the job, under the same conditions. A dashboard that answers a real question from the team passes. A quiz about what a dashboard is does not." },
    { t: "p", html: "Each module gets one piece of evidence that covers several outcomes at once, and the last module's evidence pulls the earlier ones together. The rubric describes observable performance levels for each criterion. If a criterion says \"good analysis,\" two assessors will grade it differently. If it says \"states at least two limits of the data and explains how they affect the decision,\" they will grade it the same." },
    { t: "h3", text: "Activities that produce the evidence" },
    { t: "p", html: "Each activity practices a piece of the evidence that comes next, so the assessment never surprises the learner. Practice follows an order: first on a shared case the whole group works on, then on each learner's own case. That way people carry what they learned into their job before the course ends." },
    { t: "p", html: "The final check on the design is a traceability matrix. Every outcome has evidence, every piece of evidence has activities that prepare it, no activity is orphaned and no outcome is practiced only once." },
    { t: "h2", text: "Worked example: a data analytics module" },
    { t: "p", html: "Sample data: a 32-hour online micro-credential over 8 weeks for 40 analysts at a financial services company. The target business result is closing the monthly report in 3 days instead of 5. This is module 3 of the program." },
    {
      t: "table",
      caption: "Module 3, \"Dashboards that answer questions\" (sample data)",
      head: ["Element", "Design content"],
      rows: [
        ["Competency", "Analyzes operational data to support business decisions"],
        ["Knowing (RAEC)", "Explains which measure best summarizes a data set given how it is distributed"],
        ["Doing (RAEH)", "Builds a dashboard that answers a business question, validating the data before analyzing it"],
        ["Being (RAEAV)", "Communicates findings while stating the limits of the data"],
        ["Evidence", "A dashboard for the learner's own monthly close, with the business question, the validated source and a note on limits"],
        ["One rubric criterion", "Top level: the dashboard answers the question on a single screen, the source is validated and the note states at least two limits and their effect on the decision"],
        ["Activities", "Guided critique of a poorly built dashboard (shared case), building one in pairs with sample data, and a version with the learner's own data reviewed by a peer"],
        ["Expected on-the-job behavior", "Presents the monthly close with a dashboard"],
      ],
    },
    { t: "p", html: "The expected behavior and the business result were defined before the modules. That is what makes it possible to measure later whether the program worked." },
    { t: "h2", text: "How do you align a program with a qualifications framework or occupational standard?" },
    { t: "p", html: "Most countries have two kinds of public reference. A qualifications framework sorts qualifications into levels described by knowledge, skills and attitudes. An occupational classification describes the jobs in the labor market. Using them gives outcomes a level and a vocabulary that employers and accreditors recognize." },
    { t: "p", html: `merahki.ai works mostly in Colombia, where those references are the National Qualifications Framework (MNC), with eight levels that guide curriculum design without setting content (<a href="${MEN}">MEN</a>), and the CUOC occupational classification, maintained by the national statistics office DANE and adapted from the ILO's international classification of occupations (<a href="${DANE}">DANE</a>). The steps carry over to any country:` },
    {
      t: "ol",
      items: [
        "Find the audience's occupation in the occupational classification and read its tasks.",
        "Check whether a qualification in the framework matches the competency.",
        "Use the framework level to calibrate verbs. At basic levels learners identify and apply. At intermediate levels they explain, design and solve. At advanced levels they argue, integrate and formulate.",
        "Record the code you used, or the reason it does not apply.",
      ],
    },
    { t: "p", html: "Alignment guides the design and gives everyone a shared language. It should never be forced. A 10-hour course or an internal program on a proprietary system may have no matching qualification, and that gets documented." },
    { t: "h2", text: "How do you plan measurement from Kirkpatrick Level 4?" },
    { t: "p", html: `The Kirkpatrick Model evaluates a program on four levels: reaction, learning, on-the-job behavior and organizational results. Kirkpatrick Partners says every evaluation should start with Level 4, Results (<a href="${KIRKPATRICK}">Kirkpatrick Partners</a>). In competency-based design that sets a clear order: the business result defines the behaviors, the behaviors define the learning outcomes and the learning outcomes define the activities.` },
    {
      t: "table",
      caption: "What each phase of the merahki model does with the Kirkpatrick levels",
      head: ["merahki model phase", "Kirkpatrick level"],
      rows: [
        ["1. Planning", "Plans Level 4: the business result"],
        ["2. Design", "Plans Levels 3 and 2: behaviors and learning outcomes"],
        ["3. Production", "Plans Level 1: the learner experience"],
        ["4. Delivery", "Measures Level 1"],
        ["5. Credential", "Measures Level 2"],
        ["6. Skills map", "Measures Level 3"],
        ["7. Results", "Measures Level 4"],
      ],
    },
    { t: "p", html: "Manager follow-up on behaviors and tracking of the business metric are agreed in the proposal. Left for the end, they almost never have a baseline to compare against." },
    { t: "cta", html: "If you want to design a competency-based program or audit one you already run, tell us who it is for and which result it has to move." },
    { t: "h2", text: "Checklist to audit a competency-based program" },
    { t: "p", html: "Use these questions on your own program or one you inherited. Every no points to a specific fix." },
    {
      t: "ol",
      items: [
        "Does the competency describe job performance, with its context?",
        "Does each learning outcome have the learner as subject, an observable verb and a condition?",
        "Are all three domains present: knowing, doing and being?",
        "Does each outcome have evidence, and each piece of evidence a rubric with observable levels?",
        "Does each piece of evidence have activities that practiced the same piece first?",
        "Is there practice on a shared case and transfer to the learner's own case?",
        "Does the final evidence pull together the earlier modules?",
        "Were the expected behavior and the business metric defined before the first module?",
      ],
    },
    { t: "p", html: `At merahki.ai this review runs on a scored rubric, the same one we apply to our own designs. Our <a href="/methodology">methodology</a> describes the full process, and the <a href="/certification">certification with verifiable credentials</a> page explains how a program designed this way ends in a credential issued with POK.` },
  ],
  faq: [
    { q: "What is instructional design?", a: "It is the process of planning a training program so people reach a concrete result. It defines what learners will be able to do at the end, how they practice it and what evidence proves it." },
    { q: "What are the most common instructional design models?", a: "ADDIE and SAM, which organize the phases of the project, and backward design and competency-based design, which organize content around the expected result. Most teams combine one model from each group." },
    { q: "What is competency-based instructional design?", a: "It is a design approach that starts from what a person must demonstrate on the job and derives learning outcomes, evidence, rubrics and activities from it. Content gets included because the competency requires it." },
    { q: "How do you write a learning outcome?", a: "Use an observable verb, an object, a connector and a condition, with the learner as subject. For example: \"Builds a dashboard that answers a business question with validated data.\" Avoid verbs like understand or know, which nobody can observe." },
    { q: "How is competency-based design different from ADDIE?", a: "ADDIE organizes the project into phases. Competency-based design decides what goes into those phases, starting from job performance. They work best together." },
  ],
  sources: [
    { title: "Definición del MNC y términos relacionados (National Qualifications Framework definition and glossary)", publisher: "Colombian Ministry of Education (Colombia Aprende)", url: MEN },
    { title: "Clasificación Única de Ocupaciones para Colombia (CUOC)", publisher: "DANE", url: DANE },
    { title: "Interservice Procedures for Instructional Systems Development: Executive Summary and Model (Branson, R. K.)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122022)", url: IPISD, date: "1975" },
    { title: "Understanding by Design Framework (McTighe, J. and Wiggins, G.)", publisher: "ASCD", url: UBD, date: "2012" },
    { title: "SAM: the Successive Approximation Model", publisher: "Allen Interactions", url: SAM },
    { title: "The Kirkpatrick Model", publisher: "Kirkpatrick Partners", url: KIRKPATRICK },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Survey fielded February and March 2026 in seven countries, p. 13. Stated perceptions." },
  ],
  related: ["addie-model-vs-competency-based-design", "how-to-design-a-micro-credential", "kirkpatrick-model-training-impact", "custom-elearning-development-guide"],
};
