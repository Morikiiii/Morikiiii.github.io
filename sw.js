/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/02/Csharp/Class专题（1）/index.html","c88a08dade606c20b4114ad36fd3dfb7"],["/2022/09/02/Csharp/基础语法专题（1）/index.html","2a8db22520343b8ea43cdc510b39b635"],["/2022/09/02/Csharp/基础语法专题（2）/index.html","9ccafdb8a6d42887b8fe8c65fdeab23c"],["/2022/09/02/Novels/浅青色的女孩/index.html","ab6a320bd609b84c03dc34518e9421d4"],["/2022/09/02/Other/hello-world/index.html","bc1591ed9f2d572aba120788ca5beba5"],["/2022/09/03/Csharp/Class专题（2）/index.html","2148559a7e05dc0b0c8b90ad6176e3a0"],["/2022/09/04/Csharp/设计模式专题/index.html","326f10c0646b05db4d106d02cfe44a62"],["/2022/09/05/Csharp/IO操作专题/index.html","bbeac8db1e2439f4998fd793017520e0"],["/2022/09/06/Csharp/数据结构/index.html","4c41e1ee11500237fadf3897e43e7cb7"],["/2022/09/06/Unity/Unity基础操作/index.html","819f1e5178b890b97120110b55fb07b7"],["/2022/09/07/Unity/Unity组件思想/index.html","1a2fca8b423f1f8d41f39cb3e7d971d4"],["/2022/09/08/Unity/Unity-2D部分/index.html","58a49025373986e266da2534c9304451"],["/2022/09/09/Unity/Unity-输入系统/index.html","78a337ca7ba012e7b1897975a1d6d9c1"],["/2022/09/10/Novels/死于新生/index.html","da144dffbd60bc463def007a7eac8559"],["/2022/09/10/Unity/Unity-UI系统(1)/index.html","1ead32cf49ea7db2d5fe5c95db093b17"],["/2022/09/10/Unity/Unity-UI系统（2）/index.html","8df61bdc1f3f8acde6622b610f16a486"],["/2022/09/12/Unity/Unity-3D部分/index.html","aef6fd799a0f7ef7c08c06d66f78156e"],["/2022/09/12/Unity/Unity-动画系统/index.html","f872b2ea5ce577d4492af987659dd229"],["/2022/09/12/Unity/Unity-渲染基础/index.html","66d26e0b246dbcc73d1af0e8d9147132"],["/2022/09/14/Unity/Unity-导航系统/index.html","5b70cb8710fcb961e9bbccec2db5cfe3"],["/2022/09/14/Unity/Unity-资源管理/index.html","6df78868d474ce7d5624d86e553d2e95"],["/2022/09/16/Other/Markdown-using/index.html","dda1b55bd7df2e2c410955534b44dbd8"],["/2022/09/19/Novels/F-0025的第一人称缺失症候群/index.html","75f4c25f86c04ab0e4a939629584dd70"],["/2022/09/20/EveryDay/2022-09/index.html","eae075e8c070e85d1ee5d9e8e1aa9fd1"],["/2022/09/21/Csharp/自我补充（1）/index.html","491ffa0567d4fe1454176bf2beb07b2d"],["/2022/09/24/Novels/舞/index.html","da2b146a9378cc37f4861ec71027ce64"],["/2022/09/24/Unity/Flappy-Bird/index.html","cfe1039d1ab43b7491a1f27864899908"],["/2022/10/01/EveryDay/2022-10/index.html","b1509a845604ec0fe620c5d5563603ef"],["/2022/10/07/Novels/Some-Extract/index.html","b31536a6f67a4999c7a252567431b00a"],["/2022/10/16/Unity/MMORPG/index.html","ae86eff4423bbfe0c9b0253e35ee9600"],["/2022/11/01/EveryDay/2022-11/index.html","4636b0e917e849546781d7ddd37dfc56"],["/2022/11/16/Unity/MMORPG-2/index.html","e65bb5578461907ff021e6a1bc1a935a"],["/2022/12/01/EveryDay/2022-12/index.html","d1eb3f20af5f46e65322c5d54e3dc3ae"],["/2022/12/07/Other/all-Problems/index.html","6a6dcacba276cac65f6bdf1d6faf5ab6"],["/2022/12/20/Novels/《乌鸦》reading/index.html","9ffc3d17f31f14dea7d57b184bfdc3fb"],["/2022/12/23/Novels/犯规/index.html","57bd28ddef193ec25d80a9dcef5482e3"],["/2023/01/01/EveryDay/2023-01/index.html","2d0babe58bfddb1e4a9b5106c5caa56d"],["/2023/01/09/Other/Lua/index.html","4c7ccea8c4bf4092fb49450f13e91ea5"],["/2023/01/12/Unity/Unity-Xlua/index.html","79bd7f094f64c0b9de7f4907f35314f7"],["/archives/2022/09/index.html","af2da39f866923e5c2f3ac58c10c1bfd"],["/archives/2022/09/page/2/index.html","0efafae047a45b61e39840779f612d54"],["/archives/2022/09/page/3/index.html","fb2cefb7386d8c89ad11c69f26f0b63e"],["/archives/2022/10/index.html","53d15db48864bda50c83adb404554117"],["/archives/2022/11/index.html","750ef99a932913d2281d85e6b635c73e"],["/archives/2022/12/index.html","a34b25e3cca8e70438258da7521b0a5f"],["/archives/2022/index.html","f573ef4db385f5c614e76ded0c7ac237"],["/archives/2022/page/2/index.html","242b93453e9219969a654afb324ebe39"],["/archives/2022/page/3/index.html","d6796b686b2e6ffec1c475bfc9b0c102"],["/archives/2022/page/4/index.html","8b10cbe885c51046f2a649dc83b8be23"],["/archives/2023/01/index.html","f81b6774cd0816f9b641e52d6461fa2d"],["/archives/2023/index.html","f81b6774cd0816f9b641e52d6461fa2d"],["/archives/index.html","489105567e4a0ba1ffa8e110698b3124"],["/archives/page/2/index.html","982aa78d863a47b11978a3048d753d1c"],["/archives/page/3/index.html","9bfc6d9f24b52a3a866fd7bae5875acc"],["/archives/page/4/index.html","5fe15d42ac9aa1f8810790811d96ca77"],["/categories/C-Study/index.html","866878d9e611f090bc1bfb3d1c1356c6"],["/categories/EveryDay/index.html","024845e9399ed970b0826e958a24702e"],["/categories/Novels/index.html","e3bcf8ab6c978dba71c228022662f5c5"],["/categories/Other/index.html","cdc85a0ffb3ed4c7d91d7f193554b429"],["/categories/Unity-Study/index.html","1116b5fb380e07136fc3762eec312a82"],["/categories/Unity-Study/page/2/index.html","99409c7ecf8062e2cb729f2d69de6962"],["/categories/index.html","ebd879ae9876a35335c3621b4dee999e"],["/css/white.css","f5bed7c0c4a041aa04764a28c701109d"],["/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/js/search.js","f594f538c7deead068ffda84ccac4ae2"],["/js/tocbot.min.js","ce85a759d6c5f4e42aae4ff539d97735"],["/js/white.js","a9f604f362c1190098a3e701fe5a5955"],["/page/2/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/3/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/4/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/sw-register.js","5f9b2edbd902dd79069f4585265425a0"],["/tags/index.html","5052fa2a0c5b917d0c56ba4492887a2c"]];
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
