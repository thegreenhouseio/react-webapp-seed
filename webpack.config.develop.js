const commonConfig = require('./webpack.config.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  // debug: true,
  // devtool: 'cheap-module-source-map',

  // tslint: {
  //   emitErrors: false,
  //   failOnHint: false,
  //   resourcePath: 'src'
  // },

  devServer: {
    port: 4567,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: commonConfig.output.path,
    proxy: {
      '/api.github.com/*': {
        target: 'http://api.github.com/',
        secure: false,
        changeOrigin: true
      }
    }
  }

});