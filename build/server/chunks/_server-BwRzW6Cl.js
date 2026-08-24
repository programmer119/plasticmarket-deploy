import { a as logoutAuthHub } from './auth-fGw1vB-z.js';
import { j as json } from './index.js-BCHlikQJ.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BwRzW6Cl.js.map
