var CACHE_NAME= 'catnap';
var staticContent = [
  '/catnap/index.html',
  '/catnap/images/cat.jpg',
  '/catnap/video/cat.mp4',
  '/catnap/audio/music.mp3',
  '/catnap/css/normalize.css',
  '/catnap/css/skeleton.css',
  '/catnap/css/style.css'
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
