import { c as clearSession } from './auth-DIGmQ9g_.js';
import { j as json } from './index.js-DHp5dh8U.js';
import './store-BT3JAYjQ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-zz_3ozzu.js.map
