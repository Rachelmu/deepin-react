模块引用

```js
const path = require('path')
```

模块导出

```js
module.exports = function (text) {
	console.log(text)
}
```

在 Node 中, 模块有两种, 一种是内部提供的核心模块, 另一种是文件模块(用户编写)

Node 模块是有缓存的, 增加效率

## Node 模块查找顺序

1. 核心模块
2. 相对路径模块
3. 绝对路径模块
4. node_modules

## 模块的编译

每一个 js 文件都会被 Node 编译为

```js
(function (exports, require, module, __filename, __dirname) {
  // 你的代码
  const path = require('path')
  exports = {
      // ...
  }
})
```

在每一个模块之间进行了隔离, 不污染全局

不能只把导出内容赋值给 exports, 而要给 modules.exports

**核心模块的编译过程**

1. 转化为C/C++代码  `v8 提供了 js2c.py`
2. 编译 js 核心模块 

