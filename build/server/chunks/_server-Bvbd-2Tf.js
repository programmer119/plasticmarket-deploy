import { c as clearAdminSession } from './admin-B1WcSF9H.js';
import { j as json } from './index.js-hgBuuMJB.js';
import './store-BAiWHnaa.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-Bvbd-2Tf.js.map
