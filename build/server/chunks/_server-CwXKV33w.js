import { g as getAuthConfig } from './auth-BkE-NJ8l.js';
import { p as payHubHealth } from './payhub-M1R-ny1-.js';
import { j as json } from './index.js-hgBuuMJB.js';

//#region src/routes/api/integrations/health/+server.js
async function GET() {
	let authhub = false;
	try {
		authhub = (await getAuthConfig())?.project?.slug === "plasticmarket";
	} catch {}
	const payhub = await payHubHealth();
	return json({
		ok: authhub && payhub,
		authhub,
		payhub
	}, { status: authhub && payhub ? 200 : 503 });
}

export { GET };
//# sourceMappingURL=_server-CwXKV33w.js.map
