const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.conf.js'),
          },
        },
      },
      {
				// file-loader : 모듈의 내용을 그대로 복사해 dist 폴더 밑에 복사본을 만들고 
        // 모듈을 사용하는 쪽에 해당 모듈의 경로를 넘겨줌
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
