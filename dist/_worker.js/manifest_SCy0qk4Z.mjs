globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_T4Zx1oY7.mjs';
import './chunks/astro-designed-error-pages_CzNCO9R-.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_QNjM3bUN.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ripio/Documents/Github/enqueinvierto/","cacheDir":"file:///Users/ripio/Documents/Github/enqueinvierto/node_modules/.astro/","outDir":"file:///Users/ripio/Documents/Github/enqueinvierto/dist/","srcDir":"file:///Users/ripio/Documents/Github/enqueinvierto/src/","publicDir":"file:///Users/ripio/Documents/Github/enqueinvierto/public/","buildClientDir":"file:///Users/ripio/Documents/Github/enqueinvierto/dist/","buildServerDir":"file:///Users/ripio/Documents/Github/enqueinvierto/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"glosario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/glosario","isIndex":true,"type":"page","pattern":"^\\/glosario\\/?$","segments":[[{"content":"glosario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/glosario/index.astro","pathname":"/glosario","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"jubilacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/jubilacion","isIndex":false,"type":"page","pattern":"^\\/jubilacion\\/?$","segments":[[{"content":"jubilacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/jubilacion.astro","pathname":"/jubilacion","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/glosario/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/glosario/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/cartera/[id].astro",{"propagation":"none","containsHead":true}],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/jubilacion.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/cartera/[id]@_@astro":"pages/cartera/_id_.astro.mjs","\u0000@astro-page:src/pages/glosario/[slug]@_@astro":"pages/glosario/_slug_.astro.mjs","\u0000@astro-page:src/pages/glosario/index@_@astro":"pages/glosario.astro.mjs","\u0000@astro-page:src/pages/jubilacion@_@astro":"pages/jubilacion.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_SCy0qk4Z.mjs","/Users/ripio/Documents/Github/enqueinvierto/node_modules/astro/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/ripio/Documents/Github/enqueinvierto/.astro/content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","/Users/ripio/Documents/Github/enqueinvierto/.astro/content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D0hphye8.mjs","/Users/ripio/Documents/Github/enqueinvierto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Br9Eu0mL.mjs","/Users/ripio/Documents/Github/enqueinvierto/src/components/PortfolioDetail":"_astro/PortfolioDetail.oDClASil.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/ActionButtons":"_astro/ActionButtons.BLSwM1vX.js","/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.B-41bUIC.js","/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BXNvRMOB.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/PortfolioGrid":"_astro/PortfolioGrid.DC4uiKed.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/HomeCTAFooter":"_astro/HomeCTAFooter.DFU8a3Jb.js","@astrojs/react/client.js":"_astro/client.DN8ES6L5.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/RetirementCalculator":"_astro/RetirementCalculator.BFnLTgHZ.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/CTAFooter":"_astro/CTAFooter.5rpnaq53.js","/Users/ripio/Documents/Github/enqueinvierto/src/components/CTAFooter.tsx":"_astro/CTAFooter.CpNsF0N8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/[slug].astro?astro&type=script&index=0&lang.ts","function n(){const t=document.querySelector(\"article\"),o=document.querySelector(\".reading-progress\");if(!t||!o)return;const e=t.offsetTop,r=t.offsetHeight,s=window.innerHeight,c=window.scrollY,i=e+r-s,d=Math.min(Math.max((c-e)/(i-e),0),1);o.style.width=`${d*100}%`}document.addEventListener(\"DOMContentLoaded\",()=>{window.addEventListener(\"scroll\",n),n()});"],["/Users/ripio/Documents/Github/enqueinvierto/src/pages/glosario/index.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"searchInput\"),l=document.getElementById(\"entriesGrid\"),c=document.getElementById(\"emptyState\"),n=document.querySelectorAll(\".category-filter\"),g=document.querySelectorAll(\".entry-card-link\");let a=\"all\";function y(){const e=s.value.toLowerCase();let t=0;g.forEach(r=>{const o=r.querySelector(\".entry-card\"),i=o.querySelector(\"h2\")?.textContent?.toLowerCase()||\"\",d=o.querySelector(\"p\")?.textContent?.toLowerCase()||\"\",u=o.getAttribute(\"data-category\")||\"\";(i.includes(e)||d.includes(e))&&(a===\"all\"||u===a)?(r.style.display=\"block\",t++):r.style.display=\"none\"}),t===0?(l.style.display=\"none\",c.style.display=\"block\"):(l.style.display=\"grid\",c.style.display=\"none\")}function m(e){a=e,n.forEach(t=>{t.getAttribute(\"data-category\")===e?t.className=\"category-filter px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white border border-blue-600\":t.className=\"category-filter px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50\"}),y()}s.addEventListener(\"input\",y);n.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-category\")||\"all\";m(t)})});"]],"assets":["/_astro/_id_.BfKyzi9h.css","/file.svg","/globe.svg","/quaestus.webp","/vercel.svg","/window.svg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_astro/ActionButtons.BLSwM1vX.js","/_astro/CTAFooter.5rpnaq53.js","/_astro/CTAFooter.CpNsF0N8.js","/_astro/HomeCTAFooter.DFU8a3Jb.js","/_astro/PortfolioDetail.oDClASil.js","/_astro/PortfolioGrid.DC4uiKed.js","/_astro/RedirectPage.Jc9OyJPw.js","/_astro/RetirementCalculator.BFnLTgHZ.js","/_astro/client.DN8ES6L5.js","/_astro/colors.BdwDd45W.js","/_astro/createLucideIcon.BJ3A0kXn.js","/_astro/index.BQFV5hT1.js","/_astro/index.eCxJ45ll.js","/_astro/jsx-runtime.9DypCmAh.js","/_astro/proxy.C8A-CBu5.js","/_worker.js/pages/glosario.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/jubilacion.astro.mjs","/_worker.js/_astro/_id_.BfKyzi9h.css","/_worker.js/chunks/CTAFooter_Bmre_vJS.mjs","/_worker.js/chunks/LegalFooter_Dr2Tds5b.mjs","/_worker.js/chunks/RedirectPage_C6uy2UMP.mjs","/_worker.js/chunks/_@astro-renderers_CPBBSJw9.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_K_N7yieG.mjs","/_worker.js/chunks/_astro_assets_CembHBOc.mjs","/_worker.js/chunks/_astro_content_BeK-f9iW.mjs","/_worker.js/chunks/_astro_data-layer-content_D0hphye8.mjs","/_worker.js/chunks/arrow-right_BvchzocT.mjs","/_worker.js/chunks/astro-designed-error-pages_CzNCO9R-.mjs","/_worker.js/chunks/astro_XrOc3Dc-.mjs","/_worker.js/chunks/clock_ByYIo7_d.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/createLucideIcon_ogJrvMcm.mjs","/_worker.js/chunks/index_O-lCq7LV.mjs","/_worker.js/chunks/noop-middleware_QNjM3bUN.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/path_C-ZOwaTP.mjs","/_worker.js/chunks/portfolios_9RjfNrgx.mjs","/_worker.js/chunks/sharp_Br9Eu0mL.mjs","/_worker.js/chunks/trending-up_DX9ohA_K.mjs","/_worker.js/pages/glosario/_slug_.astro.mjs","/_worker.js/pages/cartera/_id_.astro.mjs","/_worker.js/chunks/astro/server_T4Zx1oY7.mjs","/glosario/index.html","/jubilacion/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"fHNXmatpAbExu9r3X51UI6b+49PWs1nv03c1wX9iUBA=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
