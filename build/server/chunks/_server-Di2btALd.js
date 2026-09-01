import { a as logoutAuthHub } from './auth-CBt2jbWu.js';
import { j as json } from './index.js-mXd3WV7Q.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-Di2btALd.js.map
