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
    "revision": "35b1067707bd580c5f1754205e3098cf"
  },
  {
    "url": "assets/css/0.styles.27cc739f.css",
    "revision": "dc7b5684691278a7c2d60c2ac3e465db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a73f0150.js",
    "revision": "4984a1e4ad82c2df1549cd5e63146787"
  },
  {
    "url": "assets/js/11.26ae2578.js",
    "revision": "bced78d52bdb986226bb794d8225d4ed"
  },
  {
    "url": "assets/js/2.eb169f1b.js",
    "revision": "7c45639ebc765a975b941b5966f8e2d8"
  },
  {
    "url": "assets/js/3.706f5a58.js",
    "revision": "6ebf3493795a254e274cb56105099111"
  },
  {
    "url": "assets/js/4.7a9672f0.js",
    "revision": "91615db3c26876413d84e1adc8192d97"
  },
  {
    "url": "assets/js/5.18357fb6.js",
    "revision": "635cddf2ab4d5a9f2157006a74cc07f8"
  },
  {
    "url": "assets/js/6.0a04796a.js",
    "revision": "3c3f90896dab8717f2c7df0ecf5dd0d9"
  },
  {
    "url": "assets/js/7.db204966.js",
    "revision": "9d0a5c4b18b8d0b69b14ca6ea98ee720"
  },
  {
    "url": "assets/js/8.faa2ee04.js",
    "revision": "90a7aa0b8e117357efd31876040487d9"
  },
  {
    "url": "assets/js/9.58ab9993.js",
    "revision": "207fa3aa6303889d771813e08c5ba44d"
  },
  {
    "url": "assets/js/app.ecad8a75.js",
    "revision": "ed848ad4e62a9ce0df04a516bade0b51"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "3eb2a0cb12ce3c8a1517d4d7b0af1597"
  },
  {
    "url": "fr/index.html",
    "revision": "67b309a30c020e3fcfbe4b4933d04b8b"
  },
  {
    "url": "fr/try/index.html",
    "revision": "42ad701f6c24990e85c2fcd81ae6b2d9"
  },
  {
    "url": "guide/index.html",
    "revision": "b1f5e0b8f0f15ee73b4f5f236dbfd598"
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
    "revision": "150a71b76cdc8ebf667988a276e02fbc"
  },
  {
    "url": "logo.png",
    "revision": "c45cc612d9da49e84b7f9550b5bf8386"
  },
  {
    "url": "try/index.html",
    "revision": "a62469f659ec61aa1673adc48a5078ed"
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
