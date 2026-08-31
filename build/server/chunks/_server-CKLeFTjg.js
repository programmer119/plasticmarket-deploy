import { a as logoutAuthHub } from './auth-BKeTLOXw.js';
import { j as json } from './index.js-71Bxb1Un.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CKLeFTjg.js.map
