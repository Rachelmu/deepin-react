const baseConfig = require('./webpack.config')

const src = './Vue/index.js'

baseConfig.entry = src

module.exports = baseConfig