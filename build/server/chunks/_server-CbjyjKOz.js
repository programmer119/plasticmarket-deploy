import { g as getAuthConfig } from './auth-DwwJK0YA.js';
import { j as json } from './index.js-CVF8L_zO.js';

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
//# sourceMappingURL=_server-CbjyjKOz.js.map
