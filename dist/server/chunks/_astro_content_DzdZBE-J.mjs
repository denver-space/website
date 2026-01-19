import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_DUT4_f9Z.mjs';
import { c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_BWzcCOCd.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_EMAIL_KEY": "3ece700b-ddea-4622-a917-81d4beec208b", "PUBLIC_HCAPTCHA_SITE_KEY": "214c9bf4-7e70-4db4-8c40-557e3f4c08a2", "SITE": "https://denver.space", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { PORT: process.env.PORT, _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/board/01_eric.md": () => import('./01_eric_LGIiIpSM.mjs'),"/src/content/board/02_zach.md": () => import('./02_zach_DVSTc76X.mjs'),"/src/content/board/03_tyler.md": () => import('./03_tyler_0q_H2DkW.mjs'),"/src/content/board/04_joey.md": () => import('./04_joey_Xt9DOiYF.mjs'),"/src/content/board/05_ben.md": () => import('./05_ben_BPAy9vTi.mjs'),"/src/content/board/06_rachel.md": () => import('./06_rachel_CHdQrkKC.mjs'),"/src/content/board/07_charley.md": () => import('./07_charley_DOL35Mxa.mjs'),"/src/content/officers/01_owen.md": () => import('./01_owen_BvLK2jKW.mjs'),"/src/content/sponsors/casa.md": () => import('./casa_xzzm9p8w.mjs'),"/src/content/sponsors/colorado_air_filter.md": () => import('./colorado_air_filter_DvVOTTZ5.mjs'),"/src/content/sponsors/compass.md": () => import('./compass_CR5g-5Au.mjs'),"/src/content/sponsors/fedi.md": () => import('./fedi_D5Cou1xE.mjs'),"/src/content/sponsors/fold.md": () => import('./fold_BsmEb6Gk.mjs'),"/src/content/sponsors/peony_lane.md": () => import('./peony_lane_DloGljOz.mjs'),"/src/content/sponsors/satoshi_energy.md": () => import('./satoshi_energy_BV5YKCg_.mjs'),"/src/content/sponsors/unchained.md": () => import('./unchained_wsFLzm3B.mjs'),"/src/content/sponsors/unchained_founding.md": () => import('./unchained_founding_C76VKEvN.mjs'),"/src/content/volunteers/01zach.md": () => import('./01zach_ClbdpgJg.mjs'),"/src/content/volunteers/02tyler.md": () => import('./02tyler_B8dI6d6K.mjs'),"/src/content/volunteers/03dylan.md": () => import('./03dylan_ClNKLJ7k.mjs'),"/src/content/volunteers/04joey.md": () => import('./04joey_Dfh5a6MM.mjs'),"/src/content/volunteers/05joel.md": () => import('./05joel_DBUWzXi9.mjs'),"/src/content/volunteers/06wyatt.md": () => import('./06wyatt_FijTDZwa.mjs'),"/src/content/volunteers/07eric.md": () => import('./07eric_D6zMq-HE.mjs'),"/src/content/volunteers/08jason.md": () => import('./08jason_B2uPn--2.mjs'),"/src/content/volunteers/09david.md": () => import('./09david_Dfh0Us39.mjs'),"/src/content/volunteers/10tatum.md": () => import('./10tatum_DJUluDyb.mjs'),"/src/content/volunteers/11hunter.md": () => import('./11hunter_Eq5eTByS.mjs'),"/src/content/volunteers/12david_b.md": () => import('./12david_b_BLYejHaH.mjs'),"/src/content/volunteers/13anthony.md": () => import('./13anthony_B5mBx1zX.mjs'),"/src/content/volunteers/14sam_k.md": () => import('./14sam_k_SF5wOegX.mjs'),"/src/content/volunteers/15arceris.md": () => import('./15arceris_cYaZSH37.mjs'),"/src/content/volunteers/16louis.md": () => import('./16louis_DsjMC31p.mjs'),"/src/content/volunteers/17rocky.md": () => import('./17rocky_DmRx5ea-.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"board":{"type":"content","entries":{"01_eric":"/src/content/board/01_eric.md","02_zach":"/src/content/board/02_zach.md","03_tyler":"/src/content/board/03_tyler.md","05_ben":"/src/content/board/05_ben.md","04_joey":"/src/content/board/04_joey.md","06_rachel":"/src/content/board/06_rachel.md","07_charley":"/src/content/board/07_charley.md"}},"sponsors":{"type":"content","entries":{"casa":"/src/content/sponsors/casa.md","colorado_air_filter":"/src/content/sponsors/colorado_air_filter.md","compass":"/src/content/sponsors/compass.md","fedi":"/src/content/sponsors/fedi.md","fold":"/src/content/sponsors/fold.md","peony_lane":"/src/content/sponsors/peony_lane.md","satoshi_energy":"/src/content/sponsors/satoshi_energy.md","unchained":"/src/content/sponsors/unchained.md","unchained_founding":"/src/content/sponsors/unchained_founding.md"}},"officers":{"type":"content","entries":{"01_owen":"/src/content/officers/01_owen.md"}},"volunteers":{"type":"content","entries":{"01zach":"/src/content/volunteers/01zach.md","02tyler":"/src/content/volunteers/02tyler.md","03dylan":"/src/content/volunteers/03dylan.md","04joey":"/src/content/volunteers/04joey.md","05joel":"/src/content/volunteers/05joel.md","06wyatt":"/src/content/volunteers/06wyatt.md","07eric":"/src/content/volunteers/07eric.md","08jason":"/src/content/volunteers/08jason.md","09david":"/src/content/volunteers/09david.md","10tatum":"/src/content/volunteers/10tatum.md","11hunter":"/src/content/volunteers/11hunter.md","12david_b":"/src/content/volunteers/12david_b.md","13anthony":"/src/content/volunteers/13anthony.md","14sam_k":"/src/content/volunteers/14sam_k.md","15arceris":"/src/content/volunteers/15arceris.md","16louis":"/src/content/volunteers/16louis.md","17rocky":"/src/content/volunteers/17rocky.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/board/01_eric.md": () => import('./01_eric_CSEnJSWc.mjs'),"/src/content/board/02_zach.md": () => import('./02_zach_OX3KcB2X.mjs'),"/src/content/board/03_tyler.md": () => import('./03_tyler_DVfMuamm.mjs'),"/src/content/board/04_joey.md": () => import('./04_joey_Acw4boIL.mjs'),"/src/content/board/05_ben.md": () => import('./05_ben_Dhi7G-mQ.mjs'),"/src/content/board/06_rachel.md": () => import('./06_rachel_Bti_8jcn.mjs'),"/src/content/board/07_charley.md": () => import('./07_charley_ClUIyKc7.mjs'),"/src/content/officers/01_owen.md": () => import('./01_owen_KoKuSMWj.mjs'),"/src/content/sponsors/casa.md": () => import('./casa_BwuMET5j.mjs'),"/src/content/sponsors/colorado_air_filter.md": () => import('./colorado_air_filter_Dubdtu7F.mjs'),"/src/content/sponsors/compass.md": () => import('./compass_CcxgZ8VN.mjs'),"/src/content/sponsors/fedi.md": () => import('./fedi_D9I0fYRZ.mjs'),"/src/content/sponsors/fold.md": () => import('./fold_C1Gjii14.mjs'),"/src/content/sponsors/peony_lane.md": () => import('./peony_lane_Bno4jqAd.mjs'),"/src/content/sponsors/satoshi_energy.md": () => import('./satoshi_energy_CfOpqsHK.mjs'),"/src/content/sponsors/unchained.md": () => import('./unchained_B-HHVo1g.mjs'),"/src/content/sponsors/unchained_founding.md": () => import('./unchained_founding_CdqkgGY7.mjs'),"/src/content/volunteers/01zach.md": () => import('./01zach_BbqqxWDz.mjs'),"/src/content/volunteers/02tyler.md": () => import('./02tyler_BCn9m43R.mjs'),"/src/content/volunteers/03dylan.md": () => import('./03dylan_D8t5y_IU.mjs'),"/src/content/volunteers/04joey.md": () => import('./04joey_DwI5tfgS.mjs'),"/src/content/volunteers/05joel.md": () => import('./05joel_Di_6naJY.mjs'),"/src/content/volunteers/06wyatt.md": () => import('./06wyatt_CWy4oL-e.mjs'),"/src/content/volunteers/07eric.md": () => import('./07eric_gE5EBFJN.mjs'),"/src/content/volunteers/08jason.md": () => import('./08jason_DVnvYPn9.mjs'),"/src/content/volunteers/09david.md": () => import('./09david_DTVVRu8v.mjs'),"/src/content/volunteers/10tatum.md": () => import('./10tatum_BqUs4lij.mjs'),"/src/content/volunteers/11hunter.md": () => import('./11hunter_CVX8gvsz.mjs'),"/src/content/volunteers/12david_b.md": () => import('./12david_b_DnOpu5Er.mjs'),"/src/content/volunteers/13anthony.md": () => import('./13anthony_BEKvkO7-.mjs'),"/src/content/volunteers/14sam_k.md": () => import('./14sam_k_IYxKOyom.mjs'),"/src/content/volunteers/15arceris.md": () => import('./15arceris_Bwd_btNy.mjs'),"/src/content/volunteers/16louis.md": () => import('./16louis_BbbTvWh_.mjs'),"/src/content/volunteers/17rocky.md": () => import('./17rocky_LC2Is2mn.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
