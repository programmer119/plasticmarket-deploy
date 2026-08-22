import { p as publicUser, g as getSessionUser } from './auth-BVWXMIki.js';
import './store-BT9OFksf.js';
import './index.js-Ku1uY2yt.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-BCOO2cHb.js.map
