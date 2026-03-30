# merahki.ai Landing Page

A high-performance, interactive multi-page marketing website for **merahki.ai** — an AI-native education platform.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Language**: TypeScript

## Design System

| Token | Value |
|---|---|
| `--color-void` | `#000000` |
| `--color-dark-violet` | `#0a0010` |
| `--color-indigo` | `#3b1fc1` |
| `--color-rust` | `#c14a1f` |
| Gradient 1 | Peach → Purple |
| Gradient 2 | Blue → Pink |
| Font | Inter |

## Pages

| Route | Description |
|---|---|
| `/` | Main landing — Hero, VSL, Logo Carousel, Value Props, Stats, CTA |
| `/education-led-growth` | For Heads of Growth — pain points, 3-step process, identity transformation |
| `/customer-education` | Customer onboarding, adoption, expansion programs |
| `/partner-academies` | Partner enablement & certification at scale |
| `/product-adoption` | AI-driven onboarding & feature adoption |
| `/training-certification` | Rapid Studio — authoring, pricing, AI-ready infrastructure |
| `/certification` | Certification & assessment platform — use cases, comparison |

## Getting Started

### Prerequisites

- Node.js 18+ (installed at `C:\Program Files\nodejs\` via winget on this machine)
- npm (bundled with Node.js)

> **Windows note:** If `node` / `npm` aren't in your PATH after installation, open a new terminal or prefix commands with the full path:
> ```powershell
> & "C:\Program Files\nodejs\npm.cmd" install
> ```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── globals.css             # Global styles + CSS variables
│   ├── page.tsx                # Homepage
│   ├── education-led-growth/
│   ├── customer-education/
│   ├── partner-academies/
│   ├── product-adoption/
│   ├── training-certification/
│   └── certification/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── GradientText.tsx
│   │   ├── SectionBadge.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── AgentCard.tsx
│   │   ├── GlowBackground.tsx
│   │   └── AnimatedSection.tsx
│   └── sections/
│       └── LogoCarousel.tsx
```

## Pending Integrations

- Replace VSL placeholder with actual video URL
- Add real company logos to `LogoCarousel`
- Connect contact/demo forms to a backend or form service (e.g., HubSpot, Calendly)
- Add SEO metadata per page via `generateMetadata`
