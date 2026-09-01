const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.k0AzqqkO.js",app:"_app/immutable/entry/app.wP0KML6Y.js",imports:["_app/immutable/entry/start.k0AzqqkO.js","_app/immutable/chunks/BYkAYKYj.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/entry/app.wP0KML6Y.js","_app/immutable/chunks/m_Cbe4wW.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./0-BB_KDGdr.js')),
			__memo(() => import('./1-CKXXhDVt.js')),
			__memo(() => import('./2-DtBEH202.js')),
			__memo(() => import('./3-D7hRrKva.js')),
			__memo(() => import('./4-BG-8P_q0.js')),
			__memo(() => import('./5-DvKGWvt1.js')),
			__memo(() => import('./6-CL0bI0sb.js')),
			__memo(() => import('./7-L5V2Lz6f.js')),
			__memo(() => import('./8-CFPz_zD3.js')),
			__memo(() => import('./9-D-oyuGju.js')),
			__memo(() => import('./10-B-QRnjzA.js')),
			__memo(() => import('./11-B-HU9NHS.js')),
			__memo(() => import('./12-DPjMa68A.js')),
			__memo(() => import('./13-D3g3pj_V.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/admin/login",
				pattern: /^\/api\/admin\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B2vRc4w6.js'))
			},
			{
				id: "/api/admin/logout",
				pattern: /^\/api\/admin\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BwrF7hE1.js'))
			},
			{
				id: "/api/admin/orders",
				pattern: /^\/api\/admin\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B7Pn2KUm.js'))
			},
			{
				id: "/api/admin/products",
				pattern: /^\/api\/admin\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BnLBLqKJ.js'))
			},
			{
				id: "/api/auth/config",
				pattern: /^\/api\/auth\/config\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B7RJi1DP.js'))
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DwRndmgg.js'))
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B7xxW7Tt.js'))
			},
			{
				id: "/api/auth/oauth/[provider]",
				pattern: /^\/api\/auth\/oauth\/([^/]+?)\/?$/,
				params: [{"name":"provider","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./_server-B91tLacz.js'))
			},
			{
				id: "/api/auth/session",
				pattern: /^\/api\/auth\/session\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-_2wnw9_a.js'))
			},
			{
				id: "/api/auth/signup",
				pattern: /^\/api\/auth\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-LR3rM-8B.js'))
			},
			{
				id: "/api/checkout",
				pattern: /^\/api\/checkout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-SULW3U0u.js'))
			},
			{
				id: "/api/collection",
				pattern: /^\/api\/collection\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BQlaL_Wv.js'))
			},
			{
				id: "/api/integrations/health",
				pattern: /^\/api\/integrations\/health\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DiEtQSVb.js'))
			},
			{
				id: "/api/listings",
				pattern: /^\/api\/listings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BAXb3G3m.js'))
			},
			{
				id: "/api/offers",
				pattern: /^\/api\/offers\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-5USgb9Bk.js'))
			},
			{
				id: "/api/orders",
				pattern: /^\/api\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-D-x6_ZhZ.js'))
			},
			{
				id: "/api/payhub/webhook",
				pattern: /^\/api\/payhub\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CwICE2qW.js'))
			},
			{
				id: "/api/product-requests",
				pattern: /^\/api\/product-requests\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CDdEpQFQ.js'))
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/browse",
				pattern: /^\/browse\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/collection",
				pattern: /^\/collection\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/guide",
				pattern: /^\/guide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/payment-result",
				pattern: /^\/payment-result\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/product/[slug]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/seller",
				pattern: /^\/seller\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/sell",
				pattern: /^\/sell\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export { manifest as m };
//# sourceMappingURL=manifest.js-D8qdvZIZ.js.map
