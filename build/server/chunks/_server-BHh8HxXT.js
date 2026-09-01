import { g as getAuthConfig } from './auth-CBt2jbWu.js';
import { p as payHubHealth } from './payhub-bcDyckZw.js';
import { j as json } from './index.js-mXd3WV7Q.js';

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
//# sourceMappingURL=_server-BHh8HxXT.js.map
