import { c as clearSession } from './auth-ktthIWpS.js';
import { j as json } from './index.js-tnB4PaGk.js';
import './store-BRT0Uand.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-B6mUP-3p.js.map
