const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './components/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/build',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico)$/,
        use: 'file-loader?name=/images/[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/build'
  },
  stats: {
    colors: true
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.loginGateway': JSON.stringify(process.env.loginGateway),
      'process.env.baseUrl': JSON.stringify(process.env.baseUrl),
      'process.env.TOKEN_KEY': JSON.stringify(process.env.TOKEN_KEY),
      'process.env.apiBaseUrl': JSON.stringify(process.env.apiBaseUrl),
      'process.env.DEFAULTNOIMAGE': JSON.stringify(process.env.DEFAULTNOIMAGE),
      'process.env.OKAYIMAGE': JSON.stringify(process.env.OKAYIMAGE),
      'process.env.CLOUDNAME': JSON.stringify(process.env.CLOUDNAME)
    }),
  ],
  devtool: 'source-map'
};
