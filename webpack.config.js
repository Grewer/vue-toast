const webpack = require('webpack')
const path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const {VueLoaderPlugin} = require('vue-loader')


module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
      ]
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
    path: path.resolve(__dirname, 'dist'),
    library: 'vue-toast',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}