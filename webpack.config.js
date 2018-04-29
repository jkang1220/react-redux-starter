const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'client/src'),
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
