import { c as clearAdminSession } from './admin-Bpy138HO.js';
import { j as json } from './index.js-Ba45yAmC.js';
import './store-fR321lVl.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BwrF7hE1.js.map
