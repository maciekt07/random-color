"use strict";
var cacheName = "v1";
var cacheAssets = ["index.html", "dist/src/app.js", "dist/src/notification.js", "dist/src/shortcuts.js", "/styles/"];
self.addEventListener("install", function (e) {
    console.log("Service Worker: Installed");
    e.waitUntil(caches
        .open(cacheName)
        .then(function (cache) {
        console.log("Service Worker: Cashing Files");
        cache.addAll(cacheAssets);
    })
        .then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
    console.log("Service Worker: Activated");
    e.waitUntil(caches.keys().then(function (cacheName) {
        return Promise.all(cacheName.map(function (cache) {
            if (cache !== cacheName) {
                console.log("Service Worker: Clearing Old Cache");
                return caches.delete(cache);
            }
        }));
    }));
});
self.addEventListener("fetch", function (e) {
    console.log("Service Worker: Fetching");
    e.respondWith(fetch(e.request).catch(function () { return caches.match(e.request); }));
});
