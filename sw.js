self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qiniso-v26').then(cache => {
      return cache.addAll([
        '/Qiniso-dashboard-/',
        '/Qiniso-dashboard-/index.html',
        '/Qiniso-dashboard-/manifest.json',
        '/Qiniso-dashboard-/logo.png',
        '/Qiniso-dashboard-/logo2.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
