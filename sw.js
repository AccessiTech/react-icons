if(!self.define){let e,c={};const s=(s,n)=>(s=new URL(s+".js",n).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let t={};const r=e=>s(e,i),o={module:{uri:i},exports:t,require:r};c[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1051b61c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/react-icons/_next/static/chunks/041197eb.9593fad7651f9268.js",revision:"9593fad7651f9268"},{url:"/react-icons/_next/static/chunks/0a8e0427.366bec7e8b7f16e8.js",revision:"366bec7e8b7f16e8"},{url:"/react-icons/_next/static/chunks/15f1e6d6.083099618fc8b406.js",revision:"083099618fc8b406"},{url:"/react-icons/_next/static/chunks/350250a6.29a7a70ddb3e2829.js",revision:"29a7a70ddb3e2829"},{url:"/react-icons/_next/static/chunks/352.0da64a20c38030c7.js",revision:"0da64a20c38030c7"},{url:"/react-icons/_next/static/chunks/374.1dee20a893612543.js",revision:"1dee20a893612543"},{url:"/react-icons/_next/static/chunks/3a20fc1c.ea1d0e6c586726ae.js",revision:"ea1d0e6c586726ae"},{url:"/react-icons/_next/static/chunks/3bc13814.385232b7eeeb099e.js",revision:"385232b7eeeb099e"},{url:"/react-icons/_next/static/chunks/3c075ca3.112deda4edd82110.js",revision:"112deda4edd82110"},{url:"/react-icons/_next/static/chunks/3db73050.fe1f266f3f314f2d.js",revision:"fe1f266f3f314f2d"},{url:"/react-icons/_next/static/chunks/432.9e205d337eb614fc.js",revision:"9e205d337eb614fc"},{url:"/react-icons/_next/static/chunks/4d8f07f4.810ce6e6f1b851a7.js",revision:"810ce6e6f1b851a7"},{url:"/react-icons/_next/static/chunks/622-e17b12b6e30c3e09.js",revision:"e17b12b6e30c3e09"},{url:"/react-icons/_next/static/chunks/62afa204.a0326128c3d1d6ae.js",revision:"a0326128c3d1d6ae"},{url:"/react-icons/_next/static/chunks/6929b892.f44d42d7a7838874.js",revision:"f44d42d7a7838874"},{url:"/react-icons/_next/static/chunks/6f1eb906.7cff7f2129f667d2.js",revision:"7cff7f2129f667d2"},{url:"/react-icons/_next/static/chunks/736-8c5101b973a5c040.js",revision:"8c5101b973a5c040"},{url:"/react-icons/_next/static/chunks/87ef1f5b.504baaad4a6b6e84.js",revision:"504baaad4a6b6e84"},{url:"/react-icons/_next/static/chunks/9a344fc1.7a8677de3fcaa91d.js",revision:"7a8677de3fcaa91d"},{url:"/react-icons/_next/static/chunks/9cf5ff75.bcba57d780770efa.js",revision:"bcba57d780770efa"},{url:"/react-icons/_next/static/chunks/9d81daf1.5d70962cc2290d4d.js",revision:"5d70962cc2290d4d"},{url:"/react-icons/_next/static/chunks/b97831a5.b5a63c66505b48b1.js",revision:"b5a63c66505b48b1"},{url:"/react-icons/_next/static/chunks/bc3f698b.2ab6fe2e73043920.js",revision:"2ab6fe2e73043920"},{url:"/react-icons/_next/static/chunks/c429de7c.2de7dd196298b96c.js",revision:"2de7dd196298b96c"},{url:"/react-icons/_next/static/chunks/cebb23ab.7113a5d8a690c3a1.js",revision:"7113a5d8a690c3a1"},{url:"/react-icons/_next/static/chunks/d6b5c510.7f5b1bf25061c451.js",revision:"7f5b1bf25061c451"},{url:"/react-icons/_next/static/chunks/e0b6b55b.0749f7ce05850be0.js",revision:"0749f7ce05850be0"},{url:"/react-icons/_next/static/chunks/eaba8ab7.76ff051262386c70.js",revision:"76ff051262386c70"},{url:"/react-icons/_next/static/chunks/f36f1a7f-8939a2a38931dcb6.js",revision:"8939a2a38931dcb6"},{url:"/react-icons/_next/static/chunks/f4a4602e.7cb23c118d492742.js",revision:"7cb23c118d492742"},{url:"/react-icons/_next/static/chunks/fb28e7be.d7911d8baeea7a6d.js",revision:"d7911d8baeea7a6d"},{url:"/react-icons/_next/static/chunks/ffae7f7c.0e4ee8ec0de5935b.js",revision:"0e4ee8ec0de5935b"},{url:"/react-icons/_next/static/chunks/framework-a42f82fbe29cccf0.js",revision:"a42f82fbe29cccf0"},{url:"/react-icons/_next/static/chunks/main-7b00f1fa5d0404cc.js",revision:"7b00f1fa5d0404cc"},{url:"/react-icons/_next/static/chunks/pages/_app-df46ad2cafd067c7.js",revision:"df46ad2cafd067c7"},{url:"/react-icons/_next/static/chunks/pages/_error-ab557634fd13a70c.js",revision:"ab557634fd13a70c"},{url:"/react-icons/_next/static/chunks/pages/icons-7c7ea32a9f001786.js",revision:"7c7ea32a9f001786"},{url:"/react-icons/_next/static/chunks/pages/index-b58488abe942a5b7.js",revision:"b58488abe942a5b7"},{url:"/react-icons/_next/static/chunks/pages/search-3042ed30f8d39a7f.js",revision:"3042ed30f8d39a7f"},{url:"/react-icons/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/react-icons/_next/static/chunks/webpack-a99e7090f7ca2f60.js",revision:"a99e7090f7ca2f60"},{url:"/react-icons/_next/static/css/8fe3b24f104ae858.css",revision:"8fe3b24f104ae858"},{url:"/react-icons/_next/static/lJ96S-__UAQnZShxaYqy5/_buildManifest.js",revision:"7669326db59547c3c55a73f0d095d286"},{url:"/react-icons/_next/static/lJ96S-__UAQnZShxaYqy5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/react-icons/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/react-icons/favicon.ico",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/react-icons/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/react-icons/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/react-icons/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/react-icons/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/react-icons/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/react-icons/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/react-icons/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/react-icons/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/react-icons/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/react-icons/manifest.json",revision:"ba509179176b7bb8f8404b1f46332cc7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/react-icons",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:n})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
