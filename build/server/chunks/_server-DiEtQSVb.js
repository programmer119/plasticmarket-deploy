import { g as getAuthConfig } from './auth-C7WpxVoZ.js';
import { p as payHubHealth } from './payhub-D_E9RRDI.js';
import { j as json } from './index.js-Ba45yAmC.js';

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
//# sourceMappingURL=_server-DiEtQSVb.js.map
