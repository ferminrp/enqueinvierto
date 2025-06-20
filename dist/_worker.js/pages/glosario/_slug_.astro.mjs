globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, d as renderSlot, b as renderTemplate, a as createAstro, r as renderComponent, e as renderScript, f as addAttribute } from '../../chunks/astro/server_T4Zx1oY7.mjs';
import { $ as $$Layout } from '../../chunks/createLucideIcon_DEfVIdGO.mjs';
import { $ as $$LegalFooter } from '../../chunks/LegalFooter_Dr2Tds5b.mjs';
/* empty css                                     */
import { C as CTAFooter, a as ChevronLeft } from '../../chunks/CTAFooter_B_qQe0Jl.mjs';
import { g as getCollection, B as BookOpen, C as Calendar, T as Tag, a as Calculator, b as ChartPie, c as ChartColumn } from '../../chunks/_astro_content_COeTAVJu.mjs';
import { C as Clock } from '../../chunks/clock_D0MvS3WN.mjs';
import { T as Target, a as TrendingUp } from '../../chunks/trending-up_4Jt5YQGn.mjs';
export { a as renderers } from '../../chunks/_@astro-renderers_CPBBSJw9.mjs';

const $$GlossaryContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="notion-content" data-astro-cid-6heipz62> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/ripio/Documents/Github/enqueinvierto/src/components/GlossaryContent.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const glossaryEntries = await getCollection("glossary");
  return glossaryEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const allEntries = await getCollection("glossary");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const title = `${entry.data.title} | Glosario Financiero`;
  const description = entry.data.summary;
  const wordCount = entry.body.split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-yxoteosn": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="reading-progress" data-astro-cid-yxoteosn></div> <main class="min-h-screen bg-white" data-astro-cid-yxoteosn> <!-- Header --> <div class="bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-200" data-astro-cid-yxoteosn> <div class="container mx-auto px-4 py-8" data-astro-cid-yxoteosn> <div class="max-w-4xl mx-auto" data-astro-cid-yxoteosn> <!-- Breadcrumb --> <nav class="flex items-center mb-6 text-sm" data-astro-cid-yxoteosn> <a href="/" class="text-gray-500 hover:text-gray-700 inline-flex items-center gap-1" data-astro-cid-yxoteosn> ${renderComponent($$result2, "BookOpen", BookOpen, { "className": "h-4 w-4", "data-astro-cid-yxoteosn": true })}
Inicio
</a> <span class="mx-2 text-gray-400" data-astro-cid-yxoteosn>/</span> <a href="/glosario" class="text-gray-500 hover:text-gray-700" data-astro-cid-yxoteosn>
Glosario
</a> <span class="mx-2 text-gray-400" data-astro-cid-yxoteosn>/</span> <span class="text-gray-800 font-medium truncate" data-astro-cid-yxoteosn>${entry.data.title}</span> </nav> <!-- Entry Header --> <div class="flex items-start gap-4 mb-6" data-astro-cid-yxoteosn> <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0" data-astro-cid-yxoteosn> ${(() => {
    const IconComponent = getIconComponent(entry.data.icon);
    return renderTemplate`${renderComponent($$result2, "IconComponent", IconComponent, { "className": "h-6 w-6 text-blue-600", "data-astro-cid-yxoteosn": true })}`;
  })()} </div> <div class="flex-1" data-astro-cid-yxoteosn> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3" data-astro-cid-yxoteosn> ${entry.data.title} </h1> <p class="text-lg text-gray-600 mb-4 leading-relaxed" data-astro-cid-yxoteosn> ${entry.data.summary} </p> <!-- Meta Information --> <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500" data-astro-cid-yxoteosn> <div class="flex items-center gap-1" data-astro-cid-yxoteosn> ${renderComponent($$result2, "Calendar", Calendar, { "className": "h-4 w-4", "data-astro-cid-yxoteosn": true })} ${new Date(entry.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </div> <div class="flex items-center gap-1" data-astro-cid-yxoteosn> ${renderComponent($$result2, "Clock", Clock, { "className": "h-4 w-4", "data-astro-cid-yxoteosn": true })} ${readingTime} min de lectura
</div> ${entry.data.category && renderTemplate`<div class="flex items-center gap-1" data-astro-cid-yxoteosn> ${renderComponent($$result2, "Tag", Tag, { "className": "h-4 w-4", "data-astro-cid-yxoteosn": true })} <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800" data-astro-cid-yxoteosn> ${entry.data.category} </span> </div>`} </div> </div> </div> </div> </div> </div> <!-- Content --> <div class="container mx-auto px-4 py-12" data-astro-cid-yxoteosn> <div class="max-w-4xl mx-auto" data-astro-cid-yxoteosn> <article class="bg-white" data-astro-cid-yxoteosn> <!-- Content Body --> ${renderComponent($$result2, "GlossaryContent", $$GlossaryContent, { "data-astro-cid-yxoteosn": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, { "data-astro-cid-yxoteosn": true })} ` })} <!-- CTA Footer --> ${renderComponent($$result2, "CTAFooter", CTAFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/CTAFooter.tsx", "client:component-export": "default", "data-astro-cid-yxoteosn": true })} <!-- Navigation --> <div class="navigation-section mt-12 pt-8 border-t border-gray-200" data-astro-cid-yxoteosn> <div class="flex flex-col sm:flex-row gap-4 justify-between" data-astro-cid-yxoteosn> <a href="/glosario" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium" data-astro-cid-yxoteosn> ${renderComponent($$result2, "ChevronLeft", ChevronLeft, { "className": "h-5 w-5", "data-astro-cid-yxoteosn": true })}
Volver al glosario
</a> <div class="flex gap-4" data-astro-cid-yxoteosn> <!-- Previous/Next entries could go here --> <a href="/cartera" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" data-astro-cid-yxoteosn>
Ver carteras
</a> </div> </div> <!-- Related Concepts --> <div class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-yxoteosn> <h3 class="text-xl font-semibold text-gray-900 mb-6" data-astro-cid-yxoteosn>Conceptos relacionados</h3> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-yxoteosn> ${allEntries.filter((e) => e.slug !== entry.slug && e.data.category === entry.data.category).slice(0, 3).map((relatedEntry) => renderTemplate`<a${addAttribute(`/glosario/${relatedEntry.slug}`, "href")} class="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-200" data-astro-cid-yxoteosn> <div class="flex items-center gap-3 mb-2" data-astro-cid-yxoteosn> <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center" data-astro-cid-yxoteosn> ${(() => {
    const IconComponent = getIconComponent(relatedEntry.data.icon);
    return renderTemplate`${renderComponent($$result2, "IconComponent", IconComponent, { "className": "h-4 w-4 text-blue-600", "data-astro-cid-yxoteosn": true })}`;
  })()} </div> <h4 class="font-medium text-gray-900" data-astro-cid-yxoteosn>${relatedEntry.data.title}</h4> </div> <p class="text-sm text-gray-600 line-clamp-2" data-astro-cid-yxoteosn> ${relatedEntry.data.summary} </p> </a>`)} </div> </div> </div></article> </div> ${renderComponent($$result2, "LegalFooter", $$LegalFooter, { "data-astro-cid-yxoteosn": true })} </div> </main> ${renderScript($$result2, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro", void 0);

const $$file = "/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro";
const $$url = "/glosario/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
