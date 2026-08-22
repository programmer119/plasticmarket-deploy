import { c as attr, b as escape_html, d as ensure_array_like } from './index.js-tnB4PaGk.js';

//#region src/routes/admin/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const initialOrders = () => data.orders || [];
		let orders = initialOrders();
		let accessKey = "";
		let busy = "";
		const label = (o) => o.status === "SHIPPED" && o.verificationStatus === "NOT_RECEIVED" ? "Warehouse received" : o.verificationStatus === "RECEIVED" ? "Authentication complete" : o.verificationStatus === "AUTHENTICATED" ? "QA passed" : o.verificationStatus === "QA_PASSED" ? "Dispatch" : o.verificationStatus === "DISPATCHED" ? "Delivered" : "";
		if (!data.authorized) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<main class="account-shell"><section class="account-panel"><div class="page-head"><div class="eyebrow">Verification</div><h1>Admin sign in</h1></div><form class="account-form"><label>Access key<input class="catalog-search" type="password"${attr("value", accessKey)} autocomplete="off" required="" minlength="32"/></label><button class="btn dark full"${attr("disabled", !data.configured, true)}>${escape_html("Sign in")}</button>`);
			if (!data.configured) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="checkout-error">ADMIN_LOGIN_NOT_CONFIGURED</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></form></section></main>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<main class="shell"><div class="page-head"><h1>Verification</h1><button class="btn">Sign out</button></div>`);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--><section class="section section-compact-top"><div class="table"><div class="row head admin-order-row"><span>Order</span><span>Seller shipment</span><span>Verification</span><span>Status</span><span>Action</span></div><!--[-->`);
			const each_array = ensure_array_like(orders);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let o = each_array[$$index];
				$$renderer.push(`<div class="row admin-order-row"><span><strong>${escape_html(o.id)}</strong><small class="meta">${escape_html(o.product)}</small></span><span>${escape_html(o.tracking?.carrier || "—")}<small class="meta">${escape_html(o.tracking?.trackingNumber || "—")}</small></span><span>${escape_html(o.verificationStatus)}</span><span>${escape_html(o.status)}</span><span>`);
				if (label(o)) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<button class="btn"${attr("disabled", busy === o.id, true)}>${escape_html(label(o))}</button>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`—`);
				}
				$$renderer.push(`<!--]--></span></div>`);
			}
			$$renderer.push(`<!--]--></div></section></main>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CO2KsRNS.js.map
