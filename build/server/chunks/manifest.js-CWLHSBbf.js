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
		client: {start:"_app/immutable/entry/start.BEh-1Z15.js",app:"_app/immutable/entry/app.BRHigBa5.js",imports:["_app/immutable/entry/start.BEh-1Z15.js","_app/immutable/chunks/Q1n5feKw.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/entry/app.BRHigBa5.js","_app/immutable/chunks/RNp8Ex9K.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./0-CfuSyTjn.js')),
			__memo(() => import('./1-DjW0CqrL.js')),
			__memo(() => import('./2-DJx4LsaW.js')),
			__memo(() => import('./3-DndD3w-I.js')),
			__memo(() => import('./4-DF-yqgc9.js')),
			__memo(() => import('./5-BzVHx9mH.js')),
			__memo(() => import('./6-BQUT79Xy.js')),
			__memo(() => import('./7-Buq3oGZM.js')),
			__memo(() => import('./8-Dvsg-ckl.js')),
			__memo(() => import('./9-DSLY8R9Q.js')),
			__memo(() => import('./10-CyAhlEaY.js')),
			__memo(() => import('./11-D-nWnXMb.js')),
			__memo(() => import('./12-Dj0emhuC.js')),
			__memo(() => import('./13-Bz3SxPWx.js'))
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
				endpoint: __memo(() => import('./_server-D_2iuHnZ.js'))
			},
			{
				id: "/api/admin/logout",
				pattern: /^\/api\/admin\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CQxu1ekS.js'))
			},
			{
				id: "/api/admin/orders",
				pattern: /^\/api\/admin\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-FHBOdBod.js'))
			},
			{
				id: "/api/admin/products",
				pattern: /^\/api\/admin\/products\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-lYWiygQE.js'))
			},
			{
				id: "/api/auth/config",
				pattern: /^\/api\/auth\/config\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CbjyjKOz.js'))
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-D4n1Bx4X.js'))
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-Dl-b66O5.js'))
			},
			{
				id: "/api/auth/oauth/[provider]",
				pattern: /^\/api\/auth\/oauth\/([^/]+?)\/?$/,
				params: [{"name":"provider","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./_server-DLJqFv-m.js'))
			},
			{
				id: "/api/auth/session",
				pattern: /^\/api\/auth\/session\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-D84kbHo_.js'))
			},
			{
				id: "/api/auth/signup",
				pattern: /^\/api\/auth\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DDoyL1Y8.js'))
			},
			{
				id: "/api/checkout",
				pattern: /^\/api\/checkout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DdRpSBZL.js'))
			},
			{
				id: "/api/collection",
				pattern: /^\/api\/collection\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DxrFawQb.js'))
			},
			{
				id: "/api/integrations/health",
				pattern: /^\/api\/integrations\/health\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-C_l__08Q.js'))
			},
			{
				id: "/api/listings",
				pattern: /^\/api\/listings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-CABNu9ce.js'))
			},
			{
				id: "/api/offers",
				pattern: /^\/api\/offers\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-DW449cnP.js'))
			},
			{
				id: "/api/orders",
				pattern: /^\/api\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-JVRGOiSN.js'))
			},
			{
				id: "/api/payhub/webhook",
				pattern: /^\/api\/payhub\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-Cl7BcNpu.js'))
			},
			{
				id: "/api/product-requests",
				pattern: /^\/api\/product-requests\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./_server-sP_aQhEb.js'))
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
//# sourceMappingURL=manifest.js-CWLHSBbf.js.map
