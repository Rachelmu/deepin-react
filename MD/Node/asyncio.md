解释下

异步 `cpu 执行后不会等待执行结果, 会进行其他调用, 等异步调用拿到结果后再继续这个调用`

同步 `cpu 会一直等待拿到结果`

阻塞 `与同步类似`

非阻塞 `会立即返回, 但不是结果, 需要轮询`

---

单线程导致

1. 无法利用多核 cpu
2. 遇到错误退出
3. 大量计算占用 cpu 时导致无法继续异步 IO

多线程则导致

1. 死锁问题
2. 状态同步问题

---

Node 则提供异步 IO 回调, 还有 child_process, 来更高效的利用 cpu

---

Node 自身是多线程的, 除了用户代码无法并行执行, Node 内部的 IO 是可以并行的

---

一直纠结的定时器的处理

定时器在执行时是被放入观察者内部的红黑树中, 每一次 Tick 执行, 都会从这里迭代取出定时器对象查看是否超时, 如果超时就形成一个事件, 这个事件立即执行, **定时器还会比较浪费性能, 因为动用红黑树**

---

Node 中如果想要立即异步执行一个任务, 使用 process.nextTick 而不是 setTimeout(() => {}, 0), setTimeout因为使用红黑书, 所以比较浪费性能, 而前者则轻量

---

Node 通过主循环 + 事件触发来实现异步

---

nginx 改为了事件驱动模式处理请求, Apache 还是每线程每请求

事件驱动少了创建线程, 销毁线程的开销, 同时上下文通讯方便, 所以会很高效


