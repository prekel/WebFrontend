if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,r,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"5a116bfb9aeacf4784c1e29f4ef6c0ea"},{url:"/static/css/2.276d9f80.chunk.css",revision:"0815c4de36e1ba56711967ac339d8dcd"},{url:"/static/css/main.c5fa6883.chunk.css",revision:"db5533524567e025e9c6d046d711110e"},{url:"/static/js/2.49013726.chunk.js",revision:"5e5b143ef76270aabbf4b19c6406c3cd"},{url:"/static/js/2.49013726.chunk.js.LICENSE.txt",revision:"a8eb76e4c6beb72c22bcc9f3c026930b"},{url:"/static/js/main.fb58fb03.chunk.js",revision:"9e4a1cf4b96a855cd57c516f202737c8"},{url:"/static/js/runtime-main.03ade4e2.js",revision:"3d33ce8fab3a67c8347c9107dda2848f"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map