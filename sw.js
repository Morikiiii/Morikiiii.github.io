/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/02/Csharp/Class专题（1）/index.html","eb9b6b750c48cca6c7619975f4744a42"],["/2022/09/02/Csharp/基础语法专题（1）/index.html","62d73db4ccf067adf09d7517365d46c0"],["/2022/09/02/Csharp/基础语法专题（2）/index.html","914864aaa27efe1072664cac6e7fcded"],["/2022/09/02/Novels/浅青色的女孩/index.html","344e0181548328c23e9a849e9c91cbcb"],["/2022/09/02/Other/hello-world/index.html","13dadaafaef73d21383cfadefdaf70d2"],["/2022/09/03/Csharp/Class专题（2）/index.html","c6d4805b6d2379dc177ab33ebb15e631"],["/2022/09/04/Csharp/设计模式专题/index.html","6e2fbd9c9d3e3d316c094a629ea14827"],["/2022/09/05/Csharp/IO操作专题/index.html","d5185f338d56a496bdc13aa0a2be004a"],["/2022/09/06/Csharp/数据结构/index.html","6bdf13b2ae80bf6529bfd15787db3569"],["/2022/09/06/Unity/Unity基础操作/index.html","65a140d9531173debab7a324b926f215"],["/2022/09/07/Unity/Unity组件思想/index.html","882759ec7256c7c45aef1c3cf5b5572d"],["/2022/09/08/Unity/Unity-2D部分/index.html","25fb74700084daa6b30eeb3d03c0cb1b"],["/2022/09/09/Unity/Unity-输入系统/index.html","c9210e206c23b2a4b06345c68b20edbb"],["/2022/09/10/Novels/死于新生/index.html","2a9c2b4cf1764dba0fde4d76e0b45bfa"],["/2022/09/10/Unity/Unity-UI系统(1)/index.html","6c8caf4f689033380f3c7bcf0f95a2df"],["/2022/09/10/Unity/Unity-UI系统（2）/index.html","cc9c644947a7c1c467a7f907cf7e4237"],["/2022/09/12/Unity/Unity-3D部分/index.html","c0755cb42c31090a55f96f50520cb104"],["/2022/09/12/Unity/Unity-动画系统/index.html","376c7922687908aadb5c7632dd31c463"],["/2022/09/12/Unity/Unity-渲染基础/index.html","87febf843720256e60c3107c5c813b9f"],["/2022/09/14/Unity/Unity-导航系统/index.html","375d23ab2c49a31a5bb0ef85379cce97"],["/2022/09/14/Unity/Unity-资源管理/index.html","01945a0b1619f43898b08d1717bc0c81"],["/2022/09/16/Other/Markdown-using/index.html","e987391236ed1aaa771f3f1f07a9de69"],["/2022/09/19/Novels/F-0025的第一人称缺失症候群/index.html","49489fd4fc252f7fcbcef75315c27976"],["/2022/09/20/EveryDay/2022-09/index.html","cbd487acf3ad2f6a0c0d6ccb39168fba"],["/2022/09/21/Csharp/自我补充（1）/index.html","0d9f0f1efddcb3a80e54c15d2ccc42df"],["/2022/09/24/Novels/舞/index.html","b1c4057a66832e525f338faa241f07ae"],["/2022/09/24/Unity/Flappy-Bird/index.html","83321697e7e352b1837a9d78a9ce72ed"],["/2022/10/01/EveryDay/2022-10/index.html","d1895fa5ffc8a8f01d700ab913186618"],["/2022/10/07/Novels/Some-Extract/index.html","749665d835ff861d3a974847b221aa9a"],["/2022/10/16/Unity/MMORPG/index.html","a8e45131f2309bfead182f88cdb63a94"],["/2022/11/01/EveryDay/2022-11/index.html","c4fd5be72304be4df6080ebf3bf02916"],["/2022/11/16/Unity/MMORPG-2/index.html","63e866731f98f2c224ef5b073c523aa9"],["/2022/12/01/EveryDay/2022-12/index.html","58da11aee7f8c9ae33e92e96ae7edbe0"],["/2022/12/07/Other/all-Problems/index.html","a2b2c3a8150ee7f78e9fa4306ba0d9d6"],["/2022/12/20/Novels/《乌鸦》reading/index.html","1361c7aeef1b3fb0f5407875750013e1"],["/2022/12/23/Novels/犯规/index.html","250e738763ce4bda4583734231907f93"],["/2023/01/01/EveryDay/2023-01/index.html","caac4cdc41d12f95018d39efb075fa0e"],["/2023/01/09/Other/Lua/index.html","8630f76cb49713c9cd67803548f0eae7"],["/2023/01/12/Unity/Unity-Xlua/index.html","d4d9fdc713e693506da83359f7918066"],["/2023/02/01/EveryDay/2023-02/index.html","5786abf7c90ee25c0d2f9eab440c1df6"],["/archives/2022/09/index.html","af2da39f866923e5c2f3ac58c10c1bfd"],["/archives/2022/09/page/2/index.html","0efafae047a45b61e39840779f612d54"],["/archives/2022/09/page/3/index.html","fb2cefb7386d8c89ad11c69f26f0b63e"],["/archives/2022/10/index.html","53d15db48864bda50c83adb404554117"],["/archives/2022/11/index.html","750ef99a932913d2281d85e6b635c73e"],["/archives/2022/12/index.html","a34b25e3cca8e70438258da7521b0a5f"],["/archives/2022/index.html","f573ef4db385f5c614e76ded0c7ac237"],["/archives/2022/page/2/index.html","242b93453e9219969a654afb324ebe39"],["/archives/2022/page/3/index.html","d6796b686b2e6ffec1c475bfc9b0c102"],["/archives/2022/page/4/index.html","8b10cbe885c51046f2a649dc83b8be23"],["/archives/2023/01/index.html","f81b6774cd0816f9b641e52d6461fa2d"],["/archives/2023/02/index.html","0146d7837338bcc601ebf1c6a7d4fa55"],["/archives/2023/index.html","c1bb3274fbb1586778cf3b4689437224"],["/archives/index.html","3acdf5893b4be7364d678385d5f50532"],["/archives/page/2/index.html","aaf866c0bbfe592b652bbc848933d2d8"],["/archives/page/3/index.html","b7d127842288e2ce1b5062496ab9b011"],["/archives/page/4/index.html","511f24df3ef1528b6e329524de7b12e5"],["/categories/C-Study/index.html","866878d9e611f090bc1bfb3d1c1356c6"],["/categories/EveryDay/index.html","9715d3debc3671201c37883532f5bfb3"],["/categories/Novels/index.html","e3bcf8ab6c978dba71c228022662f5c5"],["/categories/Other/index.html","cdc85a0ffb3ed4c7d91d7f193554b429"],["/categories/Unity-Study/index.html","1116b5fb380e07136fc3762eec312a82"],["/categories/Unity-Study/page/2/index.html","99409c7ecf8062e2cb729f2d69de6962"],["/categories/index.html","ebd879ae9876a35335c3621b4dee999e"],["/css/white.css","f5bed7c0c4a041aa04764a28c701109d"],["/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/js/search.js","f594f538c7deead068ffda84ccac4ae2"],["/js/tocbot.min.js","ce85a759d6c5f4e42aae4ff539d97735"],["/js/white.js","a9f604f362c1190098a3e701fe5a5955"],["/page/2/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/3/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/page/4/index.html","9c10897f3f56f547d3c054576fc2cbb9"],["/sw-register.js","fe28acae4baf777543c0bf975823833b"],["/tags/index.html","5052fa2a0c5b917d0c56ba4492887a2c"]];
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
