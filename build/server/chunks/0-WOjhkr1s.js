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
const component = async () => component_cache ??= (await import('./_layout.svelte-CAh63xJ9.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.Dovjgaq3.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BM3GLyf5.js","_app/immutable/chunks/73q9gW_q.js","_app/immutable/chunks/Bw2Lbu27.js"];
const stylesheets = ["_app/immutable/assets/0.Buy0VE4j.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-WOjhkr1s.js.map
