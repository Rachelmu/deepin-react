## 二分查找

```js
const findIndex = (arr, target) => {
    if (!arr || !target) return -1
    let min = 0, max = arr.length
    
    while(min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (arr[mid] > target) {
            max = mid - 1
        } else if (arr[mid] < target) {
            min = mid + 1
        } else {
            return arr[mid]
        }
    }
    // 没找到返回 -1
    return -1
}
```

