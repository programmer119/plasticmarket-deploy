import { a as all } from './store-lY7JW809.js';
import { i as isAdmin, a as adminConfigured } from './admin-DpJpTevD.js';
import { c as catalogProducts } from './catalog-store-C_fAv8el.js';
import './index.js-DIZZAeri.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/admin/+page.server.js
function load({ cookies }) {
	const authorized = isAdmin(cookies);
	return {
		configured: adminConfigured(),
		authorized,
		orders: authorized ? all("orders") : [],
		products: authorized ? catalogProducts() : [],
		productRequests: authorized ? all("product-requests").filter((x) => x.status === "PENDING") : []
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DZo_g5IU.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/4.W21S6B5h.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-Dxgtqfei.js.map
