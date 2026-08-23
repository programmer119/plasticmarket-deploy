import { g as getAuthConfig } from './auth-DwwJK0YA.js';
import { p as payHubHealth } from './payhub-DRIM1NUL.js';
import { j as json } from './index.js-CVF8L_zO.js';

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
//# sourceMappingURL=_server-C_l__08Q.js.map
