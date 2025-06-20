globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript, f as addAttribute } from '../chunks/astro/server_T4Zx1oY7.mjs';
import { c as createLucideIcon, $ as $$Layout } from '../chunks/createLucideIcon_DEfVIdGO.mjs';
import { g as getCollection, B as BookOpen, T as Tag, C as Calendar, a as Calculator, b as ChartPie, c as ChartColumn } from '../chunks/_astro_content_COeTAVJu.mjs';
/* empty css                                 */
import { A as ArrowRight } from '../chunks/arrow-right_CW_RhHPB.mjs';
import { T as Target, a as TrendingUp } from '../chunks/trending-up_4Jt5YQGn.mjs';
export { a as renderers } from '../chunks/_@astro-renderers_CPBBSJw9.mjs';

/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const glossaryEntries = await getCollection("glossary");
  const title = "Glosario Financiero | Quaestus Wealth Management";
  const description = "Conceptos y t\xE9rminos financieros explicados de forma clara y pr\xE1ctica. Aprende sobre inversiones, estrategias y instrumentos financieros.";
  const categories = [...new Set(glossaryEntries.map((entry) => entry.data.category).filter(Boolean))];
  const sortedEntries = glossaryEntries.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const getIconComponent = (iconName) => {
    const iconMap = {
      "bar-chart": ChartColumn,
      "trending-up": TrendingUp,
      "pie-chart": ChartPie,
      "book-open": BookOpen,
      "calculator": Calculator,
      "target": Target
    };
    return iconMap[iconName] || BookOpen;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-3ax4xmkv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white" data-astro-cid-3ax4xmkv> <!-- Header --> <div class="bg-gradient-to-br from-blue-50 to-indigo-100 border-b border-gray-200" data-astro-cid-3ax4xmkv> <div class="container mx-auto px-4 py-16 md:py-20" data-astro-cid-3ax4xmkv> <div class="max-w-4xl mx-auto text-center" data-astro-cid-3ax4xmkv> <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6" data-astro-cid-3ax4xmkv> ${renderComponent($$result2, "BookOpen", BookOpen, { "className": "h-8 w-8 text-white", "data-astro-cid-3ax4xmkv": true })} </div> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-3ax4xmkv>
Glosario Financiero
</h1> <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" data-astro-cid-3ax4xmkv>
Conceptos y términos financieros explicados de forma clara y práctica. 
            Construye tu conocimiento paso a paso.
</p> <!-- Search Bar --> <div class="relative max-w-md mx-auto" data-astro-cid-3ax4xmkv> ${renderComponent($$result2, "Search", Search, { "className": "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400", "data-astro-cid-3ax4xmkv": true })} <input type="text" placeholder="Buscar términos..." class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="searchInput" data-astro-cid-3ax4xmkv> </div> </div> </div> </div> <div class="container mx-auto px-4 py-12" data-astro-cid-3ax4xmkv> <div class="max-w-6xl mx-auto" data-astro-cid-3ax4xmkv> <!-- Categories Filter --> <div class="mb-8" data-astro-cid-3ax4xmkv> <div class="flex flex-wrap gap-2" data-astro-cid-3ax4xmkv> <button class="category-filter px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white border border-blue-600" data-category="all" data-astro-cid-3ax4xmkv>
Todos
</button> ${categories.map((category) => renderTemplate`<button class="category-filter px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"${addAttribute(category, "data-category")} data-astro-cid-3ax4xmkv> ${renderComponent($$result2, "Tag", Tag, { "className": "h-4 w-4 inline mr-1", "data-astro-cid-3ax4xmkv": true })} ${category} </button>`)} </div> </div> <!-- Entries Grid --> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="entriesGrid" data-astro-cid-3ax4xmkv> ${sortedEntries.map((entry) => renderTemplate`<a${addAttribute(`/glosario/${entry.slug}`, "href")} class="entry-card-link group" data-astro-cid-3ax4xmkv> <article class="entry-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200 cursor-pointer"${addAttribute(entry.data.category, "data-category")} data-astro-cid-3ax4xmkv> <div class="flex items-start justify-between mb-4" data-astro-cid-3ax4xmkv> <div class="flex items-center gap-3" data-astro-cid-3ax4xmkv> <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors" data-astro-cid-3ax4xmkv> ${(() => {
    const IconComponent = getIconComponent(entry.data.icon);
    return renderTemplate`${renderComponent($$result2, "IconComponent", IconComponent, { "className": "h-5 w-5 text-blue-600", "data-astro-cid-3ax4xmkv": true })}`;
  })()} </div> <div data-astro-cid-3ax4xmkv> <h2 class="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors" data-astro-cid-3ax4xmkv> ${entry.data.title} </h2> ${entry.data.category && renderTemplate`<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700" data-astro-cid-3ax4xmkv> ${entry.data.category} </span>`} </div> </div> </div> <p class="text-gray-600 text-sm mb-4 line-clamp-3" data-astro-cid-3ax4xmkv> ${entry.data.summary} </p> <div class="flex items-center justify-between" data-astro-cid-3ax4xmkv> <div class="flex items-center text-xs text-gray-500" data-astro-cid-3ax4xmkv> ${renderComponent($$result2, "Calendar", Calendar, { "className": "h-4 w-4 mr-1", "data-astro-cid-3ax4xmkv": true })} ${new Date(entry.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </div> <span class="inline-flex items-center text-blue-600 group-hover:text-blue-800 text-sm font-medium transition-colors" data-astro-cid-3ax4xmkv>
Leer más
${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform", "data-astro-cid-3ax4xmkv": true })} </span> </div> </article> </a>`)} </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-12" data-astro-cid-3ax4xmkv> <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-3ax4xmkv> ${renderComponent($$result2, "Search", Search, { "className": "h-8 w-8 text-gray-400", "data-astro-cid-3ax4xmkv": true })} </div> <h3 class="text-lg font-medium text-gray-900 mb-2" data-astro-cid-3ax4xmkv>No se encontraron resultados</h3> <p class="text-gray-600" data-astro-cid-3ax4xmkv>Intenta con otros términos de búsqueda o categorías.</p> </div> </div> </div> </main> ${renderScript($$result2, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro", void 0);

const $$file = "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro";
const $$url = "/glosario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
