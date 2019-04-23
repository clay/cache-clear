const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MinifyPlugin()
  ]
};
