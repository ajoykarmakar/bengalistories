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

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {

            return response || fetch(event.request);

        })

    );

});
