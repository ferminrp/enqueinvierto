# Enqueinvierto Clone - Quaestus Wealth Management

Este proyecto es un clon de la web [enqueinvierto.ar](https://enqueinvierto.ar/) desarrollado con **Astro** y desplegado en Cloudflare Pages/Workers. El objetivo es replicar la experiencia de usuario y las funcionalidades principales, optimizado para rendimiento y SEO.

## 🚀 Tecnologías Utilizadas

- **Astro 5.x**: Framework principal con renderizado estático
- **React 18**: Para componentes interactivos
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animaciones
- **Lucide React**: Iconos
- **Cloudflare Adapter**: Despliegue optimizado

## 🎯 Ventajas de Astro

- **Rendimiento**: Menor JavaScript en el cliente
- **SEO**: Mejor renderizado estático
- **Cloudflare**: Optimización nativa para Workers
- **Flexibilidad**: React solo donde se necesita interactividad

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React y Astro
│   ├── ActionButtons.tsx
│   ├── CTAFooter.tsx
│   ├── HomeCTAFooter.tsx
│   ├── LegalFooter.astro
│   ├── PortfolioCard.tsx
│   ├── PortfolioDetail.tsx
│   ├── PortfolioGrid.tsx
│   └── RedirectPage.tsx
├── data/
│   └── portfolios.ts    # Datos de carteras
├── layouts/
│   └── Layout.astro     # Layout base
├── pages/
│   ├── index.astro      # Página principal
│   └── cartera/
│       └── [id].astro   # Páginas dinámicas
├── types/
│   └── portfolio.ts     # Tipos TypeScript
└── utils/
    └── colors.ts        # Utilidades de colores
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Deploy a Cloudflare
npm run deploy
```

## 📊 Funcionalidades

### ✅ Completado
- [x] **Página Home**: Grid de 9 carteras de inversión
- [x] **Páginas de Detalle**: Composición principal y detallada
- [x] **Glosario Financiero**: Conceptos y términos explicados con diseño tipo Notion
- [x] **Componentes Interactivos**: Modales, animaciones, CTAs
- [x] **SEO Optimizado**: Meta tags completos
- [x] **Responsive Design**: Adaptado a todos los dispositivos
- [x] **Analytics**: Google Analytics, Clarity, Ahrefs
- [x] **Logo Actualizado**: Quaestus con nueva URL del CDN
- [x] **Sistema de Colores**: Paleta coherente por clase de activo

### 🎨 Componentes

- **PortfolioCard**: Tarjeta de cartera con visualización de composición
- **PortfolioGrid**: Grid responsivo de carteras
- **PortfolioDetail**: Vista detallada con gráficos interactivos
- **ActionButtons**: Botones de llamada a la acción
- **HomeCTAFooter**: Footer con múltiples CTAs
- **CTAFooter**: CTA específico para páginas de detalle
- **RedirectPage**: Modal seguro de redirección
- **LegalFooter**: Footer institucional
- **MarkdownContent**: Renderizador de contenido markdown para el glosario

### 📚 Glosario Financiero

El glosario utiliza **Astro Content Collections** para una gestión eficiente del contenido:

#### **Características**
- **Content Collections**: Gestión nativa de Astro con validación de esquemas
- **Archivos Markdown**: Cada entrada es un archivo `.md` independiente
- **Frontmatter tipado**: Validación automática con Zod
- **Diseño tipo Notion**: Interfaz limpia y minimalista
- **Búsqueda en tiempo real**: Filtrado instantáneo por términos
- **Filtros por categoría**: Organización por tipo de concepto
- **Navegación intuitiva**: Breadcrumbs y enlaces relacionados
- **Responsive**: Optimizado para todos los dispositivos

#### **Estructura de Content Collections**
```typescript
// src/content/config.ts
const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    icon: z.string(),
    summary: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.enum(['Principiante', 'Intermedio', 'Avanzado']).optional(),
  }),
});
```

#### **Estructura de Archivos**
```
src/content/glossary/
├── dca-dollar-cost-averaging.md
├── etf-exchange-traded-fund.md
└── diversificacion.md
```

#### **Conceptos Incluidos**
- **DCA (Dollar Cost Averaging)**: Estrategia de inversión periódica
- **ETF (Exchange Traded Fund)**: Fondos cotizados en bolsa
- **Diversificación**: Gestión de riesgo en portafolios

#### **URLs del Glosario**
- **Índice**: `/glosario`
- **Entradas individuales**: `/glosario/[slug]`
- **Ejemplo**: `/glosario/dca-dollar-cost-averaging`

#### **Ventajas de Content Collections**
- **Validación automática**: Esquemas Zod previenen errores
- **TypeScript nativo**: Tipado completo en tiempo de compilación
- **Rendimiento optimizado**: Procesamiento en build time
- **Generación estática**: Todas las páginas pre-renderizadas
- **SEO optimizado**: Meta tags específicos por entrada
- **Tiempo de lectura**: Cálculo automático basado en palabras
- **Compartir**: Funcionalidad nativa de compartir/copiar enlace
- **Conceptos relacionados**: Sugerencias automáticas por categoría

#### **Agregar Nuevas Entradas**
1. Crear archivo `.md` en `src/content/glossary/`
2. Agregar frontmatter con el esquema requerido
3. Escribir contenido en markdown
4. Build automático genera las páginas

## 🌐 Despliegue en Cloudflare

### Configuración
- **Adaptador**: `@astrojs/cloudflare`
- **Modo**: Estático (`output: 'static'`)
- **Imágenes**: Dominios permitidos configurados

### Comandos
```bash
# Build y deploy
npm run build
npm run deploy

# Solo build
npm run build

# Preview local del build
npm run preview
```

## 🔧 Configuración

### Variables de Entorno
- Configuradas en `.dev.vars` para desarrollo
- Usar Wrangler para producción

### Imágenes
- **CDN Principal**: `compara-ii.b-cdn.net`
- **CDN Secundario**: `ik.imagekit.io`
- **CDN Quaestus**: `images.compara.ar`
- Configurados en `astro.config.mjs`

### Logo Quaestus
- **URL Modal**: `https://images.compara.ar/quaestus.webp`
- **URL Footer**: `https://compara-ii.b-cdn.net/enqueinvierto/LogoQuaestus_H_Transp.png`
- **Usado en**: Footer legal, modal de redirección

### Favicon
- **URL**: `https://emojifavicon.com/💼` (Emoji de maletín)
- **Tipo**: Favicon dinámico con emoji

## 📈 Optimizaciones

- **Hidratación Selectiva**: `client:load` solo donde es necesario
- **Imágenes Optimizadas**: Configuración de dominios CDN
- **Bundle Splitting**: Automático con Astro
- **CSS Optimizado**: Tailwind con purge automático

## 📋 Estructura de Datos

```typescript
interface Portfolio {
  nombre: string
  fecha: string
  composicion_principal: { tipo: string; porcentaje: number }[]
  composicion_detallada: { tipo: string; porcentaje: number }[]
}
```

## 🎨 Sistema de Colores por Clase de Activo

El sistema de colores está centralizado en `src/utils/colors.ts` y organizado por 4 categorías principales para máxima coherencia visual:

### 🟢 Cash & Money Market (Verde)
- **Color Base**: `rgba(34, 197, 94, 1)` - Verde
- **Incluye**: Cash - MM, USD - Caución, ARS - Caución
- **Variantes por moneda**:
  - USD: `rgba(16, 185, 129, 1)` (Verde azulado)
  - ARS: `rgba(74, 222, 128, 1)` (Verde claro)

### 🔵 Renta Fija (Azul)
- **Color Base**: `rgba(59, 130, 246, 1)` - Azul
- **Incluye**: Renta Fija, USD - Corporativos, USD - Bopreal, USD - Soberanos hard, ARS - CER, ARS - Tasa Fija
- **Aplicación**: Todos los instrumentos de renta fija independientemente de la moneda

### 🔴 Renta Variable (Rojo)
- **Color Base**: `rgba(239, 68, 68, 1)` - Rojo
- **Incluye**: Renta Variable, EEUU - Tecnología, EEUU - S&P, EEUU - Financials, EEUU - Energía, EEUU - Growth, EEUU - Value, Brasil - EWZ, Arg - Energía, Arg - Financials, Arg - Oil & Gas
- **Variantes por región**:
  - EEUU: `rgba(220, 38, 38, 1)` (Rojo oscuro)
  - Brasil: `rgba(248, 113, 113, 1)` (Rojo claro)
  - Argentina: `rgba(254, 202, 202, 1)` (Rojo muy claro)

### 🟡 Alternativos (Amarillo)
- **Color Base**: `rgba(234, 179, 8, 1)` - Amarillo
- **Incluye**: Alternativos, Metales
- **Aplicación**: Todos los instrumentos alternativos

### 🎯 Principios del Nuevo Sistema
1. **4 Categorías Principales**: Verde (Cash), Azul (Renta Fija), Rojo (Renta Variable), Amarillo (Alternativos)
2. **Lógica por Contenido**: Los colores se asignan según palabras clave en el nombre del activo
3. **Variantes Regionales**: Subcategorías por moneda/región dentro de cada color principal
4. **Consistencia Visual**: Mismo color base entre composición principal y detallada
5. **Escalabilidad**: Fácil agregar nuevos activos manteniendo la lógica de categorías

## 📞 Contacto y Soporte

Para consultas sobre implementación o asesoramiento financiero, contactar a Quaestus Wealth Management a través de los formularios integrados en la aplicación.

## 🔗 Enlaces

- **Sitio Original**: [enqueinvierto.ar](https://enqueinvierto.ar/)
- **Quaestus Advisory**: [qadvisory.com.ar](https://qadvisory.com.ar/)
- **Documentación Astro**: [astro.build](https://astro.build/)
- **Cloudflare Workers**: [developers.cloudflare.com](https://developers.cloudflare.com/workers/)
