importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('bs').then(function(cache) {
     return cache.addAll([
       '/',
       'index.html',
       '/build/main.css',
       '/build/polyfills.js',
       '/build/vendor.js',
       '/build/main.js'
     ]);
   })
 );
});
