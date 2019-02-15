const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    port: 9000,
    inline: true
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: { alias: { sinon: 'sinon/pkg/sinon.js' } },
  devtool: 'source-map'
})
