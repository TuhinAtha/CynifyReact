const path = require('path');
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath : '/'
	},
	devServer: {
     contentBase: './dist',
     port: 8181,
     inline : true,
     historyApiFallback: true,
     proxy: {
	      '/api/**': {
	        target: 'http://localhost:3000',
	        secure: false,
	        changeOrigin: true
	      }
	    }
	},
	/*module: {
		loaders: [
		{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-2']
			}
		},
		{ 
			test: /\.scss$/,
			loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
		}
		]
	}*/
	module: {
	    rules: [{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-2']
			}
		},{
	        test: /\.scss$/,
	        use: [
	          { loader: 'style-loader' },
	          { loader: 'css-loader' },
	          { loader: 'sass-loader' }
	        ]
	      }
	    ]
	}
};