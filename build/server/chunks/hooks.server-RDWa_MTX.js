import { p as publicUser, g as getSessionUser } from './auth-ktthIWpS.js';
import './store-BRT0Uand.js';
import './index.js-tnB4PaGk.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-RDWa_MTX.js.map
