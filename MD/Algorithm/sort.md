排序的稳定性代表两个相等的元素相对顺序是否可能变化

## 快排

> 找到一个点, 大于的分为一组, 小于的分为一组, 递归处理, 最后连接起来
>
> 时间复杂度为 O(nlogn)
>
> 不稳定
>
> 和数据状况有关系, 很可能打偏了, 或者两个规模差太远这时候时间复杂度就会变得很差, 甚至为 O(n^2)

```js
// 经典快排
function quickSort(array) {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length -1)
  let right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

还有随机快排, 长期期望为 O(nlogn), 最常用的

## 冒泡排序

> 比较, 换位置
>
> 时间复杂度为 O(n^2)
>
> 稳定

```js
function bubbleSort(arr) {
    for (let end = arr.length; end > 0; end --) {
        for (let i = 0; i < end; i ++) {
            arr[i] > arr[i+1] && ([arr[i], arr[i+1]] = [arr[i+1], arr[i]])
        }
    }
    return arr
}
```



## 选择排序

> 每一次遍历都选择最小的放在已排序的后面
>
> 时间复杂度为 O(n^2)
>
> 不稳定

```js
function selectSort(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i ++) {
 		let minIndex = i
        for (let j = 0, j < len; j ++) {
            array[minIndex] > array[j] && (minIndex = j)
        }
        minIndex !== i && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]])
    }
    return arr
}
```



## 插入排序

> 把待排序元素插入到已排序序列中
>
> 时间复杂度 O(n^2)
>
> 稳定

```js
function insertionSort(arr) {
    for (let i = 0, len = arr.length; i < len; i ++) {
        let j = i
        let target = arr[j]
        while (j > 0 && arr[j-1] > target) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = target
    }
    return arr
}
```



## 桶排序

> 不是基于比较的排序

一个数出现多少次, 然后从低到高, 依次扔出来



## 堆排序

> 利用大根堆或者小根堆的特性, 每一次将堆顶取出的过程

