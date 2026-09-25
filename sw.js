self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qiniso-v25').then(cache => {
      return cache.addAll([
        '/Qiniso-dashboard-/scan.html',
        '/Qiniso-dashboard-/security-lock-v25.js',
        '/Qiniso-dashboard-/logo2.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
