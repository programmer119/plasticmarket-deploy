import { a as logoutAuthHub } from './auth-OjXjnVhZ.js';
import { j as json } from './index.js-eXhKP-qF.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-B28ArrPg.js.map
