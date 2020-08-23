const nodeExternals = require('webpack-node-externals'),
  path = require('path');

module.exports = {
  entry: {
    server: './index.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false  // and __filename return blank or /
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx','.scss']
  }
};
