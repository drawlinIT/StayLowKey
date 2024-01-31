

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.48uICibx.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.BeKAEDB6.js","_app/immutable/chunks/entry.pUinnEdZ.js"];
export const stylesheets = [];
export const fonts = [];
