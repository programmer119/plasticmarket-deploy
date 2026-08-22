import { p as publicUser, g as getSessionUser } from './auth-CAfhlU1-.js';
import './store-CmNvPsnZ.js';
import './index.js-BUJDLQvZ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-TcKPF94N.js.map
