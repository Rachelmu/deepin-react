两个新的数据类型

---

## Set

> 不重复的一种集合

```js
let myset = new Set([1, 2, 3, 4])
```

### 方法

- add(v) 返回 set 本身
- delete(v) 返回布尔值, 是否删除成功
- has(v) 返回布尔值, 有没有
- clear() 清空

遍历操作

- keys() 返回键名遍历器
- values() 返回键值遍历器
- entries() 键值对的遍历器
- forEach() 使用回调函数遍历成员

## WeakSet

只能添加对象

不能遍历, 因为里面的 item 都是弱引用

没有 clear 方法

## Map

ES5 里面的对象的 key 只能是 string

ES6 解除这一限制, 可以使用 v -> v 的结构, 更完善的 hash 表的实现

### 方法

- set(key, value)
- has(key)
- get(key)
- delete(key)
- clear()

遍历方法

- keys()
- values()
- entries()
- forEach()



## WeakMap

- 只接受对象作为键名

WeakMap 的典型使用场合就是使用 dom 节点当作 key

```js
let myElement = document.getElementById('logo')
let myWeakmap = new WeakMap()

myWeakmap.set(myElement, {timesClicked: 0})

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement)
  logoData.timesClicked++
}, false)
```



