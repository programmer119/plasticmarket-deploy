import { a as logoutAuthHub } from './auth-C7WpxVoZ.js';
import { j as json } from './index.js-Ba45yAmC.js';

//#region src/routes/api/auth/logout/+server.js
async function POST({ cookies }) {
	await logoutAuthHub(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-B7xxW7Tt.js.map
