# Enqueinvierto Clone - Quaestus Wealth Management

Este proyecto es un clon de la web [enqueinvierto.ar](https://enqueinvierto.ar/) desarrollado con Next.js y desplegado en Cloudflare Pages/Workers. El objetivo es replicar la experiencia de usuario y las funcionalidades principales, adaptando la arquitectura a las limitaciones y mejores prácticas de Cloudflare ([ver guía](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/)).

## Objetivo del Proyecto

- Clonar la landing principal y las páginas de detalle de carteras de inversión recomendadas por Quaestus Advisory S.A.
- Permitir la navegación entre las carteras y mostrar la composición principal y detallada de cada una.
- Incluir llamados a la acción y footer institucional.
- Documentar todo el proceso y las decisiones técnicas.

## Tareas Principales

- [ ] **Documentar la estructura y el objetivo del proyecto en este README**
- [ ] **Crear archivo de datos**: `src/data/portfolios.ts` con el JSON de carteras
- [ ] **Página Home** (`/`):
  - [ ] Mostrar cards/lista de las 9 carteras
  - [ ] Cards clickeables que llevan al detalle
  - [ ] Sección de asesoramiento y llamados a la acción
  - [ ] Footer institucional
- [ ] **Página de Detalle de Cartera** (`/cartera/[id]`):
  - [ ] Mostrar nombre, fecha, composición principal y detallada
  - [ ] Llamado a la acción y footer legal
  - [ ] Breadcrumb y botón para volver
- [ ] **Componentes reutilizables**:
  - [ ] `PortfolioCard` (card de cartera)
  - [ ] `PortfolioList` (lista de carteras)
  - [ ] `PortfolioDetail` (detalle de cartera)
  - [ ] `CTAFooter` (llamado a la acción)
  - [ ] `LegalFooter` (footer legal)
- [ ] **Compatibilidad Cloudflare**:
  - [ ] Usar rutas estáticas y generación en build
  - [ ] Evitar SSR innecesario
  - [ ] Imports relativos y paths compatibles
- [ ] **Documentar cualquier limitación, workaround o decisión relevante**

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
