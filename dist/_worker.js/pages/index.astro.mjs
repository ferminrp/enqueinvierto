globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_T4Zx1oY7.mjs';
import { c as createLucideIcon, $ as $$Layout } from '../chunks/createLucideIcon_DEfVIdGO.mjs';
import { j as jsxRuntimeExports, $ as $$LegalFooter } from '../chunks/LegalFooter_Dr2Tds5b.mjs';
import { g as getColorForAssetType, p as portfolios } from '../chunks/portfolios_9RjfNrgx.mjs';
import { m as motion, H as Handshake, A as AnimatePresence, R as RedirectPage } from '../chunks/RedirectPage_D3zq7uje.mjs';
import { r as reactExports } from '../chunks/_@astro-renderers_CPBBSJw9.mjs';
export { a as renderers } from '../chunks/_@astro-renderers_CPBBSJw9.mjs';

/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);

function PortfolioCard({ portfolio, index }) {
  const portfolioName = portfolio.nombre.replace("Cartera Táctica: ", "");
  const sortedComposicionPrincipal = [...portfolio.composicion_principal].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `/cartera/${index}`,
          className: "block bg-white rounded-xl border border-[#E5E7EB] hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md p-6 h-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight", children: portfolioName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-1", children: portfolio.fecha })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex-grow flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 flex-grow flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-5 rounded-lg overflow-hidden", children: sortedComposicionPrincipal.map((item, index2) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full flex items-center justify-center relative transition-all duration-300",
                    style: {
                      width: `${item.porcentaje}%`,
                      backgroundColor: getColorForAssetType(item.tipo, 0.8)
                    }
                  },
                  index2
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 min-h-[40px] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: sortedComposicionPrincipal.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-xs bg-gray-50 px-1.5 py-0.5 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2 h-2 mr-1 rounded-full",
                    style: {
                      backgroundColor: getColorForAssetType(item.tipo, 0.8)
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-xs", children: item.tipo })
              ] }, index2)) }) })
            ] }) }) })
          ] })
        }
      )
    }
  );
}

function PortfolioGrid({ portfolios }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: portfolios.map((portfolio, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioCard, { portfolio, index }, index)) });
}

function ActionButtons() {
  const [showRedirect, setShowRedirect] = reactExports.useState(false);
  const handleOpenAccount = () => {
    setShowRedirect(true);
  };
  const handleClose = () => {
    setShowRedirect(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleOpenAccount,
        className: "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2 w-auto cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-5 w-5" }),
          "Quiero Asesoramiento"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showRedirect && /* @__PURE__ */ jsxRuntimeExports.jsx(RedirectPage, { onClose: handleClose, onContinue: () => {
    } }) })
  ] });
}

function HomeCTAFooter() {
  const [showRedirect, setShowRedirect] = reactExports.useState(false);
  const asesorUrl = "https://qadvisory.com.ar/asesores-financieros/";
  const empresaUrl = "https://docs.google.com/forms/d/e/1FAIpQLSciLI3kcNBVv9z7a_0wTCoRHSvkTs3wfArGJctoFXeScFR8Hw/viewform?usp=pp_url&entry.946569307=En+Que+Invierto";
  const handleOpenAccount = () => {
    setShowRedirect(true);
  };
  const handleClose = () => {
    setShowRedirect(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:max-w-[70%]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "¿Te interesan nuestras carteras de inversión?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Nuestros asesores pueden ayudarte a implementar estas estrategias de inversión adaptadas a tu perfil." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleOpenAccount,
            className: "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-5 w-5" }),
              "Quiero Asesoramiento"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-200 my-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:max-w-[70%]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "¿Sos Asesor?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Desbloqueá herramientas reales para llevar tu trabajo a otro nivel." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: asesorUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "border border-gray-800 hover:bg-gray-100 text-gray-800 font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-5 w-5" }),
              "Conocer Más"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-200 my-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:max-w-[70%]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "¿Sos Empresa?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Te ayudamos en la gestión de tu tesorería." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: empresaUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "border border-gray-800 hover:bg-gray-100 text-gray-800 font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-5 w-5" }),
              "Conocer Más"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showRedirect && /* @__PURE__ */ jsxRuntimeExports.jsx(RedirectPage, { onClose: handleClose, onContinue: () => {
    } }) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Carteras de Inversi\xF3n | Quaestus Advisory S.A.";
  const description = "Explora las nueve carteras de inversi\xF3n recomendadas por Quaestus Advisory S.A. para diferentes perfiles de riesgo.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen relative overflow-hidden"> <!-- Gradiente más pronunciado para el fondo --> <div class="fixed inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #eef2f7 100%); z-index: -1;"></div> <div class="container mx-auto px-4 py-16 md:py-24 relative"> <!-- Header con diseño premium --> <div class="max-w-4xl mx-auto mb-10 md:mb-16"> <div class="relative mb-6"> <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight relative inline-block z-10">
Carteras de Inversión
<span class="absolute -bottom-2 md:-bottom-3 left-0 h-3 md:h-4 bg-amber-200 -z-10 opacity-70 w-full"></span> </h1> </div> <p class="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed md:leading-relaxed relative z-10">
Te compartimos las nueve carteras recomendadas por
<span class="font-medium text-gray-800"> Quaestus Advisory S.A. </span>
para cada perfil. Hacé clic en cualquier tarjeta para ver la asignación detallada de activos.
</p> <!-- Nueva leyenda con menor jerarquía --> <p class="text-gray-500 text-sm md:text-base mt-4 mb-6 max-w-3xl relative z-10">
¿Necesitás una mano para implementar estas carteras? Nuestros asesores te pueden ayudar.
</p> <!-- Botones de acción alineados con el texto --> <div class="mt-8 relative z-10"> ${renderComponent($$result2, "ActionButtons", ActionButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/ActionButtons", "client:component-export": "default" })} </div> </div> <!-- Grid de carteras con el mismo ancho máximo que el header --> <div class="max-w-4xl mx-auto mt-16 relative z-10"> ${renderComponent($$result2, "PortfolioGrid", PortfolioGrid, { "portfolios": portfolios, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/PortfolioGrid", "client:component-export": "default" })} </div> <!-- Footer CTA --> <div class="max-w-4xl mx-auto mt-16 md:mt-24 relative z-10"> ${renderComponent($$result2, "HomeCTAFooter", HomeCTAFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ripio/Documents/Github/enqueinvierto/src/components/HomeCTAFooter", "client:component-export": "default" })} </div> <!-- Leyenda legal --> <div class="max-w-4xl mx-auto relative z-10"> ${renderComponent($$result2, "LegalFooter", $$LegalFooter, {})} </div> </div> </main> ` })}`;
}, "/Users/ripio/Documents/Github/enqueinvierto/src/pages/index.astro", void 0);

const $$file = "/Users/ripio/Documents/Github/enqueinvierto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
