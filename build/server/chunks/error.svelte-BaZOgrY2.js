import { b as escape_html } from './index.js-BCHlikQJ.js';
import { p as page } from './state-DEnBL7OM.js';
import './client-bLQ-xiS7.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte-BaZOgrY2.js.map
