import { a as all } from './store-DPtovBfF.js';
import { c as catalogProducts } from './catalog-store-QQ2b7xMn.js';
import { r as redirect } from './index.js-BCHlikQJ.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-D8gTcOvz.js')).default;
const server_id = "src/routes/collection/+page.server.js";
const imports = ["_app/immutable/nodes/8.bzj554lI.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/C7h7DQCQ.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-Cg_7b1Nc.js.map
