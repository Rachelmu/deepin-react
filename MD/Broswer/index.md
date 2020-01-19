## 目录

1. [缓存](./cache.md)
2. [垃圾回收](./gc.md)





## 基本

### EventLoop 事件环

JS在执行时会有执行环境, 这些执行环境会按规则加入到执行栈中,如果遇到异步代码,则挂起到task中,如果执行栈为空,就会从task里面取出异步代码执行

- 宏任务:`script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering`
- 微任务:`process.nextTick` ，`promise` ，`Object.observe` ，`MutationObserver`

先执行同步代码`宏任务`，然后微任务，然后宏任务

```js
1. 函数入栈，当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空
2. 此期间WebAPIs完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）
3. 执行栈为空时，Event Loop把微任务队列执行清空
4. 微任务队列清空后，进入宏任务队列，取队列的第一项任务放入Stack(栈）中执行，回到第1步
```



### 浏览器渲染机制

浏览器渲染分为以下几个步骤

1. 处理html构建DOM树
2. 处理CSS构建CSSOM树
3. 将DOM和CSSOM合并为一个渲染树
4. 根据渲染树布局,并计算元素位置
5. 调用GPU绘制,显示在屏幕上

注意事项:

1. 构建CSSOM树会阻塞渲染,并且CSSOM树的绘制十分消耗性能,越具体的选择器执行速度越慢,所以要保持扁平选择
2. 当HTML渲染到script标签时,会暂停构建DOM,JS解析完成后再从暂停地方开始,所以首屏想要更快,就别在首屏加载JS,



### 浏览器图层

了解过PS的都知道图片是一层一层堆积的,浏览器也是这样,并且图层越多性能越差

一行代码让chrome崩溃:

```css
body {
    transform:scale(10000)
}
```

以下几个属性可以生成新图层,慎用

- 3D变换: translate3D, translateZ, transform等
- will-change
- video, iframe 标签
- 通过动画实现的opacity转换
- position: fixed



### 重绘和回流的流程

1. 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
2. 然后判断是否有 `resize` 或者 `scroll` ，有的话会去触发事件，所以 `resize` 和 `scroll` 事件也是至少 16ms 才会触发一次，并且自带节流功能。
3. 判断是否触发了 media query
4. 更新动画并且发送事件
5. 判断是否有全屏操作事件
6. 执行 `requestAnimationFrame` 回调
7. 执行 `IntersectionObserver` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
8. 更新界面
9. 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 `requestIdleCallback` 回调。



### 如何减少重绘与回流

1. 使用translate代替top
2. 使用visibility代替display:none
3. 把DOM离线后修改(先设置为display: none, 然后修改完成后插入)
4. 不要把DOM节点属性放到循环里去
5. 尽量不要使用table布局
6. 实现动画,动画越快,回流次数越多,可以使用requestAnimationFrame
7. CSS 选择符从右往左匹配查找，避免 DOM 深度过深
8. 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 `video` 标签，浏览器会自动将该节点变为图层