import { c as clearAdminSession } from './admin-D1mvjio8.js';
import { j as json } from './index.js-C5k5eBez.js';
import './store-BkUo_zXI.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-DKOlEh-i.js.map
