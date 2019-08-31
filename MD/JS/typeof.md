## 自己手写 typeof

原生 typeof 对于简单数据类型是可以准确判断的, 但是对于引用类型除了 function 其他均会返回 object

所以我们可以自己实现一个 typeof

```js
function myTypeof(item) {
  if (typeof item !== 'object') return typeof item
  return Object.toString.call(item).slice(8, -1).toLowerCase()
} // 这样基本可以精确判断数据类型
```

## Object.prototype.toString

那这个神奇的函数有多少种返回值呢😁

我们试一下

```js
let toString = e => Object.prototype.toString.call(e)

toString('') // [object String]
toString([]) // [object Array]
toString({}) // [object Object]
toString(/./) // [object RegExp]
toString(12) // [object Number]
toString(Symbol('1')) // [object Symbol]
toString(new Set()) // [object Set]
toString(new Map()) // [object Map]
toString(arguments) // 函数内部[object Arguments]
toString(Math) // [object Math]
toString(new Date()) // [object Date]
toString(function () {}) // [object Function]
toString(() => {}) // [object Function]
```

感叹一句, nb !