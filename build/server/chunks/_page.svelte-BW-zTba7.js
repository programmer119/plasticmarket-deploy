import { b as escape_html, d as ensure_array_like, f as attr_class, c as attr } from './index.js-DHp5dh8U.js';
import { k as krw } from './catalog-eJPybn3p.js';

//#region src/routes/seller/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const initialListings = () => [...data.listings];
		const initialOrders = () => [...data.orders];
		const initialOffers = () => [...data.offers];
		let tab = "Inventory";
		let listings = initialListings();
		let orders = initialOrders();
		let offers = initialOffers();
		let selected = [];
		function selectedHas(id) {
			return selected.includes(id);
		}
		$$renderer.push(`<main class="shell"><div class="page-head"><h1>Seller Hub</h1><div class="kpi-grid"><div class="kpi"><small>Orders</small><strong>${escape_html(orders.length)}</strong></div><div class="kpi"><small>Active inventory</small><strong>${escape_html(listings.filter((x) => x.status === "ACTIVE").length)}</strong></div><div class="kpi"><small>Open offers</small><strong>${escape_html(offers.filter((x) => x.status === "OPEN").length)}</strong></div><div class="kpi"><small>Paused inventory</small><strong>${escape_html(listings.filter((x) => x.status === "PAUSED").length)}</strong></div></div><div class="tabs"><!--[-->`);
		const each_array = ensure_array_like([
			"Inventory",
			"Orders",
			"Offers"
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let x = each_array[$$index];
			$$renderer.push(`<button${attr_class("tab", void 0, { "active": tab === x })}>${escape_html(x)}</button>`);
		}
		$$renderer.push(`<!--]--></div></div> `);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="chips"><button class="chip"${attr("disabled", !selected.length, true)}>Activate selected</button><button class="chip"${attr("disabled", !selected.length, true)}>Pause selected</button><label class="chip cursor-pointer">Import CSV<input type="file" accept=".csv,text/csv" hidden=""/></label><a class="chip active" href="/sell">Add listing</a></div>`);
		if (listings.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="table"><div class="row seller-row head"><div>Select / product</div><div>Price</div><div>Condition</div><div>Status</div><div>Action</div></div><!--[-->`);
			const each_array_1 = ensure_array_like(listings);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let l = each_array_1[$$index_1];
				$$renderer.push(`<div class="row seller-row"><div class="select-product"><input type="checkbox"${attr("checked", selectedHas(l.id), true)}/><span><strong>${escape_html(l.productData?.title || l.product)}</strong><br/><span class="meta">${escape_html(l.productData?.brand || "")}</span></span></div><div>${escape_html(krw(l.price))}</div><div>${escape_html(l.condition)}</div><div><span${attr_class("status", void 0, { "warn": l.status === "PAUSED" })}>${escape_html(l.status)}</span></div><div class="row-actions"><a class="btn"${attr("href", `/product/${l.product}`)}>View</a><button class="btn">${escape_html(l.status === "ACTIVE" ? "Pause" : "Activate")}</button></div></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="panel"><strong>No inventory</strong><div class="hint-tight"><a class="btn dark" href="/sell">Add listing</a></div></div>`);
		}
		$$renderer.push(`<!--]-->`);
		$$renderer.push(`<!--]-->`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BW-zTba7.js.map
