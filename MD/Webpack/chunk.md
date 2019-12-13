webpack打包出来的文件

```js
(function (modules) {
    const installedModules = {} // 缓存, 如果这个模块加载过, 不需要再次加载
    
    function _webpack_require_ (moduleId) { // webpack 自己实现的 require
        if (installedModules[moduleId]) {
            return installedModules[moduleId]
        }
        
        const module = installedModules[moduleId] = {
            i: moduleId,
            l: false, // loaded
            exports: {
                
            }
        }
        
        modules[moduleId].call(module.exports, module, module.exports, _webpack_require_)
        
        module.l = true
        
        return module.exports
    }
})({
    "path/to/module": (function (module, exports, _webpack_require_) {
        // ...
    })
})
```

