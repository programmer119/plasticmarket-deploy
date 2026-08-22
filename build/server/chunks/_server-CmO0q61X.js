import { b as createUser, i as issueSession, p as publicUser } from './auth-DIGmQ9g_.js';
import { j as json } from './index.js-DHp5dh8U.js';
import './store-BT3JAYjQ.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';

//#region src/routes/api/auth/signup/+server.js
async function POST({ request, cookies }) {
	const body = await request.json();
	const r = createUser(body);
	if (r.error) return json({
		ok: false,
		error: r.error
	}, { status: r.error === "EMAIL_ALREADY_REGISTERED" ? 409 : 422 });
	issueSession(cookies, r.user);
	return json({
		ok: true,
		user: publicUser(r.user)
	}, { status: 201 });
}

export { POST };
//# sourceMappingURL=_server-CmO0q61X.js.map
