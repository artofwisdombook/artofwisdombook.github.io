const V='aow-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(['./','index.html','cover.jpg','logo.png'])))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();if(e.request.url.startsWith(self.location.origin)&&!e.request.url.endsWith('.mp4'))caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
