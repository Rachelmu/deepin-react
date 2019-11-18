## 基本使用

### 相较于传统开发

- 组件化思想
- 数据驱动视图
- 虚拟DOM高效更新

## 组件

组件声明有两种形式, 一种是 class, 另一种是 function

### Class

```jsx
import React, { Component, Fragment } from 'react'

class Comp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      // 你的组件私有数据
    }
    // 其他的一些组件初始化操作
  }
  
  // 生命周期函数
  // 挂载阶段
  componentWillMount() {} // 组件即将挂载, 不常用, 16版本删除
  // render()
  componentDidMount() {} // 组件完成挂载, 一般ajax请求会在这个函数内部执行, 并且此时可以访问DOM
  
  // 更新阶段
  componentWillReceiveProps(nextProps) {} // 组件即将接受新的Props, 16弃用
  shouldComponentUpdate(nextProps) {} // 组件是否需要更新, 因为react里面如果父组件更新, 子组件即使数据没有变化也会触发更新, 我们可以通过这个函数控制组件更新, 返回false阻止更新, 可以提升应用的性能
  componentWillUpdate() {}
  // render()
  componentDidUpdate(prevProps, prevState) {} // 组件更新完毕, 可以操作最新的DOM, 两个参数分别是之前的props和state
  
  componentWillUnmount() {} // 组件即将取消挂载, 在这个函数里面取消一些异步方法
  
  render() {
    // 可以进行一些赋值操作
    
    return (
      <Fragment>
      	Hello World
      </Fragment>
    )
  }
}
```

16版本增加了 Fiber 架构最新的生命周期函数

```js
// ...
class Comp extends Component {
  // ...
  static getDrivedStateFromProps(props, state) {
    // 在组件创建和更新时的render方法之前调用, 需要返回一个对象来更新状态, 返回 null 则不进行更新
  }
  
  getSnapShotBeforeUpdate(prevProps, prevState) {
    // 调用于更新之前, 返回结果会传给 componentDidUpdate, 可以获取更新之前的状态以供更新后使用
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    // 不多说了..
  }
}
```

### Function

如果不考虑 hooks 的话, 函数组件和 class 组件相比是没有 **生命周期函数, 自身状态(state), this**

但是函数组件更高效

````jsx
import React, { Fragment } from 'react'

const Comp = props => {
  // ...
  return (
  	<Fragment>
      {/* props...*/}
    </Fragment>
  )
}
````

## Hooks是什么

hooks 是 React 提供的最新组件方案, **注意: Hooks在class组件内部是不起作用的**

上面说到 function 没有 的特性, 除了 this, 我们均可以使用 hooks 来模拟

```jsx
import React, { Fragment, useState, useReducer, useEffect } from 'react' // 三大基础 hook

const Comp = props => {
  let [count, changeCount] = useState(0)
  
  return (
  	<Fragment>
    	{count}
      <button onClick={() => {changeCount(count + 1)}}>+1</button>
    </Fragment>
  )
}
```

...updating

## Ref

> ref 是 react 提供给我们的获取真实 DOM 的 API

使用示例

```jsx
import React, { Component, Fragment, createRef } from 'react'
class Comp extends Component {
  constructor (props) {
    super(props)
    
    this.inputRef = createRef()
  }
  
  componentDidMount () {
    let inputBox = this.inputRef.current // 必须有current
    // ...
  }
  
  render () {
    return (
    	<Fragment>
      	<input ref={this.inputRef}/>
      </Fragment>
    )
  }
}
```

## redux











## react-router





## mobx

