import { b as escape_html } from './index.js-71Bxb1Un.js';
import { p as page } from './state-4vEksbG6.js';
import './client-Ca1hsLZv.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte-CNvURaOu.js.map
