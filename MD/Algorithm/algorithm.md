

## KMP 算法

> str1 和 str2 是两个字符串, 看 str1 是不是str2 的一部分

子序列和子串, 子串必须连续

getIndexOf 就是 KMP 的实践 `O(n)`



第一个解决办法

```js
const match = (str1, str2) => {
    if (!str1 || !str2) return -1
    if (str1.length < str2.length) return -1
    for (let i = 0, len1 = str1.length; i < len1; i++) {
        if (str1[i] === str2[0]) { // 找到了头部, 开始匹配
            for (let j = 0, len2 = str2.length; j < len2; j++) {
                if (str1[i + j] === str2[j]) {
                    if (j === len2 - 1) return [i, j]
                } else {
                    break
                }
            }
        }
    }
} // O(n * m)
```

这是很慢的,因为每一次比较都是独立的

kmp 让之前的匹配指导以后的匹配

每一个位置的最长前缀和最长后缀

完整代码 + 注释

```typescript
const getNextArr = (str:string):Array<number> => {
    if (str.length === 1) return [-1]
    let next:Array<number> = []
    next.length = str.length
    next[0] = -1; next[1] = 0
    let i:number = 2, cn:number = 0
    while (i < str.length) {
        if (str[i - 1] === str[cn]) {
            next[i++] = ++cn
        } else if (cn > 0) {
            cn = next[cn]
        } else {
            next[i++] = 0
        }
    }
    return next
}


const getIndexOf = (str1:string, str2:string):number => {
    // 寻找 str2 在 str1的位置
    if (!str1 || !str2 || str1.length < 1 || str1.length < str2.length) return -1
    let i1:number = 0, i2:number = 0 // 两个字符串的下标
    const next = getNextArr(str2) // 得到 next 数组
    while (i1 < str1.length && i2 < str2.length) {
        if (str1[i1] === str2[i2]) {
            i1 ++
            i2 ++
        } else if (next[i2] === -1) {
            // 这个表示开头配不上, str1换位置
            i1 ++
        } else {
            i2 = next[i2]
        }
    }
    return i2 === str2.length ? i1 - i2 : -1 // 如果str2已经划过了str1, 则表示匹配成功
}
```

**详解**

甲字符串为 abcabcdabcabca

乙字符串为 abcabca `最长前缀数组为 [-1, 0, 0, 0, 1, 2, 3]`

开始匹配, 我们可以发现到 d !== a

这时候, 获取最长前缀位置为 6 是 3, 就是拿着第四个字符 a 去匹配 d

KMP 没有否定从 d 开始能不能匹配出乙字符串

但是直接否定了 **a 到 c**之间的字符(就一个 b)是不可能匹配出来乙字符串的, 本质上就是这样加速的过程

## Manacher

> 一个字符串找到最长回文子串

暴力解, 有奇数和偶数的问题, 可以插入特殊字符解决

比如 1221,  插入完成后, #1#2#2#1#, 找到最长的除以2即可

```js
const longestReverse = str => {
    if (!str || str.length === 0) return 0
    str = '#' + str.split('').join('#') + '#' // 拼接字符串
    let result = 1,
        lengthArr = [],
        strArr = []
    for (let i = 0, len = str.length; i < len; i++) {
        let left = i - 1,
            right = i + 1,
            index = 1
        while (str[left] === str[right]) { // 往两边扩
            left--
            right++
            index += 2
        }
        strArr.push(str.slice(left, right).split('#').join(''))
        lengthArr.push(index)
    }

    console.log(strArr) // 保存了字符串
    return Math.floor(Math.max(...lengthArr) / 2) // 返回最长的
}
```



## BFRRT

> 找到(第几)最小值/最大值

分组 -> 排序 -> 