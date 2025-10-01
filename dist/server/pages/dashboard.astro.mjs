/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
import { s as supabase } from '../chunks/supabase_BxipnJbW.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://denver.space");
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const email = data.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-3nssi2tu": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Links and other information. Just for you.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Member Dashboard` })}` })} ${maybeRenderHead()}<main class="flex-1 flex flex-col gap-4 items-center p-4 mt-5 justify-center" data-astro-cid-3nssi2tu> <section class="w-full max-w-md" data-astro-cid-3nssi2tu> <h1 class="text-zinc-900 w-full mt-4 mb-2" data-astro-cid-3nssi2tu>
Welcome, ${email} </h1> <div class="grid grid-cols-1 gap-2 w-full" data-astro-cid-3nssi2tu> <a href="https://t.me/+h4pcGVvoUJ5hOWQx" target="_blank" class="bg-zinc-900 border-zinc-900 text-center py-1.5 border rounded-md my-2 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-3nssi2tu>
Members-Only Telegram
</a> <a href="https://lns.lightningshops.io/apps/3otbAyyp3TDiurkXSgCD9s1MdmGB/pos" target="_blank" class="bg-zinc-900 text-center border-zinc-900 py-1.5 border rounded-md my-2 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-3nssi2tu>
Membership Dues Payment
</a> <form action="/api/auth/signout" class="grid grid-cols-1 gap-3 w-full" data-astro-cid-3nssi2tu> <button type="submit" class="bg-zinc-900 border-zinc-900 py-1.5 border rounded-md my-2 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-3nssi2tu>
Sign Out
</button> </form> </div> </section> </main> ` })} ` })} `;
}, "/home/space/denver_space/website/src/pages/dashboard.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
