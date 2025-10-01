/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
export { renderers } from '../renderers.mjs';

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const title = "Sign in";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1 flex flex-col gap-4 items-center p-4 justify-center"> <section class="sign-in-card bg-gradient border-4 border-[#ffffff] rounded-lg p-6 transition-transform duration-500 ease hover:transform hover:translate-y-1 w-full max-w-md"> <h1 class="font-semibold text-2xl text-white w-full mb-1"> ${title} </h1> <form action="/api/auth/signin" method="post" class="grid grid-cols-1 gap-3 w-full"> <div class="grid grid-cols-1 gap-2"> <label for="email" class="font-medium text-white text-sm">Email</label> <input id="email" type="email" name="email" class="rounded-md py-1 px-3 border bg-zinc-50 border-zinc-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:ring-opacity-60"> </div> <div class="grid grid-cols-1 gap-2"> <label for="password" class="font-medium text-white text-sm">Password</label> <input id="password" type="password" name="password" class="rounded-md py-1 px-3 border bg-zinc-50 border-zinc-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:ring-opacity-60"> </div> <button type="submit" class="bg-zinc-900 border-zinc-900 py-1.5 border rounded-md mt-2 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">Sign In</button> </form> </section> </main> ` })}`;
}, "/home/space/denver_space/website/src/pages/signin.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
