var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/app.ts',
    'vendor': './src/vendor.ts'
  },
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loader: 'css-loader' },
    ],
    noParse: [ /angular2\/bundles\/.+/ ]
  },

  devServer: {
    historyApiFallback: true
  }
};
