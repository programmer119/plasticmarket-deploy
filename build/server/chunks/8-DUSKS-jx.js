import { a as all } from './store-D2oqQVra.js';
import { g as getProduct } from './catalog-eJPybn3p.js';
import { e as error } from './index.js-DDNhq7BZ.js';
import 'node:fs';
import 'node:path';

//#region src/routes/product/[slug]/+page.server.js
function load({ params, locals }) {
	const product = getProduct(params.slug);
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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CPZItot_.js')).default;
const server_id = "src/routes/product/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/8.D2RgfHBt.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-DUSKS-jx.js.map
