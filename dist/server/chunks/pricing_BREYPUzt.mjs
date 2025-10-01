import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Link } from './Layout_obBZJ6Ds.mjs';

const $$Astro$1 = createAstro("https://denver.space");
const $$Tick = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path> </svg>`;
}, "/home/space/denver_space/website/src/components/ui/icons/tick.astro", void 0);

const $$Astro = createAstro("https://denver.space");
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { plan } = Astro2.props;
  const isComingSoon = plan.name !== "Public" && plan.name !== "Social" && plan.name !== "Co-Working" && plan.name !== "Monthly Supporter" && plan.name !== "Become a Sponsor" && plan.name !== "Day Pass" && plan.name !== "Private Office";
  const isMainOption = plan.name === "Social" || plan.name === "Co-Working" || plan.name === "Private Office";
  const isSponsorCard = plan.name === "Become a Sponsor";
  const isLowerTier = ["Public", "Day Pass", "Monthly Supporter"].includes(plan.name);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col h-full min-h-full"> <div${addAttribute(`flex flex-col w-full h-full order-first lg:order-none border-4 border-[#ffffff] py-10 px-6 rounded-md relative ${isLowerTier ? "bg-[#ffffff] border-[#ffffff]" : isSponsorCard || isMainOption ? "bg-gradient" : "bg-[#D9314A] border-[#000000]"}`, "class")}${addAttribute(`min-height: ${isSponsorCard ? "350px" : isMainOption ? "450px" : "600px"}`, "style")}> <div${addAttribute(`absolute top-0 left-0 px-2 py-1 bg-blue-500 text-white rounded-br-md ${isComingSoon ? "" : "hidden"}`, "class")}>Coming Soon</div> <div class="text-center mb-8"> <h4${addAttribute(`text-lg font-medium ${isLowerTier ? "text-black" : "text-white"}`, "class")}>${plan.name}</h4> <p${addAttribute(`mt-3 text-4xl font-bold ${isLowerTier ? "text-black" : "text-white"} md:text-4xl`, "class")}> ${plan.price && typeof plan.price === "object" ? plan.price.monthly : plan.price} </p> </div> <div class="flex-grow flex flex-col justify-start"> <ul class="space-y-4 mx-auto"> ${plan.features.map((item) => renderTemplate`<li${addAttribute(`flex items-start gap-3 ${isLowerTier ? "text-black" : "text-white"}`, "class")}> <div class="w-6 h-6 mt-1 flex-shrink-0"> ${renderComponent($$result, "Tick", $$Tick, { "class": "w-6 h-6" })} </div> <span>${item}</span> </li>`)} </ul> </div> <div class="mt-8 flex justify-center"> ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "style": plan.popular ? "primary" : "outline" }, { "default": ($$result2) => renderTemplate`${plan.button.text || "Get Started"}` })} </div> </div> </div>`;
}, "/home/space/denver_space/website/src/components/pricing.astro", void 0);

export { $$Pricing as $ };
