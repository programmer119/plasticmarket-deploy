import { c as clearAdminSession } from './admin-D4D3RBrw.js';
import { j as json } from './index.js-Ku1uY2yt.js';
import './store-BT9OFksf.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-adz-LmFf.js.map
