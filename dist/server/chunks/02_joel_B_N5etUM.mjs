import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Joel K.","title":"Chief Operating Officer","bio":"Founder of Bitcoin for Bullies, a dog rescue non-profit with emphasis on educating businesses and the public on the merits of bitcoin.","avatar":{"src":"/assets/headshots/joel.webp","alt":"Joel K."},"publishDate":"2024-03-31 15:39"};
				const file = "/home/space/denver_space/website/src/content/officers/02_joel.md";
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
