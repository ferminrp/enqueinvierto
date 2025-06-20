globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_T4Zx1oY7.mjs';
import { c as createLucideIcon, $ as $$Layout } from '../../chunks/createLucideIcon_DEfVIdGO.mjs';
import { j as jsxRuntimeExports, $ as $$LegalFooter } from '../../chunks/LegalFooter_Dr2Tds5b.mjs';
import { r as reactExports } from '../../chunks/_@astro-renderers_CPBBSJw9.mjs';
export { a as renderers } from '../../chunks/_@astro-renderers_CPBBSJw9.mjs';
import { g as getColorForAssetType, p as portfolios } from '../../chunks/portfolios_9RjfNrgx.mjs';
import { C as CTAFooter, a as ChevronLeft } from '../../chunks/CTAFooter_B_qQe0Jl.mjs';

function PortfolioDetail({ portfolio }) {
  const [isLargeScreen, setIsLargeScreen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const sortedComposicionPrincipal = [...portfolio.composicion_principal].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );
  const sortedComposicionDetallada = [...portfolio.composicion_detallada].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );
  const midpoint = Math.ceil(sortedComposicionDetallada.length / 2);
  const column1 = sortedComposicionDetallada.slice(0, midpoint);
  const column2 = sortedComposicionDetallada.slice(midpoint);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-[#E5E7EB] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Asignación Principal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 rounded-lg overflow-hidden mb-4", children: sortedComposicionPrincipal.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full flex items-center justify-center relative transition-all duration-300",
          style: {
            width: `${item.porcentaje}%`,
            backgroundColor: getColorForAssetType(item.tipo, 0.8)
          },
          children: item.porcentaje >= 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-white drop-shadow-md", children: [
            item.porcentaje,
            "%"
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-4", children: sortedComposicionPrincipal.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm bg-gray-50 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-3 h-3 rounded-full mr-2",
            style: { backgroundColor: getColorForAssetType(item.tipo, 0.8) }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item.tipo })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Asignación Detallada" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-4 rounded-full overflow-hidden", children: sortedComposicionDetallada.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full transition-all duration-300",
          style: {
            width: `${item.porcentaje}%`,
            backgroundColor: getColorForAssetType(item.tipo, 0.8)
          }
        },
        index
      )) }) }),
      isLargeScreen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: column1.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full mr-2",
                    style: { backgroundColor: getColorForAssetType(item.tipo, 0.8) }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item.tipo })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-gray-900 font-medium px-2 py-0.5 rounded-md",
                  style: { backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` },
                  children: [
                    item.porcentaje,
                    "%"
                  ]
                }
              )
            ]
          },
          `col1-${index}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: column2.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full mr-2",
                    style: { backgroundColor: getColorForAssetType(item.tipo, 0.8) }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item.tipo })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-gray-900 font-medium px-2 py-0.5 rounded-md",
                  style: { backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` },
                  children: [
                    item.porcentaje,
                    "%"
                  ]
                }
              )
            ]
          },
          `col2-${index}`
        )) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sortedComposicionDetallada.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full mr-2",
                  style: { backgroundColor: getColorForAssetType(item.tipo, 0.8) }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item.tipo })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-gray-900 font-medium px-2 py-0.5 rounded-md",
                style: { backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` },
                children: [
                  item.porcentaje,
                  "%"
                ]
              }
            )
          ]
        },
        index
      )) })
    ] })
  ] }) });
}

/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode);

const $$Astro = createAstro();
async function getStaticPaths() {
  return portfolios.map((portfolio, index) => ({
    params: { id: index.toString() },
    props: { portfolio, index }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { portfolio } = Astro2.props;
  if (!portfolio) {
    return Astro2.redirect("/404");
  }
  const title = `${portfolio.nombre} | Quaestus Wealth Management`;
  const description = `Detalle de la ${portfolio.nombre} recomendada por Quaestus Wealth Management. Fecha: ${portfolio.fecha}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen relative overflow-hidden"> <div class="fixed inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #eef2f7 100%); z-index: -1;"></div> <div class="container mx-auto px-4 py-16 md:py-24 relative"> <div class="max-w-4xl mx-auto"> <nav class="flex items-center mb-8 text-sm overflow-hidden"> <a href="/" class="text-gray-500 hover:text-gray-700 inline-flex items-center gap-1 flex-shrink-0"> ${renderComponent($$result2, "Home", House, { "className": "h-4 w-4" })} <span class="hidden sm:inline">Inicio</span> </a> <span class="mx-2 text-gray-400 flex-shrink-0">/</span> <span class="text-gray-800 font-medium truncate">Detalle de Cartera</span> </nav> <div class="mb-10"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${portfolio.nombre}</h1> <p class="text-gray-600">Fecha: <span class="font-medium">${portfolio.fecha}</span></p> </div> ${renderComponent($$result2, "PortfolioDetail", PortfolioDetail, { "portfolio": portfolio, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/PortfolioDetail", "client:component-export": "default" })} <div class="mt-12"> ${renderComponent($$result2, "CTAFooter", CTAFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/CTAFooter", "client:component-export": "default" })} </div> <div class="mt-10"> <a href="/" class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium"> ${renderComponent($$result2, "ChevronLeft", ChevronLeft, { "className": "h-5 w-5" })}
Volver a todas las carteras
</a> </div> ${renderComponent($$result2, "LegalFooter", $$LegalFooter, {})} </div> </div> </main> ` })}`;
}, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/cartera/[id].astro", void 0);

const $$file = "/Users/ripio/Documents/Github/enqueinvierto/src/pages/cartera/[id].astro";
const $$url = "/cartera/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
