import { c as clearAdminSession } from './admin-DpJpTevD.js';
import { j as json } from './index.js-DIZZAeri.js';
import './store-lY7JW809.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-DlA1ELFM.js.map
