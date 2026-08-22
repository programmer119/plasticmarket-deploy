import { r as redirect, p as private_env } from './index.js-B1-lYwNB.js';
import { a as all } from './store-wwMYXD9C.js';
import { g as getProduct } from './catalog-DCGl-LrU.js';
import 'node:fs';
import 'node:path';

//#region src/routes/checkout/+page.server.js
function load({ url, locals }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	const id = url.searchParams.get("listing");
	const listing = all("listings").find((x) => x.id === id && x.status === "ACTIVE") || null;
	const product = listing ? getProduct(listing.product) : null;
	const offerId = url.searchParams.get("offer");
	const offer = offerId ? all("offers").find((x) => x.id === offerId && x.buyerId === locals.user.id && x.listingId === id && x.status === "ACCEPTED") || null : null;
	const bps = Number(private_env.PLASTICMARKET_FEE_BPS || 0);
	return {
		listing,
		product,
		offer,
		feeBps: Number.isFinite(bps) && bps >= 0 ? bps : 0
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ct9J77Q5.js')).default;
const server_id = "src/routes/checkout/+page.server.js";
const imports = ["_app/immutable/nodes/6.Kj8KnBzd.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-v6J5lX07.js.map
