import { c as clearAdminSession } from './admin-BI_Y2oyu.js';
import { j as json } from './index.js-mXd3WV7Q.js';
import './store-DbH9zcox.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CS_nMEcM.js.map
