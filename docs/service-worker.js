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
    "revision": "90a8ea2f97e57501222fb56ab915e954"
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
    "url": "assets/js/7.61ac0d63.js",
    "revision": "2b58e577d444363a0db139f92e837397"
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
    "url": "assets/js/app.1c07afcc.js",
    "revision": "51574f842a12b30638f808262f150f5f"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "81c34d58a028508065fb02d468e5bbb7"
  },
  {
    "url": "fr/index.html",
    "revision": "6fb21d4376874838522793e60d0726a2"
  },
  {
    "url": "fr/try/index.html",
    "revision": "bb19ad49a5a90853d0d8b2b7772b0543"
  },
  {
    "url": "guide/index.html",
    "revision": "9d2a7b77a017b32308b13478f2df4ada"
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
    "revision": "f8239e1fbc85d25453ef36c8bfe2f06f"
  },
  {
    "url": "logo.png",
    "revision": "c45cc612d9da49e84b7f9550b5bf8386"
  },
  {
    "url": "try/index.html",
    "revision": "63ad65880687518f558493244aa0ca27"
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
