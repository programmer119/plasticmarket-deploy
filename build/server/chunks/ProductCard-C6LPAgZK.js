import { c as attr, b as escape_html } from './index.js-DHp5dh8U.js';
import { k as krw, m as money } from './catalog-eJPybn3p.js';

//#region src/lib/ProductCard.svelte
function ProductCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { p } = $$props;
		$$renderer.push(`<article class="product-card"><a${attr("href", `/product/${p.slug}`)}${attr("aria-label", p.title)}><div class="media"><img${attr("src", p.image)}${attr("alt", p.title)}/><span class="badge">${escape_html(p.availability)}</span></div></a> <button class="watch"${attr("aria-label", "Add to watchlist")}${attr("aria-pressed", false)}${attr("disabled", false, true)}>${escape_html("♡")}</button> <div class="card-info"><div class="brandline">${escape_html(p.brand)}</div><a class="title"${attr("href", `/product/${p.slug}`)}>${escape_html(p.title)}</a><div class="meta">${escape_html(p.grade)} · ${escape_html(p.scale)}</div><div class="price-row"><div class="ask"><span class="label">${escape_html(p.lowestListing != null ? "Lowest listing" : p.priceLabel)}</span><strong>${escape_html(p.lowestListing != null ? krw(p.lowestListing) : money(p.price, p.priceCurrency))}</strong></div>`);
		if (p.listingCount > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="move">${escape_html(p.listingCount)} ${escape_html(p.listingCount === 1 ? "listing" : "listings")}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div></article>`);
	});
}

export { ProductCard as P };
//# sourceMappingURL=ProductCard-C6LPAgZK.js.map
