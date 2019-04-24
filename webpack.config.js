const VueLoaderPlugin = require('vue-loader/lib/plugin'),
  env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: `${__dirname}/src/index.js`,
  output: {
    libraryTarget: 'umd',
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
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimize: true
  }
};
