import { a as all } from './store-DbH9zcox.js';
import { c as catalogProducts } from './catalog-store-D4x3cgjt.js';
import './index.js-mXd3WV7Q.js';
import 'node:fs';
import 'node:path';
import './catalog-ZRvm4Oxk.js';

//#region src/routes/browse/+page.server.js
var views = /* @__PURE__ */ new Set([
	"all",
	"new",
	"preorder"
]);
function inView(p, view) {
	if (view === "preorder") return /preorder|shipping/i.test(p.availability);
	if (view === "new") return !/preorder|shipping/i.test(p.availability) && Number(String(p.release).slice(0, 4)) >= 2024;
	return true;
}
function load({ url, locals }) {
	const products = catalogProducts();
	const listings = all("listings").filter((x) => x.status === "ACTIVE");
	const enriched = products.map((p) => {
		const rows = listings.filter((x) => x.product === p.slug).sort((a, b) => a.price - b.price);
		return {
			...p,
			listingCount: rows.length,
			lowestListing: rows[0]?.price ?? null,
			listingConditions: [...new Set(rows.map((x) => x.condition))]
		};
	});
	const requestedView = url.searchParams.get("view") || "all";
	const initialView = views.has(requestedView) ? requestedView : "all";
	const allowedCategories = /* @__PURE__ */ new Set(["All", ...products.filter((p) => inView(p, initialView)).map((p) => p.category)]);
	const requestedCategory = url.searchParams.get("category") || "All";
	const wishedProducts = locals.user ? all("collection").filter((x) => x.userId === locals.user.id && x.status === "Wished").map((x) => x.product) : [];
	return {
		products: enriched,
		initialCategory: allowedCategories.has(requestedCategory) ? requestedCategory : "All",
		initialQuery: url.searchParams.get("q") || "",
		initialView,
		wishedProducts
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cr_Ta1em.js')).default;
const server_id = "src/routes/browse/+page.server.js";
const imports = ["_app/immutable/nodes/6.DxufMQiS.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Bc3EY02f.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-BblKbGEA.js.map
