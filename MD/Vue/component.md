组件化原因: 提升开发效率, 方便复用, 简化调试步骤, 提升项目维护性, 便于协作开发

为什么不建议使用$parent, $children, $root, 耦合度过高

eventBus --- 发布订阅模式

就是emit和on的方法使用

```js
class Bus {
  constructor
}
```
$children, 只有自定义组件, 不能保证顺序
$refs, 可以引用元素
$attrs, 不是props的特性, 跨组件传递, 隔代传递
$listeners,

```js
// 不是响应式 
export default {
  provide () {
    return {
      aaaa: 'aaa'
    }
  },
  inject: ['aaaa'],
  inject: {
    from: 'aaaa'
  }
}
```



