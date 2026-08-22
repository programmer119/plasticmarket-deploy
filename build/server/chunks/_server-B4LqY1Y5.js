import { c as clearSession } from './auth-CAfhlU1-.js';
import { j as json } from './index.js-BUJDLQvZ.js';
import './store-CmNvPsnZ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/logout/+server.js
function POST({ cookies }) {
	clearSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-B4LqY1Y5.js.map
