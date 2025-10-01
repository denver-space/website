import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Tyler S.","title":"Chief Executive Officer","bio":"Founder of Exergy, a heating company powered by hashrate, and instigator of the Heatpunk movement.","avatar":{"src":"/assets/headshots/tyler.webp","alt":"Tyler S."},"publishDate":"2024-03-31 15:39"};
				const file = "/home/space/denver_space/website/src/content/officers/01_tyler.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
