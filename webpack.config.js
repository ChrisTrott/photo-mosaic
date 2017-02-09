var path = require('path');

const config = {
  entry: './js/client.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      }
    ]
  }
};

module.exports = config;
