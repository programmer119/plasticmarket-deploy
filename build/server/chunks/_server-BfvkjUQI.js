import { a as all, u as update, b as append } from './store-D9XU4X3s.js';
import { j as json } from './index.js-CqljWct6.js';
import 'node:fs';
import 'node:path';

//#region src/routes/api/offers/+server.js
var unauthorized = () => json({
	ok: false,
	error: "AUTH_REQUIRED"
}, { status: 401 });
async function POST({ request, locals }) {
	if (!locals.user) return unauthorized();
	const b = await request.json();
	const listing = all("listings").find((x) => x.id === b.listingId && x.product === b.product && x.status === "ACTIVE");
	if (!listing || listing.sellerId === locals.user.id || !Number.isFinite(Number(b.amount)) || Number(b.amount) <= 0) return json({
		ok: false,
		error: "INVALID_OFFER"
	}, { status: 422 });
	const row = {
		id: `OFF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: "OPEN",
		buyerId: locals.user.id,
		sellerId: listing.sellerId,
		product: b.product,
		listingId: b.listingId,
		amount: Number(b.amount)
	};
	append("offers", row);
	return json({
		ok: true,
		offer: row
	}, { status: 201 });
}
async function PATCH({ request, locals }) {
	if (!locals.user) return unauthorized();
	const b = await request.json();
	if (!b.id || !["ACCEPTED", "DECLINED"].includes(b.status)) return json({
		ok: false,
		error: "INVALID_OFFER_UPDATE"
	}, { status: 422 });
	if (!all("offers").find((x) => x.id === b.id && x.sellerId === locals.user.id && x.status === "OPEN")) return json({
		ok: false,
		error: "NOT_FOUND"
	}, { status: 404 });
	const row = update("offers", b.id, {
		status: b.status,
		decidedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return json({
		ok: true,
		offer: row
	});
}

export { PATCH, POST };
//# sourceMappingURL=_server-BfvkjUQI.js.map
