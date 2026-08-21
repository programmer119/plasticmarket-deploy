import { c as clearAdminSession } from './admin-j8-j_LIb.js';
import { j as json } from './index.js-DDNhq7BZ.js';
import './store-D2oqQVra.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-PdBFkkgI.js.map
