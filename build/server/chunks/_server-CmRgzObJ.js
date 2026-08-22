import { c as clearAdminSession } from './admin-B3JkHIHK.js';
import { j as json } from './index.js-B1-lYwNB.js';
import './store-wwMYXD9C.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CmRgzObJ.js.map
