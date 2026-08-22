import { a as all } from './store-GUJ-QPL6.js';
import { p as products } from './catalog-DCGl-LrU.js';
import './index.js-Chaee5kv.js';
import 'node:fs';
import 'node:path';

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
function load({ url }) {
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
	return {
		products: enriched,
		initialCategory: allowedCategories.has(requestedCategory) ? requestedCategory : "All",
		initialQuery: url.searchParams.get("q") || "",
		initialView
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B9EF67y4.js')).default;
const server_id = "src/routes/browse/+page.server.js";
const imports = ["_app/immutable/nodes/5.C9Q4M5eR.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CgzC9SlL.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-D9z0XEwI.js.map
