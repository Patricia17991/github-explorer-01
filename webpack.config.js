const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production;'//variavel JS que dis se o ambiente é de desenvolvimento ou de produção

module.exports = {
  mode: isDevelopment ?'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },

  resolve: {
      extensions: ['.js', '.jsx'],
  },

  devServer: {
      static: path.resolve(__dirname, 'public'),
  },

  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      })

  ],

  module: {
      rules: [
          {
             test: /\.jsx$/,
             exclude: /node_modules/,
             use: 'babel-loader',
          }
      ],
  }

};
