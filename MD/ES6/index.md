## 目录

1. 模板字符串
2. let 和 const
3. 函数
   1. rest参数
   2. 参数默认值
   3. 箭头函数
   4. 尾调用优化
4. 对象的扩展
   1. Object.is()
   2. Object.assign()
   3. Object.keys()
   4. Object.values()
   5. Object.entries()
5. [解构赋值]()
6. [Symbol]()
7. [Set 和 Map](./set&map.md)
8. [Proxy 代理]()
9. [Reflect]()
10. [Promise]()
11. [迭代器]()
12. [async]()
13. [Class]()
14. [ES6 Module]()



### let 和 const

新的声明变量关键字, 有以下特性

- 不能重复声明
- 声明变量不会成为 window 的属性
- 没有变量提升, 会有临时死区的概念
- 有作用域的概念
- const 声明常量, 不能改变, 对象只能改变属性, const 确定的是内存地址

### 函数

#### 默认值

函数定义时, 可以这样

```js
function test(a = 1, b = 2) {
    
}
```

这样易读性很高, 一眼看出哪些参数可忽略

#### rest 参数

```js
function test(a, b, ...rest) {
    // rest 会当做数组传入
}
```

这样 arguments 差不多没有用啦

#### 箭头函数

新的函数声明方式, 有以下特性

- 写法: () => {}
- 没有 this, 箭头函数的 this 是最近层的非箭头函数的 this 决定的, 否则为 undefined
- 因为没有 this, 所以不能 new
- this 的决定表示在执行时, 而是定义时, 虽然可以调用 call, apply, bind, 但是 this 不会变
- 条件下可以省略括号或者花括号
- 不能使用 arguments
- 也不能作为 Generator 函数

基于这些特性, 当需要 this, 生成器, 则不应该使用箭头函数

#### 尾调用优化

```js
function a() {
    
}

function b() {
    // ...
    
    // 最后一行调用函数
    a() // 这就是尾调用, 不会压入执行栈, 所以尾递归可以防止栈压爆
}
```



### 解构赋值

很简单, 左边和右边结构一样, 即可完成, 方便实用

### Symbol

独一无二的值, 如果想要一样的 symbol, 可以使用 symbol.for()

如果要用 symbol 作为对象属性名的话, 要用中括号, 不能用 `.`

symbol.description() 获取symbol的描述, 就是创建 symbol 的参数



## 数组的扩展

### Array.from()

将一个类数组转化为数组

### Array.of()

主要用来弥补 Array 的不足, Array 的话, 一个数字参数传入代表数组长度, 一组则转为数组

### Array.find(), Array.findIndex()

参数是一个回调函数, 回调函数返回 true 则返回该元素

### entries()`，`keys()`和`values() 

用来遍历数组, 第一个可以遍历 key 和 value, 第二个可以遍历 key, 第三个则是 value

### include()

包括某个元素, NaN也可以正确识别

### sort()

小于10的数组用插入排序, 大于10则是快排



