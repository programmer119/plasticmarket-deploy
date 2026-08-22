import { a as all } from './store-GUJ-QPL6.js';
import { p as products } from './catalog-DCGl-LrU.js';
import { r as redirect } from './index.js-Chaee5kv.js';
import 'node:fs';
import 'node:path';

//#region src/routes/collection/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname)}`);
	return { entries: all("collection").filter((x) => x.userId === locals.user.id).map((e) => ({
		entry: e,
		product: products.find((p) => p.slug === e.product)
	})).filter((x) => x.product) };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CwE2lKnR.js')).default;
const server_id = "src/routes/collection/+page.server.js";
const imports = ["_app/immutable/nodes/7.CYstJFeh.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CgzC9SlL.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-CEo-E9DX.js.map
