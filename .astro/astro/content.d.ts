declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">;
  render(): Render[".md"];
}>;
"board": {
"01_eric.md": {
	id: "01_eric.md";
  slug: "01_eric";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"02_zach.md": {
	id: "02_zach.md";
  slug: "02_zach";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"03_tyler.md": {
	id: "03_tyler.md";
  slug: "03_tyler";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"04_joey.md": {
	id: "04_joey.md";
  slug: "04_joey";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"05_ben.md": {
	id: "05_ben.md";
  slug: "05_ben";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"06_rachel.md": {
	id: "06_rachel.md";
  slug: "06_rachel";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
"07_charley.md": {
	id: "07_charley.md";
  slug: "07_charley";
  body: string;
  collection: "board";
  data: InferEntrySchema<"board">
} & { render(): Render[".md"] };
};
"officers": {
"01_tyler.md": {
	id: "01_tyler.md";
  slug: "01_tyler";
  body: string;
  collection: "officers";
  data: InferEntrySchema<"officers">
} & { render(): Render[".md"] };
"02_joel.md": {
	id: "02_joel.md";
  slug: "02_joel";
  body: string;
  collection: "officers";
  data: InferEntrySchema<"officers">
} & { render(): Render[".md"] };
"03_dylan.md": {
	id: "03_dylan.md";
  slug: "03_dylan";
  body: string;
  collection: "officers";
  data: InferEntrySchema<"officers">
} & { render(): Render[".md"] };
"04_wyatt.md": {
	id: "04_wyatt.md";
  slug: "04_wyatt";
  body: string;
  collection: "officers";
  data: InferEntrySchema<"officers">
} & { render(): Render[".md"] };
"05_jeff.md": {
	id: "05_jeff.md";
  slug: "05_jeff";
  body: string;
  collection: "officers";
  data: InferEntrySchema<"officers">
} & { render(): Render[".md"] };
};
"sponsors": {
"casa.md": {
	id: "casa.md";
  slug: "casa";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"compass.md": {
	id: "compass.md";
  slug: "compass";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"example_sponsor1.md": {
	id: "example_sponsor1.md";
  slug: "example_sponsor1";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"example_sponsor2.md": {
	id: "example_sponsor2.md";
  slug: "example_sponsor2";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"example_sponsor3.md": {
	id: "example_sponsor3.md";
  slug: "example_sponsor3";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"example_sponsor4.md": {
	id: "example_sponsor4.md";
  slug: "example_sponsor4";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"fedi.md": {
	id: "fedi.md";
  slug: "fedi";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
"unchained.md": {
	id: "unchained.md";
  slug: "unchained";
  body: string;
  collection: "sponsors";
  data: any
} & { render(): Render[".md"] };
};
"volunteers": {
"01zach.md": {
	id: "01zach.md";
  slug: "01zach";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"02tyler.md": {
	id: "02tyler.md";
  slug: "02tyler";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"03dylan.md": {
	id: "03dylan.md";
  slug: "03dylan";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"04joey.md": {
	id: "04joey.md";
  slug: "04joey";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"05joel.md": {
	id: "05joel.md";
  slug: "05joel";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"06wyatt.md": {
	id: "06wyatt.md";
  slug: "06wyatt";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"07eric.md": {
	id: "07eric.md";
  slug: "07eric";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"08jason.md": {
	id: "08jason.md";
  slug: "08jason";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"09david.md": {
	id: "09david.md";
  slug: "09david";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"10tatum.md": {
	id: "10tatum.md";
  slug: "10tatum";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"11hunter.md": {
	id: "11hunter.md";
  slug: "11hunter";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"12david_b.md": {
	id: "12david_b.md";
  slug: "12david_b";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"13anthony.md": {
	id: "13anthony.md";
  slug: "13anthony";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"14sam_k.md": {
	id: "14sam_k.md";
  slug: "14sam_k";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"15arceris.md": {
	id: "15arceris.md";
  slug: "15arceris";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"16louis.md": {
	id: "16louis.md";
  slug: "16louis";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
"17rocky.md": {
	id: "17rocky.md";
  slug: "17rocky";
  body: string;
  collection: "volunteers";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
