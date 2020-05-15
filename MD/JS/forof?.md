```js
Object.prototype[Symbol.iterator] = function() {
    let _this = this
    let index = 0
    let length = Object.keys(_this).length
    return {
        next:() => {
            let value = _this[index]
            let done = (index >= length)
            index++
            return {value,done}
        }
    }
}
```

对象没有 Symbol.iterator ,可以按照上面的添加