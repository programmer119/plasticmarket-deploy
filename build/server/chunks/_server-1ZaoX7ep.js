import { c as clearAdminSession } from './admin-DRK-wclz.js';
import { j as json } from './index.js-71Bxb1Un.js';
import './store-KJyQ8REd.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-1ZaoX7ep.js.map
