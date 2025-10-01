/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
export { renderers } from '../renderers.mjs';

const $$MemberAppSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Application Submitted - The Space" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-2xl mx-auto p-6 text-center"> <h1 class="text-3xl font-bold mb-4">Application Submitted Successfully!</h1> <p class="mb-8">Thank you for applying to The Space. We will review your application and get back to you soon.</p> <a href="/" class="px-8 py-2 bg-transparent text-red-500 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
Return Home
</a> </main> ` })}`;
}, "/home/space/denver_space/website/src/pages/member_app_success.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/member_app_success.astro";
const $$url = "/member_app_success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MemberAppSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
