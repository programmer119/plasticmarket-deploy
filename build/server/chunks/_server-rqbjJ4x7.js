import { c as clearSession } from './auth-BVWXMIki.js';
import { j as json } from './index.js-Ku1uY2yt.js';
import './store-BT9OFksf.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-rqbjJ4x7.js.map
