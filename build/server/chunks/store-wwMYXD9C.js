import { p as private_env } from './index.js-B1-lYwNB.js';
import fs__default from 'node:fs';
import path from 'node:path';

//#region src/lib/server/store.js
var dir = private_env.PLASTICMARKET_DATA_DIR || path.resolve("data");
fs__default.mkdirSync(dir, { recursive: true });
var file = (name) => path.join(dir, `${name}.json`);
function all(name) {
	try {
		return JSON.parse(fs__default.readFileSync(file(name), "utf8"));
	} catch {
		return [];
	}
}
function save(name, rows) {
	fs__default.writeFileSync(file(name), JSON.stringify(rows, null, 2) + "\n");
	return rows;
}
function append(name, row) {
	const rows = all(name);
	rows.push(row);
	save(name, rows);
	return row;
}
function update(name, id, patch) {
	const rows = all(name);
	const i = rows.findIndex((x) => x.id === id);
	if (i < 0) return null;
	rows[i] = {
		...rows[i],
		...patch,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	save(name, rows);
	return rows[i];
}

export { all as a, append as b, save as s, update as u };
//# sourceMappingURL=store-wwMYXD9C.js.map
