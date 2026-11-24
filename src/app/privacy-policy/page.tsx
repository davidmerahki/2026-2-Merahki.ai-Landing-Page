import type { Metadata } from "next";
import Link from "next/link";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Traducción al inglés de la política. La versión que prevalece es la española,
// servida en /es/privacy-policy (src/app/es/privacy-policy/page.tsx).
export const metadata: Metadata = {
  title: "Personal Data Use and Processing Policy",
  description:
    "Personal data use and processing policy of merahki.ai — Online Academies and Learning Ecosystem. Version 1.0, May 2026.",
  openGraph: {
    title: "Personal Data Use and Processing Policy — merahki.ai",
    description:
      "Learn how merahki.ai protects and processes your personal data in accordance with Colombian law and international standards.",
    url: "https://merahki.ai/privacy-policy",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/privacy-policy",
    languages: {
      es: "https://merahki.ai/es/privacy-policy",
      "en-US": "https://merahki.ai/privacy-policy",
      "x-default": "https://merahki.ai/privacy-policy",
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <GlowBackground
        indigoPosition={{ x: "25%", y: "30%" }}
        rustPosition={{ x: "75%", y: "70%" }}
      />

      <section className="relative pt-32 pb-24 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection delay={0.1}>
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm text-white/50 uppercase tracking-wider">
                merahki.ai
              </p>
              <p className="text-white/60 text-sm">
                Online Academies and Learning Ecosystem
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-8">
                PERSONAL DATA
                <br />
                USE AND PROCESSING
                <br />
                POLICY
              </h1>
              <div className="text-white/50 text-sm space-y-1 mt-6">
                <p>Version 1.0</p>
                <p>May 2026</p>
                <p>Bogotá, D.C. — Colombia</p>
              </div>
              <p className="text-white/50 text-sm mt-6">
                This English version is provided for convenience. If there is
                any difference, the{" "}
                <Link
                  href="/es/privacy-policy"
                  hrefLang="es"
                  className="text-accent-purple hover:underline"
                >
                  Spanish version
                </Link>{" "}
                prevails.
              </p>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-12 text-white/70 leading-relaxed">
            {/* 1. General Principles */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  1. General Principles
                </h2>
                <p>
                  merahki.ai (hereinafter, &quot;merahki.ai,&quot; &quot;the
                  Platform,&quot; or &quot;the Company&quot;), as a technology
                  platform dedicated to the creation, management, and
                  distribution of online academies, courses, and learning
                  programs, guarantees the protection of fundamental rights such
                  as Habeas Data, privacy, intimacy, good name, and freedom of
                  information of all its users, clients, students, instructors,
                  and interested third parties.
                </p>
                <p>
                  All actions relating to the processing of personal data shall
                  be governed by the principles of good faith, legality,
                  informational self-determination, freedom, transparency,
                  security, and confidentiality.
                </p>
              </div>
            </AnimatedSection>

            {/* 2. Identification of the Data Controller */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  2. Identification of the Data Controller
                </h2>
                <p>
                  merahki.ai is a private-law legal entity dedicated to the
                  development and operation of technology solutions for digital
                  education. It operates as an LMS (Learning Management System)
                  platform that enables organizations, educational institutions,
                  companies, and content creators to design, market, and manage
                  learning experiences.
                </p>
                <p className="font-semibold text-white">
                  Contact details of the Data Controller:
                </p>
                <ul className="space-y-2 pl-4">
                  <li>
                    <strong className="text-white">Legal name:</strong>{" "}
                    merahki.ai - M Media SAS
                  </li>
                  <li>
                    <strong className="text-white">
                      NIT (Colombian tax ID):
                    </strong>{" "}
                    901402436
                  </li>
                  <li>
                    <strong className="text-white">
                      Principal place of business:
                    </strong>{" "}
                    Bogotá, D.C., Colombia
                  </li>
                  <li>
                    <strong className="text-white">
                      Email for personal data matters:
                    </strong>{" "}
                    datospersonales@merahki.ai
                  </li>
                  <li>
                    <strong className="text-white">Website:</strong>{" "}
                    <a
                      href="https://merahki.ai"
                      className="text-accent-purple hover:underline"
                    >
                      https://merahki.ai
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 3. Applicable Law */}
            <AnimatedSection delay={0.25}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  3. Applicable Law
                </h2>
                <p>
                  This policy is governed by the Colombian regulations in force
                  on personal data protection, including:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Constitución Política de Colombia (Political Constitution of
                    Colombia), Articles 15 and 20.
                  </li>
                  <li>
                    Ley 1266 de 2008 (Law 1266 of 2008; financial Habeas Data).
                  </li>
                  <li>
                    Ley 1581 de 2012 (Law 1581 of 2012; General Personal Data
                    Protection Regime).
                  </li>
                  <li>Decreto 1377 de 2013 (Decree 1377 of 2013).</li>
                  <li>
                    Decreto Único Reglamentario 1074 de 2015 (Single Regulatory
                    Decree 1074 of 2015).
                  </li>
                  <li>Decreto 090 de 2018 (Decree 090 of 2018).</li>
                  <li>
                    Rulings C-1011 of 2008 and C-748 of 2011 of the Corte
                    Constitucional (Constitutional Court of Colombia).
                  </li>
                  <li>
                    Circular 003 de 2018 (Circular 003 of 2018) of the
                    Superintendencia de Industria y Comercio (SIC,
                    Colombia&apos;s data protection authority).
                  </li>
                  <li>
                    Guidelines and opinions issued by the Superintendencia de
                    Industria y Comercio.
                  </li>
                </ul>
                <p>
                  In addition, merahki.ai will observe the provisions of the
                  European Union General Data Protection Regulation (GDPR) when
                  services are provided to users located in the European
                  Economic Area, as well as the applicable local regulations of
                  each jurisdiction where its clients operate.
                </p>
              </div>
            </AnimatedSection>

            {/* 4. Scope */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">4. Scope</h2>
                <p>
                  This policy applies to all natural persons whose personal data
                  is collected, stored, used, processed, circulated, or deleted
                  by merahki.ai in the course of providing its technology and
                  educational services, including but not limited to:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Administrators and operators of academies created on the
                    platform.
                  </li>
                  <li>
                    Students and learners enrolled in courses, programs, and
                    learning paths.
                  </li>
                  <li>Instructors, tutors, and live session facilitators.</li>
                  <li>
                    Users of branded mobile apps built with the Mobile App
                    Builder.
                  </li>
                  <li>
                    Visitors to the website and to academy sites built with the
                    Website Creation Service.
                  </li>
                  <li>
                    People who take part in surveys, forms, and assessments
                    created with the Survey Builder.
                  </li>
                  <li>
                    Partners, affiliates, and third parties integrated through
                    APIs, webhooks, or native integrations.
                  </li>
                  <li>
                    Prospects and leads captured through registration forms,
                    landing pages, and educational campaigns.
                  </li>
                </ul>
                <p>
                  This policy applies both inside and outside Colombian
                  territory, whenever merahki.ai acts as Data Controller or Data
                  Processor of personal data.
                </p>
              </div>
            </AnimatedSection>

            {/* 5. Definitions */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  5. Definitions
                </h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-white">Authorization:</strong>{" "}
                    Prior, express, and informed consent of the Data Subject to
                    carry out the Processing of their personal data.
                  </li>
                  <li>
                    <strong className="text-white">Database:</strong> An
                    organized set of personal data subject to Processing,
                    including the databases managed on the merahki.ai platform
                    and its integrations with CRM systems, payment gateways, and
                    marketing tools.
                  </li>
                  <li>
                    <strong className="text-white">Personal data:</strong> Any
                    information linked or that may be associated with one or more
                    identified or identifiable natural persons.
                  </li>
                  <li>
                    <strong className="text-white">Sensitive data:</strong> Data
                    that affects the Data Subject&apos;s intimacy or whose
                    improper use may lead to discrimination, such as health data,
                    political orientation, religious beliefs, biometric data,
                    sex life, and racial or ethnic origin, among others.
                  </li>
                  <li>
                    <strong className="text-white">
                      Data Processor (Encargado del Tratamiento):
                    </strong>{" "}
                    A natural or legal person who, alone or jointly with others,
                    carries out the Processing of personal data on behalf of the
                    Controller. In the context of merahki.ai, this includes cloud
                    infrastructure providers, payment gateways (Stripe, PayPal),
                    video conferencing platforms (Zoom, Microsoft Teams, Webex),
                    email marketing tools (Mailchimp, ActiveCampaign), CRM
                    (HubSpot), and analytics services (Google Analytics,
                    MixPanel).
                  </li>
                  <li>
                    <strong className="text-white">
                      Data Controller (Responsable del Tratamiento):
                    </strong>{" "}
                    merahki.ai, which makes decisions about the databases and the
                    processing of personal data.
                  </li>
                  <li>
                    <strong className="text-white">
                      Data Subject (Titular):
                    </strong>{" "}
                    The natural person whose personal data is subject to
                    Processing.
                  </li>
                  <li>
                    <strong className="text-white">Processing:</strong> Any
                    operation or set of operations on personal data, such as
                    collection, storage, use, circulation, analysis through
                    artificial intelligence, or deletion.
                  </li>
                  <li>
                    <strong className="text-white">Platform:</strong> The set of
                    tools, services, and features offered by merahki.ai,
                    including the LMS, the Mobile App Builder, the Website
                    Builder, the Interactive Video Player, the AI Assistant, the
                    Survey Builder, live sessions, the Analytics &amp; Reports
                    dashboard, and third-party integrations.
                  </li>
                  <li>
                    <strong className="text-white">Academy:</strong> A digital
                    learning space created and managed by a merahki.ai client
                    using the platform&apos;s tools.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 6. Specific Principles */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  6. Specific Principles
                </h2>
                <p>
                  merahki.ai will apply the following principles in the
                  collection, handling, use, processing, storage, and exchange of
                  personal data:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">
                      Principle of legality:
                    </strong>{" "}
                    The provisions in force governing the processing of personal
                    data and other related fundamental rights will be applied.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of freedom:
                    </strong>{" "}
                    Personal data may only be processed with the prior, express,
                    and informed consent of the Data Subject, or in the absence
                    of a legal or judicial mandate that waives consent.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of purpose:
                    </strong>{" "}
                    The processing of personal data will be subject to a
                    legitimate purpose, which must be disclosed to the
                    respective Data Subject.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of accuracy or quality:
                    </strong>{" "}
                    Information subject to processing must be truthful,
                    complete, accurate, up to date, verifiable, and
                    understandable.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of transparency:
                    </strong>{" "}
                    The Data Subject&apos;s right to obtain from merahki.ai, at
                    any time and without restriction, information about the
                    existence of any type of personal data of interest to them
                    will be guaranteed.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of restricted access and circulation:
                    </strong>{" "}
                    Personal data will not be made available in mass media,
                    unless access is technically controllable.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of security:
                    </strong>{" "}
                    Data will be protected through technological measures,
                    encryption protocols, and administrative measures that
                    guarantee its integrity and confidentiality.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principle of confidentiality:
                    </strong>{" "}
                    All persons who administer, handle, or have access to
                    personal data undertake to maintain the confidentiality of
                    the information.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 7. Data Processing and Purposes */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  7. Data Processing and Purposes
                </h2>
                <p>
                  The personal data collected by merahki.ai will be used for the
                  following purposes, classified by type of user:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.1 Academy Administrators (B2B Clients)
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Management of the contractual relationship and provision of
                      platform services.
                    </li>
                    <li>
                      Payment processing and billing through integrated payment
                      gateways (Stripe, PayPal, Shopify).
                    </li>
                    <li>Commercial, technical, and support communications.</li>
                    <li>
                      Generation of analytical reports through the Analytics
                      &amp; Reports dashboard.
                    </li>
                    <li>
                      Provision of business insights generated by the AI
                      Assistant.
                    </li>
                    <li>
                      Integration with CRM tools (HubSpot), email marketing, and
                      analytics.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.2 Students and Learners
                  </h3>
                  <p>
                    merahki.ai collects and processes student data as Data
                    Processor on behalf of the Academy Administrator (Data
                    Controller). The purposes include:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Registration and enrollment in courses, programs, and
                      learning paths.
                    </li>
                    <li>
                      Tracking of learning progress, exam results, survey
                      responses, and participation history.
                    </li>
                    <li>
                      Personalization of adaptive learning experiences through
                      artificial intelligence.
                    </li>
                    <li>
                      Issuance of certificates and digital credentials
                      (Accredible, Credly).
                    </li>
                    <li>
                      Facilitation of live sessions through Zoom, Microsoft
                      Teams, Webex, Google Meet, and Calendly.
                    </li>
                    <li>Delivery of push notifications in branded mobile apps.</li>
                    <li>
                      Automatic generation of subtitles, transcripts, and
                      translations in interactive videos.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.3 Instructors and Facilitators
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>Profile management and assignment of live sessions.</li>
                    <li>
                      Attendance tracking and generation of activity reports.
                    </li>
                    <li>
                      Coordination of sessions through integrations with
                      Calendly.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.4 Prospects and Leads
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Lead capture and qualification through the Survey Builder
                      and registration forms.
                    </li>
                    <li>
                      Audience segmentation and personalization of marketing
                      communications.
                    </li>
                    <li>
                      Campaign tracking through Google Firebase, Facebook
                      Business SDK, UTMs, and Google Analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* 8. Categories of Data Collected */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  8. Categories of Data Collected
                </h2>
                <p>
                  Depending on the features of the platform, merahki.ai may
                  collect the following categories of data:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.1 Identification data
                  </h3>
                  <p>
                    Full name, email address, phone number, country of
                    residence, preferred language, profile photo, and login
                    information (including biometric login in mobile apps and
                    authentication via OpenID, SAML, or SSO).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.2 Learning activity data
                  </h3>
                  <p>
                    Course progress, assessment and exam results, study time,
                    video viewing history (plays, re-watches, drop-offs), social
                    interactions within courses, survey responses, participation
                    in live sessions, attendance, and performance in SCORM and
                    xAPI activities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.3 Transactional and financial data
                  </h3>
                  <p>
                    Course purchase history, subscriptions, purchases within
                    mobile apps (in-app purchases), payment methods processed by
                    Stripe and PayPal (merahki.ai does not store full credit card
                    data), and tax information managed through Stripe Tax and
                    Quaderno.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.4 Browsing and analytics data
                  </h3>
                  <p>
                    IP address, browser and device type, operating system, pages
                    visited, session time, cookies, and behavioral data captured
                    by Google Analytics, Google Tag Manager, Facebook Pixel,
                    MixPanel, Hotjar, Fullstory, Mouseflow, and Fullsession.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.5 Data generated by artificial intelligence
                  </h3>
                  <p>
                    Interactions with the AI Assistant (prompts and responses),
                    automatically generated content (video summaries, subtitles,
                    translations, assessments, course outlines), and business
                    insights generated from the analysis of platform data.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 9. Processing of Sensitive Data */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  9. Processing of Sensitive Data
                </h2>
                <p>
                  merahki.ai does not intentionally request or collect sensitive
                  data. However, in the context of specialized academies (for
                  example, in the health, fitness, or wellness sector), Academy
                  Administrators may set up forms or surveys that collect
                  sensitive information from their students.
                </p>
                <p>In these cases:</p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    The Academy Administrator acts as Data Controller and must
                    obtain explicit authorization from the Data Subject.
                  </li>
                  <li>
                    merahki.ai acts as Data Processor and limits itself to
                    processing such data in accordance with the Controller&apos;s
                    instructions.
                  </li>
                  <li>
                    merahki.ai will apply enhanced security measures to protect
                    sensitive data stored on the platform.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 10. Use of Artificial Intelligence and Automated Processing */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  10. Use of Artificial Intelligence and Automated Processing
                </h2>
                <p>
                  merahki.ai incorporates artificial intelligence features into
                  multiple components of the platform, including:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">AI Assistant:</strong>{" "}
                    Generation of course outlines, assessments, ebooks, and
                    business insights from user data.
                  </li>
                  <li>
                    <strong className="text-white">Adaptive learning:</strong>{" "}
                    Personalization of learning paths based on each
                    student&apos;s progress, style, and pace.
                  </li>
                  <li>
                    <strong className="text-white">Interactive video:</strong>{" "}
                    Automatic generation of subtitles, transcripts, translations,
                    summaries, and tables of contents.
                  </li>
                  <li>
                    <strong className="text-white">AI-powered analytics:</strong>{" "}
                    Automated answers to queries about business performance and
                    learner behavior.
                  </li>
                  <li>
                    <strong className="text-white">
                      AI-powered Survey Builder:
                    </strong>{" "}
                    Guided creation of surveys through dialogue assisted by
                    artificial intelligence.
                  </li>
                </ul>
                <p>
                  Automated processing of data through AI will be carried out
                  under the following principles:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Data used to train or improve AI models will be anonymized or
                    aggregated.
                  </li>
                  <li>
                    The Data Subject will have the right to know of the existence
                    of automated decisions that affect them and to request human
                    intervention.
                  </li>
                  <li>
                    Content generated by AI belongs to the user who created it,
                    in accordance with the platform&apos;s terms of service.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 11. Data Subject Authorization */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  11. Data Subject Authorization
                </h2>
                <p>
                  merahki.ai will obtain the prior, express, and informed
                  authorization of the Data Subject for the processing of their
                  personal data. Such authorization may be granted through:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Acceptance of the terms and conditions when registering on
                    the platform.
                  </li>
                  <li>
                    Checking consent boxes (opt-in) on registration forms.
                  </li>
                  <li>Consent forms set up in the Survey Builder.</li>
                  <li>
                    Acceptance of privacy policies when downloading and using
                    branded mobile apps.
                  </li>
                  <li>
                    Any electronic mechanism that allows it to be subsequently
                    consulted and verified.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">
                  11.1 Cases in which authorization is not required
                </h3>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Information required by a public or administrative entity in
                    the exercise of its legal functions or by court order.
                  </li>
                  <li>Data of a public nature.</li>
                  <li>Cases of medical or health emergency.</li>
                  <li>
                    Processing of information authorized by law for historical,
                    statistical, or scientific purposes.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 12. Rights of Data Subjects */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  12. Rights of Data Subjects
                </h2>
                <p>Data Subjects have the following rights:</p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Access, know, rectify, and update their personal data.
                  </li>
                  <li>Request proof of the authorization granted.</li>
                  <li>
                    Receive information about the use that has been made of their
                    personal data.
                  </li>
                  <li>
                    File complaints with the Superintendencia de Industria y
                    Comercio.
                  </li>
                  <li>Revoke the authorization or request deletion of the data.</li>
                  <li>Access their personal data free of charge.</li>
                  <li>
                    Know of the existence of automated processing and request
                    human intervention in AI-based decisions.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 13. International Transfers and Sharing with Third Parties */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  13. International Transfers and Sharing with Third Parties
                </h2>
                <p>
                  Given the nature of the platform and its ecosystem of more than
                  50 native integrations, personal data may be transferred or
                  transmitted to third parties located inside and outside
                  Colombia, including:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.1 Payment gateways
                  </h3>
                  <p>
                    Stripe, PayPal, and Shopify, for transaction processing.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.2 Video conferencing platforms
                  </h3>
                  <p>
                    Zoom, Microsoft Teams, Webex, Google Meet, and Calendly, to
                    facilitate live sessions and coaching.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.3 Marketing and CRM tools
                  </h3>
                  <p>
                    HubSpot, Mailchimp, ActiveCampaign, Mailerlite, GetResponse,
                    Kit, Moosend, AWeber, and Constant Contact.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.4 Analytics services
                  </h3>
                  <p>
                    Google Analytics, Google Tag Manager, Facebook Pixel,
                    MixPanel, Hotjar, Fullstory, Mouseflow, and Fullsession.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.5 Digital credentials
                  </h3>
                  <p>
                    Accredible and Credly, for the issuance and management of
                    certificates.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.6 Automation platforms
                  </h3>
                  <p>
                    Zapier, Make, Integrately, and Pabbly, through which data may
                    flow to thousands of additional applications configured by
                    the client.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.7 API and Webhooks
                  </h3>
                  <p>
                    Clients who use the merahki.ai extended API and advanced
                    webhooks are responsible for the processing of data that
                    flows into their own systems.
                  </p>
                </div>

                <p>
                  merahki.ai will take the necessary measures so that all third
                  parties are aware of and undertake to observe this policy.
                  International transfers will be carried out in accordance
                  with the applicable legal requirements.
                </p>
              </div>
            </AnimatedSection>

            {/* 14. Information Security */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  14. Information Security
                </h2>
                <p>
                  merahki.ai will adopt technical, human, and administrative
                  measures to protect personal data, including:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Encryption of data in transit (HTTPS/TLS) and at rest.
                  </li>
                  <li>
                    Strong authentication through OpenID, SAML, SSO, and
                    biometric login in mobile apps.
                  </li>
                  <li>
                    Role-based access control for administrators, instructors,
                    and students.
                  </li>
                  <li>
                    Globally distributed infrastructure with a 99.9% uptime SLA.
                  </li>
                  <li>
                    Protection of video content through watermarks and secure
                    hosting.
                  </li>
                  <li>
                    GDPR compliance and encrypted data handling built into every
                    build of the Website Creation Service.
                  </li>
                  <li>
                    Continuous vulnerability monitoring and incident response.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 15. Cookie Policy */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  15. Cookie Policy
                </h2>
                <p>
                  merahki.ai and the academies built on the platform use cookies
                  and similar technologies to:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>Keep user sessions active.</li>
                  <li>Personalize the learning experience.</li>
                  <li>
                    Perform behavior and performance analysis (Google Analytics,
                    Facebook Pixel, MixPanel).
                  </li>
                  <li>
                    Optimize marketing campaigns through Google Firebase and
                    Facebook Business SDK.
                  </li>
                  <li>
                    Track interactions with the mobile app (active users,
                    sessions, performance metrics).
                  </li>
                </ul>
                <p>
                  Data Subjects may manage their cookie preferences through their
                  browser settings or through the mechanisms enabled in the
                  academies (such as the AccessiBe accessibility widget).
                </p>
              </div>
            </AnimatedSection>

            {/* 16. Rights of Children and Adolescents */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  16. Rights of Children and Adolescents
                </h2>
                <p>
                  merahki.ai does not intentionally collect personal data from
                  minors. In the case of academies aimed at underage audiences,
                  the Academy Administrator must ensure that authorization is
                  obtained from their legal representatives and that the
                  prevailing rights of minors are respected, in accordance with
                  the law in force.
                </p>
              </div>
            </AnimatedSection>

            {/* 17. Procedures for Exercising Rights */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  17. Procedures for Exercising Rights
                </h2>
                <p>
                  The Data Subject may exercise their rights of access,
                  rectification, updating, deletion, and revocation through the
                  following channels:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    <strong className="text-white">Email:</strong>{" "}
                    datospersonales@merahki.ai
                  </li>
                  <li>
                    <strong className="text-white">
                      Request form available at:
                    </strong>{" "}
                    <a
                      href="https://merahki.ai/datos-personales"
                      className="text-accent-purple hover:underline"
                    >
                      https://merahki.ai/datos-personales
                    </a>
                  </li>
                </ul>
                <p>
                  The request must include: the Data Subject&apos;s full name,
                  contact details, a description of the right they wish to
                  exercise, supporting documents, and identification number.
                </p>
                <p>
                  merahki.ai will respond to inquiries within a maximum of ten
                  (10) business days and to claims within fifteen (15) business
                  days, in accordance with Ley 1581 de 2012.
                </p>
              </div>
            </AnimatedSection>

            {/* 18. Data Retention and Deletion */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  18. Data Retention and Deletion
                </h2>
                <p>
                  Personal data will be kept for as long as necessary to fulfill
                  the purposes of the processing and the applicable legal
                  obligations. Once the contractual relationship ends or the
                  authorization is revoked, merahki.ai will securely delete the
                  data, unless there is a legal or contractual obligation to
                  retain it.
                </p>
              </div>
            </AnimatedSection>

            {/* 19. Responsibilities of the Academy Administrator */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  19. Responsibilities of the Academy Administrator
                </h2>
                <p>
                  When a client uses merahki.ai to create and operate an
                  academy, that client acts as Data Controller of its
                  students&apos; personal data. In this context, the client
                  undertakes to:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Obtain the necessary authorizations from its students and
                    users.
                  </li>
                  <li>
                    Inform its students of the applicable data processing
                    policy.
                  </li>
                  <li>
                    Use the consent form tools available in the Survey Builder.
                  </li>
                  <li>
                    Properly configure the privacy notices in its academy and
                    mobile app.
                  </li>
                  <li>
                    Not collect sensitive data without the Data Subject&apos;s
                    explicit authorization.
                  </li>
                  <li>
                    Handle requests from its Data Subjects in accordance with the
                    regulations in force.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 20. Changes to this Policy */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  20. Changes to this Policy
                </h2>
                <p>
                  merahki.ai reserves the right to modify this policy at any
                  time. Changes will be communicated to Data Subjects through the
                  platform&apos;s usual communication channels, including email
                  notifications and in-platform notices.
                </p>
              </div>
            </AnimatedSection>

            {/* 21. Effective Date */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  21. Effective Date
                </h2>
                <p>
                  This policy is effective as of May 3, 2026, and will remain in
                  force for as long as merahki.ai continues to operate and
                  process personal data.
                </p>
              </div>
            </AnimatedSection>

            {/* Footer */}
            <AnimatedSection delay={0.1}>
              <div className="border-t border-white/10 pt-10 mt-10 text-center space-y-2">
                <p className="text-white font-semibold">merahki.ai</p>
                <p className="text-white/50 text-sm">
                  ruth@merahki.ai |{" "}
                  <a
                    href="https://merahki.ai"
                    className="text-accent-purple hover:underline"
                  >
                    https://merahki.ai
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
