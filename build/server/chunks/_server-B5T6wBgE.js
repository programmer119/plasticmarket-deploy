import { g as getAuthConfig } from './auth-CSs7Ym0g.js';
import { j as json } from './index.js-DIZZAeri.js';

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
//# sourceMappingURL=_server-B5T6wBgE.js.map
