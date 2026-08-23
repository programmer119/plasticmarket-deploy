import { c as clearAdminSession } from './admin-C26XdvvL.js';
import { j as json } from './index.js-CVF8L_zO.js';
import './store-ChUPNIuh.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CQxu1ekS.js.map
