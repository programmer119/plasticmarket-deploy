//#region src/routes/+layout.server.js
var supportedLangs = /* @__PURE__ */ new Set([
	"ko",
	"en",
	"ja",
	"zh-TW",
	"zh-CN",
	"vi",
	"id",
	"es"
]);
var supportedCurrencies = /* @__PURE__ */ new Set([
	"KRW",
	"JPY",
	"USD",
	"TWD",
	"HKD",
	"VND",
	"IDR",
	"EUR",
	"CNY"
]);
var supportedShips = /* @__PURE__ */ new Set([
	"KR",
	"JP",
	"US",
	"TW",
	"HK",
	"VN",
	"ID",
	"ES",
	"CN"
]);
function load({ locals, cookies }) {
	const rawLang = cookies.get("pm_lang") || "ko";
	const rawCurrency = cookies.get("pm_currency") || "KRW";
	const rawShip = cookies.get("pm_ship") || "KR";
	return {
		user: locals.user || null,
		locale: supportedLangs.has(rawLang) ? rawLang : "ko",
		currency: supportedCurrencies.has(rawCurrency) ? rawCurrency : "KRW",
		ship: supportedShips.has(rawShip) ? rawShip : "KR"
	};
}

var _layout_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Diyxn0u6.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.BaVYkRa1.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BLWLFjA3.js"];
const stylesheets = ["_app/immutable/assets/0.xUnL6R9R.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-BSAore2-.js.map
