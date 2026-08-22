import { p as publicUser, g as getSessionUser } from './auth-DIGmQ9g_.js';
import './store-BT3JAYjQ.js';
import './index.js-DHp5dh8U.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-O4UYpwdC.js.map
