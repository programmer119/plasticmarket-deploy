import { a as logoutAuthHub } from './auth-CSs7Ym0g.js';
import { j as json } from './index.js-DIZZAeri.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BjMp3Tf3.js.map
