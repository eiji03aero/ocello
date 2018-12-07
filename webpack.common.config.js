const webpack = require('webpack');
const path = require('path');

const pathResolver = pathName => path.resolve(__dirname, pathName);

module.exports = {
  devtool: 'source-map',
  entry: [
    pathResolver('src/index.tsx'),
  ],
  output: {
    path: pathResolver('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
