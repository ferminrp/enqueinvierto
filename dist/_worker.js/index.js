globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as renderers } from './chunks/_@astro-renderers_CUZfLwGx.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_K_N7yieG.mjs';
import { manifest } from './manifest_DlM9uzZU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/cartera/_id_.astro.mjs');
const _page1 = () => import('./pages/glosario/_slug_.astro.mjs');
const _page2 = () => import('./pages/glosario.astro.mjs');
const _page3 = () => import('./pages/jubilacion.astro.mjs');
const _page4 = () => import('./pages/salud-financiera.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/cartera/[id].astro", _page0],
    ["src/pages/glosario/[slug].astro", _page1],
    ["src/pages/glosario/index.astro", _page2],
    ["src/pages/jubilacion.astro", _page3],
    ["src/pages/salud-financiera.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
