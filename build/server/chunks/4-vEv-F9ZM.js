import { a as all } from './store-BAiWHnaa.js';
import { i as isAdmin, a as adminConfigured } from './admin-B1WcSF9H.js';
import './index.js-hgBuuMJB.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-NTx6nrnT.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/4.BRofSUne.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-vEv-F9ZM.js.map
