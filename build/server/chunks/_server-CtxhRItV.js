import { c as clearAdminSession } from './admin-C1Qrb7c0.js';
import { j as json } from './index.js-Chaee5kv.js';
import './store-GUJ-QPL6.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CtxhRItV.js.map
