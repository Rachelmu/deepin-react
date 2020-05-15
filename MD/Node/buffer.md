## 是什么

专门处理二进制的缓冲区, 不在 v8 里面, 不占用 v8 的内存

## 怎么用

先明白 Node 支持的字符格式

- ascii `7位的 ascii 编码, 迅速`
- utf8 `多字节的 unicode 编码格式`
- utf16le `小字节序编码的 Unicode 字符`
- ucs2
- base64
- latin1
- binary
- hex

## 创建 Buffer 类

- alloc(size, fill, encoding) `返回一个指定大小的 buffer 实例`
- allocUnsafe(size)
- allocUnsafeSlow(size)
- from(array)