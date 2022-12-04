/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/02/Csharp/Class专题（1）/index.html","0402d77b683f11c6beadd8f5f025944e"],["/2022/09/02/Csharp/基础语法专题（1）/index.html","dc2fa81f45698a9ce135489f4bb53edd"],["/2022/09/02/Csharp/基础语法专题（2）/index.html","cd3175b78c6c2d61256580ba5cf476dc"],["/2022/09/02/Novels/浅青色的女孩/index.html","1be9107bd912ca46b4ebd0155536c7e1"],["/2022/09/02/Other/hello-world/index.html","e85ecfd2b7e02b41a1f43638dc76eccd"],["/2022/09/03/Csharp/Class专题（2）/index.html","c3e55414641cec68e256107bb25655e9"],["/2022/09/04/Csharp/设计模式专题/index.html","fcbe2c0331ac352245c8e85019aeb135"],["/2022/09/05/Csharp/IO操作专题/index.html","72e08e8ac545a217736aea6749497e2b"],["/2022/09/06/Csharp/数据结构/index.html","6a92d1ec7c4815e238370a95b6719757"],["/2022/09/06/Unity/Unity基础操作/index.html","6a5b49c093cf3f19e1ec0835c444d7a1"],["/2022/09/07/Unity/Unity组件思想/index.html","1dad26c82e406cd0870d61e6da4b504f"],["/2022/09/08/Unity/Unity-2D部分/index.html","b2468ca474cae47644795647298a2f20"],["/2022/09/09/Unity/Unity-输入系统/index.html","5baa12fb02ee312cac6939df88b081c4"],["/2022/09/10/Novels/死于新生/index.html","bd81335f397b4c12805d9956c94c8b18"],["/2022/09/10/Unity/Unity-UI系统(1)/index.html","47c9c39d96c36861e100bd11cd5d7700"],["/2022/09/10/Unity/Unity-UI系统（2）/index.html","4b0d9a9dbf143062e61b56a34efa2d12"],["/2022/09/12/Unity/Unity-3D部分/index.html","c181fe4e4e30efe53b6bc3f7a7fb141f"],["/2022/09/12/Unity/Unity-动画系统/index.html","dfccb6278323d469f95b19987c05c629"],["/2022/09/12/Unity/Unity-渲染基础/index.html","40ab1b69260c540babbe28e5ae31bafe"],["/2022/09/14/Unity/Unity-导航系统/index.html","559c9836e87b52dc0e2bac81eef7b266"],["/2022/09/14/Unity/Unity-资源管理/index.html","abfb8d643ecb4b88682fc8b66cbd1df6"],["/2022/09/16/Other/Markdown-using/index.html","cc2e79d4876dd2d36378de85dbcf9c86"],["/2022/09/19/Novels/F-0025的第一人称缺失症候群/index.html","ec7b858806fbdca47c9db2383fcba61f"],["/2022/09/20/EveryDay/2022-09/index.html","243ee3e2aa8813f751b55b96d958a962"],["/2022/09/21/Csharp/自我补充（1）/index.html","c9305480641f3eb7d6fd952b3243d3cc"],["/2022/09/24/Novels/舞/index.html","45340108d5bb6a6b9119a506f92eaa55"],["/2022/09/24/Unity/Flappy-Bird/index.html","553343e264d1168787b9eb907756300e"],["/2022/10/01/EveryDay/2022-10/index.html","94903bcd97d4cc0e98472791318b268d"],["/2022/10/07/Novels/Some-Extract/index.html","83bbc30e4df586c2a7b963d47c1b935d"],["/2022/10/16/Unity/MMORPG/index.html","5e3a6b21afecb4d87519bfb81aa0dc50"],["/2022/11/01/EveryDay/2022-11/index.html","73680bd722e97c51b4c69f7f3e67e4d3"],["/2022/11/16/Unity/MMORPG-2/index.html","234b3ac5dd95f1cf4b5db11a1ed58781"],["/2022/12/01/EveryDay/2022-12/index.html","5e0d5d54f30f46f0e071fc0aa153aaa3"],["/archives/2022/09/index.html","af2da39f866923e5c2f3ac58c10c1bfd"],["/archives/2022/09/page/2/index.html","0efafae047a45b61e39840779f612d54"],["/archives/2022/09/page/3/index.html","fb2cefb7386d8c89ad11c69f26f0b63e"],["/archives/2022/10/index.html","53d15db48864bda50c83adb404554117"],["/archives/2022/11/index.html","750ef99a932913d2281d85e6b635c73e"],["/archives/2022/12/index.html","7ed4426562b87abcf152d713ff67d94f"],["/archives/2022/index.html","818cdb4f209f5760e7cf383bc071127c"],["/archives/2022/page/2/index.html","58a87c7a291fc542d8e9d86671736cbc"],["/archives/2022/page/3/index.html","dd72c2654687589d86fee66ff1f768fd"],["/archives/2022/page/4/index.html","862ed215a3625d6d9955cac3ab15a9ad"],["/archives/index.html","95cc6ed74ce1349c5db09be62ae34323"],["/archives/page/2/index.html","b890008b0e3dc6757a2aa16dc55b847c"],["/archives/page/3/index.html","90b96f7916836e9c0dc0fabbb234ff70"],["/archives/page/4/index.html","bb45af5b38a83bbc7830239f2af36f27"],["/categories/C-Study/index.html","866878d9e611f090bc1bfb3d1c1356c6"],["/categories/EveryDay/index.html","64f005d2010c38f2e027fc500e290077"],["/categories/Novels/index.html","7f0a4935e2030dc8192d5af2b9a841bd"],["/categories/Other/index.html","22e079e0a8b09cdabd357257a9e1f82a"],["/categories/Unity-Study/index.html","b9ef18561360a2650fc8463352e49abb"],["/categories/Unity-Study/page/2/index.html","67e1513449429f313aff1a00d097f8e1"],["/categories/index.html","ebd879ae9876a35335c3621b4dee999e"],["/css/white.css","f5bed7c0c4a041aa04764a28c701109d"],["/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/js/search.js","f594f538c7deead068ffda84ccac4ae2"],["/js/tocbot.min.js","ce85a759d6c5f4e42aae4ff539d97735"],["/js/white.js","a9f604f362c1190098a3e701fe5a5955"],["/page/2/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/3/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/4/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/sw-register.js","7b9dd90eb4f601ee85b7ee6e46d53849"],["/tags/index.html","5052fa2a0c5b917d0c56ba4492887a2c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
