const { smart } = require('webpack-merge')

const base = require('./webpack.base')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
    hot: true
  },
  devtool: '#sourcemap'
}

module.exports = smart(base, devConfig)