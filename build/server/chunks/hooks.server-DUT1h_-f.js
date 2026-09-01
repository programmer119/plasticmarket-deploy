import { p as publicUser, d as getSessionUser } from './auth-C7WpxVoZ.js';
import './index.js-Ba45yAmC.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-DUT1h_-f.js.map
