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

