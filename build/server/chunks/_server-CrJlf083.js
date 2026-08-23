import { a as payHubWebhookSecret } from './payhub-64IsJMGn.js';
import { f as finalizePaidOrder } from './orders-DZm9k35D.js';
import crypto from 'node:crypto';
import './index.js-eXhKP-qF.js';
import './store-9iL4-fr_.js';
import 'node:fs';
import 'node:path';

//#region src/routes/api/payhub/webhook/+server.js
function equal(a, b) {
	const aa = Buffer.from(a), bb = Buffer.from(b);
	return aa.length === bb.length && crypto.timingSafeEqual(aa, bb);
}
async function POST({ request }) {
	const raw = await request.text();
	const secret = payHubWebhookSecret();
	if (!secret) return new Response(null, { status: 503 });
	if (!equal("sha256=" + crypto.createHmac("sha256", secret).update(raw).digest("hex"), request.headers.get("x-payhub-signature") || "")) return new Response(null, { status: 401 });
	let event;
	try {
		event = JSON.parse(raw);
	} catch {
		return new Response(null, { status: 400 });
	}
	if (event?.type === "payment.succeeded") {
		const payment = event.payment || {};
		if (!payment.order_id) return new Response(null, { status: 422 });
		const result = finalizePaidOrder(payment.order_id, payment);
		if (!result.ok && result.error !== "ORDER_NOT_PAYABLE") return new Response(null, { status: 409 });
	}
	return new Response(null, { status: 204 });
}

export { POST };
//# sourceMappingURL=_server-CrJlf083.js.map
