import { a as all } from './store-CmNvPsnZ.js';
import { i as isAdmin, a as adminConfigured } from './admin-BNBFht2V.js';
import './index.js-BUJDLQvZ.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-DVCrtcTY.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/4.DeUHljso.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-DiTmU2uY.js.map
