import { a as all } from './store-BT9OFksf.js';
import { p as products } from './catalog-eJPybn3p.js';
import './index.js-Ku1uY2yt.js';
import 'node:fs';
import 'node:path';

//#region src/routes/browse/+page.server.js
function load({ url }) {
	const listings = all("listings").filter((x) => x.status === "ACTIVE");
	return {
		products: products.map((p) => {
			const rows = listings.filter((x) => x.product === p.slug).sort((a, b) => a.price - b.price);
			return {
				...p,
				listingCount: rows.length,
				lowestListing: rows[0]?.price ?? null,
				listingConditions: [...new Set(rows.map((x) => x.condition))]
			};
		}),
		initialCategory: url.searchParams.get("category") || "All",
		initialQuery: url.searchParams.get("q") || ""
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DzZjCD1e.js')).default;
const server_id = "src/routes/browse/+page.server.js";
const imports = ["_app/immutable/nodes/5.I7aEMT_G.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/z2Bpe63H.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-B3EMoebV.js.map
