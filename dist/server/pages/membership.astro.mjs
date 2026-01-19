/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DFWxbONb.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
import { $ as $$Pricing } from '../chunks/pricing_BvBmT6Mj.mjs';
export { renderers } from '../renderers.mjs';

const $$Membership = createComponent(($$result, $$props, $$slots) => {
  const pricing = [
    {
      name: "Voting Membership",
      price: {
        monthly: "$200/mo",
        annual: "$2100",
        discount: "0%",
        original: "$200"
      },
      popular: true,
      features: [
        "Unlimited Building Access",
        "Bring Guests with You Whenever",
        "Vote in Board Elections",
        "Private Voting Member Events",
        "Community Leadership Opportunities",
        "Contribute to our Educational Mission"
      ],
      button: {
        text: "Apply for Membership",
        link: "/membership-application"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white "> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate` What do you do in The Space? <br> ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Membership` })}` })} <div class="grid md:grid-cols-1 gap-6 mx-auto max-w-2xl mt-12 mb-12 items-stretch h-full justify-center"> ${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": pricing[0] })} </div>  <div class="max-w-4xl mx-auto mb-12"> <div class="bg-white border-4 border-white rounded-lg p-6 shadow-lg"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div class="flex-1"> <h4 class="text-xl font-medium text-black mb-2">Day Pass</h4> <p class="text-2xl font-bold text-black mb-3">$25/day</p> <ul class="text-sm text-gray-600 space-y-1"> <li>• Full Day of Building Access</li> <li>• Workspace & Creator Amenities</li> <li>• Networking & Collaboration</li> </ul> </div> <div class="md:ml-6 flex-shrink-0"> <a href="https://pay.zaprite.com/pl_uQ30NqptEQ" class="inline-block px-6 py-3 bg-black text-white rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 hover:bg-gray-800 border-2 border-transparent">
Get Them Here
</a> </div> </div> </div> </div> ` })} </div> ` })}`;
}, "/home/space/denver_space/website/src/pages/membership.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/membership.astro";
const $$url = "/membership";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Membership,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
