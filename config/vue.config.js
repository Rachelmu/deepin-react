const baseConfig = require('./webpack.dev.js')

const src = './Vue/index.js'

baseConfig.entry = src

module.exports = baseConfig