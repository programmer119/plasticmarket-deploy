import { p as publicUser, d as getSessionUser } from './auth-D_R98Ddw.js';
import './index.js-C5k5eBez.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-6m9anby6.js.map
