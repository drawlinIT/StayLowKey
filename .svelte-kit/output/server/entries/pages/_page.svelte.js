import { c as create_ssr_component, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: ".social-icons.svelte-4r4khj{display:flex;justify-content:center;gap:20px}.icon.svelte-4r4khj{width:40px;height:40px;cursor:pointer;margin-bottom:-70px}",
  map: null
};
const SocialMediaIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/staylowkey.us",
      icon: "/images/Instagram_icon.png"
    }
  ];
  $$result.css.add(css$1);
  return `<div class="social-icons svelte-4r4khj">${each(socialMediaLinks, (link) => {
    return `<a${add_attribute("href", link.url, 0)} target="_blank"><img class="icon svelte-4r4khj"${add_attribute("src", link.icon, 0)}${add_attribute("alt", link.name, 0)}> </a>`;
  })}</div>`;
});
const css = {
  code: "@font-face{font-family:'SLK_Font';src:url('/fonts/OldEnglishFive.ttf') format('truetype'),\r\n\r\n}html, body{margin:0;padding:0;height:100%;overflow-x:hidden;width:100vw;background-color:black}body{background-image:url('/images/slk_background_2.png');background-size:contain;background-repeat:no-repeat;background-position:center center;border-color:black}.content.svelte-3sqfuc{display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center}h1.svelte-3sqfuc{font-family:'SLK_Font';margin-top:10px;text-shadow:4px 4px 7px rgba(0, 0, 0, 0.5);color:#D3D3D3;font-size:4rem}.footer.svelte-3sqfuc{position:absolute;bottom:0;width:100%;text-align:center;text-shadow:6px 6px 10px rgba(0, 0, 0, 0.5);color:#D3D3D3;font-size:2.5rem}.instagram-icon.svelte-3sqfuc{margin-bottom:20px}",
  map: null
};
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-3sqfuc"><h1 class="svelte-3sqfuc" data-svelte-h="svelte-bh8pi4">Coming Soon</h1> <div class="footer svelte-3sqfuc">${validate_component(SocialMediaIcons, "SocialMediaIcons").$$render($$result, {}, {}, {})} <div class="instagram-icon svelte-3sqfuc" data-svelte-h="svelte-14eugai"></div> <h2 data-svelte-h="svelte-y5pw35">Tap Here To Follow Us</h2></div></div>`;
});
export {
  Page as default,
  prerender
};
