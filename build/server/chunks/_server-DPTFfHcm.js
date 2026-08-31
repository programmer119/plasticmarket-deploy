import { g as getAuthConfig } from './auth-BKeTLOXw.js';
import { p as payHubHealth } from './payhub-DtOQ6LGG.js';
import { j as json } from './index.js-71Bxb1Un.js';

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
//# sourceMappingURL=_server-DPTFfHcm.js.map
