const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    'app': './app.js',
    'index': './src/index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      { exclude: /node_modules/, test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  output: {
    path: path.join(__dirname, 'dst'),
    filename: '[name].js'
  }
}
