import { p as publicUser, g as getSessionUser } from './auth-B3kqQkM3.js';
import './store-D9XU4X3s.js';
import './index.js-CqljWct6.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-DPJG39uL.js.map
