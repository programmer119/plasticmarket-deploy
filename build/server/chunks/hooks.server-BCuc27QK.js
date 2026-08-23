import { p as publicUser, d as getSessionUser } from './auth-DwwJK0YA.js';
import './index.js-CVF8L_zO.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-BCuc27QK.js.map
