import { c as clearAdminSession } from './admin-BP0vwnRx.js';
import { j as json } from './index.js-CqljWct6.js';
import './store-D9XU4X3s.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CBe4EvLb.js.map
