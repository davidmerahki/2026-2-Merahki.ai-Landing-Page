// Arquitectura del menú (24-nov-2026). Reemplaza el menú de 5 desplegables en lista
// (Funciones, Soluciones, Recursos, Empresa, Industrias), que en pantallas de 768 px
// cortaba opciones y obligaba a desplazarse dentro del menú.
// Pautas: grupos con título y paneles anchos de varias columnas (Nielsen Norman Group, mega menús),
// todo visible sin desplazamiento interno, descripciones de una línea y menos opciones arriba.
import {
  Award, BadgeCheck, BarChart3, BookOpen, Briefcase, Building2, CalendarDays, ClipboardList, Compass,
  FileText, Globe, GraduationCap, Handshake, Layers, LayoutGrid, Mail, MonitorPlay, MousePointerClick,
  PlayCircle, Plug, Presentation, Smartphone, Sparkles, Stethoscope, Trophy, UserRound, Users, Video,
  type LucideIcon,
} from "lucide-react";

export type Lang = "es" | "en";
export interface NavLink { label: string; desc?: string; href: string; icon: LucideIcon; external?: boolean }
export interface NavColumn { title: string; links: NavLink[]; compact?: boolean }
export interface NavFeatured { kicker: string; title: string; text: string; href: string; cta: string }
export interface NavMenu { id: string; label: string; width: number; columns: NavColumn[]; featured?: NavFeatured; footer?: { text: string; href: string; cta: string } }

const MEETING = "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";
export const meetingHref = MEETING;

export const NAV: Record<Lang, NavMenu[]> = {
  es: [
    {
      id: "soluciones", label: "Soluciones", width: 860,
      columns: [
        { title: "Para universidades", links: [
          { label: "Lifelong Learning", desc: "Educación continua que forma a empresas", href: "/es/lifelong-learning", icon: GraduationCap },
          { label: "Microcredenciales", desc: "Rutas apilables con la marca de tu universidad", href: "/es/growth-for-universities", icon: Award },
          { label: "Educación médica", desc: "Formación clínica con evaluación y trazabilidad", href: "/es/medical-education", icon: Stethoscope },
        ] },
        { title: "Para empresas", links: [
          { label: "Formación y certificación", desc: "Programas por rol para tus equipos", href: "/es/training-certification", icon: Briefcase },
          { label: "Customer Education", desc: "Academias que forman a tus clientes", href: "/es/customer-education", icon: Users },
          { label: "Formación de aliados", desc: "Certificación de distribuidores y canales", href: "/es/partner-academies", icon: Handshake },
          { label: "Adopción de producto", desc: "Onboarding que sube el uso del producto", href: "/es/product-adoption", icon: MousePointerClick },
          { label: "Certificación a escala", desc: "Credenciales verificables para miles", href: "/es/certification", icon: BadgeCheck },
        ] },
      ],
      featured: { kicker: "Cómo trabajamos", title: "El merahki model en 7 fases", text: "De la planeación al informe de resultados, con el entregable de cada fase.", href: "/es#recorrido", cta: "Ver las 7 fases" },
    },
    {
      id: "que-hacemos", label: "Qué hacemos", width: 1020,
      columns: [
        { title: "Diseño y producción", links: [
          { label: "Virtualización de cursos", desc: "Del curso presencial a un programa que se mide", href: "/es/virtualizacion-de-cursos", icon: MonitorPlay },
          { label: "Metodología", desc: "Diseño instruccional por competencias", href: "/es/methodology", icon: Compass },
          { label: "Catálogo de contenidos", desc: "55 tipos de actividades, con demos", href: "/es/tipos-de-contenido-interactivo", icon: LayoutGrid },
        ] },
        { title: "Plataforma LMS merahki.ai", compact: true, links: [
          { label: "Cursos flexibles", href: "/es/flexible-courses", icon: Layers },
          { label: "Video interactivo", href: "/es/interactive-video", icon: PlayCircle },
          { label: "Sesiones en vivo", href: "/es/live-sessions", icon: Video },
          { label: "Asistente de IA", href: "/es/ai-assistant", icon: Sparkles },
          { label: "App móvil", href: "/es/mobile-app-builder", icon: Smartphone },
          { label: "Sitio web", href: "/es/website-builder", icon: Globe },
          { label: "Analítica", href: "/es/analytics-reports", icon: BarChart3 },
          { label: "Encuestas", href: "/es/survey-builder", icon: ClipboardList },
          { label: "Integraciones", href: "/es/integrations", icon: Plug },
        ] },
      ],
      featured: { kicker: "Pruébalo", title: "21 demos en vivo", text: "Escenarios ramificados, 360°, realidad aumentada y más, con videos de referencia.", href: "/es/tipos-de-contenido-interactivo", cta: "Abrir el catálogo" },
    },
    {
      id: "recursos", label: "Recursos", width: 860,
      columns: [
        { title: "Aprende", links: [
          { label: "Blog", desc: "Guías sobre microcredenciales y diseño", href: "/es/blog", icon: BookOpen },
          { label: "Reportes y guías", desc: "Investigación sobre Education-Led Growth", href: "/es/reports", icon: FileText },
          { label: "Webinars", desc: "Sesiones con expertos, en inglés", href: "/webinars", icon: Presentation },
          { label: "Eventos", desc: "Dónde encontrarnos", href: "/events", icon: CalendarDays },
        ] },
        { title: "Casos", links: [
          { label: "Casos de estudio", desc: "Resultados con universidades y empresas", href: "/es/case-studies", icon: Trophy },
          { label: "Uniandes × Sanofi", desc: "Educación médica en 8 semanas", href: "/es/case-studies/uniandes-sanofi-microbiota", icon: Stethoscope },
        ] },
      ],
      featured: { kicker: "Guías destacadas", title: "Microcredenciales: qué son y cómo se diseñan", text: "La guía completa para universidades y empresas, con ejemplo paso a paso.", href: "/es/blog/microcredenciales-que-son-como-disenarlas", cta: "Leer la guía" },
    },
    {
      id: "empresa", label: "Empresa", width: 640,
      columns: [
        { title: "merahki.ai", links: [
          { label: "Quiénes somos", desc: "David González, fundador", href: "/es/david-gonzalez", icon: UserRound },
          { label: "Clientes", desc: "36 organizaciones en 7 países", href: "/es#experiencia", icon: Building2 },
          { label: "Trabaja con nosotros", desc: "Vacantes del equipo", href: "/careers", icon: Briefcase },
          { label: "Contacto", desc: "Solicita una cotización a la medida", href: "/es#cotizacion", icon: Mail },
        ] },
      ],
      featured: { kicker: "Conversemos", title: "Agenda 30 minutos con nuestro equipo", text: "Cuéntanos qué programa quieres diseñar, virtualizar o certificar.", href: MEETING, cta: "Agendar reunión" },
    },
  ],
  en: [
    {
      id: "soluciones", label: "Solutions", width: 860,
      columns: [
        { title: "For universities", links: [
          { label: "Lifelong Learning", desc: "Continuing education that trains companies", href: "/lifelong-learning", icon: GraduationCap },
          { label: "Micro-credentials", desc: "Stackable paths under your university brand", href: "/growth-for-universities", icon: Award },
          { label: "Medical education", desc: "Clinical training with assessment and traceability", href: "/medical-education", icon: Stethoscope },
        ] },
        { title: "For companies", links: [
          { label: "Training & certification", desc: "Role-based programs for your teams", href: "/training-certification", icon: Briefcase },
          { label: "Customer Education", desc: "Academies that train your customers", href: "/customer-education", icon: Users },
          { label: "Partner education", desc: "Certify distributors and channels", href: "/partner-academies", icon: Handshake },
          { label: "Product adoption", desc: "Onboarding that drives product usage", href: "/product-adoption", icon: MousePointerClick },
          { label: "Certification at scale", desc: "Verifiable credentials for thousands", href: "/certification", icon: BadgeCheck },
        ] },
      ],
      featured: { kicker: "How we work", title: "The merahki model in 7 phases", text: "From planning to the results report, with the deliverable of each phase.", href: "/#recorrido", cta: "See the 7 phases" },
    },
    {
      id: "que-hacemos", label: "What we do", width: 1020,
      columns: [
        { title: "Design and production", links: [
          { label: "Course virtualization", desc: "From face-to-face course to measurable program", href: "/course-virtualization", icon: MonitorPlay },
          { label: "Methodology", desc: "Competency-based instructional design", href: "/methodology", icon: Compass },
          { label: "Content catalog", desc: "55 activity types, with live demos", href: "/interactive-content-types", icon: LayoutGrid },
        ] },
        { title: "merahki.ai LMS platform", compact: true, links: [
          { label: "Flexible courses", href: "/flexible-courses", icon: Layers },
          { label: "Interactive video", href: "/interactive-video", icon: PlayCircle },
          { label: "Live sessions", href: "/live-sessions", icon: Video },
          { label: "AI assistant", href: "/ai-assistant", icon: Sparkles },
          { label: "Mobile app", href: "/mobile-app-builder", icon: Smartphone },
          { label: "Website", href: "/website-builder", icon: Globe },
          { label: "Analytics", href: "/analytics-reports", icon: BarChart3 },
          { label: "Surveys", href: "/survey-builder", icon: ClipboardList },
          { label: "Integrations", href: "/integrations", icon: Plug },
        ] },
      ],
      featured: { kicker: "Try it", title: "21 live demos", text: "Branching scenarios, 360°, augmented reality and more, with reference videos.", href: "/interactive-content-types", cta: "Open the catalog" },
    },
    {
      id: "recursos", label: "Resources", width: 860,
      columns: [
        { title: "Learn", links: [
          { label: "Blog", desc: "Guides on micro-credentials and design", href: "/blog", icon: BookOpen },
          { label: "Reports & guides", desc: "Education-Led Growth research", href: "/reports", icon: FileText },
          { label: "Webinars", desc: "Live and on-demand expert sessions", href: "/webinars", icon: Presentation },
          { label: "Events", desc: "Where to meet us", href: "/events", icon: CalendarDays },
        ] },
        { title: "Cases", links: [
          { label: "Case studies", desc: "Results with universities and companies", href: "/case-studies", icon: Trophy },
          { label: "Uniandes × Sanofi", desc: "Medical education in 8 weeks", href: "/case-studies/uniandes-sanofi-microbiota", icon: Stethoscope },
        ] },
      ],
      featured: { kicker: "Featured guide", title: "Micro-credentials: what they are and how to design them", text: "The complete guide for universities and companies, with a step-by-step example.", href: "/blog/micro-credentials-what-they-are-how-to-design", cta: "Read the guide" },
    },
    {
      id: "empresa", label: "Company", width: 640,
      columns: [
        { title: "merahki.ai", links: [
          { label: "About us", desc: "David González, founder", href: "/david-gonzalez", icon: UserRound },
          { label: "Clients", desc: "36 organizations in 7 countries", href: "/#experiencia", icon: Building2 },
          { label: "Careers", desc: "Open roles on the team", href: "/careers", icon: Briefcase },
          { label: "Contact", desc: "Request a custom quote", href: "/#cotizacion", icon: Mail },
        ] },
      ],
      featured: { kicker: "Let's talk", title: "Book 30 minutes with our team", text: "Tell us which program you want to design, build online or certify.", href: MEETING, cta: "Book a meeting" },
    },
  ],
};
