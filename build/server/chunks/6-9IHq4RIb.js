import { r as redirect, p as private_env } from './index.js-DHp5dh8U.js';
import { a as all } from './store-BT3JAYjQ.js';
import { g as getProduct } from './catalog-eJPybn3p.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-CPvSVkVA.js')).default;
const server_id = "src/routes/checkout/+page.server.js";
const imports = ["_app/immutable/nodes/6.Bc42ORY0.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-9IHq4RIb.js.map
