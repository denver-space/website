/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../chunks/astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import { b as $$Link, $ as $$Container, a as $$Layout } from '../chunks/Layout_obBZJ6Ds.mjs';
/* empty css                                 */
import { $ as $$Icon } from '../chunks/Icon_gYVaCojS.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_IDNk06b-.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Full-width black background wrapper -->${maybeRenderHead()}<div class="bg-black py-4 md:py-8 lg:py-20" data-astro-cid-c7edmhxs> <!-- Inner container with flex utilities for centering --> <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-center" data-astro-cid-c7edmhxs> <!-- Wrapper div for spacing and alignment --> <div class="flex-1 flex flex-col items-center text-center mx-2 px-4 md:px-6 section-padding" data-astro-cid-c7edmhxs> <h2 class="text-white text-2xl md:text-4xl lg:text-6xl tracking-tight" data-astro-cid-c7edmhxs>
Upcoming Events
</h2> <p class="text-slate-400 mt-2 md:mt-4 text-sm md:text-lg lg:text-xl" data-astro-cid-c7edmhxs>
See what public events are happening at The Space.
</p> <div class="flex mt-2 md:mt-5" data-astro-cid-c7edmhxs> ${renderComponent($$result, "Link", $$Link, { "href": "/events", "style": "inverted", "data-astro-cid-c7edmhxs": true }, { "default": ($$result2) => renderTemplate`Events` })} </div> </div> <!-- Wrapper div for spacing and alignment --> <div class="flex-1 flex flex-col items-center text-center mx-2 px-4 md:px-6 section-padding" data-astro-cid-c7edmhxs> <h2 class="text-white text-2xl md:text-4xl lg:text-6xl tracking-tight" data-astro-cid-c7edmhxs>
Join the Movement
</h2> <p class="text-slate-400 mt-2 md:mt-4 text-sm md:text-lg lg:text-xl" data-astro-cid-c7edmhxs>
Become a member of The Space. Enjoy the benefits.
</p> <div class="flex mt-2 md:mt-5" data-astro-cid-c7edmhxs> ${renderComponent($$result, "Link", $$Link, { "href": "/membership", "style": "inverted", "data-astro-cid-c7edmhxs": true }, { "default": ($$result2) => renderTemplate`Membership` })} </div> </div> <!-- Wrapper div for spacing and alignment --> <div class="flex-1 flex flex-col items-center text-center mx-2 px-4 md:px-6 section-padding" data-astro-cid-c7edmhxs> <h2 class="text-white text-2xl md:text-4xl lg:text-6xl tracking-tight" data-astro-cid-c7edmhxs>
Get in Touch With Us
</h2> <p class="text-slate-400 mt-2 md:mt-4 text-sm md:text-lg lg:text-xl" data-astro-cid-c7edmhxs>
Questions, comments, ideas, newsletter and more.
</p> <div class="flex mt-2 md:mt-5" data-astro-cid-c7edmhxs> ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "style": "inverted", "data-astro-cid-c7edmhxs": true }, { "default": ($$result2) => renderTemplate`Contact Us` })} </div> </div> </div> </div>`;
}, "/home/space/denver_space/website/src/components/cta.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Events and Education",
      description: "We host a variety of bitcoin and freedom focused events, from educational presentations and happy hour social gatherings to weekend workshops.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Working Space",
      description: "Our member-accessed facility offers flexible and private workspaces with a welcoming community of bitcoiners to build and collaborate with.",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Amenities",
      description: "Lounge space, content resources, conference rooms and kitchens, with shared & dedicated desks througout. We have it all. Perfect for work and play.",
      icon: "bx:bxs-home"
    },
    {
      title: "Extensive Resources",
      description: "Surround yourself with the brightest bitcoin tech minds in the West. Chances are, we know the expert you're looking for.",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Community",
      description: "Build meaningful relationships with the best in the industry. Want to hang around bitcoiners? This is the place.",
      icon: "bx:bxs-user"
    },
    {
      title: "Simple Membership",
      description: "Our simple membership makes for fair access to all. Choose between social, co-working, or private office tiers.",
      icon: "bx:bxs-badge-check"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col mt-0 mb-20 items-center lg:space-y-7"> <img src="/assets/venue/3700Franklin_Back.webp" alt="The Space Building Back" class="w-full lg:w-11/12 rounded-lg" style="box-shadow: none;" loading="lazy"> </section> <div class="mt-0 md:mt-0 lg:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
A Community Hub - Built by and for Bitcoiners
</h2> <p class="text-lg mt-4 text-slate-600">
What do you do in The Space?
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/home/space/denver_space/website/src/components/features.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-8 pb-8 md:pt-6 md:pb-20" data-astro-cid-zi4ldr3x> <!-- Adjusted the top padding here --> <div class="pt-20 pb-8 md:pt-20 md:pb-0 lg:pt-6 lg:pb-0 order-2 lg:order-2 rounded w-full max-w-md mx-auto" data-astro-cid-zi4ldr3x> <!-- Adjusted the top padding here --> ${renderComponent($$result, "Picture", $$Picture, { "src": "/assets/TheSpaceLogo.webp", "alt": "the space logo", "width": 500, "height": 500, "widths": [200, 300, 400, 500], "sizes": "(max-width: 480px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px", "loading": "eager", "format": "avif", "class": "circle-image", "data-astro-cid-zi4ldr3x": true })} </div> <div class="order-1 lg:order-1" data-astro-cid-zi4ldr3x> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter" data-astro-cid-zi4ldr3x>
Denver's<br data-astro-cid-zi4ldr3x> Bitcoin Citadel
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl" data-astro-cid-zi4ldr3x>
The Space is a member-run and operated bitcoin community.<br data-astro-cid-zi4ldr3x> We're the premier place to educate, collaborate, socialize and accelerate freedom through bitcoin adoption.<br data-astro-cid-zi4ldr3x><br data-astro-cid-zi4ldr3x>
Founded <a href="https://mempool.denver.space/tx/0650359ea926ea167ab9e25b703ee723bf6bc2732ca33d873d00e17da55302ab" target="_blank" data-astro-cid-zi4ldr3x><b data-astro-cid-zi4ldr3x>Block 836,738.</b> </a> </p> <div class="mt-6 grid grid-cols-2 gap-3" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Link", $$Link, { "href": "#", "href": "/membership", "class": "flex gap-3 items-center justify-center bg-[#000000] hover:bg-[#000000] text-black", "rel": "noopener", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bxs-group", "data-astro-cid-zi4ldr3x": true })}
Become a Member
` })} ${renderComponent($$result, "Link", $$Link, { "rel": "noopener", "href": "mailto:contact@denver.space", "class": "flex gap-3 items-center justify-center bg-[#4DAABC] hover:bg-[#4DAABC] text-black", "target": "_blank", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bx-envelope", "data-astro-cid-zi4ldr3x": true })}
Send us a Message
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://x.com/@SpaceDenver", "class": "flex gap-3 items-center justify-center bg-[#D9314A] hover:bg-[#D9314A] text-black", "target": "_blank", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="text-black w-5 h-5" viewBox="0 0 24 24" data-astro-cid-zi4ldr3x> <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" data-astro-cid-zi4ldr3x></path> </svg>
Follow on X
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://nostr.com/npub1knvgqlkllgc566pxjkwrm33ks8k9nn6470a8y70t58jx6y3l620sj7lg29", "class": "flex gap-3 items-center justify-center bg-[#F6DD4D] hover:bg-[#F6DD4D] text-black", "target": "_blank", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="text-black w-5 h-5" viewBox="0 0 900 900" data-astro-cid-zi4ldr3x> <path d="m684.72,485.57c.22,12.59-11.93,51.47-38.67,81.3-26.74,29.83-56.02,20.85-58.42,20.16s-3.09-4.46-7.89-3.77-9.6,6.17-18.86,7.2-17.49,1.71-26.06-1.37c-4.46.69-5.14.71-7.2,2.24s-17.83,10.79-21.6,11.47c0,7.2-1.37,44.57,0,55.89s3.77,25.71,7.54,36c3.77,10.29,2.74,10.63,7.54,9.94s13.37.34,15.77,4.11c2.4,3.77,1.37,6.51,5.49,8.23s60.69,17.14,99.43,19.2c26.74.69,42.86,2.74,52.12,19.54,1.37,7.89,7.54,13.03,11.31,14.06s8.23,2.06,12,5.83,1.03,8.23,5.49,11.66c4.46,3.43,14.74,8.57,25.37,13.71,10.63,5.14,15.09,13.37,15.77,16.11s1.71,10.97,1.71,10.97c0,0-8.91,0-10.97-2.06s-2.74-5.83-2.74-5.83c0,0-6.17,1.03-7.54,3.43s.69,2.74-7.89.69-11.66-3.77-18.17-8.57c-6.51-4.8-16.46-17.14-25.03-16.8,4.11,8.23,5.83,8.23,10.63,10.97s8.23,5.83,8.23,5.83l-7.2,4.46s-4.46,2.06-14.74-.69-11.66-4.46-12.69-10.63,0-9.26-2.74-14.4-4.11-15.77-22.29-21.26c-18.17-5.49-66.52-21.26-100.12-24.69s-22.63-2.74-28.11-1.37-15.77,4.46-26.4-1.37c-10.63-5.83-16.8-13.71-17.49-20.23s-1.71-10.97,0-19.2,3.43-19.89,1.71-26.74-14.06-55.89-19.89-64.12c-13.03,1.03-50.74-.69-50.74-.69,0,0-2.4-.69-17.49,5.83s-36.48,13.76-46.77,19.93-14.4,9.7-16.12,13.13c.12,3-1.23,7.72-2.79,9.06s-12.48,2.42-12.48,2.42c0,0-5.85,5.86-8.25,9.97-6.86,9.6-55.2,125.14-66.52,149.83-13.54,32.57-9.77,27.43-37.71,27.43s-8.06.3-8.06.3c0,0-12.34,5.88-16.8,5.88s-18.86-2.4-26.4,0-16.46,9.26-23.31,10.29-4.95-1.34-8.38-3.74c-4-.21-14.27-.12-14.27-.12,0,0,1.74-6.51,7.91-10.88,8.23-5.83,25.37-16.11,34.63-21.26s17.49-7.89,23.31-9.26,18.51-6.17,30.51-9.94,19.54-8.23,29.83-31.54c10.29-23.31,50.4-111.43,51.43-116.23.63-2.96,3.73-6.48,4.8-15.09.66-5.35-2.49-13.04,1.71-22.63,10.97-25.03,21.6-20.23,26.4-20.23s17.14.34,26.4-1.37,15.43-2.74,24.69-7.89,11.31-8.91,11.31-8.91l-19.89-3.43s-18.51.69-25.03-4.46-15.43-15.77-15.43-15.77l-7.54-7.2,1.03,8.57s-5.14-8.91-6.51-10.29-8.57-6.51-11.31-11.31-7.54-25.03-7.54-25.03l-6.17,13.03-1.71-18.86-5.14,7.2-2.74-16.11-4.8,8.23-3.43-14.4-5.83,4.46-2.4-10.29-5.83-3.43s-14.06-9.26-16.46-9.6-4.46,3.43-4.46,3.43l1.37,12-12.2-6.27-7-11.9s2.36,4.01-9.62,7.53c-20.55,0-21.89-2.28-24.93-3.94-1.31-6.56-5.57-10.11-5.57-10.11h-20.57l-.34-6.86-7.89,3.09.69-10.29h-14.06l1.03-11.31h-8.91s3.09-9.26,25.71-22.97,25.03-16.46,46.29-17.14c21.26-.69,32.91,2.74,46.29,8.23s38.74,13.71,43.89,17.49c11.31-9.94,28.46-19.89,34.29-19.89,1.03-2.4,6.19-12.33,17.96-17.6,35.31-15.81,108.13-34,131.53-35.54,31.2-2.06,7.89-1.37,39.09,2.06,31.2,3.43,54.17,7.54,69.6,12.69,12.58,4.19,25.03,9.6,34.29,2.06,4.33-1.81,11.81-1.34,17.83-5.14,30.69-25.09,34.72-32.35,43.63-41.95s20.14-24.91,22.54-45.14,4.46-58.29-10.63-88.12-28.8-45.26-34.63-69.26c-5.83-24-8.23-61.03-6.17-73.03,2.06-12,5.14-22.29,6.86-30.51s9.94-14.74,19.89-16.46c9.94-1.71,17.83,1.37,22.29,4.8,4.46,3.43,11.65,6.28,13.37,10.29.34,1.71-1.37,6.51,8.23,8.23,9.6,1.71,16.05,4.16,16.05,4.16,0,0,15.64,4.29,3.11,7.73-12.69,2.06-20.52-.71-24.29,1.69s-7.21,10.08-9.61,11.1-7.2.34-12,4.11-9.6,6.86-12.69,14.4-5.49,15.77-3.43,26.74,8.57,31.54,14.4,43.2c5.83,11.66,20.23,40.8,24.34,47.66s15.77,29.49,16.8,53.83,1.03,44.23,0,54.86-10.84,51.65-35.53,85.94c-8.16,14.14-23.21,31.9-24.67,35.03-1.45,3.13-3.02,4.88-1.61,7.65,4.62,9.05,12.87,22.13,14.71,29.22,2.29,6.64,6.99,16.13,7.22,28.72Z
" data-astro-cid-zi4ldr3x></path> </svg>
Follow on Nostr
` })} ${renderComponent($$result, "Link", $$Link, { "href": "/events", "class": "col-span-2 flex gap-3 items-center justify-center bg-[#e51f5d] hover:bg-[#e51f5d] text-white", "rel": "noopener", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bx-calendar", "data-astro-cid-zi4ldr3x": true })}
Check Out Our Upcoming Events
` })} </div> </div> </main>`;
}, "/home/space/denver_space/website/src/components/hero.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  const foundingSponsors = [
    { src: "/assets/sponsors/casa.webp", alt: "Learn More", url: "https://casa.io", format: "webp" },
    { src: "/assets/sponsors/compass.webp", alt: "Learn More", url: "https://compassmining.io", format: "webp" },
    { src: "/assets/sponsors/fedi.webp", alt: "Learn More", url: "https://www.fedi.xyz", format: "webp" },
    { src: "/assets/sponsors/unchained.webp", alt: "Learn More", url: "https://unchained.com", format: "webp" }
  ];
  const otherSponsors = [
    { src: "/assets/sponsors/Colorado_AirFilter.webp", alt: "Support Us", url: "https://coloradoairfilter.com", format: "webp" },
    { src: "/assets/sponsors/peonylane.png", alt: "Peony Lane Wine", url: "https://www.peonylanewine.com/", format: "png" },
    { src: "/assets/sponsors/tallowz.webp", alt: "Tallowz", url: "https://tallowz.com", format: "webp" },
    { src: "/assets/branding/Logos/TheSpace_Logos_Symbol_3.webp", alt: "Become a Sponsor", url: "/sponsors", format: "webp" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-24 mb-0 custom-gradient py-12"> <h2 class="text-center text-white px-12">Made Possible by our Founding Sponsors</h2> <div class="sponsors-grid mt-10 mb-2"> ${foundingSponsors.map((sponsor) => renderTemplate`<a${addAttribute(sponsor.url, "href")} target="_blank" rel="noopener noreferrer" class="block"> ${sponsor.format === "svg" ? renderTemplate`<div class="h-12 w-12 md:h-20 md:w-20 white-svg"> <img${addAttribute(sponsor.src, "src")}${addAttribute(sponsor.alt, "alt")} loading="lazy" class="object-contain h-full w-full" width="80" height="80"> </div>` : renderTemplate`<img${addAttribute(sponsor.src, "src")}${addAttribute(sponsor.alt, "alt")} loading="lazy" class="h-12 w-12 md:h-20 md:w-20 object-cover rounded-full" width="80" height="80">`} </a>`)} </div> <!-- Add new section heading here --> <h2 class="text-center text-white px-12 mt-12">Become one of our Supporters</h2> <div class="sponsors-grid mt-10 mb-2"> ${otherSponsors.map((sponsor) => renderTemplate`<a${addAttribute(sponsor.url, "href")} target="_blank" rel="noopener noreferrer" class="block"> ${sponsor.format === "svg" ? renderTemplate`<div class="h-12 w-12 md:h-20 md:w-20 white-svg"> <img${addAttribute(sponsor.src, "src")}${addAttribute(sponsor.alt, "alt")} loading="lazy" class="object-contain h-full w-full" width="80" height="80"> </div>` : renderTemplate`<img${addAttribute(sponsor.src, "src")}${addAttribute(sponsor.alt, "alt")} loading="lazy" class="h-12 w-12 md:h-20 md:w-20 object-cover rounded-full" width="80" height="80">`} </a>`)} </div> </div>`;
}, "/home/space/denver_space/website/src/components/logos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ` })} ${renderComponent($$result2, "Logos", $$Logos, {})} ${renderComponent($$result2, "Cta", $$Cta, {})}  ` })}`;
}, "/home/space/denver_space/website/src/pages/index.astro", void 0);

const $$file = "/home/space/denver_space/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
