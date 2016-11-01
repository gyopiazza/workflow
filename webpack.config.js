var webpack = require('webpack');
// var plugins = [];

// // if (process.argv.indexOf('--minimize') !== -1) {
//   plugins.push(new webpack.optimize.UglifyJsPlugin({
//     compress: true
//   }));
// // }

module.exports = {
  entry: './src/js/app.js',
  devtool: 'source-map',
  output: {
    path: './dist/js',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { enforce: "pre", test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};

