import { c as clearAdminSession } from './admin-urUDpe44.js';
import { j as json } from './index.js-DHp5dh8U.js';
import './store-BT3JAYjQ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BEqV0yGi.js.map
