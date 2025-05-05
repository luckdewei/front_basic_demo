const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  optimization: {

  },
  output: {
    filename: '[name].[hash:4].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {},
  resolve: {},
  // loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // plugins
  plugins: [

  ]
}