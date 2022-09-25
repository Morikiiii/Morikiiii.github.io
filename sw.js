/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/02/Csharp/Class专题（1）/index.html","72b106d75339b7d55e660908761d6ee5"],["/2022/09/02/Csharp/基础语法专题（1）/index.html","894bbfe6ceb4ca1953b869957c1b7a73"],["/2022/09/02/Csharp/基础语法专题（2）/index.html","9f8f766d1866ddaea891d9cac8cb503f"],["/2022/09/02/Novels/浅青色的女孩/index.html","d06338ba074369540bd632370534b1b1"],["/2022/09/02/Other/hello-world/index.html","d193653bfb1f83e0c92c8a50c1aba482"],["/2022/09/03/Csharp/Class专题（2）/index.html","6a80e3907a175bff25e78a1cbe11c6db"],["/2022/09/04/Csharp/设计模式专题/index.html","5e224e60e2a97a0cb2b158ddbbea4af3"],["/2022/09/05/Csharp/IO操作专题/index.html","e5fdb3559c78712eea4dabce9bd912f4"],["/2022/09/06/Csharp/数据结构/index.html","5f4deaf20541db8becffc7b3778b2259"],["/2022/09/06/Unity/Unity基础操作/index.html","a0869159421ffad7c64a7d164e7f25a1"],["/2022/09/07/Unity/Unity组件思想/index.html","837ff0a40ce687930483d34501de1c4e"],["/2022/09/08/Unity/Unity-2D部分/index.html","4e8c15181a0500ee3ca7f402ff2b752c"],["/2022/09/09/Unity/Unity-输入系统/index.html","b55d248255e55a6e6229dd0b83246852"],["/2022/09/10/Novels/死于新生/index.html","afd7cc6adbaa78bac7fa44e4b643895c"],["/2022/09/10/Unity/Unity-UI系统(1)/index.html","2de1a4435501be2440190597f6d5f33b"],["/2022/09/10/Unity/Unity-UI系统（2）/index.html","c52137a1782e835af9dc5a822c6d854a"],["/2022/09/12/Unity/Unity-3D部分/index.html","12b223aa60e511e20297931e4275facd"],["/2022/09/12/Unity/Unity-动画系统/index.html","ad930c5af09012a7b1f53dcb5a995dfe"],["/2022/09/12/Unity/Unity-渲染基础/index.html","0995da17c37949c287f55a7d8a3302bc"],["/2022/09/14/Unity/Unity-导航系统/index.html","7661b86b2951b89af852583903ee0c38"],["/2022/09/14/Unity/Unity-资源管理/index.html","08950f453df0d1aa4ba6fb2c09d9ed60"],["/2022/09/16/Other/Markdown-using/index.html","58f72e5b0596366017d100a5c353d0b4"],["/2022/09/19/Novels/F-0025的第一人称缺失症候群/index.html","85e21bebffa7ccb97f330f5ea784b194"],["/2022/09/20/EveryDay/2022-09/index.html","1928fa51c7d6491c7718004e7dd4d9c6"],["/2022/09/21/Csharp/自我补充（1）/index.html","dc3919880fd55cfe9f27d9181b2e4162"],["/2022/09/24/Novels/舞/index.html","fbadc600d165e84b7075d477ac726f0c"],["/2022/09/24/Unity/Flappy-Bird/index.html","f594d9142853b448a3e9ac82993f0678"],["/archives/2022/09/index.html","af2da39f866923e5c2f3ac58c10c1bfd"],["/archives/2022/09/page/2/index.html","0efafae047a45b61e39840779f612d54"],["/archives/2022/09/page/3/index.html","fb2cefb7386d8c89ad11c69f26f0b63e"],["/archives/2022/index.html","9e933a37e7f9ca72fee5b7cf129ce222"],["/archives/2022/page/2/index.html","ab1596f142dba970351cc6c7467c850b"],["/archives/2022/page/3/index.html","6a95ca51828363d29df431a615248349"],["/archives/index.html","ae0a17ebe9e73ad5275650898a58e5fb"],["/archives/page/2/index.html","d358be211ed4eae956a8feaa3eb3038b"],["/archives/page/3/index.html","7bf4c8d932e996abdf9331790d1f94ce"],["/categories/C-Study/index.html","866878d9e611f090bc1bfb3d1c1356c6"],["/categories/EveryDay/index.html","8fbf3c4bd08facc9cd5e1b50ff98ac34"],["/categories/Novels/index.html","2d1c5be231f3de334a7dd7c87ac3874d"],["/categories/Other/index.html","22e079e0a8b09cdabd357257a9e1f82a"],["/categories/Unity-Study/index.html","ba622458df1df9268933e07c85ad5715"],["/categories/Unity-Study/page/2/index.html","ea840f085b773ee2ce72297a81b53f4d"],["/categories/index.html","ebd879ae9876a35335c3621b4dee999e"],["/css/white.css","f5bed7c0c4a041aa04764a28c701109d"],["/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/js/search.js","f594f538c7deead068ffda84ccac4ae2"],["/js/tocbot.min.js","ce85a759d6c5f4e42aae4ff539d97735"],["/js/white.js","a9f604f362c1190098a3e701fe5a5955"],["/page/2/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/3/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/sw-register.js","80683d235ba2dcd987b6626f41ab31a7"],["/tags/index.html","5052fa2a0c5b917d0c56ba4492887a2c"]];
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
