const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const Autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                // ...
                // Importing Ant here is not needed if you are using a .babelrc file
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es', // or "lib" for default
                    // No "style" setting
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:7].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      // Include less-loader (exact settings may deviate depending on your building/bundling procedure)
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        issuer: {
          exclude: /\.less$/,
        },
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [Autoprefixer()],
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      // Define a second rule for only being used from less files
      // This rule will only be used for converting our sass-variables to less-variables
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: [
          {
            loader: require.resolve('./sassVarsToLess.js'), // Change path if necessary
          },
        ],
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: path.resolve(__dirname, './src/favicon.ico'),
      minify: true,
    }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
}
