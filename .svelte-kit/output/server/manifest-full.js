export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/blowbrush.otf","fonts/degrassi.otf","fonts/OldEnglishFive.ttf","images/Instagram_icon.png","images/PhotoRoom_20240121_230338.PNG","images/PhotoRoom_20240121_231757.PNG","images/slk_background.png","images/slk_background_2.png","images/slk_black_.PNG","images/SLK_Logo.png"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".PNG":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.jevzEHlh.js","app":"_app/immutable/entry/app.nwJBXST_.js","imports":["_app/immutable/entry/start.jevzEHlh.js","_app/immutable/chunks/entry.pUinnEdZ.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/entry/app.nwJBXST_.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.BeKAEDB6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
