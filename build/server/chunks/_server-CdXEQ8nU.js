import { c as clearSession } from './auth-B9-nc3vi.js';
import { j as json } from './index.js-B1-lYwNB.js';
import './store-wwMYXD9C.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CdXEQ8nU.js.map
