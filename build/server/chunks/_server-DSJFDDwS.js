import { j as json } from './index.js-DIZZAeri.js';

//#region src/routes/api/auth/session/+server.js
function GET({ locals }) {
	return json({
		ok: true,
		user: locals.user || null
	});
}

export { GET };
//# sourceMappingURL=_server-DSJFDDwS.js.map
