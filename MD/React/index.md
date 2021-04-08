## 目录



## 基本

1. [使用](./useage.md)
2. [生命周期](./LifeCircle.md)
3. [Context](./context.md)
4. [组件类型](./组件类型.md)



## 源码分析

1. [Redux 源码](./Redux源码.md)




## 新特性

1. [HOOK](./Hook.md)
2. [Fiber Frame](Fiber.md)
3. [React Suspense](Suspense.md)
4. ...



React-Router

switch独占路由, 只匹配第一个
redirect 重定向

router的匹配规则优先级children > component > child


React 17升级

- 事件委托改变了, 16绑定在document里面, 17放在root div里面
- onScroll不再冒泡
- useEffect 17异步执行, 16是同步的, 17使用useLayoutEffect同步执行
- memo和PureComponent很像