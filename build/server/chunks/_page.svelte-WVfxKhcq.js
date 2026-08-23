import { b as escape_html, d as attr_class } from './index.js-DIZZAeri.js';

//#region src/routes/account/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<main class="account-shell"><section class="account-panel"><div class="page-head"><div class="eyebrow">Account</div><h1>${escape_html("Sign in")}</h1></div><div class="tabs"><button${attr_class("tab", void 0, { "active": true })}>Sign in</button><button${attr_class("tab", void 0, { "active": false })}>Create account</button></div> `);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="meta">Loading sign-in options…</p>`);
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-WVfxKhcq.js.map
