"use strict";
importScripts("https://js.pusher.com/beams/service-worker.js");
// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
// workbox.routing.registerRoute(({ request }) => request.destination === "image", new workbox.strategies.NetworkFirst());
var MY_CACHE = "cache-all";
var MY_FILES = ["/styles/style.css", "/dist/app.js", "/dist/shortcuts.js", "/index.html", "/dist/notification.js", "dist/script.js"];
self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(MY_CACHE).then(function (cache) {
        return cache.addAll(MY_FILES);
    }));
});
// strategia 'Network falling back to cache'
self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request).catch(function () {
        return caches.match(event.request);
    }));
});
