import { c as clearSession } from './auth-D-Bjl9Hx.js';
import { j as json } from './index.js-Chaee5kv.js';
import './store-GUJ-QPL6.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CS3LP20W.js.map
