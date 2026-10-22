self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qiniso-v30').then(cache => {
      return cache.addAll([
        '/Qiniso-dashboard-/',
        '/Qiniso-dashboard-/index.html',
        '/Qiniso-dashboard-/manifest.json',
        '/Qiniso-dashboard-/logo.png'
      ]);
    })
  );
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
