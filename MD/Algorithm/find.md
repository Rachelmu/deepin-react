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

## 二叉搜索树查找

```js
const find = (head, t) => {
    while (head) {
        if (head.val > t) {
            head = head.left
        } else if (head.val < t) {
            head = head.right
        } else {
            return head
        }
    }
    return null
}

const findMax = head => {
    while (head) {
        head = head.right
    }
    return head
}

const treeInsert = (head, t) => {
    if (!head) {
        head = new TreeNode(t)
    } else if (x < head.val) {
        head.left = treeInsert(head.left, t)
    } else if (x > head.val) {
        head.right = treeInsert(head.right, t)
    }
    return head
}

const treeDelete = (head, t) => {
    
}
```