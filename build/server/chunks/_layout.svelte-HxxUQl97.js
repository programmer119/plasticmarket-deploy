import { h as head, b as escape_html, c as attr } from './index.js-DDNhq7BZ.js';
import { t as translate } from './i18n-BCXRuS_J.js';

//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, data } = $$props;
		let lang = data.locale || "ko";
		let currency = data.currency || "KRW";
		let ship = data.ship || "KR";
		let search = "";
		const t = (k) => translate(lang, k);
		function persist(name, value) {
			document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
		}
		function setLang(v) {
			lang = v;
			persist("pm_lang", v);
			location.reload();
		}
		function setCurrency(v) {
			currency = v;
			persist("pm_currency", v);
			location.reload();
		}
		function setShip(v) {
			ship = v;
			persist("pm_ship", v);
			location.reload();
		}
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>PlasticMarket</title>`);
			});
		});
		$$renderer.push(`<div class="topline"><div class="shell"><span>${escape_html(ship)}</span><span>${escape_html(currency)}</span><span>${escape_html(lang.toUpperCase())}</span></div></div> <header class="header"><div class="shell nav"><a class="brand" href="/">PLASTIC<b>MARKET</b></a> <form class="searchbox" action="/browse"><input name="q"${attr("value", search)}${attr("placeholder", t("search"))}${attr("aria-label", t("search"))}/></form> <nav class="navlinks"><a href="/browse">${escape_html(t("browse"))}</a><a href="/sell" class="sell">${escape_html(t("sell"))}</a><a href="/collection">${escape_html(t("collection"))}</a><a href="/seller">${escape_html(t("seller"))}</a>`);
		if (data.user) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button>${escape_html(t("signout"))}</button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<a href="/account">${escape_html(t("sign"))}</a>`);
		}
		$$renderer.push(`<!--]--></nav></div> <div class="subnav"><div class="shell"><a href="/browse?category=Gunpla">Gunpla</a><a href="/browse?category=Figures">Figures</a><a href="/browse?category=Character%20Kits">Character Kits</a><a href="/browse?category=Cars">Cars</a><a href="/browse">${escape_html(t("newReleases"))}</a><a href="/browse">${escape_html(t("preorders"))}</a><span class="locale-controls">`);
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
		$$renderer.select({
			"aria-label": t("currency"),
			value: currency,
			onchange: (e) => setCurrency(e.currentTarget.value)
		}, ($$renderer) => {
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`KRW`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`JPY`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`USD`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`TWD`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`HKD`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`VND`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`IDR`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`EUR`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`CNY`);
			});
		});
		$$renderer.select({
			"aria-label": t("ship"),
			value: ship,
			onchange: (e) => setShip(e.currentTarget.value)
		}, ($$renderer) => {
			$$renderer.option({ value: "KR" }, ($$renderer) => {
				$$renderer.push(`KR`);
			});
			$$renderer.option({ value: "JP" }, ($$renderer) => {
				$$renderer.push(`JP`);
			});
			$$renderer.option({ value: "US" }, ($$renderer) => {
				$$renderer.push(`US`);
			});
			$$renderer.option({ value: "TW" }, ($$renderer) => {
				$$renderer.push(`TW`);
			});
			$$renderer.option({ value: "HK" }, ($$renderer) => {
				$$renderer.push(`HK`);
			});
			$$renderer.option({ value: "VN" }, ($$renderer) => {
				$$renderer.push(`VN`);
			});
			$$renderer.option({ value: "ID" }, ($$renderer) => {
				$$renderer.push(`ID`);
			});
			$$renderer.option({ value: "ES" }, ($$renderer) => {
				$$renderer.push(`ES`);
			});
			$$renderer.option({ value: "CN" }, ($$renderer) => {
				$$renderer.push(`CN`);
			});
		});
		$$renderer.push(`</span></div></div></header> `);
		children($$renderer);
		$$renderer.push(`<!----> <footer class="footer"><div class="shell footer-grid"><div><div class="brand">PLASTIC<b>MARKET</b></div></div><div><h4>${escape_html(t("marketplace"))}</h4><a href="/browse">${escape_html(t("browse"))}</a><a href="/sell">${escape_html(t("sell"))}</a><a href="/collection">${escape_html(t("collection"))}</a></div><div><h4>${escape_html(t("trust"))}</h4><a href="/browse">${escape_html(t("buyerProtection"))}</a><a href="/browse">${escape_html(t("verification"))}</a><a href="/sell">${escape_html(t("conditionGuide"))}</a></div><div><h4>${escape_html(t("seller"))}</h4><a href="/seller">${escape_html(t("seller"))}</a><a href="/seller">${escape_html(t("bulkTools"))}</a><a href="/seller">${escape_html(t("orders"))}</a></div></div></footer> <nav class="mobile-nav"><a href="/">${escape_html(t("home"))}</a><a href="/browse">${escape_html(t("browse"))}</a><a href="/sell">${escape_html(t("sell"))}</a><a href="/collection">${escape_html(t("collection"))}</a>`);
		if (data.user) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a href="/seller">${escape_html(t("seller"))}</a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<a href="/account">${escape_html(t("sign"))}</a>`);
		}
		$$renderer.push(`<!--]--></nav>`);
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-HxxUQl97.js.map
