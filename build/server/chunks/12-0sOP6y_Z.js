import { c as catalogProducts } from './catalog-store-C_fAv8el.js';
import { r as redirect } from './index.js-DIZZAeri.js';
import './store-lY7JW809.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/sell/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	return {
		product: url.searchParams.get("product") || null,
		products: catalogProducts()
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dn9t80FM.js')).default;
const server_id = "src/routes/sell/+page.server.js";
const imports = ["_app/immutable/nodes/12.fe8Xs63w.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-0sOP6y_Z.js.map
