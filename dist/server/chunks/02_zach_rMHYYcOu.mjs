import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Zach W.","title":"Vice Chair","bio":"Head of Sales at Casa & Host of Denver BitDevs. Probably explaining multisig to your grandma right now.","avatar":{"src":"/assets/headshots/zach.webp","alt":"Zach W."},"publishDate":"2024-03-31 15:39"};
				const file = "/home/space/denver_space/website/src/content/board/02_zach.md";
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
