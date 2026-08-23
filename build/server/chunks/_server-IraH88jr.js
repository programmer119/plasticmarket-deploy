import { l as loginWithAuthHub, s as storeAuthSession, p as publicUser } from './auth-OjXjnVhZ.js';
import { j as json } from './index.js-eXhKP-qF.js';

//#region src/routes/api/auth/login/+server.js
async function POST({ request, cookies }) {
	try {
		const body = await request.json();
		const session = await loginWithAuthHub(body);
		if (session.pendingApproval) return json({
			ok: false,
			error: "PENDING_APPROVAL"
		}, { status: 403 });
		storeAuthSession(cookies, session);
		return json({
			ok: true,
			user: publicUser({
				...session.user,
				role: session.membership?.role,
				membershipStatus: session.membership?.status
			})
		});
	} catch (error) {
		const status = Number(error.status) || 503;
		return json({
			ok: false,
			error: error.message || "AUTHHUB_LOGIN_FAILED"
		}, { status });
	}
}

export { POST };
//# sourceMappingURL=_server-IraH88jr.js.map
