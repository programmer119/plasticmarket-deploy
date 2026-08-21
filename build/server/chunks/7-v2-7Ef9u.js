import { a as all } from './store-D2oqQVra.js';
import { p as products } from './catalog-eJPybn3p.js';
import { r as redirect } from './index.js-DDNhq7BZ.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-CmxM_lxg.js')).default;
const server_id = "src/routes/collection/+page.server.js";
const imports = ["_app/immutable/nodes/7.kz_ibaSc.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Ds-vJW2I.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-v2-7Ef9u.js.map
