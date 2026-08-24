import { a as adminConfigured, v as verifyAdminAccessKey, b as issueAdminSession } from './admin-BOkb9ANA.js';
import { j as json } from './index.js-DBbFL8yp.js';
import './store-rmjhawmV.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/login/+server.js
async function POST({ request, cookies }) {
	if (!adminConfigured()) return json({
		ok: false,
		error: "ADMIN_LOGIN_NOT_CONFIGURED"
	}, { status: 503 });
	const body = await request.json();
	if (!verifyAdminAccessKey(body?.accessKey)) return json({
		ok: false,
		error: "INVALID_ADMIN_ACCESS_KEY"
	}, { status: 401 });
	issueAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-D1-4Pn5I.js.map
