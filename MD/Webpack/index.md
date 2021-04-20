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


## webpack概念
- 0配置
- 配置文件
- entry
- output
- mode
- loader
- plugin
- chunk 代码片段
- module 模块
- bundle 输出的资源文件

bundle/chunk/module关系
- module被处理后变成chunk, eval('文件内容就是chunk')
- chunks可以对应多个模块
- 一个bundle对应一个chunks

## webpack 前端项目工程化

- pc or mobile
  - 移动端 spa
    - ssr
  - pc mpa
  - 兼容性 需要兼容的浏览器和版本
- 多人 or 单人
  - 代码规范
    - prettier
    - eslint
- 技术栈
  - vue
  - react
  - 样式预处理器
  - 是否TS or babel-es6+
  - 模板引擎
    - ejs
    - pug
  - 第三方字体(版权问题)普惠体
- 工具类
  - 安装依赖包
    - 切换国内源
    - 工程内创建.npmrc (registry=https://registry.npm.taobao.org)
- 提交规范
