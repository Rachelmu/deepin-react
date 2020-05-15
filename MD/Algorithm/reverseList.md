```js
const reverseList = head => {
    if (!head) return null
    let cur = null, prev = head
    while (prev) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
}
```