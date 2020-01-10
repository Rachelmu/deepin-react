## 随机池

```js
class RandomPool {
      constructor() {
        this.map1 = {} // key => num
        this.map2 = {} // num => key
        this.size = 0
      }

      put(key) {
        this.map1[key] = this.size
        this.map2[this.size] = key
        this.size++
      }

      getRandom() {
        if (this.size === 0) return null
        let randomNum = Math.floor(Math.random() * this.size)
        return this.map2[randomNum]
      }

      delete(key) {
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

    let pool1 = new RandomPool()


    pool1.put('jeden')
    pool1.put('jeden2')
    pool1.put('jeden3')
    pool1.put('jeden4')


```

## 荷兰国旗问题

> 要求不能申请额外的空间

```js
const swap = (arr, l, r) => {
    [arr[l], arr[r]] = [arr[r], arr[l]] // 利用 es6 的解构赋值
}

const partition = (arr, l, r, p) => { // l 和 r 分别代表左右边界
    let less = l - 1, more = r + 1
    // 定义两个区域, less 和 more
    while (l < more) {
        if (arr[l] < p) {
            swap(arr, ++less, l++)
        } else if (arr[l] > p) {
            swap(arr, --more, l)
        } else {
            l++
        }
    }
    return arr
}
```

