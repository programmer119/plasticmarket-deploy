import { c as clearAdminSession } from './admin-9gqYaNiM.js';
import { j as json } from './index.js-eXhKP-qF.js';
import './store-9iL4-fr_.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-ilzf6y4-.js.map
