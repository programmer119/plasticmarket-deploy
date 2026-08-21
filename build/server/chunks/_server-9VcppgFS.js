import { a as all, s as save } from './store-D2oqQVra.js';
import { j as json } from './index.js-DDNhq7BZ.js';
import 'node:fs';
import 'node:path';

//#region src/routes/api/collection/+server.js
var unauthorized = () => json({
	ok: false,
	error: "AUTH_REQUIRED"
}, { status: 401 });
function GET({ locals }) {
	if (!locals.user) return unauthorized();
	return json({
		ok: true,
		items: all("collection").filter((x) => x.userId === locals.user.id)
	});
}
async function POST({ request, locals }) {
	if (!locals.user) return unauthorized();
	const b = await request.json();
	if (!b.product || ![
		"Wished",
		"Ordered",
		"Owned",
		"Built"
	].includes(b.status)) return json({
		ok: false,
		error: "INVALID_COLLECTION_STATE"
	}, { status: 422 });
	const rows = all("collection");
	const i = rows.findIndex((x) => x.userId === locals.user.id && x.product === b.product);
	const row = {
		userId: locals.user.id,
		product: b.product,
		status: b.status,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (i >= 0) rows[i] = row;
	else rows.push(row);
	save("collection", rows);
	return json({
		ok: true,
		item: row
	});
}
async function DELETE({ request, locals }) {
	if (!locals.user) return unauthorized();
	const b = await request.json();
	if (!b.product) return json({
		ok: false,
		error: "PRODUCT_REQUIRED"
	}, { status: 422 });
	const rows = all("collection");
	save("collection", rows.filter((x) => !(x.userId === locals.user.id && x.product === b.product)));
	return json({ ok: true });
}

export { DELETE, GET, POST };
//# sourceMappingURL=_server-9VcppgFS.js.map
