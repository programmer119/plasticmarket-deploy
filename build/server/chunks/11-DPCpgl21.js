import { a as all } from './store-DPtovBfF.js';
import { g as getCatalogProduct } from './catalog-store-QQ2b7xMn.js';
import { e as error } from './index.js-BCHlikQJ.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/product/[slug]/+page.server.js
function load({ params, locals }) {
	const product = getCatalogProduct(params.slug);
	if (!product) throw error(404, "Product not found");
	return {
		product,
		listings: all("listings").filter((x) => x.product === product.slug && x.status === "ACTIVE").sort((a, b) => a.price - b.price),
		offers: all("offers").filter((x) => x.product === product.slug && ["OPEN", "ACCEPTED"].includes(x.status)).sort((a, b) => b.amount - a.amount),
		orders: all("orders").filter((x) => x.product === product.slug && [
			"PAID",
			"SHIPPED",
			"WAREHOUSE_RECEIVED",
			"AUTHENTICATED",
			"QA_PASSED",
			"DISPATCHED",
			"DELIVERED"
		].includes(x.status)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
		collectionStatus: (locals.user ? all("collection").find((x) => x.userId === locals.user.id && x.product === product.slug) : null)?.status || null,
		user: locals.user || null
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CstMdZTG.js')).default;
const server_id = "src/routes/product/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/11.BATJbGt8.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-DPCpgl21.js.map
