importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('bs').then(function(cache) {
     return cache.addAll([
       '/',
       'index.html',
       'index.html?homescreen=1',
       '?homescreen=1',
       '/build/main.css',
       '/build/polyfills.js',
       '/build/vendor.js',
       '/build/main.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
});
