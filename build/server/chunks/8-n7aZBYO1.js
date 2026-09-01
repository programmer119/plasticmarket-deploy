import { a as all } from './store-SvrBQiov.js';
import { c as catalogProducts } from './catalog-store-Bso_Fj9X.js';
import { r as redirect } from './index.js-BXRNCAzq.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/collection/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname)}`);
	const products = catalogProducts();
	return { entries: all("collection").filter((x) => x.userId === locals.user.id).map((e) => ({
		entry: e,
		product: products.find((p) => p.slug === e.product)
	})).filter((x) => x.product) };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B0AkI2Bo.js')).default;
const server_id = "src/routes/collection/+page.server.js";
const imports = ["_app/immutable/nodes/8.Dq2IvC3m.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Bc3EY02f.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-n7aZBYO1.js.map
