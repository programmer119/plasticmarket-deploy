import { c as clearAdminSession } from './admin-aZzDUwWE.js';
import { j as json } from './index.js-tnB4PaGk.js';
import './store-BRT0Uand.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-C5hVCIrV.js.map
