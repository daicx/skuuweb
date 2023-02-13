'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ba32483d437115b4259f6d4521329b85",
"main.dart.js_7.part.js": "bcfbd34e5cd3bb7c526e4332bef809e5",
"main.dart.js_6.part.js": "689f5ec6c574cc40dd4bfe897fe53861",
"index.html": "e226cd80abf2a2361e7177c9d079ab80",
"/": "e226cd80abf2a2361e7177c9d079ab80",
"main.dart.js_4.part.js": "5cc060d8701cdcbf6ed1deb508720247",
"main.dart.js": "626d56daeccc61cb141f5dc5f1c9474d",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_5.part.js": "03bcc6b64a3ae6fc6ac0c7d63cac5d5e",
"favicon.png": "58720a3de820ec1886c714109c58b8ea",
"main.dart.js_8.part.js": "f00a588c9ed2594394ee569c4e56f335",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4628be4937043dd4c413e909a023a839",
"main.dart.js_1.part.js": "b1a7fe34dc55655aca055beaeb306610",
"main.dart.js_3.part.js": "6598cf5bb80241a770216a6d4b27e784",
"assets/imgs/me.png": "dca4c3ddd3d61b7dc7198dcd467e918d",
"assets/imgs/put_video.png": "7f99975642b0a799c1c71a8bb72dc0ba",
"assets/imgs/caogao.svg": "79b68f1f347db0c9231c9ad7c4aa04aa",
"assets/imgs/team.png": "44edffcca8ec82d646f3ecf2969afad3",
"assets/imgs/artical.png": "371194f10ed09e1336c3de683ccc74ea",
"assets/imgs/index-sel.svg": "e546dc81f7e04bb8f0f23c4fb64f9657",
"assets/imgs/video-sel.svg": "f9420451c776a4a1764bb60b3088ab88",
"assets/imgs/ic_index_bar_bubble_gray.png": "814ae2cd5ecf2e3e598d038be1ab42c8",
"assets/imgs/exist.svg": "c175b79192ea2654bb364515d1ae6318",
"assets/imgs/order.png": "af49cc61b2f1e58c5fb70986b679e9f1",
"assets/imgs/link.png": "dca1e43da1ce30896d55b97193aa22cc",
"assets/imgs/gouwuche.svg": "76dbbc39a821c662fe0065faa07a0c89",
"assets/imgs/me_select.png": "63170ad62ea64d6b8d3195e9e1ff0a80",
"assets/imgs/order.svg": "75f79b8be881a4d5e121852ce7c3b0dd",
"assets/imgs/level-1.png": "64f85ea0edd0f994de21c56ed7b64485",
"assets/imgs/me-sel.svg": "9efba8414a86b1e36fecf3fc82249e7b",
"assets/imgs/collect.svg": "dc1d49e8c3567e2efc0dcf6d1f4d8969",
"assets/imgs/msg.svg": "c85c5da82a40167c3f2a6225193d0332",
"assets/imgs/user_default.png": "9e6c0eafcdd257ee33d3a7df4b5cebbf",
"assets/imgs/index.svg": "8a26c37ce972395b31cc94d5eeb17710",
"assets/imgs/room.png": "ad8488271536964bb51430ac0bfa3497",
"assets/imgs/send_friend.png": "3f8b389e8207cf77c6d264a471afa97f",
"assets/imgs/level-2.png": "5d236d0ac7a535e87b2a84fb8a62ce0b",
"assets/imgs/defbak.png": "5aa9afd64a283f9ac63362a7d1b15550",
"assets/imgs/zan.png": "abd257d92fdf03740575f7c661da9550",
"assets/imgs/care.svg": "640787ae67abe4281de47b8ed5b3eea6",
"assets/imgs/me.svg": "e50b12fad4747b323811d42ec8713bb9",
"assets/imgs/zuji.svg": "e1cb8394717191604b9c05f52ae30403",
"assets/imgs/danmu.svg": "2221e35ce078561561e72d2e4c4242cf",
"assets/imgs/find.png": "137101450b4a13b8a2bc80b39d3fe3da",
"assets/imgs/recharge.gif": "b58c507ae3a6e59617d07dbce4f04803",
"assets/imgs/level.png": "8e89d393db5af49df3e96684fd0b2860",
"assets/imgs/night.svg": "3044d859f6872c0e34df106a28121113",
"assets/imgs/fankui.svg": "2c63a4a09648b30681d5b736b223f3ab",
"assets/imgs/defbak1.png": "8450bd9579ef22a3c43b4b08e2fddb3a",
"assets/imgs/sun.svg": "0f61a2a388615a27f845e32445a0b69f",
"assets/imgs/qq.png": "5040ebae1f822e0b382b3af840ef887c",
"assets/imgs/find_select.png": "49aebf147c6bd8d01d378a0d2a371a74",
"assets/imgs/fuli.svg": "c7d94375174ebda13a80922db12f8170",
"assets/imgs/no_zan.png": "d9424daa9835985023fcd272e3eccf0a",
"assets/imgs/creator.svg": "b8e5ce3f07704d434856e8c4a4502441",
"assets/imgs/msg-sel.svg": "f1e86d3c744f671d838cb7cfff18ece5",
"assets/imgs/vip.svg": "329e7111e6b58de71e2797337e0ddfd8",
"assets/imgs/img_default.png": "dffaf288d6f79d2f68b75a82c5c2f8ca",
"assets/imgs/discuss.png": "2b4062bf063d863a93833b288d7feecd",
"assets/imgs/vip4.svg": "019e1a13262c48270cf58bbdae9b34e8",
"assets/imgs/vip.png": "6ad360a9b42c390861be943dce9e2782",
"assets/imgs/idea.png": "9f183a8546ca3c54946a765d193ff57d",
"assets/imgs/ic_index_bar_bubble_white.png": "3a428b9603817acb16fc3abcfade936f",
"assets/imgs/vip5.svg": "3bd4b54a4b47ae5952a7270d9a181e8a",
"assets/imgs/answer.png": "99bc49795f481a3f39a00de28e4d06d5",
"assets/imgs/video.svg": "62d7085ad022ca5b5920ba592883519a",
"assets/imgs/vip6.svg": "c68c2e71a0e973160b197428ea492964",
"assets/imgs/wechat.png": "f85ddabbe9a450285b96c94fce359c2c",
"assets/imgs/vip2.svg": "11b4be897e3a4c9730d4bdb30739b68a",
"assets/imgs/version.svg": "d8a2d7fa6229e1ebb836fecd75ec90d6",
"assets/imgs/vip3.svg": "e464bbba40dcc20edfa7c54aec05865d",
"assets/imgs/vip1.svg": "552bec3453cc5653fd6dd1cae1659d9f",
"assets/imgs/history.svg": "eb4279e5a971427469b9b23cedfa0b60",
"assets/imgs/set.svg": "149bc1d8d0b491cd6b97e90db4dbd8ea",
"assets/imgs/hy.gif": "d90bf397b6bdd746f1f87f7d54bad471",
"assets/mock/car_models.json": "564e749988d5e2e0b13831649141405e",
"assets/mock/china.json": "981508d9619356a8deca0aa642792c51",
"assets/mock/contacts.json": "50029e9055f97e3a9c14840e2f12a9c8",
"assets/AssetManifest.json": "c4dc689e8c5638a02a56cf9f2ebd144f",
"assets/NOTICES": "f82fedf559d29a535aaea1228dc4f2b6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"main.dart.js_2.part.js": "ba6d9272132034babf1272d0c3d57a78",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
