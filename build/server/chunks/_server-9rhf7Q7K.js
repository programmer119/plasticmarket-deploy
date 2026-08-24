import { c as clearAdminSession } from './admin-D4fzfugM.js';
import { j as json } from './index.js-BCHlikQJ.js';
import './store-DPtovBfF.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/admin/logout/+server.js
function POST({ cookies }) {
	clearAdminSession(cookies);
	return json({ ok: true });
}

export { POST };
//# sourceMappingURL=_server-9rhf7Q7K.js.map
