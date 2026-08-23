import { g as getAuthConfig } from './auth-CSs7Ym0g.js';
import { p as payHubHealth } from './payhub-Z4rWsvg_.js';
import { j as json } from './index.js-DIZZAeri.js';

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
//# sourceMappingURL=_server-tS7gXOkR.js.map
