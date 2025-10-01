/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_xozOFx5b.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events", "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": "w-full", "data-astro-cid-ro7pgs3h": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-ro7pgs3h": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Discover our upcoming public events. Become a member to see private events.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Events` })}` })} ${maybeRenderHead()}<div class="flex justify-center mt-12" data-astro-cid-ro7pgs3h> <a data-label="Public Event Calendar Sign Up" style="background-color:#e51f5d;color:#ffffff;min-width:128px;padding:8px 16px;border-radius:8px;text-align:center;font-weight:bold;text-decoration:none;display:inline-block;" href="https://lu.ma/the-space-events" target="_blank" rel="no referrer noopener" data-astro-cid-ro7pgs3h>Subscribe to The Space's Public Event Calendar</a> </div>  <div class="iframe-container mt-12 mb-20 lg:px-16" data-astro-cid-ro7pgs3h> <iframe src="https://lu.ma/embed/calendar/cal-UDDTjyTDkwIZTOm/events" class="calendar-iframe" allowfullscreen="" aria-hidden="false" tabindex="0" data-astro-cid-ro7pgs3h></iframe> </div> ` })} ` })} `;
}, "/home/space/denver_space/website/src/pages/events.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
