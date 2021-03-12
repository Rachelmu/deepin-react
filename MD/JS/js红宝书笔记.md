- let和const可以减少内存泄漏

  > 因为是块级作用域, 标记清除会提前介入回收内存空间

- let和const不会把变量泄漏到函数作用域顶部

- Object.freeze可以冻结对象, 不能赋值等操作

- v8在一次垃圾回收后, 会根据活跃的对象数量和增量确定下次的垃圾回收

- es6里面, 数组的空值会被遍历函数当做undefined, es5会被忽略

- array.fill接收参数(a, b, c) 使用a填充b-c

- js数组操作需要传入index的都是保留第一个, 不要最后一个

  - 比如[1, 2, 3, 4, 5, 6].slice(1, 3), 得到[2, 3], 保留索引为1, 2的, 不要3

- map和Obj对比

  - 内存占用, map比object少
  - 如果涉及大量插入, map较好
  - 查找速度obj较好
  - 删除操作map更好

- WeakMap是弱弱的拿着, 表示key可能会被回收, value不会

- typeof null 是 object, 但是 null instanceof Object 是报错的
- 

