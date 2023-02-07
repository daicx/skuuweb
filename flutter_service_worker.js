'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_24.part.js": "fb5d8b0fb80e14309fec76449a4c9df3",
"version.json": "ba32483d437115b4259f6d4521329b85",
"main.dart.js_7.part.js": "cf53b1b2b80ff2afbc2faf036fd08f33",
"main.dart.js_12.part.js": "3d2e35ef95cb3f703f5df06d6ea61821",
"main.dart.js_6.part.js": "cd00b42f1fff4d89621621acf68a69ea",
"index.html": "6c9f2662a1b4ee1784d679891e047f4e",
"/": "6c9f2662a1b4ee1784d679891e047f4e",
"main.dart.js_13.part.js": "2cc0cff0f01e114cc6687c26a40f9dce",
"main.dart.js_25.part.js": "1ba03a01846c1a3afe72140a19638e91",
"main.dart.js_11.part.js": "6aa42fc811217b39849efb4db6494092",
"main.dart.js": "82152e738e9041576df137b50320c759",
"main.dart.js_18.part.js": "c6e91fafd86969c081c01acc85fbcf2d",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_26.part.js": "04de527d3aec23ab7592e6c61965aec1",
"main.dart.js_10.part.js": "a9b7991dee57dcb9dccd27abc40f00a1",
"main.dart.js_15.part.js": "ec702ccd5e521a9ec38790e823e5adfa",
"favicon.png": "58720a3de820ec1886c714109c58b8ea",
"main.dart.js_23.part.js": "5777b7ef0e467ecb07f23d1353c5426f",
"main.dart.js_9.part.js": "70a3a51aa7d41624907b672f985354f4",
"main.dart.js_22.part.js": "a442004ed1716f6766fc5a4fd3975653",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4628be4937043dd4c413e909a023a839",
"main.dart.js_14.part.js": "da303352433803dc9b54a3d89e1edd01",
"main.dart.js_1.part.js": "7a74a81725593875a7f0e74a89583f37",
"main.dart.js_20.part.js": "00e8af7a386daedfab038167ab95fdea",
"main.dart.js_30.part.js": "dd58e8b1d0ff5165a150716cf341f423",
"main.dart.js_29.part.js": "d85f2e89d20ea28516e1a4c19847c4aa",
"main.dart.js_3.part.js": "d95bd3f2e861d762b993026e54dc9e7e",
"main.dart.js_16.part.js": "21958934664f293c86e2aaef6aaa26f2",
"assets/imgs/me.png": "dca4c3ddd3d61b7dc7198dcd467e918d",
"assets/imgs/put_video.png": "7f99975642b0a799c1c71a8bb72dc0ba",
"assets/imgs/team.png": "44edffcca8ec82d646f3ecf2969afad3",
"assets/imgs/care.png": "e5a0289054c8624a84535317537c0f67",
"assets/imgs/artical.png": "371194f10ed09e1336c3de683ccc74ea",
"assets/imgs/msg_select.png": "ba94e8cfef233f216523660780103b0b",
"assets/imgs/msg.png": "341298840f852b6dfb096be3660a8118",
"assets/imgs/collect.png": "ebc77181fc111ee783f0d2c85e4762f9",
"assets/imgs/order.png": "af49cc61b2f1e58c5fb70986b679e9f1",
"assets/imgs/link.png": "dca1e43da1ce30896d55b97193aa22cc",
"assets/imgs/me_select.png": "63170ad62ea64d6b8d3195e9e1ff0a80",
"assets/imgs/level-1.png": "64f85ea0edd0f994de21c56ed7b64485",
"assets/imgs/user_default.png": "9e6c0eafcdd257ee33d3a7df4b5cebbf",
"assets/imgs/room.png": "ad8488271536964bb51430ac0bfa3497",
"assets/imgs/send_friend.png": "3f8b389e8207cf77c6d264a471afa97f",
"assets/imgs/level-2.png": "5d236d0ac7a535e87b2a84fb8a62ce0b",
"assets/imgs/shop.png": "cd4bb4b1a68102dd0daed716d82f51d4",
"assets/imgs/set.png": "c0c2f79b24f32b378e1fca853e3c77c9",
"assets/imgs/history.png": "5daf00191354b057f4409aef1fe36fb9",
"assets/imgs/find.png": "137101450b4a13b8a2bc80b39d3fe3da",
"assets/imgs/video_select.png": "74627ace7fc6957ae1ad117007d5e433",
"assets/imgs/level.png": "8e89d393db5af49df3e96684fd0b2860",
"assets/imgs/version.png": "54329fe1de47eb96315ecd457edf2232",
"assets/imgs/index1_select.png": "475e348dc8e0cf9310f2e1d196d0dcb4",
"assets/imgs/video.png": "8925607a2dff62ba912244f543a6f421",
"assets/imgs/qq.png": "5040ebae1f822e0b382b3af840ef887c",
"assets/imgs/find_select.png": "49aebf147c6bd8d01d378a0d2a371a74",
"assets/imgs/exit.png": "c3457754de35db1b674f5728045ffb8b",
"assets/imgs/img_default.png": "dffaf288d6f79d2f68b75a82c5c2f8ca",
"assets/imgs/discuss.png": "2b4062bf063d863a93833b288d7feecd",
"assets/imgs/idea.png": "9f183a8546ca3c54946a765d193ff57d",
"assets/imgs/fuli.png": "51e47b2a694550a851743c24b86ad6e4",
"assets/imgs/answer.png": "99bc49795f481a3f39a00de28e4d06d5",
"assets/imgs/sun.png": "b07cba526226a1f2852172e9dffdb435",
"assets/imgs/fankui.png": "fef2b75f2c93479a07e4e31622edbdcd",
"assets/imgs/index1.png": "e56cc097846007879f7a55538dd2f1ac",
"assets/imgs/wechat.png": "f85ddabbe9a450285b96c94fce359c2c",
"assets/imgs/night.png": "a44d2f00c4a4d6b43895110992d29d75",
"assets/AssetManifest.json": "277a19ba7522c4741ad49bc3348b1f0d",
"assets/NOTICES": "944a2c2b91a740533afa1c607d934693",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"main.dart.js_2.part.js": "4768f97f0fac892f735163cba7250846",
"main.dart.js_17.part.js": "36a9e5c86467c7e5a3cb292af5121f77",
"main.dart.js_21.part.js": "31cfbc741fe2cc702188264bb653459d",
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
