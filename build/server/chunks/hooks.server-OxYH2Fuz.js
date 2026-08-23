import { p as publicUser, d as getSessionUser } from './auth-OjXjnVhZ.js';
import './index.js-eXhKP-qF.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-OxYH2Fuz.js.map
