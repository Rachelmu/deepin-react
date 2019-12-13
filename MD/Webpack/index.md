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

