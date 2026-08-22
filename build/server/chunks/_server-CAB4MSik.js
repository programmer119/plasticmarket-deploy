import { g as getAuthConfig } from './auth-BkE-NJ8l.js';
import { j as json } from './index.js-hgBuuMJB.js';

//#region src/routes/api/auth/config/+server.js
async function GET() {
	try {
		return json({
			ok: true,
			config: await getAuthConfig()
		});
	} catch (error) {
		return json({
			ok: false,
			error: error.message || "AUTHHUB_CONFIG_UNAVAILABLE"
		}, { status: Number(error.status) || 503 });
	}
}

export { GET };
//# sourceMappingURL=_server-CAB4MSik.js.map
