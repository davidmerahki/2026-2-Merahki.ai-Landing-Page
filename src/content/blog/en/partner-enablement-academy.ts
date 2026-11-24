import type { Articulo } from "../types";

const PARTNER_ED = "https://www.intellum.com/resources/blog/what-is-partner-education";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const CERTIFICATION = "https://www.intellum.com/resources/blog/certification-best-practices";

export const articulo: Articulo = {
  slug: "partner-enablement-academy",
  lang: "en",
  altSlug: "academia-de-partners-formacion-de-distribuidores",
  title: "Partner enablement academy: how a company trains and certifies its resellers and channel partners to sell and implement better",
  seoTitle: "Partner enablement: how to train and certify your channel",
  description: "What a partner academy is, which learning paths and certifications it includes by partner tier, and which metrics connect channel training to sales.",
  kicker: "Partner enablement",
  keywords: [
    "partner enablement",
    "partner academy",
    "channel partner training",
    "partner certification program",
    "reseller training",
    "partner education",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "A <strong>partner academy</strong> is the program a company uses to train and certify the resellers, integrators, and partners who sell, implement, or support its product.",
    "Partner enablement is everything a vendor gives its channel (training, sales content, tools, and incentives). The academy is the training and certification piece.",
    "Learning paths are designed by partner type and role (sell, implement, support), and certification connects to the tiers of the partner program.",
    "According to Intellum, only 33% of companies had a partner education program in 2023. In its 2026 survey, 46.8% of education teams train partners.",
    "Measure it with time to first deal for new partners, implementations without escalation, channel tickets, and sales from certified vs. uncertified partners.",
  ],
  body: [
    {
      t: "p",
      html: "A <strong>partner academy</strong> is the program a company uses to train and certify the resellers, VARs, system integrators, and other partners who sell, implement, or support its product. The goal is a channel that pitches with the right message, implements without errors, and leans less on the vendor's own team.",
    },
    {
      t: "p",
      html: "Most resellers carry several brands, and they push hardest on the one they can explain and implement with the least effort. A partner academy is the structured way to make that brand yours. This guide covers what an academy includes, how to design paths and certification by partner tier, how it connects to your PRM and CRM, and which metrics tie it to revenue.",
    },
    { t: "h2", text: "Partner enablement vs. partner academy vs. partner program" },
    {
      t: "table",
      head: ["Concept", "What it includes", "Who leads it"],
      rows: [
        ["Partner enablement", "Training, sales content, sales tools, partner portal, incentives, and market development funds", "Channel or alliances, with marketing and product"],
        ["Partner academy", "Learning paths by partner type and tier, assessment, certification, and recertification", "Education or channel, with an instructional design team"],
        ["Partner program", "Tiers (for example registered, silver, and gold), requirements, benefits, and margins", "Channel"],
      ],
      caption: "The academy feeds the partner program: certification is one of the requirements to move up a tier.",
    },
    {
      t: "p",
      html: "Partner training is less common than employee or customer training. Intellum, a learning software vendor, has measured it twice with different samples.",
    },
    {
      t: "stats",
      items: [
        { value: "33%", label: "of companies had a partner education program in place in 2023", source: "Intellum, What is Partner Education? (2023), citing its State of Education Initiative Ownership report", href: PARTNER_ED },
        { value: "46.8%", label: "of education teams surveyed in 2026 train partners (63.1% train customers)", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "54%", label: "of companies with a scalable partner education initiative report improved partner success", source: "Intellum, What is Partner Education? (2023)", href: PARTNER_ED },
      ],
    },
    {
      t: "p",
      html: "The first two figures aren't a time series, since they come from different surveys. What they do show is that in both samples, fewer than half of organizations train their channel.",
    },
    { t: "h2", text: "Learning paths by partner type and role" },
    {
      t: "p",
      html: "A single partner has people who sell, people who do presales, and people who implement. So paths are designed by role within the partner, and each person takes their own. Every path starts from the competency: what that person must be able to do with your product, which learning outcomes show it, and which evidence proves it.",
    },
    {
      t: "table",
      head: ["Partner type or role", "What they need to do", "Typical path", "Evidence"],
      rows: [
        ["Reseller or VAR", "Explain the value, qualify opportunities, and quote", "Product and value proposition, use cases by industry, sales process, and deal registration", "A sales pitch scored with a rubric"],
        ["System integrator or implementer", "Install, configure, and integrate without errors", "Architecture, step-by-step implementation, integrations, and hard cases", "A sandbox implementation reviewed by an expert"],
        ["Support or service partner", "Diagnose and resolve end-customer incidents", "Diagnosis, resolution procedures, and escalation rules", "Simulated cases resolved within the agreed time"],
        ["Referral partner or consultant", "Spot when the product fits and introduce the vendor", "Problems it solves, ideal customer profile, and referral process", "One qualified customer case"],
      ],
    },
    {
      t: "p",
      html: "The temptation is one path for the whole channel. Shannon Howard puts it in one line in <a href=\"" + CERTIFICATION + "\">Intellum's certification guide</a>.",
    },
    {
      t: "quote",
      text: "If it's 'for everyone,' it's actually for no one.",
      cite: "Shannon Howard, Intellum",
      href: CERTIFICATION,
    },
    { t: "h2", text: "Partner certification and partner program tiers" },
    {
      t: "p",
      html: "The same Intellum guide, built on Meta Blueprint's experience, raises two design decisions. First, whether a certification validates a full role or a skill that transfers across roles. Second, the level of rigor. A high-stakes certification has a proctored exam and a cut score set by experts. A low-stakes micro-credential launches faster and is easier to maintain. You can start with micro-credentials and raise the rigor as the program matures.",
    },
    {
      t: "ul",
      items: [
        "<strong>Each tier requires specific certifications by role.</strong> For example, gold tier requires a minimum number of people certified in implementation. Course hours don't count as a requirement.",
        "<strong>The credential belongs to the person, and the tier belongs to the partner company.</strong> If a certified engineer leaves, both the partner and the vendor know it.",
        "<strong>Certification gets renewed with the product.</strong> According to Intellum, Meta Blueprint reviews the job tasks its exams assess every year.",
        "<strong>The credential is verifiable.</strong> End customers can check that the person implementing their system is certified, which turns certification into a selling point for the partner.",
      ],
    },
    {
      t: "p",
      html: "At merahki we issue credentials with POK, our partner for verifiable credential infrastructure and skills intelligence, on the Open Badges 3.0 standard. Details are on our <a href=\"/certification\">certification with verifiable credentials</a> page.",
    },
    { t: "h2", text: "Connecting the partner academy to your PRM and CRM" },
    {
      t: "p",
      html: "The PRM (partner relationship management) is where the vendor manages its partners: tiers, registered deals, benefits. The academy has to talk to it and to the CRM, or the partner program ends up running on spreadsheets.",
    },
    {
      t: "ol",
      items: [
        "The partner registers its people, and each person signs into the academy with their own account, linked to the partner company.",
        "Every completion and every credential lands on the partner record in the PRM, and the partner's tier updates from that data.",
        "The CRM receives which partners and which people are certified, so you can compare their deals, implementations, and customer renewals.",
        "Each partner's admin sees their team's progress without asking the vendor for a report.",
      ],
    },
    { t: "h2", text: "Partner enablement metrics" },
    {
      t: "table",
      head: ["Metric", "What it shows", "Where the data comes from"],
      rows: [
        ["Time to first deal for a new partner", "How fast the partner becomes productive", "CRM or PRM"],
        ["Certified people per partner and per role", "Training coverage", "LMS"],
        ["Implementations without escalation to the vendor", "Technical quality of the channel", "Help desk"],
        ["Channel tickets to the vendor", "Cost of supporting the channel", "Help desk"],
        ["Sales and renewals from certified vs. uncertified partners", "Revenue impact", "CRM"],
        ["Satisfaction of end customers served by the partner", "Customer experience", "Survey"],
      ],
    },
    {
      t: "p",
      html: "One caution when comparing. The best partners tend to certify more, so a difference in sales may come from the partner rather than the training. A fair comparison looks at partners of similar size, tier, and tenure, with the metric measured before and after the path.",
    },
    {
      t: "callout",
      title: "Agree on the channel metric before designing the path",
      html: "If the problem is implementations that end in escalation, the first path is for implementers and the metric is the escalation rate. If the problem is that the channel isn't selling a new product line, the first path is a sales path and the metric is time to first deal on that line.",
    },
    { t: "h2", text: "Partner academies for channels in Latin America" },
    {
      t: "p",
      html: "If your channel extends into Latin America, four conditions change the design.",
    },
    {
      t: "ul",
      items: [
        "<strong>Several countries in one channel.</strong> A vendor with partners in Colombia, Mexico, Peru, and Chile needs native Spanish content with each market's terms, regulations, and cases, plus Portuguese for Brazil.",
        "<strong>Partner staff turnover.</strong> The certified rep moves to another company and someone new arrives. The onboarding path has to work on its own every time.",
        "<strong>Little time to learn.</strong> Partner staff learn between site visits and quotes. Short lessons, mobile access, and brief live sessions work better than long courses.",
        "<strong>Competition for partner attention.</strong> Other vendors train them too. The academy partners use is the one that helps with this week's deal.",
      ],
    },
    { t: "h2", text: "How merahki builds partner academies" },
    {
      t: "p",
      html: "merahki designs, builds, runs, and measures partner academies for companies that sell through resellers and integrators. We define the metric and the partner types with your channel team, design competency-based paths with your product experts, produce the content, run the academy on the merahki.ai LMS, issue credentials with POK, and report by partner and by tier.",
    },
    {
      t: "p",
      html: "Since partners often implement for the end customer, we design the partner academy together with the customer academy. Learn more on our <a href=\"/partner-academies\">partner academies</a> and <a href=\"/customer-education\">customer education</a> pages.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "What is partner enablement?",
      a: "Partner enablement is everything a vendor gives its channel so partners can sell and implement its product: training, sales content, sales tools, a partner portal, and incentives. The partner academy is the training and certification part of partner enablement.",
    },
    {
      q: "What is a partner academy?",
      a: "It is the program a company uses to train and certify its resellers, integrators, and partners. It has paths by partner type, evidence-based assessments, and credentials tied to the tiers of the partner program.",
    },
    {
      q: "What is the difference between a partner academy and a customer academy?",
      a: "A customer academy teaches people to use the product to reach an outcome. A partner academy teaches people to sell it, implement it, and support it for others. The two are linked, because a partner who implements poorly passes a bad experience on to the customer.",
    },
    {
      q: "Who should own partner education?",
      a: "It depends on the company, but it needs a clear owner. In Intellum's 2023 report, the education team owned it in 35% of cases, HR in 32%, and 13% shared it across teams. In practice, the channel team defines what's needed and an instructional design team builds and runs the academy.",
    },
    {
      q: "Should you charge partners for training?",
      a: "Core training is usually free, because the vendor wins when the partner sells. Some companies charge for advanced certifications or proctored exams to recover costs and add perceived value. What matters is that cost doesn't slow down new partners.",
    },
    {
      q: "How often should partners recertify?",
      a: "Whenever the product changes enough that the previous certification is out of date. You can also set a validity period, such as one year. According to Intellum, Meta Blueprint reviews the job tasks its exams assess every year.",
    },
  ],
  sources: [
    {
      title: "What is Partner Education?",
      publisher: "Intellum (Robyn Hazelton)",
      url: PARTNER_ED,
      date: "2023-06-27",
      note: "Cites Intellum's State of Education Initiative Ownership report (2023)",
    },
    { title: "The 2026 State of Education-Led Growth Report", publisher: "Intellum Research", url: ELG2026, date: "2026-04", note: "Survey of 190 education leaders, mostly US-based" },
    {
      title: "Building Certifications That Actually Matter: A Practical Guide for Education Leaders",
      publisher: "Intellum (Shannon Howard)",
      url: CERTIFICATION,
      date: "2025-10-15",
      note: "Based on Meta Blueprint's experience",
    },
  ],
  related: [
    "customer-education-program-guide",
    "verifiable-digital-credentials-education",
    "corporate-university-how-to-build",
    "kirkpatrick-model-training-impact",
    "micro-credentials-vs-certificates",
  ],
};
