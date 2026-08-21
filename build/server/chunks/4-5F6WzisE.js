import { a as all } from './store-D2oqQVra.js';
import { i as isAdmin, a as adminConfigured } from './admin-j8-j_LIb.js';
import './index.js-DDNhq7BZ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/admin/+page.server.js
function load({ cookies }) {
	const authorized = isAdmin(cookies);
	return {
		configured: adminConfigured(),
		authorized,
		orders: authorized ? all("orders") : []
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D9xO6vix.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/4.DeUHljso.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-5F6WzisE.js.map
