## 解决了什么问题

解决了**组件树**之间传递 props 的方法

比如

```jsx
const Button = props => <button>{props.name}</button>
// 这个 name 需要展示出来

const Wrapper = props => <Button name={props.name}></Button>
// 然而 wapper 也不能提供, 只能从自己的 props 取

const App = props => <Wrapper name='Jeden'></Wrapper>
// 这个 props 经过了 app, wrapper, 到 button, 这只是三层, 更多的呢...
```

这时候就用到了 Context

## 用法

```jsx
import React, { createContext } from 'react'

const NameContext = createContext('jeden') // 参数是默认值

const App = props => (
    <NameContext.Provider name='jeden2'>
    	<Wrapper />
        这样, props 可以一直一直一直传递下去
    </NameContext.Provider>
)
```

但是这样会让组件复用性变得很差.... 需要谨慎使用 !!!

还有一种解决方案, 就是 组件提升, 然后把组件一层一层的传递下去, 但是也不是完美的解决方法...
