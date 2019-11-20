为什么 React 要有一个 Hooks

> 因为组件化思想就是考虑复用的, 但是当我们开发了大型项目, 想要去复用某个组件的时候, 却发现因为业务逻辑与功能逻辑藕合在一起而难以复用
>
> React 提出使用 UI 组件和 数据组件, 这样数据组件可以复用, 或者高阶组件, 但是这种方式会**增加我们的代码层级, 使我们的代码难以调试**
>
> 这时候, HOOK 横空出世, 我们可以使用 HOOK 去编写一个逻辑, 在整个项目中使用...

三个核心 hook

## useState

基本使用

```jsx
// import ...
import { useState } from 'react'

const Example = props => {
    const [count, setCount] = useState(0)
    
    return (
    	<Fragment>
        	<p>{ count }</p>
            <button onclick={() => {setCount(count + 1)}}>AddCount</button>
        </Fragment>
    )
}
```

我们发现, useState 可以结构赋值为一个基础值和操作值

而且, useState 是允许多次调用的, 也就是说我们可以有多个这样的状态



## useEffect

基本使用

```jsx
// import ...
import { useState, useEffect } from 'react'

const Example = props => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `You Click Me ${count} Times`
    })
    
    return (
    	<Fragment>
        	<p>{ count }</p>
            <button onclick={() => {setCount(count + 1)}}>AddCount</button>
        </Fragment>
    )
}
```

