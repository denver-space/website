/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CqApwHla.mjs';
import { $ as $$Container, b as $$Link, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
import { $ as $$Pricing } from '../chunks/pricing_BREYPUzt.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Sponsors = createComponent(async ($$result, $$props, $$slots) => {
  const publishedSponsors = await getCollection("sponsors", ({ data }) => {
    return !data.draft && new Date(data.publishDate) <= /* @__PURE__ */ new Date();
  });
  publishedSponsors.sort((a, b) => {
    const dateA = new Date(a.data.publishDate || "1970-01-01").getTime();
    const dateB = new Date(b.data.publishDate || "1970-01-01").getTime();
    return dateA - dateB;
  });
  const foundingSponsors = publishedSponsors.filter((sponsor) => new Date(sponsor.data.publishDate) <= /* @__PURE__ */ new Date("2024-09-28"));
  publishedSponsors.filter((sponsor) => new Date(sponsor.data.publishDate) > /* @__PURE__ */ new Date("2024-09-28"));
  const sponsorPlan = {
    name: "Become a Sponsor",
    price: "Support The Mission",
    popular: true,
    features: [
      "Host your Own Events & Presentations",
      "Brand Recognition & Marketing",
      "Association with The Space",
      "Sell your Goods and Services",
      "Bitcoin Community Involvement",
      "Membership, Co-Working or Private Offices",
      "Exclusive Talent Access",
      "Your Ideas & more..."
    ],
    button: {
      text: "Sponsor Us",
      link: "/contact"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sponsors", "data-astro-cid-3z6uernf": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-3z6uernf": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-3z6uernf": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
The Space was made possible by Founding Sponsors, Members, and Donors. Reach out to get involved.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Sponsors` })}` })}${maybeRenderHead()}<div class="founding-sponsors-container grid md:grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-6xl mt-12 mb-12 px-4 lg:px-0" data-astro-cid-3z6uernf><!-- Founding Sponsors Grid --><div class="order-2 md:order-1 flex flex-col gap-3" data-astro-cid-3z6uernf><h2 class="font-bold text-center text-3xl mb-12 text-gray-800" data-astro-cid-3z6uernf>Our Founding Support</h2><div class="sponsors-grid" data-astro-cid-3z6uernf>${foundingSponsors.map((sponsor) => renderTemplate`<a${addAttribute(sponsor.data.url, "href")} target="_blank" rel="noopener noreferrer" class="block" data-astro-cid-3z6uernf><div class="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto" data-astro-cid-3z6uernf><img${addAttribute(sponsor.data.avatar?.src || "/default-event-image.webp", "src")} loading="lazy"${addAttribute(sponsor.data.avatar.alt || "Sponsor Image", "alt")} class="sponsor-logo" width="192" height="192" data-astro-cid-3z6uernf></div></a>`)}</div></div><!-- Sponsor Us Tile --><div class="order-2 md:order-1 mt-12 md:mb-8 max-w-md mx-auto" data-astro-cid-3z6uernf>${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": sponsorPlan, "data-astro-cid-3z6uernf": true })}</div></div><div class="flex justify-center mt-0 mb-4" data-astro-cid-3z6uernf>${renderComponent($$result3, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://donate.denver.space", "class": "flex gap-3 items-center justify-center bg-[#D9314A] hover:bg-[#D9314A] text-black", "target": "_blank", "data-astro-cid-3z6uernf": true }, { "default": ($$result4) => renderTemplate`<img src="/assets/branding/Logos/TheSpace_Logos_Symbol_3.webp" alt="Donate Icon" loading="lazy" class="w-7 h-7" width="28" height="28" data-astro-cid-3z6uernf>
Donate to The Space
` })}</div><div class="flex justify-center mt-0 mb-20" data-astro-cid-3z6uernf></div>` })}` })}`;
}, "/home/space/denver_space/website/src/pages/sponsors.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/sponsors.astro";
const $$url = "/sponsors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sponsors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
