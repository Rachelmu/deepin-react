## 如果是纯数字

```js
const flatArray = arr => arr.toString().split(',')
```

## 一般数组

递归解决

```js
const flatArray = arr => {
  let result = []
  for (let i = 0, len = arr.length; i < len; i ++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
```

## 最新解决方案

es6 新 flat 函数

```js
let arr = [1, 2, 3, 4, [5, 6, [7, 8]]]
let flatArr = arr.flat(2) // 参数表示展开几层, 如果不确定可以使用Infinity, 全部展开
```

