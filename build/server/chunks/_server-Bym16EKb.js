import { a as logoutAuthHub } from './auth-DN_Yv0MT.js';
import { j as json } from './index.js-BXRNCAzq.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-Bym16EKb.js.map
