import { a as logoutAuthHub } from './auth-DwwJK0YA.js';
import { j as json } from './index.js-CVF8L_zO.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-Dl-b66O5.js.map
