import { a as all } from './store-BT9OFksf.js';
import { p as products } from './catalog-eJPybn3p.js';
import { r as redirect } from './index.js-Ku1uY2yt.js';
import 'node:fs';
import 'node:path';

//#region src/routes/seller/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname)}`);
	const listings = all("listings").filter((x) => x.sellerId === locals.user.id);
	const orders = all("orders").filter((x) => x.sellerId === locals.user.id);
	const offers = all("offers").filter((x) => x.sellerId === locals.user.id);
	return {
		listings: listings.map((l) => ({
			...l,
			productData: products.find((p) => p.slug === l.product)
		})),
		orders,
		offers
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BoiCsSiL.js')).default;
const server_id = "src/routes/seller/+page.server.js";
const imports = ["_app/immutable/nodes/10.CYXnED68.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-DVtNfaAp.js.map
