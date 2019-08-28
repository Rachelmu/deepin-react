const path = require('path'),
	webpack = require('webpack'),
	PnpWebpackPlugin = require('pnp-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
				{
					test: /\.js$/,
					use: 'babel-loader'
				},
				{
					test: /\.styl$/,
					use: [
						'style-loader',
						'css-loader',
						'stylus-loader'
					]
				},
				{
					test: /\.vue$/,
					use: 'vue-loader'
				},
				{
					test: /\.(jpg|jpeg|webp|png|gif)$/,
					use: [
							{
									loader: 'url-loader',
									options: {
											limit: 10000,
									},
							}
					],
			},
			{
					test: /.(eot|svg|ttf|woff|woff2)$/,
					use: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		plugins: [PnpWebpackPlugin]
	},
	resolveLoader: {
		plugins: [
			PnpWebpackPlugin.moduleLoader(module)
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}

module.exports = config