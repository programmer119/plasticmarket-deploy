import { b as escape_html } from './index.js-Ba45yAmC.js';
import { p as page } from './state-DV8Npsu8.js';
import './client-C4hGtxeJ.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte-Bcy5gGtF.js.map
