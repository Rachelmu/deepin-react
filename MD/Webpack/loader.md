一个 loader 只做一件事情, 容易维护, 也可以搭配做不同的事情



```js
module.exports = function (source) {
    return getLayoutHtml().replace('{{__content__}}', source)
}
```

