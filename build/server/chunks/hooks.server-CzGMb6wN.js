import { p as publicUser, d as getSessionUser } from './auth-fGw1vB-z.js';
import './index.js-BCHlikQJ.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-CzGMb6wN.js.map
