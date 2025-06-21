# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a financial investment platform built with **Astro 5.x** and deployed on **Cloudflare Pages/Workers**. It's a clone of enqueinvierto.ar featuring investment portfolio recommendations and a financial glossary. The project uses static generation for optimal performance and SEO.

## Key Architecture

- **Framework**: Astro 5.x with React 18 for interactive components
- **Deployment**: Cloudflare Pages/Workers with static output
- **Content**: Astro Content Collections for the financial glossary
- **Data**: Static portfolio data in TypeScript files
- **Styling**: Tailwind CSS with a custom color system by asset class

## Development Commands

```bash
# Development server
npm run dev

# Build with type checking
npm run build

# Preview build locally
npm run preview

# Deploy to Cloudflare
npm run deploy

# Generate Cloudflare types
npm run cf-typegen
```

## Content Collections

The financial glossary uses Astro Content Collections located in `src/content/glossary/`. Each entry is a markdown file with typed frontmatter:

```typescript
// Schema in src/content/config.ts
{
  title: string
  date: date
  icon: string
  summary: string
  category?: string
  tags?: string[]
  difficulty?: 'Principiante' | 'Intermedio' | 'Avanzado'
  readingTime?: number
}
```

## Portfolio Data Structure

Investment portfolios are defined in `src/data/portfolios.ts` with this interface:

```typescript
interface Portfolio {
  nombre: string
  fecha: string
  composicion_principal: { tipo: string; porcentaje: number }[]
  composicion_detallada: { tipo: string; porcentaje: number }[]
}
```

## Color System

The project uses a sophisticated color system organized by asset classes in `src/utils/colors.ts`:

- **Cash & Money Market**: Green variants
- **Renta Fija**: Blue variants  
- **Renta Variable**: Red variants with regional sub-categories
- **Alternativos**: Yellow variants

## CDN Configuration

Multiple CDN domains are configured for images:
- `compara-ii.b-cdn.net` (Primary)
- `ik.imagekit.io` (Secondary)
- `images.compara.ar` (Quaestus logos)

## Cloudflare Deployment

- Uses `@astrojs/cloudflare` adapter
- Static output mode for Pages deployment
- Wrangler configuration in `wrangler.jsonc`
- Deploy command: `npm run deploy` (builds and deploys)

## Component Architecture

- **React Components**: Interactive elements (PortfolioCard, ActionButtons, RetirementCalculator, etc.)
- **Astro Components**: Static layouts and content (Layout.astro, GlossaryContent.astro)
- **Hydration**: Selective with `client:load` only where needed
- **Chart Library**: Uses Recharts for interactive financial projections

## Routes

- `/` - Home with portfolio grid
- `/cartera/[id]` - Dynamic portfolio detail pages
- `/glosario` - Glossary index
- `/glosario/[slug]` - Individual glossary entries
- `/jubilacion` - Retirement calculator with financial planning tools

## Important Notes

- Always run `astro check` before building (included in build script)
- The project is migrated from Next.js - some configurations may reference this legacy
- Document business learnings in README.md as per cursor rules
- Cloudflare has specific limitations vs Vercel - consult their Next.js guide when needed
