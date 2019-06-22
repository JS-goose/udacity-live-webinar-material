// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(
      () => {
        console.log('Service worker registered successfully!');
      },
      (error) => {
        console.error(`Service workler registration failed: ${error}`);
      }
    );
  });
}

//Install service worker
const cacheContainer = 'udacity-week15-serviceWorkers';
const cacheFiles = ['./index.html', './styles.css', './scripts.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheContainer).then((cache) => {
      console.log('Cache has been opened successfully');
      return cache.addAll(cacheFiles) && console.log('Files cached boooyahh!');
    })
  );
});

//Return requests for files 
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})