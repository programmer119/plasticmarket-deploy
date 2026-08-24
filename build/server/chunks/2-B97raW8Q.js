import { a as all } from './store-rmjhawmV.js';
import './index.js-DBbFL8yp.js';
import 'node:fs';
import 'node:path';

//#region src/routes/+page.server.js
function load({ locals }) {
	return { wishedProducts: locals.user ? all("collection").filter((x) => x.userId === locals.user.id && x.status === "Wished").map((x) => x.product) : [] };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wPzywqqa.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.6F7h6xVi.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BLWLFjA3.js","_app/immutable/chunks/A4ix12rb.js","_app/immutable/chunks/BDl0-i39.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-B97raW8Q.js.map
