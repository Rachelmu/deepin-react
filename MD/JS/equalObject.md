## 重新定义相等

我们认为

- NaN === NaN
- [1] === [1]
- {v: 1} === {v: 1}

## 比较方法

### -0 和 +0

在 JS 里面

```js
+0 === -0 // true
(+0).toString() === (-0).toString() // true

-0 > +0 // false
-0 < +0 // false

// 但是二者还是不同的
1 / -0 // -Infinity
1 / +0 // Infinity
// 二者是不一样的
```

然后, 我们应该怎么区分呢

```js
function eq(a, b) {
  if (a === b) return a !== 0 || 1 / a === 1 / b // 多判断一层
  return false
}
```

###  NaN

利用其不相等自身的特性

```js
function eq(a, b) {
  if (a !== a) return b !== b
}
```

### 对象的比较

直接比较肯定不行的, 但是我们可以使用**隐式类型转换**

```js
'Jeden' === new String('Jeden') // false
'Jeden' + '' === new String('Jeden') + '' // true
```

其他对象一样的思想

除了Number .... 还是因为NaN

所以改成这样

```js
function eq(a, b) {
    // 判断 Number(NaN) Object(NaN) 等情况
    if (+a !== +a) return +b !== +b
    // 其他判断 ...
}
```

## 最终版本

```js
const toString = Object.prototype.toString

// 开始
function eq(a, b, aStack=[], bStack=[]) { // stack表示循环引用的栈
  if (a === b) return a !== 0 || 1 / a === 1 / b // 区分 -0 和 +0
  if (a == null || b == null) return false // 如果走到这一步还有null, 就返回false
  if (a !== a) return b !== b // 判断NaN
  let aType = typeof a, bType = typeof b
  if (aType !== 'function' && aType !== 'object' && bType != 'object') return false // type不一样就返回 false
  return deepEq(a, b, aStack, bStack)
	function deepEq(a, b, aStack, bStack) {
    let aClassName = toString.call(a), bClassName = toString.call(b)
    if (aClassName !== bClassName) return false
    switch (className) {
      case '[object RegExp]':
      case '[object String]':
        return '' + a === '' + b;
      case '[object Number]':
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        return +a === +b;
    }
    let isArrays = aClassName === '[object Array]'
    if (!isArrays) {
      if (typeof a !== 'object' || b !== 'object') return false
      let aCtor = a.constructor, bCtor = b.constructor
// aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
          return false
      }
    }
  }
  let aStack = aStack || [],
  bStack = bStack || [],
  length = aStack.length
  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b
    }
  }

  aStack.push(a);
  bStack.push(b);

  // 数组判断
  if (isArrays) {
    let length = a.length;
    if (length !== b.length) return false
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false
    }
  }
  // 对象判断
  else {
    let keys = Object.keys(a), key
    length = keys.length

    if (Object.keys(b).length !== length) return false
    while (length--) {

      key = keys[length]
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false
    }
  }

    aStack.pop();
    bStack.pop();
    return true;
}

```

