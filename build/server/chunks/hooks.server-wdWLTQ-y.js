import { p as publicUser, d as getSessionUser } from './auth-CSs7Ym0g.js';
import './index.js-DIZZAeri.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-wdWLTQ-y.js.map
