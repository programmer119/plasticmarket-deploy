import { a as all } from './store-fR321lVl.js';
import { i as isAdmin, a as adminConfigured } from './admin-Bpy138HO.js';
import { c as catalogProducts } from './catalog-store-D9CS28r3.js';
import './index.js-Ba45yAmC.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-BDpei6ZF.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/4.DlD4_nR3.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-BG-8P_q0.js.map
