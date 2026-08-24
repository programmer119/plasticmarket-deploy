import { j as json } from './index.js-BCHlikQJ.js';

//#region src/routes/api/auth/session/+server.js
function GET({ locals }) {
	return json({
		ok: true,
		user: locals.user || null
	});
}

export { GET };
//# sourceMappingURL=_server-CvO4yPUU.js.map
