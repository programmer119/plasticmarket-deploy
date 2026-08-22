import { a as adminConfigured, v as verifyAdminAccessKey, b as issueAdminSession } from './admin-BNBFht2V.js';
import { j as json } from './index.js-BUJDLQvZ.js';
import './store-CmNvPsnZ.js';
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
//# sourceMappingURL=_server-BX8OTdyK.js.map
