import { p as publicUser, g as getSessionUser } from './auth-C1ysjDqs.js';
import './store-CPFylvXi.js';
import './index.js-In7hBQ7y.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-wwTW2Bfs.js.map
