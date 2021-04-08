```js
const reverseList = head => {
    if (!head) return null
    let cur = head, prev = null
    while (cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
}
```