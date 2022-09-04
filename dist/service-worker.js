"use strict";
const cacheName = "v1";
const cacheAssets = ["index.html", "dist/src/app.js", "dist/src/notification.js", "dist/src/shortcuts.js", "styles/style.css"];
self.addEventListener("install", (e) => {
    // console.log("Service Worker: Installed");
    e.waitUntil(caches
        .open(cacheName)
        .then((cache) => {
        // console.log("Service Worker: Cashing Files");
        cache.addAll(cacheAssets);
    })
        .then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
    // console.log("Service Worker: Activated");
    e.waitUntil(caches.keys().then((cacheName) => {
        return Promise.all(cacheName.map((cache) => {
            if (cache !== cacheName) {
                // console.log("Service Worker: Clearing Old Cache");
                return caches.delete(cache);
            }
        }));
    }));
});
self.addEventListener("fetch", (e) => {
    // console.log("Service Worker: Fetching");
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
