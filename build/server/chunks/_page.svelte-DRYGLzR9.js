import { d as ensure_array_like, b as escape_html, f as attr_class, k as derived } from './index.js-tnB4PaGk.js';
import { P as ProductCard } from './ProductCard-HpFCTw-j.js';
import './catalog-eJPybn3p.js';

//#region src/routes/collection/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let tab = "Owned";
		let visible = derived(() => data.entries.filter((x) => x.entry.status === tab).map((x) => x.product));
		$$renderer.push(`<main class="shell"><div class="page-head"><h1>Collection</h1><div class="kpi-grid"><!--[-->`);
		const each_array = ensure_array_like([
			"Wished",
			"Ordered",
			"Owned",
			"Built"
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let s = each_array[$$index];
			$$renderer.push(`<div class="kpi"><small>${escape_html(s)}</small><strong>${escape_html(data.entries.filter((x) => x.entry.status === s).length)}</strong></div>`);
		}
		$$renderer.push(`<!--]--></div><div class="tabs"><!--[-->`);
		const each_array_1 = ensure_array_like([
			"Wished",
			"Ordered",
			"Owned",
			"Built"
		]);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let x = each_array_1[$$index_1];
			$$renderer.push(`<button${attr_class("tab", void 0, { "active": tab === x })}>${escape_html(x)}</button>`);
		}
		$$renderer.push(`<!--]--></div></div><section class="section section-compact-top">`);
		if (visible().length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="product-grid"><!--[-->`);
			const each_array_2 = ensure_array_like(visible());
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let p = each_array_2[$$index_2];
				ProductCard($$renderer, { p });
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="panel"><strong>No products in ${escape_html(tab)}</strong><div class="hint-tight"><a class="btn dark" href="/browse">Browse</a></div></div>`);
		}
		$$renderer.push(`<!--]--></section></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DRYGLzR9.js.map
