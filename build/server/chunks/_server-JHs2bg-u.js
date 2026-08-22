import { j as json, p as private_env } from './index.js-tnB4PaGk.js';
import { a as all, b as append, u as update, s as save } from './store-BRT0Uand.js';
import 'node:fs';
import 'node:path';

//#region src/routes/api/checkout/+server.js
var unauthorized = () => json({
	ok: false,
	error: "AUTH_REQUIRED"
}, { status: 401 });
async function POST({ request, fetch, locals }) {
	if (!locals.user) return unauthorized();
	const body = await request.json();
	const listing = all("listings").find((x) => x.id === body.listingId && x.status === "ACTIVE");
	if (!listing) return json({
		ok: false,
		error: "LISTING_UNAVAILABLE"
	}, { status: 409 });
	if (listing.sellerId === locals.user.id) return json({
		ok: false,
		error: "OWN_LISTING_CHECKOUT_NOT_ALLOWED"
	}, { status: 409 });
	const address = body.address || {};
	if (!address.name || !address.phone || !address.postalCode || !address.address1 || !address.city || !address.country) return json({
		ok: false,
		error: "SHIPPING_ADDRESS_REQUIRED"
	}, { status: 422 });
	const acceptedOffer = body.offerId ? all("offers").find((x) => x.id === body.offerId && x.buyerId === locals.user.id && x.listingId === listing.id && x.status === "ACCEPTED") : null;
	const itemAmount = acceptedOffer ? acceptedOffer.amount : listing.price;
	const bps = Number(private_env.PLASTICMARKET_FEE_BPS || 0);
	const fee = Number.isFinite(bps) && bps > 0 ? Math.round(itemAmount * bps / 1e4) : 0;
	const amount = itemAmount + listing.shippingCost + fee;
	const hub = private_env.PAYMENT_HUB_INTERNAL_URL || "http://127.0.0.1:18160";
	try {
		const r = await fetch(`${hub}/api/v1/checkout/session`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-payment-hub-key": private_env.PAYMENT_HUB_SHARED_KEY || ""
			},
			body: JSON.stringify({
				product: listing.product,
				listingId: listing.id,
				itemAmount,
				shippingAmount: listing.shippingCost,
				marketplaceFee: fee,
				amount,
				method: body.method,
				buyerId: locals.user.id
			})
		});
		const j = await r.json();
		if (!j.ok) return json(j, { status: r.status });
		const order = append("orders", {
			id: j.orderId,
			transactionId: j.id,
			buyerId: locals.user.id,
			sellerId: listing.sellerId,
			listingId: listing.id,
			product: listing.product,
			itemAmount,
			shippingAmount: listing.shippingCost,
			marketplaceFee: fee,
			amount,
			status: "PAID",
			paymentStatus: j.status,
			method: j.method,
			address,
			createdAt: j.createdAt,
			tracking: null,
			verificationStatus: "NOT_RECEIVED"
		});
		update("listings", listing.id, { status: "SOLD" });
		if (acceptedOffer) {
			update("offers", acceptedOffer.id, {
				status: "PAID",
				orderId: order.id
			});
			const offers = all("offers").map((x) => x.listingId === listing.id && x.id !== acceptedOffer.id && x.status === "OPEN" ? {
				...x,
				status: "CLOSED",
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : x);
			save("offers", offers);
		}
		const collection = all("collection");
		const idx = collection.findIndex((x) => x.userId === locals.user.id && x.product === listing.product);
		const entry = {
			userId: locals.user.id,
			product: listing.product,
			status: "Ordered",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (idx >= 0) collection[idx] = entry;
		else collection.push(entry);
		save("collection", collection);
		return json({
			ok: true,
			...order
		}, { status: 201 });
	} catch {
		return json({
			ok: false,
			error: "PAYMENT_HUB_UNAVAILABLE"
		}, { status: 503 });
	}
}

export { POST };
//# sourceMappingURL=_server-JHs2bg-u.js.map
