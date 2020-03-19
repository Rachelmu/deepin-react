比 ES5 寄生组合继承多了一步

```js
Child.__proto__ = Parent // 继承静态属性
Child.prototype.__proto__ = Parent.prototype
```

