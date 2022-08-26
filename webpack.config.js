const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

require('dotenv').config()

module.exports = {
  // Entry point that indicates where
  // should the webpack starts bundling
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, //checks for .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Options for resolving module requests
  // extensions that are used
  resolve: {
    alias: {
      services: path.resolve(__dirname, 'src/services/'),
      libs: path.resolve(__dirname, 'src/libs/'),
      views: path.resolve(__dirname, 'src/views/'),
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],

  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}
