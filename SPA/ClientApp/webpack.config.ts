const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
  },
  output: {
    library: {
      name: 'MYAPP',
      type: 'var',
    },
    filename: 'app-client.js',
    path: path.resolve(__dirname, '../wwwroot/js'),
  },
};
