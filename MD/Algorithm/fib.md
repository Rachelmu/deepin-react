## 简单实现


```js
const fib = num => {
  if (num === 1 || num === 2) return 1
  return fib(num - 1) + fib(num - 2)
}

```

## 高级实现

```js
const helper = (memo, num) => {
  if (num === 1 || num === 2) return 1
  if (memo[num]) return memo[num]
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2)

  return memo[n]
}

const fib = n => {
  if (n < 0) return 0
  const memo = Array(n - 1).fill(0)
  return helper(memo, n)
}

```

