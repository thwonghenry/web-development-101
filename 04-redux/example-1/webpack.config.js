const path = require('path');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: path.join('dist', 'bundle.js'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: ['node_modules'],
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
