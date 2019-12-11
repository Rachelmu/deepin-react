1. nodejs 是单线程应用, 但是 v8 引擎提供异步回调 API 通过这些接口可以实现大量并发, 所以性能很高
2. nodejs 几乎所有 API 都是支持回调函数的
3. nodejs 几乎所有机制都是根据 `观察者模式` 实现
4. 这个类似与进入死循环, 每一个事件都生成一个观察者, 事件完成后触发回调函数, 直到没有观察者后退出

## EventEmitter

```js
const EventEmitter = require('events').EventEmitter

let events = new EventEmitter()

events.on('XXX', () => {}) // 添加监听
events.addListener('XXX', () => {}) // 给某个事件添加监听
events.once('XXX', () => {}) // 只监听一次
events.removeListener('XXX', () => {}) // 删除监听
events.removeAllListeners('XXX') // 删除所有监听
```

自己尝试实现一个?

```js
class EventEmitter {
    constructor () {
        this.callbacks = []
    }
    
    on (name, callback) {
        let eventObj = {
            name,
            callback: [callback]
        }
        this.callbacks.push(eventObj)
    }
    emit (name) {
        this.callbacks.forEach(item => {
            if (item.name === name) {
                item.callback.forEach(item => item())
            }
        })
    }
    // ...
}
```



## Node的事件循环

六个阶段

```bash
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

#### timer

>  会执行setTimeout和setInterval, 一个 timer 指定的时间并不是到期时间, 而是达到这个时间后尽快进行回调

#### I/O

> 执行 I/O

#### Poll

> 这个阶段很重要, 系统会做执行到点的定时器, 执行 poll 队列中的事件, 当 poll 队列不为空, 会执行回调队列并同步执行, 如果 poll 队列 为空, 如果有 setImmediate 需要执行，poll 阶段会停止并且进入到 check 阶段执行 setImmediate
> 如果没有 setImmediate 需要执行，会等待回调被加入到队列中并立即执行回调

#### check

> 执行 setImmediate

#### closeCallback

>  执行 close 事件

举例

```js
const fs = require('fs')

function someReadFileAction(callback) {
    // 假设读取文件需要 95 毫秒
    fs.readFile('/path/to/file', callback)
}

const timeOut = Date.now()

setTimeout(() => {
    const delay = Date.now() - timeOut
    console.log(`已经等待了 ${delay}秒`)
}, 100)

someReadFileAction(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
})
```

定时器加入 timer 队列, 然后执行读取文件操作, 需要 95 毫秒, 这个操作完成后, 会立即执行回调, 需要 10 毫秒, 然后检查定时器是否超时, 如果超时就会去执行定时器回调, 这时已经过去了 105 毫秒, 所以定时器不是准确的