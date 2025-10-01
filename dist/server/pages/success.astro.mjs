/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Button } from '../chunks/button_28ZW2Ujm.mjs';
export { renderers } from '../renderers.mjs';

const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Subscription Pending" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[70vh] text-center"> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-8">
Almost there!
</h1> <p class="text-lg mb-4">
Please check your email to confirm your subscription.
</p> <p class="text-md text-gray-600 mb-8">
If you don't see the confirmation email, please check your spam folder.
</p> <!-- Resend confirmation section --> <div class="mb-8"> <p class="text-md text-gray-600 mb-4">
Didn't receive the email?
</p> <form id="resendForm" class="flex flex-col items-center gap-4"> <input type="email" name="email" id="email" placeholder="Enter your email" class="px-4 py-2 border rounded-md w-64" required> <button type="submit" class="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
Resend Confirmation Email
</button> <div id="message" class="text-sm"></div> </form> </div> <div> <a href="https://denver.space" class="inline-block"> ${renderComponent($$result3, "Button", $$Button, { "size": "lg", "style": "primary" }, { "default": ($$result4) => renderTemplate`Return to denver.space` })} </a> </div> </div> ` })} ` })} `;
}, "/home/space/denver_space/website/src/pages/success.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
