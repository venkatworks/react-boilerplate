const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000
  },
  resolve: { alias: { sinon: 'sinon/pkg/sinon.js' } },
  devtool: 'source-map'
})
