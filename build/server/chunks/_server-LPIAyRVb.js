import { c as clearSession } from './auth-B3kqQkM3.js';
import { j as json } from './index.js-CqljWct6.js';
import './store-D9XU4X3s.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-LPIAyRVb.js.map
