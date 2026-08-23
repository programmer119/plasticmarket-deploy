import { a as all } from './store-9iL4-fr_.js';
import { c as catalogProducts } from './catalog-store-T3phPR3M.js';
import { r as redirect } from './index.js-eXhKP-qF.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/seller/+page.server.js
var tabs = /* @__PURE__ */ new Set([
	"Inventory",
	"Orders",
	"Offers"
]);
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	const products = catalogProducts();
	const listings = all("listings").filter((x) => x.sellerId === locals.user.id);
	const orders = all("orders").filter((x) => x.sellerId === locals.user.id);
	const offers = all("offers").filter((x) => x.sellerId === locals.user.id);
	const requested = url.searchParams.get("tab") || "Inventory";
	return {
		products,
		listings: listings.map((l) => ({
			...l,
			productData: products.find((p) => p.slug === l.product)
		})),
		orders,
		offers,
		initialTab: tabs.has(requested) ? requested : "Inventory"
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-QtRXA3pU.js')).default;
const server_id = "src/routes/seller/+page.server.js";
const imports = ["_app/immutable/nodes/13.BNkugcB4.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/DtA9T13Z.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-DNA8rCsa.js.map
