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
		client: {start:"_app/immutable/entry/start.CmUGtR9k.js",app:"_app/immutable/entry/app.BirtUd-h.js",imports:["_app/immutable/entry/start.CmUGtR9k.js","_app/immutable/chunks/Cq0TaVbO.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/entry/app.BirtUd-h.js","_app/immutable/chunks/Cs7Tl61O.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./0-C8sjQ_6d.js')),
			__memo(() => import('./1-D03Yva7H.js')),
			__memo(() => import('./2-AshBOdRL.js')),
			__memo(() => import('./3-NyzA0Yxu.js')),
			__memo(() => import('./4-B6k0LjBc.js')),
			__memo(() => import('./5-DC4x7QUm.js')),
			__memo(() => import('./6-Ai2LlVBV.js')),
			__memo(() => import('./7-DKXpcAiv.js')),
			__memo(() => import('./8-Cg_7b1Nc.js')),
			__memo(() => import('./9-B19hFknl.js')),
			__memo(() => import('./10-USLUHX91.js')),
			__memo(() => import('./11-DPCpgl21.js')),
			__memo(() => import('./12-41Pazl4d.js')),
			__memo(() => import('./13-CH6KU41T.js'))
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
				endpoint: __memo(() => import('./_server-9NaFqxVo.js'))
			},
			{
				id: "/api/admin/logout",
				pattern: /^\/api\/admin\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-9rhf7Q7K.js'))
			},
			{
				id: "/api/admin/orders",
				pattern: /^\/api\/admin\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CoEjD8Ny.js'))
			},
			{
				id: "/api/admin/products",
				pattern: /^\/api\/admin\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B3VAUixg.js'))
			},
			{
				id: "/api/auth/config",
				pattern: /^\/api\/auth\/config\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-3gOrO5ih.js'))
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-1gkJCVq2.js'))
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BwRzW6Cl.js'))
			},
			{
				id: "/api/auth/oauth/[provider]",
				pattern: /^\/api\/auth\/oauth\/([^/]+?)\/?$/,
				params: [{"name":"provider","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./_server-BdZDfkWC.js'))
			},
			{
				id: "/api/auth/session",
				pattern: /^\/api\/auth\/session\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CvO4yPUU.js'))
			},
			{
				id: "/api/auth/signup",
				pattern: /^\/api\/auth\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-LM1-4v9h.js'))
			},
			{
				id: "/api/checkout",
				pattern: /^\/api\/checkout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BuN_YhRp.js'))
			},
			{
				id: "/api/collection",
				pattern: /^\/api\/collection\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-BirDGNZ_.js'))
			},
			{
				id: "/api/integrations/health",
				pattern: /^\/api\/integrations\/health\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-C2M9HreW.js'))
			},
			{
				id: "/api/listings",
				pattern: /^\/api\/listings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DgLTiZyg.js'))
			},
			{
				id: "/api/offers",
				pattern: /^\/api\/offers\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-C6MvZJm3.js'))
			},
			{
				id: "/api/orders",
				pattern: /^\/api\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-B1rfMqlY.js'))
			},
			{
				id: "/api/payhub/webhook",
				pattern: /^\/api\/payhub\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-hFk-kxrO.js'))
			},
			{
				id: "/api/product-requests",
				pattern: /^\/api\/product-requests\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DL4LkUaB.js'))
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
//# sourceMappingURL=manifest.js-6QzIknaK.js.map
