import { r as redirect, p as private_env } from './index.js-mXd3WV7Q.js';
import { a as all } from './store-DbH9zcox.js';
import { g as getCatalogProduct } from './catalog-store-D4x3cgjt.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/checkout/+page.server.js
function load({ url, locals }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	const id = url.searchParams.get("listing");
	const listing = all("listings").find((x) => x.id === id && x.status === "ACTIVE") || null;
	const product = listing ? getCatalogProduct(listing.product) : null;
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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B_t3GJ02.js')).default;
const server_id = "src/routes/checkout/+page.server.js";
const imports = ["_app/immutable/nodes/7.BXTEYHIm.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-CfnDg2LH.js.map
