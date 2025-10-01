/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
import { $ as $$Pricing } from '../chunks/pricing_BREYPUzt.mjs';
export { renderers } from '../renderers.mjs';

const $$Membership = createComponent(($$result, $$props, $$slots) => {
  const pricing = [
    {
      name: "Social",
      price: {
        monthly: "$150/mo",
        annual: "$1800",
        discount: "0%",
        original: "$150"
      },
      popular: true,
      features: [
        "Building Access: Weekdays after 4 PM + All Weekend",
        "5 Drop-In Co-Working Days / Month",
        "Bring a Guest: 5 Times / Month",
        "Access to Workspace + Creative Tools",
        "Private Member-Only Events",
        "Free & Discounted Access to Ticketed Events",
        "Sovereign Tools: NOSTR, DATUM, Cloud Storage, Liquidity & More",
        "Community Collaboration Opportunities",
        "Be Part of Denver's First Member-Run Bitcoin Citadel"
      ],
      button: {
        text: "Apply for Membership",
        link: "/membership-application"
      }
    },
    {
      name: "Co-Working",
      price: {
        monthly: "$300/mo",
        annual: "$3600",
        discount: "0%",
        original: "$300"
      },
      popular: true,
      features: [
        "Building Access: 24/7",
        "Unlimited Co-Working",
        "Unlimited Guest Passes",
        "Access to Workspace + Creative Tools",
        "Private Member-Only Events",
        "Free & Discounted Access to Ticketed Events",
        "Sovereign Tools: NOSTR, DATUM, Cloud Storage, Liquidity & More",
        "Community Collaboration Opportunities",
        "Be Part of Denver's First Member-Run Bitcoin Citadel",
        "Daily Interaction with the Brightest Minds in Bitcoin",
        "Optional Private Desks: Additional $300/mo"
      ],
      button: {
        text: "Apply for Membership",
        link: "/membership-application"
      }
    },
    {
      name: "Private Office",
      price: {
        monthly: "$600/desk",
        annual: "$7200",
        discount: "0%",
        original: "$600"
      },
      popular: true,
      features: [
        "Dedicated Private Office Space",
        "Building Access: 24/7",
        "Unlimited Co-Working",
        "Unlimited Guest Passes",
        "Access to Workspace + Creative Tools",
        "Private Member-Only Events",
        "Free & Discounted Access to Ticketed Events",
        "Sovereign Tools: NOSTR, DATUM, Cloud Storage, Liquidity & More",
        "Community Collaboration Opportunities",
        "Be Part of Denver's First Member-Run Bitcoin Citadel",
        "Conference Room Booking",
        "Standing Desk, Locking Cabinets, Lockable Door",
        "Quiet Daytime Call Space",
        "Extensive Desk & Work Space",
        "Daily Interaction with the Brightest Minds in Bitcoin"
      ],
      button: {
        text: "Apply for Membership",
        link: "/membership-application"
      }
    },
    {
      name: "Public",
      price: {
        monthly: "Free",
        annual: "$0",
        discount: "0%",
        original: "$0"
      },
      popular: false,
      features: [
        "Free & Ticketed Events",
        "Public Content & Education",
        "Public Workshops & Presentations",
        "Open Source Documentation",
        "Public Newsletter",
        "& More..."
      ],
      button: {
        text: "See What's Going On",
        link: "/events"
      }
    },
    {
      name: "Monthly Supporter",
      price: "Any Amount",
      popular: false,
      features: [
        "Space Swag",
        "Public Benefits",
        "Public Newsletter",
        "Supporter Satisfaction",
        "Ticketed Event Discounts"
      ],
      button: {
        text: "Contact Us",
        link: "mailto:billing@denver.space"
      }
    },
    {
      name: "Day Pass",
      price: {
        monthly: "$25/day",
        annual: "$0",
        discount: "0%",
        original: "$0"
      },
      popular: false,
      features: [
        "Full Day of Building Access",
        "Workspace & Creator Amenities",
        "Networking & Socialization"
      ],
      button: {
        text: "Get Them Here",
        link: "https://pay.zaprite.com/pl_uQ30NqptEQ"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white "> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate` Simple Pricing. No Surprises. <br> ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Membership` })}` })} <div class="grid md:grid-cols-2 gap-6 mx-auto max-w-4xl mt-12 mb-12 items-stretch h-full justify-center"> ${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": pricing[0] })} <!-- Social --> ${renderComponent($$result3, "PricingCard", $$Pricing, { "plan": pricing[1] })} <!-- Co-Working --> </div>  <div class="max-w-4xl mx-auto mb-12"> <div class="bg-white border-4 border-white rounded-lg p-6 shadow-lg"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div class="flex-1"> <h4 class="text-xl font-medium text-black mb-2">Day Pass</h4> <p class="text-2xl font-bold text-black mb-3">$25/day</p> <ul class="text-sm text-gray-600 space-y-1"> <li>• Full Day of Building Access</li> <li>• Workspace & Creator Amenities</li> <li>• Networking & Socialization</li> </ul> </div> <div class="md:ml-6 flex-shrink-0"> <a href="https://pay.zaprite.com/pl_uQ30NqptEQ" class="inline-block px-6 py-3 bg-black text-white rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 hover:bg-gray-800 border-2 border-transparent">
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
