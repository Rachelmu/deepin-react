## 浅拷贝

### 数组

我们可以使用数组的一些特性来实现数组的浅拷贝

```js
let targetArr = [1, 2, [3, 4, [5, 6]]]
let arr = targetArr.slice() // 仅仅拷贝第一层
let arr = [...targetArr]
let arr = targetArr.concat()
```

对象的浅拷贝就更容易实现了, 直接把 keys 直接取出来, 一个个赋值即可

手撸一个

```js
const shallowClone = obj => {
  if (!obj || typeof obj !== 'object') return
  let result = obj instanceOf Array ? [] : {}
  for (let key in obj) {
    result[key] = obj[key] // 只需要拷贝一层
  }
}
```



## 深拷贝

手撸一个

```js
const deepClone = obj => {
  if (!obj || typeof obj !== 'object') return
  let result = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return result
}
```

考虑循环引用
> 使用map保存访问过的对象, 如果复制过了, 就直接取值
```js
function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj
  if (hash.has(obj)) return hash.get(obj)
  const target = Array.isArray(obj) ? [] : {}
  hash.set(obj, target)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(obj[key])) target[key] = deepClone(obj[key])
      else target[key] = obj[key]
    }
  }
  return target
}
```