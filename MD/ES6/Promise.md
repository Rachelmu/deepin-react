## 为什么

Promise 的出现意在解决深度回调嵌套问题

## 使用

```js
let pro = new Promise((resolve, reject) => {
    // 异步操作
    // 比如
    setTimeOut(() => {
        resolve(10)
    }, 1000)
    
})


pro.then(result => {
    console.log(result)
}, e => throw e)
```

Promise 有三个状态, pending, resolve, reject



## Promise 的函数

### Promise.all

> 参数是一个 Promise 数组(如果有的 item 不是 Promise 的实例, 用 Promise.resolve 包裹), 全部执行完毕, 如果成功, 把结果传入一个数组
>
> 如果有 reject 的则把第一个 reject 的原因返回
>
> 执行的过程是同步的

```js
let pro = Promise.all([Promise.resolve(1), Promise.resolve(2)])

// 自己实现
Promise.myAll = arr => new Promise((resolve, reject) => {
    let result = []
    arr.forEach(item => {
        if (!item instanceof Promise) item = Promise.resolve(item)
        item.then(v => {
            result.push(v)
            if (arr.length === result.length) resolve(result)
        }, e => {
            reject(e)
        })
    })
    
})
```

### Promise.race

> 参数是一个数组, 只要有一个改变状态, 就返回那个结果
>
> 执行过程是异步的

```js
let pro = Promise.race([Promise.resolve(1)])

// 自己实现
Promise.myRace = (arr, time) => new Promise((resolve, reject) => {
    setTimeOut(() => {
        resolve()
    }, time)
    arr.forEach(pro => pro.then(v => resolve(v), e => reject(e)))
})
```

### Promise.allSettled(2020引入)

> Promise 数组都改变状态才结束, 并且返回对象数组, 包括状态和成功的结果或者失败的原因

```js
let pro = Promise.allSettled([Promise.resolve(1), Promise.reject(2)])
pro.then(v => {
    console.log(v)
    // 结果是
    [
        {status: 'fullfilled', value: 1},
        {status: 'rejected', reason: 2}
    ]
})

// 自己写
Promise.myAllSettled = arr => new Promise((resolve, reject) => {
    arr.forEach(item => {
        if (!item instanceof Promise) item = Promise.resolve(item)
        item.then(v => {
            result.push({
                status: 'fullfilled',
                value: v
            })
        }, e => {
            result.push({
                status: 'rejected',
                reason: e
            })
        })
    })
    
})
```

### Promise.any(提案)

> 等到第一个变为 fullfilled

Promise.any()`跟`Promise.race()`方法很像, 只有一点不同, 就是不会因为某个 Promise 变成`rejected状态而结束.

