"use strict";var precacheConfig=[["/wf-updates/index.html","3cca557bef5349bf056b1fe21c87615d"],["/wf-updates/static/css/main.b7f7d6fc.css","1052c577986edef7b6673a2a4c061d9a"],["/wf-updates/static/js/main.78c782b7.js","ebce4508c1b6f7aa33730d5dcd0dd82b"],["/wf-updates/static/media/Axi.1c110551.svg","1c1105517240bd90f0ccbe45d08fee13"],["/wf-updates/static/media/Corpus.5d4d9639.svg","5d4d96391eeeeb4548a72b730846b41b"],["/wf-updates/static/media/Grineer.f232edb7.svg","f232edb70859e2cc82cc162824333967"],["/wf-updates/static/media/Infested.78e6ba7c.svg","78e6ba7ccc3e30b6b3795726b7963741"],["/wf-updates/static/media/Lith.e5a58e23.svg","e5a58e233e73acacfc4acadaf45c4b0f"],["/wf-updates/static/media/Meso.cbfd0b1e.svg","cbfd0b1e82d37f7fe9669b28ed20f11b"],["/wf-updates/static/media/Neo.db66060f.svg","db66060f00fbd07e3f8604602b24c6c4"],["/wf-updates/static/media/Orokin.3ff42d99.svg","3ff42d99b80c3ee803312d550a67df42"],["/wf-updates/static/media/alerts.75e2e402.svg","75e2e4020238b7239605a97ee232709c"],["/wf-updates/static/media/baro.bbcf5cea.svg","bbcf5cea5db7003fe9e592783e5446f9"],["/wf-updates/static/media/baro.f06bb0e2.png","f06bb0e2d61d08931ae958cae3feeff3"],["/wf-updates/static/media/cetus.b698489c.svg","b698489c79049c218948c9b37b91fa54"],["/wf-updates/static/media/darvo.01c74b70.svg","01c74b703474a445d5674c56d6a57b48"],["/wf-updates/static/media/day.7d95f690.svg","7d95f6905499370feb8de204e5aef512"],["/wf-updates/static/media/fissure.dde6a546.svg","dde6a54612e167e6f4a973b59f3b9b9e"],["/wf-updates/static/media/invasions.686191f6.svg","686191f60bb987a628a79472fa2fd29c"],["/wf-updates/static/media/mobile-bg.b2ddea36.jpg","b2ddea3667030f073c37e3d6ebdb6d05"],["/wf-updates/static/media/night.351c7d06.svg","351c7d061b7557bfe266ea469181eb44"],["/wf-updates/static/media/platinum.884aa1f8.png","884aa1f89f92cb4240cad430a7277d55"],["/wf-updates/static/media/sortie.46c0254e.svg","46c0254e365a5d1f663d097295c9e5e6"],["/wf-updates/static/media/wfc-bg.c50c4ca3.jpg","c50c4ca3449f45b52a09949c56ac634f"],["/wf-updates/static/media/x-button.a283b121.svg","a283b1212c8394b7b07bebc8cc6bfbb7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),c=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var c="/wf-updates/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});