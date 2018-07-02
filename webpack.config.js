const webpack = require('webpack')
const path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');




module.exports = {
  module: {
    rules: [ {
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',

      options: {
        presets: ['env', {
          modules: false
        }],
        plugins: ['syntax-dynamic-import']
      }
    }]
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      name: true,

      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
}