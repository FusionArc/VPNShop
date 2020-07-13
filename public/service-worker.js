workbox.core.setCacheNameDetails({ prefix: 'VPNS' })

self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html', {
    /* Do not redirect routes used by firebase auth  */
    blacklist: [
        new RegExp('/__/auth/handler'),
        new RegExp('/__/auth/iframe'),
        new RegExp('/.well-known')
    ]
})

workbox.routing.registerRoute(
    /^https:\/\/fonts/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'fonts.googleapis',
        plugins: []
    }),
    'GET'
)

addEventListener('message', messageEvent => {
    if (messageEvent.data === 'skipWaiting') return self.skipWaiting()
})