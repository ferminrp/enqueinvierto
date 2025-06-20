globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createLucideIcon } from './createLucideIcon_DEfVIdGO.mjs';
import { j as jsxRuntimeExports } from './LegalFooter_Dr2Tds5b.mjs';
import { r as reactExports } from './_@astro-renderers_CPBBSJw9.mjs';
import { H as Handshake, A as AnimatePresence, R as RedirectPage } from './RedirectPage_D3zq7uje.mjs';

/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);

function CTAFooter() {
  const [showRedirect, setShowRedirect] = reactExports.useState(false);
  const handleOpenAccount = () => {
    setShowRedirect(true);
  };
  const handleClose = () => {
    setShowRedirect(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:max-w-[70%]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "¿Necesitás asesoramiento financiero?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "En Quaestus Advisory (AAGI N° 1098 CNV) te podemos ayudar. Estructuramos, ejecutamos y administramos carteras de inversión." })
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
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showRedirect && /* @__PURE__ */ jsxRuntimeExports.jsx(RedirectPage, { onClose: handleClose, onContinue: () => {
    } }) })
  ] });
}

export { CTAFooter as C, ChevronLeft as a };
