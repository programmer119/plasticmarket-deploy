import { r as redirect } from './index.js-hgBuuMJB.js';

//#region src/routes/sell/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	return { product: url.searchParams.get("product") || null };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D9LOi1Sl.js')).default;
const server_id = "src/routes/sell/+page.server.js";
const imports = ["_app/immutable/nodes/12.BRrC7VIL.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/A4ix12rb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-MQigJJCR.js.map
