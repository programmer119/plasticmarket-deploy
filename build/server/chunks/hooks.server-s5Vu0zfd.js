import { p as publicUser, d as getSessionUser } from './auth-Cli5Lhl0.js';
import './index.js-DBbFL8yp.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-s5Vu0zfd.js.map
