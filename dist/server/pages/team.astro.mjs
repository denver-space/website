/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CqApwHla.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_IDNk06b-.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const publishedBoardMembers = await getCollection("board", ({ data }) => {
    return !data.draft && new Date(data.publishDate) < /* @__PURE__ */ new Date();
  });
  const publishedOfficers = await getCollection("officers", ({ data }) => {
    return !data.draft && new Date(data.publishDate) < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Officers", "data-astro-cid-6sqsh2pf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-6sqsh2pf": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-6sqsh2pf": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
The Space is run by a member-elected Board of Directors and operated by board-selected Officers who handle the day-to-day.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Team` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16" data-astro-cid-6sqsh2pf> <h2 class="font-bold text-3xl text-gray-800" data-astro-cid-6sqsh2pf>
Board of Directors
</h2> <p class="text-lg leading-relaxed text-slate-500" data-astro-cid-6sqsh2pf>
The Board of Directors consists of member-elected individuals around the Rocky Mountains, committed to bitcoin, open source technologies, education, and community building. We come from diverse backgrounds with different personalities, experiences, and skills.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12 mb-12 team-grid" data-astro-cid-6sqsh2pf> ${publishedBoardMembers.map((boardMemberEntry) => renderTemplate`<div class="group border-4 border-[#ffffff] rounded-lg p-2 team-card" data-astro-cid-6sqsh2pf> <div class="relative w-full aspect-square" data-astro-cid-6sqsh2pf> ${renderComponent($$result3, "Picture", $$Picture, { "src": boardMemberEntry.data.avatar.src, "alt": boardMemberEntry.data.avatar.alt, "sizes": "(max-width: 480px) 280px, (max-width: 768px) 350px, 400px", "width": 400, "height": 400, "loading": "lazy", "class": "w-full rounded bg-white object-cover object-center aspect-square", "data-astro-cid-6sqsh2pf": true })} <div class="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 space-y-3 rounded" data-astro-cid-6sqsh2pf> <h3 class="text-xl font-semibold" data-astro-cid-6sqsh2pf>${boardMemberEntry.data.name}</h3> <p data-astro-cid-6sqsh2pf>${boardMemberEntry.data.bio}</p> </div> </div> <div class="mt-4 text-center" data-astro-cid-6sqsh2pf> <h2 class="text-lg text-gray-800" data-astro-cid-6sqsh2pf>${boardMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500" data-astro-cid-6sqsh2pf> ${boardMemberEntry.data.title} </h3> </div> </div>`)} </div> <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16" data-astro-cid-6sqsh2pf> <h2 class="font-bold text-3xl text-gray-800" data-astro-cid-6sqsh2pf>
Officers
</h2> <p class="text-lg leading-relaxed text-slate-500" data-astro-cid-6sqsh2pf>
The Officers are selected by the Board of Directors to handle the day-to-day operations of The Space. They work closely with the Board to execute the organization's mission and serve the membership.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12 mb-20 team-grid" data-astro-cid-6sqsh2pf> ${publishedOfficers.map((officerEntry) => renderTemplate`<div class="group border-4 border-[#ffffff] rounded-lg p-2 team-card" data-astro-cid-6sqsh2pf> <div class="relative w-full aspect-square" data-astro-cid-6sqsh2pf> ${renderComponent($$result3, "Picture", $$Picture, { "src": officerEntry.data.avatar.src, "alt": officerEntry.data.avatar.alt, "sizes": "(max-width: 480px) 280px, (max-width: 768px) 350px, 400px", "width": 400, "height": 400, "loading": "lazy", "class": "w-full rounded bg-white object-cover object-center aspect-square", "data-astro-cid-6sqsh2pf": true })} <div class="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 space-y-3 rounded" data-astro-cid-6sqsh2pf> <h3 class="text-xl font-semibold" data-astro-cid-6sqsh2pf>${officerEntry.data.name}</h3> <p data-astro-cid-6sqsh2pf>${officerEntry.data.bio}</p> </div> </div> <div class="mt-4 text-center" data-astro-cid-6sqsh2pf> <h2 class="text-lg text-gray-800" data-astro-cid-6sqsh2pf>${officerEntry.data.name}</h2> <h3 class="text-sm text-slate-500" data-astro-cid-6sqsh2pf> ${officerEntry.data.title} </h3> </div> </div>`)} </div> ` })} ` })} `;
}, "/home/space/denver_space/website/src/pages/team.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
