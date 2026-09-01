import { g as getAuthConfig, b as authOAuthStartURL } from './auth-DN_Yv0MT.js';
import { e as error, r as redirect } from './index.js-BXRNCAzq.js';

//#region src/routes/api/auth/oauth/[provider]/+server.js
async function GET({ params, url }) {
	const provider = String(params.provider || "").toLowerCase();
	const cfg = await getAuthConfig();
	if (!Array.isArray(cfg.providers) || !cfg.providers.includes(provider)) throw error(404, "Provider not enabled");
	const next = url.searchParams.get("next") || "/";
	const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";
	const callback = `${url.origin}/auth/callback`;
	throw redirect(303, authOAuthStartURL(provider, callback, safeNext));
}

export { GET };
//# sourceMappingURL=_server-CsF304BV.js.map
