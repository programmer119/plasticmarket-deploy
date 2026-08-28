import { c as signupWithAuthHub, s as storeAuthSession, p as publicUser } from './auth-D_R98Ddw.js';
import { j as json } from './index.js-C5k5eBez.js';

//#region src/routes/api/auth/signup/+server.js
async function POST({ request, cookies }) {
	try {
		const body = await request.json();
		const session = await signupWithAuthHub(body);
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
		}, { status: 201 });
	} catch (error) {
		const status = Number(error.status) || 503;
		return json({
			ok: false,
			error: error.message || "AUTHHUB_SIGNUP_FAILED"
		}, { status });
	}
}

export { POST };
//# sourceMappingURL=_server-D1ijEkdm.js.map
