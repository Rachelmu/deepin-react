## Hash 函数

- 接受一个参数, 返回一个 hash code
- 输出域是一样的
- 当输入参数固定, 输出一定一样
- 输入不同, 输出可能一样(hash 碰撞)
- 很多不同输入, 将均匀的出现返回值

比如输入域为 0 - 99, 输出为 0 - 2, 则 99 个不同样本, 则可能有 33 个挂在 0, 33 个挂在 1, 33 个挂在 2

- 还可以用来打乱输入规律

- hash 函数拼出的 16 位每一位都是独立的



hash会扩容, 当数据链超过 一个数 的时候, 需要扩容, 离线扩容, 所以真的可以很快

增删改查为 O(1) `严谨的说其实不是的`



### 设计 RandomPool 结构

insert 做到不重复加入, delete, 某个 key 删除, getRandom 等概率返回一个 key

```js
class RandomPool {
    constructor() {
        this.map1 = {} // key => num
        this.map2 = {} // num => key
        this.size = 0
    }
    
    put (key) {
        this.map1.key = this.size
        this.map2[this.size] = key
        this.size++
    }
    
    getRandom () {
        if (this.size === 0) return null
        let randomNum = Math.floor(Math.random() * this.size)
        return this.map2[randomNum]
    }
    
    delete (key) {
        // 有洞的拿最后一个去填那个洞, 然后删除最后一个属性
        let deleteNum = this.map1[key] // 拿到删除对应的 num
        let lastKey = this.map2[this.size - 1]
        let lastNum = this.map1[lastKey]

        this.map1[lastKey] = deleteNum

        this.map2[deleteNum] = lastKey

        delete this.map2[lastNum]
        delete this.map1[key]
        this.size--
    }
}
```



