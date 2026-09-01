import { j as json } from './index.js-Ba45yAmC.js';

//#region src/routes/api/auth/session/+server.js
function GET({ locals }) {
	return json({
		ok: true,
		user: locals.user || null
	});
}

export { GET };
//# sourceMappingURL=_server-_2wnw9_a.js.map
