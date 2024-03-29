let webpack = require('webpack');
let path = require('path');

module.exports = {
  debug: true,
  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  devtool: 'cheap-module-source-map', //'inline-source-map'
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/client')
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src/client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src/client'), exclude: /node_modules/, loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /(\.less)$/, loader: 'style!css!less'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'},
      {test: /\.json$/, loader: 'json' }
    ]
  },
  resolve:{
    root: path.resolve('/'),
    //we use shared directory as module directory so we don't need to add ../../..
    modulesDirectories: ['src', 'shared', 'node_modules']
  }
};
