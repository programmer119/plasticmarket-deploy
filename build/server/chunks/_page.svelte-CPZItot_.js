import { b as escape_html, c as attr, d as ensure_array_like, k as derived } from './index.js-DDNhq7BZ.js';
import { k as krw, m as money } from './catalog-eJPybn3p.js';

//#region src/routes/product/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let p = data.product;
		let watched = data.collectionStatus === "Wished";
		let busy = false;
		let lowest = derived(() => data.listings[0] || null);
		let highestOffer = derived(() => data.offers.find((x) => x.status === "OPEN") || null);
		let lastSale = derived(() => data.orders[0] || null);
		let acceptedOffer = derived(() => data.user ? data.offers.find((x) => x.buyerId === data.user.id && x.status === "ACCEPTED") || null : null);
		$$renderer.push(`<main><section class="product-page"><div class="gallery-pane"><div class="crumb">Marketplace / ${escape_html(p.category)} / ${escape_html(p.brand)}</div><div class="product-gallery"><img${attr("src", p.image)}${attr("alt", p.title)}/></div><div class="product-thumbs"><div class="thumb"><img${attr("src", p.image)}${attr("alt", p.title)}/></div></div></div> <aside class="trade-pane"><div class="trade-sticky"><div class="product-kicker">${escape_html(p.brand)} · ${escape_html(p.series)}</div><h1>${escape_html(p.title)}</h1><div class="submeta">${escape_html(p.grade)} · ${escape_html(p.scale)} · Release ${escape_html(p.release)}</div> `);
		if (acceptedOffer()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="trade-card accepted-offer"><div class="trade-label">Accepted offer</div><div class="trade-price">${escape_html(krw(acceptedOffer().amount))}</div><a class="btn green full-gap-top"${attr("href", `/checkout?listing=${acceptedOffer().listingId}&offer=${acceptedOffer().id}`)}>Checkout accepted offer</a></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (lowest()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="trade-card"><div class="trade-label">Buy Now for</div><div class="trade-price">${escape_html(krw(lowest().price))}</div><div class="fee">${escape_html(lowest().shippingMethod)} · shipping ${escape_html(krw(lowest().shippingCost))}</div><div class="split-actions"><a class="btn dark"${attr("href", data.user ? `/checkout?listing=${lowest().id}` : `/account?next=${encodeURIComponent(`/checkout?listing=${lowest().id}`)}`)}>Buy now</a><button class="btn">Make offer</button></div>`);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="trade-card"><div class="trade-label">${escape_html(p.priceLabel)}</div><div class="trade-price">${escape_html(money(p.price, p.priceCurrency))}</div><div class="split-actions"><a class="btn dark"${attr("href", data.user ? `/sell?product=${p.slug}` : `/account?next=${encodeURIComponent(`/sell?product=${p.slug}`)}`)}>Sell this item</a><button class="btn"${attr("disabled", busy, true)}>${escape_html(watched ? "Following" : "Follow")}</button></div></div>`);
		}
		$$renderer.push(`<!--]--> <div class="market-summary"><div class="stat"><small>Last sale</small><strong>${escape_html(lastSale() ? krw(lastSale().itemAmount || lastSale().amount) : "—")}</strong></div><div class="stat"><small>Highest offer</small><strong>${escape_html(highestOffer() ? krw(highestOffer().amount) : "—")}</strong></div></div>`);
		if (lowest()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="trade-card trade-card-compact"><button class="btn full"${attr("disabled", busy, true)}>${escape_html(watched ? "Following" : "Follow")}</button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></aside></section> <section class="below"><div class="section-head"><h2>Product details</h2></div><div class="facts"><div class="fact"><small>Manufacturer</small><strong>${escape_html(p.brand)}</strong></div><div class="fact"><small>Series</small><strong>${escape_html(p.series)}</strong></div><div class="fact"><small>Grade</small><strong>${escape_html(p.grade)}</strong></div><div class="fact"><small>Scale</small><strong>${escape_html(p.scale)}</strong></div><div class="fact"><small>Release</small><strong>${escape_html(p.release)}</strong></div><div class="fact"><small>JAN / Product ID</small><strong>${escape_html(p.jan || "—")}</strong></div><div class="fact"><small>Active listings</small><strong>${escape_html(data.listings.length)}</strong></div><div class="fact"><small>Availability</small><strong>${escape_html(p.availability)}</strong></div></div> <div class="history"><div class="section-head"><h2>Market data</h2></div>`);
		if (data.orders.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="table"><div class="row market-row head"><div>Date</div><div>Sale price</div><div>Order status</div></div><!--[-->`);
			const each_array = ensure_array_like(data.orders.slice(0, 8));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let o = each_array[$$index];
				$$renderer.push(`<div class="row market-row"><div>${escape_html(new Date(o.createdAt).toLocaleDateString())}</div><div><strong>${escape_html(krw(o.itemAmount || o.amount))}</strong></div><div><span class="status">${escape_html(o.status)}</span></div></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="panel"><strong>Market data unavailable</strong></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="section product-section-bottom-zero"><div class="section-head"><h2>Listings</h2></div>`);
		if (data.listings.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="table"><div class="row listing-row head"><div>Condition</div><div>Price</div><div>Shipping</div><div>Published</div><div>Action</div></div><!--[-->`);
			const each_array_1 = ensure_array_like(data.listings);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let l = each_array_1[$$index_1];
				$$renderer.push(`<div class="row listing-row"><div class="listing-condition"><img${attr("src", l.actualPhoto)} alt="Actual item"/><span><strong>${escape_html(l.condition)}</strong><br/><span class="meta">Box ${escape_html(l.boxCondition)} · ${escape_html(l.partsStatus)} · Manual ${escape_html(l.manualStatus)} · ${escape_html(l.decalStatus)}</span></span></div><div>${escape_html(krw(l.price))}</div><div>${escape_html(l.shippingMethod)} · ${escape_html(krw(l.shippingCost))}</div><div>${escape_html(new Date(l.createdAt).toLocaleDateString())}</div><a class="btn"${attr("href", data.user ? `/checkout?listing=${l.id}` : `/account?next=${encodeURIComponent(`/checkout?listing=${l.id}`)}`)}>Buy</a></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="panel"><strong>No active listings</strong><div class="hint-tight"><a class="btn dark"${attr("href", data.user ? `/sell?product=${p.slug}` : `/account?next=${encodeURIComponent(`/sell?product=${p.slug}`)}`)}>Sell this item</a></div></div>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CPZItot_.js.map
