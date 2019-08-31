# deepin-react

## React VS Vue

- React 更灵活
- Vue API多, 简单上手, 但灵活性低
- 复杂度高的可以用React比较好, `利于后期维护`
- 复杂度低则是 Vue 更棒



## React 优点

- 声明式开发: 数据驱动视图
- 与其他框架并存
- 组件化
- 单向数据流 子组件不能修改 props
- 视图层框架, 只提供数据驱动视图功能, 对于复杂的组件传值, 可以使用redux
- 函数式编程: 后期维护简单, 自动化测试的优越性

## React Ref

要获取input的value, 原生方法有`e.target.value`

React提供了Ref, 函数组件不能使用ref引用, 但是在函数组件内部可以引用ref

使用方法:

```jsx
// 类组件
import ..., { ccreateRef } from 'react'
class App ...{
    constructor (props) {
        super(props)
        
        let demoRef = createRef()
    }
    
    render () {
        return (
        	<Element ref={demoRef}>
            	Hello Jeden
            </Element>
        )
    }
}

// 函数组件
const App = (props) => {
    let demoRef = createRef()
    return (
    	<Element ref={demoRef}></Element>
    )
}
```



## React-transition-group





## React  最新生命周期函数

`Vue的是before...和...ed, React的是componentWill...和componentDid...`

在16版本, 因为 fiber 架构问题, 三个生命周期函数将被弃用:

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

取而代之的是:

- static getDrivedStateFromProps
- getSnapshotBeforeUpdate 和 componentDidMount

![img](../../assets/React-Life-circle.png)

## 新版本生命周期



### 生命周期函数讲解

- 父组件state发生变化, 会导致不需要渲染的子组件也会重新执行render函数, 子组件可以使用shouleComponentUpdate() `接收两个参数nextProps和nextState`可以用来对比判断是否需要更新
- 发送ajax请求会在componentDidMount()`因为只执行一次, 并且是最佳实践`内部, 如果写在render里面, 因为render会反复执行的



## Redux

可以看做一个图书馆

![img](../../assets/redux-flow.png)

**组件:** 借书的人

**Action Creators:** 要借什么书

**Store:** 图书馆管理员

**Reducers:** 图书馆记录本

### 基本使用

创建目录结构: redux> store.js, reducers.js

store.js 

```js
import { createStore } from 'redux';
import reducers from './reducers.js'

const store = createStore(reducers);

export default store;
```

reducers.js

```js
export default (store = { // 默认值
    inputValue: '',
    todoList: []
}, action) => { // action只是一个对象
    switch (action.type) {
        case '...':
            // ...
           	break;
        case '...':
            // ...
           	break;
    }
}
```

component.js

```jsx
// import React, store 部分代码, 具体可以看文件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState(); // 获取store的数据
        store.subscribe(this.handleStoreChange); // store变化时调用的函数
    }
    handleStoreChange = () => {
        this.setState(store.getState) // store变化时重新设置state
    }
    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
    handleInputChange (e) {
        let newValue = e.target.value;
        //if...
        let action = {
            type: 'change_input_value',
            value: newValue
        };
        store.dispatch(action);
    } 
}
```



补充:

- store是唯一的
- 只有store能改变自己的内容
- reducer必须是纯函数`固定的输入必有固定到输出, 且没有副作用`

### Redux-thunk

action默认只能是对象, 如果要对store进行异步操作, 比如获取数据, 就需要用到redux-thunk中间件

使用后action可以返回函数, 函内部包含异步操作

类似这样:

```js
export const init_list = () => {
    return (dispatch) => { // 可以接收一个参数, action.dispatch
        axios.get('localhost:8080/todo').then((data) => {
            const action = init_data(data.data);
            dispatch(action);
        })
    }
}
```

1. 引入 applyMiddleware
2. 引入thunk
3. applyMiddleware(thunk)

**??**

中间件:

![img](../../assets/redux-flow2.png)

中间件指action和store中间, 对dispatch方法的封装, 如果是函数, 就执行函数, 如果是对象, 直接传给store
