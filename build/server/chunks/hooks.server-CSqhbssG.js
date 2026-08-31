import { p as publicUser, d as getSessionUser } from './auth-BKeTLOXw.js';
import './index.js-71Bxb1Un.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-CSqhbssG.js.map
