import { r as redirect } from './index.js-DHp5dh8U.js';

//#region src/routes/sell/+page.server.js
function load({ locals, url }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	return { product: url.searchParams.get("product") || null };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BOrhHQV_.js')).default;
const server_id = "src/routes/sell/+page.server.js";
const imports = ["_app/immutable/nodes/9.DrCtckuT.js","_app/immutable/chunks/BTw82Dx4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BwWVnEyS.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-s53i3ww1.js.map
