import { h as head, b as escape_html, c as attr, d as attr_class } from './index.js-hgBuuMJB.js';
import { p as page } from './state-CnnBii51.js';
import { t as translate } from './i18n-BCXRuS_J.js';
import './client-BqjUrCrB.js';

//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, data } = $$props;
		const initialLocale = () => data.locale || "ko";
		const initialCurrency = () => data.currency || "KRW";
		const initialShip = () => data.ship || "KR";
		let lang = initialLocale();
		let currency = initialCurrency();
		let ship = initialShip();
		let search = "";
		let logoutBusy = false;
		const t = (k) => translate(lang, k);
		function persist(name, value) {
			document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
		}
		function setLang(v) {
			lang = v;
			persist("pm_lang", v);
			location.reload();
		}
		function sectionActive(name) {
			const p = page.url.pathname;
			if (name === "browse") return p === "/browse" || p.startsWith("/product/") || p === "/checkout" || p === "/payment-result";
			if (name === "sell") return p === "/sell";
			if (name === "collection") return p === "/collection";
			if (name === "seller") return p === "/seller";
			if (name === "account") return p === "/account" || p === "/auth/callback";
			return false;
		}
		function browseActive({ category = "", view = "" } = {}) {
			if (page.url.pathname !== "/browse") return false;
			const c = page.url.searchParams.get("category") || "";
			const v = page.url.searchParams.get("view") || "all";
			return category ? c === category && v === "all" : view ? v === view : !c && v === "all";
		}
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>PlasticMarket</title>`);
			});
		});
		$$renderer.push(`<div class="topline"><div class="shell"><span>${escape_html(ship)}</span><span>${escape_html(currency)}</span><span>${escape_html(lang.toUpperCase())}</span></div></div> <header class="header"><div class="shell nav"><a class="brand" href="/">PLASTIC<b>MARKET</b></a> <form class="searchbox" action="/browse"><input name="q"${attr("value", search)}${attr("placeholder", t("search"))}${attr("aria-label", t("search"))}/></form> <nav class="navlinks"><a${attr("aria-current", sectionActive("browse") ? "page" : void 0)} href="/browse"${attr_class("", void 0, { "active": sectionActive("browse") })}>${escape_html(t("browse"))}</a> <a${attr("aria-current", sectionActive("sell") ? "page" : void 0)} href="/sell"${attr_class("", void 0, { "active": sectionActive("sell") })}>${escape_html(t("sell"))}</a> <a${attr("aria-current", sectionActive("collection") ? "page" : void 0)} href="/collection"${attr_class("", void 0, { "active": sectionActive("collection") })}>${escape_html(t("collection"))}</a> <a${attr("aria-current", sectionActive("seller") ? "page" : void 0)} href="/seller"${attr_class("", void 0, { "active": sectionActive("seller") })}>${escape_html(t("seller"))}</a> `);
		if (data.user) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button${attr("disabled", logoutBusy, true)}>${escape_html(t("signout"))}</button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<a${attr("aria-current", sectionActive("account") ? "page" : void 0)} href="/account"${attr_class("", void 0, { "active": sectionActive("account") })}>${escape_html(t("sign"))}</a>`);
		}
		$$renderer.push(`<!--]--></nav></div> <div class="subnav"><div class="shell"><a href="/browse?category=Gunpla"${attr_class("", void 0, { "active": browseActive({ category: "Gunpla" }) })}>Gunpla</a><a href="/browse?category=Figures"${attr_class("", void 0, { "active": browseActive({ category: "Figures" }) })}>Figures</a><a href="/browse?category=Character%20Kits"${attr_class("", void 0, { "active": browseActive({ category: "Character Kits" }) })}>Character Kits</a><a href="/browse?category=Cars"${attr_class("", void 0, { "active": browseActive({ category: "Cars" }) })}>Cars</a><a href="/browse?view=new"${attr_class("", void 0, { "active": browseActive({ view: "new" }) })}>${escape_html(t("newReleases"))}</a><a href="/browse?view=preorder"${attr_class("", void 0, { "active": browseActive({ view: "preorder" }) })}>${escape_html(t("preorders"))}</a> <span class="locale-controls">`);
		$$renderer.select({
			"aria-label": t("language"),
			value: lang,
			onchange: (e) => setLang(e.currentTarget.value)
		}, ($$renderer) => {
			$$renderer.option({ value: "ko" }, ($$renderer) => {
				$$renderer.push(`한국어`);
			});
			$$renderer.option({ value: "en" }, ($$renderer) => {
				$$renderer.push(`English`);
			});
			$$renderer.option({ value: "ja" }, ($$renderer) => {
				$$renderer.push(`日本語`);
			});
			$$renderer.option({ value: "zh-TW" }, ($$renderer) => {
				$$renderer.push(`繁體中文`);
			});
			$$renderer.option({ value: "zh-CN" }, ($$renderer) => {
				$$renderer.push(`简体中文`);
			});
			$$renderer.option({ value: "vi" }, ($$renderer) => {
				$$renderer.push(`Tiếng Việt`);
			});
			$$renderer.option({ value: "id" }, ($$renderer) => {
				$$renderer.push(`Bahasa Indonesia`);
			});
			$$renderer.option({ value: "es" }, ($$renderer) => {
				$$renderer.push(`Español`);
			});
		});
		$$renderer.push(`<span class="meta">${escape_html(currency)} · ${escape_html(ship)}</span></span></div></div></header> `);
		children($$renderer);
		$$renderer.push(`<!----> <footer class="footer"><div class="shell footer-grid"><div><div class="brand">PLASTIC<b>MARKET</b></div></div><div><h4>${escape_html(t("marketplace"))}</h4><a href="/browse">${escape_html(t("browse"))}</a><a href="/sell">${escape_html(t("sell"))}</a><a href="/collection">${escape_html(t("collection"))}</a></div><div><h4>${escape_html(t("trust"))}</h4><a href="/guide#buyer-protection">${escape_html(t("buyerProtection"))}</a><a href="/guide#verification">${escape_html(t("verification"))}</a><a href="/guide#condition-guide">${escape_html(t("conditionGuide"))}</a></div><div><h4>${escape_html(t("seller"))}</h4><a href="/seller">${escape_html(t("seller"))}</a><a href="/seller?tab=Inventory">${escape_html(t("bulkTools"))}</a><a href="/seller?tab=Orders">${escape_html(t("orders"))}</a></div></div></footer> <nav class="mobile-nav"><a href="/"${attr_class("", void 0, { "active": page.url.pathname === "/" })}>${escape_html(t("home"))}</a><a href="/browse"${attr_class("", void 0, { "active": sectionActive("browse") })}>${escape_html(t("browse"))}</a><a href="/sell"${attr_class("", void 0, { "active": sectionActive("sell") })}>${escape_html(t("sell"))}</a><a href="/collection"${attr_class("", void 0, { "active": sectionActive("collection") })}>${escape_html(t("collection"))}</a>`);
		if (data.user) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a href="/seller"${attr_class("", void 0, { "active": sectionActive("seller") })}>${escape_html(t("seller"))}</a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<a href="/account"${attr_class("", void 0, { "active": sectionActive("account") })}>${escape_html(t("sign"))}</a>`);
		}
		$$renderer.push(`<!--]--></nav>`);
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DK1C85TP.js.map
