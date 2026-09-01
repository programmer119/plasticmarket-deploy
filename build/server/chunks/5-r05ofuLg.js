import { e as exchangeAuthCode, s as storeAuthSession } from './auth-DN_Yv0MT.js';
import { r as redirect } from './index.js-BXRNCAzq.js';

//#region src/routes/auth/callback/+page.server.js
async function load({ url, cookies }) {
	const state = url.searchParams.get("state") || "/";
	const next = state.startsWith("/") && !state.startsWith("//") ? state : "/";
	const err = url.searchParams.get("error");
	if (err) throw redirect(303, `/account?error=${encodeURIComponent(err)}`);
	if (url.searchParams.get("status") === "pending_approval") throw redirect(303, "/account?error=PENDING_APPROVAL");
	const code = url.searchParams.get("code");
	if (!code) throw redirect(303, "/account?error=AUTH_CALLBACK_INVALID");
	try {
		const session = await exchangeAuthCode(code);
		if (session.pendingApproval) throw redirect(303, "/account?error=PENDING_APPROVAL");
		storeAuthSession(cookies, session);
		throw redirect(303, next);
	} catch (e) {
		if (e?.status === 303) throw e;
		throw redirect(303, `/account?error=${encodeURIComponent(e.message || "AUTH_CALLBACK_FAILED")}`);
	}
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 5;
const server_id = "src/routes/auth/callback/+page.server.js";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-r05ofuLg.js.map
