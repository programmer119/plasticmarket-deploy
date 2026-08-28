import { g as getAuthConfig } from './auth-D_R98Ddw.js';
import { p as payHubHealth } from './payhub-I-Dg1B9v.js';
import { j as json } from './index.js-C5k5eBez.js';

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
//# sourceMappingURL=_server-Dr23Wdzz.js.map
