import { a as all, u as update } from './store-DPtovBfF.js';
import { g as getPayHubSession } from './payhub-BnGEhmft.js';
import { f as finalizePaidOrder } from './orders-BlzGCAlI.js';
import { r as redirect } from './index.js-BCHlikQJ.js';
import 'node:fs';
import 'node:path';

//#region src/routes/payment-result/+page.server.js
async function load({ url, locals }) {
	if (!locals.user) throw redirect(303, `/account?next=${encodeURIComponent(url.pathname + url.search)}`);
	const orderId = url.searchParams.get("order") || "";
	const sessionId = url.searchParams.get("payment_session_id") || "";
	const returnStatus = url.searchParams.get("payment_status") || "";
	const order = all("orders").find((x) => x.id === orderId && x.buyerId === locals.user.id);
	if (!order) return {
		ok: false,
		status: "not_found",
		order: null
	};
	let latest = order;
	let verified = false;
	let error = "";
	if (sessionId && order.paymentSessionId === sessionId) try {
		const session = await getPayHubSession(sessionId);
		verified = true;
		if (session.order_id !== order.id) error = "PAYHUB_ORDER_MISMATCH";
		else if (session.status === "PAID") {
			const result = finalizePaidOrder(order.id, session);
			if (result.ok) latest = result.order;
			else error = result.error || "PAYMENT_FINALIZE_FAILED";
		} else if (["FAILED", "CANCELLED"].includes(session.status)) latest = update("orders", order.id, {
			status: "PAYMENT_FAILED",
			paymentStatus: session.status,
			failureCode: session.failure_code || "",
			failureMessage: session.failure_message || "",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}) || order;
		else if (session.expires_at && Date.parse(session.expires_at) < Date.now()) latest = update("orders", order.id, {
			status: "PAYMENT_EXPIRED",
			paymentStatus: "EXPIRED",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}) || order;
		else latest = all("orders").find((x) => x.id === order.id) || order;
	} catch (e) {
		error = e.message || "PAYHUB_VERIFY_FAILED";
	}
	return {
		ok: latest.status === "PAID",
		status: latest.status,
		returnStatus,
		verified,
		error,
		order: latest
	};
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B7Y5Oyoe.js')).default;
const server_id = "src/routes/payment-result/+page.server.js";
const imports = ["_app/immutable/nodes/10.7Sj-1bfG.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-USLUHX91.js.map
