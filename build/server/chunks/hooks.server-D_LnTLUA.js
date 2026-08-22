import { p as publicUser, g as getSessionUser } from './auth-B9-nc3vi.js';
import './store-wwMYXD9C.js';
import './index.js-B1-lYwNB.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-D_LnTLUA.js.map
