import { g as getAuthConfig } from './auth-DN_Yv0MT.js';
import { p as payHubHealth } from './payhub-OL8RloEC.js';
import { j as json } from './index.js-BXRNCAzq.js';

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
//# sourceMappingURL=_server-CtatPuNH.js.map
