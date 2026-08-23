import { b as escape_html } from './index.js-CVF8L_zO.js';

//#region src/routes/payment-result/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<main class="account-shell"><section class="account-panel"><div class="page-head"><div class="eyebrow">PayHub</div><h1>${escape_html(data.ok ? "Payment complete" : "Payment status")}</h1></div>`);
		if (data.ok) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p>Your payment was verified and order <strong>${escape_html(data.order.id)}</strong> is confirmed.</p><div class="split-actions"><a class="btn dark" href="/collection">View collection</a><a class="btn" href="/browse">Continue browsing</a></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<p class="checkout-error">${escape_html(data.error || `Payment is ${data.status || data.returnStatus || "not complete"}.`)}</p><a class="btn" href="/browse">Back to marketplace</a>`);
		}
		$$renderer.push(`<!--]--></section></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-nGXaTnZP.js.map
