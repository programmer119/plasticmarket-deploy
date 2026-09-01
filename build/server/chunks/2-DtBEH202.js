import { a as all } from './store-fR321lVl.js';
import './index.js-Ba45yAmC.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-DNWBnj2N.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.FVAo5lDc.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Bw2Lbu27.js","_app/immutable/chunks/A4ix12rb.js","_app/immutable/chunks/Bc3EY02f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-DtBEH202.js.map
