import { j as json } from './index.js-Ku1uY2yt.js';

//#region src/routes/api/auth/session/+server.js
function GET({ locals }) {
	return json({
		ok: true,
		user: locals.user || null
	});
}

export { GET };
//# sourceMappingURL=_server-O89lG_LQ.js.map
