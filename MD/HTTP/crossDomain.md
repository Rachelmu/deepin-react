## 跨域方式

### jsonp

> 利用 script 标签 src 属性没有同源策略限制的特性来实现跨域
>
> 通过将前端方法作为参数传递给后端, 然后由服务器注入后返回, 实现服务器端向客户端的通信
>
> 只能使用 get 方法

jsonp简单版本的实现

```js
function jsonp(req) {
  let script = document.creteElement('script') // 创建script标签
  let url = req.url + '?callback=' + req.callback.name // 拼接参数
  script.url = url // 设置url属性
  document.getElementsByTagName('head')[0].appendChild(script) // 加入script标签
}
```

使用

```js
function hello(res){
    alert('hello ' + res.data);
}
jsonp({
    url : '',
    callback : hello 
})
```



### CORS





### websocket





### nginx 反向代理

> 因为同源策略是针对浏览器的, 服务器并没有这一限制