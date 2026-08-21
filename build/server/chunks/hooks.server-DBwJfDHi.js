import { p as publicUser, g as getSessionUser } from './auth-m3nDgmj8.js';
import './store-D2oqQVra.js';
import './index.js-DDNhq7BZ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-DBwJfDHi.js.map
