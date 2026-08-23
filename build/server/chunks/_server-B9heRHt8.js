import { g as getAuthConfig } from './auth-OjXjnVhZ.js';
import { p as payHubHealth } from './payhub-64IsJMGn.js';
import { j as json } from './index.js-eXhKP-qF.js';

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
//# sourceMappingURL=_server-B9heRHt8.js.map
