import { a as logoutAuthHub } from './auth-D_R98Ddw.js';
import { j as json } from './index.js-C5k5eBez.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BmJa-8Ol.js.map
