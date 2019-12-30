## 注册

我们可以使用浏览器自带 api 实现 serviceworker 的注册

在根目录先创建一个 `sw.js` 文件

```bash
touch sw.js
echo "console.log('sw register success')" > ./sw.js
```

在一个空 html 文件里面写

```html
<script>
	if (navigator.serviceWorker) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('path/to/sw.js')
        })
    }
</script> 
```

然后执行 live-server 或者任意一个服务器, **serviveWorker 是不能脱离服务器的**

浏览器 console 里面如果有输出就代表注册成功



## WorkBox

workbox 个人了解相当与封装, 制定了统一的 API

可以使用这个代码来获取 wrokbox

```js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')
```

然后我们可以进行我们的资源管理, 在一个请求发出之前, 我们可以**决定这个资源是在缓存中取还是进行网络请求**

```js
workbox.routing.registerRoute(
    /\.js$/, 
    /*...*/
    new workbox.strategies.NetworkFirst()
)
```



## Handler 有以下几种

| 策略                 | 效果                                                         |
| -------------------- | ------------------------------------------------------------ |
| staleWhileRevalidate | 当请求的路由有对应的 Cache 缓存结果就直接返回，在返回 Cache 缓存结果的同时会在后台发起网络请求拿到请求结果并更新 Cache 缓存，如果本来就没有 Cache 缓存的话，直接就发起网络请求并返回结果 |
| networkFirst         | 网络优先的策略                                               |
| cacheFirst           | 直接从 Cache 缓存中取得结果，如果 Cache 缓存中没有结果，那就会发起网络请求，拿到网络请求结果并将结果更新至 Cache 缓存，并将结果返回给客户端 |
| networkOnly          | 强制使用正常的网络请求                                       |
| cacheOnly            | 直接使用 Cache 缓存的结果                                    |