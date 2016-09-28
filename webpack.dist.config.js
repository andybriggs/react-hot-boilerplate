var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css!sass")
    },
    { test: /\.(jpg|jpeg|gif|png)$/,
      loader: 'url-loader?limit=2000&name=img/[name].[ext]'
    }]
  }
};
