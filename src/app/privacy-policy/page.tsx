import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Política de Uso y Tratamiento de Datos Personales",
  description:
    "Política de uso y tratamiento de datos personales de merahki.ai — Ecosistema de Academias y Aprendizaje en Línea. Versión 1.0, mayo de 2026.",
  openGraph: {
    title: "Política de Uso y Tratamiento de Datos Personales — merahki.ai",
    description:
      "Conoce cómo merahki.ai protege y trata tus datos personales conforme a la legislación colombiana y estándares internacionales.",
    url: "https://merahki.ai/privacy-policy",
    type: "website",
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
                Ecosistema de Academias y Aprendizaje en Línea
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-8">
                POLÍTICA DE USO Y
                <br />
                TRATAMIENTO DE
                <br />
                DATOS PERSONALES
              </h1>
              <div className="text-white/50 text-sm space-y-1 mt-6">
                <p>Versión 1.0</p>
                <p>Mayo de 2026</p>
                <p>Bogotá, D.C. — Colombia</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-12 text-white/70 leading-relaxed">
            {/* 1. Principios Generales */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  1. Principios Generales
                </h2>
                <p>
                  MERAHKI.AI (en adelante, &quot;merahki.ai&quot;, &quot;la
                  Plataforma&quot; o &quot;la Empresa&quot;), en su calidad de
                  plataforma tecnológica dedicada a la creación, gestión y
                  distribución de academias, cursos y programas de aprendizaje en
                  línea, garantiza la protección de derechos fundamentales como
                  el Habeas Data, la privacidad, la intimidad, el buen nombre y
                  la libertad informativa de todos sus usuarios, clientes,
                  estudiantes, instructores y terceros interesados.
                </p>
                <p>
                  Todas las actuaciones relativas al tratamiento de datos
                  personales se regirán por los principios de buena fe,
                  legalidad, autodeterminación informática, libertad,
                  transparencia, seguridad y confidencialidad.
                </p>
              </div>
            </AnimatedSection>

            {/* 2. Identificación del Responsable del Tratamiento */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  2. Identificación del Responsable del Tratamiento
                </h2>
                <p>
                  MERAHKI.AI es una persona jurídica de derecho privado, dedicada
                  al desarrollo y operación de soluciones tecnológicas para la
                  educación digital. Opera como plataforma de tipo LMS (Learning
                  Management System) que permite a organizaciones, instituciones
                  educativas, empresas y creadores de contenido diseñar,
                  comercializar y gestionar experiencias de aprendizaje.
                </p>
                <p className="font-semibold text-white">
                  Datos de contacto del Responsable del Tratamiento:
                </p>
                <ul className="space-y-2 pl-4">
                  <li>
                    <strong className="text-white">Razón social:</strong>{" "}
                    merahki.ai - M Media SAS
                  </li>
                  <li>
                    <strong className="text-white">NIT:</strong> 901402436
                  </li>
                  <li>
                    <strong className="text-white">Domicilio principal:</strong>{" "}
                    Bogotá, D.C., Colombia
                  </li>
                  <li>
                    <strong className="text-white">
                      Correo electrónico para asuntos de datos personales:
                    </strong>{" "}
                    datospersonales@merahki.ai
                  </li>
                  <li>
                    <strong className="text-white">Sitio web:</strong>{" "}
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

            {/* 3. Legislación Aplicable */}
            <AnimatedSection delay={0.25}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  3. Legislación Aplicable
                </h2>
                <p>
                  La presente política se rige por la normatividad colombiana
                  vigente en materia de protección de datos personales,
                  incluyendo:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Constitución Política de Colombia, artículos 15 y 20.
                  </li>
                  <li>Ley 1266 de 2008 (Habeas Data financiero).</li>
                  <li>
                    Ley 1581 de 2012 (Régimen General de Protección de Datos
                    Personales).
                  </li>
                  <li>Decreto 1377 de 2013.</li>
                  <li>Decreto Único Reglamentario 1074 de 2015.</li>
                  <li>Decreto 090 de 2018.</li>
                  <li>
                    Sentencias de la Corte Constitucional C-1011 de 2008 y
                    C-748 de 2011.
                  </li>
                  <li>
                    Circular 003 de 2018 de la Superintendencia de Industria y
                    Comercio.
                  </li>
                  <li>
                    Guías y pronunciamientos emitidos por la Superintendencia de
                    Industria y Comercio.
                  </li>
                </ul>
                <p>
                  Adicionalmente, merahki.ai observará las disposiciones del
                  Reglamento General de Protección de Datos de la Unión Europea
                  (GDPR) cuando los servicios sean prestados a usuarios ubicados
                  en el Espacio Económico Europeo, así como las regulaciones
                  locales aplicables de cada jurisdicción donde operen sus
                  clientes.
                </p>
              </div>
            </AnimatedSection>

            {/* 4. Ámbito de Aplicación */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  4. Ámbito de Aplicación
                </h2>
                <p>
                  La presente política será aplicable a todas las personas
                  naturales cuyos datos personales sean recolectados,
                  almacenados, usados, procesados, circulados o suprimidos por
                  merahki.ai en el marco de la prestación de sus servicios
                  tecnológicos y educativos, incluyendo pero no limitándose a:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Administradores y operadores de academias creadas en la
                    plataforma.
                  </li>
                  <li>
                    Estudiantes y aprendices inscritos en cursos, programas y
                    rutas de aprendizaje.
                  </li>
                  <li>
                    Instructores, tutores y facilitadores de sesiones en vivo.
                  </li>
                  <li>
                    Usuarios de aplicaciones móviles branded construidas con el
                    Mobile App Builder.
                  </li>
                  <li>
                    Visitantes del sitio web y de los sitios de academias
                    construidos con el Website Creation Service.
                  </li>
                  <li>
                    Personas que participan en encuestas, formularios y
                    evaluaciones creados con el Survey Builder.
                  </li>
                  <li>
                    Partners, afiliados y terceros integrados mediante API,
                    webhooks o integraciones nativas.
                  </li>
                  <li>
                    Prospectos y leads capturados a través de formularios de
                    registro, landing pages y campañas educativas.
                  </li>
                </ul>
                <p>
                  Esta política aplica tanto dentro como fuera del territorio
                  colombiano, siempre que merahki.ai actúe como Responsable o
                  Encargado del Tratamiento de datos personales.
                </p>
              </div>
            </AnimatedSection>

            {/* 5. Definiciones */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  5. Definiciones
                </h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-white">Autorización:</strong>{" "}
                    Consentimiento previo, expreso e informado del Titular para
                    llevar a cabo el Tratamiento de sus datos personales.
                  </li>
                  <li>
                    <strong className="text-white">Base de datos:</strong>{" "}
                    Conjunto organizado de datos personales que sea objeto de
                    Tratamiento, incluyendo las bases gestionadas en la
                    plataforma merahki.ai y sus integraciones con sistemas CRM,
                    pasarelas de pago y herramientas de marketing.
                  </li>
                  <li>
                    <strong className="text-white">Dato personal:</strong>{" "}
                    Cualquier información vinculada o que pueda asociarse a una o
                    varias personas naturales determinadas o determinables.
                  </li>
                  <li>
                    <strong className="text-white">Dato sensible:</strong> Datos
                    que afectan la intimidad del titular o cuyo uso indebido
                    puede generar discriminación, tales como datos de salud,
                    orientación política, convicciones religiosas, datos
                    biométricos, vida sexual, origen racial o étnico, entre
                    otros.
                  </li>
                  <li>
                    <strong className="text-white">
                      Encargado del Tratamiento:
                    </strong>{" "}
                    Persona natural o jurídica que por sí misma o en asocio con
                    otros realice el Tratamiento de datos personales por cuenta
                    del Responsable. En el contexto de merahki.ai, incluye
                    proveedores de infraestructura cloud, pasarelas de pago
                    (Stripe, PayPal), plataformas de videollamada (Zoom,
                    Microsoft Teams, Webex), herramientas de email marketing
                    (Mailchimp, ActiveCampaign), CRM (HubSpot), y servicios de
                    analítica (Google Analytics, MixPanel).
                  </li>
                  <li>
                    <strong className="text-white">
                      Responsable del Tratamiento:
                    </strong>{" "}
                    merahki.ai, quien decide sobre las bases de datos y el
                    tratamiento de los datos personales.
                  </li>
                  <li>
                    <strong className="text-white">Titular:</strong> Persona
                    natural cuyos datos personales sean objeto de Tratamiento.
                  </li>
                  <li>
                    <strong className="text-white">Tratamiento:</strong>{" "}
                    Cualquier operación o conjunto de operaciones sobre datos
                    personales, tales como la recolección, almacenamiento, uso,
                    circulación, análisis mediante inteligencia artificial, o
                    supresión.
                  </li>
                  <li>
                    <strong className="text-white">Plataforma:</strong> El
                    conjunto de herramientas, servicios y funcionalidades
                    ofrecidos por merahki.ai, incluyendo el LMS, el Mobile App
                    Builder, el Website Builder, el Interactive Video Player, el
                    AI Assistant, el Survey Builder, las sesiones en vivo, el
                    panel de Analytics &amp; Reports, y las integraciones con
                    terceros.
                  </li>
                  <li>
                    <strong className="text-white">Academia:</strong> Espacio de
                    aprendizaje digital creado y administrado por un cliente de
                    merahki.ai utilizando las herramientas de la plataforma.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 6. Principios Específicos */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  6. Principios Específicos
                </h2>
                <p>
                  merahki.ai aplicará los siguientes principios en la
                  recolección, manejo, uso, tratamiento, almacenamiento e
                  intercambio de datos personales:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">
                      Principio de legalidad:
                    </strong>{" "}
                    Se dará aplicación a las disposiciones vigentes que rigen el
                    tratamiento de datos personales y demás derechos
                    fundamentales conexos.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de libertad:
                    </strong>{" "}
                    El tratamiento de datos personales solo puede llevarse a cabo
                    con el consentimiento previo, expreso e informado del
                    Titular, o en ausencia de mandato legal o judicial que releve
                    el consentimiento.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de finalidad:
                    </strong>{" "}
                    El tratamiento de datos personales estará subordinado a una
                    finalidad legítima, la cual debe ser informada al respectivo
                    titular.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de veracidad o calidad:
                    </strong>{" "}
                    La información sujeta a tratamiento debe ser veraz, completa,
                    exacta, actualizada, comprobable y comprensible.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de transparencia:
                    </strong>{" "}
                    Se garantizará el derecho del Titular a obtener de
                    merahki.ai, en cualquier momento y sin restricciones,
                    información acerca de la existencia de cualquier tipo de dato
                    personal que sea de su interés.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de acceso y circulación restringida:
                    </strong>{" "}
                    Los datos personales no estarán disponibles en medios de
                    divulgación masiva, salvo que el acceso sea técnicamente
                    controlable.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de seguridad:
                    </strong>{" "}
                    Los datos serán protegidos mediante medidas tecnológicas,
                    protocolos de cifrado y medidas administrativas que
                    garanticen su integridad y confidencialidad.
                  </li>
                  <li>
                    <strong className="text-white">
                      Principio de confidencialidad:
                    </strong>{" "}
                    Todas las personas que administren, manejen o tengan acceso a
                    datos personales se comprometen a conservar la
                    confidencialidad de la información.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 7. Tratamiento y Finalidades de los Datos */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  7. Tratamiento y Finalidades de los Datos
                </h2>
                <p>
                  Los datos personales recolectados por merahki.ai serán
                  utilizados para las siguientes finalidades, clasificadas por
                  tipo de usuario:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.1 Administradores de Academias (Clientes B2B)
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Gestión de la relación contractual y prestación de los
                      servicios de plataforma.
                    </li>
                    <li>
                      Procesamiento de pagos y facturación a través de pasarelas
                      integradas (Stripe, PayPal, Shopify).
                    </li>
                    <li>
                      Comunicaciones comerciales, técnicas y de soporte.
                    </li>
                    <li>
                      Generación de reportes analíticos mediante el dashboard de
                      Analytics &amp; Reports.
                    </li>
                    <li>
                      Provisión de insights de negocio generados por el AI
                      Assistant.
                    </li>
                    <li>
                      Integración con herramientas de CRM (HubSpot), email
                      marketing y analítica.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.2 Estudiantes y Aprendices
                  </h3>
                  <p>
                    merahki.ai recolecta y trata datos de estudiantes en calidad
                    de Encargado del Tratamiento por cuenta del Administrador de
                    la Academia (Responsable). Las finalidades incluyen:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Registro e inscripción en cursos, programas y rutas de
                      aprendizaje.
                    </li>
                    <li>
                      Seguimiento del progreso de aprendizaje, resultados de
                      exámenes, respuestas a encuestas e historial de
                      participación.
                    </li>
                    <li>
                      Personalización de experiencias de aprendizaje adaptativo
                      mediante inteligencia artificial.
                    </li>
                    <li>
                      Emisión de certificados y credenciales digitales
                      (Accredible, Credly).
                    </li>
                    <li>
                      Facilitación de sesiones en vivo a través de Zoom,
                      Microsoft Teams, Webex, Google Meet y Calendly.
                    </li>
                    <li>
                      Entrega de notificaciones push en aplicaciones móviles
                      branded.
                    </li>
                    <li>
                      Generación automática de subtítulos, transcripciones y
                      traducciones en videos interactivos.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.3 Instructores y Facilitadores
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Gestión de perfiles y asignación de sesiones en vivo.
                    </li>
                    <li>
                      Registro de asistencia y generación de reportes de
                      actividad.
                    </li>
                    <li>
                      Coordinación de sesiones a través de integraciones con
                      Calendly.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    7.4 Prospectos y Leads
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc list-inside">
                    <li>
                      Captura y cualificación de leads a través del Survey
                      Builder y formularios de registro.
                    </li>
                    <li>
                      Segmentación de audiencias y personalización de
                      comunicaciones de marketing.
                    </li>
                    <li>
                      Seguimiento de campañas mediante Google Firebase, Facebook
                      Business SDK, UTMs y Google Analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* 8. Categorías de Datos Recolectados */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  8. Categorías de Datos Recolectados
                </h2>
                <p>
                  De acuerdo con las funcionalidades de la plataforma, merahki.ai
                  puede recolectar las siguientes categorías de datos:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.1 Datos de identificación
                  </h3>
                  <p>
                    Nombre completo, correo electrónico, número de teléfono, país
                    de residencia, idioma preferido, fotografía de perfil e
                    información de inicio de sesión (incluido login biométrico en
                    aplicaciones móviles y autenticación vía OpenID, SAML o SSO).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.2 Datos de actividad de aprendizaje
                  </h3>
                  <p>
                    Progreso en cursos, resultados de evaluaciones y exámenes,
                    tiempo de estudio, historial de visualización de videos
                    (plays, re-watches, drop-offs), interacciones sociales dentro
                    de cursos, respuestas a encuestas, participación en sesiones
                    en vivo, asistencia y desempeño en actividades SCORM y xAPI.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.3 Datos transaccionales y financieros
                  </h3>
                  <p>
                    Historial de compras de cursos, suscripciones, compras dentro
                    de aplicaciones móviles (in-app purchases), métodos de pago
                    procesados por Stripe y PayPal (merahki.ai no almacena datos
                    completos de tarjetas de crédito), e información fiscal
                    gestionada mediante Stripe Tax y Quaderno.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.4 Datos de navegación y analítica
                  </h3>
                  <p>
                    Dirección IP, tipo de navegador y dispositivo, sistema
                    operativo, páginas visitadas, tiempo de sesión, cookies,
                    datos de comportamiento capturados por Google Analytics,
                    Google Tag Manager, Facebook Pixel, MixPanel, Hotjar,
                    Fullstory, Mouseflow y Fullsession.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    8.5 Datos generados por inteligencia artificial
                  </h3>
                  <p>
                    Interacciones con el AI Assistant (prompts y respuestas),
                    contenido generado automáticamente (resúmenes de video,
                    subtítulos, traducciones, evaluaciones, outlines de curso), e
                    insights de negocio generados a partir del análisis de datos
                    de la plataforma.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 9. Tratamiento de Datos Sensibles */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  9. Tratamiento de Datos Sensibles
                </h2>
                <p>
                  merahki.ai no solicita ni recolecta intencionalmente datos
                  sensibles. Sin embargo, en el contexto de academias
                  especializadas (por ejemplo, en el sector salud, fitness o
                  bienestar), los Administradores de Academias pueden configurar
                  formularios o encuestas que recolecten información sensible de
                  sus estudiantes.
                </p>
                <p>En estos casos:</p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    El Administrador de la Academia actúa como Responsable del
                    Tratamiento y debe obtener autorización explícita del
                    Titular.
                  </li>
                  <li>
                    merahki.ai actúa como Encargado del Tratamiento y se limita a
                    procesar dichos datos conforme a las instrucciones del
                    Responsable.
                  </li>
                  <li>
                    merahki.ai aplicará medidas de seguridad reforzadas para la
                    protección de datos sensibles almacenados en la plataforma.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 10. Uso de Inteligencia Artificial y Tratamiento Automatizado */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  10. Uso de Inteligencia Artificial y Tratamiento Automatizado
                </h2>
                <p>
                  merahki.ai incorpora funcionalidades de inteligencia artificial
                  en múltiples componentes de la plataforma, incluyendo:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">AI Assistant:</strong>{" "}
                    Generación de outlines de curso, evaluaciones, ebooks e
                    insights de negocio a partir de datos del usuario.
                  </li>
                  <li>
                    <strong className="text-white">
                      Aprendizaje adaptativo:
                    </strong>{" "}
                    Personalización de rutas de aprendizaje basada en el
                    progreso, estilo y ritmo de cada estudiante.
                  </li>
                  <li>
                    <strong className="text-white">Video interactivo:</strong>{" "}
                    Generación automática de subtítulos, transcripciones,
                    traducciones, resúmenes y tablas de contenido.
                  </li>
                  <li>
                    <strong className="text-white">Analytics con IA:</strong>{" "}
                    Respuestas automatizadas a consultas sobre rendimiento de
                    negocio y comportamiento de aprendices.
                  </li>
                  <li>
                    <strong className="text-white">
                      Survey Builder con IA:
                    </strong>{" "}
                    Creación guiada de encuestas mediante diálogo asistido por
                    inteligencia artificial.
                  </li>
                </ul>
                <p>
                  El tratamiento automatizado de datos mediante IA se realizará
                  bajo los siguientes principios:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Los datos utilizados para entrenamiento o mejora de modelos
                    de IA serán anonimizados o agregados.
                  </li>
                  <li>
                    El Titular tendrá derecho a conocer la existencia de
                    decisiones automatizadas que le afecten y a solicitar
                    intervención humana.
                  </li>
                  <li>
                    El contenido generado por IA pertenece al usuario que lo
                    creó, conforme a los términos de servicio de la plataforma.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 11. Autorización del Titular */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  11. Autorización del Titular
                </h2>
                <p>
                  merahki.ai obtendrá la autorización previa, expresa e informada
                  del Titular para el tratamiento de sus datos personales. Dicha
                  autorización podrá otorgarse mediante:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Aceptación de términos y condiciones al registrarse en la
                    plataforma.
                  </li>
                  <li>
                    Marcación de casillas de consentimiento (opt-in) en
                    formularios de registro.
                  </li>
                  <li>
                    Formularios de consentimiento configurados en el Survey
                    Builder.
                  </li>
                  <li>
                    Aceptación de políticas de privacidad al descargar y usar
                    aplicaciones móviles branded.
                  </li>
                  <li>
                    Cualquier mecanismo electrónico que permita su posterior
                    consulta y verificación.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">
                  11.1 Casos en los que no se requiere autorización
                </h3>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Información requerida por una entidad pública o
                    administrativa en ejercicio de sus funciones legales o por
                    orden judicial.
                  </li>
                  <li>Datos de naturaleza pública.</li>
                  <li>Casos de urgencia médica o sanitaria.</li>
                  <li>
                    Tratamiento de información autorizado por la ley para fines
                    históricos, estadísticos o científicos.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 12. Derechos de los Titulares */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  12. Derechos de los Titulares
                </h2>
                <p>
                  Los titulares de datos personales tienen los siguientes
                  derechos:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Acceder, conocer, rectificar y actualizar sus datos
                    personales.
                  </li>
                  <li>Solicitar prueba de la autorización otorgada.</li>
                  <li>
                    Recibir información sobre el uso que se ha dado a sus datos
                    personales.
                  </li>
                  <li>
                    Presentar quejas ante la Superintendencia de Industria y
                    Comercio.
                  </li>
                  <li>
                    Revocar la autorización o solicitar la supresión del dato.
                  </li>
                  <li>
                    Acceder en forma gratuita a sus datos personales.
                  </li>
                  <li>
                    Conocer la existencia de tratamientos automatizados y
                    solicitar intervención humana en decisiones basadas en IA.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 13. Transferencia Internacional y Compartición con Terceros */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  13. Transferencia Internacional y Compartición con Terceros
                </h2>
                <p>
                  Dada la naturaleza de la plataforma y su ecosistema de más de
                  50 integraciones nativas, los datos personales pueden ser
                  transferidos o transmitidos a terceros ubicados dentro y fuera
                  de Colombia, incluyendo:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.1 Pasarelas de pago
                  </h3>
                  <p>
                    Stripe, PayPal y Shopify, para el procesamiento de
                    transacciones.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.2 Plataformas de videollamada
                  </h3>
                  <p>
                    Zoom, Microsoft Teams, Webex, Google Meet y Calendly, para la
                    facilitación de sesiones en vivo y coaching.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.3 Herramientas de marketing y CRM
                  </h3>
                  <p>
                    HubSpot, Mailchimp, ActiveCampaign, Mailerlite, GetResponse,
                    Kit, Moosend, AWeber y Constant Contact.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.4 Servicios de analítica
                  </h3>
                  <p>
                    Google Analytics, Google Tag Manager, Facebook Pixel,
                    MixPanel, Hotjar, Fullstory, Mouseflow y Fullsession.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.5 Credenciales digitales
                  </h3>
                  <p>
                    Accredible y Credly, para la emisión y gestión de
                    certificados.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.6 Plataformas de automatización
                  </h3>
                  <p>
                    Zapier, Make, Integrately y Pabbly, a través de las cuales
                    los datos pueden fluir hacia miles de aplicaciones adicionales
                    configuradas por el cliente.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    13.7 API y Webhooks
                  </h3>
                  <p>
                    Los clientes que utilizan la API extendida y los webhooks
                    avanzados de merahki.ai son responsables del tratamiento de
                    datos que fluyan hacia sus propios sistemas.
                  </p>
                </div>

                <p>
                  merahki.ai tomará las medidas necesarias para que todos los
                  terceros conozcan y se comprometan a observar esta política. La
                  transferencia internacional se realizará conforme a los
                  requisitos legales aplicables.
                </p>
              </div>
            </AnimatedSection>

            {/* 14. Seguridad de la Información */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  14. Seguridad de la Información
                </h2>
                <p>
                  merahki.ai adoptará medidas técnicas, humanas y administrativas
                  para proteger los datos personales, incluyendo:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Cifrado de datos en tránsito (HTTPS/TLS) y en reposo.
                  </li>
                  <li>
                    Autenticación robusta mediante OpenID, SAML, SSO y login
                    biométrico en aplicaciones móviles.
                  </li>
                  <li>
                    Control de acceso basado en roles para administradores,
                    instructores y estudiantes.
                  </li>
                  <li>
                    Infraestructura distribuida globalmente con SLA de 99.9% de
                    disponibilidad.
                  </li>
                  <li>
                    Protección de contenido de video mediante watermarks y
                    hosting seguro.
                  </li>
                  <li>
                    Cumplimiento GDPR y manejo cifrado de datos integrado en cada
                    build del Website Creation Service.
                  </li>
                  <li>
                    Monitoreo continuo de vulnerabilidades y respuesta a
                    incidentes.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 15. Política de Cookies */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  15. Política de Cookies
                </h2>
                <p>
                  merahki.ai y las academias construidas sobre la plataforma
                  utilizan cookies y tecnologías similares para:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>Mantener sesiones de usuario activas.</li>
                  <li>Personalizar la experiencia de aprendizaje.</li>
                  <li>
                    Realizar análisis de comportamiento y rendimiento (Google
                    Analytics, Facebook Pixel, MixPanel).
                  </li>
                  <li>
                    Optimizar campañas de marketing mediante Google Firebase y
                    Facebook Business SDK.
                  </li>
                  <li>
                    Rastrear interacciones con la aplicación móvil (usuarios
                    activos, sesiones, métricas de rendimiento).
                  </li>
                </ul>
                <p>
                  Los titulares podrán gestionar sus preferencias de cookies a
                  través de la configuración de su navegador o de los mecanismos
                  habilitados en las academias (como el widget de AccessiBe para
                  accesibilidad).
                </p>
              </div>
            </AnimatedSection>

            {/* 16. Derechos de Niños, Niñas y Adolescentes */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  16. Derechos de Niños, Niñas y Adolescentes
                </h2>
                <p>
                  merahki.ai no recolecta intencionalmente datos personales de
                  menores de edad. En el caso de academias orientadas a
                  audiencias menores, el Administrador de la Academia deberá
                  garantizar que se obtenga la autorización de los representantes
                  legales y que se respeten los derechos prevalentes de los
                  menores, conforme a la legislación vigente.
                </p>
              </div>
            </AnimatedSection>

            {/* 17. Procedimientos para Ejercer Derechos */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  17. Procedimientos para Ejercer Derechos
                </h2>
                <p>
                  El Titular puede ejercer sus derechos de acceso, rectificación,
                  actualización, supresión y revocatoria a través de los
                  siguientes canales:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    <strong className="text-white">Correo electrónico:</strong>{" "}
                    datospersonales@merahki.ai
                  </li>
                  <li>
                    <strong className="text-white">
                      Formulario de solicitud disponible en:
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
                  La solicitud deberá contener: nombre completo del titular,
                  datos de contacto, descripción del derecho que desea ejercer,
                  documentos de soporte y número de identificación.
                </p>
                <p>
                  merahki.ai atenderá las consultas dentro de un término máximo
                  de diez (10) días hábiles y los reclamos dentro de quince (15)
                  días hábiles, conforme a la Ley 1581 de 2012.
                </p>
              </div>
            </AnimatedSection>

            {/* 18. Retención y Supresión de Datos */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  18. Retención y Supresión de Datos
                </h2>
                <p>
                  Los datos personales serán conservados durante el tiempo
                  necesario para cumplir con las finalidades del tratamiento y
                  las obligaciones legales aplicables. Una vez finalizada la
                  relación contractual o revocada la autorización, merahki.ai
                  procederá a la supresión segura de los datos, salvo que exista
                  una obligación legal o contractual de retención.
                </p>
              </div>
            </AnimatedSection>

            {/* 19. Responsabilidades del Administrador de la Academia */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  19. Responsabilidades del Administrador de la Academia
                </h2>
                <p>
                  Cuando un cliente utiliza merahki.ai para crear y operar una
                  academia, dicho cliente actúa como Responsable del Tratamiento
                  de los datos personales de sus estudiantes. En este contexto,
                  el cliente se compromete a:
                </p>
                <ul className="space-y-2 pl-4 list-disc list-inside">
                  <li>
                    Obtener las autorizaciones necesarias de sus estudiantes y
                    usuarios.
                  </li>
                  <li>
                    Informar a sus estudiantes sobre la política de tratamiento
                    de datos aplicable.
                  </li>
                  <li>
                    Utilizar las herramientas de formularios de consentimiento
                    disponibles en el Survey Builder.
                  </li>
                  <li>
                    Configurar adecuadamente los avisos de privacidad en su
                    academia y aplicación móvil.
                  </li>
                  <li>
                    No recolectar datos sensibles sin autorización explícita del
                    titular.
                  </li>
                  <li>
                    Gestionar las solicitudes de sus titulares conforme a la
                    normatividad vigente.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 20. Modificaciones a la Política */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  20. Modificaciones a la Política
                </h2>
                <p>
                  merahki.ai se reserva el derecho de modificar esta política en
                  cualquier momento. Las modificaciones serán comunicadas a los
                  titulares a través de los canales habituales de comunicación de
                  la plataforma, incluyendo notificaciones por correo electrónico
                  y avisos dentro de la plataforma.
                </p>
              </div>
            </AnimatedSection>

            {/* 21. Vigencia */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">21. Vigencia</h2>
                <p>
                  La presente política rige a partir del 3 de mayo de 2026 y
                  permanecerá vigente mientras merahki.ai continúe operando y
                  tratando datos personales.
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
