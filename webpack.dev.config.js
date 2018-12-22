const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

const pathResolver = pathName => path.resolve(__dirname, pathName);

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    pathResolver('src/index.tsx'),
  ],
  output: {
    path: pathResolver('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    compress: true,
    contentBase: path.resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
});
