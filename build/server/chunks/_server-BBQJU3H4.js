import { c as clearAdminSession } from './admin-46eiOHRa.js';
import { j as json } from './index.js-In7hBQ7y.js';
import './store-CPFylvXi.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-BBQJU3H4.js.map
