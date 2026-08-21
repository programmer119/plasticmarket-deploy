import { a as all, s as save } from './store-D2oqQVra.js';
import crypto from 'node:crypto';

//#region src/lib/server/auth.js
var SESSION_COOKIE = "plasticmarket_session";
var MAX_AGE = 2592e3;
var now = () => (/* @__PURE__ */ new Date()).toISOString();
var normalizeEmail = (v) => String(v || "").trim().toLowerCase();
var hashPassword = (password, salt = crypto.randomBytes(16).toString("hex")) => {
	return `${salt}:${crypto.scryptSync(String(password), salt, 64).toString("hex")}`;
};
var verifyPassword = (password, stored) => {
	const [salt, expected] = String(stored || "").split(":");
	if (!salt || !expected) return false;
	const actual = crypto.scryptSync(String(password), salt, 64);
	const expectedBuffer = Buffer.from(expected, "hex");
	return expectedBuffer.length === actual.length && crypto.timingSafeEqual(expectedBuffer, actual);
};
function publicUser(user) {
	return user ? {
		id: user.id,
		email: user.email,
		displayName: user.displayName,
		createdAt: user.createdAt
	} : null;
}
function createUser({ email, password, displayName }) {
	email = normalizeEmail(email);
	displayName = String(displayName || "").trim();
	if (!/^\S+@\S+\.\S+$/.test(email) || String(password || "").length < 8 || displayName.length < 2) return { error: "INVALID_ACCOUNT_FIELDS" };
	const users = all("users");
	if (users.some((x) => x.email === email)) return { error: "EMAIL_ALREADY_REGISTERED" };
	const user = {
		id: `USR-${crypto.randomUUID()}`,
		email,
		displayName,
		passwordHash: hashPassword(password),
		createdAt: now(),
		status: "ACTIVE"
	};
	users.push(user);
	save("users", users);
	return { user };
}
function authenticate(email, password) {
	email = normalizeEmail(email);
	const user = all("users").find((x) => x.email === email && x.status === "ACTIVE");
	return user && verifyPassword(password, user.passwordHash) ? user : null;
}
function issueSession(cookies, user) {
	const token = crypto.randomBytes(32).toString("hex");
	const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
	const sessions = all("sessions").filter((x) => new Date(x.expiresAt) > /* @__PURE__ */ new Date());
	sessions.push({
		id: `SES-${crypto.randomUUID()}`,
		userId: user.id,
		tokenHash,
		createdAt: now(),
		expiresAt: new Date(Date.now() + MAX_AGE * 1e3).toISOString()
	});
	save("sessions", sessions);
	cookies.set(SESSION_COOKIE, token, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: MAX_AGE
	});
}
function clearSession(cookies) {
	const token = cookies.get(SESSION_COOKIE);
	if (token) {
		const hash = crypto.createHash("sha256").update(token).digest("hex");
		save("sessions", all("sessions").filter((x) => x.tokenHash !== hash));
	}
	cookies.delete(SESSION_COOKIE, { path: "/" });
}
function getSessionUser(cookies) {
	const token = cookies.get(SESSION_COOKIE);
	if (!token) return null;
	const hash = crypto.createHash("sha256").update(token).digest("hex");
	const session = all("sessions").find((x) => x.tokenHash === hash && new Date(x.expiresAt) > /* @__PURE__ */ new Date());
	if (!session) return null;
	return all("users").find((x) => x.id === session.userId && x.status === "ACTIVE") || null;
}

export { authenticate as a, createUser as b, clearSession as c, getSessionUser as g, issueSession as i, publicUser as p };
//# sourceMappingURL=auth-m3nDgmj8.js.map
