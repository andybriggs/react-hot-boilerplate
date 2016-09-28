var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css", { allChunks: true })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap!postcss")
    },
    { test: /\.(jpg|jpeg|gif|png)$/,
      loader: 'url-loader?limit=2000'
    }]
  },
  postcss: function () {
      return [autoprefixer({ browsers: [ 'last 2 versions' ] })];
  }
};
