const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    disableHostCheck: true,
  },
})
