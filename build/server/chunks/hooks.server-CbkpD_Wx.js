import { p as publicUser, d as getSessionUser } from './auth-DN_Yv0MT.js';
import './index.js-BXRNCAzq.js';

//#region src/hooks.server.js
async function handle({ event, resolve }) {
	event.locals.user = publicUser(await getSessionUser(event.cookies));
	return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-CbkpD_Wx.js.map
