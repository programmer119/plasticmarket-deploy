import { c as clearSession } from './auth-m3nDgmj8.js';
import { j as json } from './index.js-DDNhq7BZ.js';
import './store-D2oqQVra.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-DkrOoY9b.js.map
