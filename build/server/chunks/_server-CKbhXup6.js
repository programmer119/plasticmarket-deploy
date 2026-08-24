import { c as clearAdminSession } from './admin-BOkb9ANA.js';
import { j as json } from './index.js-DBbFL8yp.js';
import './store-rmjhawmV.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CKbhXup6.js.map
