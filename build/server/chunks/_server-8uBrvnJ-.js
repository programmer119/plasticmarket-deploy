import { c as clearAdminSession } from './admin-ByNAz1zx.js';
import { j as json } from './index.js-BXRNCAzq.js';
import './store-SvrBQiov.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-8uBrvnJ-.js.map
