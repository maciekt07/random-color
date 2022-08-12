// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
// workbox.routing.registerRoute(({ request }) => request.destination === "image", new workbox.strategies.NetworkFirst());

const MY_CACHE = "cache-all";
const MY_FILES = ["/css/style.css", "/js/App.js", "/js/shortcuts.js", "/index.html", "/js/ntc.js"];

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(MY_CACHE).then((cache) => {
        return cache.addAll(MY_FILES);
      })
    );
  });
// strategia 'Network falling back to cache'
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
