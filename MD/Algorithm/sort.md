## 快排

> 找到一个点, 大于的分为一组, 小于的分为一组, 递归处理, 最后连接起来
>
> 时间复杂度为 O(nlogn)

```js
function quickSort(array) {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length -1)
  let right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSodxrt(right)]
}
```



## 冒泡排序

> 比较, 换位置
>
> 时间复杂度为 O(n^2)

```js
function bubbleSort(arr) {
    for (let i = 0, len = arr.length; i < len; i ++) {
        for (let j = 0; j = len - 1; j ++) {
            arr[j] > arr[j+1] && ([arr[j], arr[j+1]] = [arr[j+1], arr[j]])
        }
    }
    return arr
}
```



## 选择排序

> 每一次遍历都选择最小的放在已排序的后面
>
> 时间复杂度为 O(n^2)

```js
function selectSort(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i ++) {
        let minIndex = i
        for (let j = 0, j < len; j ++) {
            array[minIndex] > array[j] && (minIndex = j)
        }
        minIndex !== i && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]])
    }
}
```

