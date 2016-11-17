var CACHE_NAME= 'catnap';
var staticContent = [
  '/index.html',
  '/images/cat.jpg',
  '/video/cat.mp4',
  '/audio/music.mp3',
  '/css/normalize.css',
  '/css/skeleton.css',
  '/css/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(staticContent);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});
