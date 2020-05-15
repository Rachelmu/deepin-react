## 文件系统

```js
const fs = require('fs')
```



## 异步读取文件

```js
fs.readFile('path/to/file', (e, result) => {
    console.log(result) // 一下子读取完毕
})
```



## 打开文件

```js
fs.open('path/to/file', flags, mode, callback)
```

| r    | 以读取模式打开文件。如果文件不存在抛出异常。           |
| ---- | ------------------------------------------------------ |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。           |
| rs   | 以同步的方式读取文件。                                 |
| rs+  | 以同步的方式读取和写入文件。                           |
| w    | 以写入模式打开文件，如果文件不存在则创建。             |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。       |
| w+   | 以读写模式打开文件，如果文件不存在则创建。             |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以追加模式打开文件，如果文件不存在则创建。             |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。         |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

```js
const fs = require('fs')

fs.open('path/to/file', 'r+', (err, fd) => {
    if (err) {
        throw new Error(err)
    }
    console.log('文件打开成功')
})
```



## 写入文件

```js
fs.writeFile('file', 'data', 'options', 'cb')
```

| 参数    | 意义                                                         |
| ------- | ------------------------------------------------------------ |
| file    | 文件名                                                       |
| data    | 要写入的数据                                                 |
| options | 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w' |
| cb      | 回调函数                                                     |



## 读取文件

```js
fs.read('fd', 'buffer', 'offset', 'length', 'position', 'callback')
```

| 参数名   | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| fd       | fs.open 的返回值                                             |
| buffer   | 数据写入缓冲区                                               |
| offset   | 缓冲区写入偏移量                                             |
| length   | 要读取的字节数                                               |
| position | 文件起始位置, 如果 position 的值为 null, 则会从当前文件指针的位置读取 |
| callback | 回调函数, 三个参数数err, bytesRead, buffer, err 为错误信息, bytesRead 表示读取的字节数, buffer 为缓冲区对象 |

```js
const fs = require('fs')
const buf = Buffer.alloc(1024)

// 打开文件
fs.open('path/to/file', 'r+', (err, fd) => {
   if (err) {
       return console.error(err)
   }
   console.log("文件打开成功！")
   console.log("准备读取文件：")
   fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if (err) {
         console.log(err)
      }
      console.log(bytes + " 字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString())
      }
   })
})
```





---

一个英文字符占用一个字节, 一个中文字符占用三个字节