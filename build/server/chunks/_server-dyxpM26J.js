import { a as authenticate, i as issueSession, p as publicUser } from './auth-B3kqQkM3.js';
import { j as json } from './index.js-CqljWct6.js';
import './store-D9XU4X3s.js';
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
//# sourceMappingURL=_server-dyxpM26J.js.map
