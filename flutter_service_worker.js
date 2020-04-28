'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/logs/HEAD": "607863fd3c2a67c53ea6d15d610ea799",
".git/logs/refs/remotes/origin/master": "68544ebac9093a14b99d8efce30220a0",
".git/logs/refs/heads/master": "607863fd3c2a67c53ea6d15d610ea799",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "8ad9092c895008ff2c0948f26b44cd29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "f4a83ef72a23253aa6497ce7e3a51045",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/fd/09a2b6793d0d41977fd110395e6bac2807be28": "6c1ad9090844a91cf87a9e72e8192068",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b8/a14343c6ec8bae6d07ca315302ada87b13f7ec": "754cc2906d4bb886a87556d0514a6f81",
".git/objects/22/bf5c9649a0f4a3f248e52efb84fa52df2d8e30": "ebfd72bfc3e669c5358be9e54d3b5641",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/d6e8f3677c08976634cdbcca1305eb13d24da7": "61cb0c4744865fce69b2c2daf1d6bb03",
".git/objects/25/155a37676cf20b08f0b89a76295ddcd38dff81": "6c21b3005a5c28051da81bbcdb410510",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/73/a1c1567fad9da7627863ffd5ec05915b40089b": "b4815f8bb6827eae78589e6bc6d0908a",
".git/objects/86/a359b52d3bd9031e1160e68729f5804508dd60": "b5f5fd87bf470ab1b964616022fefdf2",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ca/159052ae267c2caa055d6113306c61fdd4e3d3": "421ccd2c4428429473f175f2fe093fd4",
".git/objects/ca/0c9ca33ee9f5782291c0b4a448b8067e27a712": "707ea8e640f99bf20b70245b892d60d1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/FETCH_HEAD": "da99ae6ebe1236ddca74de61a83c8cb9",
".git/refs/remotes/origin/master": "1ca9ec6aad92f9736da5410844a1cf7c",
".git/refs/heads/master": "1ca9ec6aad92f9736da5410844a1cf7c",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"manifest.json": "1d13482939f2cd2445ea58ac9506a7c1",
"index.html": "0e7623bea14d42c0fd20b4f200bdccf0",
"/": "0e7623bea14d42c0fd20b4f200bdccf0",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/data.json": "2d1235c84a6b2b9b74d64aceca925014",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "d73200ce29ed1d4d1d1a27bf4243304d",
"assets/AssetManifest.json": "bf8dced65dc99b7d9b3c61f264b62ab5",
"assets/web/assets/data.json": "2d1235c84a6b2b9b74d64aceca925014",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "2d87f403ac5185073c975e5c2656b516"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
