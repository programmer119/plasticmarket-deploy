import { a as all } from './store-ChUPNIuh.js';
import { c as catalogProducts } from './catalog-store-DaZoNtDs.js';
import { r as redirect } from './index.js-CVF8L_zO.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-Bm21Ab7O.js')).default;
const server_id = "src/routes/seller/+page.server.js";
const imports = ["_app/immutable/nodes/13.DhPOlISd.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/Q1n5feKw.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-Bz3SxPWx.js.map
