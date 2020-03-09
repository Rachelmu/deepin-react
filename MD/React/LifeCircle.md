在挂载过程

constructor ---> componentWillMount ---> render ---> componentDidMount

更新过程

- props `componentWillReceiveProps ---> shouldComponentUpdate ---> componentWillUpdate ---> render ---> componentDidUpdate`
- state  `shouldComponentUpdate ---> componentWillUpdate ---> render ---> componentDidUpdate`

卸载过程

componentWillUnmount ---> 卸载

## constructor

组件的初始化操作, 设置 state 等

## componentWillMount

1. 用的不多, 在服务端渲染的时候会使用
2. 代表已经初始化但是还未调用 render `不能访问 DOM` 的时候

## render

渲染 DOM

## componentDidMount

1. 组件完成挂载, DOM 渲染完成
2. 一般异步调用在这里完成

---

更新阶段

## componentWillReceiveProps(nextProps)

1. 拿到 nextProps, 和 this.props 对比
2. 拿到差异后设置 state, 开始更新

## shouldComponentUpdate(nextProps, nextState)

1. 接受两个参数, 下一个 props, 下一个 state
2. 主要用于组件性能优化
3. return false 可以阻止 组件更新

## componentWillUpdate(nextProps, nextState)

上一个返回 true 以后, 进入这个流程, 同样可以拿到下一个 props 和 state

## componentDidUpdate(prevProps, prevState)

可以拿到**之前的 state 和 props**

## render

---

卸载阶段

## componentWillUnMount

解除一些更新调用, 订阅...



在 react 16 里面 新增两个生命周期

- static getDrivedStateFromProps(nextProps, nextState)
  - 替代 componentWillMount, componentWillReceiveProps
- getSnapShotBeforeUpdate(prevProps, prevState)
  - 替代 componentWillUpdate

## static getDrivedStateFromProps(nextProps, prevState)

- 禁止访问 this.props
- 旨在用下一个 props 更新现在的 state
- 每一次更新都会调用

## getSnapShotBeforeUpdate(prevProps, prevState)

- 返回值作为第三个参数传入 componentDidUpdate
- react 开启了 fiber 以后, 导致 render 时候读取到的 state 并不一定总是和 commit 阶段相同
- 这个在最终的 render 之前调用, 这就保证了和 componentDidUpdate 中的DOM状态一致



## 总结

**在stack reconciler下, DOM的更新是同步的也就是说, 在virtual DOM的比对过程中, 发现一个instance有更新, 会立即执行DOM操作**

因为 fiber 架构, 组件更新的时候是会被 优先级高的 打断的, 这就导致 componentWillUpdate 中对比的数据