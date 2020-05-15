## 目录

1. [webpack打包出的文件](./chunk.md)







## Base

### 基本配置

```js
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    entry: './src/index.js',
    // entry: {
    //    home: '...',
   	//    other: '...'
	// }
    
    output: {
        filename: [name].js,
        path: path.reslove(__dirname, 'dist')
    },
    
    module: {
        noParse: /jquery/, // 不解析
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                options: {
                    
                }
            }
        ]
    },
    
    resolve: { // 解析
        
    },
    
   	plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['home']
        }),
        // 配置多入口
        new HtmlWebpackPlugin({
            // ...
            chunks: ['other']
        })
    ],
    devServer: {
        before () {
            
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                reWrite: {
                    'api': ''
                }
            }, // 配置跨域
            
        }
    }
}
```

## webpack 打包过程

- `compile` 开始编译
- `make` 从入口点分析模块及其依赖的模块，创建这些模块对象
- `build-module` 构建模块
- `after-compile` 完成构建
- `seal` 封装构建结果
- `emit` 把各个chunk输出到结果文件
- `after-emit` 完成输出



### webpack 打包优化

1. noParse 不解析, 比如 lodash, jq, underscore 一般不依赖其他库
2. exclude 减少 loader 文件
3. happypack
4. dllPlugin
5. dev模式和product模式分开