const CACHE = "hazers-sms-v2";   // <— change version to v2 (or higher)
const ASSETS = ["./", "./index.html", "./manifest.json", "./icons/icon-192.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
