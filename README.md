# Enqueinvierto Clone - Quaestus Wealth Management

Este proyecto es un clon de la web [enqueinvierto.ar](https://enqueinvierto.ar/) desarrollado con Next.js y desplegado en Cloudflare Pages/Workers. El objetivo es replicar la experiencia de usuario y las funcionalidades principales, adaptando la arquitectura a las limitaciones y mejores prácticas de Cloudflare ([ver guía](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/)).

## Objetivo del Proyecto

- Clonar la landing principal y las páginas de detalle de carteras de inversión recomendadas por Quaestus Advisory S.A.
- Permitir la navegación entre las carteras y mostrar la composición principal y detallada de cada una.
- Incluir llamados a la acción y footer institucional.
- Documentar todo el proceso y las decisiones técnicas.

## Tareas Principales

- [x] **Documentar la estructura y el objetivo del proyecto en este README**
- [x] **Crear archivo de datos**: `src/data/portfolios.ts` con el JSON de carteras
- [x] **Página Home** (`/`):
  - [x] Mostrar cards/lista de las 9 carteras
  - [x] Cards clickeables que llevan al detalle
  - [x] Sección de asesoramiento y llamados a la acción
  - [x] Footer institucional
- [x] **Página de Detalle de Cartera** (`/cartera/[id]`):
  - [x] Mostrar nombre, fecha, composición principal y detallada
  - [x] Llamado a la acción y footer legal
  - [x] Breadcrumb y botón para volver
- [x] **Componentes reutilizables**:
  - [x] `PortfolioCard` (card de cartera)
  - [x] `PortfolioGrid` (lista de carteras)
  - [x] `PortfolioDetail` (detalle de cartera)
  - [x] `CTAFooter` (llamado a la acción)
  - [x] `HomeCTAFooter` (footer CTA home)
  - [x] `ActionButtons` (botón asesoramiento home)
  - [x] `RedirectPage` (modal seguro de redirección)
  - [x] `LegalFooter` (footer legal)
- [x] **Compatibilidad Cloudflare**:
  - [x] Usar rutas estáticas y generación en build
  - [x] Evitar SSR innecesario
  - [x] Imports relativos y paths compatibles
  - [x] Configuración de imágenes externas (`ik.imagekit.io`) en `next.config.ts`
- [x] **Instalación de dependencias necesarias**:
  - [x] `lucide-react` para íconos
  - [x] `framer-motion` para animaciones
- [x] **Solución de errores de tipado y build en Next.js 15+**
- [ ] **Documentar cualquier limitación, workaround o decisión relevante**

---

## Troubleshooting y Decisiones Técnicas

### Deploy en Cloudflare Pages/Workers
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy` (solo si usas Workers directamente; en Pages puede omitirse)
- **Root directory:** `/`
- **Variables de entorno:** agregar si se usan APIs externas o claves.

### Imágenes externas
- Se debe agregar el dominio `ik.imagekit.io` en `next.config.ts` para que Next.js permita servir imágenes externas con `next/image`:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'ik.imagekit.io',
      port: '',
      pathname: '/**',
    },
  ],
},
```

### Problema de tipos con PageProps en Next.js 15+
- **Error:**
  ```
  Type error: Type 'PageProps' does not satisfy the constraint ...
  Type '{ id: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
  ```
- **Solución:**
  - En Next.js 15, los parámetros de ruta (`params`) y parámetros de búsqueda (`searchParams`) ahora son Promesas y deben ser esperados (await).
  - La solución correcta es tipar los params como `Promise<{ id: string }>` y hacer await:
    ```ts
    type Params = Promise<{ id: string }>;

    export default async function CarteraPage(props: { params: Params }) {
      const { id } = await props.params;
      // resto del código
    }
    ```
  - Si estás migrando desde versiones anteriores, ejecuta el codemod oficial: `npx @next/codemod@latest next-async-request-api .`

### Despliegue en Cloudflare Workers
- Se configuró el proyecto con `@opennextjs/cloudflare` (v1.0.2) para facilitar el despliegue en Cloudflare Workers.
- **Scripts de despliegue** (package.json):
  ```json
  "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
  "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"
  ```
- **URL de despliegue**: https://enqueinvierto.ferminrp.workers.dev
- **Configuración**: El archivo `wrangler.jsonc` contiene la configuración para el despliegue en Cloudflare Workers.
- **Variables de entorno**: Se usan a través del archivo `.dev.vars` para el entorno de desarrollo.

### Particularidades de Cloudflare Workers y Next.js
- Debido a la diferente arquitectura serverless de Cloudflare Workers vs. Vercel, algunas APIs de Next.js pueden comportarse de manera diferente.
- Se recomienda usar `@opennextjs/cloudflare` para compatibilidad máxima con los Workers de Cloudflare.
- Las regeneraciones incrementales estáticas (ISR) se manejan de forma diferente - consultar la [documentación de OpenNext para Cloudflare](https://opennext.js.org/cloudflare).

### Modal de redirección y assets locales
- Para máxima performance y compatibilidad, las imágenes de marca (ej: logo Quaestus) deben estar en la carpeta `public` y usarse como `/quaestus.webp` en los componentes.

### Otros
- Si usas features avanzadas de Next.js (middleware, edge, etc.), revisa la [documentación de Cloudflare](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/) para compatibilidad.

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
