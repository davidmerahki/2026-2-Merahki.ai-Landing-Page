import type { Articulo } from "../types";

const INTELLUM_MAIN = "https://www.intellum.com/resources/blog/your-academy-is-invisible-to-ai";
const INTELLUM_READY = "https://www.intellum.com/resources/blog/is-your-learning-content-ready-for-ai";
const STANFORD = "https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf";
const TRAINING_MAG = "https://trainingmag.com/2025-training-industry-report/";
const GOOGLE_AI = "https://developers.google.com/search/docs/appearance/ai-features";
const GOOGLE_2025 = "https://developers.google.com/search/blog/2025/06/simplifying-search-results";
const SCHEMA_COURSE = "https://schema.org/Course";
const WCAG_CAPTIONS = "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html";

export const articulo: Articulo = {
  slug: "learning-content-ready-for-ai",
  lang: "en",
  altSlug: "contenido-de-formacion-listo-para-la-ia",
  title:
    "AI-ready learning content: how universities and companies build online courses that learners, AI search and AI assistants can all use",
  seoTitle: "AI-ready learning content: how to build courses for AI",
  description:
    "How to build online courses that work for learners and for AI search and assistants: accessible, structured, searchable, modular content tagged by skill.",
  kicker: "Course development and AI",
  keywords: [
    "AI-ready learning content",
    "learning content for AI",
    "custom elearning development",
    "modular learning content",
    "competency-based online course",
    "AI search for training content",
  ],
  published: "2026-11-24",
  readingMinutes: 5,
  summary: [
    "<strong>AI-ready learning content</strong> is training material that an AI search engine, assistant or tutor can read, understand in parts and use to answer a specific question.",
    "Intellum boils it down to four traits: accessible, structured, searchable and modular. A course locked in a SCORM package or in videos without transcripts meets none of them outside its LMS.",
    "Competency-based design already gives AI the structure it needs: competency, learning outcome, lesson and asset, with tags that carry down the chain.",
    "Google says there are no extra requirements or special markup for AI Overviews. It asks for text content, structured data that matches what is visible and solid internal links.",
    "No one can guarantee a course will show up in an AI answer. What you can get is content that learners find faster and that other systems can reuse.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>AI-ready learning content</strong> is training material that an AI search engine, assistant or tutor can read, understand piece by piece and use to answer a specific question, without the learner having to sit through the whole course. In practice, that means content that is accessible, structured, searchable and modular.",
    },
    {
      t: "p",
      html: `This article adapts two Intellum posts: <a href="${INTELLUM_MAIN}">"Your Academy is Invisible to AI"</a> by Dr. Anderson Campbell (August 2026) and <a href="${INTELLUM_READY}">"Is Your Learning Content Ready for AI?"</a> by Shannon Howard (April 2026). We add merahki's angle: the production decisions inside a competency-based course development project that make the result work for two readers, the person and the machine.`,
    },
    { t: "h2", text: "Why so much training content is invisible to AI" },
    {
      t: "p",
      html: "Campbell starts from a paradox. Learning and development went digital years ago, yet a lot of that content sits in formats AI can't read: SCORM packages, locked files, videos with no transcript and pages behind a login. Meanwhile, AI search is turning into a primary research habit, the way organic search was a decade ago.",
    },
    {
      t: "stats",
      items: [
        { value: "~40x", label: "growth in global corporate AI investment from 2013 to 2025", source: "Stanford HAI, AI Index Report 2026, ch. 4", href: STANFORD },
        { value: "28%", label: "of US corporate training hours were delivered in a classroom in 2025", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
        { value: "89%", label: "of those organizations use a learning management system", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
      ],
    },
    {
      t: "p",
      html: "Most training already lives in digital systems. Living in an LMS doesn't make it readable, though. A SCORM course runs fine inside the platform and is a sealed box to every other system.",
    },
    {
      t: "quote",
      text: "An AI summary will never replace long-form education.",
      cite: "Dr. Anderson Campbell, Intellum (2026)",
      href: INTELLUM_MAIN,
    },
    {
      t: "p",
      html: "We agree. So the goal is to make every piece of a course easy to find, understand and reuse: by the employee who needs an answer in the middle of a task, by the AI tutor inside the platform and by the search engine that reads the public program page.",
    },
    { t: "h2", text: "The four traits of AI-ready learning content" },
    {
      t: "p",
      html: "Howard offers four questions for auditing a training library. Here is how each one turns into a course development decision:",
    },
    {
      t: "table",
      head: ["Trait", "Question", "What to do during development"],
      rows: [
        ["Accessible", "Can AI reach the content?", "Pull key knowledge out of sealed packages, publish source text, transcribe every video and decide what is public and what stays behind a login."],
        ["Structured", "Can AI tell what each part is about?", "Use consistent headings, a hierarchy from competency down to lesson and metadata by topic, role and skill."],
        ["Searchable", "Can AI find one specific answer?", "Index by lesson and by question, with titles that say what each piece answers, plus a glossary."],
        ["Modular", "Can AI use one part without the rest?", "Split courses into short, self-contained lessons, one per learning outcome, that you can reuse across paths."],
      ],
    },
    {
      t: "p",
      html: "Howard closes with a point we share: the value of AI depends first on the content. Buying an assistant won't fix a messy library.",
    },
    { t: "h2", text: "Competency-based design already gives AI the structure it needs" },
    {
      t: "p",
      html: `In a competency-based course, every asset is born with a place in a hierarchy: the competency, the learning outcome that proves it, the lesson that teaches it and the assets inside the lesson. If you write those tags into the script, every video, reading and activity inherits which skill it belongs to, which outcome it supports, which role it serves and what level it sits at. That is the backbone of our <a href="/methodology">competency-based methodology</a>, which also maps programs to national qualifications frameworks where clients need it.`,
    },
    {
      t: "table",
      head: ["Layer", "Illustrative example: a SaaS customer academy", "Tags it carries"],
      rows: [
        ["Competency", "Set up billing for a new customer account", "Skill, role: account admin"],
        ["Learning outcome", "Configures the billing module to match the customer's plan and tax rules", "Outcome, level, evidence"],
        ["Lesson", "How to turn on automated invoicing", "Topic, product version"],
        ["Assets", "Short video with transcript, step-by-step text guide, hands-on exercise and FAQ", "Format, length, language"],
      ],
    },
    {
      t: "p",
      html: "The same taxonomy serves three readers. It gives the learner clear navigation, tells the AI tutor what to recommend based on what the learner already knows and shows the search engine what each page covers.",
    },
    { t: "h2", text: "Checklist: building a course for people and for AI" },
    {
      t: "ol",
      items: [
        "<strong>One lesson per learning outcome,</strong> with a title that says what it teaches.",
        "<strong>Tags from the script stage:</strong> competency, outcome, role and level, not after the build.",
        `<strong>Captions and a transcript for every video.</strong> <a href="${WCAG_CAPTIONS}">WCAG 2.2</a> requires captions for prerecorded audio in video at Level A, and a transcript is text any system can read.`,
        "<strong>Open source text</strong> (HTML or Markdown) next to every interactive or SCORM package.",
        "<strong>Clear headings and plain language:</strong> one idea per paragraph, with key terms defined in a glossary.",
        "<strong>An open summary for each module</strong> that says what the learner will be able to do and why it matters.",
        `<strong>A public program page</strong> with <a href="${SCHEMA_COURSE}">schema.org/Course</a> structured data (for example teaches, educationalLevel, timeRequired and educationalCredentialAwarded) that matches the visible text.`,
        "<strong>Descriptive internal links</strong> between lessons, paths and program pages.",
        "<strong>Clear permissions:</strong> what is open, what sits behind registration and what goes into a knowledge base for your assistant. Intellum recommends a knowledge base when content is gated or the information architecture needs heavy work.",
        "<strong>An LMS that exports</strong> content and metadata, so you are never locked into one format.",
      ],
    },
    {
      t: "cta",
      html: "merahki builds competency-based online courses with transcripts, skill tags and open program pages from the first script.",
    },
    { t: "h2", text: "What Google says about showing up in AI answers" },
    {
      t: "p",
      html: `Google's <a href="${GOOGLE_AI}">Search Central guidance on AI features</a> is blunt: there are no additional requirements or special optimizations to appear in AI Overviews or AI Mode, and no special schema.org markup is needed. It asks for the basics. Keep important content in text, make structured data match what is visible, make pages easy to find through internal links and offer a good page experience. It also notes that meeting the requirements doesn't guarantee you will appear.`,
    },
    {
      t: "p",
      html: `One detail for anyone publishing courses. In <a href="${GOOGLE_2025}">June 2025</a> Google said it would phase out several rich results, including Course Info and Learning Video, and that using that structured data outside Google Search isn't affected. Schema.org markup still helps describe a program accurately. It just won't earn a special result on Google.`,
    },
    { t: "h2", text: "What changes for universities and for companies" },
    {
      t: "ul",
      items: [
        `<strong>Universities and continuing education.</strong> The public page for each program and micro-credential is the first thing a prospective student reads, and it is what an assistant reads when someone asks for courses in their field. It should state in plain text which skills it builds, at what level, how long it takes and which credential it awards. That is how we approach <a href="/lifelong-learning">lifelong learning programs for universities</a>.`,
        `<strong>Companies.</strong> A <a href="/customer-education">customer academy</a> built from modular content can feed your support assistant, and internal training can become a source for a copilot that answers employee questions. Either way, the piece that gets retrieved has to make sense on its own. The same logic applies to <a href="/training-certification">employee training and certification</a>.`,
      ],
    },
    { t: "h2", text: "What this work can't guarantee" },
    {
      t: "p",
      html: "No one can promise a course will appear in an AI assistant's answer, and Google says as much. What these practices do deliver is content that learners find faster, that meets accessibility guidelines and that other systems can reuse without a rebuild. AI search is changing fast, so plan to revisit these practices every six months.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "What is AI-ready learning content?",
      a: "It is training content that an AI search engine, assistant or tutor can read, understand in parts and use to answer a specific question. It is accessible, structured, searchable and modular.",
    },
    {
      q: "Is SCORM content usable by AI?",
      a: "It works inside the LMS, but to other systems it is a sealed package. Publish the source text, transcripts and an open summary of each lesson alongside the package.",
    },
    {
      q: "Do I need special markup to appear in AI Overviews?",
      a: `No. According to <a href="${GOOGLE_AI}">Google</a>, there are no extra requirements or special markup. Google asks for text content, structured data that matches the visible page, internal links and a good page experience, and it notes that none of this guarantees you will appear.`,
    },
    {
      q: "Do I have to make my whole course public?",
      a: "No. You can keep program pages, module summaries and FAQs open and leave the full course behind registration. For an internal assistant, a permissioned knowledge base covers gated content.",
    },
    {
      q: "How do you tag a course by competency?",
      a: "Each asset carries its competency, the learning outcome it supports, the role, the level and the format. Define the tags in the script, before production, so every video and reading inherits them.",
    },
  ],
  sources: [
    { title: "Your Academy is Invisible to AI. Here's How to Change That.", publisher: "Intellum (Dr. Anderson Campbell)", url: INTELLUM_MAIN, date: "2026-08-05" },
    { title: "Is Your Learning Content Ready For AI?", publisher: "Intellum (Shannon Howard)", url: INTELLUM_READY, date: "2026-04-09" },
    { title: "AI Index Report 2026, Chapter 4: Economy", publisher: "Stanford HAI", url: STANFORD, date: "2026" },
    { title: "2025 Training Industry Report", publisher: "Training Magazine", url: TRAINING_MAG, date: "2025", note: "US corporations and educational institutions with 100 or more employees" },
    { title: "AI features and your website", publisher: "Google Search Central", url: GOOGLE_AI },
    { title: "Simplifying the search results page", publisher: "Google Search Central Blog", url: GOOGLE_2025, date: "2025-06-12" },
    { title: "Course", publisher: "Schema.org", url: SCHEMA_COURSE },
    { title: "Understanding SC 1.2.2: Captions (Prerecorded)", publisher: "W3C, WCAG 2.2", url: WCAG_CAPTIONS },
  ],
  adaptedFrom: { title: "Your Academy is Invisible to AI. Here's How to Change That.", publisher: "Intellum", url: INTELLUM_MAIN, date: "2026-08-05" },
  related: [
    "custom-elearning-development-guide",
    "competency-based-instructional-design",
    "customer-education-program-guide",
    "micro-credentials-what-they-are-how-to-design",
  ],
};
