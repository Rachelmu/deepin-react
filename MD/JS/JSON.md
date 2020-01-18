## JSON 方法

### JSON.stringfiy

value: 必须, 需要转换的 JS 值

replacer: 如果 replacer 为函数, 则 JSON.stringify 将调用该函数, 并传入每个成员的键和值. 使用返回值而不是原始值. 如果此函数返回 undefined, 则排除成员. 根对象的键是一个空字符串：""

如果 replacer 是一个数组, 则仅转换该数组中具有键值的成员. 成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时, 将忽略 replacer 数组.

space: 缩进

**会删除函数 key, 不能存储 Date 对象(可以再转化回来), 不能转换 value 为 undefined 的 key**



### JSON.parse

value: 必须, 有效的 JSON 字符串

reviver: 转化函数, 对于每一个 key 都执行一次