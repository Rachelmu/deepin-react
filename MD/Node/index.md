## 目录

1. [事件循环](./eventLoop.md)
2. [MongoDB](./MongoDB.md)
3. [模块化](./module.md)
4. [异步 IO](asyncio.md)













## Node 缺点

1. 单线程缺点
   1. 无法利用多核 cpu
   2. 遇到错误退出
   3. 大量计算占用 cpu 时导致无法继续异步 IO

## 遇到的问题

1. 跨域, 满足 options 请求, 设置 status 为 OK
2. 跨域设置自定义头部也需要允许
3. 数据传输格式, 如果x-www-from-urlencoded传输json, 会造成value全部为key的情况
4. 连接数据库, 创建连接池, 不是用一次连一次, 也不是只连接一个
5. 路由嵌套

接下来, cookie, session 等

---

Node 如何处理 err

我们平常所使用的try catch 因为只能捕捉同步代码而无效

Node 的处理就是**把 error 当作回调函数的第一个参数传入, 如果为空则表示正常**

---

## 事件队列

实现

```js
const EventEmitter = require('event').EventEmitter

const proxy = new EventEmitter()
let status = 'ready' // 状态初始设置

const select = cb => {
    proxy.once('selected', cb)
    if (status = 'ready') {
        status = 'pending'
        db.select('SQL or Other', result => {
            proxy.emit('selected', result)
        	status = 'ready'
        })
    }
}
```

### 设置跨域

```js
// 设置 cors 跨域需要预检请求, 可以进行的方法, 可包含的头部
app.all('*', function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*")
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
   res.header('Access-Control-Allow-Headers', 'Content-Type')
   res.header('Access-Control-Allow-Credentials', true)
   if (req.method === 'OPTIONS') {
     return res.send(http.STATUS_CODES['200'])
   }

   next()
})
```

**创建子进程的方法有哪些，简单说一下它们的区别**

创建子进程的方法大致有：

- spawn()： 启动一个子进程来执行命令
- exec(): 启动一个子进程来执行命令，与spawn()不同的是其接口不同，它有一个回调函数获知子进程的状况
- execFlie(): 启动一个子进程来执行可执行文件
- fork(): 与spawn()类似，不同电在于它创建Node子进程需要执行js文件
- spawn()与exec()、execFile()不同的是，后两者创建时可以指定timeout属性设置超时时间，一旦创建的进程超过设定的时间就会被杀死
- exec()与execFile()不同的是，exec()适合执行已有命令，execFile()适合执行文件