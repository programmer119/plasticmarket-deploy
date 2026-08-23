import { b as escape_html } from './index.js-DIZZAeri.js';
import { p as page } from './state-3iJZlXCY.js';
import './client-BJW2qKLI.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte-C8Q1dRIV.js.map
