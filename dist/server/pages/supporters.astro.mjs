/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DzdZBE-J.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DFWxbONb.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
import { $ as $$Pricing } from '../chunks/pricing_BvBmT6Mj.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Supporters = createComponent(async ($$result, $$props, $$slots) => {
  const publishedSponsors = await getCollection("sponsors", ({ data }) => {
    return !data.draft && new Date(data.publishDate) <= /* @__PURE__ */ new Date();
  });
  publishedSponsors.sort((a, b) => {
    const dateA = new Date(a.data.publishDate || "1970-01-01").getTime();
    const dateB = new Date(b.data.publishDate || "1970-01-01").getTime();
    return dateA - dateB;
  });
  const foundingSponsors = publishedSponsors.filter(
    (sponsor) => new Date(sponsor.data.publishDate) <= /* @__PURE__ */ new Date("2024-09-28")
  );
  const currentSponsors = publishedSponsors.filter(
    (sponsor) => new Date(sponsor.data.publishDate) > /* @__PURE__ */ new Date("2024-09-28")
  );
  const sponsorPlan = {
    name: "Become a Supporter",
    price: "Join The Mission",
    popular: true,
    features: [
      "Participate in our Educational Events",
      "Brand Recognition & Marketing",
      "Association with The Space",
      "Bitcoin Community Involvement",
      "Your Ideas & more..."
    ],
    button: {
      text: "Support Us",
      link: "/contact"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Supporters", "data-astro-cid-nrvamsy7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-nrvamsy7": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-nrvamsy7": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
The Space was made possible by Founding Supporters, Members, and Donors. Reach out to get involved.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Supporters` })}` })}  ${maybeRenderHead()}<div class="max-w-2xl mx-auto mt-16 mb-20 text-center" data-astro-cid-nrvamsy7> ${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": sponsorPlan, "data-astro-cid-nrvamsy7": true })} </div>  ${currentSponsors.length > 0 && renderTemplate`<section class="my-20" data-astro-cid-nrvamsy7> <h2 class="text-center text-4xl font-bold text-gray-800 mb-12" data-astro-cid-nrvamsy7>
Current Supporters
</h2> <div class="supporters-grid-4col" data-astro-cid-nrvamsy7> ${currentSponsors.map((sponsor) => renderTemplate`<a${addAttribute(sponsor.data.url, "href")} target="_blank" rel="noopener noreferrer" class="flex justify-center" data-astro-cid-nrvamsy7> <img${addAttribute(sponsor.data.avatar?.src || "/default-event-image.webp", "src")}${addAttribute(sponsor.data.avatar?.alt || `${sponsor.data.title} logo`, "alt")} class="sponsor-logo-4col rounded-full object-contain" loading="lazy" data-astro-cid-nrvamsy7> </a>`)} </div> </section>`} ${foundingSponsors.length > 0 && renderTemplate`<section class="my-20" data-astro-cid-nrvamsy7> <h2 class="text-center text-4xl font-bold text-gray-800 mb-12" data-astro-cid-nrvamsy7>
Founding Supporters
</h2> <div class="supporters-grid-4col" data-astro-cid-nrvamsy7> ${foundingSponsors.map((sponsor) => renderTemplate`<a${addAttribute(sponsor.data.url, "href")} target="_blank" rel="noopener noreferrer" class="flex justify-center" data-astro-cid-nrvamsy7> <img${addAttribute(sponsor.data.avatar?.src || "/default-event-image.webp", "src")}${addAttribute(sponsor.data.avatar?.alt || `${sponsor.data.title} logo`, "alt")} class="sponsor-logo-4col rounded-full object-contain" loading="lazy" data-astro-cid-nrvamsy7> </a>`)} </div> </section>`}` })} ` })} `;
}, "/home/space/denver_space/website/src/pages/supporters.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/supporters.astro";
const $$url = "/supporters";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Supporters,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
