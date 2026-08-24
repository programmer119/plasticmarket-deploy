import { a as logoutAuthHub } from './auth-Cli5Lhl0.js';
import { j as json } from './index.js-DBbFL8yp.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-B6GCvEJ-.js.map
