import { a as all } from './store-DPtovBfF.js';
import './index.js-BCHlikQJ.js';
import 'node:fs';
import 'node:path';

//#region src/routes/+page.server.js
function load({ locals }) {
	return { wishedProducts: locals.user ? all("collection").filter((x) => x.userId === locals.user.id && x.status === "Wished").map((x) => x.product) : [] };
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ZISFiYZE.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.CgNCUV-K.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BLWLFjA3.js","_app/immutable/chunks/A4ix12rb.js","_app/immutable/chunks/C7h7DQCQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-AshBOdRL.js.map
