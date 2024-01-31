

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.KlIWZySv.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.BeKAEDB6.js"];
export const stylesheets = ["_app/immutable/assets/2.T7zFTtlN.css"];
export const fonts = [];
