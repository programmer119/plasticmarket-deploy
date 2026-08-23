import { b as escape_html } from './index.js-CVF8L_zO.js';
import { p as page } from './state-BLbPIIFt.js';
import './client-CEh2tp_b.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte-Dn8JPt3X.js.map
