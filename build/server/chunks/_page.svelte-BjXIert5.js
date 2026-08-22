import { b as escape_html, f as attr_class, c as attr } from './index.js-In7hBQ7y.js';

//#region src/routes/account/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let password = "";
		let busy = false;
		$$renderer.push(`<main class="account-shell"><section class="account-panel"><div class="page-head"><div class="eyebrow">Account</div><h1>${escape_html("Sign in")}</h1></div><div class="tabs"><button${attr_class("tab", void 0, { "active": true })}>Sign in</button><button${attr_class("tab", void 0, { "active": false })}>Create account</button></div><form class="account-form">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--><label>Email<input class="catalog-search" type="email"${attr("value", email)} autocomplete="email" required=""/></label><label>Password<input class="catalog-search" type="password"${attr("value", password)}${attr("autocomplete", "current-password")} minlength="8" required=""/></label><button class="btn dark full"${attr("disabled", busy, true)}>${escape_html("Sign in")}</button>`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></form></section></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BjXIert5.js.map
