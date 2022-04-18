const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production;'//variavel JS que dis se o ambiente é de desenvolvimento ou de produção
//precisaa criar a variável NODE_ENV

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
      hot:true,
  },

  plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      })

  ].filter(Boolean),

  module: {
      rules: [
          {
             test: /\.jsx$/,
             exclude: /node_modules/,
             use: {
                 loader:'babel-loader',
                 options:{
                     plugins:[
                        isDevelopment && require.resolve('react-refresh/babel')
                     ].filter(Boolean),
                 }
             },
          },
          {
              test:/\.scss$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
          }
      ],
  }  

};
