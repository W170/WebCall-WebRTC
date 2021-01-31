const { merge } = require('webpack-merge')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon-magneto.png',
      outputPath: './img/',
      prefix: './img/',
      favicons: {
        appName: 'Magneto | Aplic Attraction System',
        appShortName: 'Magneto',
        appDescription: 'Aplic Attraction System',
        background: 'transparent',
        theme_color: '#13223a',
        lang: 'es-CO',
        orientation: 'natural',
      },
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  devtool: false,
})
