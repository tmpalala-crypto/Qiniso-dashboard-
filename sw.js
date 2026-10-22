self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qiniso-v40').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './logo.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => { if(k!=='qiniso-v40') return caches.delete(k); })))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
