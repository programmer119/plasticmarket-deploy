import { a as authenticate, i as issueSession, p as publicUser } from './auth-ktthIWpS.js';
import { j as json } from './index.js-tnB4PaGk.js';
import './store-BRT0Uand.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/login/+server.js
async function POST({ request, cookies }) {
	const b = await request.json();
	const user = authenticate(b.email, b.password);
	if (!user) return json({
		ok: false,
		error: "INVALID_CREDENTIALS"
	}, { status: 401 });
	issueSession(cookies, user);
	return json({
		ok: true,
		user: publicUser(user)
	});
}

export { POST };
//# sourceMappingURL=_server-BdiNtyEI.js.map
