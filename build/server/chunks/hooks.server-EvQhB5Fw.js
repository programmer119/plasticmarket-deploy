import { p as publicUser, d as getSessionUser } from './auth-CBt2jbWu.js';
import './index.js-mXd3WV7Q.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-EvQhB5Fw.js.map
