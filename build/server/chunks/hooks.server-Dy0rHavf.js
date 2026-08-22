import { p as publicUser, d as getSessionUser } from './auth-BkE-NJ8l.js';
import './index.js-hgBuuMJB.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-Dy0rHavf.js.map
