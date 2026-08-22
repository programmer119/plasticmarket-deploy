import { a as logoutAuthHub } from './auth-BkE-NJ8l.js';
import { j as json } from './index.js-hgBuuMJB.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BeUiurN9.js.map
