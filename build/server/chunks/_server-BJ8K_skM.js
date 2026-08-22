import { c as clearAdminSession } from './admin-BNBFht2V.js';
import { j as json } from './index.js-BUJDLQvZ.js';
import './store-CmNvPsnZ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BJ8K_skM.js.map
