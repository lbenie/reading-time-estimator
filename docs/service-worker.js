/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d322c7f1f82751fc8444aa7ca3cd2d81"
  },
  {
    "url": "assets/css/0.styles.082a6f98.css",
    "revision": "9b0c4c0faa8aad237d8cc0f3a0853033"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8a11906.js",
    "revision": "407687cf803a1e304338cdca65b58972"
  },
  {
    "url": "assets/js/11.5b78b679.js",
    "revision": "6fbdd9fbced5b1c12eb0a5eccafdfc3f"
  },
  {
    "url": "assets/js/2.0ada9e6f.js",
    "revision": "9cfebe8eaff2f63ad479b00ccd1010e5"
  },
  {
    "url": "assets/js/3.8693f0e9.js",
    "revision": "e909b22be9451c519417827d32bef998"
  },
  {
    "url": "assets/js/4.183d5025.js",
    "revision": "74c3c6b56ceccba24d9d8a161b4971b7"
  },
  {
    "url": "assets/js/5.e9429f61.js",
    "revision": "d73ce384a412a39b79257d6c8ef2b90d"
  },
  {
    "url": "assets/js/6.cdd976f8.js",
    "revision": "df1c7d97341e6b3cb34a04d8d5f5f340"
  },
  {
    "url": "assets/js/7.fc0c7c5c.js",
    "revision": "f96e0ec0df2ec865039ae27b794d2bd1"
  },
  {
    "url": "assets/js/8.025e5b54.js",
    "revision": "a0069a3ea3cf602bb2dbfd84a951f402"
  },
  {
    "url": "assets/js/9.b3c14446.js",
    "revision": "2394992478efad0b1ebb6a1aba84c660"
  },
  {
    "url": "assets/js/app.e0795a1c.js",
    "revision": "c89329fd5e49e0d0947fcce472154c53"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "31995eaf609f479efef634b53faa283e"
  },
  {
    "url": "fr/index.html",
    "revision": "3c2e6b2bd378d9940a469e5c32bfa0a4"
  },
  {
    "url": "fr/try/index.html",
    "revision": "e2b1d8cdece2b44d4ddf9114e2d9c227"
  },
  {
    "url": "guide/index.html",
    "revision": "474ef77420fc8f64a1ffac5094301e83"
  },
  {
    "url": "icons/android-chrome-96x96.png",
    "revision": "a770baee827c32ec1ff2511ae523341a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "cbd951ffe764af4530896d50adc9425b"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d6fa11e15f2a248b3311cca71264a624"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "f6592bc49225cb161adec2a6ad945106"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "db2036c114b2e3be912f99eceae4e2a2"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "6c204d943d59f7a7e764f938528f8e68"
  },
  {
    "url": "index.html",
    "revision": "2918f4000e5387bab637d96f944500e6"
  },
  {
    "url": "logo.png",
    "revision": "c45cc612d9da49e84b7f9550b5bf8386"
  },
  {
    "url": "try/index.html",
    "revision": "7a0434d617d513fab943f394002635eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
