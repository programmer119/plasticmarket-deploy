import { p as publicUser, g as getSessionUser } from './auth-D-Bjl9Hx.js';
import './store-GUJ-QPL6.js';
import './index.js-Chaee5kv.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-B4Lg-OlJ.js.map
