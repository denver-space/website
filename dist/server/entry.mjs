import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_LlBelSd3.mjs';
import { manifest } from './manifest_Dp0jT8LI.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/api/membership-application.astro.mjs');
const _page6 = () => import('./pages/api/resend-confirmation.astro.mjs');
const _page7 = () => import('./pages/api/subscribe.astro.mjs');
const _page8 = () => import('./pages/bitcoin_financial_summit.astro.mjs');
const _page9 = () => import('./pages/bitcoinweek_ethdenver.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/dashboard.astro.mjs');
const _page12 = () => import('./pages/events.astro.mjs');
const _page13 = () => import('./pages/heatpunk_summit.astro.mjs');
const _page14 = () => import('./pages/member_app_success.astro.mjs');
const _page15 = () => import('./pages/membership.astro.mjs');
const _page16 = () => import('./pages/membership-application.astro.mjs');
const _page17 = () => import('./pages/resources.astro.mjs');
const _page18 = () => import('./pages/signin.astro.mjs');
const _page19 = () => import('./pages/sponsors.astro.mjs');
const _page20 = () => import('./pages/success.astro.mjs');
const _page21 = () => import('./pages/team.astro.mjs');
const _page22 = () => import('./pages/venue.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/api/membership-application.js", _page5],
    ["src/pages/api/resend-confirmation.js", _page6],
    ["src/pages/api/subscribe.js", _page7],
    ["src/pages/bitcoin_financial_summit.astro", _page8],
    ["src/pages/bitcoinweek_ethdenver.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/dashboard.astro", _page11],
    ["src/pages/events.astro", _page12],
    ["src/pages/heatpunk_summit.astro", _page13],
    ["src/pages/member_app_success.astro", _page14],
    ["src/pages/membership.astro", _page15],
    ["src/pages/membership-application.astro", _page16],
    ["src/pages/resources.astro", _page17],
    ["src/pages/signin.astro", _page18],
    ["src/pages/sponsors.astro", _page19],
    ["src/pages/success.astro", _page20],
    ["src/pages/team.astro", _page21],
    ["src/pages/venue.astro", _page22],
    ["src/pages/index.astro", _page23]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/space/denver_space/website/dist/client/",
    "server": "file:///home/space/denver_space/website/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
