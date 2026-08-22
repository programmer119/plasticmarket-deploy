import { c as clearSession } from './auth-C1ysjDqs.js';
import { j as json } from './index.js-In7hBQ7y.js';
import './store-CPFylvXi.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-CpDx88Xo.js.map
