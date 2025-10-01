import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Learn More","title":"Unchained","url":"https://unchained.com","avatar":{"src":"/assets/sponsors/unchained.webp","alt":"Unchained"},"publishDate":"2024-06-20 15:39"};
				const file = "/home/space/denver_space/website/src/content/sponsors/unchained.md";
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
