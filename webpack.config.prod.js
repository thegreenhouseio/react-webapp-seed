const commonConfig = require('./webpack.config.common');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  debug: false,
  devtool: 'source-map',

  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  },

  plugins: [

    new WebpackMd5Hash(),
    new DedupePlugin(),

    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false
    })
  ]

});