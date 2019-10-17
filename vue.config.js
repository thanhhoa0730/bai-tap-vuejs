const webpack = require('webpack')
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				'$': 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
				'global.jquery': 'jquery',
				'global.jQuery': 'jquery',
				'global.$': 'jquery'
			}),
		]
	},
	lintOnSave: false,
	devServer: {
    	port: 20000
	},
}
