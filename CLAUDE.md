# CLAUDE.md — Sitio web merahki.ai (landing)

Este repo es **el sitio web público de merahki.ai**. Se administra **desde Claude Code**
(reemplaza el flujo viejo: Devin editaba en la nube → push desde GitHub Desktop). El vault
`~/Desktop/Devs-claude` es el cerebro; **este repo es el taller**. Cada uno con su propio contexto.

- **Remote:** `https://github.com/davidmerahki/2026-2-Merahki.ai-Landing-Page.git` (rama única: `main`).
- **Producción:** https://merahki.ai (servida por **Vercel**, auto-deploy al hacer push a `main`).
- **Owner / aprobador:** David. Nada se commitea ni se despliega sin su ok explícito tras ver el preview.

---

## Stack

- **Next.js 16** (App Router) + **React 18** + **TypeScript**
- **TailwindCSS** con tokens de diseño propios (`tailwind.config.ts`)
- **framer-motion** (animaciones), **lucide-react** (íconos), **embla-carousel-react** (carruseles)
- **@vercel/analytics** + **@vercel/speed-insights**

## Comandos

| Comando | Para qué |
|---|---|
| `npm run dev` | Dev server en http://localhost:3000 (preview local) |
| `npm run build` | Build de producción — **debe pasar verde antes de cualquier push no trivial** |
| `npm run start` | Servir el build de producción localmente |
| `npm run lint` | ESLint sobre `src/` |

`node_modules` ya está instalado. Corre `npm install` solo si el build se queja de dependencias.

---

## Mapa de carpetas — qué tocar para cambiar qué

```
src/
├── app/                      # Rutas (App Router). Cada carpeta = una ruta.
│   ├── page.tsx              # ← HOME (inglés). Copys del home inline aquí.
│   ├── layout.tsx            # Layout raíz: <head>, fuentes, analytics, navbar/footer globales
│   ├── globals.css           # Estilos globales
│   ├── not-found.tsx         # Página 404
│   ├── robots.ts / sitemap.ts # SEO técnico (robots.txt y sitemap.xml generados)
│   ├── es/                   # ← ESPAÑOL. Espejo de las rutas EN bajo /es/.
│   │   ├── page.tsx          #   Home en español
│   │   └── <ruta>/page.tsx   #   Cada página tiene su gemela ES aquí
│   ├── blog/<slug>/page.tsx  # Posts de blog (uno por carpeta)
│   ├── case-studies/…        # Casos de estudio (p.ej. uniandes-sanofi-microbiota)
│   └── <feature>/page.tsx    # Páginas de producto/feature (customer-education, webinars, etc.)
│
├── components/
│   ├── landing/HomeBodyV2.tsx # Cuerpo compartido del home (EN y ES lo usan con lang). getHomeFaqItems()
│   ├── sections/             # Secciones reutilizables: Testimonials EN/ES, propuestas, carruseles, ContactSection
│   ├── layout/               # Navbar, Footer y estructura de página
│   ├── ui/                   # Primitivos: GlowBackground, AnimatedSection, Accordion, botones…
│   ├── blog/                 # Componentes de blog
│   └── case-studies/         # Componentes de casos (CaseStudyVideo, MetricStrip, QuoteCard, InsightCallout)
│
└── lib/
    └── seo/metadata.ts       # buildMetadata(page, lang) + FAQ JSON-LD. TÍTULOS/DESCRIPCIONES SEO viven aquí.

public/                       # Estáticos servidos tal cual: /images, /og (open-graph), /assets, /Case of study
audiovisual/                  # Assets fuente (hero images) — material de trabajo, no necesariamente servido
```

### Reglas de contenido (importante)
- **Los copys están inline en los `.tsx`** (strings hardcodeadas), no en un archivo de i18n central.
- **EN y ES son espejos separados.** Si cambias un copy del home en inglés (`src/app/page.tsx`),
  el equivalente en español está en `src/app/es/page.tsx` — **hay que cambiar los dos** salvo que
  David pida solo uno. Lo mismo para cualquier `<ruta>` con su gemela `es/<ruta>`.
- **Metadatos SEO** (title/description/OG) NO van en la página: van en `src/lib/seo/metadata.ts`.

### Tokens de diseño (`tailwind.config.ts`)
| Clase | Color |
|---|---|
| `void` | `#000000` (fondo) |
| `deep` | `#0a0010` |
| `glow-indigo` | `#3b1fc1` |
| `glow-rust` | `#c14a1f` |
| `accent-peach/purple/blue/pink` | acentos |
| Gradientes | `gradient-peach-purple`, `gradient-blue-pink`, `gradient-purple-blue` |

Fuente: **Inter**. Tipografías fluidas con `clamp()` (ver `fontSize` en el config). **Respeta estos tokens** — no introduzcas colores sueltos.

---

## Pipeline de deploy (confirmado 2026-07-13)

- El repo está conectado a **Vercel**. **Push a `main` → build automático → deploy a producción (merahki.ai).**
- Confirmado por evidencia: producción responde `server: Vercel` y el último commit de `main`
  (case study Uniandes-Sanofi) está vivo en `https://merahki.ai/case-studies/uniandes-sanofi-microbiota`.
- **Vercel CLI** está instalado pero su token local está **expirado**. No hace falta para el flujo normal
  (el deploy es automático por Git). Si algún día quieres control de deploy por CLI: `vercel login`.
- **No hay `vercel.json`** — Vercel autodetecta Next.js. No lo crees salvo necesidad real.

---

## FLUJO DE TRABAJO (obligatorio — en este orden)

1. **`git pull` antes de editar.** Siempre. (El local puede quedar viejo mientras exista cualquier
   camino paralelo de edición.)
2. **Haz el cambio.** Si es copy sustancial (post, sección larga, pitch), pásalo por **`/humanizer`**
   antes de dar por listo (skill global de David). Ediciones de una línea o técnicas: no hace falta.
3. **Preview local OBLIGATORIO antes de commit.** Levanta `npm run dev`, abre el navegador y
   **muéstrale el cambio a David** en http://localhost:3000 (usa `.claude/launch.json`, un clic).
4. **`npm run build` verde** antes de push en cualquier cambio no trivial. Un push que rompe el build
   tumba el auto-deploy.
5. **Commit + push SOLO con ok explícito de David** tras ver el preview.
   Mensajes de commit cortos pero informativos, en español (estilo del historial: "actualiza CTA del home",
   "corrige copy de certificaciones").
6. **Verifica el deploy** tras el push: espera el build de Vercel y **confirma el cambio vivo** en merahki.ai
   (curl al HTTP 200 de la ruta / revisa el contenido). Muéstrale a David la URL con el cambio.

## Reglas duras

1. **Nunca push con el build roto.** `npm run build` verde es requisito.
2. **Nunca force-push ni reescribir el historial** de `main`.
3. **Nunca descartes cambios locales de origen desconocido.** Si `git status` muestra algo raro sin
   commitear, **frena y muéstraselo a David**.
4. **El sitio es prosa pública.** Copy sustancial pasa por `/humanizer` antes de commitear.
5. **EN y ES espejo:** no dejes una versión desincronizada sin avisar a David.
